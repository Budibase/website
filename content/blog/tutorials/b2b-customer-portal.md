+++
author = "Ronan McQuillan"
date = 2024-03-28
description = "Learn to build a B2B customer portal in Budibase."
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1711638117/cms/b2b-customer-portal/B2B_Customer_Portal_87_gr1qz1.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a B2B Customer Portal in 6 Steps"

+++

Managing B2B sales is quite a bit different from selling to the public. This can present challenges, including managing communications, securely hosting product information, and effectively handling inventories and fulfillment.

Today, we’re looking at one solution - building a custom B2B portal.

Most often, business customers don’t have the same priorities as typical consumers. Above all, they want a fast, secure way to order from trusted suppliers.

That’s where portals come in.

We’re building a secure, gated solution where external users can create, manage, and process orders - as well as manage their own internal accounts.

By the end, we’ll have a fully functioning customer portal that we can deploy to the cloud or on our own infrastructure.

Even better, with Budibase, we’ll have a working solution in a fraction of the time it would take us with traditional development tools.

But before we jump in…

## What is a B2B customer portal?

At the most basic level, a B2B customer portal is an interactive web app where external users can access our products and services.

Of course, the specifics of this can look quite a bit different depending on our specific business model.

Some of the most common features include product catalogs, order processing and management, communications, payment handling, and more.

On top of this, we’ll need tools for internal users to manage related tasks and processes, as well as monitoring activity.

Therefore, a successful portal must offer appropriate UX, functionality, and data exposure for different kinds of users - based on the specific tasks they need to perform.

So…

## What are we building?

We’re building a customer portal for a B2B company selling physical products.

This will be centered around an internal product catalogue where customers can browse, search, view, and order products. They’ll also be able to view and track their orders - or update their account information.

Internal users will be able to carry out a range of administrative functions related to product, order, and customer data.

{{< vimeo id="928427483" title="B2B Customer Portal" >}}

We’re going to build all of this on an existing PostgreSQL database representing our inventory. We’ll provide the necessary queries to create and populate each of our database tables a little later so you can build with us.

We’ll also make extensive use of Budibase’s built-in RBAC system to provide experiences that are fully tailored to the needs of individual user groups.

Let’s jump in.

## How to build a B2B customer portal in 6 steps

If you haven’t already, sign up for a free Budibase account to start building as many apps as you want, using just about any kind of existing data.

{{< cta >}}

The first thing we’ll need to do is create a new Budibase application. We can choose a pre-built template or import an existing app file, but today, we’re going to start from scratch.

When we choose this option, we’re prompted to give our app a name and URL extension. We’re going to call ours B2B Customer Portal.

![New App](https://res.cloudinary.com/daog6scxm/image/upload/v1711637832/cms/b2b-customer-portal/B2B_Customer_Portal_1_k1vsyw.webp "New app")

## 1. Setting up our data model

Once our app is created, we need to choose which kind of data source we’d like to connect it to. Budibase offers dedicated connectors for relational databases, NoSQL tools, APIs, Google Sheets, and more - alongside our built-in low-code database.

When we connect to external databases, Budibase acts as a proxy, querying your data without directly storing it.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1711637832/cms/b2b-customer-portal/B2B_Customer_Portal_2_ef0xso.webp "Data Sources")

As we said earlier, we’re going to connect to a Postgres database.

When we select this, we can input our database credentials - either manually or using details we’ve stored as secure environment variables within Budibase.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1711637833/cms/b2b-customer-portal/B2B_Customer_Portal_3_b6a217.webp "Config")

Then, we’re asked to choose which of our database’s constituent tables we’d like to fetch, making them queryable within Budibase.

We’re fetching tables called customers, order_items, orders, and products. We’ll examine each of these in more detail in a second - as well as providing queries to create them in your own database.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1711637833/cms/b2b-customer-portal/B2B_Customer_Portal_4_galtnr.webp "Fetch Tables")

Here’s how our customers table will look in Budibase’s Data section. We can already alter its schema or stored values using our spreadsheet-like interface.

