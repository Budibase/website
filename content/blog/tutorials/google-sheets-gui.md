+++
author = "Ronan McQuillan"
date = 2022-09-20T23:00:00Z
description = "Read our step-by-step guide to creating a Google Sheets GUI in under 5 minutes."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1664958669/cms/How_to_Build_a_Google_Sheets_GUI_jmuyxw.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1664958676/cms/How_to_Build_a_Google_Sheets_GUI_ahakka.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Google Sheets GUI in 5 Steps"

+++
A Google Sheets GUI can help you turn your spreadsheets into real apps.

There are many useful free online tools for businesses. And Google Sheets is certainly one of the best of them. It allows you to get all the power of spreadsheets, databases, and scripting all at once.

But at the end of the day, it’s still a spreadsheet tool.

So you are limited to the grid design and unfiltered data entry. Users can add data in the wrong format. If you have multiple users, editing files can get confusing. There’s no user access control, advanced filtering, or search options.

In general, it feels like you need to adjust all your workflows to work around the limitations, instead of having an app that adjusts to your needs.

That’s where creating a Google Sheets GUI can come in handy.

With a Graphical User Interface (GUI) you can use Google Sheets as a flexible data source. It includes options to manipulate data, collect data from other sites, or even run custom functions with Apps Script.

At the same time, end users interact with your app using your Google Sheets GUI. Thus, you can control data entry, create custom views, add charts and metrics, and create different user levels.

