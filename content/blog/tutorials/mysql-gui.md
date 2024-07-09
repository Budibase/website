+++
author = "Ronan McQuillan"
date = 2024-03-20T23:00:00Z
description = "Read our step-by-step guide to learn how to build a MySQL GUI, in minutes."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1664899844/cms/How_to_Build_a_MySQL_GUI_yvx10e.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1664899852/cms/How_to_Build_a_MySQL_GUI_zefmyr.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Create a MySQL GUI in 5 Steps"

+++
MySQL is one of the most popular database systems out there. And that’s for a good reason. It is lightweight, fast, easy to learn, and widely available. Using a MySQL GUI to manage your databases will help you make the most out of this tool.

A GUI (Graphical User Interface) allows you to interact with your database with a visual interface. This allows you to see your data and use visual elements as opposed to text-based terminals and command lines.

Naturally, this is crucial if you want your non-technical team to manage data.

It can be hard to pick the right MySQL GUI tool though.

There are many options to choose from - many price ranges, features, and operating systems. However, it’s not hard to build a free tool that can do anything you want, and work on any devices you want to, including mobiles.

You can build your own MySQL GUI in just 5 steps.

The craziest part is that if you just need a simple CRUD tool, you can do it in just 2 steps, as we’ll see in a few minutes.

Therefore, today we are going to explore how you can build a free MySQL web interface using Budibase. You are going to learn how to:

* Create an app and connect to a database server.
* Auto-generate CRUD screens.
* Dynamically load all tables in your database to import and export data.
* Dynamically load all columns from a database table.
* Create flexible forms that can edit and insert data into any table or database schema.
* Create flexible tables to display data from any query.
* Create multi-step forms for a query builder, to generate custom queries based on user inputs.
* Deploy a fully working management tool with custom database connections.

Let’s get started!

## Does MySQL have a GUI?

MySQL is a database system. It doesn’t have an official GUI, but there are many app options to connect to it. There are free and open source apps, as well as paid options.

In addition, you can build your own MySQL GUI using the tips from this 5-step guide, leveraging Budibase as a MySQL frontend builder.

## What is the best GUI for MySQL?

The right MySQL GUI depends on your use case and requirements. You can build your own MySQL GUI following this guide or you can use one of these great tools listed here:

* Adminer
* BeeKeeper Studio
* Database Workbench
* DataGrip
* DBeaver
* DBEdit
* dbForge Studio for MySQL
* DronaHQ
* HeidiSQL
* LibreOffice Base
* mySQL Workbench
* Navicat for MySQL
* OpenOffice.org Base
* phpMyAdmin
* SQLBuddy
* SQLyog
* Toad Edge for MySQL
* Webmin

It's important to research which features you need from specific tools - for instance, cross-platform integrations or auto completion. Often, custom builds are the most cost-effective option to meet bespoke requirements.

You might also like our guide to building a [Postgres GUI](/blog/tutorials/postgres-gui).

## What is GUI in MySQL?

A MySQL GUI allows you to interact with your data visually. Thus, you can filter, add, update, and delete data without using SQL commands.

But a lot of these tools allow you to add your own commands as well since you’ll often need to perform custom queries.

This allows you to get the better of the two worlds. You can quickly perform actions using premade functions if you want. But you can run your own commands if you need to run a specific query as well.

In this tutorial, you are going to create a MySQL UI that looks like this:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664899937/cms/01_g2wkjm.webp "MySQL GUI")

The first screen allows you to pick one of the tables from your database, select the columns you want to show, and display the table data. If you click on the _edit_ or _add new_ button, you are going to see a form like this one:

![Edit Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1664899959/cms/02_sewsdx.webp "Edit Screen")

This form is the same for the _add new_ or _update_ actions. There are some differences internally and the _delete_ button is removed if you are adding new items.

In addition to the home screen, you can see your data with a custom query, like this:

