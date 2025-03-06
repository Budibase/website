+++
author = "Ronan McQuillan"
date = 2024-05-17
description = "Learn how to build a custom SQLite GUI in Budibase for free."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a SQLite GUI in 5 Steps"
+++

SQLite is the most widely deployed database in the world. However, it works slightly differently than other relational database engines, such as MySQL or Postgres.

The key characteristic here is that SQLite databases are stored in a single file. This means that it’s a highly lightweight, portable solution that can be easily embedded into end-user applications.

Today, we’re exploring how Budibase can be used to build a simple GUI for writing, testing, and saving SQLite queries.

By the end, we’ll have a fully functional solution that you can customize to your exact requirements using our open-source, low-code platform.

Let’s jump right in.

## Why would we want to build a SQLite GUI?

A GUI is a visual tool that enables users to interact with a database. The idea is to provide a streamlined experience for writing queries, including saving reusable commands and their responses.

Typically, SQLite is managed with CLI tools. Several off-the-shelf GUIs and admin panels also offer support for SQLite. 

However, these are generally inflexible, dated, and sporadically maintained. This can make working with data in SQLite unnecessarily laborious.

By contrast, when we build a custom solution, we have complete control over its design and functionality, meaning we can tailor each to the specific needs of our project.

We’ll also have the power to maintain this how we want, including making any changes to our GUI when we need them - rather than waiting around for an off-the-shelf vendor to update their product.

## What are we building?

We’re building a simple GUI that will empower users to do three things:

- Write, test, send, and save queries to their SQLite database.
- View the history of queries that have been sent using our GUI.
- Resend and update saved queries.

SQLite is most commonly locally stored and used as an embedded database within application projects. However, today, we’re using a cloud-based database tool called [Turso](https://turso.tech). This includes a range of developer tools, including a platform API for interacting with our SQLite data.

However, we could just as easily use any other version of SQLite that offers a RESTful API.

Once we’ve set up our API request for querying our database, we’ll be using Budibase’s intuitive, low-code design tools to build interfaces for interacting with our data.

You might also like our guide on building a [MariaDB GUI](https://budibase.com/blog/tutorials/mariadb-gui/).

Here’s what our SQLite GUI will look like when we’re finished.

{{< vimeo id="947417166" title="SQLite GUI" >}}

## How to build a SQLite GUI in 5 steps

If you haven’t already, sign up for a free Budibase account to start building as many apps as you want.

{{< cta >}}

The first thing we’ll do is create a new Budibase application. We have the option of starting with a template or importing an existing app dump, but today, we’re going to start from scratch.

When we choose this option, we’re prompted to give our app a name and a URL extension. We’ll call ours SQLite GUI.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954437/cms/sqlite-gui/SQLite_GUI_1_yqrbci.webp "SQLite GUI")

## 1. Setting up our API request

Once we’ve created our app, we’ll be offered several choices for which kind of data we’d like to connect to. Budibase offers a range of dedicated connectors for relational databases, NoSQL tools, APIs, Google Sheets, and more alongside our internal database.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1715954437/cms/sqlite-gui/SQLite_GUI_2_ewflwv.webp "Data Sources")

We’ll actually be using two separate data sources in our app. The first will be an API request that allows us to send queries to our database and receive responses. The second will use our internal database to store and manage saved queries and our GUI’s history.

So, we’ll start by choosing the option for REST API.

Here’s what we’ll see.

