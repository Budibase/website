+++
author = "Ronan McQuillan"
date = 2022-09-20T23:00:00Z
description = "Learn to build a custom Postgres GUI web interface in minutes with Budibase."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1664959926/cms/How_to_Build_a_Postgres_GUI_pmhm0j.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1664959932/cms/How_to_Build_a_Postgres_GUI_kobhio.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build a Free Web-Based Postgres GUI in 15 Minutes"

+++
A Postgres GUI helps you make the most out of your database, whether you are a coder or not.

Databases are incredible tools for businesses. They allow you to store and process data at scale so that you can make better-informed decisions.

You have two options to load data from databases. You can use code, via a command line or a programming language. So, you type in the commands in a terminal or send your code to a server and you get the results.

Or you can use a Graphical User Interface (GUI) to visually interact with your database. With a GUI you interact with your database using screens, buttons, and visual elements to see what is happening.

Thus, a GUI allows you to access your database, even if you aren’t a coder. If you are a coder, it is still a great option to run simple tasks. You can always run your queries manually in case you need them either way.

It is quite tricky to pick the right tool, though. There are many factors to consider, including licensing price, features, online access, number of users, ease of use, and many more.

But there's a simple solution.

You can build your own Postgres GUI using a free, [open-source low-code platform](https://budibase.com/blog/open-source-low-code-platforms/) like Budibase.

It's much easier than it sounds, it requires no coding knowledge and you can do it in three steps.

1. Connect to your Postgres Database.
2. Auto-generate the GUI screens.
3. Add your custom elements to your Postgres GUI.

Today we walk you through this process. You’ll learn how you can connect to your database, get data from it, and generate screens automatically. Then, you’ll learn how to customize the app to add your own functions.

All of that with no coding knowledge, using Budibase.

Let's get started!

## Is there a GUI for Postgres?

Postgres is a database system. It is a tool to store and process data.

Thus, it doesn't have an official GUI.

But there are many Postgres GUI options available. In addition, you can build your own GUI in just three steps.

Let’s see what you can build in the next section.

You might also like our guide to building a [MySQL GUI](/blog/tutorials/mysql-gui).

## What is the best client for PostgreSQL?

The best Postgres GUI depends on your requirements. There are pre-made tools with a wide range of features and prices, yet there’s no guarantee that you’ll find the perfect fit for your business.

At the end of the day, the best PostgreSQL client is the one that does everything you need. And very rarely will you find this in a premade tool.

Building an app with code can take a lot of time and it can be very expensive. But you can use a low-code builder to do it for free.

Let's see what we consider the best PostgreSQL client if you just want to get started.

The demo app is connected to a PostgreSQL database for a blog.

There are two tables, one for posts and one for settings.

The first screen you see when you load up the app is the posts table:

![](https://res.cloudinary.com/daog6scxm/image/upload/v1664960800/cms/01_johjiy.webp "Postgres GUI")

In it, you can see a drop-down to select which table you want to work with. This is a useful tool if you have many tables. It allows you to navigate between screens without adding a menu item for each.

If you scroll down a little bit you can see the search toggle. When you click this button, you see the table fields and you can use it to search items, like this:

![How to build a postgres GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664960815/cms/02_utalgm.webp "How to build a postgres GUI")

Next, you can see the table data. You can click on the "view" button or the add new button to manage items. These buttons open a modal screen with this form:

![Edit Row](https://res.cloudinary.com/daog6scxm/image/upload/v1664960839/cms/03_ahdv2k.webp "Edit Row")

This is just a form with fields coming from the table. But you can spice it up in any way you want to. You can include reference data, API calls, data from other tables, and even actions to send emails.

The settings screen is very similar, but it uses different elements:

![ Postgres GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664960855/cms/04_tmdocc.webp "Postgres GUI")

All elements are the same, but instead of the search toggle, there’s a dynamic filter. This is another option to filter table data, and you can see the pros and cons of each item when you are creating them.

Let's build your Postgres GUI now.

{{< cta >}}

## Step 1 - How do I connect to PostgreSQL GUI?

You can connect your Postgres GUI with your database with the host URL, database name, username, and password. Make sure you whitelist the Budibase IP address in case your server has a firewall.

To build your app, head over to Budibase and create an account if you don't have one. Then create a new app and use PostgreSQL as your data source.

Add your credentials, fetch your tables, and you are ready to use them on Budibase:

![Data tab](https://res.cloudinary.com/daog6scxm/image/upload/v1664960936/cms/05_yuls2e.webp "Data tab")

You don’t need to create any simple CRUD queries. Budibases does them for you automatically.

Now you can create a query to get a list of the tables in your database. It allows you to automatically add items to the tables selector dropdown, so you don’t need to manually add them to that component.

While still with the PostgreSQL data source selected, click on add query and use these options:

![Postgres query](https://res.cloudinary.com/daog6scxm/image/upload/v1664961049/cms/06_qhx4zb.webp "Postgres query")

Just replace the username in this query with your own username. Run it and save it.

Next, let's follow the mandatory step in any app design and use a dark theme.

Head over to the design tab, pick the theme menu option, and use the theme options.

![Them option](https://res.cloudinary.com/daog6scxm/image/upload/v1664961079/cms/07_hkr72y.webp "Theme Option")

In addition to the overall app theme, you can edit the app header/navigation. Click on the navigation section to bring the options to edit the menu items along with the header colors:

![Postgres GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664961283/cms/08_l2uyss.webp "Postgres GUI")

You can pick any CSS color you want, from a simple hex value to CSS gradients.

Now let’s create your app screens.

## Step 2 - Autogenerate Postgres GUI screens

Head over to the “screens” section. That’s where you can create each of your app routes:

![Screens](https://res.cloudinary.com/daog6scxm/image/upload/v1664961303/cms/09_aakdbq.webp "Screens")

Click on “_add screen”,_ and select “_autogenerated screens”._

This option automatically creates CRUD screens for one of your tables. Select the posts table and then repeat this process for the setting stable.

At the end of this process, you have six screens, three for each of your tables.

This is what each of these screens do:

* /tablename - this screen shows you the database table, a button to add new items and edit buttons on each of the table rows.
* /tablename/new/row - this screen contains a form to add new items, and it uses fields from the table schema.
* /tablename/:id - this screen uses a route with a variable :id. So, anything that goes after the /tablename/ portion of your URL is saved in the :id variable. This allows you to prepopulate the edit form with data from the item you want to edit.

If you want a simple Postgres GUI, that is all you need to do.

The beauty of using autogenerated screens is that it gives you an immense headstart. And you can edit these screens if you want to add more options.

For example, you might want to connect to an API when editing items and populate a field with it. Or maybe you want to add search options to quickly find a specific entry from your tables. You can edit these screens, instead of starting from scratch.

Let’s see some customization examples next.

## Step 3 - Customize the GUI screens

There are four main customizations in the demo app, and they show you how to do many different tasks with Budibase.

1. Add tables navigation with a dropdown.
2. Add dynamic filters to a table.
3. Add custom search filters to a table.
4. Open the edit/new screens in modals.

Here is how you can do each of them.

### How to add a dropdown to navigate through Postgres tables

The logic of this feature is to list all your database tables, then when you select one of them your app loads the /tablename screen.

Edit the posts screen and add a new component to it using the blue button. You can use this structure:

![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1664961332/cms/10_lbilzk.webp "Components")

The parent component for the selector is just a container. Inside of it, you can add a data provider. This provider loads the show_tables query. This provider is simply a data source for the actual options picker.

Now add a form component inside the data provider, just to make sure that the options picker works. Add the options picker and select the data source as the data provider. Labels and values are the table name.

![Postgres GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664961352/cms/11_zelr3s.webp "Postgres GUI")

Then, add an onChange action for it, like this:

![Button action](https://res.cloudinary.com/daog6scxm/image/upload/v1664961373/cms/12_l7jfq5.webp "Button action")

That’s all you need to use this dropdown as a quick way to navigate to all the /tablename routes.

### How to add dynamic filters to Budibase tables

Now, let’s edit the settings page and add a filtering component to it. Click on the data provider, add new component and select the dynamic filter.

This component automatically changes the data provider, allowing user inputs on each of the table columns, like this:

![Filtering](https://res.cloudinary.com/daog6scxm/image/upload/v1664961408/cms/13_pbejfg.webp "Filtering")

That’s a very quick way to add search options to your Postgres GUI. But since this is a premade component you can’t fully customize it. If you want a custom logic in your search, then the next component works better.

### How to create a custom search form

Back to the posts page, add a form component above the table data provider. This form contains the search form itself. This is the final tree structure for that page so you can follow along:

![Postgres GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664961437/cms/14_j4vr3h.webp "Postgres GUI")

The search form is a parent of the data provider, so you can use the form inputs in the data provider itself.

The “search items” button toggles the visibility of the fields group. You can do it with an app state.

Set the onclick actions of this button to run “Update State”, to “set value” with the key “search”. In the value click on the binding button, and then on the JS code.

Use this code:

{{< highlight javascript "linenos=inline" >}}

if ( $("State.search") ) {
    return 0;
} else {
    return 1;
}

{{< /highlight >}}

This code just alternates between 0 and 1. If the current app state is zero (search fields hidden), it sets this state as one (fields visible). If it is one, the app state is updated to zero (hiding the fields).

As for the form fields themselves, here is where you can go crazy. You can add anything you want there. For example, you can use referenced fields, but instead of displaying a client_id, you allow users to search by the client name or even their address.

Right now, we just use two simple text fields, as that’s what we have in our table.

Then, to make these fields affect your data provider, set its filters like this:

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1664961458/cms/15_irbnr4.webp "Bindings")

This is where you can set anything you want, from bindings to JS code.

That’s it, your custom search is ready.

### How to open and close modal screens in Budibase

Lastly, you can make the _edit_ and _add new_ buttons to open in a modal screen, instead of reloading the app.

You can do it by editing the original table item, removing the default link, and using a button instead. Then, use this onClick action for the edit button:

![Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1664961479/cms/16_sbc3ni.webp "Buttons")

You can make a very similar edit to the _create new_ button, just check the “open in a modal’ option.

This is enough to make the forms open in a modal. But you need to close it.

Edit the delete, and save buttons (from the edit and add new screens). Instead of “navigate to” actions, use “close modal” actions.

{{< cta >}}

## How to build a Postgres GUI in Budibase

Today you learned how you can create a Postgres GUI to interact with your database in just 3 steps. Now you can quickly deploy your own GUI, and customize it in any way you want to.

Check out our in-depth guide to building [database GUIs](https://budibase.com/blog/tutorials/database-gui/).

We hope you enjoyed it, and see you again next time!