![Custom MySQL Query](https://res.cloudinary.com/daog6scxm/image/upload/v1664899984/cms/03_xmn84w.webp "Custom Query")

This screen allows three methods to interact with your MySQL database. You can manually type your desired query, save and retrieve queries, or use the query builder, which is a three-step form to build custom queries based on your form selection.

Once you run your query, you’ll see your data in a table.

Next, there’s the auto-generated CRUD interface for saved queries:

![Saved Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1664900004/cms/04_m3nhai.webp "Saved Queries")

On this screen you can see, edit, insert and delete saved queries \- for on-the-fly data modeling.  These are the queries available in the custom query builder.

Let’s see how you can create this app.

## Step 1 - Create an app and connect to a MySQL database

If you haven’t already, sign up for Budibase. You can create free apps right away.

{{< cta >}}

After you’ve created your app, connect to your MySQL database as a [data source](https://budibase.com/blog/data/data-sources/). Don’t forget to [whitelist the Budibase servers](https://docs.budibase.com/docs/whitelisting) in your MySQL server \- or ask your database administrator to do so.

Our demo data has three tables:

* **Saved queries** - A table using the Budibase DB to store the saved queries in the custom query screen
* **Posts** - A demo table with posts for a blog, with id, title, content, date
* **Settings** - A demo table with settings for a blog, with id, settings_key, and value

To make our life easier, we are going to use MySQL procedures. They allow us to execute custom functions in a regular query.

For example, if you have a store, you can create a custom function that automatically propagates data to the sales, customers, and inventory tables.

In our example, we are going to implement a procedure to run SQL commands programmatically. With it, we can pass table names as variables and we can run flexible queries for the custom queries page.

You can use SQL statements to create a procedure for that in your MySQL using this code:

{{< highlight php "linenos=inline" >}}

BEGIN
SET @q = query;
PREPARE stmt FROM @q;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
END

{{< /highlight >}}

We create this procedure with the name execute_immediate. Budibase offers a dedicated SQL editor with syntax highlighting as a key feature of our query builder.

Then in the data tab for Budibase, you can create these queries:

* Execute
  * Public
  * Bindings:
    * Command - Default: SELECT * from posts
  * Fields:
    * CALL execute_immediate( {{command}} )
  * Data:
    * return data\[0\]
* Show_tables
  * Public
  * Fields:
    * SHOW TABLES
* Table_columns
  * Public
  * Bindings:
    * Tablename - Default: posts
  * Fields:
    * SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = {{ tablename }}

That’s it!

Now let’s create your first screen.

## Step 2 - CRUD interface for a quick MySQL GUI

Head over to the design tab. Then, you can stop by the “theme” section and pick a different theme, such as the dark one. In addition, you can pick some other design options for your app such as the accent color and hover color.

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900046/cms/05_c0susq.webp "MySQL GUI")

Then, click on the Screens option, and add a new screen. Select autogenerated screens and pick the Saved_queries table.

This should generate new screens that you can use to perform CRUD actions to your Saved_queries table. If you just want a simple MySQL GUI you could just use this method to auto-generate screens for each of your tables.

But if you have a lot of tables, you can generate flexible interfaces. This allows you to automatically have new tables available to edit without editing your app.

Let’s see how you can implement this.

## Step 3 - Custom MySQL GUI to view data

Create a new screen to be your home screen. You can check the “set as home screen” box in the builder:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900074/cms/06_kstacw.webp "MySQL GUI")

There are quite a few things going on to make this screen work.

First, there’s the table selector. This is a data provider that loads the show_tables query. Thus, when you add new tables to your MySQL database, they are listed there automatically.

Then there’s the table columns picker. It’s populated by a data provider that gets the table columns from the currently selected table. It runs the table_columns query with a binding for the table.

Finally, there’s a data provider that executes a query based on the table selected and columns. This data provider populates a repeater that displays your table data.

This is the elements tree to implement that page in your MySQL GUI:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1664900099/cms/07_hkrt2p.webp "Component Tree")

Now you just need to replicate that logic. The list DB tables is a data provider for the show_tables query.

Then you need a form to hold the options picker for the table you want to load.

The tables picker is an options picker. You can display the tables as options by using the list DB tables provider as an options source:

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1664900118/cms/08_ympwv3.webp "Options")

Then the _table columns_ data provider has these binding options:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900137/cms/09_gl1ll4.webp "MySQL GUI")

This means that whenever you select a table, a new value is sent to the table columns query.

Inside of it, the _columns picker_ is an options picker component, just like the _tables selector_. But with a checkbox mode:

![Checkboxes](https://res.cloudinary.com/daog6scxm/image/upload/v1664900154/cms/10_ezccjx.webp "Checkboxes")

The paragraph to preview the current query has the following JS code to output its text:

![Custom JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1664900172/cms/11_womzwo.webp "Custom JavaScript")

The add new button and the edit buttons are quite similar.

They are going to redirect your users to the _/{{ tablename }}/{{ id }}_ page. So if you click to edit an item from the posts table with id as 3, you are redirected to the /posts/3 page. And to create new items you are redirected to /posts/0, for example.

You can implement this with this _onclick_ action on your button:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900201/cms/12_jhyr2n.webp "MySQL")

