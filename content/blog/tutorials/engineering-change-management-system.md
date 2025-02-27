+++

author = "Ronan McQuillan"
date = 2025-02-27
description = "Learn how to build an engineering change management tool in Budibase."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Build an Engineering Change Management System in 5 Steps"

+++

Managing changes to engineering projects can be an incredibly tricky process. Even seemingly minor changes must be accurately assessed for risks, costs, compliance issues, and potential impacts. 

This applies to almost all kinds of engineering, including software, construction, and others.

The key challenges here include identifying a need for change, assessing the impact of potential actions, and applying consistent business rules to authorize new change initiatives.

However, engineering projects also introduce additional difficulties. For one, there’s a need to maintain a clear, auditable record of all decisions. We’ll often also have heightened security needs as well as more extensive integration requirements.

So, many teams opt for a custom solution.

Today, we’re exploring how to build a fully customizable engineering change management system in Budibase without writing a single line of code.

By the end, you’ll have a secure, performant tool that you can use on our cloud system - or roll out to your own infrastructure with a self-hosted Budibase instance.

## What is an engineering change management system?

An engineering change management system is an internal tool that handles change requests for engineering projects.

Typically, this is built around an approval workflow with two or more user roles. So, one set of users can request changes while another can review and authorize them. In more advanced use cases, we might have more roles for different kinds of requestors or levels of approvers.

At the most basic level, this achieves two things:

1. All change requests are documented consistently.
2. Authorization for approval or rejection follows defined business logic.

In turn, this reduces administrative workloads in projects, saving time and helping to eliminate errors.

Some solutions might also have additional requirements. 

For example, we may wish to create a record of how and when the status of change requests has changed as it progresses through our workflows for auditability. Or, we may wish to create more complex workflows with escalation or routing for different kinds of changes.

Some highly advanced solutions might even include functionality for automating aspects of change assessment, like impact analysis or cost estimation.

Often, change management systems also require integration with other types of platforms within our project stack, such as documentation or release management, in order to effectively action authorized changes.

### What are we building?

We’re building a comparatively simple engineering change management system on top of an existing PostgreSQL database. As change request workflows will vary from one organization to the next, the goal is to provide a working solution with plenty of scope for customization.

Our database uses three tables called `projects`, `change_requests`, and `change_status_tracker`.

We’ll provide the queries you need to build a look-a-like database. We’re handling our data layer in NeonDB, a cloud-based Postgres tool. But, with Budibase, you have the option of using just about any SQL or NoSQL platform.

We’ve created our app around a two-role workflow. Here’s how this works:

- `Requestors` can request changes to any project and monitor changes to their statuses.
- `Project Owners` can perform CRUD actions on their own projects, as well as responding to change requests related to them.

Each group of users will have access to two screens, allowing them to take actions on the `projects` and `change_requests` tables that are appropriate for their role.

In the background, we’ll also set up an automation rule so that a new row is created on the `change_status_tracker` table each time the `status` of a `change_request` is updated.

Here’s what our app will look like when we’re finished.

{{< vimeo id="1060855669" title="engineering change management system" >}}

Grab a coffee, and let’s get building.

## How to build an engineering change management system in 5 steps

If you haven’t already, the first thing to do is sign up for a Budibase account to start building as many apps as you need for free.

{{< cta >}}

### 1. Setting up our data layer

The first thing we need to do is create a new Budibase application. We have the option of using a pre-built template or importing an existing app file, but today we’re starting from scratch.

When we choose this option, we’re prompted to give our app a name, which will also be used to populate our URL extension. We’re simply going with `Engineering Change Management System`.

![Engineering change management system](https://res.cloudinary.com/daog6scxm/image/upload/v1740659587/cms/engineering-change-management-system/ecms_1_lgslp5.webp "Engineering change management system")

#### Connecting to Postgres

Once our app has been created, we’ll be presented with a range of options for connecting to data. Budibase supports direct querying for a range of RDBMSs, NoSQL tools, spreadsheets, and APIs alongside our built-in low-code database.

Today, we’re going to hit `PostgreSQL`.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1740659587/cms/engineering-change-management-system/ecms2_wifwn2.webp "Data")

