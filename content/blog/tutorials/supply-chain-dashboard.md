+++
author = "Ronan McQuillan"
date = 2023-11-10
description = "Check out our tutorial on how to build a supply chain dashboard."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_r5omhg.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_r5omhg.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Supply Chain Dashboard"
+++

Supply chain dashboards provide much-needed access to real-time insights about a whole range of interrelated inventory, cost management, and procurement processes.

The challenge is getting all of the data we need in one place and compatible formats.

Today, we’re exploring how Budibase empowers teams to build custom dashboards around all kinds of existing data sources.

Along the way, we’ll see how we can create and save custom queries to transform data and present the results in professional UIs, with minimal design skills.

But first, a bit of background.

## What is a supply chain dashboard?

A dashboard is a type of reporting UI that connects to an external database. Each time users access it, they can view the most up-to-date values for whatever data we’ve configured our dashboard to display.

This achieves a few important things. 

First of all, it means we don’t need to manually extract the insights we need each time we need them.

Besides this, we can greatly improve the efficiency, accuracy, and repeatability with which decision-makers can access key information.

In the specific case of a supply chain dashboard, this will largely consist of data relating to our stock changes, replenishment costs, purchase order processing, and other key inventory and procurement metrics.

But, of course, what this looks like at a more granular level will vary from one business to the next.

So…

## What are we building?

Our dashboard will comprise a single-screen application that displays a variety of readouts and visualizations around how we’re spending on procurement and how this is impacting our present stock levels.

We’ll have a row of summary cards, followed by two rows of charts, comparing data points by category, item, and vendor - as well as over time. 

Here’s what the finished product will look like:

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_1_i9rxyj.webp "Supply Chain Dashboard")

We’re going to achieve this by connecting to a PostgreSQL database which stores interrelated entities from our logistics processes.

The specific tables we’re going to query store data on our *inventory* and *vendors*, our incoming *returns*, *shipments* and *consignments,* and our outgoing *sales*.

We’ll use custom queries to extract the specific insights we need to populate our supply chain dashboard from across these tables.

So, let’s jump right in.

## How to build a supply chain dashboard in 6 steps

If you haven’t already, sign up for a free Budibase account.

{{< cta >}}

## 1. Create a Budibase app and connect your data

The first thing we need to do is create a new Budibase application and give it a name. By default, this will also be used as its URL extension - although we can overwrite this too.

We also have the option of using a template or importing an existing app, but we’re starting from scratch today:

![New App](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_2_p34x6x.webp "New App")

We can then choose our first data source:

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1699624330/cms/supply-chain-dashboard/Supply_Chain_Dashboard_3_jmyw1q.webp "Data sources")

Budibase offers an internal database - if we need a fast, easy way to build our data model. We can also connect to a market-leading range of SQL and NoSQL databases, as well as REST, Google Sheets, and more.

As we say, we’re going to choose Postgres.

We’ll then be prompted to add our configuration details:

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1699624338/cms/supply-chain-dashboard/Supply_Chain_Dashboard_4_q9iszm.webp "Config")

And then, we can choose which tables we want to *fetch* so that we can manipulate them from within Budibase.

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624342/cms/supply-chain-dashboard/Supply_Chain_Dashboard_5_avlyke.webp "Supply chain dashboard")

We have the option of pulling in all of the tables within our database - but we have some that we don’t need for our supply chain dashboard, so we’ve just selected the tables we listed earlier.

Straight away, we can perform CRUD operations or alter the schema of our tables within the *data* section of Budibase:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1699624347/cms/supply-chain-dashboard/Supply_Chain_Dashboard_6_q0h0gs.webp "Table")

A quick note to explain each of the tables within our data model:

- *inventory* stores the current state of our stock levels for various items. Including the *quantity*, *price*, and *vendor_id*.
- *purchase_orders* stores the *cost, issue_date, complete_date*, and *po_number* of our purchase orders from vendors.
- *sales* contains attributes called *item_name*, *quantity*, *date*, *id,* and *inventory_id*.
- *returns* stores *request_date*, *complete_date,* *reason, id*, and the *sale_id* for the relevant original *sale*.
- *shipments* contains a *purchase_date, arrive_date, shipment_number, vendor_id,* and *purchase_order_id*.
- *vendors* stores full details of each of our vendors, including their unique *v_id*, *category, company_name*, on other relevant information.

