+++

author = "Ronan McQuillan"
date = "2023-07-21"
description = "The right workflow management database design is the key to building tools that drive efficiency."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/Worfklow_Management_Database_Design_ayvcig.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/Worfklow_Management_Database_Design_ayvcig.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Workflow Management Database Design"

+++

Today we’re going to guide you through exactly how to create a workflow management database design - from scratch.

This can form the basis of all sorts of solutions - including workflow management tools, approval apps, automated solutions - and a whole raft of other internal tools.

See, most internal tasks and processes aren’t *that* complicated. 

In fact, most management or administrative tasks can be expressed as chains of requests and decisions. Someone requests something - like permission to take an action or access a resource - and someone approves or declines this request - based on defined logic.

Our goal today is to demonstrate how we can use a database to represent these processes computationally. This can then form the basis of all kinds of user-focused tools and automation solutions for improving our workflows.

Let’s dive in.

## What is a workflow management database?

A workflow management database is where we store information that represents the status of a process at any point in time - along with how it has progressed up that point and how it can move onwards.

This matches what’s known in computer science as a *finite-state machine*.

Basically, this is a model that outlines how *resources* can be in one of a finite number of *states* at any given time. Certain *actions* can be performed on the resource, in order for it to *transition* to another state.

What does this have to do with workflow management?

A workflow is a repeatable set of decisions that determine what happens to a request. This includes the decisions themselves, *when* they occur, and *who* is responsible for making them. 

The goal is to progress the request from start to finish based on established business rules.

This could be a specific task like employee onboarding, dealing with purchase orders, approval workflows, editorial flows for video tutorials, or any other business processes. Effective workflow database design is crucial for all sorts of applications.

For example, the process for submitting a bug in an internal software system could look like this:

1. Any user can record a bug, with an initial status of *submitted*.
2. The service desk checks if the report follows a determined template. Any that don’t are marked as *declined*.
3. If the request is in the right form, it’s assigned to an appropriate member of the development team and marked as *pending*.
4. Once the development team starts work, the status changes to *in-progress*.
5. When they’re finished, the status changes to *resolved*.
6. The original user is notified of the outcome.

As you can see, the workflow is represented by how the *status* of the resource changes as it passes through different actions. As we said earlier, the *transitions* and *actions* are what must happen for the resource to move from one status to the next.

### How does this work?

So, before we dive into designing a workflow management database, let’s think about how this works in the abstract.

The method we’re going to use today is based on a *relational data model.* This means we’ll have several different tables, each one representing a single type of data entity. We’ll then link these tables using defined *relationships*.

What specific data do we need to represent for our workflow management database design to be viable?

The most basic model will need to include data objects to represent:

- **Requests** - that can be reviewed, approved, or implemented by different actors.
- **Processes** - which govern how each request should be handled.
- **Request information** - variable data that can be associated with each request.
- **States** - the stats that individual requests can be in.
- **Transitions and actions** - the flow of states that users can progress requests through within a process, along with how this is controlled.
- **Users** - the people involved in the workflow.

Of course, the nomenclature that we’re using here isn’t critical. You could just as easily use your own naming conventions for different data entities.

The goal is that we can use the same database for *multiple* similar workflows, as the basis for a variety of internal tools or other technical solutions. Therefore, we need to consider how we can create a data model that’s applicable to the widest number of internal processes.

Obviously, we’ll need to know what our underlying business logic *is* before we can codify it in a formal database to support our approval processes.

