+++
author = "Ronan McQuillan"
date = 2024-02-26
description = "Learn how to build a dynamic availability form with Budibase."
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1708940369/cms/availability-form/Availability_Form_54_ka0ojh.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build an Availability Form"

+++

Availability forms are a key part of all kinds of processes - including employee scheduling, resource allocation, booking requests, and more.

The trouble is that - compared to other kinds of forms - the data model you’ll typically need to handle availability can be fairly complex.

Traditional form builder tools are rarely up to the task.

On the other hand, countless teams handle availability using dated tools - like spreadsheets or even pen and paper.

Today, we’re checking out how Budibase empowers teams to build advanced forms on top of just about any data source.

By the end, we’ll have a fully custom availability form - complete with programmatically assigned values, a looping UI, and more - all built using our secure low-code platform.

But first.

## What is an availability form?

An availability form is a UI that’s used for inputting data relating to when a particular resource or other entity is free. This could be an employee, a physical location, a piece of equipment, or just about anything else.

The goal is to enable users to quickly input the required information, which can then be stored in a secure, accessible format.

In other words, we want to capture the data we need in a way that it can easily be used within follow-on workflows. 

Typically, we’re dealing with two clusters of information - the resource in question and when it’s available.

But, this second part is what makes things a little more complicated than most other data collection forms. Since availability can vary greatly from week to week, we need to provide a great deal of flexibility for users.

One way to do this is by leveraging looping forms - to allow several submissions to be created at once.

So…

## What are we building?

We’re building a flexible, looping availability form on top of an external MySQL database. However, there are going to be a few key differences between our user-facing form schema and the back-end data model.

More specifically, since our form will loop and allow several submissions at a time, we want to minimize the number of user inputs required for even a single submission. So, we’ll be making heavy use of contextual bindings and auto-populating fields.

{{< vimeo id="916641996" title="Availability Form" >}}

We’ll also extensively use Budibase’s built-in conditionality rules in order to create a form that’s flexible, efficient, and easy to use.

Our example is going to be specifically focused on employee availability, but we could just as easily apply the same ideas to any other kind of resource, facility, or asset. We’ll even provide the queries needed to create a database table just like ours so you can build along.

Let’s jump right into it.

## How to build an availability form in 5 steps

If you haven’t already, sign up below for a free Budibase account.

{{< cta >}}

## 1. Connecting to our database

We’ll start by creating a new Budibase application, choosing the option to start from scratch. When we do this, we’ll be prompted to choose a name and URL for our app. We’re calling ours Availability Form.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_1_cjbajh.webp "Availability Form")

Next, we need to choose which sort of data we’d like to connect our form to. Budibase offers a built-in low-code database, as well as direct connectors for SQL and NoSQL tools, REST APIs, Google Sheets, Airtable, and more.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_2_cwg31n.webp "Data Sources")

We can even create custom data sources using Budibase’s dedicated CLI tools.

However, today, we’re using MySQL. When we choose this option, we’re prompted to input our configuration details.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_3_pey0a6.webp "Config")

We can input these manually or use saved values stored with Budibase’s secure environment variables.

We’re then given the option to select which tables within our database we’d like to fetch, pulling them into Budibase.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_4_wgsthx.webp "Fetch Tables")

Our database only has a single table called employee_availability, which we’re fetching.

If you’d like to build along with this tutorial, you can use the following MySQL query to copy our schema in your own database.

{{< highlight sql "linenos=inline" >}}

CREATE TABLE employee_availability (

  availability_id INT AUTO_INCREMENT PRIMARY KEY,

  first_name VARCHAR(255),

  last_name VARCHAR(255),

  week_number INT,

  day_of_week ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),

  start_time TIME,

  end_time TIME,

  UNIQUE KEY unique_availability (first_name, last_name, week_number, day_of_week, start_time, end_time)

);

{{< /highlight >}}

And you can add some dummy data with this query.

