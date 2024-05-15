+++
author = "Ronan McQuillan"
date = 2024-05-15
description = "Learn how to build a custom MariaDB GUI in Budibase for free."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a MariaDB GUI"
+++

MariaDB is one of the most popular open-source databases around. It was created by some of the original developers of MySQL as a truly FOSS RDBMS after its larger counterpart’s acquisition by Oracle in 2009.

Today, it’s a scalable, secure, and performant way to handle large volumes of data with familiar SQL querying.

Even better, just about any platform that supports MySQL will connect easily to your MariaDB database. 

This includes a huge range of off-the-shelf GUIs.

But today, we’re checking out a different approach to interacting with our data, by showing off how we can use Budibase to build a fully custom MariaDB GUI for free.

Along the way, we’ll see some of the many reasons that Budibase is the ideal solutions for busy IT teams to ship custom tools at pace.

But, before we get started…

## Why would we want to create a MariaDB GUI?

We just said that there are numerous pre-built GUIs out there that will support MariaDB. Many of these are even free. So, why would we bother going to the time and effort of creating a custom solution?

There are a couple of key reasons, but the big one is control. Most off-the-shelf GUIs are pretty basic - both in terms of design and functionality. With a custom solution, we have total flexibility to create much more advanced, streamlined interfaces.

Budibase offers sleek, visual tools for creating professional UIs on top of just about any data source - alongside key enterprise functionality, including free SSO, optional self-hosting, flexible RBAC, and more.

Or, we might want a more use cae-specific GUI. For example, one that’s based around a particular data structure or has specific interfaces for carrying out defined tasks within an internal process.

With our open-source, low-code platform, non-developers can easily create custom workflow tools in a fraction of the time it would take with custom development.

{{< cta >}}

So…

## What are we building?

We’re building a simple GUI to write, send, and store queries to an existing MariaDB database.

Specifically, our app will have three screens for the following:

1. Writing, testing, and saving queries.
2. Resending and updating saved queries.
3. Viewing previously sent queries.

We’ll achieve this using our MariaDB database alongside a couple of tables in Budibase’s built-in database.

The core of our application will only take a few minutes to set up, but we’ll also be using a little bit of custom JavaScript to improve user experiences along the way.

We’ll provide all of the code and SQL expression we need as we go.

Here’s what our MariaDB GUI will look like when we’re finished.

{{< vimeo id="946635436" title="MariaDB GUI" >}}

Let’s jump in.

## How to build a MariaDB GUI in 6 steps

The first thing we need to do is sign up for a free Budibase account.

We’ll begin by creating a new application. We have the option of importing an existing app dump or using a template, but today, we’re going to start from scratch. When we choose this option, we’re prompted to give our new Budibase app a name and URL extension.

We’ll simply call ours MariaDB GUI.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787352/cms/mariadb-gui/MariaDB_GUI_1_dhj9n9.webp "MariaDB GUI")

## 1. Connecting our database

Once we’ve hit Create App, we’ll be prompted to choose from a range of data sources for our app. 

Budibase offers extensive external database support, including dedicated connectors for a range of relational and non-relation tools, alongside REST APIs, Google Sheets, and other data sources.

![Database](https://res.cloudinary.com/daog6scxm/image/upload/v1715787352/cms/mariadb-gui/MariaDB_GUI_2_scmitz.webp "Database")

Today, we’re actually going to use two separate data sources, but we want to start by setting up our MariaDB database.

We can do this using Budibase’s MySQL connector. When we choose this option, we’re prompted to enter our connection details.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1715787352/cms/mariadb-gui/MariaDB_GUI_3_stwtal.webp "Config")

Then, we’ll be asked which of our database tables we’d like to fetch, making them editable within Budibase. Our database has one table called customers, which we’ll fetch to make it easier to test that our GUI is working correctly.

