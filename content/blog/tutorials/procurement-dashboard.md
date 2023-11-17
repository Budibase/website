+++
author = "Ronan McQuillan"
date = 2023-11-02
description = "Follow our guide to building a procurement dashboard."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1698942033/cms/procurement-dashboard/Procurement_Dashboard_tpgqo6.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1698942033/cms/procurement-dashboard/Procurement_Dashboard_tpgqo6.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Procurement Dashboard"
+++

Sourcing raw materials and handling incoming stock are some of the most fundamental challenges that logistics teams face. The right procurement dashboard can make all the difference here.

See, a huge part of the problem is *visibility*. Procurement processes draw on a number of different types of data - across inventories, supply chains, finances, and more.

Without unified, coherent reporting, it’s almost impossible to make sense of all of this.

That’s where procurement dashboards come in.

Today, we’re showing how Budibase can be leveraged to turn data into action - including building custom dashboards around all kinds of existing data sets.

{{< youtube Sz8hrRErjFE >}}

## What is a procurement dashboard?

A dashboard is a real-time reporting UI that connects to an external data source. In other words, it’s a preconfigured report that displays the most up-to-date values for whatever data we build it around.

However, this normally isn’t just the raw data itself. 

Rather, the goal is to give decision-makers fast, easy access to higher-level KPIs. So, we’ll typically perform transformations and aggregations on our data in order to extract the insights that we need - perhaps even integrating multiple data sets.

In the specific case of a procurement dashboard, we’re most likely to need information about our inventory, orders, shipments, vendors, or other relevant data sets in order to garner the insights our team needs.

So…

## What are we building?

Our procurement dashboard is going to consist of two screens - one showing KPIs relating to our purchase orders for the current month - and the other for the current month’s shipments and consignments.

We’ll also drill down into individual vendors and product categories within these.

We’re going to draw our data from four tables within a Postgres database. These represent our *vendors*, *shipments*, *consignments*, and *purchase_orders*. All of these are interlinked via the *shipments* table.

We’ll make extensive use of custom queries throughout - but we’ll provide all of the relevant SQL syntax to show what we’re doing as we go along.

Here’s what the *purchase orders* screen will look like when we’re done:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942035/cms/procurement-dashboard/Procurement_Dashboard_1_wbggmm.webp "procurement dashboard")

And the *shipments* screen:

![Shipments](https://res.cloudinary.com/daog6scxm/image/upload/v1698942040/cms/procurement-dashboard/Procurement_Dashboard_2_r6cwjf.webp "shipments")

## How to build a procurement dashboard in 8 steps

So, now we know what we’re building, let’s dive right in.

If you haven’t already, sign up for a free Budibase account.

{{< cta >}}

## 1. Create a Budibase app and connect your data

Our first step is to create a new Budibase application. We can import an existing app or use a template - but we’re starting from scratch. We’ll be prompted to choose a name and URL path for our new app:

![New app](https://res.cloudinary.com/daog6scxm/image/upload/v1698942043/cms/procurement-dashboard/Procurement_Dashboard_3_rspc9m.webp "new app")

Then we need to choose the data we’re going to start with - although we can add more data sources later. Budibase offers dedicated connectors for a range of SQL and NoSQL databases - as well as REST, Google Sheets, and our internal tables:

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1698942048/cms/procurement-dashboard/Procurement_Dashboard_4_kwh04j.webp "Data sources")

When we select Postgres, we’re prompted to input our configuration details:

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1698942052/cms/procurement-dashboard/Procurement_Dashboard_5_hiqjig.webp "Config")

Next, we can choose which tables we want to *fetch* - essentially pulling them into Budibase so we can use them. Our database has several tables that we don’t need, so we’re just selecting the four that we listed earlier:

![Fetch tables](https://res.cloudinary.com/daog6scxm/image/upload/v1698942055/cms/procurement-dashboard/Procurement_Dashboard_6_azoiof.webp "Fetch tables")

Straight off the bat, we can use Budibase’s back-end to perform CRUD operations or alter the schema of any of our tables:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698942057/cms/procurement-dashboard/Procurement_Dashboard_7_e0wsjc.webp "Table")

Before we go any further, here’s a quick summary of our data model - specifically, what each table includes and how they all like together. 

So, we have:

- vendors - which stores the vendors’ contact, billing, and product information - including its category.
- purchase_orders - with an issue_date, complete_date, cost, and po_number.
- shipments - with a purchase_date, arrive_date, shipment_number, vendor_id, and purchase_order_id.
- consignments - with an item_name, quantity, consignment_number, and shipment_id.

