+++
author = "Ronan McQuillan"
date = 2024-02-22
description = "Learn how to build a custom employee complaint form with Budibase."
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1708604593/cms/employee-complaint-form/Employee_Complaint_Form_48_yp27ib.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build an Employee Complaint Form"

+++

Handling employee complaints is a delicate process. We’re faced with the dual challenges of gathering accurate information in a fair and transparent manner - while also securely handling potentially very sensitive data.

A vast number of companies manage this using dated tools - like spreadsheets or even pen and paper.

This approach fails on both fronts.

Today, we’re checking out how custom web forms a more effective solution to this problem.

We’ll see how Budibase provides a fast, flexible way to build advanced forms on top of just about any data source.

Specifically, we’re building an employee complaint form that will replace an existing spreadsheet by pulling it into our internal low-code database - enabling us to achieve a much more secure, efficient experience for submitting complaints.

Even better, we won’t need to write a single line of custom code.

So…

## What is an employee complaint form?

An employee complaint form is a simple UI that allows users to submit details of any workplace grievances in a defined, consistent format.

The goal is to gather the information we need to make an informed, unbiased decision about how to respond to the complaint in question.

Of course, follow-on processes and eventual outcomes can vary greatly.

Therefore, an effective complaint form must do the following:

- Guide colleagues through the process of submitting the required data.
- Providing appropriate colleagues with access to complaint data without compromising security.
- Integrating with relevant workflow tools.
- Establishing a robust paper trail for employee grievances.
- Improving company culture around openness and accountability.

## What are we building?

We’re building an advanced multi-step employee complaint form on top of BudibaseDB, our internal low-code database - starting by importing an existing spreadsheet table to create our form schema.

{{< vimeo id="915519217" title="Employee Complaint Form" >}}

On top of this, we’ll be adding several pieces of functionality that will enhance both user experiences and the quality of the data we’re’ gathering - including auto-populating fields and file uploads for supporting documents.

By the end, we’ll have a fully functional, custom complaint form - ready to ship to our colleagues across desktop and mobile devices.

The beauty of Budibase is that we can achieve this in a fraction of the time that we’d need for a custom development - with considerably more flexibility than a traditional form builder.

Let’s jump right in.

## How to build an employee complaint form in 6 steps

If you haven’t already, sign up for a free Budibase account to start building as many forms as you’d like.

{{< cta >}}

## 1. Setting up our data schema

We’ll start by creating a new Budibase application. We have a couple of options here, including using a pre-built template or importing an existing app dump.

But today, we’re starting from scratch.

The first thing we need to do is choose a name and URL path for our new app.

![Employee Complaint Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604593/cms/employee-complaint-form/Employee_Complaint_Form_1_hrbnmq.webp "Employee Complaint Form")

We’ll then be prompted to choose a data source to connect to our complaint form.

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1708604596/cms/employee-complaint-form/Employee_Complaint_Form_2_tguse3.webp "Data sources")

Budibase offers market-leading support for all kinds of data sources, including RDBMSs, NoSQL tools, REST APIs, Airtable, Google Sheets, and more.

However, today, we’re leveraging our built-in low-code database, BudibaseDB. 

Specifically, we’re going to create our database table by uploading a CSV that replicates a pre-existing, spreadsheet-based complaints submission process.

So, we’re going to hit Upload Data. Then, we’re prompted to give our table a name and select the file we want to upload.

![Create table](https://res.cloudinary.com/daog6scxm/image/upload/v1708604599/cms/employee-complaint-form/Employee_Complaint_Form_3_fpkbop.webp "create table")

We’re then shown the schema of our CSV. Budibase will infer the data types for each column based on stored values, but we can update these before finalizing our table.

![Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1708604603/cms/employee-complaint-form/Employee_Complaint_Form_4_xdao1o.webp "Schema")

Our CSV has fields for the employee’s name, the date of the complaint, and a series of columns for storing responses to different questions about the incident in question. 

These are:

- last_name,
- first_name,
- date,
- category,
- complaint_description,
- employees_involved,
- complaint_impact,
- suggested_actions.

We’ll start by changing the date attribute to the Date type and category to Options:

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1708604604/cms/employee-complaint-form/Employee_Complaint_Form_5_mx4xrk.webp "Options")