![Database](https://res.cloudinary.com/daog6scxm/image/upload/v1711637834/cms/b2b-customer-portal/B2B_Customer_Portal_5_vpfhlo.webp "Database")

This stores attributes called company_name, contact_person_name, contact_phone, contact_email, address, postal_code, city, state, country, and customer_id.

We can create and populate this table with the following query:

{{< highlight sql "linenos=inline" >}}

CREATE TABLE Customers (

  customer_id SERIAL PRIMARY KEY,

  company_name VARCHAR(255),

  contact_person_name VARCHAR(255),

  contact_email VARCHAR(255),

  contact_phone VARCHAR(20),

  address VARCHAR(255),

  city VARCHAR(100),

  state VARCHAR(100),

  country VARCHAR(100),

  postal_code VARCHAR(20)

);

INSERT INTO Customers (company_name, contact_person_name, contact_email, contact_phone, address, city, state, country, postal_code)

VALUES

  ('ABC Company', 'John Doe', 'john@example.com', '1234567890', '123 Main St', 'Anytown', 'State', 'Country', '12345'),

  ('XYZ Corporation', 'Jane Smith', 'jane@example.com', '9876543210', '456 Oak Ave', 'Othertown', 'State', 'Country', '67890');

{{< /highlight >}}

Next, we have a table called products. This stores attributes called product_name, price, description, category, image, and product_id.

We can create it with this query.

{{< highlight sql "linenos=inline" >}}

CREATE TABLE Products (

  product_id SERIAL PRIMARY KEY,

  product_name VARCHAR(255),

  description TEXT,

  price DECIMAL(10, 2),

  category VARCHAR(100),

  image VARCHAR(255)

);

INSERT INTO Products (product_name, description, price, category, image)

VALUES

  ('Widget', 'A high-quality widget for all your needs', 29.99, 'Widgets', 'https://source.unsplash.com/600x600/?widget'),

  ('Gadget', 'The latest gadget with advanced features', 49.99, 'Gadgets', 'https://source.unsplash.com/600x600/?gadget'),

  ('Tool', 'Essential tool for DIY enthusiasts', 39.99, 'Tools', 'https://source.unsplash.com/600x600/?tool');

{{< /highlight >}}

![Products](https://res.cloudinary.com/daog6scxm/image/upload/v1711637834/cms/b2b-customer-portal/B2B_Customer_Portal_6_mrlisa.webp "Products")

Our orders table contains columns called order_id, customer_id, order_status, total_amount, and order_Date.

We can create it using this query.

{{< highlight sql "linenos=inline" >}}

CREATE TABLE Orders (

  order_id SERIAL PRIMARY KEY,

  customer_id INT,

  order_date DATE,

  total_amount DECIMAL(10, 2),

  order_status VARCHAR(50),

  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)

  -- Add other relevant columns as needed

);

INSERT INTO Orders (customer_id, order_date, total_amount, order_status)

VALUES

  (1, '2024-01-15', 99.99, 'Pending'),

  (2, '2024-02-20', 149.99, 'Completed');

{{< /highlight >}}

![Orders](https://res.cloudinary.com/daog6scxm/image/upload/v1711637888/cms/b2b-customer-portal/B2B_Customer_Portal_7_aduy29.webp "Orders")

Lastly, the columns for our order_items table are order_item_id, quantity, price, total_price, order_id, and product_id.

{{< highlight sql "linenos=inline" >}}

CREATE TABLE Order_Items (

  order_item_id SERIAL PRIMARY KEY,

  order_id INT,

  product_id INT,

  quantity INT,

  unit_price DECIMAL(10, 2),

  total_price DECIMAL(10, 2),

  FOREIGN KEY (order_id) REFERENCES Orders(order_id),

  FOREIGN KEY (product_id) REFERENCES Products(product_id)

);

INSERT INTO Order_Items (order_id, product_id, quantity, unit_price, total_price)

VALUES

  (1, 1, 2, 29.99, 59.98),

  (2, 2, 1, 49.99, 49.99),

  (2, 3, 3, 39.99, 119.97);

{{< /highlight >}}

![Order Items](https://res.cloudinary.com/daog6scxm/image/upload/v1711637944/cms/b2b-customer-portal/B2B_Customer_Portal_8_kpjb8b.webp "Order Items")

### Schema changes

Before we move on to building our B2B customer portal’s UIs, we will make a few changes to our database tables.

First of all, we want to link the customers table to Budibase’s internal Users table. That way, we can relate each customer to one of our app’s users. This will enable us to personalize the data they can access across our portal.

So, on the customers table, we’ll add a column using the plus icon. We’ll call this bb_user and select the User data type.

![User](https://res.cloudinary.com/daog6scxm/image/upload/v1711637944/cms/b2b-customer-portal/B2B_Customer_Portal_9_obn3sz.webp "User")

Then, we’ll assign ourselves to one of the rows for testing purposes.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711637945/cms/b2b-customer-portal/B2B_Customer_Portal_10_lp5mjd.webp "B2B Customer Portal")

The other tweaks we’ll make are more minor - but they’ll make our lives easier later.

There are several VARCHARs in our schema where we only want users to be able to choose from a defined list of options. These are the order_status attribute in our orders table and the category attribute in our products table.

We’re going to update these so that they have the Options data type. We can then input the possible options for each.

For status, our options will be Pending and Completed.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1711637945/cms/b2b-customer-portal/B2B_Customer_Portal_11_lrl51t.webp "Options")

And for category, we’ll use each unique value that’s already in our table - so, Furniture, Electronics, Gadgets, Tools, and Widgets.

![Category](https://res.cloudinary.com/daog6scxm/image/upload/v1711637946/cms/b2b-customer-portal/B2B_Customer_Portal_12_uv6hhk.webp "Category")

### Defining relationships

The last thing we need to do is configure the relationships between our tables. There are attributes throughout our data tables that correspond to the ID attributes in other tables.

We can hit Define Relationships to configure these joins.

So first, we’ll link one row on the orders table to many rows on the customers table, using the customer_id attribute in each.

![Relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1711637947/cms/b2b-customer-portal/B2B_Customer_Portal_13_gmlc23.webp "Relationships")

Now, we can see the relevant customers row displayed within our orders table.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1711637947/cms/b2b-customer-portal/B2B_Customer_Portal_14_rtgtul.webp "Table")

Next, we’ll link many rows in our order_items table to one row in our orders table using the order_id attribute.

![Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1711637948/cms/b2b-customer-portal/B2B_Customer_Portal_15_veegrz.webp "Relationship")

Lastly, we’ll like many order_items rows to one products row using the product_id attribute.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1711637949/cms/b2b-customer-portal/B2B_Customer_Portal_16_xfcqiy.webp "Table")

And that’s our data model ready to go.

## 2. Building a product catalogue

We can start building our UIs. 

Head to Budibase’s Design section, and we’ll be offered several options for creating our first screen. We can use one of several autogenerated layouts, but this time, we’re going to start with a blank screen.

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1711637949/cms/b2b-customer-portal/B2B_Customer_Portal_17_mvo1iu.webp "New Screen")