We’ll then be prompted to enter our config details.

![config](https://res.cloudinary.com/daog6scxm/image/upload/v1740659587/cms/engineering-change-management-system/ecms3_qdg7le.webp "config")

Next, we can choose which tables we’d like to `fetch`, making them queryable within Budibase. Budibase acts as a proxy for external databases, querying our data without storing it.

We’re fetching our database’s three constituent tables.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1740659587/cms/engineering-change-management-system/ecms4_npnzcv.webp "Fetch tables")

If you want to build along with this tutorial, you can use the following query to create our tables in your own Postgres database.

{{< highlight sql "linenos=inline" >}}

-- Create the projects table

CREATE TABLE projects (

  id SERIAL PRIMARY KEY,

  project_name VARCHAR(255) NOT NULL,

  description TEXT,

  start_date TIMESTAMP,

  end_date TIMESTAMP

);

-- Create the change_requests table

CREATE TABLE change_requests (

  id SERIAL PRIMARY KEY,

  project_id INT NOT NULL,

  change_title VARCHAR(255) NOT NULL,

  change_type VARCHAR(50),

  description TEXT,

  impact_analysis TEXT,

  status VARCHAR(50),

  date_requested TIMESTAMP,

  CONSTRAINT fk_project

​    FOREIGN KEY (project_id)

​    REFERENCES projects (id)

​    ON DELETE CASCADE

);

-- Create the change_status_tracker table

CREATE TABLE change_status_tracker (

  id SERIAL PRIMARY KEY,

  change_request_id INT NOT NULL,

  old_status VARCHAR(50),

  new_status VARCHAR(50),

  status_change_date TIMESTAMP,

  CONSTRAINT fk_change_request

​    FOREIGN KEY (change_request_id)

​    REFERENCES change_requests (id)

​    ON DELETE CASCADE

);

-- Indexes for performance (optional but recommended)

CREATE INDEX idx_project_id ON change_requests (project_id);

CREATE INDEX idx_change_request_id ON change_status_tracker (change_request_id);

{{< /highlight >}}

This query will populate our tables with dummy data:

{{< highlight sql "linenos=inline" >}}

-- Insert dummy projects

INSERT INTO projects (project_name, description, start_date, end_date) VALUES

('Project Alpha', 'Redesign of mechanical components', '2024-01-01', '2024-06-30'),

('Project Beta', 'Software upgrade for control system', '2024-02-15', '2024-08-15'),

('Project Gamma', 'New material testing initiative', '2024-03-10', '2024-09-30');

-- Insert dummy change requests

INSERT INTO change_requests (project_id, change_title, change_type, description, impact_analysis, status, date_requested) VALUES

(1, 'Update CAD Model', 'Design', 'Modify CAD model to meet new safety standards', 'Medium cost, 2-week delay', 'Pending', '2024-02-01'),

(1, 'Adjust Tolerance Specification', 'Process', 'Tighten tolerances for increased precision', 'Minor cost increase, potential scrap reduction', 'Approved', '2024-02-10'),

(2, 'Migrate to New Database', 'Software', 'Upgrade from PostgreSQL 12 to PostgreSQL 15', 'Performance improvement, minor downtime', 'In Progress', '2024-03-05'),

(2, 'Integrate New Sensor API', 'Component', 'Add support for a new sensor model', 'Requires firmware update, 3-week lead time', 'Rejected', '2024-03-12'),

(3, 'Change Test Procedure', 'Process', 'Revise test sequence for more accurate failure detection', 'Minimal impact, improves data reliability', 'Pending', '2024-04-01');

-- Insert dummy change status history

INSERT INTO change_status_tracker (change_request_id, old_status, new_status, status_change_date) VALUES

(1, 'Pending', 'Approved', '2024-02-05'),

(2, 'Pending', 'Approved', '2024-02-12'),

(3, 'Pending', 'In Progress', '2024-03-07'),

