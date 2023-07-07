+++
author = "Ronan McQuillan"
date = 2022-07-12T23:00:00Z
description = "Learn how to create forms for SQL databases in less than 5 minutes with Budibase"
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1657707152/cms/Forms_for_SQL_Database_ds2jru.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1657707158/cms/Forms_for_SQL_Database_dy3fis.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Create Forms for SQL Databases in 3 Steps"

+++
Databases are vital for every business. But as soon as you create your database, a question arises. How can you add data to it? Of course, you could write out queries manually, but you’ll also want a way for less technical staff to enter data.

This means building forms. Today we'll look at how to create forms for SQL databases.

You can also use forms to limit access to your database.

This makes it easy for users to add and edit data using a friendly interface. In addition, you can control what they see, and how fields are populated, or even create more complex data entry workflows and approval systems.

Building forms is one of the best use cases for no/low-code tools.

With traditional, slow-code development, you’d need a lot of work to create a secure and reliable app to interact with your database. But nowadays, you can create forms to perform CRUD operations in SQL in just 3 steps.

This is all you need to do:

1. Set up the database connection.
2. Auto-generate CRUD screens.
3. Customize your forms.

In this article, we’ll dive into how you can do this using Budibase, and create your SQL forms for free in just a few minutes.

Let’s get started!

## What are we building?

Our goal for today is to build an app that contains several SQL forms. Specifically, we’ll be able to query two tables for _posts_ and _settings_. Each one will have separate forms for _create_ and _update_ queries, and functionality to _read_ and _delete_ entries.

We could use this as the basis for a simple internal message board or knowledge base.

Our app has six screens:

* **Home** - A _posts_ table with options to edit records or add new ones.
* **Posts Edit** - Edit form for current records with the option to delete the post.
* **New Post** - You can use this screen to create new posts.
* **Settings** - List the settings table, with options to edit records or add new ones.
* **Settings Edit** - Edit current settings with the option to delete them.
* **New Setting** - Add a new record to the settings table.

As you can see, these screens are used to create, read, delete and update data for two tables.