We’ll then change everything else except first_name and last_name to Long-Form Text Fields.

![Long Form Text](https://res.cloudinary.com/daog6scxm/image/upload/v1708604606/cms/employee-complaint-form/Employee_Complaint_Form_6_nfnr6p.webp "Long Form Text")

Lastly, we’ll set last_name as our Display Column and hit Create.

![Display Column](https://res.cloudinary.com/daog6scxm/image/upload/v1708604592/cms/employee-complaint-form/Employee_Complaint_Form_7_yelrtb.webp "Display Column")

Here’s what our table looks like in the Data section of Budibase.

![Database Table](https://res.cloudinary.com/daog6scxm/image/upload/v1708604595/cms/employee-complaint-form/Employee_Complaint_Form_8_h1sodp.webp "Database Table")

Budibase enables us to manipulate our database schema and stored values in a low-code, spreadsheet-like interface.

We’re going to make two simple changes to our data model before we start creating our employee complaint form.

First, we selected the Options type for our category attribute. Budibase will infer these from the stored values we upload, but since our table only has one row, we’ll need to input the other possible options users can select.

We can do this by selecting Edit Column.

![Edit Column](https://res.cloudinary.com/daog6scxm/image/upload/v1708604599/cms/employee-complaint-form/Employee_Complaint_Form_9_tmroy5.webp "Edit Column")

Here, we can input our options.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1708604603/cms/employee-complaint-form/Employee_Complaint_Form_10_bnlepq.webp "Options")

We also want to give our users the option to upload relevant supporting documents for their complaints.

So, we’ll need to add another column to store this.

Start by hitting the plus icon to create a new attribute.

![Add Column](https://res.cloudinary.com/daog6scxm/image/upload/v1708604604/cms/employee-complaint-form/Employee_Complaint_Form_11_khfr8y.webp "Add Column")

We’ll add an attachment field and call it supporting_files.

![Attachment Upload](https://res.cloudinary.com/daog6scxm/image/upload/v1708604605/cms/employee-complaint-form/Employee_Complaint_Form_12_zr3wpl.webp "Attachment Upload")

That’s our schema ready to go.

## 2. Creating a multi-step form

Now, we can start creating our employee complaint form itself. Start by heading over to the Design tab. We have a couple of options here for how we want to create our first screen - including auto-generated layouts.

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708604588/cms/employee-complaint-form/Employee_Complaint_Form_13_ubmvwe.webp "New screen")

We’re then asked to choose a URL extension. This is going to be a single-screen app, so we can choose whatever we want.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1708604590/cms/employee-complaint-form/Employee_Complaint_Form_14_nmxgkk.webp "URL")

Here’s what our blank screen will look like.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708604592/cms/employee-complaint-form/Employee_Complaint_Form_15_ufuw7p.webp "Blank Screen")

We’re going to start by adding a component called a Multi-Step Form Block. As the name suggests, this outputs a working multi-step form based on the database table we connect it to.

![Employee Complaint Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604595/cms/employee-complaint-form/Employee_Complaint_Form_16_thmjw2.webp "Employee Complaint Form")

Our first task is to arrange our form fields into different steps.

For the initial step, we’ll only include the first four fields - last_name, first_name, date, and category. 

So, we want to deselect everything else.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1708604602/cms/employee-complaint-form/Employee_Complaint_Form_18_hxqyc5.webp "Fields")

However, these currently occupy slightly more horizontal space than is strictly necessary. We’ll use the layout option within each field’s settings to arrange them into columns.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1708604604/cms/employee-complaint-form/Employee_Complaint_Form_19_nvo2qo.webp "Columns")

Lastly, we’ll add some display text to our Description field.

