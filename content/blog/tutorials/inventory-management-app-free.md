+++

author = "Ronan McQuillan"
date = 2023-06-23
description = "Check out our quick tutorial on building an inventory management app - for free"
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_App_h3fmp7.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_App_h3fmp7.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build an Inventory Management App for Free in 20 Minutes"

+++

Keeping track of stock is one of the most fundamental processes in any customer-facing business. Today, we’re checking out how to build a custom inventory management app for *free* - in just 20 minutes.

Even better, since we’re going to use Budibase to build it, you’ll barely need any coding skills - and we’ll have a fully functional application before your coffee gets cold.

All we need to do is connect our data, add a couple of custom queries, and start using Budibase’s built-in components to create a professional UI for managing stock levels.

Let’s jump right in.

## What are we building?

Our inventory management tool is going to be a one-screen app, but don’t let this fool you. It’s actually going to pack quite a punch. 

In terms of requirements, we basically want to enable our end users to do five things:

1. Browse products based on their category.
2. Edit product information.
3. Search for items based on their name.
4. Check which items are low on stock.
5. Reorder stock where necessary.

Under the hood, we’re querying three tables from an existing MySQL database. 

Along with Budibase’s native *read* functionality, we’ll also need three custom queries.

But don’t worry if you’re not a SQL whizz - we’ll provide all of the code you need below and show you exactly how to use it.

Without further ado…

{{< youtube 5p4Vwv1xQl0 >}}

## How to build a free inventory management app in 7 steps

If you haven’t already, you’ll need to sign up for a Budibase account. Our pricing structure is the most generous in the low-code space, and you can do everything you need to build and deploy a fully-functioning inventory management tool with our free tier.

### 1. Create a new app

We’ll start by hitting *create new app* on the Budibase portal. Then press *start from scratch*. You’ll be prompted to choose a name and URL for your new app project:

![Inventory Management App Free](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_1_g9ypuk.webp "Inventory Managemet App Free")

Then, we’ll be asked to select our data source. Budibase offers a market-leading range of external data connectors, as well as our own built-in database.

We’re going to choose MySQL, but you can go with whatever option matches up with where your inventory data lives.

![Choose a data source](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_2_dp8nz6.webp "Choose a data source")

### 2. Connect your data

Now, we need to add our database credentials, including the *host*, *port*, *database,* and our *login details*.

![Connect to MySQL](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_3_udq7nh.webp "Connect to MySQL")

Once we’ve done this, we can use Budibase’s *fetch tables* functionality to access our tables from the *data* tab of the builder.

Once we’ve done this, the tables will look like this in the back end:

![Inventory Management Database](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_App_4_llpjir.webp "Inventory Management Database")

Already, we can edit entries without writing queries, using our spreadsheet-like interface.

However, we’ll need some slightly more advanced logic in our data layer to achieve our desired functionality.

### 3. Add custom queries

This means adding some custom queries. If you’re not familiar with SQL, basically a query is an instruction to retrieve information from our database in a particular format - perhaps by applying some transformations or filters.

Remember, our three tables are *products, inventories*, and *reorders*.

We also need three custom queries to:

1. Return a list of our product categories, without any duplicates.
2. Return our product information from the *products* table, along with their respective stock levels from the *inventories* table.
3. Return the total number of items that have been *reordered* for each product entry.

From our MySQL configuration page, we’ll start by hitting *add query*:

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1687525691/cms/inventory-management-app/Inventory_Management_App_5_btn0dh.webp "Fetch Tables")

This presents us with the following options:

- **Query name** - what we’ll call our query within Budibase.
- **Function** - the type of action we’re performing.
- **Access level** - which user roles can use our query.
- **Fields** - where we’ll input our SQL query itself.
- **Transformer** - any JavaScript we want to apply to the data returned by our query before we pass it to Budibase’s front-end or automation builder.

