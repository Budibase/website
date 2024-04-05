+++
author = "Ronan McQuillan"
date = 2024-04-05
description = "Learn how to build an employee portal with Budibase."
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1712324789/cms/employee-portal/Employee_Portal_85_ci4eda.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build an Employee Portal"
+++

Employee portals are some of the most ubiquitous internal tools around. Teams of all sizes in every industry need a secure, efficient way to share information, handle requests, and deliver internal services to employees.

Portals offer a unified, centralized platform for interacting with data within internal processes.

Today, we’re checking out how Budibase empowers teams to build sleek, professional portals on top of just about any data source. With our open-source, low-code platform, you can output fully functional solutions in a fraction of the time.

By the end of this tutorial, you’ll have a working employee portal that you can deploy to the cloud or on your own infrastructure.

But, before we jump in…

## What is an employee portal?

At the broadest level, employee portals are gated web apps where internal users can access internal services in a single, convenient location.

However, the specific data, features, and functionality provided can vary widely from one company to the next.

For example, some portals may be focused on a particular department or vertical - like IT or HR. Others might have a wider scope, dealing with internal processes across the business.

Generally speaking, portals will also offer different capabilities and data exposure to different kinds of employees. For instance, enabling all colleagues to view company announcements, but only certain team-members to create them.

With that in mind…

## What are we building?

We’re building a simple employee portal to handle a series of related internal admin processes. This will include a basic employee directory, as well as handling vacation requests, peer feedback submissions, and company-wide announcements.

{{< vimeo id="931074515" title="Employee Portal" >}}

With Budibase, we could build this on top of just about any data source. Today, we’re using an existing PostgreSQL database. We’ll also provide all of the queries you need to create this for yourself so you can build it with us.

We’ll also be using Budibase’s built-in RBAC tools extensively to govern how different users will be able to interact with our employee portal.

Specifically, we’re building our portal around two distinct user roles. Basic users will be able to view colleagues’ details, request annual leave, view their previous leave requests, receive company announcements, and submit feedback on their peers.

Power users will then have access to a range of related admin functions, including carrying out CRUD actions and responding to requests.

Let’s jump in.

## How to build an employee portal in 6 steps

If you haven’t already, sign up for a free Budibase account to start building as many custom portals as you like.

{{< cta >}}

The first thing we need to do is create a new application. We can do this using a pre-built template or by importing an existing app dump, but today, we’re starting from scratch.

When we do this, we’ll be prompted to provide our app with a name and URL extension. We’re simply going to call ours Employee Portal.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324849/cms/employee-portal/Employee_Portal_1_hmhos7.webp "Employee Portal")

## 1. Setting up our data model

Once we’ve created our app, the next thing we need to do is set up a data source. Budibase offers dedicated connectors for querying relational databases, NoSQL tools, APIs, Google Sheets, and more - alongside our built-in low-code database.

When we connect to external data sources, Budibase acts as a proxy, querying your data without ever storing it.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1712324848/cms/employee-portal/Employee_Portal_2_n9vioy.webp "Data Sources")

As we said earlier, we’re using an existing Postgres database for our employee portal. We’ll then need to provide our credentials to connect to our database.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1712324847/cms/employee-portal/Employee_Portal_3_wgwacp.webp "Config")

Then, we can choose which of our database’s tables we’d like to fetch, making them queryable within Budibase.

Our database contains four tables. These are called announcements, employees, feedback, and leave_requests.

We’re fetching all four.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1712324846/cms/employee-portal/Employee_Portal_4_ddlvmk.webp "Fetch Tables")

We can edit our table’s schemas and stored values in Budibase’s Data section. 

