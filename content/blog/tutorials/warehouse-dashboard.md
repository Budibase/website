+++
author = "Ronan McQuillan"
date = 2023-10-30
description = "Follow our step-by-step guide to building a warehouse dashboard."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1698659030/cms/warehouse-dashboard/Warehouse_Dashboard_yepoci.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1698659030/cms/warehouse-dashboard/Warehouse_Dashboard_yepoci.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Warehouse Dashboard"
+++

If you carry physical products - your warehousing solutions are right at the center of your business. Warehouse dashboards provide much-needed visibility into your performance across a huge range of KPIs.

Situations can change quickly - so it’s critical that decision-makers have fast, reliable access to important insights.

Dashboards are the perfect solution for furnishing teams with repeatable reporting - while also eliminating the need for manual analytical work.

Today, we’re going to see how Budibase can be used to build custom dashboards around existing data sources - saving your team hours of development work at the same time.

{{< youtube pK6j8n_fqD4 >}}

But first, let’s get a little bit of background.

## What is a warehouse dashboard?

A dashboard is a reporting UI that displays pre-configured, real-time reports based on whatever data source we connect it to - usually with a combination of charts, cards, tables, and other display elements.

Additionally, we’ll typically store and use custom queries in order to aggregate and transform our data into the insights we need.

In the case of a warehouse dashboard, this could include data surrounding your inventory, fulfillment, supply chain, sales, returns, breakage, incidents, customer complaints, or other core internal logistical processes.

This could be a combination of historical, current, and projected values.

Ultimately, the goal is to create a resource that decision-makers can access whenever they need it to access the most up-to-date data about your warehouse KPIs.

## What are we building?

Our example will be primarily focused on three things:

1. Returns.
2. Complaints.
3. Inventory levels.

You can also check out our previous tutorial on how to build an inventory dashboard.

We’re going to build this around four tables from an existing Postgres database - containing details of our *inventory*, *sales*, *returns*, and *complaints*. 

Our warehouse dashboard will be a single-screen app. At the top, we’ll use summary cards to display the current month’s figures on some of our overarching KPIs.

Below this, we’re going to use tabbed containers to enable users to flick between more detailed insights into our returns, customer complaints, and inventory levels.

Here’s what this will look like:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659032/cms/warehouse-dashboard/Warehouse_Dashboard_1_rmfg6c.webp "Warehouse Dashboard")

Let’s start building.

## How to build a warehouse dashboard in 6 steps

If you haven’t already, go ahead and create a free Budibase account.

{{< cta >}}

## 1. Create a new Budibase app and configure your data

The first thing we need to do is create a new Budibase application. We’re going to *start from scratch* but we also have the option of importing an existing app or using one of Budibase’s templates.

We’re asked to give our new app a name. This will also be used to populate our URL extension, but we can overwrite that if we need to:

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1698659033/cms/warehouse-dashboard/Warehouse_Dashboard_2_ayhfnl.webp "Data Sources")

Then we need to choose a data source:

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1698659038/cms/warehouse-dashboard/Warehouse_Dashboard_3_ntvqtx.webp "Data Sources")

Budibase offers dedicated connectors for a range of SQL and NoSQL databases, alongside Google Sheets, REST, our internal table, and custom data sources. This gives us huge flexibility for creating dashboards with external data.

As we say, we’re going to use an existing PostgreSQL database. When we choose a data source, we’re prompted to enter our credentials on this configuration page:

![Postgres Config](https://res.cloudinary.com/daog6scxm/image/upload/v1698659038/cms/warehouse-dashboard/Warehouse_Dashboard_4_nhwhet.webp "Postgres Config")

Our database has a bunch of tables - not all of which we need. Budibase gives us the option to choose which tables we want to *fetch* from a connected database. This will let us use these tables in our warehouse dashboard.

As we said earlier, the ones we want are called *inventory*, *sales*, *returns*, and *complaints*:

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1698659022/cms/warehouse-dashboard/Warehouse_Dashboard_5_omwmlx.webp "Fetch Tables")

When we *fetch* a table in Budibase, we can immediately perform full CRUD functionality within the *data* section. We can even edit the schema here.

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659022/cms/warehouse-dashboard/Warehouse_Dashboard_6_ve3gkj.webp "Warehouse Dashboard")