![Custom Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1687525690/cms/inventory-management-app/Inventory_Management_6_km7a5s.webp "Custom Queries")

All of our queries use the *read* function. Other than that, all we need to worry about is giving our query a name and pasting the SQL that we’ll provide in a second.

So first, we want to return a list of our product categories. We’ll use a SELECT statement, with a GROUP BY clause to achieve this. Specifically:

{{< highlight SQL "linenos=inline" >}}

SELECT category FROM Products GROUP BY category;

{{< /highlight >}}

This returns all of the *category* values from our *Products* table, but groups all the duplicates together, returning:

![Result](https://res.cloudinary.com/daog6scxm/image/upload/v1687525691/cms/inventory-management-app/Inventory_Management_7_dczepg.webp "Result")

Next, we have a query that returns the details of each row from the *products table*, along with the stock level from their respective entries in the *inventories* table.

We’ll use the following query:

{{< highlight SQL "linenos=inline" >}}

SELECT SUM(Quantity) as TotalQuantity, 

 Inventory.ProductID as ProductID,

 Products.ProductName as ProductName,

​	Products.Description as Description,

​	Products.Image as Image,

​	Products.Category as Category

FROM Inventory

JOIN Products ON Inventory.ProductID = Products.ProductID

GROUP BY Inventory.ProductID

{{< /highlight >}}

This looks a little bit more complex, but really our query does two things:

- Tells SQL to retrieve the product details from our *products* table and the quantity from the *inventories* table, and gives the returned values slightly more concise names.
- States that entries in the *products* and *inventories* tables with the same *ProductID* attribute are the same item.

Giving us:

![Inventory Management App Free](https://res.cloudinary.com/daog6scxm/image/upload/v1687525692/cms/inventory-management-app/Inventory_Management_8_f1q0b1.webp "Inventory Management App Free")

Finally, we want to query our *reorders* table, aggregating all of the quantities for each product. So - if we two users had reordered 10 Welding Masks each, the total quantity returned would be 20.

We’ll use this query:

{{< highlight SQL "linenos=inline" >}}

SELECT ProductID, SUM(Quantity) as TotalQuantity

FROM Reorders

WHERE Status = 'Requested'

GROUP BY ProductID

{{< /highlight >}}

This returns:

![Query Response](https://res.cloudinary.com/daog6scxm/image/upload/v1687525692/cms/inventory-management-app/Inventory_Management_9_n2rzzy.webp "Query Response")

And that’s all of our custom queries in place. We’ll return to these later when it comes time to actually use them.

For now, we can start building our free inventory management app’s UI.

### 4. Build a category list

The bulk of our UI will be based around clickable cards for each individual product - sorted into different categories. 

We’ll start by adding a *repeater block* which we’ll set to our *categoryList* custom query. Inside this, we’ll place a *cards block* named *ProductBlock* with the following settings:

- **Title -** {{ Category List.CategoryList.category }}
- **Data** - Products
- **Cards Titles -** {{ ProductBlock.Products.ProductName }}
- **Subtitle** - {{ ProductBlock.Products.Category }}
- **Description** - {{ ProductBlock.Products.Description }}
- **Image** - {{ ProductBlock.Products.Image }}

We’ve also added a filter expression so that the *Category* attribute for each card needs to match the current *category* from our repeater block.

![Inventory Management App Free](https://res.cloudinary.com/daog6scxm/image/upload/v1687525692/cms/inventory-management-app/Inventory_Management_10_bfc5cv.webp "Inventory Management App Free")

And the whole thing should look like this:

![Cards Repeater](https://res.cloudinary.com/daog6scxm/image/upload/v1687525691/cms/inventory-management-app/Inventory_Management_11_m1soa6.webp "Cards Repeater")

### 5. Create a side panel

Now, we want users to be able to interact with the data we’re displaying here. Specifically, they need to be able to update entries in our *products* database. We want to stick to a one-screen design though.

So, the best option is adding a side panel form that pops up when we click on one of our cards.

We’ll start by adding a *side panel* component - which we’ll name *ProductDetails*. This is basically a design container that only shows up when we tell it to.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1687525690/cms/inventory-management-app/Inventory_Management_12_iysxxz.webp "Side panel")

So next, we need to set up a trigger for our side panel to appear. This is going to be when someone clicks on a card. So, we’ll return to our cards block and hit *define actions*.

And we can add the *Open Side Panel* action.

![Open Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1687525691/cms/inventory-management-app/Inventory_Management_13_ycsrbj.webp "Open Side Panel")

While we’re here, we need to add another action to set a *state*. Essentially, we’re going to place an *update* form in our side panel, so we need to tell Budibase to load the data for the row that we’ve clicked on.

To do this, we’ll first add another on-click action before our side panel opens. This time we’re choosing *update state*. This lets us save a variable in the background. We’ll call it *current-product* and set it equal to {{ ProductBlock.Products.ProductID }}.

![State variables](https://res.cloudinary.com/daog6scxm/image/upload/v1687525692/cms/inventory-management-app/Inventory_Management_14_bk6ae3.webp "Set state")

Now when we click on a card, Budibase saves the relevant ProductID and then opens our side panel.

We’ll start by adding a *form block* nested within our side panel component. We need to set the *Type* to *Update* and then set the *Row ID* to {{ State.current-product }}. We’ll also give it a name so that it’s easy to identify in our component tree.

![Update Form](https://res.cloudinary.com/daog6scxm/image/upload/v1687525691/cms/inventory-management-app/Inventory_Management_15_zobn0o.webp "Update form")

Already, we have a fully functional update form. But, it could look a little bit snazzier for sure. 

Let’s start by adding a new data provider to pull the information for our product. Inside, we’ll add a *headline* component and an image. The headline has its *Text* field set to:

{{ ProductDetailProvider.Rows.0.ProductName }} ({{ ProductDetailProvider.Rows.0.Category }})

And the image has its *URL* as {{ ProductDetailProvider.Rows.0.Image }}. The whole thing looks like this:

![Inventory Management UX](https://res.cloudinary.com/daog6scxm/image/upload/v1687525693/cms/inventory-management-app/Inventory_Management_16_fgwdxq.webp "inventory management UX")

We’ll make one more small change to this later, but for now, that’s our side panel UI complete.

### 6. Add a search bar

The next thing we need to build is our product search functionality. The way this works is pretty simple. We’ll provide users with a text field where they can enter the name of the product they’re looking for.

If they do this, we’ll filter our cards block to show any products that match this.

So, we’ll start by adding the following new components:

- **A container** - to hold everything in a neat fashion.
- **A headline** - purely for UX.
- **A form** - all form components need to be nested in a form.
- **A text field** - where users can enter their desired product.

Altogether, this will look like this:

![Search Bar](https://res.cloudinary.com/daog6scxm/image/upload/v1687525692/cms/inventory-management-app/Inventory_Management_17_fljgbt.webp "Search Bar")

We’ll also set an action on our text field to save the value that users enter. So, we’ll use the *Update State* action to record whatever they type in with the key *search-value*:

![user defined filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_18_fr0gq1.webp "user defined filtering")

But, nothing will happen when users type in a product name. For this, we’ll need to update our filtering expression on our cards block from earlier.

Under *define filters* we’ll add a second expression. This time, we want to display any products where the *ProductName* attribute is *like* our *search-value* state:

![Inventory Management App Free](https://res.cloudinary.com/daog6scxm/image/upload/v1687525689/cms/inventory-management-app/Inventory_Management_19_mfmowr.webp "Inventory Management App Free")

Now we have fully working search functionality.

### 7. Low-stock notifications

The last thing we want to build is our low-stock notifications. Remember, we wrote a custom query earlier that’s going to do most of the legwork for us here. We’ll add another container to keep things tidy.

Inside this, we’ll place:

- A data provider set to our LowStockQuery.
- A headline.
- A repeater to access the values from our LowStockQuery provider.
- A form, so that we can update our *reorders* data with user actions.
- A second data provider, set to our custom Reorder query.
- A cards block.

The finished product will look like this:

![Stock Management](https://res.cloudinary.com/daog6scxm/image/upload/v1687525693/cms/inventory-management-app/Inventory_Management_20_j0hp9k.webp "Stock management")

Most of our cards’ fields are set to the basic product details, but the title is:

{{< highlight javascript "linenos=inline" >}}

{{ LowStockRepeater.LowStockQuery.ProductName }} ({{ LowStockRepeater.LowStockQuery.TotalQuantity }} left) {{ #if Reorder Provider.Rows.0.TotalQuantity }}[ {{ Reorder Provider.Rows.0.TotalQuantity }} on order]{{ /if }}

{{< /highlight >}}

This looks a bit more complex, so it’s worth breaking down. The first two handlebar expressions display the product name, followed by the remaining stock levels in parenthesis. 

The second expression uses a conditional to check if any reorders for this product exist. If so, we display the relevant number in square brackets.

The card component also has a button, with two actions. First, it adds a new row to the *reorders* table, with the *productID* set to the relevant data from the card, and the *quantity* set to *10*. We then set the button text to *order 10 more*.

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1687525690/cms/inventory-management-app/Inventory_Management_21_ikqueg.webp "Button Actions")

Now, users can directly order new stock, but they can also see if someone else has already done so.

And that’s our free inventory management app completed. We could tweak the design a little bit more if we wanted to, but otherwise, we’re ready to publish and send our tool to users.

You can also check out our guide to building a [SQL GUI](https://budibase.com/blog/tutorials/sql-gui/).

{{< cta >}}

## Turn data into action with Budibase

At Budbase, we’re on a mission to help teams turn data into action. Businesses around the world choose our open-source, low-code platform to build all kinds of custom web apps, at pace.

Here’s what makes Budibase tick.

### Our open-source, low-code platform

Our design ethos is *simplicity by default; extensibility when you need it.* Our platform offers intuitive design tools, extensive customization, market-leading data support, autogenerated UIs, and much more.

Check out our [features overview](https://budibase.com/product) to learn more.

### External data support

Budibase leads the pack for external data support. We offer dedicated connectors for MySQL, SQL Server, Postgres, Airtable, S3, Mongo, Arango, Oracle, Couch, Redis, REST API, Google Sheets, and more.

We’ve even got our own built-in database to help get you up and running in seconds.

### Optional self-hosting

Security-conscious organizations love Budibase for the power to deploy their tools however they choose. We offer optional self-hosting through Kubernetes, Docker, Digital Ocean, Portainer, and more.

Or, use Budibase Cloud and let us handle everything. Check out our [pricing page](https://budibase.com/pricing) to learn more.

### Automations & integrations

Budibase makes it a breeze to automate all kinds of workflows and processes. Use our flow-based editor to combine built-in triggers and actions to create your perfect automations, with minimal coding skills.

We also offer extensive third-party app integrations, using webhooks, Zapier, REST API, and more.

### Role-based access control

Use our native role-based access control to tailor users’ data exposure without compromising on experiences. Add users to defined roles and grant permissions based on data sources, queries, automations, app screens, or individual components.

We also offer free SSO through OpenID, OAuth, Microsoft, and more.

### Custom plug-ins

Budibase is the clear leader for extensibility in the low-code space. Build your own components, data sources, and automation blocks with our dedicated CLI tools - or import community contributions from GitHub at the click of a button.

Check out our custom [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free application templates

Our users choose Budibase to build all kinds of internal tools, web apps, and utilities, in minutes, not months. We’ve even built more than fifty free, customizable [app templates](https://budibase.com/templates) to help get you started.

Sign up to Budibase today to start building professional applications for free.