![Fetch](https://res.cloudinary.com/daog6scxm/image/upload/v1715787351/cms/mariadb-gui/MariaDB_GUI_4_huptv5.webp "Fetch")

Straight away, we can view and edit the data stored in our database in Budibase’s Data section. However, Budibase only acts as a proxy to query our database, without actually storing the data.

Our customers table stores three text attributes, called first_name, last_name, and email. At present, it only has one row of dummy data.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715787351/cms/mariadb-gui/MariaDB_GUI_5_tmfatm.webp "Table")

At this point, we could start creating app screens for end users to interact with our data, like CRUD UIs or forms.

We can also rename our data source to something more descriptive than MySQL.

But, to build the MariaDB GUI we described earlier, we need to take one extra step in our data layer.

## 2. Creating a custom query

We can write custom queries directly within Budibase’s data section. However, we need a way to enable end users to write queries and view their responses.

We’ll do this using one master query that accepts inputs from our app screens.

Start by heading to the settings for our MariaDB connection and hit Create New Query.

![Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_6_pgulpk.webp "Budibase")

We’re then presented with the following screen, where we can give our query a name and input our SQL syntax. We can also add bindable values so that we can pass data from our front-ends or JavaScript transformers to manipulate the response.

We’ll call our query customQuery.

![Custom Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_7_jw8bsf.webp "Custom Query")

As for the query itself, we essentially want this to accept user input and send it to our database server. The only static piece of SQL we’ll add is an EXECUTE IMMEDIATE command, which will prepend our dynamic query.

![EXECUTE IMMEDIATE](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_8_wmf4lm.webp "EXECUTE IMMEDIATE")

Then, we’re going to add a binding. This accepts two values - a name and a default value. We can use the binding within our query with the syntax {{ name }} and overwrite the default value elsewhere in the Budibase builder, as we’ll see later.

We’re going to call our binding ‘query’ and set its default value to a familiar SQL expression:

{{< highlight sql "linenos=inline" >}}

SELECT * FROM customers;

{{< /highlight >}}

We’ll also add our binding to the query itself.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_9_muppxw.webp "Bindings")

Then, we’ll hit Run Test to confirm that this works as we expect it to.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_10_xrvnfe.webp "Test")

Once we’re happy, we can hit save.

## 3. Adding internal tables

Before we start building our app screens, we’re going to create a couple of extra tables in Budibase’s internal database. One of them will be called queries, where we can save queries with a name and an expected response schema.

Then, we’ll create a second table called history, where we’ll store each query that’s been sent through our GUI, along with a timestamp and the actual response data.

We’ll add a new data source using the plus icon and then select Create New Table under BudibaseDB. We’ll be prompted to give this a name.

Again, our first table is called queries.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715787349/cms/mariadb-gui/MariaDB_GUI_11_qbnyoo.webp "Table")

Now, we have an empty table. We can use the plus icon at the top of this to start adding columns.

![Empty Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715787334/cms/mariadb-gui/MariaDB_GUI_12_adwdce.webp "Empty Table")

We’ll start by adding a Text field and calling it name. We’re also selecting the Required option.

![Name FIeld](https://res.cloudinary.com/daog6scxm/image/upload/v1715787334/cms/mariadb-gui/MariaDB_GUI_13_uynyc0.webp "Name field")

Then, we’ll add two more columns. One will be called query, with the Long-Form Text type. The other will be called response_schema, with the JSON type.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787334/cms/mariadb-gui/MariaDB_GUI_14_p02nva.webp "MariaDB GUI")

Then, we’ll follow the same process to create our history table. We’ll give it three columns with these names and types:

- date_time: Date,
- query: Long-Form Text,
- response: JSON.

