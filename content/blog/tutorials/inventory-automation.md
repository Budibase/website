+++
author = "Ronan McQuillan"
date = 2023-11-02
description = "Follow our guide to building inventory automations with Budibase."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1700660239/cms/inventory-automation/Inventory_automations_z6vz6z.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1700660239/cms/inventory-automation/Inventory_automations_z6vz6z.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build Inventory Automations with Budibase"
+++

Inventory automation is potentially the most transformative tool that logistics teams have at their disposal.

See, managing inventories can be incredibly tricky - owing largely to the complexity of the data and processes involved. 

Not only does this make it difficult to understand the current state of our inventory - it can also create mountains of administrative work and introduce unnecessary scope for error.

Inventory automation seeks to address all three of these problems simultaneously.

Today, we’re checking out how we can use Budibase to build custom automation solutions around existing data sets - with minimal custom code.

Specifically, we’re going to build an application to track and collate stock levels based on sales, returns, and procurement. 

We’ll also add an admin panel UI so that users can check stock, track stock changes, and restock items by emailing the vendor.

{{< youtube H0vGIY-JqGM >}}

But first, let’s check out a little bit of background information. 

## What is inventory automation?

Inventory automation means using digital technology to replace or support manual interactions within your inventory management workflows.

This can range from individual tasks to full-scale processes.

We might also be dealing with relatively generic tasks, like data centralization or order processing. Or, we could be dealing with processes that are highly specific to your particular internal operations.

In any case, the goal is to maximize efficiency, accuracy, visibility, and reliability within inventory management workflows by reducing the need for human interventions.

## What are we building?

Our inventory automation app is built around two related clusters of functionalities:

1. Back-end automation to update our inventory records based on the outcomes of sales, returns, and procurement processes.
2. A front-end admin panel where users can view stock level or recent stock changes - as well as contact vendors to order new items.

We’re going to build this around an existing Postgresql database, with separate tables representing our *inventory, sales, shipments, consignments, vendors*, and *returns*. Alongside this, we’ll create a new BudibaseDB table for storing information on inventory changes.

Of course, a lot of the functionality will be handled in the back-end, invisible to end-users. Here’s what the finished UI will look like:

![inventory automation app](https://res.cloudinary.com/daog6scxm/image/upload/v1698943578/cms/inventory-automation/Inventory_Automation_1_wuwkxu.webp "inventory automation app")

Our inventory table also features clickable rows, where users can drill into information about each item and get in contact with the relevant vendor to order new stock - directly from within the application:

![App UI](https://res.cloudinary.com/daog6scxm/image/upload/v1698943586/cms/inventory-automation/Inventory_Automation_2_mejf3c.webp "App UI")

## How to build an inventory automation solution with Budibase in 7 steps

Let’s dive right in.

If you haven’t already, sign up for a free Budibase application.

{{< cta >}}

## 1. Create a new Budibase application

We’re going to start by creating a new Budibase application. As ever, we have the option of importing an existing app or using a template - but we’re starting from scratch:

![New app](https://res.cloudinary.com/daog6scxm/image/upload/v1698943595/cms/inventory-automation/Inventory_Automation_3_xdkjdk.webp "new app")

The first thing we need to do is choose a name for our app, which will also be used as its URL path:

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1698943596/cms/inventory-automation/Inventory_Automation_4_w8q3fc.webp "URL")

## 2. Configuring our data

Next, we’ll be prompted to choose which type of data we want to start with. Budibase offers dedicated connectors for a range of SQL and NoSQL databases, alongside REST, Google Sheets, and our internal database.

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1698943597/cms/inventory-automation/Inventory_Automation_5_ykmfbb.webp "data sources")

For our first data source, we’ll click on PostgreSQL. We’re then asked to input our configuration details.

![config](https://res.cloudinary.com/daog6scxm/image/upload/v1698943599/cms/inventory-automation/Inventory_Automation_6_dgbwbx.webp "config")

We can then select which tables we’d like to *fetch* so that we can manipulate them within Budibase. Our database has several tables that we won’t need for this application. We’re only selecting the ones we listed earlier:

![fetch tables](https://res.cloudinary.com/daog6scxm/image/upload/v1698943600/cms/inventory-automation/Inventory_Automation_7_n3hkeg.webp "fetch tables")

Straight away, we can use Budibase’s back-end to perform CRUD actions or edit the schema of any of our tables:

![add source](https://res.cloudinary.com/daog6scxm/image/upload/v1698943577/cms/inventory-automation/Inventory_Automation_8_wyclu1.webp "add source")

Each of our tables contains different data points that we’ll need to build our desired inventory automations - as well as foreign keys to denote relationships between them. We’ll outline these as and when we’re using them.

To finish off our data model, we need to add a second data source.

![add source](https://res.cloudinary.com/daog6scxm/image/upload/v1698943585/cms/inventory-automation/Inventory_Automation_9_o3mnib.webp "add source")

This time, when we’re prompted, we’ll choose an internal table.

We’ll call this *inventory_changes*.

![inventory_changes](https://res.cloudinary.com/daog6scxm/image/upload/v1698943593/cms/inventory-automation/Inventory_Automation_10_h3guah.webp "inventory_changes")

We’ll then need to populate the columns we want to store:

![Add columns](https://res.cloudinary.com/daog6scxm/image/upload/v1698943595/cms/inventory-automation/Inventory_Automation_11_jw45lf.webp "Add columns")

These are:

- item_name (text).
- inventory_id (number).
- change_type (options).
- quantity_change (number).
- new_quantity (number).

The options for the change_type attribute will be *Return, Sales*, and *Restock.*

![Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1698943597/cms/inventory-automation/Inventory_Automation_12_av4pii.webp "Schema")

That’s our data model ready.

Next, we’ll start building automation rules. The basic logic of our app is that the *inventory* table stores the present stock levels of various items. We need automations to update this data, when a new sale, return, or incoming consignment is processed.

We’ll also record the details of these changes on our *inventory_changes* table.

## 3. Handling sales

Let’s start with handling new *sales*. We’ll create a new automation:

![New automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943598/cms/inventory-automation/Inventory_Automation_13_uioy9k.webp "new automation")

We first need to give this a name and choose a trigger. We’re calling our *SaleAdded* and picking a *row created* trigger.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1698943600/cms/inventory-automation/Inventory_Automation_14_gu0hpf.webp "Trigger")

Then, we can choose which table to point our inventory automation trigger at. We’re picking *sales*. So, anytime a row is added to the *sales* table, any subsequent actions we configure will be carried out.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698943576/cms/inventory-automation/Inventory_Automation_15_braeoz.webp "Table")

Now remember, for our *inventory_changes* table we’ll need the *item_name*, *inventory_id*, *change_type*, *quantity_change*, and *new_quantity*. We can get most of this information from the *sales* table.

However, we’re going to need to know how many of the items in question we had in stock *before* the sale in order to figure out the new quantity.

Therefore, our first *action* will be a *query rows* step:

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1698943585/cms/inventory-automation/Inventory_Automation_16_o1qql5.webp "Actions")

And we’ll point this at the *inventory* table:

![Query Rows](https://res.cloudinary.com/daog6scxm/image/upload/v1698943592/cms/inventory-automation/Inventory_Automation_17_wdueo4.webp "Query Rows")

As-is, this will make the entire *inventory* table usable within our subsequent automation steps. We only want the row with an *id* attribute that corresponds to the *inventory_id* that we have stored in our new *sales* row.

We’ll hit *define filters* to open the filters drawer:

![Define Filters](https://res.cloudinary.com/daog6scxm/image/upload/v1698943592/cms/inventory-automation/Inventory_Automation_18_rim73z.webp "Define Filters")

And we can add a filtering expression to only return *inventory* rows where *id* equals *{{ trigger.row.inventory_id }}*.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1698943591/cms/inventory-automation/Inventory_Automation_19_k9bi6j.webp "Filter")

We can test this by using some dummy data, setting the *inventory_id* for our trigger row to *1* - which we know is the *id* of one of our inventory items:

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1698943584/cms/inventory-automation/Inventory_Automation_21_xzy686.webp "test")

Our *query rows* step will output a data object that looks like this.

{{< highlight javascript "linenos=inline" >}}

{

 "rows": [

  {

   "vendor_id": 4,

   "id": 1,

   "quantity": 225,

   "item_name": "Bulldozer",

   "unit_price": 210,

   "_id": "%5B1%5D",

   "tableId": "datasource_plus_2fb21a1bd6ed4e20b3ff449096fad3ed__inventory",

   "_rev": "rev"

  }

 ],

 "success": true

}

{{< /highlight >}}

Note that there are two attributes here called *id* and *_id*. *id* is the one that already existed in our *Postgres* table. *_id* was autogenerated by Budibase, so we can ignore it.

We’ll see how to use the returned data in subsequent automations in a second.

We want to do two more things with this automation rule - update the *quantity* attribute in the relevant *inventory* row and add the details of our change to the *inventory_changes* table.

We’ll start by adding an *update row* action and pointing it at our *inventory* table:

![Update Row](https://res.cloudinary.com/daog6scxm/image/upload/v1698943590/cms/inventory-automation/Inventory_Automation_22_qefr0m.webp "Update rows")

We can now input the details we want. *item_name,* *vendor_id*, *unit_price*, and *row_id* should remain unchanged.

So, we’ll bind them to their respective outputs from the previous step in the format:

{{< highlight javascript "linenos=inline" >}}

{{ steps.1.rows.0.column_name }}

{{< /highlight >}}

Steps.1 contains an object called *rows*. This could potentially contain many rows, so we need to provide the *index* of the row we want. In our case, this will always be *0* since there is only one row returned by the previous step.

For *quantity*, we want to use the difference between the original *quantity* attribute from the row and the *quantity* attribute from our new *sales* row.

We’ll do this by binding the following JavaScript expression.

{{< highlight javascript "linenos=inline" >}}

return $("steps.1.rows.0.quantity") - $("trigger.row.quantity")

{{< /highlight >}}

Test this and make sure it works as expected. When you’re happy, add another automation action, this time selecting *create row*. 

We’ll point this one at *inventory_changes*:

![Add row](https://res.cloudinary.com/daog6scxm/image/upload/v1698943589/cms/inventory-automation/Inventory_Automation_23_j4g7qt.webp "Add row")

We’ll take our *inventory_id*, *item_name*, and *quantity_change* from our trigger row, in the format:

{{< highlight javascript "linenos=inline" >}}

{{ trigger.row.column_name }}

{{< /highlight >}}

There’s no need for an index this time, since the *row* object from our trigger can only include a single row.

For *change_type*, we’ll select *Sales*.

![Change type](https://res.cloudinary.com/daog6scxm/image/upload/v1698943589/cms/inventory-automation/Inventory_Automation_24_sqqlki.webp "Change type")

We can also use the exact same JavaScript function as before to calculate the new quantity.

When we test our automation again, we can see that a new row has been added to the *inventory_changes* table with the test data that we provided:

![Inventory change](https://res.cloudinary.com/daog6scxm/image/upload/v1698943588/cms/inventory-automation/Inventory_Automation_25_zajwd7.webp "Inventory change")

## 4. Handling returns

Next, we’ll duplicate our inventory automation rule and change the name of the new version to *ReturnAdded*:

![Inventory automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943587/cms/inventory-automation/Inventory_Automation_26_l0l5fz.webp "Inventory automation")

This will save us a little bit of time, since we can largely just swap out the data and retain a similar flow - albeit with one extra step.

The first thing we’ll change is the table our trigger is pointed at. We want this to be *returns* rather than *sales*.

![inventory automaiton](https://res.cloudinary.com/daog6scxm/image/upload/v1698943583/cms/inventory-automation/Inventory_Automation_27_fxaob1.webp "inventory automation")

Now, in the previous automation flow, we could just query our *inventory* table - since our data model is set up so that *sales* rows are linked to *inventory* rows. We can’t do this with *returns*, because they aren’t linked directly to the *inventory* table.

However, they do have an attribute called *sales_id* which corresponds to the row of the original order that’s being returned.

We can query the relevant *sales* row - and then use the output from this to query the appropriate *inventory* row.

So, we’ll add another *query rows* action immediately after our trigger and point it at the *sales* table. 

This time, the filter will be set to retrieve the row where *id* matches *{{ trigger.row.sale_id }}*.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1698943574/cms/inventory-automation/Inventory_Automation_28_hsccvs.webp "Filter")

Then, we’ll update the filter for the *inventory* query action to get the row where *id* equals *{{ steps.1.rows.0.inventory_id }}*.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1698943582/cms/inventory-automation/Inventory_Automation_29_ljx9o4.webp "Filter")

Now, we need to update all of the bindings in our subsequent *update row* and *create row* actions.

For updating the *inventory* table, this is easy. All of our existing bindings are just wrong by one step. So, anywhere it says *steps.1*, we want to replace this with *steps.2* - including in our JavaScript function.

We’ll also change our JavaScript function to return the sum of the relevant quantities - since a return adds to our current stock levels:

{{< highlight javascript "linenos=inline" >}}

return $("steps.2.rows.0.quantity") + $("steps.1.row.0.quantity")

{{< /highlight >}}

![Update Row](https://res.cloudinary.com/daog6scxm/image/upload/v1698943582/cms/inventory-automation/Inventory_Automation_30_jjdnef.webp "Update Row")

For the *create row* action we need to populate the values for our new row using our *sales* and *inventory* tables. So, *item_name, inventory_id*, and *quantity_change* will come in the format:

{{< highlight javascript "linenos=inline" >}}

{{ steps.1.rows.0.column_name }}

{{< /highlight >}}

We’ll set the *change_type* to *Return* and swap our JavaScript function for:

{{< highlight javascript "linenos=inline" >}}

return $("steps.2.rows.0.quantity") + $("steps.1.row.0.quantity")

{{< /highlight >}}

Just like before, we’ll test our automation to confirm that it works:

![Inventory automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943581/cms/inventory-automation/Inventory_Automation_31_rjmwrp.webp "Inventory automation")

## 5. Handling procurement

Now, duplicate the *SaleAdded* flow again, this time calling the new version *ConsignmentAdded*.

The *consignments* table links to *inventory* - so we only need one *query rows* action this time.

We’ll swap the *table* for our trigger to *consignments*:

![Consignments](https://res.cloudinary.com/daog6scxm/image/upload/v1698943580/cms/inventory-automation/Inventory_Automation_32_v6ue1w.webp "Consignments")

And then the only other change we need to make is to swap the JavaScript for updating the quantity to:

{{< highlight javascript "linenos=inline" >}}

return Number($("steps.1.rows.0.quantity")) + Number($("trigger.row.quantity"))

{{< /highlight >}}

Remember to do this for both the *update row* and *create row* actions.

Then, we’ll verify that this works as we expected:

![Inventory Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698943579/cms/inventory-automation/Inventory_Automation_33_shcmiu.webp "Inventory table")

## 6. Ordering new stock

The last automation rule we’ll build is a little bit different. Basically, we want to enable users to send an email template to the vendor of any given item in order to request more stock. 

In the next step, we’ll create a UI where users can trigger this automation on any item, specifying the quantity of stock they’d like to order.

We’ll start by creating a new automation which we’ll call *OrderStock*. This time we’re using the *App Action* trigger. This allows us to specify variables that we can pass to our automation whenever it’s triggered:

![Email automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943578/cms/inventory-automation/Inventory_Automation_34_b4kh6u.webp "Email automation")

We’re going to add two *number* fields, called *order_quantity* and *inventory_id*.

![Trigger fields](https://res.cloudinary.com/daog6scxm/image/upload/v1698943574/cms/inventory-automation/Inventory_Automation_35_iqhrdk.webp "Trigger fields")

We’re going to use the *inventory_id* to retrieve the appropriate row from our *inventory* table, using a filtered *query rows* action - just like before.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1698943573/cms/inventory-automation/Inventory_Automation_36_ljit2j.webp "Filter")

Each row in the *inventory* table is linked to a row in the *vendors* table - which stores details of the companies that supply our stock.

We need to retrieve the relevant *vendors* row too. 

Add another query rows action, pointed at the *vendors* table. This has an attribute called *v_id*. We’ll use a filter expression to return the row where this matches the *vendor_id* output of our previous step:

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1698943572/cms/inventory-automation/Inventory_Automation_37_x92fs8.webp "Filter")

The data object we get back looks like this:

{{< highlight javascript "linenos=inline" >}}

{

 "rows": [

  {

   "ein_number": "10-0774902",

   "street_address_line_2": "Unit 200",

   "services_description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",

   "contact_email": "adurhamj@slideshare.net",

   "company_name": "O'Reilly-Greenholt",

   "contact_phone": "785-373-6000",

   "v_id": 4,

   "contact_last_name": "Durham",

   "state": "KS",

   "category": "Medical/Nursing Services",

   "purchase_order_billing": "TRUE",

   "vendor_number": 2,

   "street_address": "5 Erie Court",

   "zip": 66611,

   "contact_first_name": "Aaren",

   "_id": "%5B4%5D",

   "tableId": "datasource_plus_2fb21a1bd6ed4e20b3ff449096fad3ed__vendors",

   "_rev": "rev"

  }

 ],

 "success": true

}

{{< /highlight >}}

This is quite a lot of information, but we only need *contact_email* and *contact_first_name* - alongside the *item_name* value from our *inventory* query and our original trigger’s *order_quanitity.*

Next, add a *send email* action. You’ll need to have your SMTP credentials set up in Budibase for this to work - so check out our [email docs](https://docs.budibase.com/docs/email#:~:text=Budibase comes with three different,right side of the page.).

We’ll bind the *send to* field to the output of our *vendors* query, using *{{ steps.2.rows.0.contact_email }}*. *Send from* and *subject* can be whatever you want:

For the *subject*, we’re using:

{{< highlight javascript "linenos=inline" >}}

Order Request: {{ steps.1.rows.0.item_name }}

{{< /highlight >}}

Your email body can be set using standard HTML. For example:

{{< highlight html "linenos=inline" >}}

<p>Dear {{ steps.2.rows.0.contact_first_name }}</p>

<p>We require {{ trigger.fields.quantity }} {{ steps.1.rows.0.item_name }}s.</p>

<p>Can you please process this request</p>

<p>Thanks.</p>

{{< /highlight >}}

![Email body](https://res.cloudinary.com/daog6scxm/image/upload/v1698943571/cms/inventory-automation/Inventory_Automation_38_i7xwtl.webp "Email body")

Once you’re satisfied that this works, we can move on to creating our admin panel.

## 7. Building an admin panel

Head to the design section and create a new *table* screen:

![New screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698943571/cms/inventory-automation/Inventory_Automation_39_pancuh.webp "New screen")

We’ll base this on our *inventory* table:

![Choose Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698943570/cms/inventory-automation/Inventory_Automation_40_idnkze.webp "Choose Table")

Budibase will autogenerate a working CRUD screen for our *inventory* data:

![CRUD screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698943569/cms/inventory-automation/Inventory_Automation_41_ystysm.webp "CRUD screen")

We’re going to back a few changes to the *side panel* to replace the existing update form with one that allows users to make new stock requests, based on the email automation we just set up.

We’ll start by capitalizing our title:

![title](https://res.cloudinary.com/daog6scxm/image/upload/v1698943568/cms/inventory-automation/Inventory_Automation_42_nfcaxq.webp "title")

We’ll also disable the *show button* option:

![Disable button](https://res.cloudinary.com/daog6scxm/image/upload/v1698943568/cms/inventory-automation/Inventory_Automation_43_qv0kdz.webp "Disable button")

Then we’ll turn off *paginate* and increase the *scroll limit* to match the number of rows in our *inventory* table:

![Scroll](https://res.cloudinary.com/daog6scxm/image/upload/v1698943567/cms/inventory-automation/Inventory_Automation_44_giegr5.webp "Scroll")

When we’re happy with the design we’ll hit *eject block*:

![Eject](https://res.cloudinary.com/daog6scxm/image/upload/v1698943566/cms/inventory-automation/Inventory_Automation_45_pkmskz.webp "Eject")

This exposes the constituent components that make up our *table block*.

We have a component called *side panel* inside of which there’s a *form block*. This is a prebuilt form. We’ll make a couple of design tweaks to this too before we eject it. First, remove the *delete button*’s text.

Then, set *align labels* to *top*:

![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1698943565/cms/inventory-automation/Inventory_Automation_47_c4qxsk.webp "Components")

Now eject your form block.

We’ll change the *headline* component to read *Restock*:

![Inventory automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943564/cms/inventory-automation/Inventory_Automation_48_zilbkz.webp "Headline")

Then, we’ll select the *disabled* check box under each of our form fields:

![Disabled](https://res.cloudinary.com/daog6scxm/image/upload/v1698943563/cms/inventory-automation/Inventory_Automation_49_k8exny.webp "Disabled")

Now - recall that our email automation has two trigger fields - *inventory_id* and *order_quantity*. We already know the *inventory_id*, based on the row that the user clicked on.

We need to add a *number field* to allow them to specify a quantity by setting the *field* and *label* to *order_quantity*:

![Quantity Box](https://res.cloudinary.com/daog6scxm/image/upload/v1698943563/cms/inventory-automation/Inventory_Automation_50_sotilw.webp "Quantity Box")

We’ll also add a validation rule so that this is *required*:

![Validation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943561/cms/inventory-automation/Inventory_Automation_52_xubjjd.webp "Validation")

We then need to update our button to carry out our new action. We can start by updating its text from *save* to *order*:

![Order Button](https://res.cloudinary.com/daog6scxm/image/upload/v1698943561/cms/inventory-automation/Inventory_Automation_53_fdadbm.webp "Order Button")

We also need to update the button’s actions:

![Button ACtions](https://res.cloudinary.com/daog6scxm/image/upload/v1698943560/cms/inventory-automation/Inventory_Automation_54_rvn9y5.webp "Button ACtions")

Delete everything except *validate form*:

![Inventory automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943559/cms/inventory-automation/Inventory_Automation_55_nq4vss.webp "Inventory automation")

Add a *trigger automation* row and select *OrderStock* as its automation:

![Trigger automation](https://res.cloudinary.com/daog6scxm/image/upload/v1698943559/cms/inventory-automation/Inventory_Automation_56_wdpjfl.webp "Trigger automation")

Then, we can set the bindings for our two trigger fields. We’ve set *order_quantity* to *{{ form.fields.order_quantity }}* and *inventory_id* to *{{ repeater.inventory.id }}*.

Now, when a user clicks on the *order* button under any given item, the relevant vendor will be contacted to make an order. Or - they will once we’ve pushed our app live.

Before that though, we’re going to make a couple more design tweaks.

First, we’ll choose the *lightest* option under *screen* and *theme*:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1698943558/cms/inventory-automation/Inventory_Automation_57_i7tixj.webp "Theme")

Then, we’ll open *configure links* and remove our menu entry - since our inventory automation app only has one screen anyway.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1698943557/cms/inventory-automation/Inventory_Automation_58_amjrle.webp "Nav")

The last thing we want to do is add some notification cards to display the most recent *inventory_changes* at the bottom of our screen.

Add a *cards* block beneath your form, give it a title, and set its *data* to *inventory_changes*:

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698943557/cms/inventory-automation/Inventory_Automation_59_yddbgh.webp "Cards")

We’ll set its *title* to the following JavaScript function:

{{< highlight javascript "linenos=inline" >}}

if ($("Inventory_changes Cards block.inventory_changes.quantity_change") > 0){

 return "+" + $("Inventory_changes Cards block.inventory_changes.quantity_change")

}

else return $("Inventory_changes Cards block.inventory_changes.quantity_change")

{{< /highlight >}}

This ensures that the *quantity_change* attribute is always prefixed with a plus or minus symbol.

For the *subtitle*, we’ll use *{{ Inventory_changes Cards block.inventory_changes.item_name }}* and for *description* we’ll use *{{ Inventory_changes Cards block.inventory_changes.change_type }}*.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1698943522/cms/inventory-automation/Inventory_Automation_60_pvrrnl.webp "Cards")

Then, publish your app to push it live - including your inventory automation rules:

![Inventory automation app](https://res.cloudinary.com/daog6scxm/image/upload/v1698943521/cms/inventory-automation/Inventory_Automation_61_przent.webp "Inventory automation app")

Here’s what the finished product should look like once it’s published:

![Published](https://res.cloudinary.com/daog6scxm/image/upload/v1698943521/cms/inventory-automation/Inventory_Automation_62_l4dlpe.webp "Published")

If you found this tutorial helpful, you might also like our guide to building a [warehouse dashboard](https://budibase.com/blog/tutorials/warehouse-dashboard/).