![Database Table](https://res.cloudinary.com/daog6scxm/image/upload/v1712324845/cms/employee-portal/Employee_Portal_5_xx7iij.webp "Database Table")

But before we go any further, let’s get familiar with our data model and check out the queries you can use to replicate it.

The announcements table, which you can see above, contains attributes called publish_date, title, announcements_text, and announcement_id.

We can create it using the following query.

{{< highlight sql "linenos=inline" >}}

-- Create Announcements Table

CREATE TABLE Announcements (

  announcement_id SERIAL PRIMARY KEY,

  title VARCHAR(200),

  announcement_text TEXT,

  publish_date TIMESTAMP

);

-- Dummy data for Announcements table

INSERT INTO Announcements (title, announcement_text, publish_date)

VALUES 

  ('New Company Policy', 'Please review the updated company policy document.', '2024-05-10'),

  ('Team Meeting', 'There will be a mandatory team meeting on Friday at 10 AM.', '2024-06-01'),

  ('Employee Recognition', 'Congratulations to John Doe for winning Employee of the Month!', '2024-07-15'),

  ('Holiday Closure', 'The office will be closed on Monday for the holiday.', '2024-08-30'),

  ('Upcoming Training', 'Reminder: Training session on new software scheduled for next week.', '2024-09-20');

{{< /highlight >}}

Our employees table stored columns called first_name, last_name, email, department, position, and employee_id. 

We can create it using this query.

{{< highlight sql "linenos=inline" >}}

-- Create Employees Table

CREATE TABLE Employees (

  employee_id SERIAL PRIMARY KEY,

  first_name VARCHAR(50),

  last_name VARCHAR(50),

  email VARCHAR(100),

  department VARCHAR(100),

  position VARCHAR(100)

);

-- Dummy data for Employees table

INSERT INTO Employees (first_name, last_name, email, department, position)

VALUES 

  ('John', 'Doe', 'john.doe@example.com', 'Human Resources', 'HR Manager'),

  ('Jane', 'Smith', 'jane.smith@example.com', 'Finance', 'Financial Analyst'),

  ('Michael', 'Johnson', 'michael.johnson@example.com', 'Marketing', 'Marketing Specialist'),

  ('Emily', 'Williams', 'emily.williams@example.com', 'Sales', 'Sales Representative'),

  ('David', 'Brown', 'david.brown@example.com', 'IT', 'Software Developer');

{{< /highlight >}}

![Employees](https://res.cloudinary.com/daog6scxm/image/upload/v1712324845/cms/employee-portal/Employee_Portal_6_v6itlp.webp "Employees")

The feedback table contains attributes called submission_date, feedback_message, submitter_id, employee_id, and feedback_id. The submitter_id and employee_id columns correspond to rows in the employees table.

Here’s the query we can use to create this.

{{< highlight sql "linenos=inline" >}}

-- Create Feedback Table

CREATE TABLE Feedback (

  feedback_id SERIAL PRIMARY KEY,

  employee_id INT,

  submitter_id INT,

  submission_date TIMESTAMP,

  feedback_message TEXT,

  FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)

);

-- Dummy data for Feedback table

INSERT INTO Feedback (employee_id, submitter_id, submission_date, feedback_message)

VALUES 

  (1, 2, CURRENT_TIMESTAMP, 'Great job on the recent project!'),

  (3, 4, CURRENT_TIMESTAMP, 'Could improve communication within the team.'),

  (2, 3, CURRENT_TIMESTAMP, 'Excellent presentation skills.'),

  (4, 1, CURRENT_TIMESTAMP, 'Punctuality could be better.'),

  (5, 2, CURRENT_TIMESTAMP, 'Outstanding teamwork!');

{{< /highlight >}}

![Feedback](https://res.cloudinary.com/daog6scxm/image/upload/v1712324845/cms/employee-portal/Employee_Portal_7_db8vhq.webp "Feedback")

Lastly, the leave_requests table stores attributes called start_date, end_date, status, reason, employee_id, and feedback_id. The employee_id column corresponds to a row in the employees table.

{{< highlight sql "linenos=inline" >}}

-- Create leave_requests Table

CREATE TABLE leave_requests (

  request_id SERIAL PRIMARY KEY,

  employee_id INT,

  start_date DATE,

  end_date DATE,

  reason TEXT,

  status VARCHAR(20),

  FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)

);

-- Dummy data for leave_requests table

INSERT INTO leave_request (employee_id, start_date, end_date, reason, status)

VALUES 

  (1, '2024-05-01', '2024-05-03', 'Vacation', 'Pending'),

  (2, '2024-06-10', '2024-06-15', 'Family Leave', 'Approved'),

  (3, '2024-07-05', '2024-07-08', 'Sick Leave', 'Pending'),

  (4, '2024-08-20', '2024-08-25', 'Personal Leave', 'Approved'),

  (5, '2024-09-15', '2024-09-18', 'Vacation', 'Pending');

{{< /highlight >}}

![leave_requests](https://res.cloudinary.com/daog6scxm/image/upload/v1712324843/cms/employee-portal/Employee_Portal_8_zpv0fr.webp "leave_requests")

We’re going to make a few adjustments to our data model before we start creating our employee portal’s UIs.

First of all, we want to link our employees table to Budibase’s internal users table. We can do this by adding a new column with the User data type using the plus icon.

We’ll call this bb_user.

![User](https://res.cloudinary.com/daog6scxm/image/upload/v1712324842/cms/employee-portal/Employee_Portal_9_vv03pp.webp "User")

Then, we’ll assign ourselves to a row for testing purposes.

![User](https://res.cloudinary.com/daog6scxm/image/upload/v1712324842/cms/employee-portal/Employee_Portal_10_filr3n.webp "User")

Next, there are a couple of text attributes in our tables that are likely to need space for longer inputs. These are announcement_text in the announcements table and feedback_message in the feedback table.

We’ll edit each of these, changing their Type from Text to Long-Form Text. That way, appropriate fields will be provided automatically when we generate our UIs a little later.

![Long Form Text](https://res.cloudinary.com/daog6scxm/image/upload/v1712324841/cms/employee-portal/Employee_Portal_11_onmqm3.webp "Long Form Text")

Lastly, we need to set up the relationships between our tables within Budibase. We can do this by hitting Define Relationships on any given table.

First, we’ll join many rows in the leave_requests table to one entry in the employee’s table, using the employee_id table in each.

![Relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1712324840/cms/employee-portal/Employee_Portal_12_i7aakw.webp "Relationships")

Then, from the feedback table, we need to define two relationships to the employees table - one for the person receiving the feedback and another for the one submitting it.

Once again, we’ll start by joining many rows in the feedback table to many rows in the employees table on the employee_id attribute.

![Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1712324840/cms/employee-portal/Employee_Portal_13_iyfg4h.webp "Relationship")

Then, we’ll do the same thing again, only this time we’ll use the submitter_id attribute as our primary key and the employee_id as our foreign key. We’ll call the new columns in our tables submitted_feedback and submitter_employee.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324839/cms/employee-portal/Employee_Portal_14_le4men.webp "Employee Portal")

And that’s our data layer ready to go.

## 2. Creating a directory

Now, we can start building our employee portal’s interfaces. Our first task is to create a basic employee directory.

We’ll begin by heading to the Design tab in Budibase. 

Here, we’re offered several options for adding our first screen, including starting from scratch or using an autogenerated layout. 

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1712324838/cms/employee-portal/Employee_Portal_16_xf0gs2.webp "New Screen")

For our first screen, we’re going to use the Table layout with details side panels. This will autogenerate a working CRUD UI based on internal or SQL database tables.

When we choose this option, we’re prompted to choose which data tables we want to generate screens for. 

For now, we’ll only select the employees table.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1712324837/cms/employee-portal/Employee_Portal_17_e3xaa2.webp "Table")

We’re then asked to choose a minimum role that we’ll require to access this screen. This is going to be the primary screen for our on-the-ground employees - so we’re leaving this set to the default option of Basic.

![Role](https://res.cloudinary.com/daog6scxm/image/upload/v1712324836/cms/employee-portal/Employee_Portal_18_lyhmro.webp "Role")

Our new screen is centered around an interactive table UI. 

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324836/cms/employee-portal/Employee_Portal_19_ij60j7.webp "Employee Portal")

Currently, end users can access forms for creating or updating rows, either by clicking the Create Row button or any entry within our table.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324835/cms/employee-portal/Employee_Portal_20_ixe7l4.webp "Form")

We’re going to make a few changes to this to better suit our needs. Specifically, we’re going to remove CREATE and UPDATE access for our Basic users, as well as limiting the specific attributes they’re exposed to from our employees table.

We’ll start by tidying up our table itself.

First, we want to remove any columns that our Basic users don’t need to see. Using the sliders on the right-hand side, we’re going to deselect everything except email, first_name, last_name, position, department, and employee_id.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1712324835/cms/employee-portal/Employee_Portal_21_cyc6fr.webp "Columns")