For example, we can add, edit, or delete columns. We could also configure existing relationships - although we’re going to handle this within our SQL syntax instead today.

We do want to make a couple of changes though. There are columns in the *complaints* and *returns* table called *category* and *reason*, respectively. These are currently *text* fields, but we want them to be *options* - just for easier visual recognition in the back end.

![Data Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1698659022/cms/warehouse-dashboard/Warehouse_Dashboard_7_uq0za2.webp "Data schema")

We can then manually input the possible options:

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_8_mdvpc9.webp "Options")

And now we have color-coded entries, for easier recognition:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698659031/cms/warehouse-dashboard/Warehouse_Dashboard_9_kcwm9v.webp "Table")

We’ll repeat this step for the *reason* attribute on the *returns* table too.

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659034/cms/warehouse-dashboard/Warehouse_Dashboard_10_fie94k.webp "Warehouse Dashboard")

Our *inventory* table has two numerical columns called *quantity* and *unit_cost*. The other change we want to make to our data model is to insert a *formula variable* to calculate the *stock_value* for each item in our inventory.

![Formula](https://res.cloudinary.com/daog6scxm/image/upload/v1698659037/cms/warehouse-dashboard/Warehouse_Dashboard_11_a82kbe.webp "Formula")

We can insert formulae using handlebars expressions or custom JavaScript. In both cases, we’ll have full access to use all of the other attributes in our column as variables:

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1698659038/cms/warehouse-dashboard/Warehouse_Dashboard_12_boubui.webp "JavaScript")

We’re using the following JavaScript:

{{< highlight javascript "linenos=inline" >}}

return $("quantity") * $("unit_price");

{{< /highlight >}}

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659024/cms/warehouse-dashboard/Warehouse_Dashboard_13_on22vz.webp "Warehouse Dashboard")

And that’s our data model completed!

## 2. Summary cards

So, let’s start building our warehouse dashboard UI. Head to the design tab, and create a new blank screen.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698659024/cms/warehouse-dashboard/Warehouse_Dashboard_14_qyj7rt.webp "Blank screen")

If you recall our screenshot of the finished product from earlier - the first thing we have is a headline that reads *Warehouse KPIs:* and the current date, formatted as *MM/YYYY*.

So, add a *headline component*. We can then use the lightning bolt icon beside its *text* field to open a bindings drawer:

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_15_xz66re.webp "Headline")

We want to use some JavaScript that will get the current month and year and stylize this into our string:

{{< highlight javascript "linenos=inline" >}}

const currentDate = new Date();

return "Warehouse KPIs: " + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();

{{< /highlight >}}

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_16_j88z9u.webp "Headline")

Great!

Beneath this, we’ll place a horizontal container, inside of which we’ll nest three *cards blocks*:

![Data Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_17_zegx7b.webp "Data Cards")

A cards block iterates over whatever data source we point it at and displays the values that we specify for each entry. When we’re done configuring these - each one will display a single card.

These will show the following metrics for the current month:

1. The number of complaints we’ve received.
2. The number of returns that have been requested.
3. The average time between returns being requested and completed, in days.

To achieve this, we’ll need to start writing some custom queries.

We’ll take these one at a time. First, head back to the data section. Under our Postgres data source, we’re going to create a new query:

![Add a query](https://res.cloudinary.com/daog6scxm/image/upload/v1698659034/cms/warehouse-dashboard/Warehouse_Dashboard_18_m2fgml.webp "Add a query")

We’ll call this *ComplaintsByMonth*:

![Add query](https://res.cloudinary.com/daog6scxm/image/upload/v1698659034/cms/warehouse-dashboard/Warehouse_Dashboard_18_m2fgml.webp "Add query")

We need to SELECT three things from our *complaints* table:

1. The *month*, extracted from the *date* attribute.
2. The *year,* also extracted from *date*.
3. The COUNT of our unique *id* attributes.

We’ll then group and order these by *month* and *year*.

So, our query is:

{{< highlight sql "linenos=inline" >}}

SELECT EXTRACT(YEAR FROM c.date) AS year,

​    EXTRACT(MONTH FROM c.date) AS month,

​    COUNT(c.id) as complaint_count

FROM complaints c

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1698659038/cms/warehouse-dashboard/Warehouse_Dashboard_20_lhb2qk.webp "Query")

We get back data objects that look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "year": "2023",

 "month": "10",

 "complaint_count": "10"

}

