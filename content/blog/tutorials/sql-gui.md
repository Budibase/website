+++
author = "Ronan McQuillan"
date = 2024-10-31T23:00:00Z
description = "With Budibase, building a custom SQL GUI has never been easier. Here's everything you need to know."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build a Free SQL GUI in 5 Steps"

+++
SQL is a powerful query language that’s used to unlock valuable insights stored in databases. 

No matter how large our database is or what we’re using it for, we need a streamlined, accessible way to interact with our data. But we also need to do this in a controlled, secure manner.

That’s where an effective SQL GUI comes in. A GUI - graphical user interface - is an application that allows us to interact visually with our data, rather than relying solely on written commands. 

This could range from performing simple CRUD actions to more advanced database operations.

The bad news is that buying a SQL GUI to manage databases isn’t always an easy decision. There are many things to consider, such as licensing, access control, user volumes, app installs, and custom workflows.

Budibase offers an alternative approach.

The key thing here is that our GUI aligns with the actions we want to enable users to take regarding our data. That is, we need a tool that supports the specific ways we want to interact with our database.

Today, we’re showing off how Budibase makes this a breeze. 

Specifically, we’re building a SQL GUI that allows different user types to do two things:

1. Perform defined CRUD actions on our database tables.
2. Write, test, execute, and save custom queries.

Budibase is the security-first low-code platform that helps IT teams turn data into action.

You might also like our guide to building a [REST API GUI](https://budibase.com/blog/tutorials/rest-api-gui/).

First, let’s think a little bit more about why we would opt to build our own GUI rather than going for an off-the-shelf option.

## What is a SQL GUI?
A SQL GUI is a tool that allows us to interact with our database using visual elements, rather than soley relying on textual commands. For instance, with buttons, form fields, tables, or other UI components.

This facilitates a few key things:
- Querying - providing a visual editor to write, test, and send SQL queries, including syntax highlighting and debugging,
- Database management - allowing users to manage our database's structure, schema, or stored values, without needing to write manual queries,
- Data manipulation - using or editing stored data, often in a spreadsheet-like interface,
- Visualization - including for relationships, schemas, data structures, or aggregated values,
- Import/export - allowing us to perform bulk actions on stored data,
- Managing integrations - including connecting our database to external tools,
- Performance monitoring - tracking key metrics relating to our database's usage and performance.

The core value-add here is providing a more efficient and accurate experience for interacting with our SQL database. On the one hand, this means enabling non-technical colleagues to manage databases.

On the other, it means that we can perform common tasks in a faster, less labor-intensive fashion.

## What is the best GUI for SQL?

The right GUI depends on your needs. Some are more popular than others. For example, phpMyAdmin is the most ubiquitous option.

Others cater to very specific needs. For instance, these could be proprietary for a specific database engine or service. Or, you might have dedicated GUIs for more specific internal use cases.

Here are some points to consider when you pick a SQL GUI (or if you build your own):

- **License cost** - be it one-time, monthly, or yearly.
- **Licensing limitations** - number of users, number of instances.
- **Local or web-based** - some are accessible online, others only work as desktop installations.
- **Databases supported** - some work with a specific database, and others can work with multiple databases.
- **Ease of use** - how complex the interface is or how well it’s optimized for particular use cases.
- **Customization** - if it’s possible to add new features to it via plug-ins or even editing the source code.
- **Reliability** - if the tool works all the time or if it breaks.
- **Security and user management** - including authentication, authorization, credential management, and access control.

With this in mind, some of the top off-the-shelf SQL GUIs include:
 - DBeaver,
 - MySQL Workbench,
 - pgAdmin,
 - SQL Server Management Studio,
 - Heidi SQL,
 - Datagrip,
 - Toad,
 - Navicat,
 - Sequel Pro,
 - Acqua Data Studio.

Alternatively, in recent years more and more teams have turned to SQL Database-as-a-Service platforms. These are generally cloud-based services, where a managed SQL database, GUI, and hosting are offered within a web-based UI. Examples include NeonDB for Postgres or Aiven for MySQL. This can be a great approach for quickly managing a SQL database, without needing to set up your own GUI.

Another key consideration is the type of license offered for specific platforms. Many teams will want to prioritize an open-source GUI for SQL databases, for cost, security, and maintenance reasons.

You might also like our round-up of [open-source form builders](https://budibase.com/blog/open-source-form-builder/).

## What are we building?

As we said earlier, our SQL GUI provides two clusters of capabilities, with each one accessible to a different set of end users. To achieve this, we’re making heavy use of Budibase’s role-based access control.

Budibase offers custom RBAC. We can use these to configure which data sets and operations users have access to within Budibase’s Data section.

Then, all we need to do is autogenerate UIs or even automations and customize them to suit our needs.

For our SQL GUI, we’re using an existing MySQL database, representing an employee time management system.

We’re going to create one set of screens so that users with a role called **Employees** will be able to perform CRUD actions, allowing them to create and view their own timesheets.

Our second cohort, called **Query Editors**, will be able to write, send, test, and save custom database queries, as well as viewing a complete history of queries that have previously been sent from our GUI.

Here’s what our CRUD screens look like.

{{< vimeo id="1027314576" title="SQL GUI" >}}

And our query editor.

{{< vimeo id="1027314554" title="SQL GUI" >}}

## How to build a SQL GUI in 5 Steps

Let’s dive into creating our SQL GUI. If you haven’t already, sign up for a free Budibase account to build as many apps as you like, for free. 

{{< cta >}}

We’ll provide the queries you need to create the database tables we’re using in our example a little bit later.

### 1. Configuring our database connection

We’re starting by creating a new Budibase application, which we’ll simply call SQL GUI.

Once we’ve created our app, the first thing we’re prompted to do is select a data source. Budibase offers unrivaled connectivity for external databases, including dedicated connectors for a huge range of relational databases, NoSQL tools, APIs, and custom sources.

Today, we’re choosing MySQL, although the same principles apply to building a GUI for any SQL database.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_1_bycdgu.webp "SQL GUI")

When we choose MySQL, we’ll then be prompted to add our configuration details using a modal form.

![Database Credentials](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_2_tlx55o.webp "Database credentials")

Once we’ve successfully connected to our database, we can choose which of its tables we’d like to **fetch**. This pulls the tables we select into Budibase. We can then view and edit them in our Data section or use them to build UIs and automations.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_3_cdizg6.webp "Fetch Tables")