(4, 'Pending', 'Rejected', '2024-03-15'),

(5, 'Pending', 'Approved', '2024-04-05');

{{< /highlight >}}

Once `fetched`, we can begin to manipulate our tables in Budibase’s Data section. Here’s what these will look like.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms5_y3y9rl.webp "Data")

#### Tweaks to existing columns

In Budibase, app-building is centered around the Data section. With our data-first experience, any changes that we make here will be reflected when we start generating UIs and automation rules.

So, we want to make a few adjustments to our data layer before we move on to the rest of our app. Firstly, we’re going to adjust a couple of columns so that the screens we autogenerate will better reflect the needs of our users.

Firstly, all textual data is stored in our database with Postgres’ `TEXT` type. 

But, we’re going to want to provide users with more space to enter information for some fields than for others. These are `description` in `projects`, and `description` and `impact_analysis` in `change_requests`.

We’ll change the `Type` for these from `Text` to `Long Form Text`.

![Long Form Text](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms6_o5kcvi.webp "Long Form Text")

Remember to repeat this process for all three of the columns we listed.

Our `change_requests` table has an attribute called `status`. We’re not going to want our users to enter these manually. Rather, we want to offer defined options.

So, we’ll change the `Type` from `Text` to `Single Select`, adding the following options:

- Pending,
- In Progress,
- Approved,
- Rejected.

![options](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms7_dbawkg.webp "options")

We’re also doing the same for `new_status` and `old_status` on our `change_request_tracker` for visual consistency. Optionally, we can change the type of our `change_type` attribute to `Single Select` too, remembering to populate relevant options.

#### Adding default values

Next, there are some columns where we’d like to populate values without users having to enter these manually. With Budibase’s `Default Values`, we can specify values that we’d like to be automatically assigned to columns when a new row is created.

There are two columns on the `change_requests` table we want to do this for. The first is `status`. 

We’ll use the dropdown to set this to `Pending` by default.

![default](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms8_lrxod9.webp "default")

Now, a new change request will automatically be set to Pending.

We also want to default the `date_requested` to the current date and time when a new row is created. In other words, we need to set a dynamic value rather than a static one. To do this, we’ll hit the lightning bolt icon to open our bindings menu.

![binding](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms9_i9wtqz.webp "binding")

Here, we can bind values using Handlebars or JavaScript expressions. The categories of data we can use are presented on the right. We’re going to click into `Date`.