Check out our guide to [workflow analysis](https://budibase.com/blog/automation/what-is-workflow-analysis/) to learn more about this.

## Workflow management database design in 5 steps

Now, it’s worth noting that we can’t provide a totally generic, one-size-fits-all approach here. What we’re trying to do here is provide an *illustrative* guide to the process of workflow management database design - not an off-the-rail model as such.

And - one more note about our demos and examples throughout this guide. We’re using a Postgres instance hooked up to Budibase’s data section to give a clear visualization of what our database looks like in situ. 

We’re also going to accompany this with formal diagrams which will evolve as we progress through creating a workflow model. By the end, we'll have a fully fleshed-out workflow data model example.

With that in mind, here’s the flow of decisions and considerations that we can apply to designing a workflow model database - including each of the entities we’re going to need to define.

### 1. Processes and users

The basis of our database is going to be two very simple tables. The first will represent our users. Strictly from a database design point of view, the practicalities of this are kind of a separate issue.

What matters isn’t so much *how* we add users as *that* *we can* add them - and the information we store about each one. We’ll see a bit more about what Budibase brings to the table here a little bit later.

The first thing we need to know about our users is their basic personal information - like their name and email. What’s more important is their *role* within a process. That is, what permissions and responsibilities do they have within a given workflow?

The thing is though, the users table is a little bit of an outlier - because this might be managed externally to the rest of our workflow management database design - perhaps in individual workflow tools or within a global user management system.

For now, we’re just going to take a black box approach to users since - for our purposes today - we’re only really worried about the fact that we *can* store user data.

The other central data entity is going to be our *processes table*. This will store two pieces of data:

1. A unique ID.
2. A descriptive name.

But, Postgres won’t allow us to create a direct many-to-many relationship, so we’ll also need a Junction table to achieve this in our workflow engine. This defines the relationship between our two tables by storing their respective unique IDs as foreign keys.

So, here’s a visual representation of what our data model looks like so far - in theory:

![Workflow management database design](https://res.cloudinary.com/daog6scxm/image/upload/v1689941558/cms/workflow-management-database-design/1_an1x1r.webp "Workflow management database design")

So, we can link users to processes. We can build on this using whichever access control solution we want to control how different users’ roles allow them to take different actions within a given process. We’ll return to this at the end since it’s kind of a separate question.

But, we don’t really *know* anything about our processes just yet.

That leads us to our next data entity.

### 2. Requests

Next, we need to be able to represent information about the individual *requests* that will represent the individual instances of a given process.

We’ll start by creating a table called *requests*, which will store the basic details, like a title, request date, which process it’s a part of, and requesting user. We’ll also need an attribute to store its current state, but we’ll come to that in the next step.

So, now our approval workflow database design is more like this:

![Processes and requests](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/2_f12xkp.webp "processes and requests")

But, this only reflects the relationship between *requests* and *users* in terms of who *created* each request. We’ll also need a separate *many-to-many* relationship between these two tables, to represent *all* of the colleagues that can be involved in a request.

We’ll use another junction table to do this and call it *requestStakeholders*. Now our workflow diagram looks like this:

![Requests junction table](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/3_vpt4mo.webp "Requests junction table")

In reality, we might actually want to add *several* of these junction tables, to represent the different ways that users can be related to requests. For example, if we have process admins, owners, or people who simply need to be notified of developments.

We’re just using one junction table here, because we only want to illustrate the principles of workflow management database design.

Next, we want to add a new table for *contextual data* about requests. 

This is where we’re going to account for the fact that *requests* and *processes* are typically going to display a large amount of *internal variance*.

For instance, the data we store about our fleet management workflows will probably be quite a bit different from a HR process. To reflect this fact, we’re going to create a new table called *requestData*.

This is a key part of any database design for approval workflows.

Along with a unique ID, this will store a series of name/value pairs. That way, we’ll be able to store whatever data is relevant to each individual request and process. This gets a many-to-one relationship with our *requests* table:

![Workflow management database design](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/4_aj4jte.webp "Workflow management database design")

If we wanted to, we could add some extra data entities at this point. For instance - for storing files or comments relevant to different requests and processes in our workflow management system.

But, you might just as easily store these externally, so we’ll keep things simple instead of worrying about those.

At this point, we have all of the data we need to go through the approval and decision-making processes involved in our database.

### 3. States and transitions

Next, we want to outline and codify how these processes will be structured.

Remember, the basis for our workflow logic is going to be how we represent the *state* of each request at any moment in time. We need to define what the possibilities are.

But - all of our states won’t apply to all of our requests. For example, we might have a status that indicates that we’re waiting for a piece of stock to arrive but there will be plenty of requests that this isn’t applicable to - say, an employee mentoring workflow.

So, our first task here is to create a *stateTypes* table. 

This is going to give us a way to *categorize* individual states. This will be an unchanging list, with two attributes:

1. StateTypeID.
2. Name.

We’re using five possible stateTypes that we can categorize our individual states into.

Here’s what this table looks like in Budibase when it’s fetched from Postgres:

![Data object in Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/5_bdhdhe.webp "Data object in Budibase")

Next, we need a table to store our individual *states*. These are the granular, process-specific descriptors of the status of each request.

In the first instance, we want to record three things about each one - a *unique ID,* a *name,* and a *description*. We’ll also want a one-to-many relationship to our *requests* table, and a many-to-one relationship to our *stateTypes*.

Here’s our workflow management database design so far:

![Workflow management database design](https://res.cloudinary.com/daog6scxm/image/upload/v1689941560/cms/workflow-management-database-design/6_kknpgt.webp "Workflow management database design")

Next, we need some way of accounting for how resources move *between* states. This is where we actually define the steps involved in a process.

So, our *transitions* object will consist of its own *primary key*, along with a *many-to-one* relationship to the *processes* table.

We’ll also store attributes for the *currentStateId* and the *nextStateId.* This means that each *transition* entry will act as one step in the flow of *states* that a *request* goes through within a *process*.

Here’s what this looks like in the context of the rest of our model:

![Database schema](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/7_h2tnte.web "Database schema")

### 4. Database actions

Next, we want to think about the specific *actions* and *events* that will move a request from one state to the next. So, *transitions* are the path that requests follow between states. *Actions* are what move them along.

Effectively, these are the human or automated interactions that make up our workflow.

Just like with *transitions,* individual *actions* are going to be unique to each process. Once again, we’re going to start by creating a table to classify these - called *actionTypes*.

This time we’re going to have seven different categories that our actions can fall into. Here’s what the table would look like in Budibase:

![Table in Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/8_rv18b1.webp "Table in Budibase")

Now, we need to create somewhere to store the actions that are permissible within each process. Our *actions* table will store:

- A unique ID,
- A name,
- A description,
- A relationship to the *actionType* table.
- A relationship to the *processes* table.
- A many-to-many relationship to our transitions table.

That last point means we’re going to need another junction table between *actions* and *transitions*.

Our completed workflow management database design diagram looks like this:

![Workflow management database design](https://res.cloudinary.com/daog6scxm/image/upload/v1689941559/cms/workflow-management-database-design/9_xbqnh0.webp "workflow management database design")

### 5. Implementing logic

The last thing we need to do in order to complete our finite-state machine is to determine how we’re going to implement the business logic that we’ve built our database schema around. 

For example, when a user calls a specified action, it triggers a *transition*, causing the *resource’s* *state* to change.

We have a few different options here. One would be to handle everything within the database itself - for instance, using stored procedures or other internal rules within your chosen DBMS.

Or, using middleware would be an equally valid option. So, in just the same way as we’re using our database model as the basis for managing different workflows - we could have a shared process layer for storing rules on how to manage our data.

Finally, we could of course handle this separately in each individual tool we use to query our database.

Honestly though, which of these is right for specific scenarios is outside of the scope of our discussion today. 

Rather, we only wanted to give this as a bit of context to how our workflow management database design *could* be implemented.

{{< cta >}}

## Workflow management database design: other considerations

That’s the bulk of our design completed. But, there are a few other issues that we’d like to draw your attention to before we wrap up.

These aren’t elements of your database design as such - but they are things that impact how our data is accessed, used, and maintained. 

### User groups and RBAC

First off, we sort of glossed over the idea of *roles* within workflow management earlier. Let’s think a bit more deeply about how this works - and how we can implement it.

Role-based access control is based on the principle that colleagues with similar responsibilities can be clustered together to simplify how we grant permissions to access specific resources or carry out different actions.

Check out our in-depth guide on how to [implement RBAC](https://budibase.com/blog/app-building/how-to-implement-rbac/) to learn more.

### Stored procedures

Stored procedures are pieces of code that you can define and save within your DBMS - typically in SQL or SQL-derived databases. Essentially, we can give complex queries a name, and execute them using this - rather than writing them from scratch every time.

This offers several advantages, including making complex actions easier to execute, improving performance, helping to ensure security, and making our database easier to maintain. We can even create stored procedures that we can pass arguments to.

This is particularly helpful in the context of workflow management, where we may only want to expose different kinds of users to very tightly defined actions.

### Validation rules

Validation rules are another critical element of any user-centric data application. Basically, these are used to ensure that any user-provided data complies with the constraints that apply to each individual attribute - either in terms of their form or values.

There are a few different ways that we can implement validation. For example, we can handle this at the database level. This gives us strong protection against invalid data, but it can offer a less-than-ideal user experience. 

If something goes wrong, most users won’t be able to understand what the problem is from a database error. Therefore, it’s a good idea to complement this with UI or process layer validation too, to give more user-friendly feedback when data fails our validation rules.

### Workflow automation

Of course, one of the key reasons for regularizing our workflow management data in the first place is facilitating automation. The more effective we are in building a consistent workflow management database, the more easily we can automate processes at scale.

In terms of implementation, there are a bunch of different approaches here. One is leveraging dedicated workflow automation tools, like Zapier. Or, we always have the option of relying on fully-customized, hard-coded solutions.

Nowadays, more and more IT teams are turning to low-code development to create custom workflow management tools, including automating functions that would otherwise require manual interactions.

### Managing database interactions

Finally, we can’t speak about database design without touching on how we allow users to manage the information we store. For example, do we reserve this for database administrators working with manual queries?

Or, do we want to create more accessible tools for less technical colleagues to interact with our data - like CRUD apps, dashboards, admin panels, or other common internal tools?

To learn more, check out our ultimate guide to [data management software solutions](https://budibase.com/blog/data/data-management-software/).