Our database contains two tables called **employees** and **submissions**. The employees table stores attributes called first_name and last_name, as well as a unique ID.

The submissions table stores our timesheets. This includes the submitters information, attributes for the date and time of the submission, a comments section, a unique ID, and an attribute called employee_id which corresponds to a row in the employees table.

Here’s what these look like in Budibase’s Data section. First, employees:

![Employees Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_4_gexcwe.webp "Employees Table")

And, second, submissions:

![Submissions Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_5_efge77.webp "Submissions Table")

If you’d like to create lookalike tables so you can build along with our tutorial, you can use the following queries. 

This one creates the employees table:

This query creates the submissions table:

{{< highlight sql "linenos=inline" >}}

-- Create the table

CREATE TABLE timesheet (

  submission_id INT,

  email VARCHAR(255),

  week_beginning DATE,

  day_of_week VARCHAR(10),

  in_hours INT,

  in_mins INT,

  out_hours INT,

  out_mins INT,

  comments VARCHAR(255),

  employee_id INT

);

-- Insert the data

INSERT INTO timesheet (

  submission_id, email, week_beginning, day_of_week, in_hours, in_mins, out_hours, out_mins, comments, employee_id

) VALUES

(32, 'jane.smith@example.com', '2024-01-29', 'Monday', 8, 30, 17, 0, 'Client meetings', 2),

(33, 'jane.smith@example.com', '2024-01-29', 'Tuesday', 9, 0, 17, 30, 'Project work', 2),

(34, 'jane.smith@example.com', '2024-01-29', 'Wednesday', 8, 30, 16, 30, 'Meeting with team', 2),

(35, 'jane.smith@example.com', '2024-01-29', 'Thursday', 9, 0, 17, 0, 'Coding tasks', 2),

(36, 'jane.smith@example.com', '2024-01-29', 'Friday', 8, 0, 16, 0, 'Client presentation', 2),

(37, 'john.doe@example.com', '2024-01-29', 'Monday', 10, 0, 18, 0, 'Analyzing data', 1),

(38, 'john.doe@example.com', '2024-01-29', 'Wednesday', 9, 0, 16, 0, 'Database design', 1),

(39, 'john.doe@example.com', '2024-01-29', 'Friday', 8, 30, 15, 30, 'Code review', 1);

{{< /highlight >}}

This one creates our employees table:

{{< highlight sql "linenos=inline" >}}

-- Create the employees table