Then, we’re going to use the Label setting for each of our columns to replace their display texts with something more human-readable.

![Label](https://res.cloudinary.com/daog6scxm/image/upload/v1712324833/cms/employee-portal/Employee_Portal_22_mggmj5.webp "Label")

Similarly, we’ll also capitalize our screen’s title.

![Title](https://res.cloudinary.com/daog6scxm/image/upload/v1712324833/cms/employee-portal/Employee_Portal_23_vfbshd.webp "Title")

Next, we can start making our forms more appropriate for our requirements. Basic users don’t need to create new rows in the employees table. So, we’ll delete our Create Row button and the corresponding Side Panel component.

![Delete](https://res.cloudinary.com/daog6scxm/image/upload/v1712324831/cms/employee-portal/Employee_Portal_24_y1nghr.webp "Delete")

Then, we’ll select our remaining form. We’re going to use this to enable users to view each respective row, whereas, at present, it can be used to edit the data.

![Edit Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324830/cms/employee-portal/Employee_Portal_25_xswajv.webp "Edit Form")

Our form has a setting called Type, which we’re going to change to View, making it read-only.

![Read Only](https://res.cloudinary.com/daog6scxm/image/upload/v1712324830/cms/employee-portal/Employee_Portal_26_doizcn.webp "Read Only")

Then, we’re going to remove the same form fields as we did earlier - bb_user, leave_requests, feedback, and submitted_feedback - as these aren’t values we want to expose our Basic users to. 

We’re also updating the Label attributes for our remaining fields.

![Labels](https://res.cloudinary.com/daog6scxm/image/upload/v1712324829/cms/employee-portal/Employee_Portal_27_p2xs8j.webp "Labels")

Lastly, we’ll give our form a more descriptive title.

![Title](https://res.cloudinary.com/daog6scxm/image/upload/v1712324828/cms/employee-portal/Employee_Portal_28_hwu9ep.webp "Title")

And that’s our directory completed.

## 3. Adding a feedback form

Next, we want to give our users the option to submit feedback on any of their colleagues.

We want to serve this in a side panel, too. So, we’ll start by adding a Side Panel component using the plus icon. 

We’ve called this Feedback Side Panel for clarity’s sake.

![Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1712324827/cms/employee-portal/Employee_Portal_29_row2jz.webp "Side Panel")

Inside this, we’re nesting a component called a Form Block. This accepts a data table and outputs a working form based on its schema. 

We’ve pointed ours at the feedback table and left its Type set to Create.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324827/cms/employee-portal/Employee_Portal_30_f5ule4.webp "Form")

Currently, our form contains all of the fields from the table’s schema but we only want to accept user inputs for a handful of these. 

The rest will be populated automatically based on context.

So, we’ll start by removing everything except submission_date and feedback_message. We’ve also edited our display texts again and given our form a descriptive title.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324826/cms/employee-portal/Employee_Portal_31_vsc3bd.webp "Form")

And, under Styles, we’ll change our Button Position to Top to match our other form.

![Button Position](https://res.cloudinary.com/daog6scxm/image/upload/v1712324825/cms/employee-portal/Employee_Portal_32_zjstoh.webp "Button Position")

We’ll set our submitter_id and employee_id fields automatically when a user hits the Save button.

But, at present, our form isn’t exposed to all of the data we need to do this. We can get the employee_id value from the table row that a user clicks to open our form. We’ll see how to do this in a second.

First, though, we need to retrieve the employees row that corresponds to the current user so that we can use this to populate our submitter_id attribute.

We’ll start by adding a component called a Data Provider at the bottom of our screen. This accepts a data source and exposes other elements on the screen to the information contained within.

We’ve set this to the employees table.

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1712324825/cms/employee-portal/Employee_Portal_33_yemf1f.webp "Data Provider")

Then, we need to add a filter to retrieve the single row that our current user is assigned to. We’ll add a filtering expression based on the bb_user attribute.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324823/cms/employee-portal/Employee_Portal_34_txniso.webp "Employee Portal")

Then, we’ll use the lightning bold beside our value field to open the Bindings Drawer. Here, we can see all of the data that our component is exposed to. 

We’re clicking into Current User.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1712324823/cms/employee-portal/Employee_Portal_35_ndjoic.webp "Bindings")

And we’ll select _id.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1712324822/cms/employee-portal/Employee_Portal_36_ugmmsn.webp "Bindings")

Our form is going to be accessible using a button embedded in our table. So, on our table, we’ll hit Add Button.

![Submit Feedback](https://res.cloudinary.com/daog6scxm/image/upload/v1712324821/cms/employee-portal/Employee_Portal_37_rrzzh8.webp "Submmit Feedback")

We’ll call this Submit Feedback and then open the actions menu.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1712324821/cms/employee-portal/Employee_Portal_38_lrcqpx.webp "ACtions")

When a user clicks on our button, we want two things to happen. First, we’ll save the employee_id value for the relevant row. Second, we’ll open our Side Panel.

So, we’ll add an action called Update State. This stores a key/value pair. We’re setting our key to employeeId and our value to {{ employees - Table.employees.employee_id }}.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324820/cms/employee-portal/Employee_Portal_39_o9yia4.webp "Employee Portal")

