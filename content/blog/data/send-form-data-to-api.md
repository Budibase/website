+++
author = "Ronan McQuillan"
date = 2024-02-19
description = "Learn how to use Budibase to build forms on top of external APIs."
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1708349808/cms/send-form-data-to-api/Send_Form_Data_to_API_1_mhuzqn.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Send Form Data to an API in 4 Steps"
+++

Populating API requests is one of the most basic, universal use cases for web forms. However, building forms to do this manually can be a laborious, time-consuming process. It’s also beyond the skills of most non-developers.

But there is a better way.

Today, we’re checking how Budibase can be used to send form data to APIs. Specifically, we’re going to see how we can create and store dynamic REST requests, along with custom UIs, to populate them in a matter of minutes.

Even better, we won’t need to write a single line of custom code.

Let’s jump in.

## When do we need to send form data to APIs?

APIs are some of the most fundamental building blocks of how we handle data and build web solutions. They’re a method for sending data back and forth between different applications and other nodes in a defined, controlled format.

While API requests can often be populated and triggered programmatically by system events, we’re just as likely to need human inputs.

For a very basic example, say we had a data set that’s stored in a legacy application - so the easiest way to query it is via API requests. 

It would be unviable for our data entry team to manually write these requests each time they need to create a record - so we need forms to create and update our data.

In other words, we need to send form data to APIs in any situation where we want to build repeatable, user-friendly workflows for populating requests.

You might also like our round-up of the top [Retool alternatives.](https://budibase.com/blog/alternatives/retool/)

So...

## What are we building?

We’re actually going to build two forms today using an API that stores questions for a survey.

{{< vimeo id="914423121" title="Send form data to an API" >}}

Here’s an example of the data objects that are stored for each question:

{{< highlight javascript "linenos=inline" >}}

{

 "id": 1,

 "question": "Favourite programming language?",

 "published_at": "2015-08-05T08:40:51.620Z",

 "choices": [

  {

   "choice": "Swift",

   "votes": 0

  },

  {

   "choice": "Python",

   "votes": 0

  },

  {

   "choice": "Objective-C",

   "votes": 0

  },

  {

   "choice": "Ruby",

   "votes": 0

  }

 ]

}

{{< /highlight >}}

For the purpose of our forms, we’re only worried about a handful of these attributes. These are the id, question, and choice fields.

Everything else is beyond the scope of what we want to achieve today.

Our two forms will trigger the following:

1. A POST request for creating new records.
2. A PUT request to update existing records.

Let’s jump right in.

## How to send form data to an API with Budibase

Budibase is the fast, easy way to build advanced forms on top of any data source.

If you haven’t already, sign up for a free account now.

{{< cta >}}

## 1. Creating our API requests

We’ll start by creating a new Budibase application. When we do this, we’re prompted to choose which type of data we’d like to connect to.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1708349808/cms/send-form-data-to-api/Send_Form_Data_to_API_1_mhuzqn.webp "Data Sources")

Budibase features an internal low-code database, as well as dedicated connectors for all kinds of RDBMSs, NoSQL tools, APIs, and more.

Naturally, today, we’re choosing REST API.

When we do so, we’ll be brought to this panel, where we can start creating queries.

