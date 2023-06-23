+++

author = "Ronan McQuillan"
date = 2023-06-23
description = "Check out our quick tutorial on building MySQL admin tools"
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_Tools_mnk0xo.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_Tools_mnk0xo.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build MySQL Admin Tools in 6 Steps with Budibase"

+++

MySQL admin tools are some of the simplest applications around - but they can play a vital role in all kinds of daily workflows. 

The unfortunate reality is that the kinds of colleagues who are responsible for most admin tasks don’t have the technical expertise or time to sit around writing custom queries all day. Therefore, we often need custom solutions to bridge this gap.

IT teams are tasked with outputting huge numbers of internal tools for managing data sets. These aren’t the most exciting solutions in the world, but they do take up a massive amount of internal development resources.

Today, we’re going to check out how we can use Budibase to produce admin tools for MySQL in a matter of minutes - not days.

{{< youtube IyMmw6jENeo >}}

## What are we building?

We want to build a tool that’s an accurate representation of the kinds of tasks your average admin colleague will need to perform on a daily basis. So, we’re going for the most basic solution of them all - a simple *CRUD app.*

We’re going to base this around some dummy data for inventory management - just so we’re dealing with a use case that most of you will be familiar with.

Essentially, we have a MySQL database with five tables - and we’re going to create a simple tool for users to *create, read, update*, and *delete* entries - including managing relationships between different entities.

