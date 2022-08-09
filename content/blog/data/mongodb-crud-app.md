+++
author = "Ronan McQuillan"
date = 2022-08-08T23:00:00Z
description = "Learn how to build a MongoDB CRUD app in just a few minutes with Budibase."
draft = true
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1660057264/cms/How_to_Build_a_MongoDB_CRUD_App_dmicyi.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1660057282/cms/How_to_Build_a_MongoDB_CRUD_App_jab5l9.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a MongoDB CRUD App in 4 Steps"

+++
NoSQL databases such as MongoDB seem intimidating at first. The MongoDB CRUD operations come from a different paradigm, which might be confusing if you are used to SQL databases.

But it doesn’t need to be this way.

Instead of manually figuring out how to perform CRUD operations in MongoDB, you can use the power of low-code to do it for you.

That is, create an app that handles these differences, allowing you to interact with your DB, just like you would with other tools, like phpMyAdmin.

Today, we’re going to look at how to create a MongoDB CRUD app in 4 steps. This will allow you to interact with your DB with no coding knowledge, while still leveraging the full power of NoSQL.

Along the way, we’ll also explore the concepts and differences between SQL and NoSQL CRUD.

Let’s get started!

## How does MongoDB store data?

Instead of tables and rows, MongoDB databases use collections and documents. Collections are similar to tables. They aggregate multiple documents. Documents are the key/value pairs, like row/column pairs in a table.

The main difference is that each document can have its own structure. Unlike tables that have fixed columns, MongoDB allows you to store unstructured data. Thus, you can have documents with completely different key/value pairs in the same collection.

## What is CRUD in MongoDB?

CRUD is an abbreviation of _Create, Read, Update, Delete_. These are the basic operations to interact with databases.

The CRUD operations are the same for SQL and NoSQL databases. However, because the data is structured differently, the way we perform CRUD operations is also different.

## Does NoSQL use CRUD?

Yes, just like SQL databases. The main difference is in how these methods are created, and what they do under the hood.

In SQL, CRUD operations are SQL commands. In NoSQL, they are commands as well, but in other languages. For instance, MongoDB CRUD commands look more like JavaScript functions with JSON code.

## Create a MongoDB CRUD app in 4 steps