![History Table](https://res.cloudinary.com/daog6scxm/image/upload/v1715787333/cms/mariadb-gui/MariaDB_GUI_15_cyhdd6.webp "History Table")

The data layer of our MariaDB GUI is complete, so we can go to the Design tab in the Budibase builder.

## 4. Building our query editor

It’s time to start building our app screens. First of all, we’re going to create our primary screen, where users can write and send queries to our MariaDB database - as well as viewing the response and saving their queries to reuse later.

We’re prompted to use a pre-built layout for our first screen or to start from scratch. 

![Layouts](https://res.cloudinary.com/daog6scxm/image/upload/v1715787333/cms/mariadb-gui/MariaDB_GUI_16_hjeu4y.webp "Layouts")

We’re starting with a blank screen. When we choose this option, we’re asked to give this a URL extension. Since this will be our home screen, we’ll use a single trailing slash.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1715787333/cms/mariadb-gui/MariaDB_GUI_17_nydqc8.webp "URL")

We can also set a minimum role for accessing our new screen. Today, we’re going to leave this as the default option, Basic.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1715787331/cms/mariadb-gui/MariaDB_GUI_18_gokr6t.webp "RBAC")

Here’s our blank screen.

![Blank Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1715787331/cms/mariadb-gui/MariaDB_GUI_19_mxpowr.webp "Blank Screen")

We’re going to start by adding a component called a Form Block. This outputs a working form based on the schema of whichever internal or SQL table we point it at.

Ours uses the queries table.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715787331/cms/mariadb-gui/MariaDB_GUI_20_bcdeem.webp "Form")

We’ll start by making some design changes to this. First, we’ll use the selection slider to deselect the response_query field.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787331/cms/mariadb-gui/MariaDB_GUI_21_mqtmea.webp "MariaDB GUI")

Then, we’ll give our form a descriptive title and update the Label and Placeholder texts for each of our remaining form fields to something more human-readable than the names of the columns in our database.

![Query Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1715787330/cms/mariadb-gui/MariaDB_GUI_22_kjaaa5.webp "Query Editor")

And, under styles, we’ll set the Size to Large and the Button Position to Top.