![date](https://res.cloudinary.com/daog6scxm/image/upload/v1740659583/cms/engineering-change-management-system/ecms10_rjdmbo.webp "date")

And then, choose `Server Date`, populating the appropriate Handlebars expression for our needs.

![engineering change management system](https://res.cloudinary.com/daog6scxm/image/upload/v1740659582/cms/engineering-change-management-system/ecms11_nggwrr.webp "engineering change management system")

#### Setting up relationships

If you looked closely at our database schema earlier, you’ll have noticed that this includes primary and foreign keys for handling relationships between our tables.

We need to define these in Budibase so that we can utilize data across related tables within the builder. 

Specifically, we want to set up two relationships:

1. A `one-to-many` relationship between `projects` and `change_requests`.
2. A `one-to-many` relationship between `change_requests` and `change_status_tracker`.

First, from the `projects` table, hit `define relationship`.

![define relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1740659582/cms/engineering-change-management-system/ecms12_nhxd7u.webp "define relationships")

In the modal that opens, we’ll set up our `many-to-one` relationship, using `id` on the `projects` table as our `Primary Key` and `project_id` on the `change_requests` table as our `Foreign Key`.

![relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1740659582/cms/engineering-change-management-system/ecms13_w1up6j.webp "relationships")

We’ll then repeat this process for our other relationship, this time using `id` on `change_requests` as our `Primary Key` and `change_request_id` on `status_change_tracker` as our `Foreign Key`.

![relationships](https://res.cloudinary.com/daog6scxm/image/upload/v1740659582/cms/engineering-change-management-system/ecms14_jz3qy6.webp "relationships")

We can now view related rows across each of our tables.

![related rows](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms15_lphf7r.webp "related rows")

#### Adding user columns

Our workflow also requires database tables to be linked to specific users. These are handled using Budibase’s internal `Users` table, so setting up relationships works a little bit differently.

There are special column types for this, called `Single User` and `Multi User`. We’re going to add a `Single User` column to each of our tables. This includes a setting called `Default to Current User`, which we’ll enable for `change_requests` and `change_status_tracker`.

We’ll call our new columns on these tables `requestor` and `approver`, respectively.

Here’s how our `requestor` column on `change_requests` should look.

![user column](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms16_avgr9r.webp "user column")

Repeat this exact process to add a `Single User` column to `status_change_tracker`, calling it `approver` and defaulting to the current user.

![approver](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms17_rp66ar.webp "approver")

We’ll also add a `Single User` column to the `projects` table. This time we’ll call it `owner`, but we won’t default to the current user.

![owner](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms18_wfwwax.webp "owner")

Lastly, we’ll assign ourselves to a few rows on the `projects` and `change_requests` tables for testing purposes later.

![assisgn users](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms19_drh5j7.webp "assign users")

#### Creating custom roles

Now that we have the ability to link rows across our tables to specific tables, we can start thinking about how we want to manage access. As we said earlier, our app will be built around two user roles called `Requestor` and `Project Owner`.

`Requestors` will be able to submit `change_requests` against `projects`. `Project Owners` can respond to `change_requests` or carry out CRUD actions on their own `projects`.

All users will be able to view the `status_change_tracker` rows that are relevant to them.

To start, we need to create our custom roles. By default, Budibase apps ship with two roles. `App User` encompasses any authenticated user. `App Admin` can carry out admin actions or make changes to our app.

We can hit `Manage Roles` to open Budibase’s visual RBAC editor.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms20_aj5ock.webp "RBAC")

We’ll then hit `Add Role` to create our roles, giving them a name and description.

![engineering change management system](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms21_kydn2z.webp "engineering change management system")

Custom roles can be hierarchical or entirely independent of one another. We want ours to be hierarchical, so we’ll place `Requestor` to the left of `Project Owner`, and draw a line between them to denote inheritance.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1740659577/cms/engineering-change-management-system/ecms22_rz9uts.webp "RBAC")

Now, users with the `Project Owner` role will inherit all access that we grant to `Requestors` as well as any additional permission we give them.

#### Building role-specific views

The last thing we need to do before we can start generating our UIs is define the permissions that we want to grant to users with each role across each of our three tables.

In Budibase, we can achieve this by creating `Views` for specific user roles defining the read and write access they’ll have for different rows and columns. We can then generate UIs and automations from these, which will inherit the access rules of their underlying data source.

We’ll start by updating the minimum role required to access each of our existing tables from `App User` to `App Admin`.

![Access](https://res.cloudinary.com/daog6scxm/image/upload/v1740659576/cms/engineering-change-management-system/ecms23_puxx3d.webp "Access")

Now, only `App Admins` have full CRUD access across all tables.

Let’s start building our `Views`. From the `change_requests` table, hit `Create a View`. We’ll leave this set to `Table` and call it `Requestor change_requests`.

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1740659576/cms/engineering-change-management-system/ecms24_dbsokr.webp "View")

On our new `View`, we’ll hit `Filter` and add a rule to only return rows where `requestor` equals `{{ Current User._id }}`.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1740659566/cms/engineering-change-management-system/ecms25_iwwmze.webp "Filter")

Now, users can only access the rows that they’ve submitted. We’ll retain full write access to enable them to create new rows.