These are the [database schemas](https://budibase.com/blog/data/what-is-a-database-schema/) for our SQL tables:

* Posts:
  * ID,
  * Title,
  * Content,
  * Date.
* Settings:
  * ID,
  * Settings_key,
  * Value.

Check out our article on [how to create a data model](https://budibase.com/blog/data/how-to-create-a-data-model/) if you want to build your tables from scratch.

Our screens can interact with these tables in any way you want to.

Here is a quick overview of each of the app screens.

### Read and filter data

You can read data in the Home or Settings screens.

![Forms for SQL database screenshot 1](https://res.cloudinary.com/daog6scxm/image/upload/v1657707238/cms/001_zt9yai.webp "Forms for SQL databases screenshot 1")

![Settings Table](https://res.cloudinary.com/daog6scxm/image/upload/v1657707265/cms/002_fiv9te.webp "Settings Table")

You can use the filters to search the table and load specific records. Additionally, you can click on “View” to edit or delete one of the items. Use the “Create New” button to add new records.

### Update and delete data

You get access to the update and delete data screen when you click on “View”.

We’ll create these two screens in your app for this.

![Update form for SQL database](https://res.cloudinary.com/daog6scxm/image/upload/v1657707386/cms/003_gcra3o.webp "Update form for SQL database")

![Form for update settings query](https://res.cloudinary.com/daog6scxm/image/upload/v1657707406/cms/004_gldbzz.webp "Form for update settingds query")

These screens are auto-populated with fields for each of your table columns. You can edit how these fields work, add more options, or edit and remove them entirely.

Then users can save data using the “Save” button, or delete the current record, using the “Delete” button.

### Create data

And last but not least, you can create data. These screens are very similar to the “View”, but they don’t have an ID attribute, because this is a system-generated primary key.

![Form for create post query](https://res.cloudinary.com/daog6scxm/image/upload/v1657707435/cms/005_p33pvw.webp "Form for create post query")

![Form for create settings query](https://res.cloudinary.com/daog6scxm/image/upload/v1657707462/cms/006_miriz3.webp "Form for create settings query")

The same logic applies to these forms. You can change how the form components work, add calculated fields, and restrict data based on the current user.

Now let’s see how you can create an app like this one.

## Step 1 - Connect to your database

The first thing you need to do is create a free Budibase account.

Next, create a new app, and start from scratch. Select your [data source](https://budibase.com/blog/data/data-sources/). In our case, it’s a MySQL database.

We have a simple interface to add your data connection details:

![Establish data connection](https://res.cloudinary.com/daog6scxm/image/upload/v1657707519/cms/007_lksa6e.webp "Establish data connection")

Don’t forget to [whitelist the Budibase IP](https://docs.budibase.com/docs/whitelisting) in your server. It’s likely that only whitelisted IPs can log in.

You can do this in your cPanel or similar for your hosting account.

Now, you need to click on “Fetch Tables”. Budibase loads your tables automatically. You should see your tables and data in the Data panel now:

![Configure connection to SQL database](https://res.cloudinary.com/daog6scxm/image/upload/v1657707582/cms/008_zp3juc.webp "Configure connection")

## Step 2 - Create forms for SQL databases automatically

Your data structure is ready. Now head over to the _Design_ tab at the top and create new screens:

![Autogenerate forms for SQL databases](https://res.cloudinary.com/daog6scxm/image/upload/v1657708163/cms/009_w8sw06.webp "Autogenerate forms for SQL databases")

Then select the “_Autogenerated screens_” option. Pick one of the tables and repeat this process to generate all screens for both tables.

Lastly, head over to the Navigation option, and configure links to your screens:

![Configure Links](https://res.cloudinary.com/daog6scxm/image/upload/v1657708196/cms/010_axpv6n.webp "Configure Links")

These are the navigation links you use in your app. You can enable/disable them on each screen though.

If you want, you can just stop here. You have forms to update your SQL tables, in a basic [CRUD app](https://budibase.com/blog/crud-app/). But let’s see how you can make them better. After all, we want our data entry workflows to be as fast and efficient as they can be.

## Step 3 - Customize your screens

You might want to change a bit how the default screens are. Here are a few tips you can use in your interface.

### Set up a homepage

By default, the auto-generated screens are all under the /\[tablename\] path. But you might want to set one of these pages as your home for your SQL Form editor.

In this case, let’s edit the /posts path to be the screen users first land on. The simplest way to do it is to check the “set as home screen” option. This doesn’t change the path, but it creates a redirection rule.

Whenever your app’s root is loaded, it redirects to that page.

So, you’ll have something like myname.budibase.app/app/my-app#/posts as the path.

You can rename the “/posts” to be the root “/” if you want. But in this case, you need to make a couple of adjustments:

* Fix the path in the breadcrumbs in each of the forms, so they load / instead of /posts.
* Fix the form redirects, so after you add new records or edit entries you are redirected to / instead of /posts.

### Add filtering options to your tables

If you have a lot of data in your table, it might be hard to find the right item to edit. You can add a filtering option to your table to help you with this task.

Click on the “Data Provider” component for one of your tables. Now that it is selected, you can add new components inside of it.

Click on the “+” or on the “+ Components” buttons. Find the “Dynamic filter” component and add it. You can move it to be before the table, in case it is after it.

You can edit the options for that component on the right panel. And that’s it, your table filters are ready:

![Add filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1657708559/cms/017_jw1e53.webp "Add filtering")

### Use a button instead of plain links

By default, the auto-generated pages have a link to view and edit records. If you want to swap it with a button, you can click on your table, then add a button component. This adds a component that is repeated for each of your rows.

Then, use the “_On Click_” action to load your desired page. You can set it up to “Navigate to”, and the screen is “/posts/{{ posts Table.posts._id }}”. The same works for the settings page, which is “/settings/{{ settings Table.settings._id }}”.

The trick here is to use the current row as a binding in your link.

The benefit of using a button instead of a link is that you can nest other actions before you navigate to your SQL form. For example, setting an in-app state or triggering an automation.

### Make table rows clickable

You can make the entire row a link to view/edit the entry. Select the table, check the “link table rows” option, and as the screen URL, use this value:

*/posts/:id*

This passes the current row’s ID to the URL, which is used on the view/edit form.

This is helpful if you have a complex schema for your data [table UIs](https://budibase.com/blog/app-building/table-ui-design/). Removing links or buttons gives you space to display more attributes and values.

### Filter data on conditions

One of the customization options you have is to filter the data that’s displayed to users. You can apply conditionality rule to data provider components to achieve this. For example, you can load only posts that the user has created if the current user isn’t an admin.

You can do it in the data provider, click on “Configure Conditions”.

Then add a condition to “update setting” “filtering” to your desired filters, if you have a column for post author, for example. Then in the conditions, you can select the current user’s role ID, or even filter users by their email, if you have just a couple of users.

### Customize the forms

You can use JS code and bindings to make your forms more dynamic. For example, if you have post categories in a table, you can add options to add categories to a post, but display the category name instead of the ID in your form.

Another idea is to use calculated fields if you want to. Instead of a field with the “sales total” for sales tables, you can calculate the total based on the current products and quantities.

## Create forms for SQL databases with Budibase

Today we looked into how to create forms for SQL databases. You saw a simple way to do it, with a couple of clicks. In addition, we’ve dived into many ways to customize the forms, so they can do exactly what you need them to.

For more inspiration, check out our guide to building a [GitHub metrics dashboard](https://budibase.com/blog/app-building/github-metrics-dashboard/).