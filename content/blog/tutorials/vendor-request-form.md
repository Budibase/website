+++
author = "Ronan McQuillan"
date = 2023-10-27
description = "Check out our guide to building a vendor request form."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1698414283/cms/vendor-request-form/Vendor_Request_Form_drlq94.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1698414283/cms/vendor-request-form/Vendor_Request_Form_drlq94.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Vendor Request Form"

+++

Vendor request forms are a key part of managing inventories, supply chains, and procurement processes - specifically when it comes to registering new suppliers.

However, this can also create a huge amount of administrative work for logistics and finance teams alike. In particular, handling vendor requests manually or with pen and paper can lead to excessive data entry, validation, and other admin tasks.

Today, we’re checking out how you can use Budibase to digitalize your vendor request forms with minimal custom coding skills.

By the end of this tutorial, you’ll have a fully customizable multi-step form - that you can even host on your website.

{{< youtube qDXfm4ZUa5Y >}}

But first, let’s think about a little bit of background.

## What is a vendor request form?

A vendor request form app is a simple self-service UI that allows potential partners to register their interest in working with your business. Essentially, it’s a structured way of gathering key information and saving it to a database.

The idea is to replace the need for pen and paper forms - or at least documents and PDFs.

Implementing digital forms can be a huge process improvement in and of itself - or it can be the first step towards other kinds of transformation efforts - including automation, data centralization, and more.

Ultimately, the goal of a request form is to achieve two things:

1. Providing external users with a more efficient, streamlined experience for making requests.
2. Ensuring that all request information is stored in a consistent format in a single location.

With that in mind…

## What are we building?

We’re building a multi-step, embeddable form that allows users to add entries to a table in Budibase’s internal database - although, as we’ll see, we could apply the same technique to do the same thing with a huge range of external data sources.

Here’s how this will look when we’re done:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414296/cms/vendor-request-form/Vendor_Request_Form_1_t3bkpm.webp "Vendor Request Form")

And here’s what it would look like if we embedded it on the Budibase website:

![Embed](https://res.cloudinary.com/daog6scxm/image/upload/v1698414298/cms/vendor-request-form/Vendor_Request_Form_2_xiycn9.webp "Embed")

## How to build a vendor request form in 6 steps

So, let’s dive right in. If you haven’t already - sign up for a free Budibase account.

{{< cta >}}

## 1. Create a new app and configure your data

The first thing we need to do is create a new Budibase application. We have the option of importing an existing app or starting with a template - but we’re going to hit *start from scratch*. We’ll then be prompted to give our app a name - which will be used as its URL path:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414303/cms/vendor-request-form/Vendor_Request_Form_3_wyqxp9.webp "Vendor Request Form")

We’re then able to choose a data source:

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1698414304/cms/vendor-request-form/Vendor_Request_Form_4_ipuhqn.webp "Data Sources")

Budibase offers dedicated database connectors for MySQL, SQL Server, Postgres, REST, Google Sheets, Airtable, CouchDB, MongoDB, DynamoDB, and many more.

But, we’re going to use Budibase’s internal database. This means that we can quickly create our form’s data model on the fly - or add it using existing data from a CSV file.

When we hit *create new table* - we’re asked to give it a name. We’ll call ours *VendorRequest*:

![Create Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698414285/cms/vendor-request-form/Vendor_Request_Form_5_p3y6s9.webp "Create Table")

When we upload a CSV, we can choose a data type for each of the included attributes - as well as selecting a *display column*. 

We’ll use *company_name* for this.

![Attributes](https://res.cloudinary.com/daog6scxm/image/upload/v1698414285/cms/vendor-request-form/Vendor_Request_Form_6_cqm6tc.webp "ATtributes")

There’s an attribute in our CSV called *services_description* which we’re also going to change to the *long form text* type - so that we can give our form users a little bit more space to add information later:

![Long form text](https://res.cloudinary.com/daog6scxm/image/upload/v1698414284/cms/vendor-request-form/Vendor_Request_Form_7_la2j94.webp "Long form text")

Hit *create* and Budibase will import our CSV data into our new table. Already, we can perform full CRUD functionality in Budibase’s back-end - as well as altering our schema by adding, editing, or deleting columns.

The data itself is pretty simple. 

Our schema is based on the requester’s company information, address, the primary contact, and some basic billing details.

While we’re here- we’re going to make one change to our data model, by adding an extra attribute manually. This will be a *boolean* column called *purchase_order_billing*. We can do this with the plus icon in the table’s header:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1698414284/cms/vendor-request-form/Vendor_Request_Form_8_ljshwj.webp "Table")

And that’s our data model completed.

## 2. Add a new app screen

Now, we can start to build our form. To start, head to the *design* tab.

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698414301/cms/vendor-request-form/Vendor_Request_Form_10_leo6u6.webp "New Screen")

We have two options - starting from a blank screen or using a table layout, which will autogenerate a CRUD UI, based on whichever data source we select.