CREATE TABLE employees (

  id INT,

  first_name VARCHAR(50),

  last_name VARCHAR(50)

);

-- Insert the data

INSERT INTO employees (id, first_name, last_name) VALUES

(1, 'John', 'Doe'),

(2, 'Jane', 'Smith');

{{< /highlight >}}

### 2. Building our CRUD tools within our SQL GUI

Now that we’ve got our table in place, we can start creating our GUI. As we said earlier, we’re going to show off two distinct methods for creating interfaces to interact with SQL data in Budibase.

First, we’re going to create some simple CRUD interfaces. Later, we’ll add UIs to write custom database queries.

This is going to allow users with the **Employee** role to create new records on our submissions table - or view and edit their own previous submissions.

In Budibase, we can start by configuring our data, including who can access it and which actions they can perform. Then, we can use this to autogenerate secure interfaces at the press of a button.

Let’s see how this works.

#### Add a user column

Before we create our interfaces, we’re going to make a few tweaks within the Data section.

The first thing we need to do is set our tables up so that we can associate individual rows in each one with specific Budibase users.

To do this, we’re going to add a **single user column** to both tables. This is a special data type that creates a relationship with Budibase’s internal users table. We also offer a **multi-user column** to assign a single row to multiple users.

Hit the plus icon to create a column on the employees table. We’ll select the single-user type and call our new column **bb_user**.

![BB User](https://res.cloudinary.com/daog6scxm/image/upload/v1730990316/cms/updated-sql-gui/GUI_6_obunia.webp "BB User")

We’ll then repeat this process for the submissions table, calling our user column **submitted_by**. This time, we’ll also select the option to **Default to Current User**. That way, the column will automatically be populated to the appropriate end-user when a row is created.

In our test data, we have two employees called John Doe and Jane Smith. For testing purposes, we’re going to link our own user account to John Doe’s rows in both tables.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990325/cms/updated-sql-gui/GUI_7_edevfh.webp "SQL GUI")

While we’re here, we’re also going to make one more tweak. Specifically, the employees table stores a text attribute called **comments**. 

We’re going to update this by changing it to the **long-form text** type. When we generate screens later, this will give us a larger text box within forms.

![Comments](https://res.cloudinary.com/daog6scxm/image/upload/v1730990330/cms/updated-sql-gui/GUI_8_pmuyt5.webp "Comments")

#### Set up relationships

Next, we can configure the relationship between our two tables in Budibase’s data section. Recall that our submissions table already has an attribute called *employee_id* that corresponds to the unique ID in the employees table.

We simply need to define this in Budibase. From the employees table, hit **Define Relationship**.

![Define Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1730990334/cms/updated-sql-gui/GUI_9_o9ysus.webp "Define Relationship")

This opens a modal form where we can set up our relationship. We’re creating a **one-to-many** link. Our **primary key** will be the **ID** attribute in our employees table. The foreign key is the **employee_id** attribute in our submissions table.

![Define Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_10_obojvk.webp "Define Relationship")

#### Create a filtered view

Next, we’re going to use Views to set up our data access rules. Views are used to create subsets of our data for specific purposes and user groups. So, we can set these up, configure them for a particular role, and then generate screens or automations.

That way, we can give users the exact level of data exposure they need to perform their required tasks.

From the submissions table, we’ll hit **Create a View**. We’ll call this **user_filtered**.

![Create a View](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_11_ynhugl.webp "Create a View")

We’ll set the **Access** for this to our **Employees** role.

We can also use filters within Views to control which rows users can view or edit. For our purposes, we want to create a filter so that end users can only access rows that are related to their entry in the internal users table.

We’ll start by hitting the **Filter** button to open the filtering modal.

![Add A filter](https://res.cloudinary.com/daog6scxm/image/upload/v1730990340/cms/updated-sql-gui/GUI_12_q2frmi.webp "Add A filter")

Here, we’re going to create a rule so that we’ll only include rules where submitted_by is equal to {{ Current User.globalId }}. We can select this from the Bindings menu by hitting the lightning bolt icon.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1730990340/cms/updated-sql-gui/GUI_13_yruzba.webp "Filter")

Here’s what our completed view will look like.

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1730990316/cms/updated-sql-gui/GUI_14_yd4mif.webp "View")

#### Generate CRUD UIs

With our data set up, we can start building our UIs. In Budibase, we can autogenerate our app screens from the Data section. Start by hitting **Generate App Screen** under **Screens**.