This allows you to get the best of both worlds. A flexible [data source](https://budibase.com/blog/data/data-sources/), along with a powerful user-facing app.

Today, we’ll show how you can use a free open-source no-code builder to create your Google Sheets GUI in just 5 steps. By the end of the day, you’ll know how you can create beautiful Google Sheets apps, get data, edit it, search and much more.

Let’s get started!

## How do I create a dashboard in Google Sheets?

You can use Google Sheets as a dashboard, by using custom styles, charts, and App Script to run functions. But it’s probably better and easier to use a free no-code builder such as Budibase to [create a custom Dashboard for Google sheets](https://budibase.com/blog/data/google-sheets-dashboard/).

You can follow the tips from this tutorial to build a dashboard in addition to a Google Sheets GUI.

## Can Google Sheets be used as a database?

Google Sheets is a great option for a free and simple database. With it, you can add data to your tables and use other apps to access it using the API.

## How do I make Google Sheets more attractive?

You can use the Google Sheets tools and create better designs. You can use options such as:

* Better font choices.
* A nice color palette.
* A modern design style.
* Custom icons.
* Fixed elements for improved readability.

But at the end of the day, the best way to make Google Sheets look nice is not to use it for your design.

At the end of the day, it’s your data source, and its design options are quite limited. Today, we are going to explore how you can make your custom design with a Google Sheets GUI.

Our demo app is a simple CRM. It has two main menu items, and each of them has a few options:

* Contacts
  * Add / edit
* Messages
  * Reply

The contacts screen looks like this:

![Google Sheets GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664958787/cms/01_dorll2.webp "Google Sheets GUI")

In it, you can quickly see some KPIs at the top of your Google Sheets GUI. Then you have filtering options and a table with your clients list.

These are the possible statuses for your clients:

* Lead - You have their contact (maybe via a lead magnet) but they aren’t in your sales funnel.
* Funnel - They are in your sales funnel, so you are getting to know them, checking their problems, analyzing options, and negotiating.
* Active - These customers have bought already and you need to deliver or nurture them with pos-sales actions.
* Lost - These are customers who have received a proposal and rejected it, or who have ignored too many messages.

Then if you click on “view” or “create new”, you’ll see a screen like this one:

![How to build a Google Sheets GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664958862/cms/02_emwvra.webp "How to build a Google Sheets GUI")

This page is a form to add new customers. You can add form validation rules to make sure that all data points are correct, such as the email or last contact date.

Then, there’s the messages screen:

![Messages Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1664959023/cms/03_dgggxk.webp "Messages Screen")

The messages screen includes a list of all messages, along with a filter. Notice how some messages have a “reply” button and some don’t.

That’s because of the message status. The messages status in your Google Sheets GUI follows this pattern:

1. Waiting - You have sent a message but the customer hasn’t replied.
2. Replied - The customer replied, and you need to reply back.
3. Closed - You have replied to the message and there are no further replies needed or you can send a new message and it has its own ID and status (starting with waiting again).

Then if you click “reply” you’ll see this screen:

![Response screen](https://res.cloudinary.com/daog6scxm/image/upload/v1664959047/cms/04_uto864.webp "Response screen")

This seems like a simple form. But once you hit reply a lot of things will happen:

1. Budibase sends an email to your customer, using the title and contents from your form
2. The current message is updated to closed.
3. A new message is created with the “waiting” status.
4. Your customer profile is updated with the last message date.

Now let’s implement these screens

## Step 1 - Create a Google Sheets GUI app

If you haven’t already, sign up for Budibase. Then create a new app and select Google Sheets as your data source.

![Select a data source](https://res.cloudinary.com/daog6scxm/image/upload/v1664959069/cms/05_vwlqq4.webp "Select a data source")

Next, authorize the app to access your Google Sheets data, add the sheet link and fetch the tables.

Our demo app has the contacts sheet:![Google Sheets](https://res.cloudinary.com/daog6scxm/image/upload/v1664959091/cms/06_qqe1ks.webp "Google Sheets")

The messages sheet:

![Google Sheets](https://res.cloudinary.com/daog6scxm/image/upload/v1664959112/cms/07_prilj1.webp "Google Sheets")

And the KPIs sheet:

![Google Sheets](https://res.cloudinary.com/daog6scxm/image/upload/v1664959131/cms/08_lje01i.webp "Google Sheets")

Keep in mind that you can use the Google Sheets functions to make your life much easier.

Here are some examples.

Instead of using JS code to create our KPIs, we just use the Google Sheets formulas to get them.

Then, we include the customer email on the messages sheet. This saves you a lot of data processing to get the email based on the client ID. We are doing it with this function:

    =VLOOKUP(B2,contacts!$A$2:$D$5,4,1)

In addition, since the messages and client IDs are just a list, you can use a formula to generate them (=ROW() ). This saves you a lot of trouble in getting the size of the current sheet, then adding a new row with that number + 1.

Furthermore, sometimes you can use APIs or Apps Script to auto-update your Google Sheets. The sky's the limit, from something simple such as getting the current date, to complex operations like reading incoming emails from your inbox.

In particular, if you can’t code, using the Google Sheets formulas is probably an easier route.

Now let’s create the queries to load and update data to and from your Google Sheets GUI.

You can create these queries:

### close_message

* Function: Update
* Bindings:
  * id
* Sheet: messages
* RowIndex: {{ id }}
* Row:

  { “status”: “closed” }

### add_message

* Function: Create
* Bindings:
  * Contact_id
  * Title
  * Message
  * Contact_email
  * Date
* Sheet: messages
* Row:

  {
  “id”: “=ROW()”,
  “contact_id”: “{{ contact_id }}”,
  “method”: “email”,
  “date”: “{{ date }}”,
  “title”: “{{ title }}”,
  “message”: “{{ message }}”,
  “status”: “waiting”,
  “contact_email”: “{{ contact_email }}”
  }

### Update_customer

* Function: Update
* Bindings:
  * id
  * Date
* Sheet: contacts
* Row Index: {{ id }}
* Row:

  { “last contact”: “{{ date }}” }

That’s all for the “Data” tab. Now head over to the “Design” section and let’s create some screens.

## Step 2 - Clients list screen

You can create this page with stat cards and a table. In general, each data point of your page requires a data provider component.

The data providers return your queries as an array, even if it’s just one item. So, to access the individual items you can use repeaters, tables, cards, or access the data provider data using bindings.

Here is the elements tree for that page:

![Google Sheets GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664959199/cms/09_ijcerl.webp "Google Sheets GUI")

First, use the “_add component_” button to add new components to your page. Then add the title container. In it, you can add your page’s title and then a button.

Buttons don’t do anything by themselves, but you can assign actions to them. So, use this option for the button actions:

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1664959220/cms/10_qst6op.webp "Button Actions")

Next, add the KPIs container, the data provider loading the KPIs sheet, and the repeater. Don’t forget to use the “direction” option to make all the stats cards appear on the same line:

![Add a container](https://res.cloudinary.com/daog6scxm/image/upload/v1664959256/cms/11_o1j8f9.webp "Add a containeer")

Then, each of the cards is showing one of your KPIs. You just need to use the name/value pairs, so the Google Sheets data is loaded:

    Title: {{ New Repeater.kpis.name }}
    
    Value: {{ New Repeater.kpis.value }}

Next, there’s the contacts table. You can use the data provider with the Google Sheets table “contacts”. Then add a dynamic filter and a table component to load and filter your data.

You can add a “view” link by clicking on the contacts table, then add a component. This allows you to add a new column with that component (a link, a button, or anything else you want).

Then use this URL:

    /contacts/{{ contacts Table.contacts._id }}

This URL makes it so that Budibase loads a different link for each row. They all follow the same pattern: /contacts/:ID.

Thus, you can use this pattern on your screen. You can extract the ID from the URL and pass it to your data providers. Let’s see how you can do it on the next screen.

## Step 3 - Add new and edit clients screens

Both forms are very similar in their structures. Here is the components tree for the _add new_ screen:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1664959301/cms/12_m7apmw.webp "Component Tree")

And this is the components tree for the edit screen:

![Edit Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1664959326/cms/13_z8cs4w.webp "Edit Screen")

The main difference between them is that the edit form uses a data provider to load the client information to pre-populate the form fields.

Let’s build the edit form and you can use the same logic for the add new screen.

Create a new screen and use this route:

    /contacts/:id

This is what allows Budibase to understand that whatever is after contacts/ should be stored in a variable called “ID”. You can access it using {{ URL.id }}.

This screen starts with a data provider. The trick here is to load the contacts table just like you did for the previous screen, but use this filter:

![Google Sheets GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664959360/cms/14_hbbjwq.webp "Google Sheets GUI")

This allows you to load only the current contact. And then you can use a repeater to expose the contact’s fields.

You can create a form component, and use an update method with the “contacts” schema. This makes your life easier when you are creating the fields.

The title container loads a title component loading the contact’s name, like this:

    {{ Repeater.contacts.Name }}

Then, create a save button, with these actions:

1. Validate form.
2. Save row - to the contacts table.
3. Navigate to the contacts page.

For the fields group, you can use the “update form fields” button:

![Field Group](https://res.cloudinary.com/daog6scxm/image/upload/v1664959398/cms/15_cvhh8j.webp "Field Group")

This creates all the form fields automatically in your form.

That’s all you need for the edit form. The _add new_ form is quite similar, just replace the save row action with the add new.

# Step 4 - List messages

The messages list screen is quite similar to the contacts list page. You can follow the same logic, just use this components tree:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1664959419/cms/16_wlp9ru.webp "Component Tree")

You can even use the option to copy the entire contacts page instead of creating a new one. Or maybe copy the components over. Click on the 3 dots next to the main container to access this.

The only difference is that this page is going to load the reply link only for messages that aren’t closed.

You can do it using conditionality, like this:

![Conditionality editor](https://res.cloudinary.com/daog6scxm/image/upload/v1664959453/cms/17_d3edvg.webp "Conditionality editor")

So you hide the link if {{ messages Table.messages.status }} is closed.

Also, don’t forget to update the messages link to be:

    /messages/{{ messages Table.messages._id }}

And update the add new button as well.

Let’s build the message reply form.

## Step 5 - Automatically email replies from your Google Sheets GUI

On the surface, the reply form is quite similar to the contacts edit page. You can create a new page and use the /messages/:id route.

Then use this components tree:

![Data provider](https://res.cloudinary.com/daog6scxm/image/upload/v1664959484/cms/18_upe8nz.webp "Data provider")

The overall page setup is quite similar, just make sure you use a long text form instead of a simple text field.

Also, in this case, you can use a custom schema for your form, like this:

![Form Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1664959503/cms/19_zhvapm.webp "Form Schema")

But the general setup is the same. Use a data provider, use the filtering options matching the URL, and add the components.

The real magic is in the “send reply” button.

But before we do this, you need to do 2 things.

### SMTP setup

Go to your main Budibase screen - before the app selection - and click on “Email”.

![SMTP setup](https://res.cloudinary.com/daog6scxm/image/upload/v1664959525/cms/20_gg4hac.webp "SMTP setup")

Add your email settings there and save. If everything is ok you’ll see a green confirmation message.

### Automation setup

Now, go back to the app edit screen. At the top there are three tabs, _Data, Design,_ and _Automate_. Click on _Automate._

You can use this section to run automated actions in your app. But you can use it to create actions that are triggered by your app as well.

Create a new automation called “send email” that starts using an App Action:

![Create an automation](https://res.cloudinary.com/daog6scxm/image/upload/v1664959551/cms/21_xtyep4.webp "Create an automation")

Add three fields to it, email, subject, and text. Then on the “_do this_” options, select send email, use the “_send to”_ field as the customer email, add the subject, and add the HTML contents as the text using their bindings:

    {{ trigger.fields.email }}

    {{ trigger.fields.subject }}

    {{ trigger.fields.text }}

Save it and test it. You can add a backup email as BCC, which is hidden from customers. This allows you to make sure that all emails are being sent correctly as you get a copy in your inbox.

### The Send Reply action

Now that the email setup is ready, let’s configure your “send reply” actions.

You can use these actions:

Trigger Automation:

* Use an existing automation
* Automation: Send email
* Fields
  * Email: {{ Repeater.messages.contact_email }}
  * Subject: {{ Form.Fields.title }}
  * Text: {{ Form.Fields.message }}

Execute Query:

* Datasource: Google Sheets
* Query: close_message
  * Bindings:
    * Id: {{ URL.id }}

Execute Query:

* Datasource: Google Sheets
* Query: add_message
  * Contact_id: {{ Repeater.messages.contact_id }}
  * Title: {{ Form.Fields.title }}
  * Message: {{ Form.Fields.message }}
  * Contact_email: {{ Repeater.messages.contact_email }}
  * Date (JS code): return new Date().toLocaleDateString()

Execute Query:

* Datasource: Google Sheets
* Query: update_customer
  * Id: {{ Repeater.messages.contact_id }}
  * Date (JS code): return new Date().toLocaleDateString()

These queries perform the actions that we mentioned before. You send the email. Then you update the current message to closed. Next, you add a new message for the newly created email. And finally, you update your customer’s last contact.

That’s it. Your Google Sheets GUI is ready.

## Building a Google Sheets GUI with Budibase

Today we looked into how you can use Google Sheets as a database, and create a custom app to manage your data without coding. With your Google Sheets GUI, you can read Sheets data, manipulate it, and perform other actions such as sending emails or connecting to APIs.

Take a look at our ultimate guide to [database GUIs](https://budibase.com/blog/tutorials/database-gui/) for more inspiration.

We hope you enjoyed it, and see you again next time!