So, we’ll need to combine information from different tables to get the insights we need - via custom queries.

Let’s jump in. 

## 2. Building summary cards

We’ll start by creating a blank screen, with “/” as its page path. The first component we’ll add is a *headline*:

![Blank screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698942034/cms/procurement-dashboard/Procurement_Dashboard_8_g0ichv.webp "blank screen")

We want this to read *This Month:* followed by the current month in the format *MM/YYYY*. To do this, hit the lightning bolt icon beside the headline’s *text* field to open the bindings drawer. Here, we can set a value using plain text, handlebars, or JavaScript:

![Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942039/cms/procurement-dashboard/Procurement_Dashboard_9_h6caja.webp "Procurement Dashboard")

We’re going to bind this to the following JavaScript expression:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return "This Month: " + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();

{{< /highlight >}}

![Title](https://res.cloudinary.com/daog6scxm/image/upload/v1698942042/cms/procurement-dashboard/Procurement_Dashboard_10_aa8zdf.webp "Title")

Beneath this, we’re going to add a *container* and set its *direction* to *horizontal*:

And then we’ll add a *cards* block inside our container. A *cards block* is a prebuilt set of components that will iterate over whatever data set we point it at. We can then bind attributes from this data set to display as text:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698942052/cms/procurement-dashboard/Procurement_Dashboard_12_srpvq5.webp "Cards")

By the time we’re finished, we’ll have three cards blocks, each displaying a single card.

These will show the following values relating to our *purchase_orders* table for the current month:

1. The total cost.
2. The total number of orders.
3. The average order value.

To get this information, we’ll need to add a new custom query under our Postgres connection:

![add query](https://res.cloudinary.com/daog6scxm/image/upload/v1698942054/cms/procurement-dashboard/Procurement_Dashboard_13_l7retg.webp "add query")

We’ll call this *PurchaseOrderStatsByMonth*.

We’ll use a SELECT statement to return:

- The numerical month and year extracted from the issue_date attribute.
- The COUNT of rows.
- The SUM of the *cost* attribute.
- The AVG of the *cost* attribute.

We’ll also add statements to GROUP and ORDER BY *month* and *year*.

So, our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 CAST(EXTRACT(YEAR FROM issue_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM issue_date) AS INTEGER) AS month,

 CAST(COUNT(*) AS INTEGER) AS row_count,

 SUM(cost) AS total_cost,

 AVG(cost) AS average_cost

FROM purchase_orders

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

![response](https://res.cloudinary.com/daog6scxm/image/upload/v1698942057/cms/procurement-dashboard/Procurement_Dashboard_14_aanodb.webp "response")

This will return the following data object:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "row_count": 3,

 "total_cost": 7125,

 "average_cost": 2375

}

{{< /highlight >}}

Head back to the design section. We can now point our *cards* block to our new query under its *data* field:

![Cards data](https://res.cloudinary.com/daog6scxm/image/upload/v1698942056/cms/procurement-dashboard/Procurement_Dashboard_15_tbl8m5.webp "cards data")

Now we only have two cards, since our sample data only goes back as far as last month:

![cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698942034/cms/procurement-dashboard/Procurement_Dashboard_16_c6fpdx.webp "cards")

But, we only want to display a single card, so we need to add a couple of filtering expressions to only display rows where the *month* and *year* attribute match the current date:

![procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942039/cms/procurement-dashboard/Procurement_Dashboard_17_calyu0.webp "procurement dashboard")

Again, we’re going to use JavaScript bindings here. So, we’ll bind *year* to equal:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getFullYear();

{{< /highlight >}}

And *month* to:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getMonth() + 1;

{{< /highlight >}}

JavaScript uses zero-based counting - so the index for January is *0*, February is *1* etc. SQL does not. To reflect this, we’ve added one to *currentDate.getMonth()* in our return statement.

Now we only have one card:

![Card](https://res.cloudinary.com/daog6scxm/image/upload/v1698942042/cms/procurement-dashboard/Procurement_Dashboard_18_zkuaau.webp "card")

To finish this, we just need to populate the relevant data. We’ll start by renaming our component *Total Cost Card*.

Then, we’ll bind the following JavaScript expression to bind the *title* field to the *total_cost* attribute from our query response - adding a dollar sign and rounding it to two decimal places:

{{< highlight javascript "linenos=inline" >}}

return "$" + $("Total Cost Card.PurchaseOrderStatsByMonth.total_cost").toFixed(2);

{{< /highlight >}}

![Total Cost](https://res.cloudinary.com/daog6scxm/image/upload/v1698942046/cms/procurement-dashboard/Procurement_Dashboard_19_d3mcb5.webp "Total Cost")

We’ll also give this a descriptive *subtitle* and remove the *description* field entirely.

![Subtitle](https://res.cloudinary.com/daog6scxm/image/upload/v1698942052/cms/procurement-dashboard/Procurement_Dashboard_20_aj4sqg.webp "subtitle")

Now, duplicate this card:

![Duplicate card](https://res.cloudinary.com/daog6scxm/image/upload/v1698942053/cms/procurement-dashboard/Procurement_Dashboard_21_xtbvft.webp "duplicate card")

We’ll rename this new one and use handlebars to set the *title* field to the *row_count* attribute from our response - also updating the *subtitle* to match:

![subtitle](https://res.cloudinary.com/daog6scxm/image/upload/v1698942055/cms/procurement-dashboard/Procurement_Dashboard_22_i7vppj.webp "subtitle")

Two down, one to go.

Duplicate the card again, this time calling the new one *Average Cost Card* and setting its *title* binding to the following JavaScript:

{{< highlight javascript "linenos=inline" >}}

return "$" + $("Average Cost Card.PurchaseOrderStatsByMonth.average_cost").toFixed(2);

{{< /highlight >}}

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698942033/cms/procurement-dashboard/Procurement_Dashboard_24_pybtaa.webp "cards")

And that’s our cards done.

## 3. Purchase orders by company

Next, we’re going to add two charts, displaying similar statistics about our purchase orders - this time broken up by *category*.

We want these to appear side-by-side. So we’ll add another horizontal container. We’ll also give this 8px of padding to the top:

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1698942038/cms/procurement-dashboard/Procurement_Dashboard_25_wkdmn8.webp "container")

We’re going to SELECT the same information as before, but this time we’re going to use JOIN statements to our shipments and vendors tables - so that we can also return and GROUP BY the *category* attribute which we store about our vendors.

The JOINS will work as follows:

- The *po_number* from *purchase_orders* to the *purchase_order_id* attribute from *shipments*.
- The *vendor_id* from *shipments* to the *vendor_number* from *vendors*.

Our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 v.category,

 CAST(EXTRACT(YEAR FROM po.issue_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM po.issue_date) AS INTEGER) AS month,

 CAST(COUNT(po.po_number) AS INTEGER) AS row_count,

 SUM(po.cost) AS total_cost,

 AVG(po.cost) AS average_cost

FROM purchase_orders po

JOIN shipments s ON po.po_number = s.purchase_order_id

JOIN vendors v ON s.vendor_id = v.vendor_number

GROUP BY v.category, year, month

ORDER BY v.category, year, month;

{{< /highlight >}}

We’ll call this one *PurchaseOrderStatsByMonthByCategory*:

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1698942041/cms/procurement-dashboard/Procurement_Dashboard_26_aqnozq.webp "Query")

The response should look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "category": "Biotechnology",

 "year": 2023,

 "month": 10,

 "row_count": 1,

 "total_cost": 2029,

 "average_cost": 2029

}

{{< /highlight >}}

Now, head back to the *design* section and add a *chart block* inside our new container.

The *chart block* has attributes for *chart type* - to set the type of chart we want - and *data* to choose a data source. We can then decide which attributes from our data source we want to use for each axis.

Set the *data* field to our new query and the *type* to *pie*. We’ll also set the exact same *month* and *year* filters as we did for our cards:

![Chart block](https://res.cloudinary.com/daog6scxm/image/upload/v1698942051/cms/procurement-dashboard/Procurement_Dashboard_28_whoftq.webp "chart Block")

Next, we need to tell it what to display based on our query response. We’ll set the *label column* (x-axis) to *category* and the *data column* (y-axis) to *row_count*. We’ll also give it a descriptive *title* and set the width and height to 50% and 400px respectively:

![Height](https://res.cloudinary.com/daog6scxm/image/upload/v1698942050/cms/procurement-dashboard/Procurement_Dashboard_29_j1lc3j.webp "Height")

Our second chart will be a bar graph that shows the *total* and *average* costs by category. Rather than starting from scratch, we’ll duplicate our existing chart:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942050/cms/procurement-dashboard/Procurement_Dashboard_30_a6wnx2.webp "procurement dashboard")

This basically saves us from having to configure our filters again. Rename the duplicate and set its *type* to *bar*. We’ll keep *category* as the *label* column but this time add two *data columns* - *total_cost* and *average_cost*.

We’ll also check the *horizontal* box:

![Bar Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1698942049/cms/procurement-dashboard/Procurement_Dashboard_31_gz2svt.webp "bar chart")

## 4. Purchase orders by category

Next, we want to display the same information from our *purchase_orders* table - but this time broken up by *company_name* instead of *category*.

We’ll start by duplicating our existing charts container, but swapping our two charts around so that the bar chart is on the left and the pie chart is on the right:

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1698942033/cms/procurement-dashboard/Procurement_Dashboard_32_cm4kvv.webp "duplicate")

Next, we’ll need a new query to retrieve the data we want. This will follow the exact same format as before, except that we’ll GROUP the response rows by the *company_name* attribute from the *vendors* table - rather than *category*.

We’ll call this *PurchaseOrderStatsByMonthByCompany*:

{{< highlight sql "linenos=inline" >}}

SELECT

 v.company_name,

 CAST(EXTRACT(YEAR FROM po.issue_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM po.issue_date) AS INTEGER) AS month,

 CAST(COUNT(po.po_number) AS INTEGER) AS row_count,

 SUM(po.cost) AS total_cost,

 AVG(po.cost) AS average_cost

FROM purchase_orders po

JOIN shipments s ON po.po_number = s.purchase_order_id

JOIN vendors v ON s.vendor_id = v.vendor_number

GROUP BY v.company_name, year, month

ORDER BY v.company_name, year, month;

{{< /highlight >}}

The response schema is:

{{< highlight javascript "linenos=inline" >}}

{

 "company_name": "Cassin and Sons",

 "year": 2023,

 "month": 9,

 "row_count": 1,

 "total_cost": 3078,

 "average_cost": 3078

}

{{< /highlight >}}

Back in the design section, we can simply swap the *data* field for our two new charts to this query - and update their *label columns* to *company_name*. We’ll also update their names and titles:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1698942038/cms/procurement-dashboard/Procurement_Dashboard_33_crpuji.webp "bindings")

Lastly, we’ll change their *color palette* for better visual separation:

![Color palette](https://res.cloudinary.com/daog6scxm/image/upload/v1698942041/cms/procurement-dashboard/Procurement_Dashboard_34_p8wv27.webp "color palette")

That’s our first screen done for now:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942046/cms/procurement-dashboard/Procurement_Dashboard_35_qcmhlw.webp "procurement dashboard")

## 6. Adding a shipments screen

Next, we want to build a very similar UI for data around our *shipments* table. Start by duplicating this entire screen. We’ll give the new one the page path */shipments*.

![Duplicate screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698942045/cms/procurement-dashboard/Procurement_Dashboard_36_hwo09r.webp "Duplicate screen")

And we’ll work our way down the screen swapping out the data - starting with our cards. So, on this screen we want four cards, to display this month’s:

1. Number of shipments.
2. Average number of consignments per shipment.
3. Average number of items per shipment.
4. Average number of items per consignment.

Start by duplicating one of our cards again:

![4 cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698942045/cms/procurement-dashboard/Procurement_Dashboard_37_swaffk.webp "4 cards")

To populate these, we want a new query called *ShipmentStatsByMonth*. This is a bit more complex, because some of the data we need is stored in *shipments* and some of it is stored in *consignments*.

We’ll select:

- The numerical month and year, extracted from *purchase_date* in the *shipments* table.
- The COUNT of *shipments* rows.
- The AVERAGE of the number of *consignments* rows corresponding to each shipment.
- The AVERAGE of the number of items within each of these *consignments* for each shipment.

We’ll use a LEFT JOIN statement to match up *shipments* rows where the *shipment_number* matches the *shipment_id* in the *consignments* table.

Our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 CAST(EXTRACT(YEAR FROM s.purchase_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM s.purchase_date) AS INTEGER) AS month,

 CAST(COUNT(*) AS INTEGER) AS shipment_count,

 AVG(avg_quantity) AS avg_items_per_shipment,

​	AVG(consignment_count) AS avg_consignments_per_shipment,

 AVG(avg_quantity / consignment_count) AS avg_items_per_consignment

FROM shipments s

LEFT JOIN (

 SELECT

  shipment_id,

  COUNT(*) AS consignment_count,

  SUM(quantity) AS avg_quantity

 FROM consignments

 GROUP BY shipment_id

) c ON s.shipment_number = c.shipment_id

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

And the response:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "shipment_count": "3",

 "avg_days_difference": "1.33333333333333333333",

 "avg_consignments_per_shipment": "3.0000000000000000",

 "avg_items_per_shipment": 78.66666666666667,

 "avg_items_per_consignment": 26.222222222222225

}

{{< /highlight >}}

Back on the design tab, we’ll use handlebars bindings in the titles to display each of these new response attributes - using the *round* function where necessary. We’ll also update the *subtitle* and *name* attributes to reflect our new data.

That will give us:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698942044/cms/procurement-dashboard/Procurement_Dashboard_38_sx9bam.webp "Cards")