![Generate Screens](https://res.cloudinary.com/daog6scxm/image/upload/v1730990325/cms/updated-sql-gui/GUI_15_mmm4ct.webp "Generate Screens")

Then, we can choose between a Form or a Table layout. We’re choosing Table.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990329/cms/updated-sql-gui/GUI_16_uvlhwx.webp "Table")

Then, we’ll be presented with a few options here. All of these are centered around a table UI, with different ways to present our create and update forms.

We’re going to use side panels.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990333/cms/updated-sql-gui/GUI_17_hbkede.webp "Table")

Here’s what our screen looks like.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990336/cms/updated-sql-gui/GUI_18_f9jjh0.webp "SQL GUI")

This is fully functional straight out of the box, but we’re going to make a few adjustments to better suit our purposes.

Firstly, we don’t need our users to be able to edit their submissions, so we’re going to make this form read-only by selecting the View option. We’ll also update the Title to reflect this.

![CRUD UI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_19_a3fvng.webp "CRUD UI")

Next, when a user submits a timesheet, we want to automatically populate certain data without them having to fill them in manually.

We’ll start by deselecting the employee field in our form.

![Create Form](https://res.cloudinary.com/daog6scxm/image/upload/v1730990340/cms/updated-sql-gui/GUI_20_pa4zwm.webp "Create Form")

We can do this within the Actions drawer for our **Save** button under the **Save Row** action. Here, we have the option to add values to our saved row that are populated any time we hit the Save button.

We’ll start by adding employee_id.

![Employee ID](https://res.cloudinary.com/daog6scxm/image/upload/v1730990338/cms/updated-sql-gui/GUI_21_to9wqf.webp "Employee ID")

However, our form isn’t currently exposed to the information we need to populate a value for our employee_id field. This should correspond to the ID of the row in the employees table that the current user is linked to.

To access this, we’ll need to add a **Data Provider** component to our app screen. We’ll set the data field for this to our employees table.

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1730990316/cms/updated-sql-gui/GUI_22_qlp0eq.webp "Data Provider")

Then, we’ll give it a filtering expression so that it only returns the employees row that’s linked to the current user, where bb_user is equal to {{ Current User.globalId }}.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1730990323/cms/updated-sql-gui/GUI_23_hkd94d.webp "Save Row")

Now, back under our Save Row button, we can access this with the binding {{ Employee Data Provider.Rows.0.id }}.