You might also like our tutorial on how to build a [MySQL GUI](http://budibase.com/blog/tutorials/mysql-gui).

Let’s jump right in.

## How to build MySQL admin tools

We’re going to use Budibase to build our MySQL admin tools without writing a single line of code.

The whole thing should take us about fifteen to twenty minutes - but there’s also plenty of scope for you to put your own spin on the build.

Here’s how.

### 1. Create a new application

First, we want to create a new application project. From your Budibase portal, hit *create new app* and choose *start from scratch*.

![Create a Budibase app](https://res.cloudinary.com/daog6scxm/image/upload/v1687524826/cms/mysql-admin-tools/MySQL_Admin_1_htvobg.webp "Create a Budibase app")

We’re then prompted to give our app a name. Budibase uses this to generate a URL extension based on your tenant address - but you can override this and specify whatever slug you like.

![MySQL Admin Tools](https://res.cloudinary.com/daog6scxm/image/upload/v1687524828/cms/mysql-admin-tools/MySQL_Admin_2_hvvbwb.webp "MySQL Admin Tools")

Then, we’re asked to choose a database. As you might guess, we’re picking MySQL:

![Choose a data source](https://res.cloudinary.com/daog6scxm/image/upload/v1687524828/cms/mysql-admin-tools/MySQL_Admin_3_yeoihl.webp "Choose a data source")

### 2. Connecting our data

On the next screen, we’re prompted to enter our database credentials. Once we’ve done this, we can hit *connect*.

![SQL credentials](https://res.cloudinary.com/daog6scxm/image/upload/v1687524828/cms/mysql-admin-tools/MySQL_Admin_4_whfg6g.webp "SQL credentials")

Once we fetch our tables, we can view and manipulate our MySQL database tables within Budibase’s *Data* section:

![MySQL Admin Tools](https://res.cloudinary.com/daog6scxm/image/upload/v1687524828/cms/mysql-admin-tools/MySQL_Admin_5_yeonhy.webp "MySQL Admin Tools")

We’ll make a couple of changes here a little bit later, but for now, that’s our data layer pretty much completed.

### 3. Autogenerate CRUD screens

Next, we can start building our MySQL admin tool’s interface. Remember, the *requirements* here are that we want to give non-technical users an easy way to carry out CRUD actions on our five MySQL tables.

Luckily, in Budibase, we can basically create these with a couple of clicks.

From the design tab, we’re going to hit *add screen* and then select *list view* on the modal that pops up.

![New Screens](https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_6_fhxk6z.webp "new screens")

Then we’re prompted to choose which tables we want to add CRUD screens for. We’re going to select all five of the tables in our MySQL database, but we could opt for any combination of these if we wanted to.

![MySQL tables](https://res.cloudinary.com/daog6scxm/image/upload/v1687524826/cms/mysql-admin-tools/MySQL_Admin_7_lfawes.webp "MySQL tables")

Now we’ve got five admin screens where users can *read, update*, or *create* entries on each of our tables.

![CRUD screen](https://res.cloudinary.com/daog6scxm/image/upload/v1687524826/cms/mysql-admin-tools/MySQL_Admin_8_f7vooy.webp "CRUD sceren")

To finish these off, we’ll open the component tree on each page, select the relevant table block, and scroll down to check *show delete* - giving users the option to delete entries when they click through to edit a row.

And that’s our basic CRUD screens completed. We’ll return to these in a bit to tidy up the UI slightly, but already, we have fully functioning MySQL admin tools.

### 4. Define relationships

Now, the problem with our current app is that we haven’t accounted for how our five tables relate to each other. That’s a pretty big oversight - since manipulating *relational* data is basically the main selling point of SQL.

Let’s head back to the *data* section of the Budibase builder. 

On each table, we have the option to *define relationships* - effectively telling Budibase how each of our tables links up with the others.

For example, each row in our *products* table might relate to many rows in our *inventories* table. We can hit *define relationships* and configure this information, including which variables to use as our primary and foreign keys.

So, for the relationship between products and inventories, the configuration would look like this:

![MySQL admin tools](https://res.cloudinary.com/daog6scxm/image/upload/v1687524826/cms/mysql-admin-tools/MySQL_Admin_10_uy5qy6.webp "MySQL admin tools")

Budibase creates a new relationship column on each table to reflect this.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1687524827/cms/mysql-admin-tools/MySQL_Admin_11_zhd1n4.webp "Tables")

And we can repeat this process for all of the other relationships that we need to create between our tables.

### 5. Customize our CRUD screens

Now, if we return to our CRUD screens, they’re gotten a bit messier - since we’ve added extra columns to our tables.

Even worse, from an end-user perspective, some of these even appear to be effectively duplicated:

![UI](https://res.cloudinary.com/daog6scxm/image/upload/v1687524827/cms/mysql-admin-tools/MySQL_Admin_12_unzclq.webp "UI")

We can go back to our table block component and configure which columns we actually want to display to users. Since we have our new relationship variables, we no longer strictly need ProductID or WarehouseID, so let’s remove them.

First, we’ll hit *configure columns* and then choose *add all columns* in the drawer that opens - then we can use the delete icon to remove any columns we don’t want to display.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1687524826/cms/mysql-admin-tools/MySQL_Admin_13_numvym.webp "Bindings")

This leaves us with a much neater interface, free from any clutter:

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_14_dmtlh0.webp "Table")

Again, we can repeat this step for each of the tables we want to manage with our MySQL admin tools.

### 6. Navigation and design

Finally, we can play around with our app’s overall design to make it a little bit more appealing. By default, every Budibase app has a blank home screen. But we’re not using this, so we can simply remove it.

![MySQL admin tools](https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_15_e2mtho.webp "MySQL admin tools")

Now we need to assign one of our remaining screens as our MySQL admin tool’s homepage. We’ll go with inventory, so select that page and check the *set as home screen* box in the top right.

![Set home screen](https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_16_ouhsvy.webp "Set Home Screen")

We can also head over to the *theme* panel and select one of Budibase’s built-in color palettes, and alter the design of interactive elements.

The last thing we want to do is remove *Home* from our navigation menu - since we don’t have a dedicated home screen anymore. Under navigation hit *configure links* and the drawer will allow you to edit your menu.

Once again, we’ll use the delete icon to remove the *Home* option. We can also change the copy our the order of our remaining menu items.

![MySQL Admin TOols](https://res.cloudinary.com/daog6scxm/image/upload/v1687524825/cms/mysql-admin-tools/MySQL_Admin_18_wz3ac6.webp "MySQL Admin Tools")

And that’s our MySQL admin tools totally finished.

All that’s left is to hit *Publish* and start sending our app to users.

If you liked this tutorial, check out our guide on how to build a [SQL GUI.](http://budibase.com/blog/tutorials/sql-gui)

## Turn data into action with Budibase

Of course, this is just a basic example of what you *could* build with Budibase. To get a flavor of what else is possible, let’s take a look at what Budibase brings to the table for busy IT teams.

Here’s why Budibase is the ideal solution for all sorts of apps - not just MySQL admin tools.

{{< cta >}}

### Our open-source, low-code platform

Our design philosophy is *simplicity by default; extensibility when you need it*. Budibase offers a generous free tier, market-leading data support, intuitive design tools, autogenerated UIs, custom automations, and much more.

Check out our [features overview](https://budibase.com/product) to learn more.

### External data support

No other low-code tool comes close for data support. We offer dedicated connectors for MySQL, MSSQL, Postgres, Oracle, S3, Airtable, Mongo, Couch, Arango, Google Sheets, REST API, and more.

We’ve also got our own built-in database, with full support for CSV uploads.

### Optional self-hosting

At Budibase, we empower our users to deploy their solutions, where they want, how they want. We offer self-hosting with Docker, Digital Ocean, Kubernetes, Portainer, Linode, and more.

We’ve also got our own proprietary cloud hosting option. Check out our [pricing page](https://budibase.com/pricing) to learn more about both.

### Automations and integrations

Budibase makes building custom automations a breeze. Define triggers and combine, nest, and configure pre-built automation blocks, with minimal custom code.

We also offer a huge array of integrations with Zapier, Webhooks, REST, and more.

### Role-based access control

Use Budibase’s built-in RBAC to safeguard security without compromising on UX. Add users to defined roles and grant permissions based on data sources, queries, automation rules, screens, or individual components.

We even offer free SSO using OpenID, OAuth, Microsoft, and more.

### Custom plug-ins

Budibase leads the pack for extensibility. Build your own data sources, automation actions, or components, and leverage them across your app projects with our dedicated CLI tools. Or, import community contributions from GitHub at the click of a button.

Check out our custom [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free application templates

Budibase is the ideal solution for building all kinds of web apps, utilities, internal tools, and more. To prove it, we’ve created over fifty free, fully-customizable [app templates](https://budibase.com/templates/) to help get you started.

Whether you need MySQL admin tools or a totally bespoke solution, sign up to Budibase today to start building professional apps the fast, easy way.