We’ll add a second action called Open Side Panel and point it at our feedback form.

![side panel](https://res.cloudinary.com/daog6scxm/image/upload/v1712324819/cms/employee-portal/Employee_Portal_40_yhsw4n.webp "side panel")

Now, hit Save and head back to our form.

Under our Button settings, we’ll open the actions menu.

Here, we’ll find an existing action called Save Row. We can use the Add Column button to manually set values when a user clicks our button.

We’ve added employee_id and submitter_id.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1712324818/cms/employee-portal/Employee_Portal_41_ik9dkd.webp "Save Row")

Now, we can bind values to these. For employee_id, we’re choosing State.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1712324819/cms/employee-portal/Employee_Portal_42_rbjlve.webp "Bindings")

And then employeeId.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1712324818/cms/employee-portal/Employee_Portal_43_i6duji.webp "Bindings")

For our submitter_id, we’ll use the output of the Data Provider we created earlier.

This contains an option called rows.

![Rows](https://res.cloudinary.com/daog6scxm/image/upload/v1712324816/cms/employee-portal/Employee_Portal_44_n82uk3.webp "Rows")

Since a Data Provider can output multiple rows, the syntax for accessing individual values is a little bit different. 

We need to provide an index followed by an attribute name.

Our Data Provider only outputs a single row, so our index is always 0. So, our binding here is {{ Employees Data Provider.Rows.0.employee_id }}.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1712324816/cms/employee-portal/Employee_Portal_45_ksaymr.webp "Bindings")