![Binding](https://res.cloudinary.com/daog6scxm/image/upload/v1730990328/cms/updated-sql-gui/GUI_24_u7mpx2.webp "Binding")

We can then try and save a row to test this out. And that’s it for now. We’ll make a few design tweaks to our UI a little later, but in the meantime, let’s move on to our other method for creating a SQL GUI.

### 3. Building our query editor

Almost all GUIs also enable users to write and send custom queries from an interface. 

As we said earlier, the second capability we’re going to build will enable users with a higher level of access to write, test, and save custom queries to our database.

#### Adding a prepared statement

Depending on which type of SQL database we’re using, the next couple of steps will be a little bit different. 

For example, in some databases, we can handle dynamic SQL by wrapping them in an EXECUTE IMMEDIATE statement. However, MySQL doesn’t support this.

So, in order to send dynamic queries from our app front-end, we’ll need to create and execute a prepared statement to replicate EXECUTE IMMEDIATE.

However, it’s important to note that this approach comes along with security implications relating to SQL injection. Because of this, we’re using a prepared statement that only allows users to send single SELECT queries, disallowing more dangerous keywords.

For example, this could be used by our data team to return simple insights from our database, or we could use this to test queries on a dummy database.

If you want to do something similar, you’ll need to determine appropriate security measures for your needs. Alternatively, you could rely on the existing, already secure query testing and saving tools in Budibase’s Data section for more complex use cases.

The prepared statement we’re relying on is:

{{< highlight sql "linenos=inline" >}}

CREATE PROCEDURE execute_immediate(IN query TEXT)

BEGIN

  -- Trim any trailing semicolon

  SET query = TRIM(TRAILING ';' FROM query);

  -- Check if the query contains only a single SELECT statement (case-insensitive)

  IF UPPER(LEFT(query, 6)) = 'SELECT' 

​    AND INSTR(UPPER(query), 'INSERT') = 0

​    AND INSTR(UPPER(query), 'UPDATE') = 0

​    AND INSTR(UPPER(query), 'DELETE') = 0

​    AND INSTR(UPPER(query), 'DROP') = 0

​    AND INSTR(UPPER(query), 'ALTER') = 0

​    AND INSTR(UPPER(query), 'CREATE') = 0

  THEN

​    -- Execute the query if it's a valid SELECT statement

​    SET @sql = query;

​    PREPARE stmt FROM @sql;

​    EXECUTE stmt;

​    DEALLOCATE PREPARE stmt;

  ELSE

​    -- Raise an error if the query is not a valid SELECT-only statement

​    SIGNAL SQLSTATE '45000'

​    SET MESSAGE_TEXT = 'Only SELECT statements are allowed.';

  END IF;

END;

{{< /highlight >}}

We can create this by sending it under the Query tab of our MySQL connection in Budibase’s data section. We can also save this for future reference if we like.

![Execute Immediate](https://res.cloudinary.com/daog6scxm/image/upload/v1730990332/cms/updated-sql-gui/GUI_25_su2flx.webp "Execute Immediate")

#### Create a custom query

Next, we need to create a custom query that will execute our prepared statement, passing a user-defined input to it as an argument.

We’ll start by creating a query called Execute Immediate, setting its function to **Read** and access to **Query Editor**. We’re also setting the **Access** to **App Admin**, so only users with permissions to manage our Budibase app can send this.

![Query Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1730990335/cms/updated-sql-gui/GUI_26_bvovfm.webp "Query Editor")

We’ll then need to configure this to accept a user input. To do this, we’ll add a binding and call it **query**. We can set a default value for testing purposes. We’ll use:

{{< highlight sql "linenos=inline" >}}

SELECT * FROM employees;

{{< /highlight >}}

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_27_vljnlp.webp "SQL GUI")

Then, we’ll call our stored procedure with this binding, using:

{{< highlight sql "linenos=inline" >}}

CALL execute_immediate( {{ query }} );

{{< /highlight >}}

![Execute](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_28_fpjvfx.webp "Execute")

We can then run this.

![Run Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990337/cms/updated-sql-gui/GUI_29_qwaugn.webp "Run Query")

This returns more data than we need. We only want the first part of the response, with the actual returned values from the query. So, we’ll add the following JavaScript transformer.

{{< highlight javascript "linenos=inline" >}}

return data[0];

{{< /highlight >}}

![Transformer](https://res.cloudinary.com/daog6scxm/image/upload/v1730990315/cms/updated-sql-gui/GUI_30_jr2hpj.webp "Transformer")

When we’re happy, we can hit save.

#### Add internal tables

The core functionality of our GUI will be to enable users to write and save queries from the app UI, as well as creating a record of queries that have previously been executed.

To achieve this, we’re going to create two tables in Budibase’s internal database. One will be used to handle saved queries, and the other will record our GUI’s history. Both of these will have their **Access** set to **App Admin**.

We’ll start hitting the plus icon to add a new data source, this time selecting the option for an internal table.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1730990323/cms/updated-sql-gui/GUI_31_mfjyzg.webp "Data Sources")

First, we’ll add a table called **queries**. This will store the queries that our users save. We’re going to add three columns with the following names and data types:

- name - Text,
- query - Long-Form Text,
- response - JSON.

Here’s how this should look.

![Empty Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990328/cms/updated-sql-gui/GUI_32_g4iujh.webp "Empty Table")

We’ll then repeat this process to create a second table called **history**, including setting the same access rules.

This time, our columns are:

- date - Date,
- query - Long-Form Text,
- response - JSON.

![Queries](https://res.cloudinary.com/daog6scxm/image/upload/v1730990332/cms/updated-sql-gui/GUI_33_cmbuqe.webp "Queries")

#### Generate CRUD UIs

Now, we can start building our query editor. Like before, we’re going to begin by autogenerating Table screens, this time, for the **queries** table. However, this time, we’re choosing the option for host our Create and Edit forms on separate screens.

![Generate Screens](https://res.cloudinary.com/daog6scxm/image/upload/v1730990335/cms/updated-sql-gui/GUI_34_xiujnv.webp "Generate Screens")

Our query editor is going to be based around the **Create** form that’s output. Here’s what this looks like out of the box.

![Create Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1730990334/cms/updated-sql-gui/GUI_35_bsk70e.webp "Crete Screen")

We’re going to make some important changes to this so that users can write and send queries, view the response, and, if they wish, save them.

The first thing we’ll do is deselect the **response** field, as we don’t want to accept user inputs for this.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990334/cms/updated-sql-gui/GUI_36_x8q8pd.webp "SQL GUI")

Currently, our form has a single button - Save. We’re going to change the **Style** of this to **Secondary** and then add a second button next to it. We’ll set the **Style** of this to **Action** and the **Text** to **Run**.

![Query Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1730990334/cms/updated-sql-gui/GUI_37_q7oe2k.webp "Query Editor")

#### Sending queries from the app UI

To enable users to send the query they’ve written, we’ll use **Actions** menu for our new button. 

The first action we’ll add here is called **Execute Query**. We’re going to point this at our **Execute Immediately** query that we created at the beginning of this section.

![Button Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1730990315/cms/updated-sql-gui/GUI_38_ndgirg.webp "Button Actions")

Here, we can populate our **query** binding that we created in the Data section. We could use {{ Create row form block.queries.query }} to insert the user input exactly as it’s been provided. However, this wouldn’t be ideal from a UX perspective.

More specifically, users will probably want to place more complex statements across multiple lines. For example, if they’re using a WHERE clause in their SELECT statement. This means errors could occur with whitespace.

To enable this, we’ll use a little bit of custom JavaScript. Start by opening the bindings menu and then selecting the JavaScript tab.

![JavaScript Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1730990323/cms/updated-sql-gui/GUI_39_flh4t6.webp "JavaScript Editor")

The code we’re going to use is:

{{< highlight javascript "linenos=inline" >}}

let str = String($("Create row form block.Fields.query"));

// Remove all newline characters (both \n and \r\n)

let cleanedStr = str.replace(/(\r\n|\n|\r)/g, ' ');

return cleanedStr;

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1730990328/cms/updated-sql-gui/GUI_40_vgaqsy.webp "JavaScript")

#### Setting up testing and handling responses

Now, users can send a custom query from the front-end. The next thing we need to do is provide a user experience for reviewing the response of the query.

We’re going to display this in a table UI.

First, though, we need to save our response. We don’t want to save this to our **history** table just yet, though. 

For now, we’re going to save it as a temporary **app state**.

Within our **Run** button’s **Actions** menu, we’ll add a second step. This time, we’re choosing **Update State**. Here, we’ll create a new state called **response**.

![Update State](https://res.cloudinary.com/daog6scxm/image/upload/v1730990331/cms/updated-sql-gui/GUI_41_j2nk1k.webp "Update state")

We can access the output of the previous action within the bindings menu. We’re going to populate a value for our state using the following JavaScript expression to format the **data** object from our response as JSON:

{{< highlight javascript "linenos=inline" >}}

const jsonObj = $("Action 1.Query result")

return jsonObj.data

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1730990331/cms/updated-sql-gui/GUI_42_he42rc.webp "JavaScript")

Next, we’re going to add a **Table** component beneath our existing form UI. We’ve set the **Data** for this to **JSON/CSV**.

![Tale](https://res.cloudinary.com/daog6scxm/image/upload/v1730990331/cms/updated-sql-gui/GUI_43_vx0hj5.webp "Table")

We’ll then use the **cog** icon to open our bindings menu and set the data source to {{ State.response }}.

![JSON](https://res.cloudinary.com/daog6scxm/image/upload/v1730990330/cms/updated-sql-gui/GUI_44_fsl2fb.webp "JSON")

Now, if we preview our app and run a query, the response will be loaded into our table.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1730990330/cms/updated-sql-gui/GUI_45_tqop6i.webp "Preview")

However, we only want our **Table** to be displayed when there is actually data to populate it.

We can achieve this using **Conditions**. These enable us to define rules to hide, display, or update the native settings of Budibase components.

We’ll start by opening the **Conditions** drawer for our **Table** component.

![Conditions](https://res.cloudinary.com/daog6scxm/image/upload/v1730990314/cms/updated-sql-gui/GUI_46_mr0ll3.webp "Conditions")

Here, we’ll create a row so that it’s only shown if {{ State.response }} is **not empty**.

![Conditions](https://res.cloudinary.com/daog6scxm/image/upload/v1730990323/cms/updated-sql-gui/GUI_47_w6bgpw.webp "Conditions")

Now, our UI preview will look like this until a query is submitted.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1730990327/cms/updated-sql-gui/GUI_48_xvvjzy.webp "Preview")

#### Recording query history

Next, we want to add functionality so that each time a query is run, a record is created in our **history** table.

We’ll start by adding a **Save Row** action to our **Run** button. Here, we can specify the values that we want to save without our users having to specify them.

We’ll add all three columns - **date, query,** and **response.**

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1730990327/cms/updated-sql-gui/GUI_49_di1vhk.webp "Save Row")

We’re going to set the **data** column to the current date and time. We can do this using the following JavaScript.

{{< highlight javascript "linenos=inline" >}}

var date = new Date();

return date;

{{< /highlight >}}

For our **query** field, we’re going to use the same JavaScript expression we used earlier. 

Lastly, we’ll bind our result field to {{ Action 1.Query result }}.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1730990327/cms/updated-sql-gui/GUI_50_ihgjj0.webp "Save Row")

We can then run a test of this in our app preview.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990326/cms/updated-sql-gui/GUI_51_ynhnt2.webp "SQL GUI")