{{< /highlight >}}

Hit save and head back to the *design* section.

We’ll point our first cards block at this new query:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659025/cms/warehouse-dashboard/Warehouse_Dashboard_21_atyykf.webp "Warehouse Dashboard")

Now, this only shows one card - because our sample data only has a handful of complaints and they were all lodged in October 2023.

To future-proof this, we’ll need to add some filtering to only display the current month’s data.

Open the *filter* drawer and we’ll add two expressions - one for the month and one for the year.

![Filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1698659024/cms/warehouse-dashboard/Warehouse_Dashboard_22_eanzun.webp "Filtering")

Again, we’re going to use JavaScript for both. So, we’ll set the *month* to:

{{< highlight javascript "linenos=inline" >}}

const currentDate = new Date();

return currentDate.getMonth() + 1;

{{< /highlight >}}

And the year to:

{{< highlight javascript "linenos=inline" >}}

const currentDate = new Date();

return currentDate.getFullYear;

{{< /highlight >}}

Now, we can start populating our card with values. We’ll use *handlebars* to bind the *title* to the *complaint_count* value from our query response:

![Binding](https://res.cloudinary.com/daog6scxm/image/upload/v1698659024/cms/warehouse-dashboard/Warehouse_Dashboard_23_mvvaeh.webp "Binding")

We’ll then add a descriptive *subtitle* and remove the *description* entirely:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659024/cms/warehouse-dashboard/Warehouse_Dashboard_24_ojsdvu.webp "Warehouse Dashboard")

We’ll repeat a similar process for our remaining two cards.

So, we’ll add another query called *ReturnsByMonth*. This is going to be very similar to our previous - only based around the *returns* table instead of *complaints*:

{{< highlight sql "linenos=inline" >}}

SELECT EXTRACT(YEAR FROM r.request_date) AS year,

​    EXTRACT(MONTH FROM r.request_date) AS month,

​    COUNT(r.id) as returns_count

FROM returns r

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

The response should look like this:

{{< highlight sql "linenos=inline" >}}

{

 "year": "2023",

 "month": "10",

 "returns_count": "6"

}

{{< /highlight >}}

We’ll follow the exact same steps to configure our next card for this query.

![Card](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_25_gc7hsb.webp "Card")

Our third card is a little bit more complex. Create a third query and call it *ReturnLeadTime*. We’re going to handle the month and year in exactly the same way.

We’re also going to use AVG and DATE_PART expressions to calculate the average difference between the *request_date* and *complete_date* attributes for the returns entries relating to each month.

The query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM request_date) AS year,

 EXTRACT(MONTH FROM request_date) AS month,

 AVG(DATE_PART('day', complete_date - request_date)) AS average_time_in_days

FROM returns

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

The response should look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "year": "2023",

 "month": "10",

 "average_time_in_days": 8.666666666666666

}

{{< /highlight >}}

We’ll point our third card at this query and use the exact same filtering expressions as before:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698659033/cms/warehouse-dashboard/Warehouse_Dashboard_26_g97sop.webp "Cards")

We’re going to stylize our data a little bit. So - this time our *title* will be the following handlebars expression:

{{< highlight javascript "linenos=inline" >}}

{{ round ReturnTime Cards block.ReturnLeadTime.average_time_in_days }} Days

{{< /highlight >}}

And we’ll give it a descriptive *subtitle* too, giving us:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1698659036/cms/warehouse-dashboard/Warehouse_Dashboard_27_m8agmx.webp "Bindings")

## 3. Adding tabs

Beneath our summary cards, we want users to be able to navigate between tabs to access more detailed information on each aspect of our warehouse dashboard. We could achieve this natively within Budibase using buttons and conditionality rules.

But, to make life easier, we’re going to use a custom plugin that our community has made.

It’s called *Super Tabs*.