The table data provider runs the execute query. You are going to use this binding (as JS code) in it:

{{< highlight javascript "linenos=inline" >}}

var table = $("Select Table.Value.tablename");
var columns = $("Select Table.Value.columns");
if ( !columns || columns.length === 0 ) {
columns = '*';
}
var ret = "";
ret = "SELECT " + columns + " FROM " + table;
return ret;

{{< /highlight >}}

You could use a table to output your query results, and that’s a great way to do with when you have a fixed schema. Since our goal here is to build flexible queries, we need to create our own display for it.

In this case, you can do it with a repeater, then output whatever data you have in it using cards.

A repeater component outputs any of its child elements once per row of the data provider. Thus, if you have 10 posts, the repeater is going to run 10 times.

In the demo screen, the repeater contains a paragraph and a button. The paragraph has some JS code to display all the row contents, like this:

{{< highlight javascript "linenos=inline" >}}

var row = $("Repeater.Row Index");
row = $("Table Data.Rows")[row];
var ret = "";
Object.entries(row).forEach(([key, val]) => {
ret += key + ":\n";
ret += JSON.stringify(val, null, "\t");
ret += "\n\n";
});
return ret

{{< /highlight >}}

And the edit button follows the same logic as the add new button. This time you can use this path though:

/edit/{{ Select Table.Value.tablename }}/{{ Repeater.execute.id }}

Now, what happens when you click the _add new_ or _edit_ buttons? Let’s see the logic behind them in the next step.

## Step 4 - Edit MySQL data with flexible forms

Create a new screen, and in its route use /edit/:table/:id. This is how you tell Budibase to create app variables based on the current URL.

Thus, when a user visits /edit/posts/3, your app has 2 variables at your disposal:

* {{ URL.table }} = posts
* {{ URL.id }} = 3

With this data, you can create flexible edit forms in your MySQL GUI.

The entire form relies on the fact that new items have ID = 0, and updates have a valid number. With this information, the form understands if you are adding new items or editing them.

This is the elements tree for that page:

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1664900255/cms/13_qpcljq.webp "Component Tree")

The first data provider is the _Get Item_. In it, you run the execute query with this JS binding:

{{< highlight javascript "linenos=inline" >}}

var ret = ""
if ( $("URL.table") && $("URL.id") != 0 ) {
ret = "SELECT * FROM " + $("URL.table")" 

WHERE id=" + $("URL.id");
} else {
ret = "SELECT 0 as 'id'";
}
return ret;

{{< /highlight >}}

Here you are basically either loading a valid item (if ID > 0) or loading a dummy item (Select 0 as ‘id’). This dummy item is very important. If you don’t add it like this, you will need 2 forms, since this entire component is hidden - given that the main query has no results.

Then you can add a repeater, as usual.

Inside it, there’s the _delete button_, a headline, and the _update form_.

The delete button is quite simple. It’s a button with these display conditions:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900293/cms/14_n70bjy.webp "MySQL GUI")

So it only shows when you are editing an item. In addition, this button executes three actions when you click on it:

1. Execute a query:
   1. Query name: Execute
   2. Require confirmation: yes
   3. Bindings: DELETE FROM {{ URL.table }} WHERE id={{ URL.id }}
2. Update state:
   1. Updated_rows = 0
3. Navigate to:
   1. /home

In other words, it deletes the current item, deletes the udpated_rows state, and goes to the homepage.

The headline relies on the URL.id to define what text to show. You can use this JS code in it:

{{< highlight javascript "linenos=inline" >}}

if ( $("URL.id") == 0 ) {
return "Add new";
} else {
return "Edit item";
}

{{< /highlight >}}

Then, the update form has a data provider in it. This data provider loads the table_columns query, using the {{ URL.table }} binding.

Next, you are creating a field for each of these columns. As you saw before, you can create this kind of loop using a repeater.

You can create a text field, and use these options:

* Field: {{ Column.table_columns.COLUMN_NAME }}
* Label: {{ Column.table_columns.COLUMN_NAME }}
* Placeholder (JS code):
  * return JSON.stringify($("Get item.Rows")\[$("Repeater.Row Index")\]\[$("Column.table_columns.COLUMN_NAME")\])