And we can head to the Data section to confirm it’s worked.

![Saved Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990325/cms/updated-sql-gui/GUI_52_hsamnj.webp "Saved Query")

#### Saving queries

The last thing we need to do with our query editor screen is enable users to save queries. Luckily, with our existing **Save** button, we’re already most of the way there.

Currently, this is set up to save the user-provided **name** and **query** values.

We’ll need to add a couple of steps to include the following actions in our flow:

- Run the provided query so that we can populate the **result** field.
- Save an appropriate row to the history table.

First, though, we’re going to overwrite the user-submitted **query** value with the **JavaScript** version, as we have seen a couple of times already.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1730990325/cms/updated-sql-gui/GUI_53_aiy2sn.webp "Save Row")

Next, we’ll add an **Execute Query** action, second in the existing chain, between **Validate Form** and **Save Row**. This will match the exact configuration we used for the **Execute Query** action on our **Run** button.

![Execute Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990314/cms/updated-sql-gui/GUI_54_dpl13c.webp "Execute Query")

Then, we’ll head to the **Save Row** action and bind our **result** value to the output of our **Execute Query** step, using {{ Action 2.Query result }}.

Here’s what we have so far:

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1730990320/cms/updated-sql-gui/GUI_55_nfcze5.webp "Save Row")

Lastly, we’re going to add a second **Save Row** action, this time pointing it at our **history** table.