![Send Form Data to API](https://res.cloudinary.com/daog6scxm/image/upload/v1708349808/cms/send-form-data-to-api/Send_Form_Data_to_API_2_k3ltee.webp "Send Form Data to API")

As we said earlier, we’re eventually going to build two forms - for updating or creating records.

So, we’ll need two corresponding requests to our API. 

Let’s take each one in turn.

### POST request

POST requests are used to instruct the API server to create a new record. We’ll create this first since it’s going to be slightly simpler than our other request.

We’ll start by hitting Create New Query, bringing us to this page.

![Create Request](https://res.cloudinary.com/daog6scxm/image/upload/v1708349807/cms/send-form-data-to-api/Send_Form_Data_to_API_3_fqepnj.webp "Create Request")

First, we’ll choose a method for our REST request and input our endpoint. We can also give our request a more descriptive name.

![Request](https://res.cloudinary.com/daog6scxm/image/upload/v1708349807/cms/send-form-data-to-api/Send_Form_Data_to_API_4_uq19qu.webp "Request")

We know that our API endpoint accepts five parameters - a question and four possible answers.

All of the other attributes in the schema we saw earlier will be generated by the target application itself - so we don’t need to worry about these.

Budibase gives us the option to create bindable values that can be used as dynamic variables throughout our REST requests. We can give these default values and then assign them with real information elsewhere in our application.

We need to create a binding for each of the parameters in our REST request body. We’ll then use form inputs to populate these later.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708349807/cms/send-form-data-to-api/Send_Form_Data_to_API_5_txnqlc.webp "Bindings")

With these in place, we need to create the body of our request - which we can include our bindings within.

We can do this using a form interface, but since our schema that we saw earlier contains a nested array, we’re going to use the JSON editor:

![JSON editor](https://res.cloudinary.com/daog6scxm/image/upload/v1708349807/cms/send-form-data-to-api/Send_Form_Data_to_API_6_calfam.webp "JSON editor")

We’ll start by adding the basic structure of our body parameters. We know from our API docs that our request body should look like this:

{{< highlight javascript "linenos=inline" >}}

{

 "question": "",

 "choices": [

  "",

  "",

  "",

  ""

 ]

}

{{< /highlight >}}

So, that’s what we’ll add.

![JSON blob](https://res.cloudinary.com/daog6scxm/image/upload/v1708349807/cms/send-form-data-to-api/Send_Form_Data_to_API_7_li5hv0.webp "JSON blob")

Then, all we need to do is populate the blank values with our bindings. We can reference these in the format {{Bindings.bindingName}}. 

So, our completed JSON object will be:

{{< highlight javascript "linenos=inline" >}}

{

 "question": "{{Binding.question}}",

 "choices": [

  "{{Binding.answer1}}",

  "{{Binding.answer2}}",

  "{{Binding.answer3}}",

  "{{Binding.answer4}}"

 ]

}

{{< /highlight >}}

![Dynamic request](https://res.cloudinary.com/daog6scxm/image/upload/v1708349806/cms/send-form-data-to-api/Send_Form_Data_to_API_8_smdlog.webp "Dynamic request")

When we send our request, the API responds with the complete data object that’s been saved.

![Send form data to api](https://res.cloudinary.com/daog6scxm/image/upload/v1708349805/cms/send-form-data-to-api/Send_Form_Data_to_API_9_xgbts1.webp "Send form data to api")

### PUT request

For our second request, we can start by duplicating this existing one.

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1708349805/cms/send-form-data-to-api/Send_Form_Data_to_API_10_dcgufm.webp "Duplicate")

Then, we’ll update our method, endpoint, and the name of our request:

![API](https://res.cloudinary.com/daog6scxm/image/upload/v1708349805/cms/send-form-data-to-api/Send_Form_Data_to_API_11_ihdqim.webp "API")

Now, the data schema for this request is basically the same - with the addition of an extra attribute for the question’s id.

This is used to identify the record we want to update with our API request.

So, we’ll add this to our bindings and request body.

![Bindigs](https://res.cloudinary.com/daog6scxm/image/upload/v1708349805/cms/send-form-data-to-api/Send_Form_Data_to_API_12_l8lx2a.webp "Bindings")

Once we’ve tested that and we’re happy that it works, we can start building our forms.

## 2. Building our POST request form

Start by heading over to Budibase’s design tab. Here, we’re given a few options for how to create our first UI. We’re going to choose Blank Screen.

![Blank screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708349804/cms/send-form-data-to-api/Send_Form_Data_to_API_13_gkfmfy.webp "Blank screen")

Then, we’re prompted to give our screen a URL path. We’ll call ours /post-form.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1708349804/cms/send-form-data-to-api/Send_Form_Data_to_API_14_fb098h.webp "URL")

Here’s our blank screen.

![UI](https://res.cloudinary.com/daog6scxm/image/upload/v1708349804/cms/send-form-data-to-api/Send_Form_Data_to_API_15_j1vlws.webp "UI")

The first thing we’ll add is a container, with its horizontal alignment set to the center.

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1708349803/cms/send-form-data-to-api/Send_Form_Data_to_API_16_mnj4fv.webp "Container")

Inside this, we’ll nest a Form component and set its width to 600px.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708349803/cms/send-form-data-to-api/Send_Form_Data_to_API_17_dfwbaq.webp "Form")

We’ll then set its schema to our POST request.

![Send form data to API](https://res.cloudinary.com/daog6scxm/image/upload/v1708349803/cms/send-form-data-to-api/Send_Form_Data_to_API_18_c5hi0z.webp "Send form data to API")

Inside our Form, we’re going to place a container with its direction set to horizontal.

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1708349802/cms/send-form-data-to-api/Send_Form_Data_to_API_19_fesn6d.webp "Container")

Inside this, we’ll place a Headline and a Button.

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1708349802/cms/send-form-data-to-api/Send_Form_Data_to_API_20_eefu50.webp "headline")

We’ll define what our button does in a minute. For now, we’ve simply set its Text attribute to Save.

Remember, our schema for this request consists of a question and four possible answers. So, we’ll next add four text fields beneath our container.

![API form](https://res.cloudinary.com/daog6scxm/image/upload/v1708349802/cms/send-form-data-to-api/Send_Form_Data_to_API_21_exkppg.webp "API form")

Since we set the schema of our form to our API earlier, these are already configured to the right fields. 

We just need to tidy up their display texts using the Label and Placeholder fields for each - for human readability.

![Display Text](https://res.cloudinary.com/daog6scxm/image/upload/v1708349801/cms/send-form-data-to-api/Send_Form_Data_to_API_22_yz0xog.webp "Display Text")

We’ll then open the Actions drawer for our button and add an Execute Query action, setting it to our POST request.

![Executre query](https://res.cloudinary.com/daog6scxm/image/upload/v1708349801/cms/send-form-data-to-api/Send_Form_Data_to_API_23_tjpeqj.webp "Execute query")

Here, we can use the lightning bolt icon to configure values for each of our bindings.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708349801/cms/send-form-data-to-api/Send_Form_Data_to_API_24_rjha6j.webp "Bindings")

We can choose any value our button is exposed to to use within handlebars or JavaScript expressions. 

First, we’ll click Form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1708349801/cms/send-form-data-to-api/Send_Form_Data_to_API_25_psidic.webp "Form")

And we’ll choose the relevant form field for each bindable value.

![Save](https://res.cloudinary.com/daog6scxm/image/upload/v1708349800/cms/send-form-data-to-api/Send_Form_Data_to_API_26_jrarnv.webp "Save")

![Send form data to api](https://res.cloudinary.com/daog6scxm/image/upload/v1708349800/cms/send-form-data-to-api/Send_Form_Data_to_API_27_ghoke3.webp "Send form data to api")

That’s our form completed - but we need to test it to verify that it works.

To do this, we’ll open our app preview and add some new values.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1708349800/cms/send-form-data-to-api/Send_Form_Data_to_API_28_dzwmo1.webp "Test")

We can then check that this worked in our API server’s admin panel.

![Admin panel](https://res.cloudinary.com/daog6scxm/image/upload/v1708349800/cms/send-form-data-to-api/Send_Form_Data_to_API_29_tel5dv.webp "Admin panel")

## 3. Building our PUT request form

The form we’ll use to send data to our other API request is very similar to this first one, so we’ll start by duplicating our existing screen.

![Duplicate](https://res.cloudinary.com/daog6scxm/image/upload/v1708349799/cms/send-form-data-to-api/Send_Form_Data_to_API_30_ompttd.webp "Duplicate")

This time, we’ll set the URL path to /put-form/:id. This will allow us to pass an attribute called id to this screen later via its URL.

![URL binding](https://res.cloudinary.com/daog6scxm/image/upload/v1708349798/cms/send-form-data-to-api/Send_Form_Data_to_API_31_santk4.webp "URL binding")

We’ll start by updating our Form’s Type to Update and its Schema to our PUT request.

![Form Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1708349798/cms/send-form-data-to-api/Send_Form_Data_to_API_32_addu7t.webp "Form schema")

Now, we need a way for users to choose which specific entry they want to update. We could allow them to do this manually by specifying an ID. However, this isn’t a great experience, as users will need to know which ID corresponds to each question.

It’s better if we give users a way to choose from a predefined list of options.

To do this, we’ll need a GET request that returns all of our questions.

We’ll head back to the data section and add a third request, choosing GET as our method and inputting our endpoint.

![Get questions](https://res.cloudinary.com/daog6scxm/image/upload/v1708349798/cms/send-form-data-to-api/Send_Form_Data_to_API_33_rw2s1w.webp "Get Questions")

Then, back on the design tab, we’ll add another screen, setting its URL to ‘/’.

![Home Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1708349798/cms/send-form-data-to-api/Send_Form_Data_to_API_34_a25rws.webp "home screen")

On our new blank screen, we’ll add a Table Block. We’ll set the Data option for this to our new request.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1708349798/cms/send-form-data-to-api/Send_Form_Data_to_API_35_wdmnlb.webp "Table")

Our choices for each row are a series of nested objects, which aren’t going to look neat in a table. We’ll use the Columns drawer to set it so that only the ID and Question fields are displayed:

![All columns](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_36_d7egvx.webp "All columns")

We’ll also set the width of our Questions column to 50% so that the text isn’t truncated.

![Width](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_37_jsdriw.webp "Width")

This is much neater.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_38_sgm2g9.webp "Table")

When a user clicks on any of our rows, we want to navigate to the PUT form to update the relevant data object.

To do that, we need to add an on-click action.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_39_i6dhza.webp "Actions")

We’re going to add a Navigate To action and set the page path to:

{{< highlight javascript "linenos=inline" >}}

/put-form/{{ Clicked row.id }}

{{< /highlight >}}

We’re using the {{ Clicked row.id }} binding to populate the :id variable that we added to our URL earlier.

So, when we change screens, we’ll have a way of identifying the relevant entry for our PUT request.

![Navigate to](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_40_ap3kcm.webp "Navigate to")

Now, head back to our PUT form.

The next thing we need to do is make it so that the existing values for each of our fields are populated when a user navigates to this screen. To achieve this, we’ll add a Data Provider beneath our form.

We’ve set the Data field to our GET request.

![Data provider](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_41_zj29nh.webp "data provider")

We then need to add a filter expression to retrieve only the row where the id attribute matches the one we stored in our URL.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_42_lprec4.webp "Filter")

We can then use the Default Value field for each of our form fields to populate this information.

Our data schema contains several nested objects, so it’s worth taking another look at what we’re dealing with.

{{< highlight javascript "linenos=inline" >}}

{

 "id": 1,

 "question": "Favourite programming language?",

 "choices": [

  {

   "choice": "Swift",

   "votes": 2048

  },

  {

   "choice": "Python",

   "votes": 1024

  },

  {

   "choice": "Objective-C",

   "votes": 512

  },

  {

   "choice": "Ruby",

   "votes": 256

  }

 ]

}

{{< /highlight >}}

The binding for our question attribute will be:

{{< highlight javascript "linenos=inline" >}}

{{ Data Provider.Rows.0.question }}

{{< /highlight >}}

For our choices, we’re using:

{{< highlight javascript "linenos=inline" >}}

{{ Data Provider.Rows.0.choices.0.choice }}

{{ Data Provider.Rows.0.choices.1.choice }}

{{ Data Provider.Rows.0.choices.2.choice }}

{{ Data Provider.Rows.0.choices.3.choice }}

{{< /highlight >}}

![Default value](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_43_mi20we.webp "Default value")

We can then preview our app to confirm that this has worked.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1708349797/cms/send-form-data-to-api/Send_Form_Data_to_API_44_hfzxzm.webp "Test")

We’re almost done with this form, but we should also update our headline component with new display text.

![img](https://res.cloudinary.com/daog6scxm/image/upload/v1708349796/cms/send-form-data-to-api/Send_Form_Data_to_API_45_r217yd.webp "Display Text")

The last thing we need to do is update our button action to populate our PUT query with our form data.

So, we’ll alter our existing button action to do this.

![Button action](https://res.cloudinary.com/daog6scxm/image/upload/v1708349796/cms/send-form-data-to-api/Send_Form_Data_to_API_46_zdvjnl.webp "Button action")

All of our existing bindings are still present.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1708349796/cms/send-form-data-to-api/Send_Form_Data_to_API_47_q3sx1z.webp "Bindings")

The last thing we need to do is assign a value to the id binding, using {{ URL.id }}.

![URL id](https://res.cloudinary.com/daog6scxm/image/upload/v1708349796/cms/send-form-data-to-api/Send_Form_Data_to_API_48_txdq9j.webp "URL id")

While we’re here, we’ll create a second button action to navigate back to our home screen when a submission is made. 

We can do the same thing on our other form screen, too.

![Hmoescreen](https://res.cloudinary.com/daog6scxm/image/upload/v1708349796/cms/send-form-data-to-api/Send_Form_Data_to_API_49_ztoi35.webp "Homescreen")

Once again, we can preview our app to test that we’re sending form data to our API correctly.

![Send form data to api](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_50_fooafg.webp "Send form data to api")

And we can confirm this in our API server’s admin panel.

![API body](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_51_nk1e2z.webp "API body")

Now, we have two fully functional forms for sending data to our API.

## 4. Design tweaks and publishing

Before we wrap up, we’re going to make a few tweaks to our app’s UI.

First, under Navigation, we’ll hit Configure Links to set how we want each page to appear in our nav bar.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_52_xcx2zi.webp "Nav")

Then, under Screen and Theme, we’ll choose Darkest.

![Darkest](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_53_kpxiss.webp "Darkest")

Once we’re satisfied, we can hit Publish to push our app live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_54_sobxsl.webp "Publish")

Here’s a reminder of what our finished app looks like.

![Send form data to API](https://res.cloudinary.com/daog6scxm/image/upload/v1708349795/cms/send-form-data-to-api/Send_Form_Data_to_API_55_wbnhso.webp "Send form data to API")

If you found this guide helpful, check out our [digital forms](https://budibase.com/forms/) page to learn more about how Budibase empowers teams to build advanced forms on top of any data source.