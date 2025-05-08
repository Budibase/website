+++

author = "Ronan McQuillan"
date = 2025-03-14
description = "Learn how to build a policy management tool in Budibase."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build a Policy Management System in 5 Steps"

+++

Handling compliance tasks requires us to have a clear record of which policies are in place and how they change over time. 

For this, we need a robust system that enables colleagues to interact with our policy data in a structured way. The trouble is the specific internal workflows involved in this are rarely the same from one organization to the next.

Today, we’re exploring one way of addressing this problem, by building a custom policy management system in Budibase.

By the end, you’ll have a fully working tool that you can easily modify for your own more granular needs in our open-source, low-code platform.

First, though, let’s start with the basics.

## What is a policy management system?

As the name suggests, a policy management system is an internal tool that’s used to manage our company policies.

In the simplest examples, this might mean enabling CRUD actions, allowing us to create, read, update, or delete policy data.

More often, though, we’ll need to enforce more sophisticated workflows. For instance, creating approval workflows, where certain types of users can request changes to policies while others can respond to or approve these.

We may even require additional layers of approval or more granular permissions for specific users to request or approve changes to particular kinds of policies.

On top of this, policy management tools can be used to provide a record of how our policies have changed over time, providing oversight and auditability.

So…

## What are we building?

We’re building a simple policy management solution on top of an existing Postgres database, although with Budibase, we could just as easily use another RDBMS or NoSQL tool of our choice.

{{< vimeo id="1065897179" title="Policy Management System" >}}

This will be built around two user roles. `Editors` will be able to submit new versions for existing policies, using the `policy_versions`. `Approvers` can then approve these, as well as performing full CRUD actions on our `policies` table.

Along the way, we’ll provide the queries you need to create a look-alike database so you can build along with our tutorial.

When a new `policy_version` is approved, the relevant `policies` table will also be updated to reflect these changes.

This means that we can keep our policies up to date with our real-world requirements, while also providing a clear paper trail for how these have evolved over time.

You might also like our guide to building an [engineering change management system](https://budibase.com/blog/tutorials/engineering-change-management-system/).

Let’s get started.

## How to build a policy management system in 5 steps

If you haven’t already, sign up for a Budibase account, which will allow you to build as many apps as you like for free.

{{< cta >}}

### 1. Connecting our database

The first thing we’ll need to do is create a new Budibase app. We could use a pre-built template or an existing application dump, but today we’re starting from scratch.

When we choose this option, we’ll be prompted to give our app a name and URL extension. We’re going to go with `Policy Management System`.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965101/cms/policy-management-system/PMS1_sw06jq.webp "Policy Management System")

At this point, we’re offered a range of data sources that we can connect our app to, including RDBMSs, NoSQL tools, APIs, spreadsheets, and more.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1741965101/cms/policy-management-system/PMS2_b4x5dj.webp "Data")

As we said earlier, we’re using a PostgreSQL database. When we choose this option, we’ll be prompted to enter our connection details.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1741965100/cms/policy-management-system/PMS3_mu1md6.webp "Config")

Then, we’re offered a choice of which tables we’d like to `Fetch`, making them queryable within Budibase. Our database has two tables called `policies` and `policy_versions`. We’re going to select both.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1741965100/cms/policy-management-system/PMS4_atk9ld.webp "Config")

You can use the following query to create our tables:

{{< highlight sql "linenos=inline" >}}

CREATE TABLE policies (

  id SERIAL PRIMARY KEY,

  title TEXT UNIQUE,

  description TEXT,

  category TEXT,

  status TEXT CHECK (status IN ('Active', 'Archived')),

  created_at TIMESTAMP DEFAULT NOW(),

  updated_at TIMESTAMP DEFAULT NOW()

);

CREATE TABLE policy_versions (

  id SERIAL PRIMARY KEY,

  policy_id INTEGER REFERENCES policies(id) ON DELETE CASCADE,

  title TEXT,

  description TEXT,

  category TEXT,

  status TEXT CHECK (status IN ('Draft', 'Pending Approval', 'Approved', 'Rejected', 'Archived')),

  created_at TIMESTAMP DEFAULT NOW(),

  updated_at TIMESTAMP DEFAULT NOW()

);

{{< /highlight >}}

You can populate these with:

{{< highlight sql "linenos=inline" >}}

-- Insert Active Policy

INSERT INTO policies (title, description, category, status)