We’ll use the exact same configuration as we did for our other button, setting values for the **date, query,** and **result** columns. We’ll also remove the existing **Navigate To** action.

Here’s our final chain of action.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990323/cms/updated-sql-gui/GUI_56_tn3n50.webp "SQL GUI")

#### Adding a history screens

Finally, we want to add a screen for users to view our query history. We’ll repeat the exact process as before to generate a CRUD UI, pointing it at our **history** table and choosing the **side panels** option.

![History Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1730990322/cms/updated-sql-gui/GUI_57_aykog4.webp "History Screen")

However, we want to make this read-only. We’ll start by deleting the Side-Panel for our Create form, as well as the button that’s used to access this.

![History Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1730990321/cms/updated-sql-gui/GUI_58_zjdrtd.webp "History Screen")

Then, we’re going to select the **View** option on our remaining form, so users can’t edit saved rows. We’ll also update the **Title** to reflect this.

![Query HIstory](https://res.cloudinary.com/daog6scxm/image/upload/v1730990320/cms/updated-sql-gui/GUI_59_a3ensh.webp "Query HIstory")

### 4. Adding automations

We want to give our users the ability to re-submit saved queries at the press of a button. The easiest way to do this is using a **Row Action**. This is an automation relating to a table row that can be trigger by a user-action.

#### Generate a Row Action

From the Data section, we’ll head to **Row Actions** for **queries** and hit **Create new row action**.

![Row Action](https://res.cloudinary.com/daog6scxm/image/upload/v1730990320/cms/updated-sql-gui/GUI_60_yplsjq.webp "Row Action")

We’re then prompted to give this a name. We’ll call ours **run_saved_query**.

![Run Saved Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990320/cms/updated-sql-gui/GUI_61_aczke5.webp "Run Saved Query")

This will then take us to the Automation section, with a trigger set for our new rule.

![Run Saved Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990314/cms/updated-sql-gui/GUI_62_xzc2va.webp "Run Saved Query")

#### Building our automation

We want to do the following:

- Send our query.
- Save an appropriate row to the history table.

We’ll begin by adding an automation step called **query rows**, which we’ll point at our **queries** table.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990319/cms/updated-sql-gui/GUI_63_qffucj.webp "SQL GUI")

We’ll then add a filter to this so that its **_id** equals our trigger output, using {{ trigger.id }}.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1730990319/cms/updated-sql-gui/GUI_64_jsq8a7.webp "Filter")