* Default value (JS code):
  * return $("Get item.Rows")\[$("Repeater.Row Index")\]\[$("Column.table_columns.COLUMN_NAME")\]

These values create a unique field for each column, and load default data when it exists.

If you want you can hide the ID column by using configuring conditions of the text field as _hide component_ if {{ Column.Row Index }} equals to 0.

The entire action of this form is stored on the update button. You can begin by using this JS code in the text field for it:

{{< highlight javascript "linenos=inline" >}}

if ( $("URL.id") == 0 ) {
return "Add new";
} else {
return "Update";
}

{{< /highlight >}}

With this code your button is going to switch between “add new” and “update”, depending on the item ID.

Next, you can use 3 actions for this button:

Update state:

* Updated_rows = 0

Execute query:

- Query name: execute

Binding (JS):

{{< highlight javascript "linenos=inline" >}}

var id = $("URL.id");
var ret = "";
var table = $("URL.table");
var formData = $("Update Form.Value");
delete formData.id;
if ( id == 0 ) {
var keys = Object.getOwnPropertyNames(formData);
var values = Object.values(formData);
ret = "INSERT INTO " + table +
" ( " + keys.join() + ' )
VALUES ( "' + values.join('","') + '" )' ;
} else {
ret = "UPDATE " + table + " SET ";
Object.entries(formData).forEach(([key, val]) => {
ret += " " + key + "='" + val + "',";
});
ret = ret.slice(0, -1);
ret += " WHERE id=" + id;
}
return ret;

{{< /highlight >}}

Update State:

* Updated_rows = 1

This JS code checks if it’s an update or insert action and generates the current SQL command for it.

Finally, you can use the updated_rows app state to display a message in case the data-saving actions work. You can do it by creating a container and then using the display condition as _show if_ {{ State.updated_rows }} equals to 1.

## Step 5 - Use custom queries in your MySQL GUI

Let’s create a screen to run your own queries, whenever you want to.

### How it works

You can use three methods to get data into the tables for the custom queries page:

1. Use the text box.
2. Use the query builder to generate a SQL command (that is put in the text box).
3. Use the dropdown to select one of the saved queries.

So, this is really a two-part logic. First, you need to find a way to execute the commands and display them in a table. And next, you need to find a way to create the query builder to generate some SQL code.

Let’s dive into it.

### Implement the custom query page

The custom query page has this tree structure:

![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1664900499/cms/15_brryta.webp "Components")

This is very similar to the home page in the sense that there’s a flexible query, and then you need to output your data somehow. On the homepage, you are using a cards-style layout. On this page it’s a bit different though.

Notice the markdown viewer. That’s where the magic happens.

With it you can create tables, even if you don’t really know the data structure beforehand.

That’s because in markup code if you type something like this:

{{< highlight md "linenos=inline" >}}

|First column | Second column |

|---|---|

|Row one|Row one, second cell|

|Last row|Last row, last cell|

{{< /highlight >}}

It turns into a table with a heading (first column, second column), 2 rows with 2 cells in each.

In addition, you can use more markup code for advanced styling or even links.

But before we get into that, let’s see how your query is generated.

There’s a form with a data provider in it. This data provider uses the execute query with a binding for {{ State.query }}.

This means that whenever you want to run a new query, you just need to edit the app state “query”.

And that’s what both of the “run query” buttons do, each saving their own fields (text field or select) into the query app state.

The query builder button just navigates to _/query-builder_.

The save query button has an action to save a row to the saved_queries table, using the {{ Select Table.Fields._sql }} as the query command to be saved.

The markdown viewer runs this JS code in its text:

{{< highlight javascript "linenos=inline" >}}

//get the table rows
var rows = $("Table Data.Rows");

//start the table markup syntax
var ret = "";

//create a variable to store headers
var header = "|";

//create a variable for the divisor 
//between the head and body
var div = "|";

//loop each row
Object.entries(rows).forEach(([row, content]) => {

//start a row in markup
ret += "|";

//loop each row's content as a table cell
Object.entries(content).forEach(([key, val]) => {

//if it's the first row,
//create the header and divisor
if ( row == "0" ) {
header += key + "|";
div += "---|";
}

//add the cell contents
ret += val;
// if you might have objects as the value, 
//you can use stringify to return them as text

// ret += JSON.stringify(val, null, "\t");
//end the current cell (or the row on the last item)
ret += "|";
});

//line break to start a new row
ret += "\n";
});