We’re going to use a blank screen. Again, we’re asked to choose a name and URL path. Our vendor request form app is only going to have one screen, so we’ll simply use “*/*”.

![Path](https://res.cloudinary.com/daog6scxm/image/upload/v1698414303/cms/vendor-request-form/Vendor_Request_Form_11_bpybid.webp "Path")

Then, we need to choose an *access level* for our screen. Budibase’s built-in RBAC is based around four hierarchical roles - *public, basic, power*, and *admin*.

Since we want to embed our form on our website, we’ll need it to be accessible to users who don’t necessarily have a Budibase account. 

So, we need to choose *public*:

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1698414287/cms/vendor-request-form/Vendor_Request_Form_13_kwoxys.webp "RBAC")

## 3. Create a new form

Now we have a blank screen:

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1698414287/cms/vendor-request-form/Vendor_Request_Form_14_mguo9w.webp "Blank Screen")

On this, we’ll add a form block. 

This is a prebuilt set of components that allows us to generate a form and point it to a particular data source - for reading, creating, or updating entries:

![Form block](https://res.cloudinary.com/daog6scxm/image/upload/v1698414286/cms/vendor-request-form/Vendor_Request_Form_15_qlssh6.webp "Form block")

By default, this is already a *create* form. Since we only have one data source connected to our app, it’s also already pointed at our *VendorRequests* table. 

Here’s what this looks like:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414286/cms/vendor-request-form/Vendor_Request_Form_16_wtexx4.webp "Form")

Strictly speaking, we could stop now. That is, this is already a fully functional vendor request form.

However, it’s not exactly pretty. Never worry, Budibase makes it a breeze to create professional UIs - without needing to write any custom code.

The first thing we’ll do is give our new form a *heading*:

![Title](https://res.cloudinary.com/daog6scxm/image/upload/v1698414284/cms/vendor-request-form/Vendor_Request_Form_17_ih4dwi.webp "Title")

We’ll also align our field labels above their respective input boxes, rather than to the left:

![Alignment](https://res.cloudinary.com/daog6scxm/image/upload/v1698414300/cms/vendor-request-form/Vendor_Request_Form_18_dpnmvr.webp "Alignment")

And we’ll set the field *size* to *large*:

![Large](https://res.cloudinary.com/daog6scxm/image/upload/v1698414302/cms/vendor-request-form/Vendor_Request_Form_19_cj15t9.webp "Large")

We’re happy with the order that our fields are in - but they’re being displayed to users with their attribute names as they’re stored in our database. This isn’t very appealing for a public-facing app.

We’ll use the cog beside each of our fields to capitalize their *label* and *placeholder* - as well as replacing the underscores with spaces:

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1698414301/cms/vendor-request-form/Vendor_Request_Form_20_jrybdi.webp "Columns")

Here’s what we have so far:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414289/cms/vendor-request-form/Vendor_Request_Form_21_l28dty.webp "Form")

## 4. Adding form steps

Our vendor request form is looking a lot better - but we’re asking users to provide a lot of information all at once. This can be overwhelming - and potentially harm our form completion rates or increase the risk of mistakes.

We’ll get around this problem by breaking our form up into *steps*. Basically, users will only be able to see related subgroups of fields at any one time.

To start doing this, we need to *eject* our form block:

![Eject Block](https://res.cloudinary.com/daog6scxm/image/upload/v1698414289/cms/vendor-request-form/Vendor_Request_Form_22_nmxtjp.webp "Eject Block")

This will break our form up into its constituent components:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1698414289/cms/vendor-request-form/Vendor_Request_Form_23_ky6znk.webp "Component Tree")

Now, add a *form step* component and place this at the top of our *field group*, like so:

![Field](https://res.cloudinary.com/daog6scxm/image/upload/v1698414288/cms/vendor-request-form/Vendor_Request_Form_24_h37lvb.webp "Field")

Inside this, we’ll nest our first two form fields - *company_name* and *category*:

We need some way for users to navigate between form steps, so below these two fields we’ll place a container with its direction set to horizontal - and it’s alignment set to the right:

We’ll call this *Button Container*:

![Button Container](https://res.cloudinary.com/daog6scxm/image/upload/v1698414300/cms/vendor-request-form/Vendor_Request_Form_26_vsuaru.webp "Button Container")

We’ll nest a button inside this and set its text to *Next*.

![Button](https://res.cloudinary.com/daog6scxm/image/upload/v1698414299/cms/vendor-request-form/Vendor_Request_Form_27_guhznd.webp "Button")

Then, we’ll add a *change form step* action so that when users click on our button, they navigate to the next step.

![Action](https://res.cloudinary.com/daog6scxm/image/upload/v1698414298/cms/vendor-request-form/Vendor_Request_Form_28_kdnshl.webp "Action")

Now, we’ll add a second form step - inside of which we’ll nest *street_address, street_address_line_two, state*, and *zip*:

![Form Step](https://res.cloudinary.com/daog6scxm/image/upload/v1698414291/cms/vendor-request-form/Vendor_Request_Form_29_yurfjn.webp "Form Step")

We’ll duplicate our button container from step one and drag the new version to the button of step two:

![Next Button](https://res.cloudinary.com/daog6scxm/image/upload/v1698414291/cms/vendor-request-form/Vendor_Request_Form_30_imfz5m.webp "Next Button")

But we need to make a few tweaks to allow our users to go back to previous form steps. Start by changing the horizontal alignment of our container to stretch:

![Next Button](https://res.cloudinary.com/daog6scxm/image/upload/v1698414291/cms/vendor-request-form/Vendor_Request_Form_31_uedtjs.webp "Next Button")

Then, add a new button inside the container before our existing one. We’ll set its text to *back* and check the *quiet* option:

![Back Button](https://res.cloudinary.com/daog6scxm/image/upload/v1698414284/cms/vendor-request-form/Vendor_Request_Form_32_yedjsd.webp "Back Button")

We’ll set this button’s action to navigate to the previous form step:

![Form Step](https://res.cloudinary.com/daog6scxm/image/upload/v1698414298/cms/vendor-request-form/Vendor_Request_Form_33_w5oqvg.webp "Change Form Step")

Create a third form step - inside of which we’ll place *contact_first_name, contact_last_name, contact_email*, and *contact_phone*. We’ll also duplicate our button container from step two and place this below these fields:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414297/cms/vendor-request-form/Vendor_Request_Form_34_igzfey.webp "Vendor Request Form")

Then, repeat this process for our three remaining fields:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414297/cms/vendor-request-form/Vendor_Request_Form_35_skliqq.webp "Vendor Request Form")

However, this time we’re going to delete the *Next* button - and replace it by dragging the existing *Save* button into its place:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414293/cms/vendor-request-form/Vendor_Request_Form_36_sxwvst.webp "Vendor Request Form")

Here are the preconfigured actions for the *Save* button:

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1698414293/cms/vendor-request-form/Vendor_Request_Form_37_iy3me5.webp "Button Actions")

We’re going to remove everything except *validate form* and *save row*. Then, we’ll add a new action to navigate to the next form step. We’ll use this final step in a second to display a confirmation message and prevent multiple completions in a single session.

![Change Form Step](https://res.cloudinary.com/daog6scxm/image/upload/v1698414292/cms/vendor-request-form/Vendor_Request_Form_38_g9pg6a.webp "Change Form Step")

Finally, let’s add a fifth form step - and nest a paragraph component within it:

![Message](https://res.cloudinary.com/daog6scxm/image/upload/v1698414290/cms/vendor-request-form/Vendor_Request_Form_39_kpdnzg.webp "Message")

And we’ll set its *text* to our confirmation message:

![Message](https://res.cloudinary.com/daog6scxm/image/upload/v1698414283/cms/vendor-request-form/Vendor_Request_Form_40_ytfdgm.webp "Message")

## 5. Design tweaks

Now, before we can embed our vendor request form on our website, we want to make a few design changes.

We’ll start by changing the *theme* to *lightest*, giving us a plain white background:

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1698414296/cms/vendor-request-form/Vendor_Request_Form_41_mcs4ej.webp "Theme")

Under *navigation* we’ll also deselect the option to show our nav bar:

![Hide Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1698414295/cms/vendor-request-form/Vendor_Request_Form_42_lupnfg.webp "Hide Nav")

Finally, we want to vertically centre our form on the screen. All of our components are already nested inside a container - so we can simply set the *vertical alignment* option for this to *center*:

![Align](https://res.cloudinary.com/daog6scxm/image/upload/v1698414295/cms/vendor-request-form/Vendor_Request_Form_43_xki4kh.webp "Align")

## 6. Publishing and embedding your vendor request form

Now, we’re ready to embed our app. 

To do this, we’ll need to *publish* it:

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1698414294/cms/vendor-request-form/Vendor_Request_Form_44_ekz16q.webp "Publish")

Then, click embed:

![Embed](https://res.cloudinary.com/daog6scxm/image/upload/v1698414294/cms/vendor-request-form/Vendor_Request_Form_45_bmvhqd.webp "Embed")

That will bring us to this page, where we can copy the HTML for an iFrame to embed our app, wherever we’d like:

![Embed](https://res.cloudinary.com/daog6scxm/image/upload/v1698414292/cms/vendor-request-form/Vendor_Request_Form_46_keo50s.webp "Embed")

We can simply hit *copy code* and past this into any HTML document to embed our vendor request form on a website.

Here’s a reminder of what that looks like:

![Vendor Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1698414288/cms/vendor-request-form/Vendor_Request_Form_47_gknwbm.webp "Vendor Request Form")

Budibase is the ideal solution for turning data into action. If you found this guide helpful, why not check out our tutorial on how to build a [fleet management dashboard](https://budibase.com/blog/tutorials/fleet-management-dashboard/)?