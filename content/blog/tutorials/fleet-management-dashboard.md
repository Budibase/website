+++
author = "Ronan McQuillan"
date = 2023-10-13
description = "Check out our 5-step guide to building a fleet management dashboard."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1697194859/cms/fleet-management-dashboard/Header_uxctdg.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1697194859/cms/fleet-management-dashboard/Header_uxctdg.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Fleet Management Dashboard"
+++

An effective fleet management dashboard is one of the most fundamental tools in any logistics team’s arsenal. The idea is to give us a clear, up-to-date snapshot of our vehicles across our entire distribution network.

Today, we’re exploring how we can use Budibase to build professional dashboards that leverage existing data.

As we’ll see, Budibase is the ideal tool for extracting insights from all kinds of data sources and turning them into clear, actionable insights - so we can make better-informed decisions.

But before that, let’s think about what this means for logistics teams.

## What is a fleet management dashboard?

Fleet management dashboards are reporting UIs that display key metrics and KPIs relating to various aspects of how we use our vehicles. 

This can include things like where our assets are, how much we’re spending on fuel, our performance in terms of deliveries, statistics around our overall vehicle utilization, driver safety, or any other relevant data that decision-makers might need.

Of course, this will vary greatly depending on the size and complexity of your fleet - as well as how you use it.

As with any kind of dashboard, the idea is that we can configure our reports once - and then they’ll populate with the most up-to-date information in real-time.

{{< youtube lJlM5oxyick }}

## What are we building?

Our fleet management dashboard is built around two thematic reports - one for insights into our vehicles themselves - and one for their performance on deliveries.

Here’s what the fleet dashboard UI will look like when we’re done:

![Fleet Management Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194859/cms/fleet-management-dashboard/Fleet_Management_Dashboard_1_dqxsnn.webp "Fleet Management Dashboard")

Let’s dive in.

## How to build a fleet management dashboard in 5 steps

If you haven’t already, sign up for a free Budibase account so you can follow along with this tutorial.

{{< cta >}}

## 1. Create a Budibase app and connect your data

The first thing we’re going to do is create a new Budibase application and give it a name. We have the option of starting with a template or importing an existing app, but we’re starting from scratch:

![New app](https://res.cloudinary.com/daog6scxm/image/upload/v1697194861/cms/fleet-management-dashboard/Fleet_Management_Dashboard_2_pz5pxz.webp "New App")

Straight away, we’ll be prompted to choose our data source. Budibase offers dedicated connectors for a huge array of relational and non-relational databases, as well as REST, Google Sheets, and our own internal DB.

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1697194860/cms/fleet-management-dashboard/Fleet_Management_Dashboard_3_ghu57u.webp "Data sources")

We’re going to build our dashboard around data that lives in a Postgres database. When we select this, we’re prompted to enter our database credentials. Users on paid tiers can use environment variables to store these and leverage them across their Budibase apps.

![Credentials](https://res.cloudinary.com/daog6scxm/image/upload/v1697194871/cms/fleet-management-dashboard/Fleet_Management_Dashboard_4_elhghr.webp "Credentials")

We’re then asked which tables we want to pull into our Budibase app:

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1697194878/cms/fleet-management-dashboard/Fleet_Management_Dashboard_5_izh7yy.webp "Fetch Tables")

Our fleet management database is made up of two tables, called *vehicles* and *deliveries*. We’ll fetch both.

## 2. Configuring our data model

Once we’ve fetched our tables, we can immediately start to manipulate them in Budibase’s back-end:

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1697194884/cms/fleet-management-dashboard/Fleet_Management_Dashboard_6_dt8hs1.webp "Tables")

We can use this editable table to add, edit, or delete rows - as well as altering our table’s schema.

Our fleet management dashboard will be mainly built around custom Postgres queries, but we’re still going to make a few changes to our data tables for the sake of house keeping.

On the vehicles table, we want to select the *registration* attribute as our display column:

![Fleet Management Dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194886/cms/fleet-management-dashboard/Fleet_Management_Dashboard_7_c9kt9z.webp "Fleet management dashboard")

We’ll also edit the *status* attribute and choose the *options* type, rather than keeping it as a *text* field. We’ll input the three possible values - *On Delivery, Idle*, and *Maintenance*:

![Enum](https://res.cloudinary.com/daog6scxm/image/upload/v1697194871/cms/fleet-management-dashboard/Fleet_Management_Dashboard_8_ntdrzf.webp "Enum")

We can set a custom color code for our options, but if we don’t then Budibase will do this for us. Here’s what our table looks like now:

![Status](https://res.cloudinary.com/daog6scxm/image/upload/v1697194877/cms/fleet-management-dashboard/Fleet_Management_Dashboard_9_tvedyn.webp "Status")

We’ll make some similar changes to our *deliveries* table - setting the *id* attribute as our display column and changing the *origin* and *destination* fields to the *options* type.

![Deliveries table](https://res.cloudinary.com/daog6scxm/image/upload/v1697194883/cms/fleet-management-dashboard/Fleet_Management_Dashboard_10_ttvpvw.webp "Deliveries Table")

## 3. Building our fleet report

Now, we can start building some interfaces. Each of our reports is effectively made up of four distinct parts.

So, we can take each in turn.

### Summary cards

At the top of our fleet management dashboard, we’ve got a series of cards that read out key statistics about the current state of our fleet.

We’ll start by adding a new blank screen:

![Blank screen](https://res.cloudinary.com/daog6scxm/image/upload/v1697194885/cms/fleet-management-dashboard/Fleet_Management_Dashboard_11_sss6be.webp "Blank screen")

This will be our home screen, so we’ll leave the URL extension blank:

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1697194889/cms/fleet-management-dashboard/Fleet_Management_Dashboard_12_xogy9o.webp "URL")

The first component we want to add is a *container*. We’ll also give this a name and set its direction to horizontal:

![Horizontal container](https://res.cloudinary.com/daog6scxm/image/upload/v1697194889/cms/fleet-management-dashboard/Fleet_Management_Dashboard_13_bbm3f7.webp "Horizontal Container")

Inside this, we’ll place four *cards blocks*. Each of these will iterate over a specific data set and display whichever values from each entry that we want them to.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1697194891/cms/fleet-management-dashboard/Fleet_Management_Dashboard_14_j28x4p.webp "Cards")

Eventually, we’ll populate these with a data set that only has one entry - so we’ll just have one card per *cards* block.

If you cast your mind back to our finished dashboard from earlier, the four metrics we’re going to display in these cards are:

- The average age of vehicles in our fleet.
- Their average mileage.
- The percentage of our vehicles that are currently in use.
- How much we’ve spent on fuel this month.

We’ll get these first three metrics from a single custom query.

So, head back to the *data* tab and add a new query under our Postgres connection:

![Create a query](https://res.cloudinary.com/daog6scxm/image/upload/v1697194890/cms/fleet-management-dashboard/Fleet_Management_Dashboard_15_dd4svi.webp "Create a query")

We’ll call this *AgeMileageUtilization*.

We need to write a SELECT statement that will return three things:

- The AVG of the current date minus each vehicle’s *registration_date*.
- The AVG of the *mileage* attribute.
- The COUNT of vehicles with the *status* attribute “On Delivery” divided by the COUNT of all vehicles.

Therefore, our query will be:

{{< highlight sql "linenos=inline" >}}

SELECT CAST(AVG(

  EXTRACT(YEAR FROM AGE(NOW(), registration_date)) +

  EXTRACT(MONTH FROM AGE(NOW(), registration_date)) / 12.0

) AS DECIMAL) AS average_age,

AVG(mileage) AS average_mileage,

(COUNT(CASE WHEN status = 'On Delivery' THEN 1 END)::decimal / COUNT(*)) * 100 AS percentage_on_delivery

FROM vehicles;

{{< /highlight >}}



![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1697194870/cms/fleet-management-dashboard/Fleet_Management_Dashboard_16_u82bni.webp "Query")

This returns a data objec that looks like this:

{{< highlight javascript "linenos=inline" >}}

{

 "average_age": "2.50000000000000000000",

 "average_mileage": 99518.5,

 "percentage_on_delivery": "50.00000000000000000000"

}

{{< /highlight >}}

Hit save and head back to the *design* section.

We’ll start by giving our first three cards more descriptive names and setting their *data* to our new query. Now each one only displays one card - because it only iterates over a single object:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1697194876/cms/fleet-management-dashboard/Fleet_Management_Dashboard_17_psxlx5.webp "Cards")

Each one has a *title, subtitle*, and *description* field. We’ll set the *title* to be each of the respective figures - and the *subtitle* as some text to explain what this is. 

We’ll just delete the *description* outright - since we don’t need it.

Budibase gives us two different ways to *bind* values to a field - *handlebar expressions* or *JavaScript*. If we were happy with the format of our data as it’s returned by our query, we could just select plain handlebars:

![Decimals](https://res.cloudinary.com/daog6scxm/image/upload/v1697194882/cms/fleet-management-dashboard/Fleet_Management_Dashboard_18_rbmyd6.webp "Decimals")

But, we want to do a little bit of formatting. We’ll use some custom JavaScript for the first two because we want to round our figures to two decimal places.

So, for the average age, we’ll use the following JavaScript as our title binding:

{{< highlight javascript "linenos=inline" >}}

return Number($("AvgAge Card.AgeMileageUtilization.average_age")).toFixed(2);

{{< /highlight >}}

And we’ll set the *subtitle* to *average vehicle age*. We’ll also do basically the same thing with our next card, using our *average_mileage* output from the query.

So far, we have:

![Fleet management dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194884/cms/fleet-management-dashboard/Fleet_Management_Dashboard_19_qul2r4.webp "Fleet management dashboard")

For our utilization rate, we can just display an integer with a percentage sign appended to it. To do this, we’ll use the following handlebars expression as our title binding:

{{< highlight javascript "linenos=inline" >}}

{{ round Utilization block.AgeMileageUtilization.percentage_on_delivery }}%

{{< /highlight >}}

Now we have:

![Percentage](https://res.cloudinary.com/daog6scxm/image/upload/v1697194888/cms/fleet-management-dashboard/Fleet_Management_Dashboard_20_bxnl38.webp "Percentage")

For our last card, things are a bit more complicated. We want to display how much we’ve spent on fuel for the current month so far.

To get this, we’ll first need a new query to SELECT the numerical month, year, and SUM of the fuel costs - grouped and ordered by month and year.

We’ll follow the same process as above to add a new query called FuelCostByMonth. The specific query we’ll use is:

{{< highlight sql "linenos=inline" >}}

SELECT

  CAST(EXTRACT(MONTH FROM departure_date_time) AS INTEGER) AS departure_month,

​		  CAST(EXTRACT(YEAR FROM departure_date_time) AS INTEGER) AS departure_year,

  SUM(fuel_cost) AS total_fuel_cost

FROM deliveries

GROUP BY departure_year, departure_month

ORDER BY departure_year, departure_month;

{{< /highlight >}}

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1697194887/cms/fleet-management-dashboard/Fleet_Management_Dashboard_21_odwdhm.webp "Query")

Here’s the schema that this returns:

{{< highlight javascript "linenos=inline" >}}

{

 "departure_month": 9,

 "departure_year": 2023,

 "total_fuel_cost": 396

}

{{< /highlight >}}

We’ll go ahead and bind this *total_fuel_cost* value to our final card:

![Fuel costs](https://res.cloudinary.com/daog6scxm/image/upload/v1697194887/cms/fleet-management-dashboard/Fleet_Management_Dashboard_22_crq38w.webp "Fuel costs")

But - there’s a problem!

Our query returns multiple data objects. So, we need one final step to add some front-end filtering so that we only see the current month’s figures.

Use the button on the right to open up the filter drawer:

![Filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1697194887/cms/fleet-management-dashboard/Fleet_Management_Dashboard_23_rcv2zq.webp "Filtering")

We need two expressions - one to match the *departure_month* to the current month and another to do the same for the *departure_year.*

For the month, we’ll use this piece of JavaScript (we need to add one because JavaScript uses zero-based counting - so January has an index of 0:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getMonth() + 1;

{{< /highlight >}}

For the year, we can use:

{{< highlight javascript "linenos=inline" >}}

var currentDate = new Date();

return currentDate.getFullYear();

{{< /highlight >}}

And that’s our cards done!

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1697194876/cms/fleet-management-dashboard/Fleet_Management_Dashboard_25_tluxuu.webp "Cards")

### Current location chart

Next, we want a pie chart that displays a breakdown of how our fleet is spread out on the ground.

We want this chart to occupy half of the screen - and later we’ll put another graph beside it - so we’ll start by adding another horizontal container:

![Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1697194882/cms/fleet-management-dashboard/Fleet_Management_Dashboard_26_nlpmy4.webp "Location chart")

We’ll need another query, which we’ll call *VehicleCountByLocation*. 

Again, this is a slightly more complex query - because our *vehicles* table doesn’t have a column for their current location. However, we can figure out the last location where each one made a delivery.

So, we basically need a query that finds the row for each vehicle with the most recent *arrival_date* - and then counts the vehicles at each location based on this.

Our query is:

{{< highlight sql "linenos=inline" >}}

SELECT

  d.destination AS current_location,

  COUNT(*) AS vehicle_count

FROM deliveries d

INNER JOIN (

  SELECT

​    vehicle,

​    MAX(arrival_date_time) AS max_arrival_date

  FROM deliveries

  GROUP BY vehicle

) recent_arrival ON d.vehicle = recent_arrival.vehicle AND d.arrival_date_time = recent_arrival.max_arrival_date

GROUP BY d.destination;

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1697194881/cms/fleet-management-dashboard/Fleet_Management_Dashboard_27_yukajr.webp "Response")

Here’s an example of the kind of data object we’ll get back:

{{< highlight javascript "linenos=inline" >}}

{

 "current_location": "Pittsburgh",

 "vehicle_count": "1"

}

{{< /highlight >}}

Back to the *design tab*!

Inside our container, we’ll add a *chart block*. We’ll give it a name, set its *type* to *pie*, and point it to our new query:

![Fleet management dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194880/cms/fleet-management-dashboard/Fleet_Management_Dashboard_28_lvsqp0.webp "Fleet management dashboard")

However, this won’t display any data until we tell it which attributes we want to use for what.

We’ll set the *label column* to *current_location* and the *data column* to *vehicle_count*.

![Pie Chart](https://res.cloudinary.com/daog6scxm/image/upload/v1697194880/cms/fleet-management-dashboard/Fleet_Management_Dashboard_29_h4ptpq.webp "Pie Chart")

Lastly, we want to make some space for the other chart, so we’ve added some custom CSS to set the chart’s width to 50% and fix its height at 400px. We’ve also given it a descriptive title:

![Custom CSS](https://res.cloudinary.com/daog6scxm/image/upload/v1697194879/cms/fleet-management-dashboard/Fleet_Management_Dashboard_30_c08ipm.webp "Custom CSS")

### Fuel efficiency chart

Next, we want a bar chart that displays each of our vehicles’ average fuel cost per mile.

We’ll start with a new query called *FuelCostByVehicle*. This one is relatively simple. We just need the average of (*fuel_cost* over *miles*), grouped by *vehicle*. 

Here’s the query:

{{< highlight sql "linenos=inline" >}}

SELECT

  vehicle,

  AVG(fuel_cost / miles) AS average_cost_per_mile

FROM deliveries

GROUP BY vehicle;

{{< /highlight >}}

![Return](https://res.cloudinary.com/daog6scxm/image/upload/v1697194878/cms/fleet-management-dashboard/Fleet_Management_Dashboard_31_zr0g9i.webp "Return")

And the output:

{{< highlight javascript "linenos=inline" >}}

{

 "vehicle": "SEV-2710",

 "average_cost_per_mile": 0.2158428505063057

}

{{< /highlight >}}

We’ll add another *chart block* inside our container - this time setting its *type* to *bar* and its *data* to our new query:

![Charts](https://res.cloudinary.com/daog6scxm/image/upload/v1697194868/cms/fleet-management-dashboard/Fleet_Management_Dashboard_32_dgzucv.webp "Charts")

Our label column is *vehicle* and the data column is *average_cost_per_mile*. We’ll also select the *horizontal* option and apply some similar custom CSS to what we did for our pie chart.

![Charts](https://res.cloudinary.com/daog6scxm/image/upload/v1697194875/cms/fleet-management-dashboard/Fleet_Management_Dashboard_33_cscvhg.webp "Charts")

### Daily fuel costs

The last chart we’ll put on this screen will display our *daily* total spend on fuel for the current month.

But, we don’t necessarily *have* values for every date. We’ll need a query that takes account of this fact.

We’ll first create a series of all of the days so far this month. We’ll then use a COALESCE statement to SUM our *fuel_cost* attributes - but return *0* on the rows where this is NULL - and LEFT JOIN this to our series.

So, the final query is:

{{< highlight sql "linenos=inline" >}}

WITH all_dates AS (

  SELECT generate_series(

​        date_trunc('month', current_date)::date,

​        current_date::date,

​        '1 day'::interval

​      )::date AS date

)

SELECT

  ad.date AS departure_date,

  COALESCE(SUM(d.fuel_cost), 0) AS total_fuel_cost

FROM all_dates ad

LEFT JOIN deliveries d ON DATE(d.departure_date_time) = ad.date

GROUP BY ad.date

ORDER BY ad.date;

{{< /highlight >}}

![Fuel cost query](https://res.cloudinary.com/daog6scxm/image/upload/v1697194875/cms/fleet-management-dashboard/Fleet_Management_Dashboard_34_vxy5ex.webp "Fuel Cost query")

The data we get back looks like this:

{{< highlight javascript "linenos=inline" >}}

{

 "departure_date": "2023-10-01",

 "total_fuel_cost": 95

}

{{< /highlight >}}

We’ll use this data as a *line chart* below our existing charts:

![Line chart](https://res.cloudinary.com/daog6scxm/image/upload/v1697194874/cms/fleet-management-dashboard/Fleet_Management_Dashboard_35_gabx9y.webp "Line chart")

Since this is for the current month only, we’ll use a bit of JavaScript to reflect this fact in the title, using the expression:

{{< highlight javascript "linenos=inline" >}}

const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0

const year = today.getFullYear();

return `Daily Fuel Spend This Month: (${month}/${year})`;

{{< /highlight >}}

Our dashboard so far looks like this:

![Fleet management dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194873/cms/fleet-management-dashboard/Fleet_Management_Dashboard_36_sfjkfd.webp "Fleet management dashboard")

## 4. Building our deliveries report

Next, we want to build a very similar dashboard screen for data relating to our deliveries. We’ll start by duplicating what we have so far.

![Duplicate screen](https://res.cloudinary.com/daog6scxm/image/upload/v1697194873/cms/fleet-management-dashboard/Fleet_Management_Dashboard_37_bburgc.webp "Duplicate screen")

We’ll call the new screen */deliveries*.

Now - what we want to do is work through each of our charts and swap out their data to display metrics that are relevant to our fleet’s performance.

We’ll start at the top and work our way down.

### Summary cards

We want our summary cards on this page of our fleet management dashboard to display the following metrics for the *current month*:

1. The number of deliveries we’ve made.
2. The number of deliveries that have been late.
3. The percentage of our deliveries that have been late.
4. The average hours ahead or behind schedule we’ve been.

So, we need to select the following:

- The numerical month.
- The numerical year.
- The count of rows.
- The count of rows where the real elapsed time exceeds the time limit.
- The same thing expressed as a percentage.
- The average difference between the time limit and the elapsed time.

Our query will be:

{{< highlight sql "linenos=inline" >}}

SELECT

  CAST(EXTRACT(MONTH FROM departure_date_time) AS INTEGER) AS departure_month,

​	 CAST(EXTRACT(YEAR FROM departure_date_time) AS INTEGER) AS departure_year,

  COUNT(*) AS total_deliveries,

  COUNT(CASE WHEN EXTRACT(HOUR FROM arrival_date_time - departure_date_time) > time_limit_hours THEN 1 END) AS count_of_late_deliveries,

  (COUNT(CASE WHEN EXTRACT(HOUR FROM arrival_date_time - departure_date_time) > time_limit_hours THEN 1 END)::decimal / COUNT(*)) * 100 AS percentage_late,

  AVG(time_limit_hours - EXTRACT(HOUR FROM arrival_date_time - departure_date_time)) AS average_time_difference

FROM deliveries

GROUP BY departure_year, departure_month;

{{< /highlight >}}

![Postgres](https://res.cloudinary.com/daog6scxm/image/upload/v1697194872/cms/fleet-management-dashboard/Fleet_Management_Dashboard_38_toyiae.webp "Postgres")

And the returned data objects look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "departure_month": 10,

 "departure_year": 2023,

 "total_deliveries": "12",

 "count_of_late_deliveries": "4",

 "percentage_late": "33.33333333333333333300",

 "average_time_difference": 0.6666666666666666

}

{{< /highlight >}}

Now, we can go back and swap out our values for these without much fuss - we just need to filter for the month and year again - using the same JavaScript binding as we did earlier:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1697194872/cms/fleet-management-dashboard/Fleet_Management_Dashboard_39_czz7l5.webp "Cards")

The fourth card is a bit trickier. Our query will return a positive or negative number depending on whether we’re ahead or behind schedule. We want to display a positive number no matter what and then alter the *subtitle* to indicate if we’re ahead or behind on average.

We’ll use the *ternary operator* in JavaScript to achieve both of these. 

So, for the title, we check if the time difference is positive or negative. If it’s positive, we return it as is. If it’s negative, we multiply it by -1 before we return it:

{{< highlight javascript "linenos=inline" >}}

var hours = $("TimeDifference card.LateDeliveriesByMonth.average_time_difference");

var hoursDifference = hours >= 0 ? hours: (-1 * hours)

return hoursDifference.toFixed(2);

{{< /highlight >}}

And we use the same principle to decide what string to display below:

{{< highlight javascript "linenos=inline" >}}

var hours = $("AllTimeLate Cards block.LateDeliveriesByMonth.average_time_difference")

var displayString = hours >= 0 ? "Avg Hours Ahead of Schedule": "Avg Hours Behind Schedule"

return displayString;

{{< /highlight >}}

Here are our finished cards:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1697194868/cms/fleet-management-dashboard/Fleet_Management_Dashboard_40_edic7e.webp "Cards")

### Deliveries by origin charts

For our pie chart and bar chart, we’re going to display the number of deliveries that have departed from each of our sites.

We’ll create a query called *LateDeliveriesByOrigin.* We’re basically going to get the same information as our previous query, but this time we’ll group it by *source* rather than my date:

{{< highlight sql "linenos=inline" >}}

SELECT

  origin,

  COUNT(*) AS total_deliveries,

  COUNT(CASE WHEN EXTRACT(HOUR FROM arrival_date_time - departure_date_time) > time_limit_hours THEN 1 END) AS count_of_late_deliveries,

  (COUNT(CASE WHEN EXTRACT(HOUR FROM arrival_date_time - departure_date_time) > time_limit_hours THEN 1 END)::decimal / COUNT(*)) * 100 AS percentage_late

FROM deliveries

GROUP BY origin;

{{< /highlight >}}

![Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1697194867/cms/fleet-management-dashboard/Fleet_Management_Dashboard_41_s8ftlx.webp "Queries")

Here’s the response data:

{{< highlight javascript "linenos=inline" >}}

{

 "origin": "Pittsburgh",

 "total_deliveries": "2",

 "count_of_late_deliveries": "1",

 "percentage_late": "50.00000000000000000000"

}

{{< /highlight >}}

And we can just straightforwardly swap out the data and display titles for our charts:

![Fleet management dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194863/cms/fleet-management-dashboard/Fleet_Management_Dashboard_42_cn4sce.webp "Fleet management dashboard")

### Daily departures

Our final chart is going to show the number of deliveries and late deliveries for each day this month.

So, we need to use the same WITH statement we did earlier to generate a series for each day this month and use a JOIN statement to match this up with data from our table. 

Ultimately we’ll select the same count of deliveries and count of late deliveries as we have in the last couple of queries. We also have one extra statement that prevents us from getting a zero division error.

Here’s the query:

{{< highlight sql "linenos=inline" >}}

WITH all_dates AS (

  SELECT generate_series(

​    date_trunc('month', current_date)::date,

​    current_date::date,

​    '1 day'::interval

  )::date AS date

)

SELECT

  ad.date AS departure_date,

  COUNT(d.departure_date_time) AS total_deliveries,

  COUNT(CASE WHEN EXTRACT(HOUR FROM d.arrival_date_time - d.departure_date_time) > d.time_limit_hours THEN 1 END) AS count_of_late_deliveries,

  CASE

​    WHEN COUNT(d.departure_date_time) = 0 THEN 0 -- Handle division by zero

​    ELSE (COUNT(CASE WHEN EXTRACT(HOUR FROM d.arrival_date_time - d.departure_date_time) > d.time_limit_hours THEN 1 END)::decimal / COUNT(d.departure_date_time)) * 100

  END AS percentage_late

FROM all_dates ad

LEFT JOIN deliveries d ON DATE(d.departure_date_time) = ad.date

GROUP BY ad.date

ORDER BY ad.date;

{{< /highlight >}}

![Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1697194862/cms/fleet-management-dashboard/Fleet_Management_Dashboard_43_rucbdg.webp "Queries")

And the data we get back:

{{< highlight javascript "linenos=inline" >}}

{

 "departure_date": "2023-10-01",

 "total_deliveries": "1",

 "count_of_late_deliveries": "0",

 "percentage_late": "0.00000000000000000000"

}

{{< /highlight >}}

We’ll plug this data into our chart to get:

![Line graph](https://res.cloudinary.com/daog6scxm/image/upload/v1697194862/cms/fleet-management-dashboard/Fleet_Management_Dashboard_44_woozfn.webp "Line graph")

## 5. Design tweaks and optimization 

Lastly, we’re going to make a couple of little design tweaks. First of all, we’ll head to the *theme* tab and select *Nord* to give our dashboard a slightly different feel:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1697194861/cms/fleet-management-dashboard/Fleet_Management_Dashboard_45_cxdiqr.webp "Theme")

Then, we’ll select *navigation* and configure our menu links, so users can move between our two screens easily:

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1697194861/cms/fleet-management-dashboard/Fleet_Management_Dashboard_46_cbh86s.webp "Nav")

And that’s it! Here’s one last look at our finished fleet management dashboard:

![Fleet management dashboard](https://res.cloudinary.com/daog6scxm/image/upload/v1697194868/cms/fleet-management-dashboard/Fleet_Management_Dashboard_47_sqdblw.webp "Fleet management dashboard")

We hope you found this tutorial helpful. To find out more about how Budibase empowers teams to turn data into action, check out our [features overview](https://budibase.com/product/).