What’s important to take away from this is that different attributes about related entities are stored across our tables. So, we’re going to need to use custom queries to extract the data we need for our supply chain dashboard.

## 2. Adding our summary cards

With our data imported, we can start building some UIs. We’ll add a blank screen and place a *headline* component on it:

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1699624353/cms/supply-chain-dashboard/Supply_Chain_Dashboard_7_vpx12g.webp "Headline")

We want this to read *This Month:* followed by the current month in the format *MM/YYYY*. To achieve this dynamically, we can use *handlebars* by opening the *bindings* drawer using the lightening bolt next to the *text* field:

![Date](https://res.cloudinary.com/daog6scxm/image/upload/v1699624354/cms/supply-chain-dashboard/Supply_Chain_Dashboard_8_p1ckb5.webp "Date")

The specific handlebars expression we’re using is:

{{< highlight javascript "linenos=inline" >}}

This Month: {{ date now "MM/YYYY" }}

{{< /highlight >}}

Below our headline, we’re going to display our row of cards. We’ll add a *container* and set its direction to horizontal:

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_9_e5ddo5.webp "Container")

Within this, we’ll add a *cards block*.

![Cards Block](https://res.cloudinary.com/daog6scxm/image/upload/v1699624329/cms/supply-chain-dashboard/Supply_Chain_Dashboard_10_glvwwh.webp "Cards Block")

This is a prebuilt set of components that will iterate over whatever data source we point it at and display configurable attributes for each entry.

By the time we’re finished, we’ll have three single cards, showing the current month’s:

- Average purchase order spend.
- Total purchase order spend.
- Number of of purchase orders.

To achieve this, we’ll need a custom query. Head to your Postgres data source, and choose *create new query*:

![Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1699624338/cms/supply-chain-dashboard/Supply_Chain_Dashboard_11_pqsimz.webp "Queries")

On this screen, we can name our query, write our SQL syntax, configure bindable values, or write JavaScript to transform the response data.

We’re going to call our query *CostStatsByMonth*:

![New Query](https://res.cloudinary.com/daog6scxm/image/upload/v1699624342/cms/supply-chain-dashboard/Supply_Chain_Dashboard_12_bqgcwm.webp "New Query")

We need to SELECT the following data from our *purchase_orders* table:

- The numerical *month* and *year*, extracted from *issue_date* and cast as *integers*.
- The SUM of *cost*.
- The AVERAGE of *cost*.
- The COUNT of rows.

We’ll then order and group these by *year* and *month*.

So, our query will be:

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM po.issue_date)::INTEGER AS year,

 EXTRACT(MONTH FROM po.issue_date)::INTEGER AS month,

 SUM(po.cost) AS total_cost,

 AVG(po.cost) AS avg_cost,

​	COUNT(*)::INTEGER AS po_count

FROM purchase_orders po

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1699624347/cms/supply-chain-dashboard/Supply_Chain_Dashboard_13_gz0yki.webp "Response")

The response object looks like this:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "total_cost": 6270,

 "avg_cost": 3135,

 "po_count": 2

}

{{< /highlight >}}

Now, head back to the *design* tab and point your *cards block* at this new query, under its *data* field:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1699624352/cms/supply-chain-dashboard/Supply_Chain_Dashboard_14_tit6xd.webp "Cards")

Note that now we have three cards, because we have three months of dummy data. We’ll rename our *cards block* to *Average Cards block*.

For this *cards block* we want the *title* field to display the query response for the *average cost*. We’ll use the binding:

{{< highlight javascript "linenos=inline" >}}

${{ round Average Cards block.CostStatsByMonth.avg_cost }}

{{< /highlight >}}

We’ve placed a dollar sign in front of the value and used the *round* helper to display the average cost as an integer:

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1699624354/cms/supply-chain-dashboard/Supply_Chain_Dashboard_15_uoyxqa.webp "Filter")

We’ll also give our cards a descriptive *subtitle* and remove the *description* entirely.

![Display](https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_16_frluy9.webp "Display")