//bring it all together
ret = header + "\n" + div + "\n" + ret;
return ret;

{{< /highlight >}}

In short, this is what this code does:

1. Gets the table data rows.
2. Initializes variables to save the table body, header and divisor.
3. Loops through each row.
4. Adds a row start character.
5. Loops through each cell, adding the contents to the table body, and if it’s the first row, adds the header, and divisor to their variables.
6. Merge headers, divisor, and table body into a single variable.
7. Return this variable.

If you wanted to add an “edit” column, for example, you would just need to add the markup code for it above.

The only downside of this approach is that the markup table is not full width out of the box. You can fix this by adding an embed element, then use this code in it:

{{< highlight css "linenos=inline" >}}

<style type="text/css">
.markdown-viewer table {
width: 100%;
}
</style>

{{< /highlight >}}

### Create the query builder screen

The query builder screen is actually a three-step form.

Many of the components of this screen are present on the other screens, but it’s nice to see them in action with a different purpose.

This is the element tree for that screen:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900618/cms/16_bcz9ba.webp "MySQL GUI")

And also:

![MySQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1664900636/cms/17_c5n9zh.webp "MySQL GUI")

When you add form steps to a form, you can use buttons to navigate between them. That’s what we do here, with the previous and next buttons.

In the first step, things are quite simple. You just need to add an options picker with custom options for either _selec_t or _insert_.

You can add more options later if you want (such as update, delete, joins), but let’s do it this way for this example.

Use a button with the action “_Change form step_” set to next step.

Then, on step 2, you can use the same table picker that you created on the homepage.

Add the previous and next buttons, again using “the change form step” actions.

The third and final step is a bit more complex. In it, there are two different cases.

If you are using a “select” action, then you use the columns picker, the same way you did on the homepage.

There’s a paragraph on that page as well to preview the SQL query. For the select action this is the JS code for it:

{{< highlight javascript "linenos=inline" >}}

var table = $("Build Query.Fields.tablename");
var columns = $("Build Query.Fields.columns");
if ( ! table ) {
table = "posts";
}
if ( columns.length == 0 ) {
columns = "*";
}
var ret = "";
ret = "SQL Query: SELECT " + columns + " 
FROM " + table;
return ret;

{{< /highlight >}}

Then, you can use something very similar on the “save” button. In it, you can use 2 actions:

- Save app state: Query_builder

- JS code:

{{< highlight javascript "linenos=inline" >}}

var table = $("Build Query.Fields.tablename");
var columns = $("Build Query.Fields.columns");
if ( ! table ) {
table = "posts";
}
if ( columns.length == 0 ) {
columns = "*";
}
var ret = "";
ret = "SELECT " + columns + " FROM " + table;
return ret;

{{< /highlight >}}

* Navigate to:
  * /custom-query

The select options container has a display condition to be visible if {{ Build Query.Fields.query_type }} is select.

Likewise, the Insert container is set to be visible if {{ Build Query.Fields.query_type }} is insert.

About the insert form, it allows you to add the form field values. It works just like the edit form. In it, you get the table columns and use a repeater to generate your form fields.

The save button for the insert action has the same two actions as the button for the select action. The main difference is that the insert button has this JS code:

{{< highlight javascript "linenos=inline" >}}

var ret = "";
var table = $("Build Query.Fields.tablename");
var formData = $("InsertFields.Value");
delete formData.id;
if ( ! table ) {
table = "posts";
}
var keys = Object.getOwnPropertyNames(formData);
var values = Object.values(formData);
ret = "INSERT INTO " + table + " 
( " + keys.join() + ' ) VALUES 
( "' + values.join('","') + '" )' ;
return ret;

{{< /highlight >}}

That’s all you need for the query builder. Once it’s saved it generates a query and saves it. Just make sure to use the {{ State.query_builder }} as the default state for the main text field in the custom query page. Thus, where there is a custom query, the text field is pre-populated.

{{< cta >}}

## Build a MySQL GUI with Budibase

Today you learned how you can build a MySQL GUI in just 5 steps. In addition, you saw how you can build apps to interact with databases in many different ways. From a simple autogenerated CRUD interface to complex forms and lists to insert and read data coming from multiple tables.

You might also like to check out our ultimate guide to building [database GUIs](https://budibase.com/blog/tutorials/database-gui/).

We hope you’ve enjoyed it, and see you again next time!