VALUES 

  ('IT Security Policy', 'Defines security standards for IT systems', 'Security', 'Active'),

  ('Employee Conduct Policy', 'Guidelines for employee behavior and ethics', 'Human Resources', 'Archived'),

  ('Data Privacy Policy', 'Outlines data handling and privacy practices', 'Compliance', 'Active');

-- Insert Draft Policy Versions

INSERT INTO policy_versions (policy_id, title, description, category, status)

VALUES 

  (1, 'IT Security Policy', 'Initial draft of IT security policy', 'Security', 'Draft'),

  (2, 'Employee Conduct Policy', 'Initial draft of employee conduct policy', 'Human Resources', 'Draft'),

  (3, 'Data Privacy Policy', 'Initial draft of data privacy policy', 'Compliance', 'Draft');

-- Insert Pending Approval Policy Versions

INSERT INTO policy_versions (policy_id, title, description, category, status)

VALUES 

  (1, 'IT Security Policy', 'Reviewed IT security policy draft', 'Security', 'Pending Approval'),

  (2, 'Employee Conduct Policy', 'Updated draft of employee conduct policy', 'Human Resources', 'Pending Approval');

-- Insert Approved Policy Versions

INSERT INTO policy_versions (policy_id, title, description, category, status)

VALUES 

  (1, 'IT Security Policy', 'Final version of IT security policy', 'Security', 'Approved'),

  (3, 'Data Privacy Policy', 'Final version of data privacy policy', 'Compliance', 'Approved');

-- Insert Rejected Policy Versions

INSERT INTO policy_versions (policy_id, title, description, category, status)

VALUES 

  (2, 'Employee Conduct Policy', 'Rejected version of employee conduct policy', 'Human Resources', 'Rejected');

{{< /highlight >}}

Here’s how our `policies` table looks in Budibase’s Data section once we’ve `Fetched` it.