![View](https://res.cloudinary.com/daog6scxm/image/upload/v1740659566/cms/engineering-change-management-system/ecms26_x8a6ql.webp "View")

We’ll also set our `Access` role to `Requestor`.

![Access](https://res.cloudinary.com/daog6scxm/image/upload/v1740659565/cms/engineering-change-management-system/ecms27_a2zy3x.webp "Access")

We’re going to repeat the same process as above to create a second `View`, which we’ll call `Project Owner change_requests`. This time our filter only includes rows where `projects.owner` equals `{{ Current User.globalId }}`.

Remember to set `Access` to `Project Owner`.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1740659565/cms/engineering-change-management-system/ecms28_idnk1q.webp "Filter")

Next, we’ll create role-specific `Views` for our `projects` table. 

First, we’ll create one called `Requestor projects`, setting its `Access` to `Requestor`. This time we don’t need a filter since we want all rows to be readable. However, we don’t want them to be writable. We can configure this by hitting `Columns` and setting them all to read-only.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1740659565/cms/engineering-change-management-system/ecms29_igt14l.webp "Columns")

We’ll then add a `View` called `Project Owner projects`, with its `Access` set to `Project Owner`. This will keep all columns writable, but we’ll add a filter for rows where `owner` equals `{{ Current User._id }}`.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1740659565/cms/engineering-change-management-system/ecms30_n4hodt.webp "Filter")

Lastly, we’ll add a single `View` for the `status_change_tracker` table called `Read status_change_tracker`. Both sets of users will need to use this, so we’re setting the `Access` to `Requestor`. We’ll then set all columns to read-only.

![Engineering Change Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1740659565/cms/engineering-change-management-system/ecms31_i2cyjz.webp "Engineering Change Management System")

And that’s our data layer ready to go.

### 2. Automated status change tracking

Before we start building our app screens, we want to create some automation logic. Specifically, we need to create a rule that will add a row to our `change_status_tracker` table when the `status` is changed.

So, we’ll head to the Automation section, where we’ll hit `Create Automation`.

![New Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1740659564/cms/engineering-change-management-system/ecms32_dhp8v3.webp "New Automation")

When we do so, we’ll see this dialog, where we’re going to enter `statusTracker` as our automation’s name. We’ll choose `Row Updated` as the trigger.

![Create automation](https://res.cloudinary.com/daog6scxm/image/upload/v1740659562/cms/engineering-change-management-system/ecms33_dufjjb.webp "Create automation")

Here’s what this looks like. We’ve used the `Table` dropdown to point our trigger at `change_requests`.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1740659562/cms/engineering-change-management-system/ecms34_h79bfu.webp "Trigger")

Any actions that we chain after this will now be carried out anytime a row on our `change_requests` table is updated.

The first thing we want to do is add some logic to determine if the `status` attribute has been updated. To do this, we’ll add a `Condition` block. This accepts a `Reference Value`, `Condition`, and `Comparison Value`.

The automation rule will only continue if our `Condition` evaluates to true. We’ve set our `Reference Value` to `{{ trigger.oldRow.status }}`, our `Condition` to `Not Equals`, and our `Comparison Value` to `{{ trigger.row.status }}`.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1740659561/cms/engineering-change-management-system/ecms35_x5nuan.webp "Condition")

When a `status` has changed, we want to add an entry to our `status_change_tracker` table. So, we’ve added a `Create Row` action and pointed this at `status_change_tracker`.

![Create Row](https://res.cloudinary.com/daog6scxm/image/upload/v1740659562/cms/engineering-change-management-system/ecms36_pkdiz8.webp "Create Row")

We’ll then add the following fields and values using `Add Fields`:

- `approver` - {{ Current User._id }}
- `change_requests` - {{ trigger.id }}
- `new_status` - {{ trigger.row.status }}
- `old_status` - {{ trigger.oldRow.status }}
- `status_change_date` - {{ date now "" }}

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1740659561/cms/engineering-change-management-system/ecms37_suwjsf.webp "Bindings")

We’ll then copy the `_id` from a `change_request` row and hit `Run Test` to confirm that this works, making sure to select different `status` values for our `Updated Row` and `Old Row` data.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1740659560/cms/engineering-change-management-system/ecms38_kjy1bp.webp "Test")

Note that we’ll have to publish our app for our automation rule to work outside of the Automation section.