## 7. Shipping stats by company

All four of our charts on this screen will be broken down by *company_name*. Here’s a summary of what each of these will display:

- The number of shipments per company as a pie chart.
- The average items per shipment by company as a bar chart.
- The average shipping time by company as a bar chart.
- The average consignments and items per shipment by company as a bar chart.

We’ll need one last custom query to achieve this, called *ShipmentStatsByVendor*.

This will be quite similar to our previous query, with two additional elements:

1. We need an additional JOIN statement to SELECT the *company_name* attribute from the *vendors* table. We’ll also include this in a GROUP BY statement.
2. We need to calculate and SELECT the average difference between the *arrive_date* and the *purchase_date* from the *shipments* table - expressed in days.

So, our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 v.company_name,

 CAST(EXTRACT(YEAR FROM s.purchase_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM s.purchase_date) AS INTEGER) AS month,

 CAST(COUNT(s.shipment_number) AS INTEGER) AS shipment_count,

 AVG(EXTRACT(EPOCH FROM (s.arrive_date - s.purchase_date)) / 86400) AS avg_days_difference,

 AVG(consignment_count) AS avg_consignments_per_shipment,

 AVG(avg_quantity) AS avg_items_per_shipment,

 AVG(avg_quantity / consignment_count) AS avg_items_per_consignment

