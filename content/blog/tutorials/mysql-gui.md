+++
author = "Ronan McQuillan"
date = 2025-05-20T23:00:00Z
description = "Read our step-by-step guide to learn how to build a MySQL GUI, in minutes."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1664899844/cms/How_to_Build_a_MySQL_GUI_yvx10e.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1664899852/cms/How_to_Build_a_MySQL_GUI_zefmyr.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Create a Free MySQL GUI in 3 Steps"

+++

MySQL is one of the most popular database systems out there. And that’s for a good reason. It is lightweight, fast, easy to learn, and widely available. Using a MySQL GUI to manage your databases will help you make the most out of this tool.

A GUI (Graphical User Interface) allows you to interact with your database with a visual interface. This allows you to see your data and use visual elements as opposed to text-based terminals and command lines.

Naturally, this is crucial if you want your non-technical colleagues to manage data.

It can be hard to pick the right MySQL GUI tool, though.

There are many options to choose from - many price ranges, features, and operating systems. However, it’s not hard to build a free tool that can do anything you want, and work on any devices you want to, including mobiles.

You can build your own MySQL GUI in just three steps.

Therefore, today we are going to explore how you can build a free MySQL web interface using Budibase - or use the Data section within a Budibase Workspace as a fully functioning MySQL GUI.

Let’s get started!

## **Does MySQL have a GUI?**

MySQL is a database system. It doesn’t have an official GUI, but there are many app options to connect to it. There are free and open source apps, as well as paid options.

In addition, you can build your own MySQL GUI using the tips from this three-step guide, leveraging a Budibase app as a MySQL frontend.

## **What is the best GUI for MySQL?**

The right MySQL GUI depends on your use case and requirements. You can build your own MySQL GUI following this guide, or you can use one of these great tools listed here:

- Adminer
- BeeKeeper Studio
- Database Workbench
- DataGrip
- DBeaver
- DBEdit
- dbForge Studio for MySQL
- DronaHQ
- HeidiSQL
- LibreOffice Base
- mySQL Workbench
- Navicat for MySQL
- OpenOffice.org Base
- phpMyAdmin
- SQLBuddy
- SQLyog
- Toad Edge for MySQL
- Webmin

It’s important to research which features you need from specific tools - for instance, cross-platform integrations or auto-completion. Often, custom builds are the most cost-effective option to meet bespoke requirements.

You might also like our guide to building a [Postgres GUI](https://budibase.com/blog/tutorials/postgres-gui) .

## **What is a MySQL GUI?**

A MySQL GUI allows you to interact with your data visually. Thus, you can filter, add, update, and delete data without using SQL commands.

But a lot of these tools allow you to add your own commands as well, since you’ll often need to perform custom queries.

This allows you to get the better of the two worlds. You can quickly perform actions using premade functions if you want. But you can run your own commands if you need to run a specific query as well.

## Using Budibase a MySQL GUI

Straight out of the box, we can use Budibase as a fully functional GUI for connected databases, including MySQL. This enables App Admins within our Workspace to write, test, and save queries securely.

These can then be used within end-user applications and automations across the Workspace.

Below, you can see the query editor, where we can write custom SQL statements to retrieve insights from our MySQL database.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222430/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_1_xnuiax.webp "MySQL GUI")

When we run this, we can see the results in the right-hand side panel.

![Query Response](https://res.cloudinary.com/daog6scxm/image/upload/v1756222430/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_2_irtcgy.webp "Query Rersponse")

We can also create bindings that can be used to pass dynamic variables to our query from end-user apps and automations, or apply custom JavaScript transformations to our query responses.

From the `Queries` tab of our MySQL data source, we can see all of the queries we have already saved.

![Saved Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1756222428/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_3_jvkjkc.webp "Saved Queries")

## What are we building?

In today’s tutorial, we’re going to build a MySQL GUI that allows end-users to perform a more specific set of actions.

Specifically, we’ll be creating a CRUD tool, that enables users to create, read, update, or delete rows on two tables called `posts` and `categories`. These represent the backend of a blog platform.

![CRUD Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1756222427/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_4_ay9k1r.webp "CRUD Screen")

On this screen, users can apply custom filtering expressions based on the `title` or `content` columns, or the related `categories` row.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1756222425/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_7_prt1gk.webp "Filter")

If you click on the *edit* or *add new* button, you are going to see a form like this one:

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1756222426/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_6_auwoam.webp "Form")

This form is the same for the *add new* or *update* actions. There are some internal differences, and the *delete* button is removed if you are adding new items.

We’ve also created a similar screen for performing CRUD operations on our `categories` table. This time, however, we’ve added a static search bar to our table, based on the `category` column, rather than dynamic filters.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1756222424/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_8_jrcqtb.webp "Categories")

## How to build a MySQL GUI in 3 steps

If you haven’t already, the first thing you’ll need to do is sign up for a free Budibase account, to start building as many applications as you like.

{{< cta >}}

Next, we’ll create a new Workspace. In Budibase, a Workspace is a collection of data sources, end-user apps, and automation rules, which can all interact with one another.