### 3. Project owner UIs

Now that our status tracker works, we can begin building our UIs. As we said in Budibase, we can generate these from the Data section, and they’ll inherit any rules and policies that are applied to the underlying database table or view.

We’re going to start by building screens for our `Project Owners`.

#### Projects

First up, we’ll build a simple CRUD screen for our `Project Owner projects` `View`. This will allow users to create, edit, or delete any rows where they’re assigned as the `owner`.

So, from our `View`, we’ll generate a `Table` screen.

![Generate](https://res.cloudinary.com/daog6scxm/image/upload/v1740659559/cms/engineering-change-management-system/ecms39_ob2qhg.webp "Generate")

We’ll then choose to include our forms in `Modals`.

![Modal](https://res.cloudinary.com/daog6scxm/image/upload/v1740659559/cms/engineering-change-management-system/ecms40_axzl7j.webp "Modal")

Here’s how this will look.

![Engineering Change Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1740659559/cms/engineering-change-management-system/ecms41_kjoatw.webp "Engineering Change Management System")

The first thing we’ll do is tidy up our table by deselecting the `id` and `change_requests` columns.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1740659558/cms/engineering-change-management-system/ecms42_gvxais.webp "Columns")

We also want to make a few adjustments to our forms. Here’s what our `create row` form will look like out of the box.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1740659558/cms/engineering-change-management-system/ecms43_itpzhc.webp "Form")

We’ll start by giving our form a new `Title`. Under `Styles`, we’ve also set `Button Position` to `Top`.