![Style](https://res.cloudinary.com/daog6scxm/image/upload/v1715787329/cms/mariadb-gui/MariaDB_GUI_23_mxi72x.webp "Style")

We need to make some more extensive changes to our form. To do this, we’ll need to access its underlying components. To do this, we can hit Eject Block.

![Component Tree](https://res.cloudinary.com/daog6scxm/image/upload/v1715787328/cms/mariadb-gui/MariaDB_GUI_24_retxjl.webp "Component Tree")

Here’s what our component tree looks like now.

![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1715787328/cms/mariadb-gui/MariaDB_GUI_25_hcah3l.webp "Components")

When we’re done, we want to have two buttons so users can send or save their queries. When they hit either of these, a side panel will open, displaying the response and the response schema.

### Saving a query

We’ll start by making some changes to our existing button actions.

![Button](https://res.cloudinary.com/daog6scxm/image/upload/v1715787328/cms/mariadb-gui/MariaDB_GUI_26_pdaenw.webp "Button")

Currently, there are five actions here, two to validate our form and save a row to the queries table - and then three more default actions that we can remove with the X icons.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715787328/cms/mariadb-gui/MariaDB_GUI_27_lbbty2.webp "Actions")

Next, we’re going to add an Execute Query action and place it between our existing Validate Form and Save Row actions.

We’re setting the data source to our MariaDB database and the Query to customQuery. We’ll then use the lightning bolt icon to open the bindings drawer to overwrite the default value for our {{ query }} binding from earlier.

![Exectute Query](https://res.cloudinary.com/daog6scxm/image/upload/v1715787328/cms/mariadb-gui/MariaDB_GUI_28_veiuus.webp "Execute Query")

Essentially, we want to populate this with whatever the user has placed inside the Query box on our form. However, we want to apply a little bit of transformation to this to ensure that there are no unnecessary line breaks.

Since we’ll need to use the same transformation elsewhere in our app, we’ll create a reusable JavaScript snippet to do this.

Within our JavaScript editor, we’ll hit Create Snippet. We’ll call this cleanQuery.

![Snippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715787326/cms/mariadb-gui/MariaDB_GUI_30_k2dttx.webp "Snippet")

Basically, JavaScript snippets in Budibase allow us to declare and return functions which can then be called elsewhere in bindings.

Our cleanQuery snippet will accept a string argument and then remove any linebreaks from this. So, the specific code snippet we’re adding is.

{{< highlight javascript "linenos=inline" >}}

return function cleanQuery(myString){

 let str = myString;

let cleanedStr = str.replace(/\n/g, '');

return cleanedStr;

}

{{< /highlight >}}

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787325/cms/mariadb-gui/MariaDB_GUI_31_ztnb9t.webp "MariaDB GUI")

Hit Save, and then we can call our snippet in our query binding by passing our form field input into it, using:

{{< highlight javascript "linenos=inline" >}}

return snippets.cleanQuery($("Form.Fields.query"))

{{< /highlight >}}

![State](https://res.cloudinary.com/daog6scxm/image/upload/v1715787325/cms/mariadb-gui/MariaDB_GUI_32_bcjfvw.webp "State")

Now hit save and return to the button actions drawer.

After we execute our query, but before we save a row, we want to store the response as an app state so that this can be used elsewhere in our UI. So, we’re adding an Update State action.

This accepts a key/value pair. Our key will be response.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715787325/cms/mariadb-gui/MariaDB_GUI_33_l2evcc.webp "Actions")

For the value, we’ll open the bindings drawer again, but this time we’ll simply use handlebars. Within this, we can see all of the categories of data that our action is exposed to. We want the query response from our previous action, so we’re clicking into Actions.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1715787324/cms/mariadb-gui/MariaDB_GUI_34_mx2s1r.webp "Actions")

And here, we can get our query result.

![Result](https://res.cloudinary.com/daog6scxm/image/upload/v1715787324/cms/mariadb-gui/MariaDB_GUI_35_ay925j.webp "Result")

We’re also going to need to update our Save Row action. Remember, the queries table has a column to store the response of any queries we’ve saved, so we’ll need to add this.

We can use the Add Column button to assign a value to this automatically when a user hits save.

![Add column](https://res.cloudinary.com/daog6scxm/image/upload/v1715787324/cms/mariadb-gui/MariaDB_GUI_36_abpar4.webp "Add column")

We’ll use a JavaScript binding to take the name of any keys in our response JSON and the data type of their values. Again, we’ll want to reuse this same transformer elsewhere in our MariaDB GUI, so we’ll start by adding a new code snippet.

We’ll call this one getSchema and use the following code for our snippet to return the structure, keys, and data types for our response.

{{< highlight javascript "linenos=inline" >}}

return function getSchema(myString) {let originalString = myString;

// Parse the original JSON string

let jsonObject = JSON.parse(originalString);

// Function to infer the data type of a value

let inferDataType = (value) => {

 if (Array.isArray(value)) {

  return 'array';

 } else if (typeof value === 'object' && value !== null) {

  return 'object';

 } else {

  return typeof value; // Return the JavaScript data type

 }

};

// Function to generate a new JSON object with data types based on the structure of the original object

let generateTypeObject = (obj) => {

 if (Array.isArray(obj)) {

  return obj.map(item => generateTypeObject(item));

 } else if (typeof obj === 'object' && obj !== null) {

  let newObj = {};

  for (let key in obj) {

   let valueType = inferDataType(obj[key]);

   newObj[key] = valueType;

  }

  return newObj;

 } else {

  return ''; // Replace non-object values with blank string

 }

};

// Generate a new JSON object with data types based on the structure of the original object

let typeObject = { data: generateTypeObject(jsonObject.data[0]) }; // Assuming "data" is an array

return JSON.stringify(typeObject, null, 2);

}

{{< /highlight >}}

![Snippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715787323/cms/mariadb-gui/MariaDB_GUI_37_whnley.webp "Snippet")

Then, we’ll call this snippet and pass our response state to it in our binding for the response_schema column using:

{{< highlight javascript "linenos=inline" >}}

return snippets.getSchema($("State.response"))

{{< /highlight >}}

![Snippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715787322/cms/mariadb-gui/MariaDB_GUI_38_txrm5z.webp "Snippet")

Hit save, and we’ll open our MariaDB GUI in a preview to test that this works correctly by sending and saving a query.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1715787322/cms/mariadb-gui/MariaDB_GUI_39_fubkc0.webp "Test")

And, back in our queries table, we can see that this has worked.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787321/cms/mariadb-gui/MariaDB_GUI_40_u1lm7b.webp "MariaDB GUI")

### Creating our side panel

However, we also want our end users to be able to see the responses to their queries. We’ll present these on a side panel whenever our users hit save.

We’ll start by adding a side panel component and calling this Response Side Panel.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715787321/cms/mariadb-gui/MariaDB_GUI_41_plp08s.webp "Side Panel")