We’re prompted to give our screen a URL slug. We’ll call ours /catalogue.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1711637951/cms/b2b-customer-portal/B2B_Customer_Portal_18_ogkjii.webp "URL")

Then, we’re asked to choose a minimum role that will be required to access this screen. We’re leaving this set to the default option of Basic.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1711637951/cms/b2b-customer-portal/B2B_Customer_Portal_19_vbcmmk.webp "RBAC")

Here’s our blank screen.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1711637951/cms/b2b-customer-portal/B2B_Customer_Portal_20_fyzo2q.webp "Blank Screen")

We’ll use the plus icon on the left to add a component called a Cards Block. This is a preconfigured set of elements that iterate over a connected data source and display configurable cards for each row.

We’ve pointed ours at the products table and given it a descriptive title.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1711637953/cms/b2b-customer-portal/B2B_Customer_Portal_21_uewklv.webp "Cards")

Next, we want to configure the information that each card will display. Each one accepts a title, subtitle, description, and image URL. We’ll bind these to relevant values from our products table.

Hit the lightning bolt next to the Card Title field to open up the bindings drawer.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1711637953/cms/b2b-customer-portal/B2B_Customer_Portal_22_xxa1xz.webp "Bindings")

Here, we can see all of the clusters of data that our Cards Block is exposed to. We’re choosing Products Card Block to access all of the fields for the respective products rows for each card.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1711637954/cms/b2b-customer-portal/B2B_Customer_Portal_23_v5tdjd.webp "Cards")