Check out our [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more about building your own custom components or importing community contributions.

We’ll add our tabs beneath our cards container. We’ve set the *size* to *large* and checked the boxes for *centered, quiet, compact,* and *emphasized*:

![SuperTabs](https://res.cloudinary.com/daog6scxm/image/upload/v1698659036/cms/warehouse-dashboard/Warehouse_Dashboard_28_fpsmfm.webp "SuperTabs")

The way this works is that any components nested as immediate children of the super tabs component will have their names displayed as clickable links.

So, we’re going to add three vertical containers - called *returns, complaints*, and *inventory*.

![Tabs](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_29_vn8f11.webp "Tabs")

Now, we can start building our more detailed warehouse dashboard reports inside of these containers.

## 3. Returns reporting

Our returns drill-down will include three things:

1. A pie chart displaying the number of returns grouped by *reason*.
2. A table, displaying the details of our most recent returns.
3. A line graph showing the number of return requests we receive per day.

We want to display the pie chart and table beside each other - with the line graph below these.

So, we’ll start by nesting a second container within our *returns* tab - and setting its direction to *horizontal*:

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_30_a7jxs8.webp "Container")

Now, let’s start building our charts.

### Pie Chart

We’ll start with our pie chart. Again, this will display the number of returns that we have registered under each of our *reason* attribute’s options.

To do this, we’ll create a new query called *ReturnsByReason*. We’ll select the *reason* attribute and the count of the rows - and GROUP BY *reason*. 

So, the query will be:

{{< highlight sql "linenos=inline" >}}

SELECT reason, COUNT(*) as return_count

FROM returns

GROUP BY reason;

{{< /highlight >}}

The response should look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "reason": "Customer Changed Mind",

 "return_count": "2"

}

{{< /highlight >}}

Save that and head back to the *design* section. Inside we’re going to add a *chart block*. We’ll set its *type* to *pie* and its *data* to our new query.

We’ll add a title, set the *label* column to *reason*, the *data* column to *return_count*, and give it a width of 50%:

![Pie chart](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_31_xajl6r.webp "Pie chart")

We can also set a custom color palette:

![Color palette](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_33_c73t03.webp "Color palette")

### Table

Beside our bar chart - we want a table that displays detailed information of recent returns. Specifically, we want the *date, reason*, and *item_name*. When users click on any of these rows, we want to display a side panel with the full details of the return request.

The problem is - our *returns* table doesn’t include the *item_name*. However, it does have a *sale_id* attribute that indicates the original sale that it relates to. The *sales* table includes the item_name attribute.

We’ll use a join statement in a custom query to retrieve this alongside the relevant details from the *returns* table.

So, we’ll add a query called *ReturnsWithItemName*:

{{< highlight sql "linenos=inline" >}}

SELECT r.*, s.item_name

FROM returns r

LEFT JOIN sales s ON r.sale_id = s.id

{{< /highlight >}}

It returns a data object with the following schema:

{{< highlight javascript "linenos=inline" >}}

{

 "id": 5,

 "sale_id": 3,

 "request_date": "2023-10-02 00:00:00+00",

 "complete_date": "2023-10-16 00:00:00+00",

 "reason": "Other",

 "item_name": "Bulldozer"

}

{{< /highlight >}}

Beside our pie chart, we’ll add a *table block*, with its data set to our new query:

![Data Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698659034/cms/warehouse-dashboard/Warehouse_Dashboard_34_vac0uw.webp "Data Table")

We’ll configure this to only show the three columns we actually want:

![Configure Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1698659036/cms/warehouse-dashboard/Warehouse_Dashboard_35_dsmlwp.webp "Configure Columns")

And we’ll select *show details side panel* under on-click actions:

![Details Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1698659035/cms/warehouse-dashboard/Warehouse_Dashboard_36_mladuo.webp "Details Side Panel")

However, this isn’t going to work with our custom query straight out of the box.

To start configuring it to do what we want, we need to *eject* our table block to expose all of its underlying components:

![Eject](https://res.cloudinary.com/daog6scxm/image/upload/v1698659028/cms/warehouse-dashboard/Warehouse_Dashboard_37_wppddk.webp "Eject")

Nested inside our table, we now have a component called *details side panel*. Nested within this, there’s a form block:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698659028/cms/warehouse-dashboard/Warehouse_Dashboard_38_joho9k.webp "Form")

We’ll set its *type* to *view* and its *field labels* to *above*:

![Details Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_39_fxqjq0.webp "Details Form")

We’ll need to eject this too to access all of its underlying components.

Now, on our table, we want to set an action to open our side panel:

![Click Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1698659025/cms/warehouse-dashboard/Warehouse_Dashboard_40_cp2a5m.webp "Click Actions")

But, we also need some way to filter the form we display to only show the appropriate data for that row. So before this action, we’ll add an *update state* action, setting a *state* called *id* to the *id* attribute of the clicked row:

![Update State](https://res.cloudinary.com/daog6scxm/image/upload/v1698659022/cms/warehouse-dashboard/Warehouse_Dashboard_41_l9unjn.webp "Update State")

Within the *side panel*, there’s a component called *data provider.* Set its *data* to our *ReturnsWithItemName* query:

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1698659033/cms/warehouse-dashboard/Warehouse_Dashboard_42_xqtxig.webp "Data Provider")

Then we’ll filter for rows where the *id* attribute matches our *id* state:

![Filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1698659032/cms/warehouse-dashboard/Warehouse_Dashboard_43_k9btjv.webp "Filtering")

Within this there’s a *headline* component. We’ll bind this to the *item_name* output of our *repeater* component:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1698659032/cms/warehouse-dashboard/Warehouse_Dashboard_44_hf9t4i.webp "Bindings")

Here’s what the completed form looks like:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659029/cms/warehouse-dashboard/Warehouse_Dashboard_45_j7k9ri.webp "Warehouse Dashboard")

### Line graph

Lastly, beneath our horizontal container, we want a line graph that displays the number of returns that we receive each day.

For this, we’ll need a query which we’ll call *ReturnsByDate*.

This one will be a little bit more complex. We don’t necessarily *have* returns for each day - but we want our chart to display these as zero - rather than just leaving them out entirely.

So, we need to start with a common table expression to generate a time series - and then join this to our returns table and SELECT the COUNT of entries for each date.

Our query will be:

{{< highlight sql "linenos=inline" >}}

WITH DateSeries AS (

 SELECT generate_series(

  (SELECT MIN(request_date) FROM returns),

  (SELECT MAX(request_date) FROM returns),

  interval '1 day'

 ) AS request_date

)

SELECT ds.request_date, COALESCE(COUNT(r.id), 0) as return_count

FROM DateSeries ds

LEFT JOIN returns r ON ds.request_date = r.request_date

GROUP BY ds.request_date

ORDER BY ds.request_date;

{{< /highlight >}}

The returned objects look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "request_date": "2023-10-01 00:00:00+00",

 "return_count": "1"

}

{{< /highlight >}}

Add another chart block, with the *line* type - and bind its data to our new query outputs:

![Line Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1698659029/cms/warehouse-dashboard/Warehouse_Dashboard_46_utd1vu.webp "Line Chart")

Here’s our finished *returns* report:

![Warehouse Dashboard UI](https://res.cloudinary.com/daog6scxm/image/upload/v1698659027/cms/warehouse-dashboard/Warehouse_Dashboard_47_cvgv5v.webp "Warehouse Dashboard UI")

## 4. Complaints reporting

Next, we are going to build a similar report within our *complaints* tab.

We’ll start by duplicating our horizontal container from the *returns* tab - and dragging the new one into the *complaints* tab:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659025/cms/warehouse-dashboard/Warehouse_Dashboard_48_z9pqm5.webp "Warehouse Dashboard")

And we can start swapping out the data.

### Pie chart

Our new pie chart will be similar to the previous one - except its going to display the number of *complaints* within each *category*.

We’ll create a new query called *ComplaintsByCategory*:

{{< highlight sql "linenos=inline" >}}

SELECT category, COUNT(*) as complaint_count

FROM complaints

GROUP BY category;

{{< /highlight >}}

It returns:

{{< highlight sql "linenos=inline" >}}

{

 "category": "Billing",

 "complaint_count": "1"

}

{{< /highlight >}}

Swap out the data and update the title on the chart:

![Pie Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1698659023/cms/warehouse-dashboard/Warehouse_Dashboard_49_n2cbbg.webp "Pie chart")

### Table

Our table will also be pretty simple to set up. We need a query that returns the details of each *complaint* with the relevant *item_name* from its related *sales* table entry. 

We’ll call this *ComplaintsWithItemName*:

{{< highlight sql "linenos=inline" >}}

SELECT c.*, s.item_name

FROM complaints c