Inside this, we’ll nest a Headline component, setting its Size to Small and its Text to Response. We’ll also select the Italic Option.

![Headline](https://res.cloudinary.com/daog6scxm/image/upload/v1715787321/cms/mariadb-gui/MariaDB_GUI_42_gymxxp.webp "Headline")

Beneath this, we’re adding a Markdown Viewer.

![Markdown Viewer](https://res.cloudinary.com/daog6scxm/image/upload/v1715787321/cms/mariadb-gui/MariaDB_GUI_43_rorwa6.webp "Markdown Viewer")

We’ll use this to display the query response that we’ve stored in our app state. However, we’ll use a little bit of JavaScript to Stylize this.

So, once again we’ll open the bindings drawer and create a new JavaScript snippet. We’ll call this stylizeJson and use the following code to apply appropriate coloring and indentation for displaying a JSON object.

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

![Snippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715787319/cms/mariadb-gui/MariaDB_GUI_44_cnptsu.webp "Snippet")

We’ll then call this in our binding, using our response state as the argument, with:

{{< highlight javascript "linenos=inline" >}}

return snippets.stylizeJson($("State.response"))

{{< /highlight >}}

![Call SNippet](https://res.cloudinary.com/daog6scxm/image/upload/v1715787319/cms/mariadb-gui/MariaDB_GUI_45_yauul0.webp "Call Snippet")

We’ll then duplicate our Headline and Markdown viewer, replacing their names and display texts for our response schema.

For our second Markdown Viewer, we want to apply our stylizeJson to the output of our getSchema snippets, with the response state as our argument.

So, the JavaScript we’re using is:

{{< highlight javascript "linenos=inline" >}}

return snippets.stylizeJson(snippets.getSchema($("State.response")))

{{< /highlight >}}

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787319/cms/mariadb-gui/MariaDB_GUI_46_cadqxy.webp "MariaDB GUI")

Currently, both of our Markdown Viewers are displaying JavaScript errors because our state is empty in the Budibase builder.

Before we can preview this, we’ll head back to our button actions drawer. Here, we can add an action called Open Side Panel, selecting our Response Side Panel.

![Open SIde Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715787318/cms/mariadb-gui/MariaDB_GUI_47_l6hfui.webp "Open Side Panel")

Now, we’ll preview our app and submit the same query we did earlier. Here’s the response we’ll see.

![Query Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715787319/cms/mariadb-gui/MariaDB_GUI_48_hdshja.webp "Query Response")

Currently, this is a little hard to read, but we’ve chosen our colors to contrast with a darker theme that we’ll be applying to our entire app a little bit later.

### Saving a history row

When a user hits save, our query is sent to the MariaDB server. Therefore, we need to add this to our history row.

To do this, we’ll add a second Save Row button action between our existing one and our Open Side Panel action.

We’ve set our Data Source to our form and the Table to history.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1715787317/cms/mariadb-gui/MariaDB_GUI_49_njfv1p.webp "Save Row")

Next, we need to add values for all three columns.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1715787317/cms/mariadb-gui/MariaDB_GUI_50_vhka0l.webp "Columns")

To assign a value to date_time, we’re using the following JavaScript:

{{< highlight javascript "linenos=inline" >}}

var date = new Date();

return date

{{< /highlight >}}

Here’s how this looks, including Budibase’s live evaluation.

