+++
author = "Ronan McQuillan"
date = 2024-02-06
description = "Learn how to build a contact information form with Budibase"
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_yicxf1.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_yicxf1.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build an Embeddable Contact Information Form"
+++

Contact information forms are probably the most common data collection tools around. They’re everywhere - whether as embedded UIs or standalone apps.

In fact, just about every business needs to build contact forms - for their customers, users, colleagues, or other stakeholders.

However, not all contact forms are equal. Most web forms are either built manually with HTML or using traditional form-builder tools. We can create perfectly functional forms this way, but these methods also leave a lot to be desired.

Today, we’re going to show off how Budibase offers unrivaled flexibility for building secure, advanced forms on top of just about any data source.

But first…

## What is a contact information form?

A contact information form is a basic UI where users can input their contact details. Typically, their name, address, and phone number - but potentially also more contextual information - like details of a particularly support query or other request.

This might be used in a couple of different situations. Of course, gathering up-to-date contact information could be a goal in and of itself.

More often, though, this will be the initial step of a more complex workflow. For instance, call-back requests, email marketing, registration, onboarding, or a whole range of other tasks.

So, the key thing is that teams are able to build forms that aren’t just visually appealing - but are also tailored to the specific needs of the context they’re used within.

## What are we building?

We’re building a simple multi-step contact information form on top of an existing MySQL database - although we could just as easily use Budibase’s built-in database. We’ll also provide the queries we need to create our data layer.

Specifically, our form will have two steps. One for the user’s basic personal and contact information, and a second for their address details.

This will be followed by a thank you message that appears when the form is successfully completed.

We’ll also show off how we can use this as an embedded UI or as a standalone tool, depending on our requirements.

Along the way, we’ll see some of the key ways that Budibase stands above the crowd in terms of developer experiences and the sophistication of the form tools we can output at pace.

{{< vimeo id="910459472" title="Contact Information Form" >}}

Let’s jump in.

## How to build a contact information form in 5 steps

If you haven’t already, sign up for a free Budibase account.

{{< cta >}}

## 1. Setting up our form schema

The first thing we need to do is create a new Budibase app. We could use a pre-built template or import an existing app dump, but today, we’re starting from scratch.

When we choose this option, we’re prompted to give our app a name - which will also be used to generate a URL extension:

![Contact Information Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232517/cms/contact-information-form/Contact_Information_Form_1_u53ojb.webp "Contact Information Form")

Once we’ve done this, we’re presented with a range of options for setting up our first data connection.

![Data sources](https://res.cloudinary.com/daog6scxm/image/upload/v1707232516/cms/contact-information-form/Contact_Information_Form_2_d1ezn2.webp "Data sources")

This is one area where Budibase really stands apart. Alongside our built-in low-code database, we have a range of connectors for relational and non-relational DBMSs, as well as REST APIs, Google Sheets, Airtable, and more.

There’s no better way to build forms on top of any kind of existing data.

As we said earlier, though, today we’re using MySQL.

Click on this option, and we’ll be asked to input our configuration details:

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1707232516/cms/contact-information-form/Contact_Information_Form_3_g2bl6m.webp "Config")

Then, we can choose which of the tables in our database we want to fetch, pulling them into Budibase. 

Our database only has one table called contact_information:

![Contact Information Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232516/cms/contact-information-form/Contact_Information_Form_4_bqo1rf.webp "Contact Information Form")

If you want to create a database table of your own and build along with us, you can use the following MySQL query:

{{< highlight sql "linenos=inline" >}}

CREATE TABLE contact_information (

  contact_id INT AUTO_INCREMENT PRIMARY KEY,

  first_name VARCHAR(50) NOT NULL,

  last_name VARCHAR(50) NOT NULL,

  email VARCHAR(100) NOT NULL,

  phone VARCHAR(20),

  street_address VARCHAR(255),

  city VARCHAR(50),

  state VARCHAR(50),

  postal_code VARCHAR(20),

  country VARCHAR(50),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

{{< /highlight >}}

And here’s a second query to populate this with some dummy data:

{{< highlight sql "linenos=inline" >}}

INSERT INTO contact_information 

  (first_name, last_name, email, phone, street_address, city, state, postal_code, country)

VALUES

  ('John', 'Doe', 'john.doe@example.com', '555-1234', '123 Main St', 'Anytown', 'CA', '12345', 'USA'),

  ('Jane', 'Smith', 'jane.smith@example.com', '555-5678', '456 Oak Ave', 'Somewhere', 'NY', '67890', 'USA'),

  ('Alice', 'Johnson', 'alice.johnson@example.com', '555-9876', '789 Pine Blvd', 'Nowhere', 'TX', '54321', 'USA');

{{< /highlight >}}

Here’s how our database table will look once we’ve fetched it:

![Contacts Table](https://res.cloudinary.com/daog6scxm/image/upload/v1707232516/cms/contact-information-form/Contact_Information_Form_5_qcxkdr.webp "Contact Table")

We can add rows, edit the schema, or update values in Budibase’s backend without writing a single line of code.

But today, we’re building a contact information form to create new entries for our data table.

## 2. Generate a multi-step form

Let’s start building our UI. Head over to the Design tab, and we’ll be presented with a few options for creating our first screen. We can use an autogenerated layout or start from scratch.

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1707232515/cms/contact-information-form/Contact_Information_Form_6_v4w0c9.webp "New Scren")

We’re going to start with a blank screen.

We’ll be asked to give this a name. Our app will only have one screen anyway, so this can be anything.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1707232515/cms/contact-information-form/Contact_Information_Form_7_vqzpt9.webp "URL")