For our project today, we’ll simply call our Workspace `MySQL GUI`.

![New Workspace](https://res.cloudinary.com/daog6scxm/image/upload/v1756222424/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_9_mhu2cu.webp "New Workspace")

### 1. Setting up our data layer

Once we’ve created this, we’re next prompted to choose our first data source. Budibase offers a range of dedicated connectors for all kinds of RDBMSs, NoSQL tools, APIs, and more, alongside our built-in low-code database.

For external databases, Budibase acts as a proxy, querying your data without ever storing it.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1756222422/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_10_a6sva7.webp "Data")

As you may have guessed, we’re going to select the option to connect to a MySQL database.

When we do so, we’re prompted to input our config details.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222421/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_11_lawzik.webp "MySQL GUI")

We’re then asked to select which of our database’s constituent tables we’d like to `Fetch`, allowing us to interact with them within Budibase. Our table contains two tables called `posts` and `categories`. 

We’re fetching both.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1756222421/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_12_z9kgaf.webp "Fetch Tables")

Here’s how these will look in the Data section of our Workspace.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1756222419/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_13_iw6ua7.webp "Table")

Already, we can interact with our databases, including adding new data via the spreadsheet-like UI.

![Add A Row](https://res.cloudinary.com/daog6scxm/image/upload/v1756222419/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_14_jrerbm.webp "Add A Row")

#### Configuring relationships

Before we can create a MySQL GUI that will enable us to perform CRUD actions across our two tables, we’ll need to configure the relationships between them in Budibase. As you can see above, the `posts` table contains a column called `category_id`.

This corresponds to the `id` column in the `categories` table, as shown below.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1756222418/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_15_p2183g.webp "Categories")

To establish a relationship between our two tables, we’ll need to hit `Define Relationship` from the `categories` table.

![Relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1756222415/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_16_foyqx1.webp "Relationships")

We’re setting up a `one-to-many` relationship, using `id` as our `primary key` and `category_id` as our `foreign key`.

![Define Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1756222415/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_17_xtvfql.webp "Define Relationship")

We can now see the display column of the relevant `categories` row alongside each of our `posts`.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1756222415/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_18_zpr5ww.webp "Categories")

#### Handling long-form text

We’re going to make one last change within the Data section before we start creating the front-end for our MySQL GUI.

Currently, our `posts` table contains two text columns, called `title` and `content`. When we autogenerate our UIs, we want to give users more space to edit the `content` field, as well as enabling them to use Markdown.

To achieve this, we’ll update the `Type` for this column from `Text` to `Long-Form Text`, as well as selecting the option to enable rich text.

![Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1756222414/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_19_fh2pyc.webp "Schema")

This doesn’t alter the underlying schema of our database. Rather, it only changes the way Budibase handles this attribute internally.

That’s the back-end of our MySQL GUI ready to go.

### 2. Autogenerating CRUD UIs

To start building our front-end, we’ll head to the `Apps` section of our Workspace. Here, we’re presented with the option to create our first app, which can be used to access any data source contained in the same Workspace.

![Apps](https://res.cloudinary.com/daog6scxm/image/upload/v1756222412/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_20_lrljbx.webp "Apps")

We’re first prompted to give our app a name and URL extension. We’ll simply call ours `GUI`.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222411/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_21_nnnkwf.webp "MySQL GUI")

When we hit `Confirm`, we’ll be brought to the Budibase builder, where a new app has been created for us with a blank screen.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1756222411/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_22_af7nxb.webp "Blank Screen")

We could start building our GUI from scratch using Budibase’s built-in library of reusable components. However, we’re instead going to rely on autogenerated layouts to create the bulk of our app.

So, we can simply delete this screen.

When we do this, we’ll be offered several options for creating a new screen, including starting from scratch again or autogenerating a UI based on connected data.

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1756222410/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_23_ituvce.webp "Layouts")

We’re selecting the `Table` option, which will output a fully working CRUD UI for any database tables we select. 

We’re picking both of our database’s constituent tables.

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1756222409/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_24_xh0fku.webp "Tables")

We’re then asked how we’d like to display our forms for creating or updating rows. We’re selecting the option to contain these within `Modals`.

![Modal](https://res.cloudinary.com/daog6scxm/image/upload/v1756222408/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_25_yhcf4t.webp "Modal")

We now have a fully working CRUD screen for each of our tables.

![Posts](https://res.cloudinary.com/daog6scxm/image/upload/v1756222407/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_26_esb8mc.webp "Posts")

We can access modal forms to create or update rows, using the `create row` button or by clicking any individual row on our table, respectively.

![Edit](https://res.cloudinary.com/daog6scxm/image/upload/v1756222406/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_27_n36jpb.webp "Edit")

### 3. Editing our autogenerated screens

Functionally speaking, our MySQL GUI essentially does what we want it to at this point. However, we’re going to apply a few key UX improvements, as well as implementing some additional functionality to make it easier to locate specific rows on either table.

To make things easier to follow, we’ll take each of our screens in turn.

#### Posts

We’ll start with our `posts` screen. The first thing we’ll do here is update the `Text` setting of our `Heading` component to be more descriptive.

![CRUD UI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222406/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_28_gjdxj3.webp "CRUD UI")

We’ll then use the `Columns` sliders on our `Table` component to deselect our `id` and `category_id` columns, as end users don’t really need to read these.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1756222405/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_29_phdkh6.webp "Columns")

We’ll also make some design tweaks to each of our forms. First, we’ll give them more descriptive `Titles`.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1756222404/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_30_bkg6ed.webp "Form")

Then, under `Styles`, we’ll set the `Button Position` to `Top`.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222403/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_31_ynmlad.webp "MySQL GUI")