![Database](https://res.cloudinary.com/daog6scxm/image/upload/v1741965100/cms/policy-management-system/PMS5_hhgaae.webp "Database")

#### Altering existing columns

In Budibase, we can make adjustments within the Data section that will then be reflected when we start generating UIs and automations.

Firstly, all of our `TEXT` columns are handled the same way in our database, but Budibase distinguishes between a few types of textual data. Each database table has a field called `description`.

We’ll change these from `Text` to `Long Form Text`. Remember to repeat this process on both tables.

![Long Form](https://res.cloudinary.com/daog6scxm/image/upload/v1741965100/cms/policy-management-system/PMS6_o7aile.webp "Long Form")

Next, our tables have a few attributes that we only want to offer defined options for. These are the `status` and `category` columns on each table. Our possible categories will be `Security`, `Human Resources`, and `Compliance`, although you could add more to suit your needs.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1741965100/cms/policy-management-system/PMS7_mlleip.webp "Options")

We’ll change the `type` for these columns to `Single Select` and input these options. Again, remember to do this for both tables.

The `status` in each of our tables will have different options. On the `policies` table, these will be `Active` and `Archived`.

![Options](https://res.cloudinary.com/daog6scxm/image/upload/v1741965098/cms/policy-management-system/PMS8_v1daxt.webp "Options")

For `policy_versions`, we’ll use `Draft`, `Pending Approval`, `Approved`, and `Rejected`. 

![Options]( https://res.cloudinary.com/daog6scxm/image/upload/v1741965098/cms/policy-management-system/PMS9_m0qdlv.webp "Options")

#### Default values

We can also add `Default Values` within the Data layer. These will be used as a fallback when a row is created if a value isn’t specified for a particular column. We’re going to add these across all of our statuses and dates on both tables.

We’ll start with the `status`attributes, using the options picker in their settings. On `policies`, we’ll default to `Active`.

![Policy Mangement System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965097/cms/policy-management-system/PMS10_vrau74.webp "Policy Management System")

We’ll repeat this same process to set the default `status` for our `policy_versions` table to `Pending Approval`.

Next, each of our tables contains columns called `created_at` and `updated_at`. We want both of these to be populated with the current date and time when a row is created, so we’ll bind their default values to `{{ Date }}`.

![Date](https://res.cloudinary.com/daog6scxm/image/upload/v1741965097/cms/policy-management-system/PMS11_oqhodj.webp "Date")

Again, make sure to repeat this process across both date columns in each of our tables.

#### Configuring relationships and user columns

Our tables already have the data we need to denote relationships. Each one has a unique `id` attribute. The `policy_id` attribute under `policy_versions` then corresponds to the `id` attribute in the `policies` table.

We just need to configure this in Budibase.

Start by hitting `Define Relationship`.

![Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1741965097/cms/policy-management-system/PMS12_vmopk4.webp "Relationship")

We’re then presented with this modal, where we can set up our relationship.

![Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1741965096/cms/policy-management-system/PMS13_qwopxr.webp "Relationship")

We’re going to set this so that one row in the `policies` table links to `many rows` on `policy_versions`, using `id` as our `primary key` and `policy_id` as our `foreign key`.

![Relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1741965096/cms/policy-management-system/PMS14_l6hw26.webp "Relationship")

Now, we can see related rows across each of our tables.

![Rows](https://res.cloudinary.com/daog6scxm/image/upload/v1741965096/cms/policy-management-system/PMS15_fidsje.webp "Rows")

We also want the ability to link rows on our `policy_versions` table to specific users, but this works a little bit differently since we’re dealing with Budibase’s internal `Users` table.

We offer two special data types for this, depending on whether we want to relate rows to one user or many.

We’re going to add two `Single User` columns to our `policy_versions` table. The first will be called `editor`. We’re also enabling the option to `default to current user`.

![Approver](https://res.cloudinary.com/daog6scxm/image/upload/v1741965094/cms/policy-management-system/PMS16_zteoab.webp "Approver")

We’ll then add a second `Single User` column and call it `approver`. This time, we don’t need a default value.

![Approver](https://res.cloudinary.com/daog6scxm/image/upload/v1741965094/cms/policy-management-system/PMS17_sosby4.webp "APprover")

#### Adding user roles

Before we go any further, we’ll need to set up our policy management system’s access roles. As we outlined earlier, we’ll have two roles called `editor` and `approver`, who can submit and approve new policy versions, respectively.

We’ll start by hitting `Manage Roles`. This opens Budibase’s visual RBAC editor.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1741965093/cms/policy-management-system/PMS18_oxyvl6.webp "RBAC")

Here, we can configure our user roles. We can then assign permissions to these elsewhere in the builder.

We’ll start by adding our two roles, `editor` and `approver`.

![Roles](https://res.cloudinary.com/daog6scxm/image/upload/v1741965093/cms/policy-management-system/PMS19_zkgl35.webp "Roles")

We want our `approvers` to inherit their permissions from `editors`. To do this, we’ll place editor` to the left of `approver` and draw a line between them to denote inheritance.

![Hierarchy](https://res.cloudinary.com/daog6scxm/image/upload/v1741965093/cms/policy-management-system/PMS20_brhwo7.webp "Hierarchy")

#### Building role-specific views

We can define what permissions we’ll give to users with each role without leaving the Data section.

That is, we’re going to create database views based on each table that will define which read and write actions each role is granted.

The first thing we need to do is remove their permissions to perform full CRUD actions on the underlying tables. We’ll do this by setting the `Access` for each table to `App Admin`, which is the highest user role.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965093/cms/policy-management-system/PMS21_ndddnr.webp "Policy Management System")

We’ll start by creating views for our `policies` table, as the permissions within these will be quite simple. Hit `Create a View`. We’ll be presented with this modal, where we can give our new view a name. 

We’ll call this first one `Editor Policies`.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1741965092/cms/policy-management-system/PMS22_mti2w7.webp "Table")

Then, we’ll set the `Access` to `Editor`.

![Access](https://res.cloudinary.com/daog6scxm/image/upload/v1741965092/cms/policy-management-system/PMS23_japclc.webp "Access")

Then, under `Columns`, we’ll set everything to read-only.

![Permissions](https://res.cloudinary.com/daog6scxm/image/upload/v1741965091/cms/policy-management-system/PMS24_a5mwyf.webp "Permissions")

We’ll repeat this process to make a second view called `Approver Policies`, setting its `Access` to `Approver`. This time, we’ll leave all columns readable, except `updated_at`, which we’ll make read-only.

![Permissions](https://res.cloudinary.com/daog6scxm/image/upload/v1741965091/cms/policy-management-system/PMS25_gavxwa.webp "Permissions")

Next, we’ll create role-specific views for our `policy_versions` table.

We’ll create one called `Editor Versions`, with the `Access` set to `Editor`. This time, we’ll set all columns except `title`, `description`, and `category` to read-only.

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1741965091/cms/policy-management-system/PMS26_j8ducb.webp "View")

Finally, `Approver Policies` will have all columns set to read-only, except for `status`.

![status](https://res.cloudinary.com/daog6scxm/image/upload/v1741965090/cms/policy-management-system/PMS27_aslbin.webp "status")

And that’s our data model ready to go. Now, we can start generating automation logic and UIs based on this.

### 2. Setting up approval logic

Our approval management system will rely heavily on a couple of automation rules. So, we want to build these before we start designing our app screens.

#### Archiving policies

First, we’re going to set up a simple rule that will allow `Approvers` to set the `status` of `policies` to `Archived` with a button press. To do this, we’ll use a `Row Action`, which we can generate from the Data section.

Head to the `Approver Policies` view and hit `Create row action`.

![Row Action](https://res.cloudinary.com/daog6scxm/image/upload/v1741965090/cms/policy-management-system/PMS28_dyalkn.webp "Row Action")

When prompted, we’ll call this `Archive`.

![Archive](https://res.cloudinary.com/daog6scxm/image/upload/v1741965088/cms/policy-management-system/PMS29_qvfp1q.webp "Archive")

This creates an automation rule that’s triggered by user actions on a specific row from the front-end of your app. 

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1741965088/cms/policy-management-system/PMS30_yodpfr.webp "Trigger")

We’re going to add a single action step after our trigger. Hit the plus icon. Here, we’ll select `Update Row`.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965088/cms/policy-management-system/PMS31_pyg4rw.webp "Policy Management System")

We’ll set the `Table` to `policies` and hit the lightning bolt icon to open the bindings drawer for our `Row ID`.

![id](https://res.cloudinary.com/daog6scxm/image/upload/v1741965087/cms/policy-management-system/PMS32_e50bjb.webp "id")

Under `Trigger Outputs`, we’ll choose `id`.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1741965087/cms/policy-management-system/PMS33_z1ezgq.webp "Automation")

Now, the `Update Row` action will be taken on whichever row triggered our automation rule.

We’ll use then add the `status` and `updated_at` fields.

![fields](https://res.cloudinary.com/daog6scxm/image/upload/v1741965087/cms/policy-management-system/PMS34_eombqn.webp "fields")

We’ll set `status` to `Archived` as a static value. We’ll then bind the `updated_at` column to {{ date now "" }}, setting the current timestamp.

![date](https://res.cloudinary.com/daog6scxm/image/upload/v1741965088/cms/policy-management-system/PMS35_d1bcd5.webp "date")

We can then hit `Run Test` to confirm that this works.

![test](https://res.cloudinary.com/daog6scxm/image/upload/v1741965087/cms/policy-management-system/PMS36_nmcew6.webp "test")

#### Approving policy change requests

Next, we’re going to build an automation that will be triggered each time a `policy_version` is approved. This will take the data from the approved version and use it to update the corresponding row on the policies table.

We’ll start by adding a new automation, which we’ll call `Approve`. This time, we’re selecting a `Row Updated` trigger.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1741965085/cms/policy-management-system/PMS37_zhuzvc.webp "Trigger")

We’ll set the `Table` for our trigger to `policy_versions`.

![table](https://res.cloudinary.com/daog6scxm/image/upload/v1741965084/cms/policy-management-system/PMS38_kjnlvm.webp "table")

Next, we’ll add a condition so that we only continue if `{{ trigger.row.status }}` equals `Approved`.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1741965084/cms/policy-management-system/PMS39_n9b6gp.webp "Condition")

Next, we need to retrieve the relevant `policies` row that our automation will update. To do this, we’ll add a `Query Rows` action, pointed at the `policies` table.

![Query Rows](https://res.cloudinary.com/daog6scxm/image/upload/v1741965084/cms/policy-management-system/PMS40_jiaml1.webp "Query Rows")

We only want to return the row that’s related to the `policy_versions` row that’s been approved. So, we’ll add a filter condition so that `id` equals `{{ trigger.row.policy_id }}`.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965084/cms/policy-management-system/PMS41_qrv8gt.webp "Policy Management System")

Lastly, we’ll use the `id` of the row this returns within an `Update` row action, pointed at the `policies` table.

![binding](https://res.cloudinary.com/daog6scxm/image/upload/v1741965083/cms/policy-management-system/PMS42_vdeqvd.webp "binding")

We’ll add `category`, `title`, `updated_at`, and `description` as fields and bind these to their respective values from our trigger output, along with the current timestamp for our `updated_at` field.

![binding](https://res.cloudinary.com/daog6scxm/image/upload/v1741965083/cms/policy-management-system/PMS_43_m9axcg.webp "binding")

Again, we’ll hit `Run Test` to confirm that everything works.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1741965083/cms/policy-management-system/PMS44_f7eype.webp "Test")

### 3. Building a change request screen

Now that we’ve set up our automation logic, we can start building UIs. Head to the `Editor Policies` view in the data section and hit `Generate App Screen`.

![Generate](https://res.cloudinary.com/daog6scxm/image/upload/v1741965081/cms/policy-management-system/PMS45_zkfubo.webp "Generate")

Here, we’ll choose the option for a table with modal forms.

![forms](https://res.cloudinary.com/daog6scxm/image/upload/v1741965081/cms/policy-management-system/PMS46_ltmlov.webp "forms")

Here’s how this will look in the Design section.

![Table UI](https://res.cloudinary.com/daog6scxm/image/upload/v1741965080/cms/policy-management-system/PMS47_hrmss9.webp "Table UI")

The first thing we’ll do is tidy up our existing UI by editing our Headline component and removing any unnecessary columns from our table.

![columns](https://res.cloudinary.com/daog6scxm/image/upload/v1741965081/cms/policy-management-system/PMS48_zvvgc3.webp "columns")

`Editors` aren’t allowed to add new rows to the `policies` table, so we can also delete our `Create New` button and the associated modal form.

![delete](https://res.cloudinary.com/daog6scxm/image/upload/v1741965080/cms/policy-management-system/PMS49_a2spmf.webp "delete")

Here’s our remaining `Edit` form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1741965080/cms/policy-management-system/PMS50_qglgiy.webp "Form")

At present, this updates the `policies` row that a user clicks on in our table. We’re going to modify this so that it creates a new `policy_versions` row, linked to the `policies` row that a user clicks on.

We’ll start by setting our form’s `Data` to `Editor Versions` and its `Type` to `Create`.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965080/cms/policy-management-system/PMS51_x8ppfd.webp "Policy Management System")

We’ll then remove all fields except `policies`, `title`, `category`, and `description`.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1741965079/cms/policy-management-system/PMS52_gsygq1.webp "Fields")

We’ll also update our display text, then under `Styles`, set our `Button Position` to `Top`.

![Button Position](https://res.cloudinary.com/daog6scxm/image/upload/v1741965078/cms/policy-management-system/PMS53_ikc8zl.webp "Button Position")

Now, we don’t want users to have to specify the `policy` they’re editing. Rather, this should be automatically populated based on which table row they click.

Currently, when a user clicks on a row, a `State` variable is set, using the clicked row’s `_id`. We’re going to set a default value for our `policy` field using this, with `{{ State.ID_5Whzvriuv }}`. We’ll then select the option to disable this field, so it can’t be written.

![Default Value](https://res.cloudinary.com/daog6scxm/image/upload/v1741965077/cms/policy-management-system/PMS54_rw1rqp.webp "Default Value")

Here’s how this will look when we preview our app.

![Request Edit](https://res.cloudinary.com/daog6scxm/image/upload/v1741965078/cms/policy-management-system/PMS55_w1blob.webp "Request Edit")

However, we also want to display the current values of our `policy` data, so that users don’t need to rewrite this from scratch. To do this, we’ll need to expose our form to the entire `policies` row to which our new version will be related.

We’ll start by nesting our `Form Block` inside a `Data Provider` component.

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1741965077/cms/policy-management-system/PMS56_l4gy7m.webp "Data Provider")

Then, we’ll add a filter to this so that it only returns the single row where `_id` equals our state variable from before.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1741965076/cms/policy-management-system/PMS57_pclb0s.webp "Filter")

We’ll then add default values to our remaining fields in the format `{{ [Policies Data Provider].Rows.0.category }}`.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1741965075/cms/policy-management-system/PMS58_z4sklr.webp "Bindings")

Here’s how this looks in our preview.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1741965075/cms/policy-management-system/PMS59_gvhpwn.webp "Preview")

### 4. Building approver screens

Next, we’ll start building screens for our `Approvers`.

#### Policy CRUD UIs

Firstly, we want to build a screen where users with the `Approval` role will have full CRUD permissions for our `policies` table.

We’ll start by generating another table UI with modal forms, this time from our `Approver Policies` view.

![App](https://res.cloudinary.com/daog6scxm/image/upload/v1741965076/cms/policy-management-system/PMS60_e3dpex.webp "App")

As before, we’ll start by editing our display text and removing any extraneous columns from our table.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965075/cms/policy-management-system/PMS61_rzx7kh.webp "Policy management system")

For our `Create` form, we’re removing all columns except `title`, `description`, and `category`. We’ve also moved our button to the top again.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1741965075/cms/policy-management-system/PMS62_b4envy.webp "Form")

On our `Edit` form, we’re leaving all columns visible, but setting the ones we don’t need to `Disabled`, we’ve also arranged them into columns using their `Layout` settings.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1741965074/cms/policy-management-system/PMS63_kaihzz.webp "Form")

Note that when we generated this screen, it automatically included a button to trigger our `Archive` row action. Since we have this, we don’t need our `Delete` button, so we’ll remove that.

![Buttons](https://res.cloudinary.com/daog6scxm/image/upload/v1741965074/cms/policy-management-system/PMS64_vneket.webp "Buttons")

Lastly, we need to set our `updated_at` column to the current timestamp whenever a user updates a row. To do this, we’ll open the actions drawer for our `Save` button.

Here, we can manually specify a value for our column, using `{{ date now “” }}`.

![Save Row](https://res.cloudinary.com/daog6scxm/image/upload/v1741965074/cms/policy-management-system/PMS65_ssx9qu.webp "Save Row")

#### Policy version approvals

Next, we’re going to add a screen where users can review and approve new `policy_versions`.

So, we’ll start by generating a screen from our `Approver Versions` view.

Again, we’ve updated our display text and removed any columns we don’t need.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1741965073/cms/policy-management-system/PMS66_w6ogwn.webp "Table") 

`Approvers` don’t need to create new `policy_versions`, so we’ll delete the button and modal forms that relate to this. We’ve then replaced our button with an `Options Picker` with its `field` and `placeholder` set to `Status`.

![Search](https://res.cloudinary.com/daog6scxm/image/upload/v1741965073/cms/policy-management-system/PMS67_bzdnr9.webp "Search")

We’ll set the `options` for this to match the possible `status` values from our database, as well as giving it a default value of `Pending Approval`.

![Default Value](https://res.cloudinary.com/daog6scxm/image/upload/v1741965073/cms/policy-management-system/PMS68_qgtbrc.webp "Default Value")

Then, we’ll add a filter to our table so that it only returns rows where `status` equals `{{ [Status Filter Options Picker].Value }}`

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1741965074/cms/policy-management-system/PMS69_jscwic.webp "Filter")

Now, when we load the screen, only pending requests appear by default.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1741965073/cms/policy-management-system/PMS70_tgoekc.webp "Preview")

Lastly, on our remaining form, we’ve set all fields to disabled except for `status`.

![Policy Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1741965073/cms/policy-management-system/PMS71_tjwlmg.webp "Policy Management System")

Then, under our save button’s actions, we’ll use the same binding as before to populate an `updated_at` value, as well as setting our `approver` column to `{{ Current User._id }}`.

![Current User](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS72_bbzdtq.webp "Current User")

From a functional point of view, that’s our app done.

### 5. Design tweaks and publishing

Before we push our policy management system live, we’re going to make a few minor UX improvements.

Firstly, under `Screen` and `Theme`, we’ll choose `Midnight`. While we’re here, we’ll also adjust our app’s color scheme to better reflect the Budibase brand.

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS73_ths5jc.webp "Theme")

Across each of our tables, we’ll use the `Label` setting to add proper capitalization to our display texts.

![Text](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS74_w2leeu.webp "Text")

We’ll do the same on our forms using the `Label` and `Placeholder` settings.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS75_zgpknz.webp "Nav")

Similarly, we’ll use the `Label` settings under `Navigation` to make the entries in our nav bar more appropriate.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS76_dvp3fb.webp "Nav")

Lastly, we’ll remove the navigation entry for our `/editor-policies` screen since users with the `Editor` role can only access a single UI.

![Nav](https://res.cloudinary.com/daog6scxm/image/upload/v1741965072/cms/policy-management-system/PMS_77_ou44ky.webp "Nav")

Here’s a reminder of what our finished app looks like.

{{< vimeo id="1065897179" title="Policy Management System" >}}

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

To learn more about why organizations of all sizes choose Budibase to build internal tools, CRUD apps, approval workflows, ticketing systems, and more, head to our [features overview.](https://budibase.com/product/)