We can also choose a minimum access role for using this screen. Since we are eventually going to embed this form on a webpage, we need to set this to Public. This means users won’t need an account to access our form.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1707232514/cms/contact-information-form/Contact_Information_Form_8_necdti.webp "RBAC")

If we were planning to use our form internally, we could choose a different role, and only authenticated users would be able to access it.

Here’s our blank screen:

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1707232514/cms/contact-information-form/Contact_Information_Form_9_dyuuaz.webp "Blank Screen")

The first component we’re going to add is a container. This will allow us to control how and where our form will appear on the screen.

We’ve set the horizontal and vertical alignment of this to the center - and set the size to expand and fill the space on the screen.

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1707232513/cms/contact-information-form/Contact_Information_Form_10_xbpt92.webp "Container")

Inside our container, we’re placing a multi-step form block. This is a prebuilt set of components that outputs a form based on the schema of whichever data source we point it at.

![Contact Information Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232513/cms/contact-information-form/Contact_Information_Form_11_kzpcml.webp "Contact Information Form")

We can configure this however we want.

The first thing to do is arrange our form fields into two distinct steps. By default, our form only has one.

On the right-hand side, we can select the fields we want to appear on this step. We’re deselecting everything except first_name, last_name, email, and phone:

![Multi-step](https://res.cloudinary.com/daog6scxm/image/upload/v1707232513/cms/contact-information-form/Contact_Information_Form_12_q76jth.webp "Multi-step")

We’ll also cut and paste the default title to the description field - and replace it with a more descriptive title:

![Add Step](https://res.cloudinary.com/daog6scxm/image/upload/v1707232512/cms/contact-information-form/Contact_Information_Form_13_vth6dg.webp "Add Step")

Then, we’ll hit Add Step to create a second form step - this time selecting our remaining fields:

![Add Step](https://res.cloudinary.com/daog6scxm/image/upload/v1707232512/cms/contact-information-form/Contact_Information_Form_14_u7e0jp.webp "Add Step")

Lastly, we’ll open the Styles tab for our form, setting its Size to Large and Button Position to Top:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232511/cms/contact-information-form/Contact_Information_Form_16_xnwsfp.webp "Form")

## 3. Add a confirmation message

When a user completes our form, we want to display a message to them confirming this and advising them on what to expect next.

We also want our form to be hidden when this appears.

We’ll start by adding another container beneath our existing one. We’ll use the exact same settings as we did earlier for this:

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1707232511/cms/contact-information-form/Contact_Information_Form_17_wyi0qv.webp "Container")

Inside this, we’ll add a Headline component - setting its Text attribute to our thank you message.

![Thank You Message](https://res.cloudinary.com/daog6scxm/image/upload/v1707232511/cms/contact-information-form/Contact_Information_Form_18_zppakv.webp "Thank You Message")

However, at present, this will just be displayed all the time.

We’re going to use some conditional logic to dynamically display either our form or our thank you message based on user behavior.

To achieve this, we’ll first add an action to our Save button.

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1707232510/cms/contact-information-form/Contact_Information_Form_19_c6ujxt.webp "Button Actions")

We’ll add an Update State action, creating a value called ‘complete’ and setting it to true:

![Conditional Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1707232510/cms/contact-information-form/Contact_Information_Form_20_e2nrcc.webp "Conditional forms")

On our first container, we’ll add a conditionality rule to hide this component if our new state is equal to true:

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1707232510/cms/contact-information-form/Contact_Information_Form_21_yixvcm.webp "Condition")

And we’ll add a corresponding rule to our other component to display it if the same condition is met:

![Hide Component](https://res.cloudinary.com/daog6scxm/image/upload/v1707232509/cms/contact-information-form/Contact_Information_Form_22_l9ptrt.webp "Hide Component")

Here’s how this looks when we preview our app:

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1707232509/cms/contact-information-form/Contact_Information_Form_23_t2rwbl.webp "Preview")

## 4. Design and UX tweaks

Before we push our contact information form live and show off how to embed it on a web page, we’re going to make a few design tweaks and UX improvements.

First of all, the display text for each of our form fields is simply the name of the relevant attribute, as it’s stored in our database. This is functional but aesthetically not very nice for end users.

We’ll use the Label and Placeholder attributes beside each form field to stylize these a little bit:

![Contact Information Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232509/cms/contact-information-form/Contact_Information_Form_24_tnz8re.webp "Contact Information Form")

Since our app is going to be embedded on a web page, we can also remove the title and logo from the top of the UI.

Under Navigation, we’ll deselect the nav bar entirely:

![Remove Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1707232509/cms/contact-information-form/Contact_Information_Form_25_zs6cbj.webp "Remove Nav")

Lastly, we can use the Theme menu to customize our app’s visuals. We’re going to set the theme to Midnight, as well as updating the default button colors to stand out a little better:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_26_fxwfmt.webp "Form")

## 5. Publishing and embedding

Once we’re happy with the design of our contact information form, we can push it live for users. 

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_27_idbgyq.webp "Publish")

Once we’ve done this, we can view our live app and send the link to users. We’ll also be shown a new option to access an embeddable iframe.

![Embed](https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_28_kjxoqq.webp "Embed")

This leads us to the following page, where we can copy the code we need and then paste it into an HTML document:

![Embed](https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_29_ib2k6i.webp "Embed")

Here’s how this would look embedded on the Budibase website:

![Contact Information Form](https://res.cloudinary.com/daog6scxm/image/upload/v1707232508/cms/contact-information-form/Contact_Information_Form_30_ftgysv.webp "Contact Information Form")

Check out our guide to building [digital forms](https://budibase.com/forms/) to find out more about what Budibase has to offers.