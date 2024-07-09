+++
author = "Ronan McQuillan"
date = 2024-02-22T23:00:00Z
description = "With Budibase, building a custom SQL GUI has never been easier. Here's everything you need to know."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1664187039/cms/How_to_Build_a_SQL_GUI_ttdmca.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1664187046/cms/How_to_Build_a_SQL_GUI_hlukgc.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build a Free SQL GUI in 5 Steps"

+++
SQL is a powerful database query language that can be used to unlock valuable insights stored in databases. But SQL can be difficult to learn and use, particularly for non-specialists.

That’s where a SQL GUI (Graphical User Interface) comes in handy.

SQL GUIs are useful for developers and non-developers alike. They provide intuitive interfaces to interact with the database without writing SQL syntax commands. You can visually interact with tables, rows, fields, searches, and more, without any specialist knowledge.

Thus, you don’t need to worry about the right code syntax to get the data you want to see. You just use the GUI components, like you would with any other app.

They can cater to advanced users as well. With them, you can quickly perform simple tasks. And if you want to write SQL code anyway, it’s always possible to do it.

Another benefit of a dedicated GUI tool is that you can have a single tool to load data from different databases with completely different architectures. Therefore, with a single tool, you can see all your MySQL, MariaDB,  Oracle, and even Microsoft SQL Server databases, wherever you are.

The bad news is that buying a SQL GUI to manage databases might not be an easy decision. There are many things to consider, such as licensing, access control, user volumes, app installs, and custom workflows.

But you can solve this with low-code development.

It’s possible to build your own SQL GUI in just 5 steps. Using Budibase, you can create a tool that does exactly what you want it to, that loads all your data, for unlimited users and with web access.

This is the beauty of low-code development.

The truth is, you don’t even need the full 5 steps. If you just want a simple CRUD interface, you can do it with just steps one and two. But today, we’re going to look at how to create something a little more sophisticated.

Here is a quick overview of how to create a GUI for SQL databases using our open-source platform.

1. Create your app and connect to your database.
2. Create your CRUD interface with one click.
3. Custom DB connections to read, write and delete data.
4. Custom screens to see and filter all your tables.
5. Forms to edit data from any table.