{{< highlight sql "linenos=inline" >}}

INSERT INTO employee_availability (first_name, last_name, week_number, day_of_week, start_time, end_time)

VALUES

  -- Employee 1 (John Doe)

  ('John', 'Doe', 1, 'Monday', '09:00', '17:00'),

  ('John', 'Doe', 1, 'Tuesday', '09:00', '17:00'),

  ('John', 'Doe', 1, 'Wednesday', '09:00', '17:00'),

  ('John', 'Doe', 1, 'Thursday', '09:00', '17:00'),

  ('John', 'Doe', 1, 'Friday', '09:00', '17:00'),

  -- Employee 2 (Jane Smith)

  ('Jane', 'Smith', 1, 'Monday', '10:30', '18:30'),

  ('Jane', 'Smith', 1, 'Tuesday', '10:30', '18:30'),

  ('Jane', 'Smith', 1, 'Wednesday', '10:30', '18:30'),

  ('Jane', 'Smith', 1, 'Thursday', '10:30', '18:30'),

  ('Jane', 'Smith', 1, 'Friday', '10:30', '18:30'),

  -- Employee 3 (Bob Johnson)

  ('Bob', 'Johnson', 1, 'Monday', '08:00', '16:00'),

  ('Bob', 'Johnson', 1, 'Tuesday', '08:00', '16:00'),

  ('Bob', 'Johnson', 1, 'Wednesday', '08:00', '16:00'),

  ('Bob', 'Johnson', 1, 'Thursday', '08:00', '16:00'),

  ('Bob', 'Johnson', 1, 'Friday', '08:00', '16:00');

{{< /highlight >}}

Here’s what our table looks like in Budibase’s Data section. We can use this spreadsheet-like interface to edit stored values or the schema itself.

![Database Table](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_5_ya3rqt.webp "Database Table")

It’s worth pausing for a second to think about how our data model works. Each row represents the hours that an employee is available on a given day. So, we’re storing their name, the numerical week, the day of the week, and the start and end time of when they’re available.

There’s also a unique id attribute that’s generated by our database.

Before we start building our availability form, we’re going to make one simple change to our table. That is, swapping the Type of the day_of_week attribute from Text to Options.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_6_hwretw.webp "Options")

Then, we’ll input the days of the week as our available options.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_7_xbxkca.webp "Options")

And that’s our data model ready to go.

## 2. Generating a form UI

Head over to the Design tab, and we can start building our availability form. We’re offered a few choices for how to create our first UI - including Budibase’s autogenerated layouts.

We’re choosing Blank Screen.

![Create Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_8_vdzacf.webp "Create Screen")

We need to choose a URL path for our new screen. 

We’ll call ours /availability-form.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1708940355/cms/availability-form/Availability_Form_9_jwzko6.webp "URL")

We can also select a minimum role required to access this screen within Budibase’s RBAC system, but we’re leaving this set to the default Basic option.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_10_k52fmn.webp "RBAC")

Here’s what our blank screen looks like.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_11_vb9mgg.webp "Blank Screen")

We’re going to start by adding a Form Block. This is a component that generates a working form UI, based on the data table we point it at.

We’ll be making some pretty extensive changes to this, but here’s what it looks like out of the box.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_12_mpteuj.webp "Availability Form")

Eventually, our form will allow users to create several new rows in our data table all at once. For now, though, we just want to create the basic layout of a single row.

We don’t want to make users input their names or the current week for every single row, so we’re going to deselect these and remove them from our form. 

We’ll add values for them systematically later.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_13_m8vhxq.webp "Availability Form")

To make it a bit clearer that the values will also be saved, we’re going to place them in our Title. This will also provide a more personalized user experience.

Start by opening the bindings drawer for the Title using the lightning bolt icon.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_14_rucezp.webp "Bindings")