FROM shipments s

LEFT JOIN (

 SELECT

  shipment_id,

  COUNT(*) AS consignment_count,

  SUM(quantity) AS avg_quantity

 FROM consignments

 GROUP BY shipment_id

) c ON s.shipment_number = c.shipment_id

LEFT JOIN (

 SELECT

  vendor_number,

  company_name

 FROM vendors

) v ON s.vendor_id = v.vendor_number

GROUP BY v.company_name, year, month

ORDER BY v.company_name, year, month;

{{< /highlight >}}

The response should look like this:

{{< highlight sql "linenos=inline" >}}

{

 "company_name": "Cassin and Sons",

 "year": 2023,

 "month": 10,

 "shipment_count": 1,

 "avg_days_difference": "4.0000000000000000",

 "avg_consignments_per_shipment": "3.0000000000000000",

 "avg_items_per_shipment": 60,

 "avg_items_per_consignment": 20

}

{{< /highlight >}}

We’ll alter our first two charts to show the number of shipments per company and the number of items per shipment by company, respectively:

![Charts](https://res.cloudinary.com/daog6scxm/image/upload/v1698942044/cms/procurement-dashboard/Procurement_Dashboard_39_khwpyy.webp "Charts")

The third chart will show the avg_days_difference attribute - or, our shipping time:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1698942033/cms/procurement-dashboard/Procurement_Dashboard_40_s9bnho.webp "Bindgins")

For the fourth and final chart, we’ll change the *type* to *bar* and set it to show our *avg_consignments_per_shipment* and *avg_items_per_consignment* attributes:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942038/cms/procurement-dashboard/Procurement_Dashboard_41_uqnf68.webp "Procurement dashboard")

Here’s the completed screen:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942037/cms/procurement-dashboard/Procurement_Dashboard_42_nwcmhk.webp "procurement dashboard")

## 8. Design tweaks and publishing

Lastly, let’s make a couple of UX tweaks to our procurement dashboard. We’ll start by hitting *configure links* under *navigation* and adding menu items for our two screens:

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1698942036/cms/procurement-dashboard/Procurement_Dashboard_43_qplzgw.webp "Nav")

Then, under *screen,* we’ll change our app’s *theme* to *darkest*:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1698942036/cms/procurement-dashboard/Procurement_Dashboard_44_ioq5yy.webp "Theme")

When you’re ready, you can hit *publish* to push your procurement dashboard live and send it to users:

![Procurement dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942035/cms/procurement-dashboard/Procurement_Dashboard_45_py8j66.webp "Procurement Dashboard")

Here’s what the finished product looks like:

![Procurement Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1698942035/cms/procurement-dashboard/Procurement_Dashboard_46_peomqj.webp "procurement dashboard")

If you found this tutorial helpful, why not also check out our guide to building a custom [vendor request form](https://budibase.com/blog/tutorials/vendor-request-form/)?