Lastly, we want to add functionality to this screen that will enable end-users to create and apply front-end filtering rules.

We’ll start by hitting the `+` icon to open the components menu. Here, we can search for the `Filter` component.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1756222403/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_32_n7avvf.webp "Filter")

We’ll place this alongside our existing `Create Row` button.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1756222402/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_33_caxgsq.webp "Filter")

Budibase’s `Filter` component accepts a setting called `Target Component`, and displays UI elements to allow users to filter any columns we select from the underlying data source of this.

We’re choosing our `posts` table, and picking `title`, `content`, and `categories.category` as our fields.

![Target Component](https://res.cloudinary.com/daog6scxm/image/upload/v1756222401/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_34_wwjryl.webp "Target Component")

The `category` field is labeled as `categories.category` because it’s actually stored in the related row of our `categories` table, rather than each individual row of our `posts` table.

To address this, we can use the `Label` setting for this field to update its display text.

![Display Text](https://res.cloudinary.com/daog6scxm/image/upload/v1756222401/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_35_l0hv0z.webp "Display Text")

Now, our users can create filtering expressions using any of these columns.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1756222400/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_36_joqeeo.webp "Filter")

#### Categories

Next, we’ll start by making some similar changes to our `categories` screen. Once again, we’ll start by updating our table’s display text and deselecting the `id` column.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1756222399/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_37_tmhjlc.webp "Categories")

As before, we’ll also update the `Title` of each of our forms, and set their `Button Position` to `Top`.

![Button Position](https://res.cloudinary.com/daog6scxm/image/upload/v1756222399/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_38_sbr1ik.webp "Button Position")

However, this time we’re going to take a slightly different approach to enabling users to access specific rows in our MySQL GUI.

That is, rather than creating complex filtering expressions from the front-end, we want to provide a static search bar.

Budibase components have a global context, meaning that they can access the data outputs of any other components on the screen.

We’ll start by adding a `Text Field` component, alongside our `Create Row` button.

![Text Field](https://res.cloudinary.com/daog6scxm/image/upload/v1756222398/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_39_yi4ply.webp "Text Field")

This accepts several settings, but the only ones we’re interested in are `Field` and `Placeholder`. 

We’ll set both of these to `Search`.

![Search](https://res.cloudinary.com/daog6scxm/image/upload/v1756222397/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_40_lvrrgo.webp "Search")

Whereas the `Filter` we used on our previous screen simply allowed us to choose a target component, for our search bar to work, we’ll need to configure an appropriate filtering rule on our `Table`, using its data output.

To do this, we can select our `Table`, and open the filtering menu.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222397/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_41_eghlrz.webp "MySQL GUI")

Here, we’ll add a filter group with three rules using the `Like`, `Starts With`, and `Equals` operators, based on our `category` column.

![Category](https://res.cloudinary.com/daog6scxm/image/upload/v1756222396/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_42_a86td2.webp "Category")

We can use the lightning bolt icon alongside our comparison values to open the bindings drawer, enabling us to pass values to our filter dynamically.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1756222395/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_43_xosfyn.webp "Bindings")

Here, we can see all of the categories of available bindings, including the output of our `Search Text Field`.

![Search Bar](https://res.cloudinary.com/daog6scxm/image/upload/v1756222395/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_44_je1ge4.webp "Search Bar")

Within this, we’ll select the `Value` binding.

![Value](https://res.cloudinary.com/daog6scxm/image/upload/v1756222395/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_45_ngq82v.webp "Value")

We’ll then repeat this process for our other two filter expressions.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1756222394/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_46_vxc4ca.webp "Filter")

Finally, we’ll use the dropdown menu to return `All Rows` when the filter is empty.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1756222394/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_47_bwgiuh.webp "MySQL GUI")

When we’re happy, we can use the `Publish` button to push our web-based MySQL GUI live for end users.

![publish](https://res.cloudinary.com/daog6scxm/image/upload/v1756222394/cms/tutorial-refreshes/mysql-gui/MySQL_GUI_48_ffrf8s.webp "publish")

You might also like to check out our ultimate guide to building [database GUIs](https://budibase.com/blog/tutorials/database-gui/).

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

With extensive external data support, powerful AI-driven automations, autogenerated UIs, optional self-hosting, custom RBAC, free SSO, and much more, there’s never been a faster way to build secure internal tools.

Take a look at our [features overview](https://budibase.com/product/) to learn more.