![New Project](https://res.cloudinary.com/daog6scxm/image/upload/v1740659558/cms/engineering-change-management-system/ecms44_y0uyft.webp "New Project")

We’ll remove the `owner` and `change_requests` fields, and use the `Layout` setting to arrange our two dates into columns.

![Layout](https://res.cloudinary.com/daog6scxm/image/upload/v1740659556/cms/engineering-change-management-system/ecms45_fq2jy7.webp "Layout")

Recall that our `projects` table doesn’t default the `owner` to the current user. Instead, we’ll populate this manually when a user hits `Save`. Start by opening the actions drawer for the button.

![ACtions](https://res.cloudinary.com/daog6scxm/image/upload/v1740659556/cms/engineering-change-management-system/ecms46_ju7zbc.webp "ACtions")

Under the `Save Row` action, we’ll bind `owner` to `{{ Current User._id }}`.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1740659555/cms/engineering-change-management-system/ecms47_d3kizq.webp "Bindings")

Next, we’ll head to our `Update` form and make the exact same layout changes as we did for our `Create` form.

![New Form](https://res.cloudinary.com/daog6scxm/image/upload/v1740659555/cms/engineering-change-management-system/ecms48_ndp1ls.webp "New Form")

#### Change requests

Next, we want to create a screen for `Project Owners` to manage `change_requests` relating to their projects.

We’ll start by generating a `Table` UI from the `Project Owner change_requests` `View`, exactly as we did for our previous screen.

Once again, we’ve tidied up our table by removing any extraneous columns.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1740659555/cms/engineering-change-management-system/ecms49_mfuygz.webp "Columns")

Users on this screen won’t need to submit change requests, so we’ll delete our `Create Row` button and corresponding `Modal`.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1740659555/cms/engineering-change-management-system/ecms50_oqpm8n.webp "Table")

On our `Update` form, we’ve bound the `Title` to `{{ Edit row form block.Project Owner change_requests.projects.0.primaryDisplay }}: {{ Edit row form block.Project Owner change_requests.change_title }}`.

![Engineering Change Management System](https://res.cloudinary.com/daog6scxm/image/upload/v1740659555/cms/engineering-change-management-system/ecms51_bcpvvx.webp "Engineering Change Management System")

We’ll remove `change_title`, `projects`, and `change_status_tracker` from our form, arranging our remaining short-form fields into columns. We’ve also moved the buttons to the top again.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1740659554/cms/engineering-change-management-system/ecms52_x9b5ba.webp "Columns")

Lastly, we’ll select the `Disabled` option on all fields except `status` and `impact_analysis`.

![disable](https://res.cloudinary.com/daog6scxm/image/upload/v1740659553/cms/engineering-change-management-system/ecms53_iv6trl.webp "disable")

Beneath our form, we want to display the specific `change_request’s` status history in a small table. We’ll start by adding a container with its horizontal alignment set to the center.

![container](https://res.cloudinary.com/daog6scxm/image/upload/v1740659553/cms/engineering-change-management-system/ecms54_jowx7j.webp "container")

Inside this, we’ll nest a table with its `Data` set to `Read change_status_tracker`.

![table](https://res.cloudinary.com/daog6scxm/image/upload/v1740659552/cms/engineering-change-management-system/ecms55_zm5tos.webp "table")

We’ll add a filter to return rows where `change_request.id` equals `{{ Edit row form block.Project Owner change_requests.id }}`.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1740659552/cms/engineering-change-management-system/ecms56_xbuldh.webp "Filter")

Under `Styles`, we’ve set our table’s `Wdith` to 600 and its `Height` to 300.

![table](https://res.cloudinary.com/daog6scxm/image/upload/v1740659552/cms/engineering-change-management-system/ecms57_g4ufhb.webp "table")

### 4. Requestor UIs

Next, we’ll start building our screens for `Requestors`. 

Remember, we want to enable them to submit `change_requests` against `projects` or track the progress of their own previous submissions.

#### Submitting change requests

First, we’ll create a screen for submitting `change_requests`. We’re going to generate this based on the `Requestor projects` `View`.

Again, we’ll start by tidying up our table and removing any components related to adding a new row.

![requestor](https://res.cloudinary.com/daog6scxm/image/upload/v1740659551/cms/engineering-change-management-system/ecms58_lf4vc3.webp "requestor")

We’ll then set our remaining form to `View` and make some of the same design tweaks as we did earlier, including binding its `Title` to {{ Edit row form block.Requestor projects.project_name }} and arranging our dates into columns.

![project](https://res.cloudinary.com/daog6scxm/image/upload/v1740659550/cms/engineering-change-management-system/ecms59_ujrxjq.webp "project")

From this modal, we want users to access a separate form for submitting change requests. We’ll start by adding a `Button` to our form, with its `Text` set to `Request Change`.

![button](https://res.cloudinary.com/daog6scxm/image/upload/v1740659550/cms/engineering-change-management-system/ecms60_xsxyg8.webp "button")

We’re going to add an action called `Update State`, which will store a key/value pair that we can use elsewhere in the builder. We’re setting our `Key` to `projectId` and our `Value` to `{{ Edit row form block.Requestor projects._id }}`.

![engineering change management system](https://res.cloudinary.com/daog6scxm/image/upload/v1740659549/cms/engineering-change-management-system/ecms61_vsb0t4.webp "engineering change management system")

We’re going to host our `change_request` form in a `Side Panel` component, so users can still view the `project` details while they make a submission.

We’ll add this beneath our existing `Modal` in the component tree.

![side panel](https://res.cloudinary.com/daog6scxm/image/upload/v1740659549/cms/engineering-change-management-system/ecms62_c8ifgm.webp "side panel")

Within this, we’ll nest a `Form Block` with its `Data` set to `Requestor change_requests` and its `Type` set to `Create`.

![change request form](https://res.cloudinary.com/daog6scxm/image/upload/v1740659549/cms/engineering-change-management-system/ecms63_rb0kp4.webp "Change request form")

We’ll give this a `Title` and deselect everything except `projects`, `change_title`, `change_type`, and `description`. All of the other values we need to populate will be handled with default values from earlier.

![change request form](https://res.cloudinary.com/daog6scxm/image/upload/v1740659548/cms/engineering-change-management-system/ecms64_clgqed.webp "change request form")

Users shouldn’t have to populate a `projects` value since we’re already storing this as a state.

We’ll disable this and set its `Default Value` to `{{ State.projectId }}`.

![default value](https://res.cloudinary.com/daog6scxm/image/upload/v1740659548/cms/engineering-change-management-system/ecms65_ux4tto.webp "default value")

Lastly, we’ll head back to our other form, and add an `Open Side Panel` button action.

![Open Side Panel](https://res.cloudinary.com/daog6scxm/image/upload/v1740659548/cms/engineering-change-management-system/ecms66_f2waay.webp "Open Side Panel")

Here’s how this will look in our app preview.

![App Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1740659547/cms/engineering-change-management-system/ecms67_ntoa3w.webp "App Preview")

#### Viewing previous requests

The last screen we’ll build will enable `Requestors` to view the progress of their own previous `change_requests`.

We’ll generate this from the `Requestor change_requests` table. As before, we’ve tidied up our table and removed our `Create Row` components.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1740659547/cms/engineering-change-management-system/ecms68_wueafi.webp "Table")

For our remaining form, we’ll bind the `Title` to `{{ Edit row form block.Requestor change_requests.change_title }}`. We’ve also used the same fields layout as we did for the corresponding `Project Owner` screen, this time setting the form `Type` to `View`.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1740659547/cms/engineering-change-management-system/ecms69_o6r2kc.webp "Form")

We can simply copy and paste the `status_change_tracker` table and parent container from our other screen, remembering to update the binding for our filter so that this works with our new form.

![status tracker](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms70_m46y2j.webp "status tracker")

And that’s our app completed from a functional perspective.

### 5. Design tweaks, navigation & publishing

Before we push our engineering change management system live for users, we’re going to make a few key UX improvements.

#### Navigation

Firstly, we want to consolidate the entries in the nav bar. Users can only see nav items for the screens to which they have access.

We’ll start by updating the `Label` for our two `Requestors` screens to `Projects` and `Change Requests`.

![engineering change management system](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms71_mwkfv3.webp "engineering change management system")

These will be seen by both `Requestors` and `Project Owners`.

We’ll give `Project Owners` a single additional entry called `Admin`, selecting the option to `Open sub-links`.

![sub nav](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms72_k2fh7y.webp "sub nav")

Here, we’ll add entries for their additional screens.

![links](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms73_nvc9ga.webp "links")

Here’s how this will look in the field.

![app preview](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms74_nphez4.webp "app preview")

#### App theming

To adjust the color scheme of our app, we can head to `Screen` and `Theme`. Here, we’ll choose Midnight.

We’ve also set our button colors to better reflect Budibase’s internal brand.

![App Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms75_dem2dk.webp "App Theme")

#### Display texts

Lastly, all of our autogenerated screens use our database schema to populate display texts, including headlines, column names, and form fields.

We’ll start by updating the `Text` setting on the `Headline` components at the top of each screen. We can alter these for human-readability.

![Heading](https://res.cloudinary.com/daog6scxm/image/upload/v1740659545/cms/engineering-change-management-system/ecms76_kwobd3.webp "Heading")

We’ll use the `Label` setting on each of our table columns to add capitalization.

![display](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms77_uadizk.webp "display")

We’ll also do the same on our form fields, using the `Label` and `Placeholder` settings.

![form fields](https://res.cloudinary.com/daog6scxm/image/upload/v1740659546/cms/engineering-change-management-system/ecms78_x7rfnm.webp "form fields")

When we’re happy, we can hit `Publish` to push our app live.

![publish](https://res.cloudinary.com/daog6scxm/image/upload/v1740659545/cms/engineering-change-management-system/ecms79_bnwpqz.webp "publish")

Here’s a reminder of what our final engineering change management system should look like.

{{< vimeo id="1060855669" title="engineering change management system" >}}

## Turn data into action with Budibase

Budibase is the fast, easy way for IT teams to ship secure workflow tools. With extensive data support, autogenerated UIs, custom RBAC, low-code automations, optional self-hosting, and more, there’s never been a better way to ship mission-critical apps at pace.

Check out our [features overview](https://budibase.com/product/) to learn more.