LEFT JOIN sales s ON c.sale_id = s.id;

{{< /highlight >}}

The response is:

{{< highlight javascript "linenos=inline" >}}

{

 "id": 9,

 "sale_id": 1,

 "date": "2023-10-10 00:00:00+00",

 "category": "Customer Service",

 "complaint": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",

 "item_name": "Scraper"

}

{{< /highlight >}}

Set this as the *data* for the *data provider* containing our table. We’ll also set the *table’s* row limit to *7* and configure our columns like we did before:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698659031/cms/warehouse-dashboard/Warehouse_Dashboard_50_p4yssx.webp "Table")

Now, within our *details side panel*, we need to do the following:

- Change the *data provider’s* *data* to *ComplaintsByCategory*.
- Change the *form’s* *data* to *complaints*.
- Hit *Update Form Fields* within our *Field Group* component:

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1698659031/cms/warehouse-dashboard/Warehouse_Dashboard_51_tqaaad.webp "Side Panel Data")

We’ll also delete the *text field* for our *complaint* attribute - replacing it with a paragraph with the following binding as its *text*:

{{< highlight javascript "linenos=inline" >}}

Complaint:

{{ Repeater.ComplaintsWithItemName.complaint }}

{{< /highlight >}}

Our new side panel looks like this:

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1698659030/cms/warehouse-dashboard/Warehouse_Dashboard_52_pfecbp.webp "Preview")

### Line graph

Lastly, we’ll add another line graph below our horizontal container. Just like the *returns* report - this will return the COUNT of complaints for each day. We’ll generate the days using a CTE.

We’ll call this query *ComplaintsByDay*:

{{< highlight sql "linenos=inline" >}}

WITH DateSeries AS (

 SELECT generate_series(

  (SELECT MIN(date) FROM complaints),

  (SELECT MAX(date) FROM complaints),

  interval '1 day'

 ) AS date

)

SELECT ds.date, COALESCE(COUNT(c.id), 0) as complaint_count

FROM DateSeries ds

LEFT JOIN complaints c ON ds.date = c.date

GROUP BY ds.date

ORDER BY ds.date;

{{< /highlight >}}

It returns:

{{< highlight javascript "linenos=inline" >}}

{

 "date": "2023-10-03 00:00:00+00",

 "complaint_count": "1"

}

{{< /highlight >}}

We’ll bind this to our new chart, giving it a descriptive title as well:

![Line chart](https://res.cloudinary.com/daog6scxm/image/upload/v1698659029/cms/warehouse-dashboard/Warehouse_Dashboard_53_xsl0cv.webp "Line Chart")

## 5. Inventory table

Inside our final tab, we’ll place another *table block* and set its *data* to our *inventory table*:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698659028/cms/warehouse-dashboard/Warehouse_Dashboard_54_lkk86n.webp "Table")

We’re basically going to leave this as-is. We’ll simply change some of the column names to be more attractive for users - as well as reorder the columns.

We’ll also bind the *value* for the *unit_cost* and *stock_value* columns to *${{ value }}*:

![Values](https://res.cloudinary.com/daog6scxm/image/upload/v1698659026/cms/warehouse-dashboard/Warehouse_Dashboard_55_zsvr6x.webp "Values")

That gives us:

![Table UI](https://res.cloudinary.com/daog6scxm/image/upload/v1698659025/cms/warehouse-dashboard/Warehouse_Dashboard_56_g5zzq9.webp "Table UI")

## 6. Design tweaks and publishing

As a finishing touch, we’ll head to the *theme* menu and select *midnight*:

![Midnight](https://res.cloudinary.com/daog6scxm/image/upload/v1698659022/cms/warehouse-dashboard/Warehouse_Dashboard_57_tlfxju.webp "Midnight")

And that’s our warehouse dashboard ready to go live. To deploy it, simply hit publish:

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1698659030/cms/warehouse-dashboard/Warehouse_Dashboard_58_tjyalu.webp "Publish")

Here’s a reminder of what the finished thing looks like:

![Warehouse Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698659030/cms/warehouse-dashboard/Warehouse_Dashboard_59_keozey.webp "Warehouse Dashboard")

If you enjoyed this tutorial, you might also like our guide to building an [inventory dashboard](https://budibase.com/blog/tutorials/vendor-request-form/).