![Description](https://res.cloudinary.com/daog6scxm/image/upload/v1708604605/cms/employee-complaint-form/Employee_Complaint_Form_20_dxlznr.webp "Description")

When you’re happy, you can hit Add Step.

![Employee Complaint Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604588/cms/employee-complaint-form/Employee_Complaint_Form_21_f5cctj.webp "Employee Complaint Form")

Each of our remaining fields will be displayed separately on their own form steps.

We’ll start by adding a step for our complaint_description attribute - again, adding display text to our Description field.

![Long Form Field](https://res.cloudinary.com/daog6scxm/image/upload/v1708604590/cms/employee-complaint-form/Employee_Complaint_Form_22_ay1w7f.webp "Long Form Field")

And we’ll repeat this process for all of our remaining fields until we get to supporting_files.

![Attachment Field](https://res.cloudinary.com/daog6scxm/image/upload/v1708604592/cms/employee-complaint-form/Employee_Complaint_Form_23_jyletl.webp "Attachment Field")

And that’s the basic structure of our employee complaint form completed.

## 3. Auto-populating data

The next thing we want to do is streamline the process of submitting a complaint by auto-populating certain values based on context.

Specifically, we already know the names of authenticated users - as well as the current date. So, we can assign values to these fields without necessarily needing manual user inputs.

Each of these has a setting called Default Value, which we can assign using dynamic bindings. 

We can populate this with any data that our form is exposed to - either in its present form or using custom JavaScript and Handlebars expressions.

Use the lightning bolt icon to open the bindings drawer for the last_name attribute.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708604596/cms/employee-complaint-form/Employee_Complaint_Form_24_lwsudp.webp "Bindings")

We can see a list of all of the categories of values we can use for our binding. We’re choosing Current User.

![Current User](https://res.cloudinary.com/daog6scxm/image/upload/v1708604600/cms/employee-complaint-form/Employee_Comlpaint_Form_25_nkeqmi.webp "Current User")

Then, we’re choosing LastName.

![LastName](https://res.cloudinary.com/daog6scxm/image/upload/v1708604602/cms/employee-complaint-form/Employee_Complaint_Form_26_wpl6hr.webp "LastName")

We could use Handlebar helpers or JavaScript to manipulate this value, but we’re simply using it as is. When we repeat this process for the first_name attribute, our form will look like this.

![Employee Complaint Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604601/cms/employee-complaint-form/Employee_Complaint_Form_27_hp6zrp.webp "Employee Complaint Form")

To enter our default value for the date field, we can use Budibase’s built-in contextual handlebar helpers. Open the bindings drawer again, but this time we’ll use {{ date now “MM-DD-YYYY }} as our binding.

![Date Now](https://res.cloudinary.com/daog6scxm/image/upload/v1708604589/cms/employee-complaint-form/Employee_Complaint_Form_28_vcsow1.webp "Date Now")

Here’s how our form will look with all of our auto-populating values.

![Autopopulation](https://res.cloudinary.com/daog6scxm/image/upload/v1708604590/cms/employee-complaint-form/Employee_Complaint_Form_29_viu25h.webp "Autopopulation")

## 4. Form UX improvements

Before we go any further, we want to improve the visuals and user experience of our form.

We’ll start by making a couple of simple design changes. Under the Styles tab, we’re setting the Button Position option to Top and the Size to Large.

![Form Design](https://res.cloudinary.com/daog6scxm/image/upload/v1708604591/cms/employee-complaint-form/Employee_Complaint_Form_30_tdqj39.webp "Form Design")

Currently, the display text for our form fields is simply the name of each attribute as it’s stored in our database. 

This isn’t ideal for end-users, so we want to update these.

For our first form step, we can simply add some stylization. We’ll update our Label and Placeholder settings to add capitalization and replace our underscores with whitespace.

![Display Text](https://res.cloudinary.com/daog6scxm/image/upload/v1708604595/cms/employee-complaint-form/Employee_Complaint_Form_31_l639nb.webp "Display Text")

For our long-form fields, we’ll remove the placeholder text entirely and update the labels to advise users on the information they need to provide for each attribute.

![Message](https://res.cloudinary.com/daog6scxm/image/upload/v1708604598/cms/employee-complaint-form/Employee_Complaint_Form_32_iiyycf.webp "Message")

Here’s how this will work for our complaint_description attribute. We need to repeat this step for all long-form fields.

![Description](https://res.cloudinary.com/daog6scxm/image/upload/v1708604601/cms/employee-complaint-form/Employee_Complaint_Form_33_ktgshf.webp "Description")

The supporting_files field doesn’t have a Placeholder setting - so we can simply update the Label.

![Attachment](https://res.cloudinary.com/daog6scxm/image/upload/v1708604601/cms/employee-complaint-form/Employee_Complaint_Form_34_j2p9gi.webp "Attachment")

## 5. Adding a confirmation message

We also want to build some on-screen logic for displaying a thank you message each time a user completes our employee complaint form. We can do this using Budibase’s built-in conditionality rules.

The way this will work is as follows:

1. When a user hits save, we’ll generate a backend state and set it to true.
2. We’ll add a conditionality rule to our form, hiding it if the state is true.
3. We’ll create a confirmation message that’s only displayed if the state equals true.

We’ll start by adding a new Headline component, below our form.

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1708604600/cms/employee-complaint-form/Employee_Complaint_Form_35_bnfld9.webp "Headline")

We’ll set the Text field to our confirmation message and align it to the center.

![Confirmation Message](https://res.cloudinary.com/daog6scxm/image/upload/v1708604589/cms/employee-complaint-form/Employee_Complaint_Form_36_tqipj9.webp "Confirmation Message")

Now, we need to create our state by adding a new action to our Save button.

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1708604589/cms/employee-complaint-form/Employee_Complaint_Form_37_gmtd25.webp "Button Actions")

We’re adding an action called Update State. This accepts two arguments - a key and a value. Our key is ‘complete,’ and our value is ‘true’.

![Update State](https://res.cloudinary.com/daog6scxm/image/upload/v1708604591/cms/employee-complaint-form/Employee_Complaint_Form_38_faz3ja.webp "Update State")

Next, we’ll open the Conditions drawer for our Multi-Step Form Block.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1708604594/cms/employee-complaint-form/Employee_Complaint_Form_39_vz3kpb.webp "Condition")

Here, we can create a rule to hide the component is {{ State.complete }} equals true.

![Conditional Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604598/cms/employee-complaint-form/Employee_Complaint_Form_40_qr08i7.webp "Conditional Form")

We’ll then add a corresponding rule to our Headline, this time displaying the component is {{ State.complete }} equals true.

![Show Component](https://res.cloudinary.com/daog6scxm/image/upload/v1708604597/cms/employee-complaint-form/Employee_Complaint_Form_41_sggnwg.webp "Show Component")

Here’s what this will look like when we complete our form.

![Confirmation Message](https://res.cloudinary.com/daog6scxm/image/upload/v1708604597/cms/employee-complaint-form/Employee_Complaint_Form_42_apiegb.webp "Confirmation Message")

## 6. Design tweaks and publishing

We’re almost ready to push our employee complaint form live.

Before we do that, though, we want to make a couple of final design tweaks. First, this is a single-screen app, so the navigation bar isn’t totally necessary.

Hit Configure Links under Navigation.

![Configure Links](https://res.cloudinary.com/daog6scxm/image/upload/v1708604597/cms/employee-complaint-form/Employee_Complaint_Form_43_zmhtxp.webp "Configure Links")

Here, we’ll use the X icon to remove the entry that’s currently in our nav bar.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1708604589/cms/employee-complaint-form/Employee_Complaint_Form_44_vpnjz3.webp "Nav")

The last thing we’ll do is update our app’s theme under the Screen menu. 

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1708604589/cms/employee-complaint-form/Employee_Complaint_Form_45_tinibr.webp "Theme")

Today, we’re opting for Dark.

![Dark Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1708604591/cms/employee-complaint-form/Employee_Complaint_Form_46_tphsst.webp "Dark Theme")

When we’re ready to push our employee complaint form live, we can hit publish.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1708604594/cms/employee-complaint-form/Employee_Complaint_Form_47_czculb.webp "Publish")

Here’s a reminder of what our finished app will look like.

![Employee Complaint Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708604593/cms/employee-complaint-form/Employee_Complaint_Form_48_yp27ib.webp "Employee Complaint Form")

Budibase is the fast, easy way to build advanced forms on top of any data set. To learn more, check out our guide to [digital forms](https://budibase.com/forms/).