Now, we’re displaying the right data, but we only want this for the *current month*. We can achieve this with *filters*.

We’ll open the *filters drawer* and add two expressions based on the *year* and *month* attributes of the response data.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_17_jq3rnf.webp "Filter")

This time, instead of using handlebars, we’ll write a little bit of JavaScript for our bindings.

So we’re filtering the *month* to equal:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getMonth() + 1;

{{< /highlight >}}

Note that JavaScript uses zero-based counting for months, so we need to add 1 to the output of the .getMonth() function.

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1699624329/cms/supply-chain-dashboard/Supply_Chain_Dashboard_18_puenm9.webp "JavaScript")

For the year, we’re using:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getFullYear();

{{< /highlight >}}

![Card](https://res.cloudinary.com/daog6scxm/image/upload/v1699624337/cms/supply-chain-dashboard/Supply_Chain_Dashboard_19_igwapt.webp "Card")

To save ourselves a bit of time, we’ll duplicate this card twice.

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1699624340/cms/supply-chain-dashboard/Supply_Chain_Dashboard_20_hfi64w.webp "Duplicate")

This carried across the filters that we’ve created, so all we need to do is swap out the *names*, *titles,* and *subtitles* to reflect the other two attributes in our query response, giving us:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1699624346/cms/supply-chain-dashboard/Supply_Chain_Dashboard_21_ualnna.webp "Cards")

And that’s our cards done.

## 3. Costs by category and vendor

Below our cards, we want to display two charts. One will be a *pie chart* which breaks up our costs for the current month by *category*. The other will be a *bar chart* that does the same thing by *company*.

Both of these attributes are stored in our *vendors* table.

We’ll start by adding another horizontal container.

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1699624351/cms/supply-chain-dashboard/Supply_Chain_Dashboard_22_ezojvw.webp "Container")

We’ll need a new query for each of these charts. We’ll start by adding a query called *CostsByCategory*:

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1699624351/cms/supply-chain-dashboard/Supply_Chain_Dashboard_23_dicvd4.webp "Query")

We want to SELECT the *category* from the *vendors* table and the *total cost*, *month,* and *year* from the *purchase_orders table* - the same as we did in our last query.

However, *purchase_orders* and *vendors* aren’t directly related - but they’re both related to the *shipments* table.

We’ll need two *JOIN* statements:

- Between *shipments*’ *purchase_order_id* and *purchase_orders’* *po_number*.
- Between *shipments’ vendor_id* and *vendors’* *v_id*.

We’re also going to GROUP and ORDER BY *category, month,* and *year*.

Our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 v.category,

 CAST(EXTRACT(YEAR FROM po.issue_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM po.issue_date) AS INTEGER) AS month,

 SUM(po.cost) AS total_cost

FROM purchase_orders po

JOIN shipments s ON po.po_number = s.purchase_order_id

JOIN vendors v ON s.vendor_id = v.v_id

GROUP BY v.category, year, month

ORDER BY v.category, year, month;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_24_erih1i.webp "Response")

The response schema is:

{{< highlight javascript "linenos=inline" >}}

{

 "category": "Biotechnology",

 "year": 2023,

 "month": 10,

 "total_cost": 2942

}

{{< /highlight >}}

Back to *design*, we’ll add a *chart block* inside our new container:

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_25_su26m5.webp "Supply Chain Dashboard")

We’ll set *chart type* to *pie* and *data* to our new query:

![Chart Settings](https://res.cloudinary.com/daog6scxm/image/upload/v1699624328/cms/supply-chain-dashboard/Supply_Chain_Dashboard_26_egmf0y.webp "Chart settings")

Then, we need to tell our chart which data we want it to display on each axis. We’ll set the *label column* to *category* and the *data column* to *total_cost*.

![Axis](https://res.cloudinary.com/daog6scxm/image/upload/v1699624330/cms/supply-chain-dashboard/Supply_Chain_Dashboard_27_uyf0wa.webp "Axis")

We’ll also add some CSS to set the *width* to 50%:

![Width](https://res.cloudinary.com/daog6scxm/image/upload/v1699624338/cms/supply-chain-dashboard/Supply_Chain_Dashboard_28_uruthz.webp "Width")

Lastly, we’ll apply the exact same filters as we did to our cards so that our chart only displays the current month’s values:

![Filters](https://res.cloudinary.com/daog6scxm/image/upload/v1699624346/cms/supply-chain-dashboard/Supply_Chain_Dashboard_29_ktcdrw.webp "Filters")

Beside this, we want a *bar chart* that displays similar data, broken up by *company_name*. We’ll add a new query called *CostsByCompanyName*.

This will work the exact same way as our previous query, just replacing the *category* with the *company_name* attribute from our *vendors* table.

So, our new query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 v.company_name,

 CAST(EXTRACT(YEAR FROM po.issue_date) AS INTEGER) AS year,

 CAST(EXTRACT(MONTH FROM po.issue_date) AS INTEGER) AS month,

 SUM(po.cost) AS total_cost

FROM purchase_orders po

JOIN shipments s ON po.po_number = s.purchase_order_id

JOIN vendors v ON s.vendor_id = v.v_id

GROUP BY v.company_name, year, month

ORDER BY v.company_name, year, month;

{{< /highlight >}}

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1699624350/cms/supply-chain-dashboard/Supply_Chain_Dashboard_30_w0ofgo.webp "Query")

This returns:

{{< highlight javascript "linenos=inline" >}}

{

 "company_name": "Cassin and Sons",

 "year": 2023,

 "month": 9,

 "total_cost": 3078

}

{{< /highlight >}}

We’ll duplicate our existing chart, rename it, set the *type* to *bar*, and point it at this new query:

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1699624348/cms/supply-chain-dashboard/Supply_Chain_Dashboard_31_mxyd39.webp "Duplicate")

We’ll set the *label column* to *company_name*, the *data column* to *total_cost*, and tick the *horizontal* checkbox:

![Bar Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_32_wodh5q.webp "Bar chart")

We’ll also give our two charts descriptive titles:

![Titles](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_33_ed39gl.webp "Titles")

We’re going to create two more charts beneath these ones. To save ourselves configuring our filters again, we’ll simply duplicate their entire parent container:

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_34_ajvnfh.webp "Duplicate")

## 4. Net stock change by item

Our third chart is going to be a *bar chart* displaying the net stock change by item for the current month. 

When we make a sale, our stock decreases. When a sale is returned or we receive a new consignment of an item, the stock increases.

This will require a more complex query, involving our *shipments,* *consignments*, *sales*, and *returns* tables. 

We’ll start by using a *common table expression* with three SELECT statements:

1. Retrieves the item_name and SUM of quantities from the *consignments* table, along with the relevant *month* and *year* from the related *shipments* rows.
2. Retrieves the *month* and *year,* *item_name*, and negative *SUM* of quantities from the *sales* table.
3. Retrieves the *month* and *year* from the *returns* table along with the *item_name* and SUM of quantities from the original *sales* entry.

We’ll then aggregate these quantities to calculate the total change, and GROUP BY *month, year,* and *item_name*.

We’ll call this query *CumulativeChangeByItemByMonth*:

{{< highlight sql "linenos=inline" >}}

WITH AllStockChanges AS (

  SELECT

​    c.item_name,

​    DATE_TRUNC('month', s.arrive_date) AS month_year,

​    SUM(c.quantity) AS stock_change

  FROM consignments c

  JOIN shipments s ON c.shipment_id = s.shipment_number

  GROUP BY c.item_name, month_year

  UNION ALL

  SELECT

​    s.item_name,

​    DATE_TRUNC('month', s.date) AS month_year,

​    -SUM(s.quantity) AS stock_change

  FROM sales s

  GROUP BY s.item_name, month_year

  UNION ALL

  SELECT

​    s.item_name,

​    DATE_TRUNC('month', r.complete_date) AS month_year,

​    SUM(s.quantity) AS stock_change

  FROM sales s

  JOIN returns r ON s.id = r.sale_id

  GROUP BY s.item_name, month_year

)

SELECT

  item_name,

  EXTRACT(YEAR FROM month_year)::INTEGER AS year,

  EXTRACT(MONTH FROM month_year)::INTEGER AS month,

  SUM(stock_change) AS total_stock_change

FROM AllStockChanges

GROUP BY item_name, year, month

ORDER BY item_name, year, month;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1699624329/cms/supply-chain-dashboard/Supply_Chain_Dashboard_35_sbmvkg.webp "Response")