You might also like our guide to building a [REST API GUI](https://budibase.com/blog/tutorials/rest-api-gui/).

Let’s get started!

## Does SQL have a GUI?

SQL is a standard language that lets you store, manipulate and retrieve data in databases. It doesn’t have a GUI in itself, but there are many applications you can use for that.

They come in a vast range of options and prices, and you can even build your own GUI for free, by following this tutorial.

In case you want to check out what options there are out there, here is a list of off-the-shelf graphical interfaces that database administrators use for writing SQL queries:

* DBeaver.
* SQLyog.
* DataGrip by JetBrain.
* DbVisualizer.
* DronaHQ.
* MySQL Workbench.
* OmniDB.
* DataGrip.
* HeidiSQL.

## What is the best GUI for SQL?

The best GUI depends on your needs. Some are more popular, due to how they are distributed. For example, phpMyAdmin is pretty ubiquitous.

Others cater to very specific needs.

Here are some points to consider when you pick a SQL GUI (or if you build your own):

* **License cost** - be it one time, monthly or yearly.
* **Licensing limitations** - number of users, number of instances.
* **Local or web-based** - some are accessible online, others only work as desktop installations.
* **Databases supported** - some work with a specific database, and others can work with multiple databases.
* **Ease of use** - how complex the interface is.
* **Customization** - if it’s possible to add new features to it via plugins, or even editing the source code.
* **Reliability** - if the tool works all the time or if it breaks.

You might also like our round-up of [open-source form builders](https://budibase.com/blog/open-source-form-builder/).

## How do you create a GUI?

You can create your SQL GUI using Budibase. There are actually two methods to interact with your databases, and you’ll learn both:

1. Using the one-click interface to generate CRUD pages for a table.
2. Using drag-and-drop components, custom connections, queries, and a little bit of custom code to make a flexible SQL interface that loads any table from a database connection.

The end result is something like this:

![Custom SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664187961/cms/01_scfb6k.webp "Custom SQL GUI")

This is the main app page. In it, you can select the tables, filter data, add new records, and edit rows. The add new/edit screen looks like this:

![SQL GUI home screens](https://res.cloudinary.com/daog6scxm/image/upload/v1664187936/cms/02_gfitiy.webp "SQL GUI home screen")

The form is the same for both the new row and edit options. The only difference is that one creates a new row, and the other updates a current row.

In addition, there is the App Settings page:

![App settings](https://res.cloudinary.com/daog6scxm/image/upload/v1664187918/cms/03_aux7st.webp "App settings")

The settings page is where you add your DB tables. Using this method your end users don’t need to edit the Budibase app to add new data. They can just insert them using this screen.

If you take a closer look, it is quite similar to the home screen. The difference is that the settings screen is created using the auto-generated pages, while the home screen is custom-built.

This may seem like a small difference in terms of end result, but they have different use cases and capabilities.

It’s worth mentioning that we’re not going to dive too deep into security and user-control today. If you have a lot of users or critical data, make sure to include protections against SQL injection and proper user controls in your pages and queries.

You might also like our in-depth guide to [data modeling](https://budibase.com/blog/data/how-to-create-a-data-model/).

## 1. Create your app and connect to a database

To get started, you can create a free Budibase account.

Once that’s done, it’s time to connect to your [data source](https://budibase.com/blog/data/data-sources/). In our demo SQL user interface, we are using a MySQL database.

Add the connection details on the interface:

![Connect to SQL](https://res.cloudinary.com/daog6scxm/image/upload/v1657707519/cms/007_lksa6e.webp "Connect to SQL")

Make sure you have [whitelisted the Budibase IP](https://docs.budibase.com/docs/whitelisting) in your server. Otherwise, even with the right credentials, you won’t be able to connect.

![Import Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1657707582/cms/008_zp3juc.webp "Import tables")

Next we need to store our App’s settings. You can use one of your tables to do it, but another option is to use Budibase DB.

In our demo app we have a table called “_app_setting_s” with these columns:

* Table_name.
* ID.
* Title.
* Value.

You’ll use this table to select which columns from the MySQL tables correspond to this format. This allows us to use a single table with a fixed structure to display data from any table we want.

For example, in the MySQL tables we have these tables and columns:

* Posts:
  * id,
  * title,
  * content,
  * date,
* Settings:
  * id,
  * settings_key,
  * value.

Therefore, we need to tell Budibase, which attributes from each of the tables go into each of the columns we have available.

These are the _mappings_:

![App settings table](https://res.cloudinary.com/daog6scxm/image/upload/v1664187832/cms/04_rsrtrq.webp "App settings table")

## 2. Generate a SQL GUI automatically

If you just need a simple GUI, you can create it automatically with Budibase. Let’s do this with the App Settings so you can use this method for your tables.

Go to the _Design_ tab, select the screens menu, and hit _add screen_.

![Add screens](https://res.cloudinary.com/daog6scxm/image/upload/v1664187812/cms/05_kevrex.webp "Add screens")

Then select the “Autogenerated screens” option and pick the _app_settings_ table.

![CRUD screens for SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664187730/cms/06_qrg0gs.webp "CRUD Screen for SQL GUI")

This is what you should see:

![SQL GUI Design](https://res.cloudinary.com/daog6scxm/image/upload/v1664187631/cms/07_qlladj.webp "SQL GUI Design")

And that’s all you need for a basic SQL GUI. You can repeat this process with all tables in case you want just these functions.

In our example, we’ve changed the app formatting a bit too. You can do this in the “_Theme_” section:

![App theme](https://res.cloudinary.com/daog6scxm/image/upload/v1664187614/cms/08_pmz7kh.webp "App theme")

We picked a dark theme and a CSS gradient for the header background. You can add any valid CSS background values in here, including simple colors or complex values, such as gradients and even background images.

Now let’s see how you can spice up your SQL GUI with a single screen that loads multiple tables.

{{< cta >}}

## 3. Custom database connections and queries

If you have a lot of tables to manage, maybe manually creating a CRUD interface for each of them isn’t the best option. It’s possible to create your own interface that loads tables and databases automatically.

For your end users, this might be an easier option, since they can add new tables and databases without editing the app itself.

They just need to add the tables in a settings table. As long as your current DB connection has the right capabilities to access data, you’ll see it automatically.

Now, as for how you can create this dynamic SQL GUI, there are a few important elements:

* **The DB commands** - they depend on your database, so you’ll need a screen for each of your database connections
* **The tables schema** - here we use a mapping method so all tables respond to the same schema. There are other ways of doing this though

The tricky part here is to take a user input (tables options) and add it to your queries dynamically. This is hard because SQL usually doesn’t allow functions or variables in table names.

So you can’t just use a command like _SELECT * FROM {{ table }}_, because this binding is treated like a plain string (wrapped by single quotes).

Check out our guide to [database schemas](https://budibase.com/blog/data/what-is-a-database-schema/) for more information.

Some DBs such as MariaDB have a handy command for this, EXECUTE IMMEDIATE. It allows you to send a SQL command with variables or anything else you need.

If your DB has this command, then you can just use something like this in your queries:

EXECUTE IMMEDIATE ‘CONCAT ( 'SELECT * from ‘, {{ table }} ) ’

But since we are using MySQL we need something else. If you look closely, the EXECUTE IMMEDIATE command is actually just a shorthand for this:

{{< highlight sql "linenos=inline" >}}

PREPARE stmt 
from ‘CONCAT ( 'SELECT * FROM ‘, {{ table }} ) ’;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

{{< /highlight >}}

And this is actually possible with MySQL. You just need access to your DB (using PHPMyAdmin or similar) and you can create a procedure there with something like this:

{{< highlight php "linenos=inline" >}}

BEGIN
SET @q = query;
PREPARE stmt FROM @q;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
END

{{< /highlight >}}

Now you are ready to perform the same actions as you could do with MariaDB, with a slightly different syntax. This is how we do it:

CALL execute_immediate( ‘CONCAT ( 'SELECT * from ‘, {{ table }} ) ’ )

That’s it, you are ready to run any type of command that you need using variables.

Head over to the “_Data”_ section, and let’s create three queries. One to select data, the second to edit/add data, and the last query to delete data.

Here is the setup for the _variable_select_ query:

![Build a SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664187551/cms/09_q1hjlr.webp "Build a SQL GUI")

Then use this SQL command for the fields:

CALL execute_immediate( CONCAT ( 'SELECT ', {{ID}}, ' as "ID", ', {{Title}}, ' as "Title", ', {{Value}}, ' as "Value" FROM ', {{table}} ) )

This command takes the bindings and use them to build the query. Notice how everything is variable, including the table name and the column names, which are mapped to _ID, Title,_ and _Value_.

Also, notice that we are mapping the table columns to standard names, ID, Title, and Value. This allows us to use a single table and a single form to view and edit all of them.

Make sure to use this transformer:

{{< highlight javascript "linenos=inline" >}}

return data[0]

{{< /highlight >}}

By default, when you execute a stored procedure, MySQL returns some extra data that you don’t really need. So you can just read the first value of the data array _(data\[0\])_ to get the query results.

You can run this query and save it.

Next, there’s the insert/edit query.

This time, the entire command is dynamic, given that we use the form fields to create it.

Here is the setup:

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664187521/cms/10_qazb43.webp "SQL GUI")

Lastly, there’s the delete query. Here is the setup for it:  
![Custom SQL Query](https://res.cloudinary.com/daog6scxm/image/upload/v1664187487/cms/11_nqecxa.webp "Custom SQL Query")

Now your queries are ready. Let’s load them up in your screens.

## 4. Load any table from your database

If you want to load your tables dynamically, you need a few data points. Each of these can be pulled with the data provider component in Budibase.

This should be the hierarchy of your data points:

* Load all possible tables (from the Budibase DB app_settings table),
  * Dropdown for the user to pick their desired table,
    * Load the selected table’s mappings (ID, Value from app_settings)
      * Load the table data sending the correct bindings (table name, id, value) to the variable_select MySQL query.

If you want to implement this screen, you just need to follow that structure. This is your final element tree:

![SQL GUI component tree](https://res.cloudinary.com/daog6scxm/image/upload/v1664187459/cms/12_t5vrf3.webp "SQL GUI component tree")

The first component is the main container. This is used to hold all of your other components.

Then there’s the first _App Settings_ Provider. It has no settings, and it just loads data from the _app_settings_ table.

Inside of that provider you’ll add the _Select Table_ form. All form components require a form to be their parent, otherwise they won’t work. This form is there just to make the dropdown work, you don’t need to change its settings.

Next there’s the table options picker. We are using these settings for it:

![Table Picker](https://res.cloudinary.com/daog6scxm/image/upload/v1664187441/cms/13_yhi5b9.webp "Table picker")

When your user picks a new option, your table should change. You can do this by creating an _app state_. This is just a way to store variables temporarily in your app, based on user actions. To do that, use this option for the _OnChange_ action of the button:

![Button Action](https://res.cloudinary.com/daog6scxm/image/upload/v1664187421/cms/14_ld1jtu.webp "Button Action")

In addition, we want that dropdown to automatically select the current table. But when users first load your app there will be no selection. Thus, you can select the default value of that field to be a JS function, like this:

{{< highlight javascript "linenos=inline" >}}

var ret = $("State.selected_table");
if ( ! ret ) {
    ret = "posts";
}
return ret;

{{< /highlight >}}

The next component to implement is the Selected Table Meta, which loads the metadata for the current user selection. It is a data provider just like the first one, loading data from the app_settings table.

The difference is that now we add a filter to it. You can set it to load items with table_name equals _{{ State.selected_table }}_.

Then add a repeater to expose the fields of that data provider. And inside that repeater it’s finally time to load the table data.

As the name suggests, the _Selected Table Data Provider_ loads data for your selected table using the _variable_select_ query. But you need to set the correct bindings to it to make sure it loads the current table’s data and maps it:

![Query bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1664187342/cms/15_bh6qmx.webp "Dynamic filter bindings")

Now you can add a dynamic filter so users can view only what they want from that table.

The next component is the “_add new_” button. It is a simple button that has a “_navigate to_” action when users click on it:![Button Action](https://res.cloudinary.com/daog6scxm/image/upload/v1664187322/cms/16_upu9dp.webp "Button action")

You can add your table inside the selected table data provider, and add a button inside of it to edit rows. Just like the add new button, the edit button simply navigates to another screen. But this time we use the current row as part of our URL:

![SQL GUI screenshot](https://res.cloudinary.com/daog6scxm/image/upload/v1664187298/cms/17_thbhzg.webp "SQL GUI screenshot")

These URLs may look weird, but they are just a method to pass data to Budibase. In short, you are telling it to load the /edit/ screen with the row ID, or with zero, if it’s a new item. Then that screen handles these numbers as a variable.

Let’s see how to do it in the next section.

## 5. Insert, edit, and delete data

Just like the home screen, the edit screen requires some data points to work correctly.

First, you need a URL variable to get which item is being updated. To do that, use _/:id_ in your route. For example, our demo uses _/edit/:id_.

Therefore, if you visit _myapp/edit/130_, then the id variable is set as 130. This works not just for numbers. If your app requires text-based variables, you can use them, for example, _/edit/myitem_. In this case, the id variable is _myitem_.

It’s worth noting here that this will only work if the variable you bind to your URL is unique. We’d normally use _ID_, because this is an automatically generated attribute that’s unique to each individual row.

In terms of data points, this is what you need for the edit screen:

* Item ID (URL),
* Current table (app state),
* Table mappings from app_settings,
  * Add new item form inputs,
  * Data provider to load the default values for the edit mode,
    * Edit item form inputs,
* Item update state (for the success message).

You can copy the following component tree:

![How to Build a SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664187273/cms/18_wjuetf.webp "How to build a sql GUI")

Again, you have a main container to organize all your components.

Then, inside of it there’s the _App Settings Provider_. It loads the _app_settings_ table. This time, we are filtering it by table name equal to this function:

{{< highlight javascript "linenos=inline" >}}

var state=$("State.selected_table");
if ( state ) {
return state
} else {
return "posts"
}

{{< /highlight >}}

This function returns either the currently selected table or the default table, which in our case is _posts_.

The _Add New_ container should only be visible if we are adding a new item. To do this, add a new container and set the conditions to Hide component if _{{ URL.id }}_ Not equals 0. So, if the url is anything other than _/edit/0_, we are editing an item.

Therefore, the _add new_ option shouldn’t be visible.

The _Add New_ form is just a placeholder for the components. This time, the entire action is accessed in the _Add New_ button. You can insert the headline and text fields, then use this set of actions for the button:

1. **Update State** - Set the app state updated_rows to zero (so the success message is hidden).
2. **Execute Quer**y - the variable_update query, with settings for the “insert” mode and using the form values along with the bindings coming from the app_settings.
   1. table = _INSERT INTO {{ State.selected_table }}_
   2. fields = _(\`{{ App Settings Provider.Rows.\[0\].\[Title\] }}\`, \`{{ App Settings Provider.Rows.\[0\].\[Value\] }}\`) VALUES ( "{{ Add New Form.Fields.New Title }}", "{{ Add New Form.Fields.New Value }}" )_
   3. Where = “”
   4. Important: Make sure to set the where as “ “, an empty space, so the default value won’t be used.
3. **Update State** - Set the app state updated_rows to one to display the success message

That’s all you need for the “_add new”_ form. The edit form is quite similar, the main difference is that you have default values for the form items.

Add a “_view row_” data provider. In it, you can load the variable_select query and use the bindings coming from the App Settings Provider:

* table = _{{ App Settings Provider.Rows.\[0\].\[table_name\] }}_
* ID = _{{ App Settings Provider.Rows.\[0\].\[ID\] }}_
* Title = _{{ App Settings Provider.Rows.\[0\].\[Title\] }}_
* Value = _{{ App Settings Provider.Rows.\[0\].\[Value\] }}_

In addition, set the conditions for the data provider to “Hide Component” if _{{ URL.id }}_ Equals zero. Therefore, if we are adding a new item (/edit/0), this entire block is hidden.

Next, add a repeater to expose the data provider fields so they are easier to work with.

Then, add a new button. This is the button to delete items. You can use this Custom CSS:

{{< highlight css "linenos=inline" >}}

position: absolute;
right: 0;

{{< /highlight >}}

Now you can add three actions when that button is clicked:

1. Execute the variable delete - Make sure to require confirmation and use these bindings:
   1. table = _{{ State.selected_table }}_
   2. ID = _{{ App Settings Provider.Rows.\[0\].\[ID\] }}_
   3. IDValue = _{{ New Repeater.variable_select.ID }}_
2. Update State updated_rows to zero, so the next time you load the edit page this message is hidden.
3. Navigate to _/home_.

Then, you can add a headline with the value _{{ New Repeater.variable_select.Title }}_

This is the same value that you’ll use in the default value for the title text input. For the value text input, you can use _{{ New Repeater.variable_select.Value }}_.

Like the previous form, the update form is just a placeholder. The actions are in the update button. The logic for this button is quite similar to the previous one. Here are the actions you’ll run:

1. Update State updated_rows = 0
2. Execute Query _variable_update_:
   1. table = _UPDATE {{ State.selected_table }}_
   2. fields = _SET {{ App Settings Provider.Rows.\[0\].\[Title\] }}="{{ Update Form.Fields.Title }}", {{ App Settings Provider.Rows.\[0\].\[Value\] }}="{{ Update Form.Fields.Value }}"_
   3. where = _WHERE {{ App Settings Provider.Rows.\[0\].\[ID\] }}={{ New Repeater.variable_select.ID }}_
3. Update State _updated_rows_ = 1

That’s it, your form is ready to edit items.

The finishing touch is a message to let users know that the add new / update action worked. You can add a container and set its conditions to Show component if _{{ State.updated_rows }}_ Equals to 1.

You can add a green border around it, and a headline component with your update message.

{{< cta >}}

## How to build a SQL GUI

We’ve only scratched the surface of what is possible with SQL GUI development, we hope you are now inspired to create your own.

In this article, we have explored many different techniques, such as autogenerated screens, dynamic queries, different data loading methods.

Only the sky is the limit when it comes to what you can do following the 5 steps from this tutorial.

We hope you’ve enjoyed, and see you again next time!

Check out our guide to building [database GUIs](/blog/tutorials/database-gui).

To see more of what Budibase can do, why not check out our 50+ free, deployable [app templates](https://budibase.com/templates).