![Date](https://res.cloudinary.com/daog6scxm/image/upload/v1715787316/cms/mariadb-gui/MariaDB_GUI_51_jwo3ss.webp "Date")

For our query, we’ll use the same JavaScript as earlier, applying our cleanQuery snippet to the user input with:

{{< highlight javascript "linenos=inline" >}}

return snippets.cleanQuery($("Form.Fields.query"))

{{< /highlight >}}

![Code SNippets](https://res.cloudinary.com/daog6scxm/image/upload/v1715787316/cms/mariadb-gui/MariaDB_GUI_52_im1ecv.webp "Code Snippets")

And lastly, for our response, we’ll simply use the handlebars expression {{ State.response }}.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1715787316/cms/mariadb-gui/MariaDB_GUI_53_bkk0w7.webp "Columns")

We can test this one last time to check it worked - first, by saving a query.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715787315/cms/mariadb-gui/MariaDB_GUI_54_lmz8do.webp "Response")

And then by inspecting our history table to ensure the expected values were saved.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715787314/cms/mariadb-gui/MariaDB_GUI_55_aalf6h.webp "Response")

### Adding a send button

Lastly, we want users to be able to send their query without saving it. That way, they can check out the response and only save their query when it returns the data they expect.

We’ll do this by adding a second button. We could do this within the existing Button Group component, but since most of our on-click actions will be the same, we’re simply duplicating the entire component.

![Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1715787314/cms/mariadb-gui/MariaDB_GUI_56_x78olc.webp "Buttons")

To space these out a little bit more nicely, we’ll nest them both inside a horizontal container.