The response will look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "item_name": "Bulldozer",

 "year": 2023,

 "month": 10,

 "total_stock_change": 110

}

{{< /highlight >}}

Now, head back to the *design* tab, and we’ll populate our third chart with the *item_name* and *total_stock_change* attributes from this new query, as well as setting its *type* to bar and editing the *title*:

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624338/cms/supply-chain-dashboard/Supply_Chain_Dashboard_36_y4guez.webp "Supply Chain Dashboard")

## 5. Cumulative daily spending

Our fourth and final chart will be a *line graph* displaying our cumulative spending for the month so far.

Once again, we’ll start with a CTE. This will create a *date series* starting on the first of the current month and ending on the current date. We’ll have on entry per day for the month so far.

In our main query, we’ll SELECT the numerical *day, month,* and *year* along with the *cumulative sum* of the *cost* attribute from our *purchase_orders* table corresponding to each of these days.

We’ll also use a COALESCE function so that we return an entry for each date in the series, even if no new costs are added. Finally, we’ll use a LEFT JOIN from our date series to the *issue_date* colum in our *purchase_orders* table.

We’ll call this query *CumulativeSpendThisMonth*:

{{< highlight sql "linenos=inline" >}}

WITH date_series AS (

 SELECT

  generate_series(

   DATE_TRUNC('MONTH', current_date)::DATE,

   current_date,

   '1 day'::interval

  ) AS series_date

)

SELECT

 EXTRACT(YEAR FROM ds.series_date)::INTEGER AS year,

 EXTRACT(MONTH FROM ds.series_date)::INTEGER AS month,

 EXTRACT(DAY FROM ds.series_date)::INTEGER AS day,

 COALESCE(SUM(po.cost) OVER (ORDER BY ds.series_date), 0) AS running_daily_cumulative_cost

FROM date_series ds

LEFT JOIN purchase_orders po ON ds.series_date::DATE = po.issue_date::DATE

ORDER BY ds.series_date;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1699624344/cms/supply-chain-dashboard/Supply_Chain_Dashboard_37_xxddmm.webp "Response")

It will return a data object like this:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 11,

 "day": 1,

 "running_daily_cumulative_cost": 4820

}

{{< /highlight >}}

To present this on our final chart, we’ll change its *type* to *line*, its *data* to our new query, the *label column* to *day* and the *data column* to *running_daily_cumulative_cost*. We’ll also set the *curve* field to *straight* and update the *title*:

![Line Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699624343/cms/supply-chain-dashboard/Supply_Chain_Dashboard_38_zfeuyg.webp "Line Chart")

Here’s what we have so far:

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624345/cms/supply-chain-dashboard/Supply_Chain_Dashboard_39_n8ljsu.webp "Supply Chain Dashboard")

## 6. Design tweaks and publishing

Now, our supply chain dashboard presents all of the data that we want it to. But - it looks a little drab.

So, we’ll make a few tweaks to brighten things up.

First, we’ll change the *theme* to *lightest*:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1699624318/cms/supply-chain-dashboard/Supply_Chain_Dashboard_40_zkuluj.webp "Theme")

Then, we’ll play with the *color palette* fields on each of our charts to better differentiate them:

![Color Palette](https://res.cloudinary.com/daog6scxm/image/upload/v1699624319/cms/supply-chain-dashboard/Supply_Chain_Dashboard_41_q0n2jv.webp "Color Palette")

When we’re happy, we can publish our app to push it live:

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1699624320/cms/supply-chain-dashboard/Supply_Chain_Dashboard_42_imkzm2.webp "Publish")

And here’s a reminder of what the finished product looks like:

![Supply Chain Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699624329/cms/supply-chain-dashboard/Supply_Chain_Dashboard_43_ydct7f.webp "Supply Chain Dashboard")

If you enjoyed this tutorial, check out our guide on how to build a [warehouse dashboard](https://budibase.com/blog/tutorials/warehouse-dashboard/).