After this, we’ll add an **external data connector** action, which will fire our **Execute Immediate** query. We’re binding the **query** field to the output of our previous step, using {{ steps.Query rows.rows.0.query }}.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1730990319/cms/updated-sql-gui/GUI_65_qfthyy.webp "Automation")

Lastly, we’ll add a **create row** action, which we’ll point at our history table. We’ll bind the **data** field to the same JavaScript we used earlier to get the current date:

{{< highlight javascript "linenos=inline" >}}

var date = new Date();

return date

{{< /highlight >}}

For the **query** value, we’ll use {{ steps.Query rows.rows.0.query }}.

And we’ll use the following JavaScript to clean and format our response:

{{< highlight javascript "linenos=inline" >}}

// Initialize an empty array inside an object with a "data" key

let myObj = {

 data: []

};

// Store the response in a variable (assuming it's an array of objects)

const responseArray = $("steps.External Data Connector.response");

// Iterate over the array and push each object into the "data" array

for (let i = 0; i < responseArray.length; i++) {

 const currentRow = responseArray[i];

 myObj.data.push(currentRow); // Add each object into the "data" array

}

// Return the final object

return myObj;

{{< /highlight >}}

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1730990318/cms/updated-sql-gui/GUI_66_jtj0s4.webp "Automation")

We can then test this to confirm that it works as we expected.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1730990317/cms/updated-sql-gui/GUI_67_skl0vr.webp "Autonation")

#### Updating our saved query screens

Next, we’ll make a few updates to our saved query UIs.

The first thing we’ll do is add a button to trigger our row action.

![Row Action Button](https://res.cloudinary.com/daog6scxm/image/upload/v1730990317/cms/updated-sql-gui/GUI_68_vkv5tw.webp "Row Action BUtton")

Next, we want to make a few adjustments to the screen for editing saved queries. We’ll start by deleting the existing **form block**.

![Saved Query](https://res.cloudinary.com/daog6scxm/image/upload/v1730990317/cms/updated-sql-gui/GUI_69_xph935.webp "Saved Query")

We’ll then copy and paste in the query editor form we built earlier, changing its **type** to **update** and setting the **Row ID** to {{ URL.id }}. All of our button actions will still work correctly.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990313/cms/updated-sql-gui/GUI_70_ryywif.webp "SQL GUI")

We’ll then paste our results table from the query editor screen beneath this, allowing users to view the responses of queries they’ve resent.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1730990313/cms/updated-sql-gui/GUI_71_kxmh2h.webp "Table")

### 5. Design tweaks and publishing

Functionally, that’s our SQL GUI done. However, we’re going to make a few extra adjustments to the design of our app.

#### UX changes

We’ve relied heavily on autogenerated UIs. These are part of what makes Budiabse such a fast, easy option for shipping internal tools on top of your data. However, by default, all UI fields use the column names, as they’re stored in our database.

This isn’t always the best user experience. We’re going to go through all of our tables and forms, updating our display texts with proper capitalization and spacing.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990313/cms/updated-sql-gui/GUI_72_cbcwim.webp "SQL GUI")

Then, under **screen** and **theme**, we’re going to choose **Midnight**.

![SQL GUI](https://res.cloudinary.com/daog6scxm/image/upload/v1730990313/cms/updated-sql-gui/GUI_73_l9klvy.webp "SQL GUI")

While we’re here, we’ll also update our **button colors** to better match our internal brand.

![Button Color](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_74_kovhs5.webp "Button Color")

#### Pushing our app live

When we’re ready to send our app to end-users, we can hit **Publish** to push it live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1730990312/cms/updated-sql-gui/GUI_75_cwpqnq.webp "Publish")

Here’s a reminder of what our finished SQL GUI looks like.

{{< vimeo id="1027314554" title="SQL GUI" >}}

## Turn data into action with Budibase

Budibase is the secure, fast way to build custom tools on top of any data. With dedicated connectors for a huge range of RDBMSs, NoSQL tools, APIs, and spreadsheets, it's the perfect solution for building SQL GUIs, internal tools, approval workflows, and more.

Once you've connected your data you can configure access roles, autogenerate UIs, build powerful automations, all on our cloud-based or self-hostable platform.

Check out our [product overview](https://budibase.com/product/) to learn more.