Here, we can use any values our form is exposed to as bindings within JavaScript or Handlebars expressions. To calculate the numerical week of the year, we need a bit of custom code, so we’ll open the JavaScript editor.

![JavaScript Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1708940356/cms/availability-form/Availability_Form_15_o0pcz8.webp "JavaScript editor")

Basically, we want to display the current user’s name, followed by the current week. We can achieve this using the following piece of code.

{{< highlight javascript "linenos=inline" >}}

// Declare a new constant for the current date.

const now = new Date();

// Calculate the current numerical week of the year, based on the current date.

const currentWeek = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + 1) / 7);

// Returns the current user's full name along with the current numerical week.

return $("Current User.firstName") + " " + $("Current User.lastName") + ": " + "Week " + currentWeek

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1708940357/cms/availability-form/Availability_Form_16_fwogwu.webp "JavaScript")

And here’s what our dynamic title will look like.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940357/cms/availability-form/Availability_Form_17_yhgnso.webp "Availability Form")

Next, we want to make a few changes to the underlying components that make up our Form Block.

To access these, we can hit Eject Block.

![Eject Block](https://res.cloudinary.com/daog6scxm/image/upload/v1708940358/cms/availability-form/Availability_Form_18_uyytv7.webp "Eject Block")

Our three form fields are nested inside a container. We want to set the direction of this to horizontal.

![Horizontal](https://res.cloudinary.com/daog6scxm/image/upload/v1708940358/cms/availability-form/Availability_Form_20_izz5yx.webp "Horizontal")

We’ll also give each field a custom width of 30%.

![Width](https://res.cloudinary.com/daog6scxm/image/upload/v1708940358/cms/availability-form/Availability_Form_21_amjwaf.webp "Width")

Lastly, we’re going to make a few changes to our Button Group component.

Firstly, we’ll right-align it.

![Align](https://res.cloudinary.com/daog6scxm/image/upload/v1708940359/cms/availability-form/Availability_Form_22_jge3eo.webp "Align")

Then, we want to add a second button. We’ll set its text to ‘Save & Add More’ and select the Quiet option.

![Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1708940359/cms/availability-form/Availability_Form_23_i30z4i.webp "Buttons")

We’ll also need to define what this does by opening the Actions drawer.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1708940359/cms/availability-form/Availability_Form_24_zqwv2y.webp "ACtions")

For now, we’re adding two actions to validate our form and save a row to our employee_availability table.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1708940359/cms/availability-form/Availability_Form_25_lhewzh.webp "Save Row")

We’ll make a few more changes to this a little later.

While we’re here, we should also open the Actions for our Save button - removing the Clear Form step.

![Clear Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940360/cms/availability-form/Availability_Form_26_q8ogwy.webp "Clear Form")

That’s the basic layout of our single row completed.

## 3. Auto-populating values

Currently, our form only handles three of the attributes we need to create a record in our data table.

Our next step is to configure values for the remaining fields without requiring user inputs.

Within our Save Row actions, we have the option to add columns.

![Add Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1708940360/cms/availability-form/Availability_Form_27_ragnoh.webp "Add Columns")

We’ll add the first_name attribute and then open the bindings drawer for its value.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708940360/cms/availability-form/Availability_Form_28_w4aenv.webp "Bindings")

We can then see all of the categories of values that we can populate here. We’re selecting Current User.

![Current Users](https://res.cloudinary.com/daog6scxm/image/upload/v1708940361/cms/availability-form/Availability_Form_29_fissjk.webp "Current Users")

Then FirstName.

![FirstName](https://res.cloudinary.com/daog6scxm/image/upload/v1708940361/cms/availability-form/Availability_Form_30_pqnlhe.webp "FirstName")

We’ll also repeat this process for our last_name attribute.

![Names](https://res.cloudinary.com/daog6scxm/image/upload/v1708940361/cms/availability-form/Availability_Form_31_r3ifpq.webp "Names")

For our week_number attribute, we’re going to use the following JavaScript expression:

{{< highlight javascript "linenos=inline" >}}

const now = new Date();

const currentWeek = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + 1) / 7);

return currentWeek

{{< /highlight >}}

![Javascript](https://res.cloudinary.com/daog6scxm/image/upload/v1708940362/cms/availability-form/Availability_Form_32_owzt2u.webp "Javascript")

We’ll also repeat this step for our other button.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1708940362/cms/availability-form/Availability_Form_33_bz8h5v.webp "Save Row")

## 4. Adding looping and conditionality

Now, we’re adding the real power to our availability form. By the end, users will have the option of adding up to five rows at a time. To do this, we’ll be making extensive use of Budibase’s built-in conditional design tools.

### Initializing states

Our conditionality rules are all going to based around states. These are key/value pairs that we can create and use in the background to manipulate our UI based on user actions.

We need two states:

- A numerical value called ‘row’, which will increment each time a user hits Save & Add More.
- A value called ‘break’, which we’ll set to true if a user hits the Save button.

The first thing we’ll do is add a screen-load action to create our row state. 

![Load](https://res.cloudinary.com/daog6scxm/image/upload/v1708940362/cms/availability-form/Availability_Form_34_qalgua.webp "Load ACtions")

We’re using an Update State action, setting the key to ‘row’ and the value to 1.

![Button ACtions](https://res.cloudinary.com/daog6scxm/image/upload/v1708940363/cms/availability-form/Availability_Form_35_nuka6l.webp "Button ACtions")

Next, we’ll add a similar action to our Save & Add More button, this time setting the value to 2.

![Update State](https://res.cloudinary.com/daog6scxm/image/upload/v1708940363/cms/availability-form/Availability_Form_36_wc0vm9.webp "Update State")

Lastly, we’ll add an Update State action to our save Button, this time using ‘break’ as our key and ‘true’ as our value.

![Break State](https://res.cloudinary.com/daog6scxm/image/upload/v1708940363/cms/availability-form/Availability_Form_37_a6nfqs.webp "Break state")

### Creating conditionality rules

Now, we need to define what we’re going to do when these states have different values assigned to them.

We want to create rules to do the following when our row state is incremented, or our break state evaluates to true:

1. Disable the form fields for the current row.
2. Hide our buttons.

For the successive rows, we’ll also add rules so that they’re only displayed if the row state reaches the relevant value.

We’ll start with our buttons since this is a little simpler.

 Open the conditions drawer for the Button Group component.

![Conditions](https://res.cloudinary.com/daog6scxm/image/upload/v1708940364/cms/availability-form/Availability_Form_38_qzjsxd.webp "Conditions")

We want to add two rules here:

- Hide component if {{ state.row }} is greater than or equal to 2.
- Hide component if {{ state.break }} is equal to true.

![Hide Component](https://res.cloudinary.com/daog6scxm/image/upload/v1708940364/cms/availability-form/Availability_Form_39_macvpx.webp "Hide Component")

And we’ll test this by saving a row of dummy data using either of our buttons.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940365/cms/availability-form/Availability_Form_40_pt137b.webp "Availability Form")

Next, we’ll need to apply two slightly different rules to each of our individual form fields. 

These are:

- Update Setting - Disabled - to True if {{ state.row }} is greater than or equal to 2.
- Update Setting - Disabled - to True if {{ state.break }} equals true.

![Update Setting](https://res.cloudinary.com/daog6scxm/image/upload/v1708940365/cms/availability-form/Availability_Form_41_mw287o.webp "Update Setting")

Once we’ve added these rules to all three fields, we can test them by adding a row with our availability form.

![Disabled Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1708940365/cms/availability-form/Availability_Form_42_hwjqie.webp "Disabled Fields")

### Adding our second row

Next, we’ll add a second row by duplicating our entire form. We’ll rename the new one Form 2, to make it easier to see what we’re doing.

We’re going to make three changes to this:

1. Delete the Headline component.
2. Add a condition so Form 2 is only shown if {{ state.row }} is greater than or equal to 2.
3. Increment {{ state.row }} in all of our button actions and conditionality rules by 1.

Here’s our form with the headline removed.

![Duplicate Row](https://res.cloudinary.com/daog6scxm/image/upload/v1708940365/cms/availability-form/Availability_Form_43_kzxxmk.webp "Duplicate Row")

Note that our fields display as disabled in the Budibase builder because our row state is unassigned without the screen being loaded.

Next, we’ll add a condition to Form 2 so that it’s only shown if {{ state.row }} is more than or equal to 2.

![Show Component](https://res.cloudinary.com/daog6scxm/image/upload/v1708940365/cms/availability-form/Availability_Form_44_ob5mnz.webp "Show Component")

And lastly, we’ll need to update all of our existing conditions and button actions, increasing the value of {{ state.row }} by one.

Here’s a reminder of all the places we need to do this:

1. The Update State action for our Save button.
2. The Update State action for our Save & Add More button.
3. The Update Setting rules for each of our form fields.
4. The Hide Component rules for our Button Group.

Here’s how our second row will look when we preview our app.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940366/cms/availability-form/Availability_Form_45_e0pyn0.webp "Availability Form")

### Adding the remaining duplicate rows

By the end, we want our users to have the option of adding up to five rows with our availability form.

So, we’ll need to repeat this process of duplicating our form and incrementing our row values three more times.

This is the same as the list of values we saw a second ago, with one addition:

1. The Update State action for our Save button.
2. The Update State action for our Save & Add More button.
3. The Update Setting rules for each of our form fields.
4. The Hide Component rule for our Button Group.
5. The Show Component rule for our Form itself.

By the end, we should have this.

![Looping form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940366/cms/availability-form/Availability_Form_46_xlffdm.webp "Looping Form")

For our fifth row, we’ll make one final change.

That is, the maximum number of rows users can add at a time is five. Therefore, we don’t need the Save & Add More button. We’ll remove this using the X icon alongside its entry in the Button Group component.

Since our remaining Save button contains an Update State action to set the Break state to true, our form fields will still be disabled, and our Button Group will be hidden when a user completes the fifth row.

![Fifth row](https://res.cloudinary.com/daog6scxm/image/upload/v1708940367/cms/availability-form/Availability_Form_48_xhawqy.webp "Fifth row")

## 5. Design tweaks and publishing

Functionally, that’s our availability form finished. However, before we push it live for our users, we’re going to make a few final design tweaks.

First of all, this is a single-screen app. Therefore, there’s no particular need for our navigation bar. Head to Navigation and hit Configure Links.

![Navigation](https://res.cloudinary.com/daog6scxm/image/upload/v1708940367/cms/availability-form/Availability_Form_49_t2ieb4.webp "Navigation")

We’ll use the X icon to remove the link to our availability form from the nav bar.

![Remove Links](https://res.cloudinary.com/daog6scxm/image/upload/v1708940367/cms/availability-form/Availability_Form_50_xh47ns.webp "Remove link")

Now, our UI is a little cleaner.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940367/cms/availability-form/Availability_Form_51_j1nrba.webp "Availability Form")

Lastly, under Screen, we can change the theme of our app. We have a few options here, but today, we’re going to go with Nord.

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1708940368/cms/availability-form/Availability_Form_52_y1hwot.webp "Theme")

When we’re ready, we can hit Publish to push our app live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1708940368/cms/availability-form/Availability_Form_53_cuzf9g.webp "Publish")

Here’s a reminder of how our completed availability form looks.

![Availability Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708940369/cms/availability-form/Availability_Form_54_ka0ojh.webp "Availability Form")

Budibase is the fast, easy way to build advanced forms on top of any data source. To learn more about our open-source, low-code platform, check out our [forms page](https://budibase.com/forms/).