![Container](https://res.cloudinary.com/daog6scxm/image/upload/v1715787313/cms/mariadb-gui/MariaDB_GUI_57_dmbpg6.webp "Container")

We want our primary button to be the Send button, so we’ll update the display text on the right-hand one to Send.

![Text](https://res.cloudinary.com/daog6scxm/image/upload/v1715787313/cms/mariadb-gui/MariaDB_GUI_58_kds6hk.webp "Text")

Then, we’ll open its actions drawer and remove the Validate Form action and the Save Row action for our queries table. This means that validation rules won’t be applied, so we can send our query and save a row to the history table, even if users don’t provide a name.

![Save](https://res.cloudinary.com/daog6scxm/image/upload/v1715787313/cms/mariadb-gui/MariaDB_GUI_59_u5cijr.webp "Save")

For our Save button, we’ll simply update a few styling options. Specifically, we’ll choose the Variant to Seconday and select the Quiet option.

![Save](https://res.cloudinary.com/daog6scxm/image/upload/v1715787312/cms/mariadb-gui/MariaDB_GUI_60_wehzgf.webp "Save")

That’s the main screen of our MariaDB GUI finished. Here’s how it looks when a user sends a query without saving it.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787312/cms/mariadb-gui/MariaDB_GUI_61_otdwxs.webp "mariaDB GUI")

## 5. Adding a history screen

Next, we can start building our screens to view our query history or edit and update saved queries.

Again, we’ll do this by making some modifications to Budibase’s built-in layouts. Hit the plus icon to add a new screen. This time, we’ll choose the option for a table with details side panels.

![Detail Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1715787311/cms/mariadb-gui/MariaDB_GUI_62_olduxe.webp "Details Panel")

This essentially outputs a working CRUD UI for whichever data table we point it at. Forms for creating, updating, or deleting data are contained in Side Panels.

When we choose this option, we’re prompted to choose which tables we want to use. This time we’re selecting queries and history.

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1715787311/cms/mariadb-gui/MariaDB_GUI_63_r976gh.webp "Tables")

As before, we can set a minimum access role for accessing our new screens, but we’ll simply leave this as the default option of Basic again.

Here’s what our history screen looks like straight out of the box.

![mariadb gui](https://res.cloudinary.com/daog6scxm/image/upload/v1715787310/cms/mariadb-gui/MariaDB_GUI_64_kwd2ag.webp "mariadb gui")

We want to make this a read-only screen, so the first thing we’ll do is delete our Create New button and the corresponding Side Panel.

![Delete](https://res.cloudinary.com/daog6scxm/image/upload/v1715787309/cms/mariadb-gui/MariaDB_GUI_65_kecury.webp "Delete")

We can also capitalize our Headline text and the names of our columns.

![Display Text](https://res.cloudinary.com/daog6scxm/image/upload/v1715787309/cms/mariadb-gui/MariaDB_GUI_66_qmlxgj.webp "Display Text")

Then, we need to modify our remaining form to be read-only. Here’s what this currently looks like.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715787309/cms/mariadb-gui/MariaDB_GUI_67_v8dsq7.webp "Form")

We’ll start by setting the Type and Title to View. We’ve also deselected the response field and updated the display texts for our two remaining fields.

![Form UI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787309/cms/mariadb-gui/MariaDB_GUI_68_q1ajdo.webp "Form UI")

We’ll eject our form again to access its underlying components. Then, beneath our query field, we’ll place a Markdown Viewer.

We want to stylize the response just like we did earlier. However, our internal table stores this as a JSON object, but our stylizeJson snippet is written to accept a string as an argument. So, we’ll need to convert our response to a string before using it in our function.

The JavaScript for doing this is:

{{< highlight javascript "linenos=inline" >}}

var jsonOutput = JSON.stringify($("Repeater.history.response"));

return snippets.stylizeJson(jsonOutput)

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1715787308/cms/mariadb-gui/MariaDB_GUI_69_rhbgle.webp "JavaSCript")

Here’s how this should look when we’re done.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787308/cms/mariadb-gui/MariaDB_GUI_70_wedpat.webp "MariaDB GUI")

## 6. Saved queries

Finally, we have our screen for saved queries. We’ll start by capitalizing all of our display texts and removing the button and side panel for adding a new row, following the same process as before.

We’ve also selected the option to allow users to delete rows directly within the table, so we won’t need to include this on our update form.

![Saved queries](https://res.cloudinary.com/daog6scxm/image/upload/v1715787307/cms/mariadb-gui/MariaDB_GUI_71_vmc7ol.webp "Saved queries")

Next, we’ll start making some changes to our remaining form. We’ll follow the same process as before to update our display texts and deselect the reponse_schema field.

![Edit](https://res.cloudinary.com/daog6scxm/image/upload/v1715787307/cms/mariadb-gui/MariaDB_GUI_72_sxwtcw.webp "Edit")

Next, we’ll remove our two existing buttons and eject our form to access its underlying components.

![Delete Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1715787306/cms/mariadb-gui/MariaDB_GUI_73_pczzt4.webp "Delete Buttons")

Now, we need to replace our buttons so users can send or save their queries, just as they did before. To save ourselves some time, we can simply copy and paste the horizontal container that our existing buttons are nested inside from our first screen.

We’ll hit copy.

![Copy](https://res.cloudinary.com/daog6scxm/image/upload/v1715787306/cms/mariadb-gui/MariaDB_GUI_74_l9wxsk.webp "Copy")

And then paste these alongside the Headline component on our new form.

![Paste](https://res.cloudinary.com/daog6scxm/image/upload/v1715787306/cms/mariadb-gui/MariaDB_GUI_75_kh8hz8.webp "Paste")

However, these may not work correctly straight off the bat. There are a couple of tweaks we need to make first.

The first is that some of our bindings need to be updated so that they’re pulling data from the right place. These include anywhere where we’re using user inputs from the form itself. On both buttons, these are the query binding itself, and the query field in both save row actions.

Here’s what these will look like.

![Code](https://res.cloudinary.com/daog6scxm/image/upload/v1715787305/cms/mariadb-gui/MariaDB_GUI_76_xsi7ff.webp "Code")

We simply need to update the argument we’re passing to our code snippets to our new form’s query input. For instance:

![Code](https://res.cloudinary.com/daog6scxm/image/upload/v1715787304/cms/mariadb-gui/MariaDB_GUI_77_kjnmwh.webp "Code")

Make sure to do this for all bindings where a user input is referenced.

Next, when we copied and pasted our buttons, the data source option for our Save Row actions was set to null. For the action to save a row to our queries table, we can simply update this to our current form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715787304/cms/mariadb-gui/MariaDB_GUI_78_dulovy.webp "Form")

However, this won’t work for the Save Row action that we want to point at our history table. The reason for this is that we’re currently using an update form for our queries table, but we want to create a row in history.

To get around this, we can add a new create form beneath our existing one. We’ll call this History Form. By default, its type will be set to Create. This won’t actually contain any components, but we can use it to perform a create operation with our Save Row action.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1715787303/cms/mariadb-gui/MariaDB_GUI_80_saxyhh.webp "Form")

Within our buttons, we’ll then set the data source for our history Save Row action to this new form. Make sure to do this on both buttons. 

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787303/cms/mariadb-gui/MariaDB_GUI_81_mbpnhk.webp "MariaDB GUI")

The previous couple of steps were quite fiddly, so let’s pause to test this before we proceed.

We’ll try to update the title of our saved query.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1715787303/cms/mariadb-gui/MariaDB_GUI_82_sk169q.webp "Test")

We can immediately see that this change has taken effect.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1715787302/cms/mariadb-gui/MariaDB_GUI_84_licfwi.webp "Test")

Lastly, we want to add a Markdown Viewer beneath our form. When users first open the Side Panel, this will display the schema from the saved query.

If they resend or update the query, we’ll display the actual response from this using Budibase’s custom conditionality rules.

We’ll start by adding a headline component, setting its Size to Small and its Text to Response. We’ll add our Markdown Viewer beneath this. Note that both should be inside our main form component.

We’ll use a JavaScript binding so that this displays:

{{< highlight javascript "linenos=inline" >}}

var jsonOutput = JSON.stringify($("Repeater.queries.response_schema"));

return snippets.stylizeJson(jsonOutput)

{{< /highlight >}}

![Code](https://res.cloudinary.com/daog6scxm/image/upload/v1715787301/cms/mariadb-gui/MariaDB_GUI_85_orvnp7.webp "Code")

Then, we’ll open the Markdown Viewer’s conditionality drawer and add an Update Setting rule for its Markdown Setting.

![Markdown](https://res.cloudinary.com/daog6scxm/image/upload/v1715787301/cms/mariadb-gui/MariaDB_GUI_87_gzvbjo.webp "Markdown")

We’ll update this to:

{{< highlight javascript "linenos=inline" >}}

return snippets.stylizeJson($("State.response"))

{{< /highlight >}}

If {{ State.response }} is not empty.

![Code](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_88_pzldxl.webp "Code")

Then, we’ll send a query and test that this updates to our real response.

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_89_ptdasz.webp "MariaDB GUI")

And that’s the core functionality of our MariaDB GUI finished.

## 7. Design tweaks and publishing

We’re almost ready to push our GUI live for users. But before we do this, we want to make a couple of minor UX tweaks.

First, we’ll head to Screen and Theme. Here, we’ll choose Nord.

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_90_s6b5sl.webp "Theme")

While we’re here, we’ll also set our button colors to purple to better match our internal brand.

![Button Color](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_91_ywhtky.webp "Button Color")

Next, we’ll head to our Navigation options. Here, we’re adding a menu item for our Home screen and setting the nav bar to the left-hand side.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_92_pyczok.webp "Nav")

Here’s how this looks like when we preview our app.

![Response](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_93_si4c4n.webp "Response")

When we’re ready, we can hit publish to push it live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_94_nodfhq.webp "Publish")

And here’s a reminder of how this looks when we’re finished

![MariaDB GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1715787300/cms/mariadb-gui/MariaDB_GUI_96_qpnwsh.webp "MariaDB GUI")

Budibase is the fast, easy way for IT teams to build secure custom tools on top of any data source.

To learn more about our open-source, low-code platform, check out our [features overview](https://budibase.com/product/).