Let’s see how you can perform operations in MongoDB with a simple [CRUD app](https://budibase.com/blog/crud-app/). Today, we have an example of an app to manage your sales. For simplicity’s sake, we’ve got an existing data model, with the following attributes, as well as a few others that we don’t need:

* id.
* date.
* location.
* customer.

On the main page you’ll see the first operation, read. You can read data from a collection, and filter it in case you are looking for a specific document.

![MongoDB CRUD App Homescreen](https://res.cloudinary.com/daog6scxm/image/upload/v1660057831/cms/01-read-and-filter-crud_tnlns4.webp "MongoDB CRUD App Home Screen")

Then, if you click on the “edit” button, you’ll see the next two CRUD operations: update and delete. On this page, you can edit your documents. If you want, you can delete them too.

![Edit and delete queries](https://res.cloudinary.com/daog6scxm/image/upload/v1660058070/cms/02-edit-delete-mongo-db-documents_tnecfl.webp "Edit and delete queries")

And lastly, the “Create” operation. You can do it from the home screen if you click on “Add new”. This screen is just like the edit screen. The only difference is that you won’t have any pre-populated data.

![CREATE query in MongoDB](https://res.cloudinary.com/daog6scxm/image/upload/v1660058136/cms/03-create-new-sale_u9laav.webp "Create new query")

You can create this app in 4 simple steps:

1. Create the app, and connect to MongoDB.
2. Set up the MongoDB CRUD operations.
3. Create the home screen.
4. Create the add new/edit screen.

## How to create a MongoDB CRUD app in Budibase

Today, we’re going to cover exactly how you can build a MongoDB CRUD app using Budibase, the leading [open-source, low-code platform](https://budibase.com/blog/open-source-low-code-platforms/).

Let’s just jump straight in.

### Step 1 - Create the app and connect to MongoDB

If you haven’t already, go ahead and create your Budibase and MongoDB accounts.

Then, from the main Budibase screen, create a new app and select MongoDB as the [data source](https://budibase.com/blog/data/data-sources/).

Simply add your connection name, connection string, and DB name.

If you don’t have a connection string, you can find it by clicking on the “Connect” button, next to your cluster name:

![Get connection string for MongoDB database](https://res.cloudinary.com/daog6scxm/image/upload/v1660058337/cms/04-mongodb-get-connection-string_gczjgn.webp "Get connection string for MongoDB database")

Any of these methods will give you a connection string. For this example, I just picked the connection string from the MongoDB Compass option.

That’s it! Now Budibase is connected to your MongoDB instance. Connecting Budibase to external data sources really couldn’t be much easier.

### Step 2 - Set up the MongoDB CRUD operations

In this step, you’ll create the CRUD operations to manipulate your database. Still in the “_Data_” Panel of Budibase with your MongoDB connection selected, click “_Add query_”.

![Create queries in Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1660058418/cms/05-data-panel-add-query_r9l7bc.webp "Create a query in Budibase")

You’ll need four queries:

* **Get_sales** - Read the sales data, and filter based on the properties.
* **Update_sale** - Update operations, to edit entries.
* **Insert_sale** - Add new documents.
* **Delete_sale** - Delete a document.

The get_sales query uses these settings:

![Get sales query](https://res.cloudinary.com/daog6scxm/image/upload/v1660058504/cms/06-get-sales-query_h1dau3.png "Get sales query")

Our sample data includes some properties that we won’t use. It’s likely that in your real application you might need to hide some data as well. Remember NoSQL data is unstructured, so there might be a whole raft of different variables in your [data model.](https://budibase.com/blog/data/how-to-create-a-data-model/)

You can remove these from your query using this transformer:

return data.map( ({ _id, saleDate, storeLocation, customer }) => ({ "ID": _id, "Date": saleDate, "Location": storeLocation, "Customer": customer.email }) )

This removes all properties except the id, date, location, and customer email.

You can run your query to make sure it works as you wanted. Then save it.

The insert_sale query looks like this:![Insert sale query](https://res.cloudinary.com/daog6scxm/image/upload/v1660058580/cms/07-insert-sale_nev4q3.png "Insert sale query")

We are using some bindings there. They allow you to fill in forms and send this data to your DB. In the fields option, use this:

{

"saleDate": "{{Date}}",

"customer": {

"email": "{{Customer}}"

},

"storeLocation": "{{Location}}"

}

These are the settings we need to tell MongoDB how to store the form data.

Add a new query, and use these settings for the update_sale operation:

![Update Sale Query](https://res.cloudinary.com/daog6scxm/image/upload/v1660058711/cms/08-update-sale_anzwke.png "Update Sale Query")

Notice how this one is similar to the insert query.

The only difference is that we need to get the id, so we know which item to update. And these are the fields to do it:

{

"_id": "ObjectID('{{ID}}')"

},

{

"$set": {

"saleDate": "{{Date}}",

"customer.email": "{{Customer}}",

"storeLocation": "{{Location}}"

}

}

The first portion is the “search” part. The second part is the _update_ instruction.

If there are multiple documents that match the search criteria, only the first one is updated. If you want to update multiple documents at once, you can use the “_updateMany_” action type (as opposed to “updateOne”).

The update instructions include our bindings as variable values. They get data from our form fields and pass them to MongoDB.

Run the query and save it.

Lastly, add a new query for the delete_sale operation.

Be **very** careful with this operation. If possible, it’s better to move records to an archive collection or add an “archive” property to them, as opposed to deleting them.

You can set up your query like this:

![MongoDB CRUD App delete query](https://res.cloudinary.com/daog6scxm/image/upload/v1660058878/cms/09-delete-sale_ss0zst.png "MongoDB CRUD App Delete")

Make sure to include your fields to define which items you want to delete:

{

"_id": "ObjectID('{{ID}}')"

}

Now run it, and save the query.

In addition to the basic operations, you can run many complex filters and use other options. You can read the MongoDB docs for detailed instructions on all the possibilities.

That’s all you need for the database connection. Let’s create the visual elements of your app so that they reflect our [database schema](https://budibase.com/blog/data/what-is-a-database-schema/).

### Step 3 - Create the home screen

The home screen features a button to add new records, a table to view sales, and a filter to get the exact items you want to see.

You can create and edit screens in the “design” tab.

Before creating your screen, like any good app, we need a dark theme. Only joking, you can use whichever theme you like.

You can style your Budibase app under the themes menu:

![Set app theme in Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1660058908/cms/10-app-theme_cpwqgg.png "Set app theme in Budibase")

Pick a theme and your preferred accent color. Then head over to the “screens” section. If you haven’t already, create a new screen, and select it as your app’s home page:

![Set screen as home](https://res.cloudinary.com/daog6scxm/image/upload/v1660058980/cms/11-set-as-home_ducaad.png "Set Screen as Home")

Go to the “components” section and let’s start building your page. Add a button for the “_Add new_” option, and set the “_onclick_” action to navigate to /home/0.

This may seem weird, but we are going to use the /home/:id path to edit entries. Therefore, to create a new item, we just need an invalid ID. With an invalid ID (zero), your edit form is removed, and the “_add new_” form appears.

In Budibase, whenever you want to load data, you can add a data provider as the source and an iterator to display it. You can create a data provider and set it with the get_sales provider:

![Data provider](https://res.cloudinary.com/daog6scxm/image/upload/v1660059031/cms/12-data-provider_vk3g1w.png "Data provider")

Then, add a dynamic filter and a table inside of it, like this:

![Dynamic filter](https://res.cloudinary.com/daog6scxm/image/upload/v1660059052/cms/13-dynamic-filter-table_lqfcbq.png "Dynamic filter")

Lastly, add the “edit” button to each of your rows. You can do this by clicking on the table, then on _add new component,_ and selecting the button component. This will add a button inside your table.

Set the “_onclick_” action to _navigate to URL_. The path is this binding:

/home/{{ Sales.get_sales.ID }}

Here you are saying to Budibase “use the ‘Sales’ table and the ‘get_sales.ID’ value”. This means that, if the row id is “abc100”, the target URL is “/home/abc100”.

And that’s all you need for the “read” portion of your MongoDB CRUD app. It’s time to create the edit [form UI](https://budibase.com/blog/app-building/form-ui-design/).

### Step 4 - Create the add new/edit screen

Create a new screen, and in the route, put /home/:id. This route is going to load anything you use in your path after “/home/” as a variable.

This option comes in handy since it allows us to use this ID information to either load the document that you want to edit or load the _add new_ form.

To make it easier to understand, this is the overall page structure:

* Breadcrumbs
* Add new form
  * Title
  * Form fields
  * Button
* Data provider (get_sales using the id)
  * Repeater
    * Edit form
      * Title
      * Form fields
      * Button

Notice that we have 2 forms on a single page. The trick to showing just one of them is to use the “Configure Conditions” option and hide/show them based on the :id value from our URL.

So we hide the “New Form” if {{ URL.id }} if NOT equal to 0. And we hide the “Edit form” if the {{ URL.id }} IS EQUAL to 0.

The form setup itself is almost the same, so let’s see how you can create the _edit form_. It’s a bit more complex.

Add a Data Provider. You’ll need this to pre-populate the form fields. Use the get_sales query, and under the filter options, use ID is equal to binding {{ URL.id }}.

![MongoDB CRUD App](https://res.cloudinary.com/daog6scxm/image/upload/v1660059891/cms/14-filter-url-id_kx0d5t.png "MongoDB CRUD App")

Then you need an iterator. In the previous screen, you used a table, which is just a way to load all data at once. This time, we are loading items individually, so it makes sense to use the repeater.

Inside the repeater, we have a title to show users what is happening. In it, you can load the sale ID with this binding:

Edit Sale {{ Repeater.get_sales.ID }}

Next, there is a form, which is required to manipulate the form fields. You can use the “Update’ type and update_sale as the schema.

In the form, you can add a field group. They are very useful since you can add fields for your entire schema by clicking the “_Update Form Fields_” button:

![MongoDB CRUD App](https://res.cloudinary.com/daog6scxm/image/upload/v1660059996/cms/15-field-group_fhquec.png "MongoDB CRUD APP")

This will create 4 fields automatically, _ID_, _Date_, _Customer,_ and _Location_.

If you want the date to be a date picker you can delete the default element and add a new date picker component. Just make sure to change the field to Date, so Budibase knows that this is the source of the date information.

And while you are at it, use the bindings to load the current value for the date:

{{ Repeater.get_sales.Date }}

You can repeat this process to load default values for the other fields, using these bindings:

{{ Repeater.get_sales.Customer }}

{{ Repeater.get_sales.Location }}

Feel free to delete the ID field. We are loading the ID from the URL directly, so you don’t need it there.

Now you need a button to save the form edits. Add a new button, and for the “_Onclick_” actions, select “_execute query_”, using the field values to populate the query bindings:

![](https://res.cloudinary.com/daog6scxm/image/upload/v1660060062/cms/16-form-action_elkxiv.png)

This ensures that the data is saved, you can add another action to navigate to the /home/ page, so you are ready to edit other entries.

You could add more options, such as an app state to display confirmation modals. Free free to improve the UI as much as you like and tailor it to your specific needs.

The “Delete” operation of your CRUD MongoDB app is quite simple. It’s just one button.

Add the delete button, and make sure it is inside the sales repeater. Preferably far away from the update button to avoid any mishaps.

Then, use the “_onclick_” action for this button, just like you did for the form button. Here you’ll run the delete_sale query. Make sure to pass the URL.id to the ID binding.

For the “_add new_” form, you can simply copy the entire update form component. Paste it into a new container (outside the sales data provider). Then, remove the default values, and use the insert_sale instead of the update_sale query.

If you want, you can add the breadcrumbs as a finishing touch. In it, you can use a container and switch from horizontal stacking to vertical stacking:

![Breadcrumbs](https://res.cloudinary.com/daog6scxm/image/upload/v1660060120/cms/17-breadcrumbs_icp097.png "Breadcrumbs")

Then, in it add a link to home, which is fixed, and a paragraph for the > divisor, which is fixed as well. The last paragraph is going to change between “Add new” and “Edit sale”. You can do so by using this JS function:

![Breadcrumb binding](https://res.cloudinary.com/daog6scxm/image/upload/v1660060141/cms/18-breadcrumb-text_tx6lza.png "Breadcrumb binding")

## Building a MongoDB CRUD app in 4 steps

Today we looked into how you can create a MongoDB app with Budibase. With it, you can interact with your NoSQL database easily, with no coding knowledge.

We offer support for an unrivaled variety of data sources, as well as our built-in database. To see more of what Budibase is capable of, why not check out our range of free, deployable [app templates](https://budibase.com/templates)?

We hope you’ve enjoyed it. See you again next time!