And then the product_name attribute.

![Product Name](https://res.cloudinary.com/daog6scxm/image/upload/v1711637955/cms/b2b-customer-portal/B2B_Customer_Portal_24_i9082y.webp "Product Name")

Here’s how this will look.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1711637955/cms/b2b-customer-portal/B2B_Customer_Portal_25_qhejs8.webp "Bindings")

We’ll repeat this process to bind our subtitle to the category attribute, our description to description, and image URL to the image field.

This should look like this.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711637956/cms/b2b-customer-portal/B2B_Customer_Portal_26_t2o5iu.webp "B2B Customer Portal")

Then, we’ll select the Add Button option and set our Button Text to Quick Order.

![Button](https://res.cloudinary.com/daog6scxm/image/upload/v1711637957/cms/b2b-customer-portal/B2B_Customer_Portal_27_megml0.webp "Button")

Finally, we’ll add product_name and category as searchable columns.

![Search](https://res.cloudinary.com/daog6scxm/image/upload/v1711637958/cms/b2b-customer-portal/B2B_Customer_Portal_28_bw1kll.webp "Search")

That’s our catalogue UI basically done, at least from a design perspective. Here’s what it looks like in our app preview.

![catalogue](https://res.cloudinary.com/daog6scxm/image/upload/v1711637959/cms/b2b-customer-portal/B2B_Customer_Portal_29_vssr9j.webp "catalogue")

## 3. Adding an order form

Next, we’ll add a form to enable contractors to quickly order any of our products from the catalogue. This will open in a modal when a user clicks on any of our card buttons.

Before we build the form itself, we need to add a little bit of logic to store the information of the appropriate product. 

So, on our Cards Block, we’ll open the button actions drawer.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1711637959/cms/b2b-customer-portal/B2B_Customer_Portal_30_uosczg.webp "Actions")

Here, we’ll add an action called Update State. This stores a key/value pair that we can use elsewhere as a bindable value. We’re setting our key to productId and binding the value to the relevant row’s product_id attribute.

![id](https://res.cloudinary.com/daog6scxm/image/upload/v1711637960/cms/b2b-customer-portal/B2B_Customer_Portal_31_zvj9sz.webp "id")

Next, we’ll add a new screen. This time, we’re choosing the Form Layout.

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1711637961/cms/b2b-customer-portal/B2B_Customer_Portal_32_jwhruo.webp "Layouts")

This autogenerates a working form UI based on whichever data table we select.

We’re choosing the order_items table.

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1711637962/cms/b2b-customer-portal/B2B_Customer_Portal_33_spavzv.webp "Tables")

We then need to choose which kind of form we need. We want to create a row, so we’ll select this option.

![Create Row](https://res.cloudinary.com/daog6scxm/image/upload/v1711637962/cms/b2b-customer-portal/B2B_Customer_Portal_34_iloa7f.webp "Create Row")

We’ll also be asked to choose an access role, but we’re leaving this set to Basic again.

Here’s how our form looks out of the box.

![Form Ui](https://res.cloudinary.com/daog6scxm/image/upload/v1711637964/cms/b2b-customer-portal/B2B_Customer_Portal_35_uxxrps.webp "Form UI")

We’re going to make some pretty extensive changes to this. In fact, we’re going to need to create rows in two separate tables - both order_items and orders. We’ll also need to access information from the orders and products tables to populate all our values.

We’ll start by configuring the fields we want to display. We’re only going to accept user inputs for a single field - quantity. Everything else will be populated automatically.

We can start by deselecting all of our form fields except for quantity and unit_price.

![Order](https://res.cloudinary.com/daog6scxm/image/upload/v1711637964/cms/b2b-customer-portal/B2B_Customer_Portal_36_fcezpd.webp "Order Order")

We’ll also select the Disabled option on the unit_price field.

![disable](https://res.cloudinary.com/daog6scxm/image/upload/v1711637964/cms/b2b-customer-portal/B2B_Customer_Portal_37_ihmzvp.webp "disable")

Under Styles, we’ll set our Button Position to Top.

![Button Position](https://res.cloudinary.com/daog6scxm/image/upload/v1711637965/cms/b2b-customer-portal/B2B_Customer_Portal_38_hpbsre.webp "Button Position")

Before we go any further, we need to be able to access relevant data from the products and customers table. We can do this by adding two Data Provider components.

These accept a data source and expose other components on the screen to the stored information as bindable values.

We’ll create one for the products table and one for customers.

![Data Providers](https://res.cloudinary.com/daog6scxm/image/upload/v1711637966/cms/b2b-customer-portal/B2B_Customer_Portal_39_k18c2p.webp "Data Providers")

These won’t be visible to end users.

However, by default, they’ll return all of the rows from their respective data tables. For our purposes, we need to add filtering expressions to select the relevant rows. 

Specifically, we want the products row that matches the item in our catalogue that a user clicked on and the customers row that relates to the current user.

We’ll open the filters drawer for our products Data Provider and add a rule based on the product_id attribute.

![Filters](https://res.cloudinary.com/daog6scxm/image/upload/v1711637967/cms/b2b-customer-portal/B2B_Customer_Portal_40_hdfmfd.webp "Filters")

Then, we’ll use the bindings menu to set our comparison value to {{ State.productId }}.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1711637967/cms/b2b-customer-portal/B2B_Customer_Portal_41_tdt3zw.webp "Filter")

We’ll follow the same process to filter our customers Data Provider to select the row where bb_user equals {{ Current User._id }}.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1711637977/cms/b2b-customer-portal/B2B_Customer_Portal_42_fbud2c.webp "Filter")

Now, we can carry on creating our order form UI.

We’re going to start by giving our form a more appropriate title. Specifically, we want this to read ‘Quick Order - ‘ followed by the name of the product.

We’ll open our bindings menu. Then, we’ll start by inputting our string and then selecting Products Data Provider.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1711637969/cms/b2b-customer-portal/B2B_Customer_Portal_43_btukqy.webp "Bindings")

To access specific values from our data providers, we need to specify the row index and the attribute name.

Since both of our data providers should only return a single row, the index will always be 0. So, to access the relevant products row, we can use {{ Products Data Provider.Rows.0.product_name }}.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1711637970/cms/b2b-customer-portal/B2B_Customer_Portal_44_yv6vrv.webp "Bindings")

Here’s how this looks.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711637970/cms/b2b-customer-portal/B2B_Customer_Portal_45_fiyaxl.webp "Form")

Next, we’ll repeat the same process to set the Default Value for our unit_price field to the price attribute from our products table.

![Default Value](https://res.cloudinary.com/daog6scxm/image/upload/v1711637971/cms/b2b-customer-portal/B2B_Customer_Portal_46_f0hreq.webp "Default Value")

We want to use our Description field to dynamically show the total cost of our order based on the quantity that the user has specified.

We’ll open the Bindings Drawer for our Description, but this time, we’re selecting JavaScript so we can add some more complex logic.

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1711637972/cms/b2b-customer-portal/B2B_Customer_Portal_47_xfhgb9.webp "JavaScript")

If the quantity field is blank, our total cost will be $0. Otherwise, it will be the product of our quantity and unit_price fields. We also want to display this within a string.

So, the code we’re using is:

{{< highlight javascript "linenos=inline" >}}

var orderTotal = 0;

if ($("order_items - Multistep Form block.Fields.quantity") != null){

 orderTotal = $("order_items - Multistep Form block.Fields.quantity") * $("Products Data Provider.Rows.0.price")

}

return "Order Total: $" + orderTotal.toFixed(2);

{{< /highlight >}}

![JS](https://res.cloudinary.com/daog6scxm/image/upload/v1711637972/cms/b2b-customer-portal/B2B_Customer_Portal_48_yj1cwu.webp "JS")

We can see that this works with Budibase’s live evaluation functionality.

Before we go any further, we’ll also improve the UX of our form by replacing the default Label and Placeholder texts for our form fields with more human-readable copy.

![Display Texts](https://res.cloudinary.com/daog6scxm/image/upload/v1711637974/cms/b2b-customer-portal/B2B_Customer_Portal_49_nskopv.webp "Dsiplay Texts")

Lastly, we need to make some adjustments to what will happen when a user hits Save.

Currently, this will save a row to our order_items table based on the values included in our form fields.

We need to make changes to do three things:

1. Create a row in the orders table and populate the relevant values.
2. Populate the values in our order_items table that aren’t included in our form.
3. Close our modal screen.

Here’s what the current button actions look like.

![Button ACtion](https://res.cloudinary.com/daog6scxm/image/upload/v1711637974/cms/b2b-customer-portal/B2B_Customer_Portal_50_dpk5uj.webp "Button Action")

We need to add another Save Row action and place this second in the chain.

We’ll set our Data Source to our form and our Table to orders.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1711637975/cms/b2b-customer-portal/B2B_Customer_Portal_51_qnmjfq.webp "Save Row")

Then, we’ll hit Add Columns and choose order_date, order_status, customer_id, and total_amount.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1711638017/cms/b2b-customer-portal/B2B_Customer_Portal_52_x7kjvb.webp "Save Row")

As ever, we can use bindings to set values for these. We’ll set order_date to the following JavaScript expression.

{{< highlight javascript "linenos=inline" >}}

var date = new Date();

return date

{{< /highlight >}}

We’ll set order_status to Pending and bind customer_id to {{ Customers Data Provider.Rows.0.customer_id }}.

Lastly, we’ll use the following JavaScript expression to calculate our total_amount.

{{< highlight javascript "linenos=inline" >}}

return $("Products Data Provider.Rows.0.price") * $("order_items - Multistep Form block.Fields.quantity")

{{< /highlight >}}

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1711638018/cms/b2b-customer-portal/B2B_Customer_Portal_53_ngpui0.webp "Columns")

Next, we’ll select the Save Row action for our order_items table. Here, we’ll add columns for product_id, total_price, unit_price, and order_id.

We’ll set product_id to {{ State.productId }} and use the same JavaScript expression as before for total_price. Our unit_price is the price attribute from our products table.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1711638018/cms/b2b-customer-portal/B2B_Customer_Portal_54_pgixzu.webp "Columns")

For our order_id attribute, we need to access the relevant value from the orders row we created in the previous action.

So, within the bindings menu, we’ll select Action.

![Action](https://res.cloudinary.com/daog6scxm/image/upload/v1711638018/cms/b2b-customer-portal/B2B_Customer_Portal_55_aega2i.webp "Action")

And we’ll bind this to {{ Action 2.Saved row.order_id }}.

![Saved Row](https://res.cloudinary.com/daog6scxm/image/upload/v1711638066/cms/b2b-customer-portal/B2B_Customer_Portal_56_ygfvf7.webp "Save Row")

Lastly, we’ll add a Close Screen Modal action.

![Close Modal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638094/cms/b2b-customer-portal/B2B_Customer_Portal_57_ltkpx0.webp "Close Modal")

Back on our B2B customer portal’s catalogue screen, we’ll add a button action to navigate to our form, opening it in a modal.

![Navigate](https://res.cloudinary.com/daog6scxm/image/upload/v1711638095/cms/b2b-customer-portal/B2B_Customer_Portal_58_grun1m.webp "Navigate")

Now, we can preview our app to test that this works as we expect.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638095/cms/b2b-customer-portal/B2B_Customer_Portal_59_etmwvk.webp "B2B Customer Portal")

We can see that a row has been created in the order_items table.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1711638096/cms/b2b-customer-portal/B2B_Customer_Portal_60_qagn8o.webp "Data")

And a related row has been created in the orders table.

![Order](https://res.cloudinary.com/daog6scxm/image/upload/v1711638097/cms/b2b-customer-portal/B2B_Customer_Portal_61_aajwza.webp "Order")

## 4. Admin screens

Next, we can start building admin screens for our internal users. This will basically be CRUD UIs for a selection of our tables, although each one will need to be modified slightly to meet our needs.

We’ll start by hitting the plus icon to add screens again.

This time, we’re selecting the Table Layout with details panels.

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1711638098/cms/b2b-customer-portal/B2B_Customer_Portal_62_uzhcxe.webp "Layouts")

This will generate a working CRUD UI based on whichever data table we select.

We can create multiple screens at a time this way. So, we’re selecting the customers, orders, and products tables.

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1711638099/cms/b2b-customer-portal/B2B_Customer_Portal_63_zumw2g.webp "Tables")

Since these screens are intended for internal users, we’ll set our minimum access role to Power.

![Power](https://res.cloudinary.com/daog6scxm/image/upload/v1711638099/cms/b2b-customer-portal/B2B_Customer_Portal_64_iuzyg6.webp "Power")

Now, we have three new screens. Each one features a table with side-panel forms where users can create new entries or update existing ones.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638100/cms/b2b-customer-portal/B2B_Customer_Portal_65_htxsum.webp "B2B Customer Portal")

We simply want to configure these to match our requirements.

Let’s take each one in turn.

### Products

We’ll start with the products table. We want to retain more or less full CRUD functionality here, so we’re really only going to make a few UX improvements.

We’ll start with the table itself and then make a few changes to each of our forms.

First, we’ll capitalize our title.

![Products](https://res.cloudinary.com/daog6scxm/image/upload/v1711638101/cms/b2b-customer-portal/B2B_Customer_Portal_66_vudikf.webp "Products")

Then, we can configure which columns we want to display in our table. We’ve deselected image and order_items. We’ve also used the Label setting for each to update the headings of our remaining columns.

![Label](https://res.cloudinary.com/daog6scxm/image/upload/v1711638102/cms/b2b-customer-portal/B2B_Customer_Portal_67_e3dnvs.webp "Label")

For each of our forms, all we’ll do is deselect the order_items field and update our Label and Placeholder texts.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638103/cms/b2b-customer-portal/B2B_Customer_Portal_68_cl1kbj.webp "Form")

### Orders

We can follow a similar process with the orders table. However, don’t need to give our internal users full CRUD access this time - since there’s no need for them to create rows.

So, we’ll start by deleting our Button and New Row Side Panel components.

![Orders](https://res.cloudinary.com/daog6scxm/image/upload/v1711638104/cms/b2b-customer-portal/B2B_Customer_Portal_69_yotxdj.webp "Orders")

On our table, we’ll deselect the customer_id attribute and then update our display texts as before.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638104/cms/b2b-customer-portal/B2B_Customer_Portal_70_fubpts.webp "Form")

And we’ll do the exact same thing for our remaining form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638104/cms/b2b-customer-portal/B2B_Customer_Portal_71_trwecb.webp "Form")

### Customers

Our customers screen will also provide full CRUD functionality. On our table itself, the only fields we’ll display are company_name, customer_id, contact_person_name, contact_phone, and state.

![Customers](https://res.cloudinary.com/daog6scxm/image/upload/v1711638106/cms/b2b-customer-portal/B2B_Customer_Portal_72_mjfo1k.webp "Customers")

On the forms, we’ll include everything except for the orders field. We’ll also tidy up our display texts.

![Create Row](https://res.cloudinary.com/daog6scxm/image/upload/v1711638106/cms/b2b-customer-portal/B2B_Customer_Portal_73_qtkhkh.webp "Create Row")

And that’s our admin screens done.

## 7. Creating an orders screen for customers

The last screen we want to build is a UI where customers can view the status of their orders and update their company information.

We’ll start by adding another screen with the Table Layout and pointing it at our orders table. This time, however, we’re using Basic for our minimum access role.

We’ll deselect the customer_id and customers columns - and update our display texts.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638107/cms/b2b-customer-portal/B2B_Customer_Portal_74_r7wo2s.webp "B2B Customer Portal")

Now, we want to filter this table so that it only displays orders that are relevant to the current user. To do this, we’ll need to add a customers Data Provider again and filter it for the row where bb_user equals {{ Current User._id }}, just as we did before.

Then, we’ll add a filter to our Table so that it only displays the rows where customer_id equals {{ Customers Data Provider.Rows.0.customer_id }}.

![Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638108/cms/b2b-customer-portal/B2B_Customer_Portal_75_g5xcq0.webp "Portal")

Here’s how this will look.

![My Orders](https://res.cloudinary.com/daog6scxm/image/upload/v1711638109/cms/b2b-customer-portal/B2B_Customer_Portal_76_v872ag.webp "My Orders")

When a user clicks a row, we want them to be able to view the relevant data but not update it. So, in the existing form, we’ve changed the Type to View. We’ve also deselected the customer fields and updated our title.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638109/cms/b2b-customer-portal/B2B_Customer_Portal_77_ag6kaf.webp "Form")

Lastly, we don’t need our New Row form since we already have a form for creating orders elsewhere in our B2B customer portal.

Instead, we’re going to modify this so that customers can use it to update their company details.

We’ll start by changing the Data to customers and the Type to Update. We’ve also updated the component names for our Side Panel and Form Block.

![Customer Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638110/cms/b2b-customer-portal/B2B_Customer_Portal_78_drddfm.webp "Customer Form")

Since this is an Update form, we’ll need to specify a row. We can do this by binding the Row ID setting to {{ Customers Data Provider.Rows.0._id }}.

![Customer Form](https://res.cloudinary.com/daog6scxm/image/upload/v1711638111/cms/b2b-customer-portal/B2B_Customer_Portal_79_pksapp.webp "Customer Form")

Then, we’ll deselect the orders and bb_user fields, update our display texts, and remove our Delete button.

![Button Text](https://res.cloudinary.com/daog6scxm/image/upload/v1711638111/cms/b2b-customer-portal/B2B_Customer_Portal_80_kgmo1n.webp "Button Text")

Lastly, we’ll update the text of our Create Row button to reflect our new form.

![Button Text](https://res.cloudinary.com/daog6scxm/image/upload/v1711638113/cms/b2b-customer-portal/B2B_Customer_Portal_81_ra81lh.png "Button Text")

## 6. Design tweaks and publishing

Now, the core functionality of our B2B customer portal is complete. Before we push it live, we’re going to make a few final design tweaks.

First, under Navigation, hit Configure Links.

![Configure Links](https://res.cloudinary.com/daog6scxm/image/upload/v1711638113/cms/b2b-customer-portal/B2B_Customer_Portal_82_absef0.webp "Configure Links")

We’ll remove the entry for our order form and set the minimum roles for Customers and Products to Power.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1711638114/cms/b2b-customer-portal/B2B_Customer_Portal_83_wok7zd.webp "Nav")

Then, we’ll set Catalogue as our home screen.

![Home Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1711638118/cms/b2b-customer-portal/B2B_Customer_Portal_84_asqorx.webp "Home Screen")

Lastly, under Screen and Theme, we’re choosing Midnight.

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1711638116/cms/b2b-customer-portal/B2B_Customer_Portal_85_ddstot.webp "Theme")

When we’re ready, we can hit Publish to push our app live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1711638116/cms/b2b-customer-portal/B2B_Customer_Portal_86_rmppog.webp "Publish")

And here’s a reminder of what the finished app looks like.

![B2B Customer Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1711638117/cms/b2b-customer-portal/B2B_Customer_Portal_87_gr1qz1.webp "B2B Customer Portal")

Budibase is the fast, easy way to build secure portals on top of just about any data source.

To learn more, check out our [portal development](https://budibase.com/portals/) page.