Hit Save, and we’ll preview our app to confirm that this works correctly by adding a row of test data using our form.

![Submit Feedback](https://res.cloudinary.com/daog6scxm/image/upload/v1712324815/cms/employee-portal/Employee_Portal_46_ht0w2l.webp "Submit Feedback")

Then, back in the Data section, we can see that this has worked.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1712324814/cms/employee-portal/Employee_Portal_47_c2so39.webp "Data")

Now, the peer feedback functionality of our employee portal is finished.

## 4. Displaying announcements

Next, we want to display company announcements beneath our directory. When a user clicks on one of these, we’ll open a modal screen to display the full details of the announcement.

We’ll start by adding a component called a Cards Block. This accepts a data source and iterates over all of its entries, displaying information on configurable cards.

We’ve pointed ours at the announcements table and given it a title.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1712324815/cms/employee-portal/Employee_Portal_48_qnccgx.webp "Cards")

We can configure three pieces of display text for each card - a title, subtitle, and description.

We’ll bind our title to the title attribute from our announcements table using {{ Announcements Cards Block.announcements.title }}. For the subtitle, we’ll display a formatted date using {{ date Announcements Cards Block.announcements.publish_date "MM-DD-YYYY" }}.

The {{ date }} handlebars helper accepts two arguments - a date variable and a format and then applies the format to our date.

We’re leaving the description setting blank.

Here’s how this will look.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324813/cms/employee-portal/Employee_Portal_49_vxjdjy.webp "Employee Portal")

Next, we need to create a new screen to display our full announcement.

![New Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1712324812/cms/employee-portal/Employee_Portal_50_yytwrn.webp "New Screen")

This time, we’re going to select the Form layout. As the name suggests, this outputs a working form based on the schema of whichever data table we point it at.

We’re selecting announcements. 

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1712324811/cms/employee-portal/Employee_Portal_51_ujskfb.webp "View")

Then, when prompted, we’ll choose the option to view an existing row.

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1712324811/cms/employee-portal/Employee_Portal_52_ydzzfn.webp "View")

Once again, we’ll leave our minimum role set to Basic.

Here’s what our form looks like out of the box.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324810/cms/employee-portal/Employee_Portal_53_dgrs2x.webp "Form")

We’ll start by removing the title field and binding this value to the Title setting of our Form Block instead. 

We’ll then also tidy up the display texts for our remaining fields.