![REST Requests](https://res.cloudinary.com/daog6scxm/image/upload/v1715954436/cms/sqlite-gui/SQLite_GUI_3_ibylht.webp "REST requests")

The first thing we’ll do is rename our API connection to something that will be a bit easier to recognize in the Budibase builder later on.

![REST Request](https://res.cloudinary.com/daog6scxm/image/upload/v1715954434/cms/sqlite-gui/SQLite_GUI_4_ibixit.webp "REST Request")

Next, we’ll hit Create New Query. This brings us to the following screen.

![Request](https://res.cloudinary.com/daog6scxm/image/upload/v1715954434/cms/sqlite-gui/SQLite_GUI_5_k5u4ss.webp "Request")

Here, we can give our API request a name, choose a method, and input our endpoint. We’re calling our request Custom Query. We’ve also selected the POST method and pasted in the API endpoint for our database.

![Custom Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715954434/cms/sqlite-gui/SQLite_GUI_6_yvfhfc.webp "Custom Query")

We’ll also add an [API Header](https://budibase.com/blog/inside-it/api-headers/) to authenticate our request with our unique Authorization token.

![Header](https://res.cloudinary.com/daog6scxm/image/upload/v1715954433/cms/sqlite-gui/SQLite_GUI_7_tysh57.webp "Header")

We need to populate a body for our API request to tell it what SQL command to execute. We’ll do this by adding a JSON object under the Body tab in our request builder.

The specific piece of JSON we’re going to use is structured like this:

{{< highlight javascript "linenos=inline" >}}

{

 "requests": [

  { "type": "execute", "stmt": { "sql": "SELECT * FROM users;" } },

  { "type": "close" }

 ]

}

{{< /highlight >}}

Essentially, we’re telling our database to execute a statement that we’re providing in SQL syntax. Then we provide the statement and close the request.

Here’s how this looks when we add it to our request body and hit send.

![JSON](https://res.cloudinary.com/daog6scxm/image/upload/v1715954434/cms/sqlite-gui/SQLite_GUI_8_fb6b4l.webp "JSON")

We’ll look at the response in a little more detail in a second, but for now, all that matters is that our query was successfully executed in the database.

### Adding bindings

Currently, our request works, but it only sends a static SELECT statement. We want to populate our SQLite query dynamically using the information provided by users in the UIs we’ll be building a little later.

To do this, we’ll head to the Bindings tab. Here, we can specify a name and default value for our binding. The name is used to reference it within the body of our request. We can then overwrite the default value each time our request is initiated.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715954434/cms/sqlite-gui/SQLite_GUI_9_nmpinu.webp "Response")

We’ll call our binding ‘query’ and set the default value to ‘SELECT * FROM dummy_table;’.

![Binding](https://res.cloudinary.com/daog6scxm/image/upload/v1715954433/cms/sqlite-gui/SQLite_GUI_10_ensmv0.webp "Binding")

We can then replace the static query in our JSON body with our binding, using {{ query }}. So, our new JSON object is:

{{< highlight javascript "linenos=inline" >}}

{

 "requests": [

  { "type": "execute", "stmt": { "sql": "{{ query }}" } },

  { "type": "close" }

 ]

}

{{< /highlight >}}

![binding](https://res.cloudinary.com/daog6scxm/image/upload/v1715954433/cms/sqlite-gui/SQLite_GUI_11_drzsgj.webp "binding")

### Transforming our result

Currently, our response looks like this:

{{< highlight javascript "linenos=inline" >}}

{

 "baton": null,

 "base_url": null,

 "results": [

  {

   "type": "ok",

   "response": {

​    "type": "execute",

​    "result": {

​     "cols": [

​      {

​       "name": "id",

​       "decltype": "INTEGER"

​      },

​      {

​       "name": "name",

​       "decltype": "TEXT"

​      },

​      {

​       "name": "age",

​       "decltype": "INTEGER"

​      }

​     ],

​     "rows": [

​      [

​       {

​        "type": "integer",

​        "value": "1"

​       },

​       {

​        "type": "text",

​        "value": "Alice"

​       },

​       {

​        "type": "integer",

​        "value": "30"

​       }

​      ],

...

{{< /highlight >}}

This is the right data, but it isn’t very readable. The problem is that the columns and rows are displayed as separate objects. 

We want to display each entry in our database table as a separate object, including all of its attributes and their values as distinct key/value pairs.

To do this, we can write a JavaScript transformer based on our request’s response. So, head to the Transformer. Here, we can see that, at present, we’re simply returning an object called data.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715954431/cms/sqlite-gui/SQLite_GUI_12_znucm6.webp "Response")

We’re going to add the following JavaScript to create separate objects for each of our database entries and then nest these within another object with other relevant information from our response.

{{< highlight javascript "linenos=inline" >}}

// Extract cols and rows from data

const cols = data.results[0].response.result.cols.map(col => col.name);

const rows = [];

data.results[0].response.result.rows.forEach(row => {

 const obj = {};

 row.forEach((cell, index) => {

  obj[cols[index]] = cell.value;

 });

 rows.push(obj);

});

// Include other results in the final object

const finalObject = {

 type: data.results[0].type,

​	responseType: data.results[0].response.type,

​	rows: rows,

​	affectedRowCount: data.results[0].response.result.affected_row_count,

​	lastInsertRowId: data.results[0].response.result.last_insert_rowid,

​	replicationIndex: data.results[0].response.result.replication_index,

​	rowsRead: data.results[0].response.result.rows_read,

​	rowsWritten: data.results[0].response.result.rows_written,

​	queryDuration: data.results[0].response.result.query_duration_ms

​	

};

// Return the final object

return finalObject

{{< /highlight >}}

![Transformer](https://res.cloudinary.com/daog6scxm/image/upload/v1715954430/cms/sqlite-gui/SQLite_GUI_13_k1wvyq.webp "Transformer")

Here’s what our request returns now:

{{< highlight javascript "linenos=inline" >}}

{

 "type": "ok",

 "responseType": "execute",

 "rows": [

  {

   "id": "1",

   "name": "Alice",

   "age": "30"

  },

...

 {{< /highlight >}}

Not only is this much more human-readable, but it also means we can map our rows object to a table in our front end later if we want to.

When you’re happy, hit save, and that’s our SQLite connection ready to go.

## 2. Adding internal tables

As we said earlier, we also want to allow users to save queries and view previous commands sent from our SQLite GUI.

To do this, we’ll need somewhere to store the required information. We’re going to use two tables in Budibase’s built-in database.

We’ll start by hitting the plus icon to add a second data source.

![Add Data Source](https://res.cloudinary.com/daog6scxm/image/upload/v1715954430/cms/sqlite-gui/SQLite_GUI_14_ck3tbb.webp "Add Data Source")

This time, we’ll choose the option to create a new table in BudibaseDB.

![Add Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715954430/cms/sqlite-gui/SQLite_GUI_15_m9mfls.webp "Add Table")

We’ll call this queries.

![Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1715954429/cms/sqlite-gui/SQLite_GUI_16_ulres5.webp "Queries")

Here’s our empty table. We can use the plus icon to start adding columns.

![Blank Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715954429/cms/sqlite-gui/SQLite_GUI_17_pw6wec.webp "Blank Table")

First, we’ll add a Text field and call it name. We’ve also set this to required.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954429/cms/sqlite-gui/SQLite_GUI_18_oiyyoa.webp "SQLite GUI")

Then, we’ll add a Long-Form Text field called query and a JSON field called response.

![Database Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715954430/cms/sqlite-gui/SQLite_GUI_19_dncwzs.webp "Database Table")

We’ll repeat this process to create a second table called history. This will have columns with the following names and data types:

- date_time: Date,
- query: Long-Form Text,
- response: JSON.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715954429/cms/sqlite-gui/SQLite_GUI_20_rbnfch.webp "Table")

## 2. Building a query editor

Now, we’re ready to start building our SQLite GUI screens. Head over to the Design tab in the Budibase builder, and we’ll be offered several options for creating our first screen. We can use an autogenerated layout or start from scratch.

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1715954425/cms/sqlite-gui/SQLite_GUI_21_naardf.webp "Layouts")

For now, we’re opting for a blank screen. When we choose this option, we’re prompted to give our new screen a URL extension. We’re simply using a single trailing slash.

![Trailing Slash](https://res.cloudinary.com/daog6scxm/image/upload/v1715954425/cms/sqlite-gui/SQLite_GUI_22_nhjxwu.webp "Trailing Slash")

We can then set a minimum role for accessing this screen. We’re going to leave this set to the default option of Basic.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1715954425/cms/sqlite-gui/SQLite_GUI_23_jdtf38.webp "RBAC")

Here’s our blank screen.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1715954425/cms/sqlite-gui/SQLite_GUI_24_ixxbxv.webp "Blank Screen")

We’re going to base our query editor around a simple form where users can write, send, and save queries. Each time a request is made to our API, we’ll open a side panel showing the response.

So, we’ll start by adding a component called a Form Block. This outputs a working form UI based on whichever internal or SQL data table we point it at.

By default, this is a form for creating rows on our queries table, which is what we want to start with.

![Form UI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_25_yzzh7t.webp "Form UI")

Before we configure this to initiate our API request, we'll make a few design tweaks. First, we’ll add a heading. We’ll also deselect the response field and update the display texts so that the remaining fields are more human-readable.

![Form Design](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_26_olxroa.webp "Form Design")

Then, under Style, we’ll set our Size to Large and our Button Position to Top.

![Style](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_27_dfvilt.webp "Style")

### Executing and saving queries

Before we proceed, we need to access the underlying components that make up our Form Block, so we’ll hit the Eject Block.

![Eject](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_28_oozcqf.webp "Eject")

Here’s what our component tree looks like now.

![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_29_hrnmjw.webp "Components")

The next thing we’re going to do is configure what happens when a user hits save.

We’ll start by opening the actions drawer for our button.

![ACtions](https://res.cloudinary.com/daog6scxm/image/upload/v1715954424/cms/sqlite-gui/SQLite_GUI_30_fyvrjk.webp "ACtions")

Here, we can see the default actions that are assigned to this when we create a From Block.

We’re keeping the Validate Form and Save Row actions. We can delete everything else with the X icon.

![Delete](https://res.cloudinary.com/daog6scxm/image/upload/v1715954416/cms/sqlite-gui/SQLite_GUI_31_tzufmi.webp "Delete")

Then, we’ll place an Execute Query action between Validate Form and Save Row. We’ll set this to the REST request we wrote earlier.

![Execute Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715954405/cms/sqlite-gui/SQLite_GUI_32_tgups3.webp "Execute Query")

At the bottom left, we can hit the lightning bolt icon to open the bindings drawer for our query binding. We want to bind our query to the user input from the query field on our form. However, we’re going to add a little bit of code to this to clean out any special characters for linebreaks.

We’re going to reuse the same code a few times in our app so we can create a reusable JavaScript snippet. This allows us to define a function and pass user inputs to this as arguments elsewhere in the Budibase builder.

Within this, we’ll select JavaScript, then hit Create Snippet.

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1715954405/cms/sqlite-gui/SQLite_GUI_33_rjplsj.webp "JavaScript")

We want to remove any line breaks with a snippet that we’ll call cleanQuery. The code we’ll use is:

{{< highlight javascript "linenos=inline" >}}

return function cleanQuery(myString){

 let str = myString;

let cleanedStr = str.replace(/\n/g, ' ');

return cleanedStr;

} 

{{< /highlight >}}

![Snippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715954405/cms/sqlite-gui/SQLite_GUI_34_huexr0.webp "Snippet")

We’ll then call this in our binding with the form input as our argument, using:

{{< highlight javascript "linenos=inline" >}}

return snippets.cleanQuery($("Form.Fields.query"))

{{< /highlight >}}

![Binding](https://res.cloudinary.com/daog6scxm/image/upload/v1715954405/cms/sqlite-gui/SQLite_GUI_35_lnfu0k.webp "Binding")

Next, we’ll add a button action called Update State. This stores a key/value pair as an app state. We want to use this to store the response from our API request. So, we’ll use response as our key.

![Update State](https://res.cloudinary.com/daog6scxm/image/upload/v1715954405/cms/sqlite-gui/SQLIte_GUI_36_taybfw.webp "Update State")

Then, we’ll open the bindings drawer for our value. Here, we can access all of the data that our action is exposed to using handlebar expressions. 

We’ll start by hitting Actions.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715954404/cms/sqlite-gui/SQLite_GUI_37_rs2mpa.webp "Actions")

Then, we’ll choose Query Result.

![Query Result](https://res.cloudinary.com/daog6scxm/image/upload/v1715954404/cms/sqlite-gui/SQLite_GUI_38_ziqrtu.webp "Query Result")

Our Update State action should come between our Execute Query and Save Row actions.

Within the Save Row, we’ll hit Add Column to assign a value to our response column. We’ll set this to our response state, using {{ State.response }}.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1715954402/cms/sqlite-gui/SQLite_GUI_39_vix1ve.webp "Columns")

At this point, we’ll preview our app and fill in our form to confirm that this works as we expect.

![Query Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1715954402/cms/sqlite-gui/SQLite_GUI_40_izp0wj.webp "Query Editor")

And we can see that this has been saved correctly to our queries table.

![Saved Row](https://res.cloudinary.com/daog6scxm/image/upload/v1715954401/cms/sqlite-gui/SQLite_GUI_41_j6siuc.webp "Saved Row")

Check out our other tutorial on building a [SQL GUI](https://budibase.com/blog/tutorials/sql-gui/).

### Saving a history row

When a user hits Save, their query is sent. So, we also need to record this using our history table.

We’ll start by adding another Save Row action to our button. This time, we’ll set the table to history and add all three columns.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1715954401/cms/sqlite-gui/SQLite_GUI_42_fk34wx.webp "Save Row")

We’ll bind date_time to the following JavaScript expression to get the current date and time.

{{< highlight javascript "linenos=inline" >}}

var date = new Date();

return date

{{< /highlight >}}

Just like before, we’ll set our query to:

{{< highlight javascript "linenos=inline" >}}

return snippets.cleanQuery($("Form.Fields.query"))

{{< /highlight >}}

And we’ll set our response to {{ State.response }}.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1715954401/cms/sqlite-gui/SQLite_GUI_43_fs7co5.webp "Save Row")

We can test this again by previewing our app. When we’re happy, we can move on to building the last element of our query editor.

### Adding a side panel

We’ll start by adding a component called a Side Panel. We’ll call this Response Side Panel.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715954400/cms/sqlite-gui/SQLite_GUI_44_ojisx9.webp "Side Panel")

Inside this, we’ll add a Headline component, with its Size set to Small and its Text set to Response. We’ll also tick the italic box.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954400/cms/sqlite-gui/SQLite_GUI_45_szqm6v.webp "SQLite GUI")

Beneath this, we’ll add a Markdown Viewer.

![Markdown Viewer](https://res.cloudinary.com/daog6scxm/image/upload/v1715954399/cms/sqlite-gui/SQLite_GUI_46_vcagis.webp "Markdown Viewer")

We could simply display our response as it’s currently stored in our app state. But we’re going to use some more JavaScript to stylize this. We’ll start by creating another snippet and calling it stylizeJson.

Essentially, we want to apply appropriate spacing and color coding to differentiate between the keys and values in our JSON blob.

The code we’re using is:

{{< highlight javascript "linenos=inline" >}}

return function stylizeJson(myString){

 let originalString = myString;

// Parse the original string into a JavaScript object

let jsonObject = JSON.parse(originalString);

// Convert the object back to a formatted JSON string with custom indentation and color coding

let formattedJson = JSON.stringify(jsonObject, null, 2)

 .replace(/(^\s+)|(\n\s+)/g, (match, p1, p2) => {

  return p1 ? '' : '\n' + ' '.repeat(p2.length / 2);

 })

 .replace(/("[^"]+":)/g, '<span style="color: #6b6ceb;">$1</span>');

// Wrap the formatted JSON string in HTML tags for styling

let styledJson = `<pre style="color: white;">${formattedJson}</pre>`;

return styledJson

}

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1715954399/cms/sqlite-gui/SQLite_GUI_47_tnkzsv.webp "JavaScript")

We’ll then call this as our binding, using our response state as an argument, with:

{{< highlight javascript "linenos=inline" >}}

return snippets.stylizeJson($("State.response"))

{{< /highlight >}}

![Function](https://res.cloudinary.com/daog6scxm/image/upload/v1715954398/cms/sqlite-gui/SQLite_GUI_48_xzcxl3.webp "Function")

This will throw an error in the Budibase builder because our state isn’t populated until a user hits save. We’ll see how it looks in the app preview in a second.

![Error](https://res.cloudinary.com/daog6scxm/image/upload/v1715954398/cms/sqlite-gui/SQLite_GUI_49_ov56xd.webp "Error")

First, though, we need to add one final button action to open our Side Panel.

So, head back to our button actions drawer, and we’ll add an action called Open Side Panel.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715954398/cms/sqlite-gui/SQLite_GUI_50_qszavz.webp "Side Panel")

Then, we’ll save a query to show what our JSON response looks like.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715954397/cms/sqlite-gui/SQLite_GUI_51_gdtoq8.webp "Response")

This works fine. Note that we’ve chosen the colors for our stylized JSON to suit a darker app theme that we’re going to apply a little later, so for the moment, they look a little bit hard to read.

### Adding a send button

The last thing we want to do is add a second button to our query editor so that users can send their queries without saving them.

This will essentially work the same way as our existing button, except we won’t validate the form or save a row to the queries table.

We’ll start by duplicating our button and then nesting the original and the duplicate inside a horizontal container.

![Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1715954397/cms/sqlite-gui/SQLite_GUI_52_jcjxgs.webp "Buttons")

The left-hand button is the one we’ll keep as our Save button. The one on the right will be used to send the query without saving it.

We’ll start by editing the design of the Save button, setting its Variant to Secondary, and selecting the option for Quiet.

![Send](https://res.cloudinary.com/daog6scxm/image/upload/v1715954396/cms/sqlite-gui/SQLite_GUI_53_sxfv1l.webp "Send")

We’ll then set the text for the right-hand button to Send.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954396/cms/sqlite-gui/SQLite_GUI_54_ey4loq.webp "SQLite GUI")

We’ll then simply open the actions drawer, remove the actions to validate our form and save a row to our queries table.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715954395/cms/sqlite-gui/SQLite_GUI_55_tj1iap.webp "Actions")

Here’s how this will look when a user hits Send.

![SQLite Review](https://res.cloudinary.com/daog6scxm/image/upload/v1715954395/cms/sqlite-gui/SQLite_GUI_56_xbvnve.webp "SQLite Review")

And that’s our query editor done!

## 3. Adding a history screen

Next, we can start building our other screens. One of these will be used to view the history of the queries that have been sent from our SQLite GUI. The other will be used to resend or update saved queries.

We’ll start by hitting the plus icon to add a new screen. This time, we’re going to use one of Budibase’s built-in layouts. Specifically, we’re choosing the option for a table with details side panels.

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1715954395/cms/sqlite-gui/SQLite_GUI_57_hgfpbo.webp "Layouts")

This will output a working CRUD UI based on whichever SQL or internal table we point it at. We’re choosing both of our internal tables and leaving our access role set to Basic again.

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1715954394/cms/sqlite-gui/SQLite_GUI_58_mv9ctj.webp "Tables")

Here’s what our history screen looks like. We can access forms for creating or updating rows via side panels.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715954393/cms/sqlite-gui/SQLite_GUI_59_frb2fh.webp "Table")

However, we want this screen to be read-only. So, we’ll start by deleting the Create Row button and corresponding side panel. We’ll also update the display texts for human readability.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715954392/cms/sqlite-gui/SQLite_GUI_60_zwib3o.webp "Side Panel")

All we need to do now is edit our remaining side panel form to display data in the format we want. 

Here’s how this looks at present.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715954393/cms/sqlite-gui/SQLite_GUI_61_gxdhb8.webp "Form")

We’ll start by changing the Type to View and updating the title. We’ll also deselect the response field and update the remaining fields’ display texts, as before.

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715954392/cms/sqlite-gui/SQLite_GUI_62_rtvxm2.webp "Query")

Then, we’ll hit Eject Block and add a Markdown viewer below our query field.

![markdown viewer](https://res.cloudinary.com/daog6scxm/image/upload/v1715954392/cms/sqlite-gui/SQLite_GUI_63_sfjxc3.webp "markdown viewer")

We want to bind this to the JSON object that’s stored in the relevant row of our history table. However, this is stored as a JSON object and our stylizeJson function accepts a string as an argument.

So, we’ll first use the JSON.stringify() method to convert this. The code we’re using for our binding is:

{{< highlight javascript "linenos=inline" >}}

var jsonOutput = JSON.stringify($("Repeater.history.response"))

return snippets.stylizeJson(jsonOutput)

{{< /highlight >}}

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954392/cms/sqlite-gui/SQLite_GUI_64_cswhyq.webp "SQLite GUI")

Here’s how this looks.

![History](https://res.cloudinary.com/daog6scxm/image/upload/v1715954391/cms/sqlite-gui/SQLite_GUI_65_egxbl4.webp "History")

## 4. Managing saved queries

Next, we’ll make a few changes to our saved queries screen to better suit our needs. Just like before, we’ll start by removing the Create Row button and form and updating our display texts.

![Saved Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1715954390/cms/sqlite-gui/SQLite_GUI_66_czhtxo.webp "Saved Queries")

We’ll then make similar changes to our remaining form, by updating the title and display texts, and deselecting the response field, before hitting Eject Block.

![Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715954390/cms/sqlite-gui/SQLite_GUI_67_jreagd.webp "Query")

We want to replicate the buttons that we had on our original query editor screen. Rather than building these from scratch, though, we‘re simply going to copy them. We’ll start by deleting our existing Button Group component.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715954389/cms/sqlite-gui/SQLite_GUI_68_fahc6k.webp "Form")

Then, we’ll head back to our query editor screen and copy the entire container that our two buttons are nested within.

![Copy](https://res.cloudinary.com/daog6scxm/image/upload/v1715954390/cms/sqlite-gui/SQLite_GUI_69_t1tu52.webp "Copy")

We’ll then paste these alongside the headline component on our queries form.

![Paste](https://res.cloudinary.com/daog6scxm/image/upload/v1715954389/cms/sqlite-gui/SQLite_GUI_70_orv0se.webp "Paste")

Now, the correct flow of on-click actions will be carried across, but we’ll need to make a few changes to individual actions for them to work correctly - since the components they’re pointed at don’t exist on this screen.

The first thing we want to do is update any bindings that reference our query form field.

Specifically, these are our Execute Query and Save Row actions for both buttons. Here’s how these will look now with the broken binding.

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1715954389/cms/sqlite-gui/SQLite_GUI_71_meutc1.webp "JavaScript")

We’ll simply update these to:

{{< highlight javascript "linenos=inline" >}}

return snippets.cleanQuery($("Form.Fields.query"))

{{< /highlight >}}

Make sure to do this for all Execute Query and Save Row actions across both buttons.

We also need to update the data source setting for any action that references a form. These are our Validate Form and Save Row actions.

For the Validate Form action and the Save Row actions for our queries table, we can simply change this from null to our current form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715954388/cms/sqlite-gui/SQLite_GUI_72_izaazj.webp "Form")

However, this won’t work for saving a row to our history table, as the current form updates a row, but we want to create a new entry with this Save Row action.

To get around this, we’ll add a Form component at the bottom of our page, setting its Type to Create and its Schema to history. We’ll also rename this History Form, so we know which is which.

This will be invisible to end users because we’re not nesting any other components inside it.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715954388/cms/sqlite-gui/SQLite_GUI_73_rnk4eh.webp "Form")

Back within each of our button actions, we’ll update the Save Row actions for the history table to point them at this new form.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715954388/cms/sqlite-gui/SQLite_GUI_74_srw2av.webp "Actions")

Lastly, we’re going to place a Headline component and Markdown Viewer beneath our query form field exactly as we did earlier.

![Markdown Viewer](https://res.cloudinary.com/daog6scxm/image/upload/v1715954387/cms/sqlite-gui/SQLite_GUI_75_cxjyw9.webp "Markdown Viewer")

Like before, we’re going to set our Markdown Viewer to display the output of:

{{< highlight javascript "linenos=inline" >}}

var jsonOutput = JSON.stringify($("Repeater.queries.response"))

return snippets.stylizeJson(jsonOutput);

{{< /highlight >}}

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_76_zczmgd.webp "Response")

Now, we’re displaying the saved response from our queries table. However, if a user hits one of our buttons and sends a query, we want to display the new response.

We’ll do this using Budibase’s conditional UI capabilities. This lets us specify a rule to display, hide, or update the native settings of any component.

First, head to Conditions on our Markdown Viewer and add a rule to update the Markdown setting.

![Conditionality](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_77_jrzfzp.webp "Conditionality")

We’ll set this to:

{{< highlight javascript "linenos=inline" >}}

return snippets.stylizeJson($("State.response"))

{{< /highlight >}}

If our response state is not empty.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_78_qmktns.webp "Condition")

Finally, we’ll return to our button actions and remove the Open Side Panel actions from both, as this is no longer needed.

![Remove Action](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_79_xwk34y.webp "Remove Action")

We can then resend or update our saved queries to confirm that everything works as expected.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_80_akmafc.webp "SQLite GUI")

In terms of functionality, our SQLite GUI is now ready to go.

## 5. Design tweaks and publishing

Before we launch our app, we’ll make a couple of minor UX improvements.

We said earlier that we want to apply a darker theme to our app so that our stylized JSON really pops. Under Screen and Theme, we’re going to choose midnight.

![Query Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1715954386/cms/sqlite-gui/SQLite_GUI_81_k13xbs.webp "Query Editor")

While we’re here, we’ll also update our button colors to match.

![Button Color](https://res.cloudinary.com/daog6scxm/image/upload/v1715954385/cms/sqlite-gui/SQLite_GUI_82_twqskg.webp "Button Color")

Here’s how this will look in our app preview.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1715954385/cms/sqlite-gui/SQLite_GUI_83_ho89sb.webp "Preview")

Then, we’ll head to Navigation, add a menu item for our Home screen, and set the Position option to the left-hand side.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1715954385/cms/sqlite-gui/SQLite_GUI_84_upsadm.webp "nav")

When we’re happy, we can hit Publish to push our app live.

![Menu](https://res.cloudinary.com/daog6scxm/image/upload/v1715954385/cms/sqlite-gui/SQLite_GUI_85_birqmu.webp "Menu")

Here’s a reminder of what our finished app looks like.

![SQLite GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715954385/cms/sqlite-gui/SQLite_GUI_86_ruesod.webp "SQLite GUI")

Budibase is the open-source, low-code tool that empowers IT teams to turn data into action.

To learn more about using our platform to ship professional solutions in a fraction of the time, take a look at our [features overview](https://budibase.com/product/).