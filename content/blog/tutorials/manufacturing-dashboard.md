+++
author = "Ronan McQuillan"
date = 2023-11-10
description = "Follow our guide to building a manufacturing dashboard."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1699627539/cms/manufacturing-dashboard/Manufacturing_Dashboard_ziwuom.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1699627539/cms/manufacturing-dashboard/Manufacturing_Dashboard_ziwuom.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Manufacturing Dashboard"
+++

Manufacturing dashboards offer a real-time snapshot of the state of your production processes. The goal is to provide decision-makers with a fast, easy way to access KPIs and other important insights.

Crucially, this replaces the need to manually crunch numbers each time you need the figures in question.

Any time we set out to build dashboards, the biggest challenge is getting all of the different data that we need into one location, formatted compatibly.

Today, we’re checking out how Budibase makes it easier than ever to output professional dashboards based on existing data sources.

But, before we get to that, let’s get to grips with the basics.

## What is a manufacturing dashboard

A dashboard is a reporting UI that connects to an external data source. That way, users can view the most up-to-date figures for whatever information we’ve configured our dashboard to display, each time they access it.

The goal is to simultaneously reduce admin workloads and improve access to key information.

In the specific case of a manufacturing dashboard, this will typically concern data relating to our productivity, efficiency, incidents, breakages, costs, or other KPIs.

As such, we might need to draw on a fairly diverse data set - comprising our manufacturing output, incident reports, machinery, and more.

With that in mind…

## What are we building?

Today, we’re going to be building a relatively simple, single-screen manufacturing dashboard. 

This is going to focus on the current month’s productivity, quality control, breakages, and incidents - across two manufacturing sites - breaking various KPIs down by machine, location, and product.

Here’s what we’ll have by the end:

![Manufacturing Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699627436/cms/manufacturing-dashboard/Manufacturing_Dashboard_1_v2m34m.webp "Manufacturing Dashboard")

To achieve this, we’re going to connect to our manufacturing database, which is stored in an external PostgreSQL instance. 

This is made up of five interrelated tables, called *production*, *machines*, *qa*, *breakages*, and *incidents*.

We’re going to create custom queries within Budibase to extract the information we need from these - and then use this to populate our display elements. Budibase is the ideal solution for SQL pros who need to turn data into professional UIs.

Let’s dive right in.

## How to build a manufacturing dashboard in 5 steps

If you haven’t already, sign up for a free Budibase account.

{{< cta >}}

## 1. Create a Budibase app and connect your data

The first thing we need to do is create a new Budibase application. We can use a template or import an existing app file, but we’re starting from scratch. We then need to give our app a name and URL extension:

![New Application](https://res.cloudinary.com/daog6scxm/image/upload/v1699627447/cms/manufacturing-dashboard/Manufacturing_Dashboard_2_whcijf.webp "New Applications")

Then, we’re asked which data source we’d like to connect to first:

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1699627452/cms/manufacturing-dashboard/Manufacturing_Dashboard_3_izicwt.webp "Data sources")

Budibase offers dedicated connectors for a huge range of SQL and NoSQL databases, alongside REST, Google Sheets, and our internal database.

As we say though, we’re using Postgres today.

When we select this, we’ll be prompted to enter our configuration details:

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1699627458/cms/manufacturing-dashboard/Manufacturing_Dashboard_4_ywi8fd.webp "Config")

We can then choose which of the constituent tables we want to *fetch* so that we can manipulate them in Budibase:

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1699627461/cms/manufacturing-dashboard/Manufacturing_Dashboard_5_b4qoyw.webp "Fetch tables")

Straight away, we can use Budibase’s back-end to perform CRUD actions on our tables or alter their schemas, without writing a single query:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1699627430/cms/manufacturing-dashboard/Manufacturing_Dashboard_6_otozzx.webp "Table")

But, we’re primarily going to rely on custom queries to transform and aggregate our data in order to build a manufacturing dashboard.

So, let’s quickly get to grips with what’s stored in our tables and how they all relate to each other:

- *production* represents the product that we create, with a unique *id* and *product, date,* and *turnaround_time_minutes* attributes. This also stores a *machine_id* which corresponds to the *id* attribute in the *machines* table.
- *machines* store a unique *id*, *location*, and *machine_name*. The possible *locations* are *Texas* and *Anaheim*.
- *qa* has a unique *id* and a *production_id* attribute that relates to the *id* of the *production* table. It also stores a *description* and an attribute called *pass_fail* which can either be set to *Pass* or *Fail*.
- *breakages* has a unique *id*, *date*, and *description*, as well as a *production_id* which links it to the *production* table.
- *incidents* has a unique *id*, *date, category*, and *description*. It relates to the *machines* table via an attribute called *machine_id*.

We’re going to write several custom queries that aggregate and transform data points from different combinations of these tables to build our various UI elements.

## 2. Building our summary cards

The first thing we‘re going to do is head to the *design* section and create a new *blank screen*. We can call this anything we like, as our dashboard is only going to have one screen anyway. We’ve simply set our URL path to “*/*”.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1699627436/cms/manufacturing-dashboard/Manufacturing_Dashboard_7_ryx2n8.webp "Blank Screen")

On this, we’ll first add a *headline* component.

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1699627444/cms/manufacturing-dashboard/Manufacturing_Dashboard_8_rgbf6p.webp "Headline")

We’ll open up the bindings drawer to set the *text* attribute. We can do this with either handlebars or Javascript:

![Text](https://res.cloudinary.com/daog6scxm/image/upload/v1699627451/cms/manufacturing-dashboard/Manufacturing_Dashboard_9_lu6vkh.webp "Text")

We want our headline to read *This Month:* followed by the current month in the format *“MM/YYYY”*. 

To achieve this, we’re going to use the following handlebars expression:

{{< highlight javascript "linenos=inline" >}}

This Month: {{ date now "MM" }}/{{ date now "YYYY"}}

{{< /highlight >}}



![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1699627457/cms/manufacturing-dashboard/Manufacturing_Dashboard_10_uw8lk2.webp "Bindings")

Beneath this, we’re going to add a *container* and set its *direction* to *horizontal*:

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1699627460/cms/manufacturing-dashboard/Manufacturing_Dashboard_11_v5as9n.webp "Container")

Inside of this, we’ll nest a *cards block*. This is a preconfigured set of components that we can point at a data source. It will then iterate over this, displaying whichever values we specify for each entry.

![Cards block](https://res.cloudinary.com/daog6scxm/image/upload/v1699627430/cms/manufacturing-dashboard/Manufacturing_Dashboard_12_uhfmez.webp "Cards block")

When we’re finished, we’ll have three separate cards blocks, each displaying a single card.

The first one will display the current month’s overall pass rate from our *qa* table.

To calculate this, we’ll create a custom query under our Postgres data source:

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1699627435/cms/manufacturing-dashboard/Manufacturing_Dashboard_13_vcxvut.webp "Query")

We’ll call this one *QaPassRateByMonth*. 

We need the *pass_fail* and *production_id* attributes from the *qa* table and the *date* and *product_name* from the corresponding *production* row.

![New query](https://res.cloudinary.com/daog6scxm/image/upload/v1699627444/cms/manufacturing-dashboard/Manufacturing_Dashboard_14_iocoba.webp "New query")

We want to SELECT the numerical month and year from the *date* attribute and the COUNT of *qa* rows where *pass_fail* is set to *Pass*. We’ll then divide this by the overall COUNT and multiply by 100.

We’ll use a LEFT JOIN statement between *p.id* and *qa*.*production_id* and GROUP BY *year* and *month*.

So, our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM p.date)::INTEGER AS year,

 EXTRACT(MONTH FROM p.date)::INTEGER AS month,

 COUNT(qa.id) FILTER (WHERE qa.pass_fail = 'Pass') * 100.0 / COUNT(qa.id)::FLOAT AS pass_percentage

FROM production p

LEFT JOIN qa ON p.id = qa.production_id

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1699627451/cms/manufacturing-dashboard/Manufacturing_Dashboard_15_mf8fo1.webp "Response")

The data object this returns looks like:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "pass_percentage": 90

}

{{< /highlight >}}

Now, head back to the *design* section, and we’ll point the *data* field for our *cards block* to our new query:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1699627456/cms/manufacturing-dashboard/Manufacturing_Dashboard_16_d9gmad.webp "Cards")

Now, it’s displaying three cards - because our sample data goes back three months. In a second, we’ll set a couple of filters so that this only displays the current month.

First, though, we want to set the actual data that our cards display.

We’ll start by binding the title to *{{ round Pass Rate Cards block.QaPassRateByMonth.pass_percentage }}%*.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1699627459/cms/manufacturing-dashboard/Manufacturing_Dashboard_17_wkg9a0.webp "Bindings")

We’ll also give it a descriptive *subtitle* and remove the *description* entirely:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1699627430/cms/manufacturing-dashboard/Manufacturing_Dashboard_18_a1ddoq.webp "Bindings")

Finally, we’ll add two filtering statements - based on the *month* and *year* attributes in our query response:

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1699627435/cms/manufacturing-dashboard/Manufacturing_Dashboard_19_wjnzk9.webp "Filter")

This time, we’re going to use JavaScript for our bindings instead of handlebars. So, we’ll filter the year against:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getFullYear():

{{< /highlight >}}

For the month, we’ll use:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getMonth() + 1;

{{< /highlight >}}

We have to add one here because JavaScript uses zero-based counting for dates. So, the index for January is *0*.

Here’s what our filtered cards block looks like:

![img](https://res.cloudinary.com/daog6scxm/image/upload/v1699627443/cms/manufacturing-dashboard/Manufacturing_Dashboard_20_hgilc2.webp "")

We’re going to use the same filtering expressions for our other two cards. Rather than configure these from scratch, we’ll make two duplicates of this existing one:

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1699627450/cms/manufacturing-dashboard/Manufacturing_Dashboard_21_rymflg.webp "Duplicate")

All we need to do is swap out the data. 

The second card will show the total number of stock breakages we’ve had this week.

We’ll create a new query called *BreakagesByMonth*. This time we want to *SELECT* to COUNT of rows and the numerical *month* and *year* from the *breakages* table, grouped and ordered by *month* and *year*.

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM date)::INTEGER AS year,

 EXTRACT(MONTH FROM date)::INTEGER AS month,

 COUNT(*)::INTEGER AS breakages_count

FROM breakages

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

The response schema is:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "breakages_count": 5

}

{{< /highlight >}}

We’ll also create a query called *IncidentsByMonth* to retrieve the same information from the *incidents* table.

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM date)::INTEGER AS year,

 EXTRACT(MONTH FROM date)::INTEGER AS month,

 COUNT(*)::INTEGER AS incidents_count

FROM incidents

GROUP BY year, month

ORDER BY year, month;

{{< /highlight >}}

This returns:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "incidents_count": 41

}

{{< /highlight >}}

Now, we can simply swap the *data* for our new cards to these queries and update the title bindings and subtitles.

Here’s our completed row of cards:

![Manufacturing Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699627455/cms/manufacturing-dashboard/Manufacturing_Dashboard_22_hsxaa1.webp "Manufacturing Dashboard")

## 3. Productivity breakdowns

Next, we’ll start building some charts. Add another horizontal container, this time giving it a top *margin* of 16px:

![Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699627454/cms/manufacturing-dashboard/Manufacturing_Dashboard_23_rao4tw.webp "Chart")

By the time we’re finished, we’ll have two bar charts inside this, displaying the number of *products* we’ve created this month - respectively broken down by *machine* and *location*.

Start by adding a *chart block*. This is a preconfigured set of components that accepts a data source and visualizes whichever attributes we tell it to.

![Chart Block](https://res.cloudinary.com/daog6scxm/image/upload/v1699627430/cms/manufacturing-dashboard/Manufacturing_Dashboard_24_xd1k9k.webp "Chart Block")

We’ll create a new query called *ProductionCountByMachineByMonth*. 

We’ll SELECT the *machine_name* from *machines* along with the following from *production*:

- The numerical month and year.
- The COUNT of the *machine_id* attribute.

We’ll then LEFT JOIN on *m.id = p.machine_id* and GROUP BY *machine_name, month,* and *year*.

{{< highlight sql "linenos=inline" >}}

SELECT

 m.machine_name,

 EXTRACT(YEAR FROM p.date)::INTEGER AS year,

 EXTRACT(MONTH FROM p.date)::INTEGER AS month,

 COUNT(p.machine_id)::INTEGER AS production_count

FROM machines m

LEFT JOIN production p ON m.id = p.machine_id

GROUP BY m.machine_name, year, month

ORDER BY m.machine_name, year, month;

{{< /highlight >}}

This returns:

{{< highlight javascript "linenos=inline" >}}

{

 "machine_name": "Machine 1",

 "year": 2023,

 "month": 9,

 "production_count": 7

}

{{< /highlight >}}

We’ll set the *data* for our chart block to this query - and choose *bar* for its type. We’ll also give it a descriptive *title*:

![chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699627434/cms/manufacturing-dashboard/Manufacturing_Dashboard_25_vqvu6r.webp "chart")

We also need to configure which attributes will be used for each axis on our graph. We’ll set the *label column* to *machine_name* and the *data column* to *production_count*:

![Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699627442/cms/manufacturing-dashboard/Manufacturing_Dashboard_26_rkwp4s.webp "Chart")

Just like with the cards, a chart block iterates over the data source we point it at, and displays values for all of the entires. So, we’ll apply the same filters as we did earlier to our *month* and *year* attributes in the query response:

![Filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1699627448/cms/manufacturing-dashboard/Manufacturing_Dashboard_27_lrs5dl.webp "Filtering")

Lastly, we’ll add some custom CSS to set the width to 50%:

![Edit custom CSS](https://res.cloudinary.com/daog6scxm/image/upload/v1699627447/cms/manufacturing-dashboard/Manufacturing_Dashboard_28_ccagap.webp "Edit custom CSS")

Here’s our finished chart:

![Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699627447/cms/manufacturing-dashboard/Manufacturing_Dashboard_29_ivf7mm.webp "Charts")

Again, we’ll duplicate this to save ourselves a bit of time:

![Manufacturing Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699627429/cms/manufacturing-dashboard/Manufacturing_Dashboard_30_fgwn6k.webp "Manufacturing Dashboard")

For the second chart, we’ll use a similar query that calculates the count of products per month, but grouped by the *location* attribute from the *machines* table, rather than *machine_name*.

We’ll call this *ProductionCountByLocationByMonth*:

{{< highlight sql "linenos=inline" >}}

SELECT

 m.location,

 EXTRACT(YEAR FROM p.date)::INTEGER AS year,

 EXTRACT(MONTH FROM p.date)::INTEGER AS month,

 COUNT(p.machine_id)::INTEGER AS production_count

FROM machines m

LEFT JOIN production p ON m.id = p.machine_id

GROUP BY m.location, year, month

ORDER BY m.location, year, month;

{{< /highlight >}}

This returns:

{{< highlight javascript "linenos=inline" >}}

{

 "location": "Anaheim",

 "year": 2023,

 "month": 9,

 "production_count": 16

}

{{< /highlight >}}

Back on the design section, we can swap the data for our second chart to this query’s response:

![Horizontal](https://res.cloudinary.com/daog6scxm/image/upload/v1699627433/cms/manufacturing-dashboard/Manufacturing_Dashboard_31_sizouw.webp "Horizontal")

We’ll also check the *horizontal* option:

![Horizontal](https://res.cloudinary.com/daog6scxm/image/upload/v1699627439/cms/manufacturing-dashboard/Manufacturing_Dashboard_32_xkv7xy.webp "Horizontal")

Here’s what we have so far:

![Manufacturing Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699627439/cms/manufacturing-dashboard/Manufacturing_Dashboard_33_qyxlnl.webp "Manufacturing Dashboard")

## 4. Breakages and incidents breakdowns

Next, we’ll create our second row of charts. We want a pie chart to show the number of breakages by product and a bar chart showing the incidents by machine.

We’ll start by duplicating our entire existing chart container:

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1699627439/cms/manufacturing-dashboard/Manufacturing_Dashboard_34_cm6tcu.webp "Duplicate")

Just like before, we simply need to create new queries to extract the data we want to display, and then swap this out on each of our charts.

We’ll call the first one *BreakagesByMonthByProduct*. This will SELECT the same information as our original *BreakagesByMonth* query - but this time also retrieving the relevant *product* attribute from the *production* table.

We’ll JOIN *breakages* to *production* on *b.production_id* *= p.id*.

{{< highlight sql "linenos=inline" >}}

SELECT

 EXTRACT(YEAR FROM b.date)::INTEGER AS year,

 EXTRACT(MONTH FROM b.date)::INTEGER AS month,

 p.product,

 COUNT(*)::INTEGER AS breakages_count

FROM breakages b

JOIN production p ON b.production_id = p.id

GROUP BY year, month, p.product

ORDER BY year, month, p.product;

{{< /highlight >}}

This will return:

{{< highlight javascript "linenos=inline" >}}

{

 "year": 2023,

 "month": 9,

 "product": "Ground Screw",

 "breakages_count": 1

}

{{< /highlight >}}

Back on the *design* screen, we’ll update our third chart to point it at this new query. We’ll also set its *type* to *pie*, *label column* to *product,* and *data column* to *breakages_count*.

![Pie chart](https://res.cloudinary.com/daog6scxm/image/upload/v1699627438/cms/manufacturing-dashboard/Manufacturing_Dashboard_35_jimeej.webp "Pie chart")

Our last query will be called *IncidentsByMachine*. We need the *machine_name* from *machines*, along with the numerical *month*, *year*, and COUNT of rows from the *incidents* table.

We’ll JOIN these on *i.machine_id = m.id*.

{{< highlight sql "linenos=inline" >}}

SELECT

 m.machine_name,

 EXTRACT(YEAR FROM i.date)::INTEGER AS year,

 EXTRACT(MONTH FROM i.date)::INTEGER AS month,

 COUNT(*)::INTEGER AS incidents_count

FROM incidents i

JOIN machines m ON i.machine_id = m.id

GROUP BY m.machine_name, year, month

ORDER BY m.machine_name, year, month;

{{< /highlight >}}

This will return:

{{< highlight javascript "linenos=inline" >}}

{

 "machine_name": "Machine 1",

 "year": 2023,

 "month": 9,

 "incidents_count": 12

}

{{< /highlight >}}

We’ll swap the data for our final chart to match this query response - this time deselecting the *horizontal* option.

Here’s our manufacturing dashboard so far:

![Manufacturing Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1699627429/cms/manufacturing-dashboard/Manufacturing_Dashboard_36_ke39n2.webp "Manufacturing Dashboard")

## 5. Design tweaks and publishing

Before we push this live, we’re going to make a couple of minor UX changes.

First of all, we’ll choose the *lightest* theme under *screen*:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1699627433/cms/manufacturing-dashboard/Manufacturing_Dashboard_37_ehrs2v.webp "Theme")

Finally, we’ll adjust the *color palettes* of our charts, to improve visual separation:

![Color palettes](https://res.cloudinary.com/daog6scxm/image/upload/v1699627432/cms/manufacturing-dashboard/Manufacturing_Dashboard_38_ndtltp.webp "Color palettes")

Once we’re satisfied, we can publish our app to push it live:

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1699627431/cms/manufacturing-dashboard/Manufacturing_Dashboard_39_afs0em.webp "Publish")

Here’s a reminder of what our finished manufacturing dashboard looks like:

![img](https://res.cloudinary.com/daog6scxm/image/upload/v1699627430/cms/manufacturing-dashboard/Manufacturing_Dashbord_40_vdq7fz.webp "Manufacturing Dashboard")

If you found this guide helpful, you might also like our tutorial on how to build an [inventory calculator](https://budibase.com/blog/tutorials/inventory-calculator/).