![Announcements](https://res.cloudinary.com/daog6scxm/image/upload/v1712324809/cms/employee-portal/Employee_Portal_54_wjv1wj.webp "Announcements")

Then, all we need to do is add some logic so that our form is loaded for the appropriate row based on whichever card our users click on.

To do this, we’ll update our screen’s URL path to /announcements-form/:id, appending a bindable value that corresponds to the _id attribute in our database table.

![Url](https://res.cloudinary.com/daog6scxm/image/upload/v1712324808/cms/employee-portal/Employee_Portal_55_ffj6ou.webp "URL")

Now, head back to our Cards Block.

We’re going to enable two settings called Link Card Title and Open in Modal.

![Cards](https://res.cloudinary.com/daog6scxm/image/upload/v1712324808/cms/employee-portal/Employee_Portal_56_fiogfh.webp "Cards")

Then, we’ll bind our Link Screen to /announcements-form/{{ Announcements Cards Block.announcements._id }}, populating our URL variable with the unique ID of the clicked card.

![URL](https://res.cloudinary.com/daog6scxm/image/upload/v1712324807/cms/employee-portal/Employee_Portal_57_tyukf8.webp "URL")

Then, we’ll preview our app and click on one of our cards to test this out.

![Announcements](https://res.cloudinary.com/daog6scxm/image/upload/v1712324806/cms/employee-portal/Employee_Portal_58_xqb9qj.webp "Announcements")

## 5. Handling leave requests

The last piece of functionality we’re going to build for our Basic users will enable them to submit leave requests and view the status of their previous requests. 

We’ll start by adding another Table screen, this time choosing leave_requests as our data source. Once again, the minimum role should be left set to Basic.

Here’s how this looks.

![Leave Requests](https://res.cloudinary.com/daog6scxm/image/upload/v1712324805/cms/employee-portal/Employee_Portal_59_zfi6fc.webp "Leave Requests")

We only want to display the rows that relate to the employees row for the current user. To save ourselves some time, we can simply copy and paste the Employees Data Provider from our other screen.

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1712324805/cms/employee-portal/Employee_Portal_60_uvupjr.webp "Data Provider")

Then, we’ll nest our Table inside of this.

![Nesting](https://res.cloudinary.com/daog6scxm/image/upload/v1712324804/cms/employee-portal/Employee_Portal_61_gdglbd.webp "Nesting")

And we’ll add a filter expression to our Table so that it only displays the rows where employee_id equals {{ Employees Data Provider.Rows.0.employee_id }}.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1712324803/cms/employee-portal/Employee_Portal_62_lwp9xe.webp "Filter")

We’ll then remove the employee and employee_id columns from our table and tidy up all of our display texts.

![Title](https://res.cloudinary.com/daog6scxm/image/upload/v1712324802/cms/employee-portal/Employee_Portal_63_gspfeh.webp "Title")

We’ll then follow the exact same process as we did earlier to make our edit form read-only.

![Read-Only](https://res.cloudinary.com/daog6scxm/image/upload/v1712324803/cms/employee-portal/Employee_Portal_64_dkfvuc.webp "Read-Only")

Before we go any further, we’re going to head back to the Data section to update the Type of our status attribute from Text to Options. 

This means that it can only be set to a defined list of values.

The options we’ll input are Pending, Approved, and Submitted. This enables us to implement a basic approval workflow.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1712324801/cms/employee-portal/Employee_Portal_65_m3algn.webp "Options")

We’re deselecting everything except start_date, end_date, and reason.

![Create Row](https://res.cloudinary.com/daog6scxm/image/upload/v1712324800/cms/employee-portal/Employee_Portal_66_sqpv6v.webp "Create Row")

And lastly, we’ll populate our remaining values using button actions, just like we did earlier.

We’ll set the status to Pending and employee_id to {{ Employees Data Provider.Rows.0.employee_id }}.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1712324800/cms/employee-portal/Employee_Portal_67_agjqtv.webp "Columns")

Now, when a user submits a leave request, it’s automatically set to pending and linked to the appropriate employees row.

That’s all of our employee portal’s functionality for Basic users finished.

## 6. Admin screens

Next, we can start creating screens for our Power users to carry out admin functions. We’re going to create the basis of these by generating four more CRUD screens using the Table layout - one for each of our database tables.

![New Screens](https://res.cloudinary.com/daog6scxm/image/upload/v1712324799/cms/employee-portal/Employee_Portal_68_syywa0.webp "New Screens")

This time, however, we’re setting our minimum access role to Power.

![Power](https://res.cloudinary.com/daog6scxm/image/upload/v1712324798/cms/employee-portal/Employee_Portal_69_gnzkcm.webp "Power")

By default, all of these offer full CRUD functionality for our Power users. We’re going to make minor changes to each to better suit our needs.

Let’s take them one at a time.

### Announcements

The announcements table requires the least amount of work. We want to retain full CRUD functionality here, so all we need to do is update our display texts - first for our Table.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1712324798/cms/employee-portal/Employee_Portal_70_iihhrs.webp "Table")

And then for each of our forms.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324797/cms/employee-portal/Employee_Portal_71_k2qd20.webp "Form")

### Employees

For the employees table, we’ll do the same thing, but we’ll also remove all of the attributes relating to leave_requests and feedback rows.

![Employees](https://res.cloudinary.com/daog6scxm/image/upload/v1712324796/cms/employee-portal/Employee_Portal_72_p0ir0v.webp "Employees")

And we’ll repeat this process for our forms.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1712324795/cms/employee-portal/Employee_Portal_73_pk0wxs.webp "Form")

### Feedback

For Power users, our feedback screen will be read-only. So, in addition to tidying up our table, we’ll also remove our Create Row button and the corresponding side panel.

![Feedback](https://res.cloudinary.com/daog6scxm/image/upload/v1712324795/cms/employee-portal/Employee_Portal_74_ykzygq.webp "Feedback")

Then, we’ll repeat the process of making our remaining form read-only.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324794/cms/employee-portal/Employee_Portal_75_a80xpf.webp "Employee Portal")

### Leave Requests

Lastly, we have our leave requests screen. This time, we want Power users to be able to read requests and respond to them by updating the status attribute.

So, we’ll start by removing our Create Row button and form again, plus tidying up our Table.

![Leave Requests](https://res.cloudinary.com/daog6scxm/image/upload/v1712324793/cms/employee-portal/Employee_Portal_76_azvi8q.webp "Leave Requests")

Then, on our remaining form, we’ll check the Disabled option for all fields except status.

![Disabled](https://res.cloudinary.com/daog6scxm/image/upload/v1712324796/cms/employee-portal/Employee_Portal_77_nw86tp.webp "Disabled")

And that’s all of our admin screens ready to go.

## 7. Design tweaks and publishing

Our employee portal is almost finished. But before we push it live for our users, we’re going to make a few final design tweaks.

First of all, our navigation bar has gotten a little bit cluttered.

Under Navigation, we’ll hit Configure Links.

![Configure Links](https://res.cloudinary.com/daog6scxm/image/upload/v1712324792/cms/employee-portal/Employee_Portal_78_u8exwr.webp "Configure Links")

We will remove the entry for our announcements form screen using the X icon. We’ll also set the minimum role for the Feedback and Announcements screens to Power since Basic users can’t access screens on these paths.

![Links](https://res.cloudinary.com/daog6scxm/image/upload/v1712324791/cms/employee-portal/Employee_Portal_79_pq4nll.webp "Links")

Here’s how our nav bar will look to Power users.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1712324790/cms/employee-portal/Employee_Portal_80_jacu2h.webp "Nav")

But for Basic users, it will look like this.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1712324790/cms/employee-portal/Employee_Portal_81_uolvfg.webp "Nav")

We’ll also enable the Set as Home Screen option on both versions of our Employees screen.

![Home Screen](https://res.cloudinary.com/daog6scxm/image/upload/v1712324790/cms/employee-portal/Employee_Portal_82_cn6k8w.webp "Home Screen")

Lastly, under Screen, we’ll set our app’s theme to Nord.

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1712324790/cms/employee-portal/Employee_Portal_83_eghaus.webp "Theme")

When we’re ready, we can hit publish to push our portal live.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324789/cms/employee-portal/Employee_Portal_84_u80e3t.webp "Employee Portal")

And here’s a reminder of what our finished employee portal looks like.

![Employee Portal](https://res.cloudinary.com/daog6scxm/image/upload/v1712324789/cms/employee-portal/Employee_Portal_85_ci4eda.webp "Employee Portal")

Budibase is the fast, easy way to build secure custom portals on top of just about any data source. To learn more, check out our [portal development](https://budibase.com/portals/) page.