+++
author = "Joe Johnston"
date = 2024-03-06T00:00:00Z
dateModified = 2022-04-04T00:00:00Z
description = "A CRUD app is a piece of software that's used to create, read, update & delete database entries"
images = ["/blog/crud-app/images/read.webp"]
title = "What is a CRUD App & How to Build One in 3 Steps"

+++
We use CRUD apps every day. Most of the time, without noticing. They keep us organized, they help digitise business processes, and they're critical to application development. But many of us are oblivious to what CRUD apps are, or how to build one. Within this post, I am to provide you with a simple and straightforward guide to the world of CRUD apps. The guide is broken down into three sections:

1. [What is a CRUD app](#what)
2. [How to build a CRUD app](#how)
3. [Why CRUD is important](#why)

{{< youtube DsBudu6Kzls >}}

{{< custom-cta text="Build CRUD tools on top of any data with Budibase">}}

## What is a CRUD App {#what}

> A CRUD app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete.

At a high level, CRUD apps consist of three parts; the database, user interface, and APIs.

#### Database

The database is where your data is stored. A database management system is used to manage the database. There are several different types of database management systems (DBMS) that can be categorized by how they store data; relational (SQL), Document (NoSQL). If you are deciding what DBMS to choose for your CRUD app, here’s a list of the [14 best database management systems](https://www.budibase.com/blog/best-database-management-software/). Going forward, our content will focus on SQL. SQL databases consist of tables. Tables consist of records. Records consist of fields. Fields consist of data.

#### User Interface

The user interface (UI) is what your users interact with. Due to the increasing popularity of applications, businesses are now prioritizing user interface design and user experience.

#### APIs

Finally, the APIs are how your application informs your database of what functions to perform. These functions can be modeled in different ways but they are designed to perform four basic CRUD operations; Create, Read, Update, Delete.

### CRUD operations

As previously mentioned, there are four basic CRUD functions; create, read, update and delete. These four operations map to functions/statements, as seen in the following table:

| OPERATIONS | FUNCTIONS |
| --- | --- |
| Create | Insert |
| Read | Select |
| Update | Update |
| Delete | Delete |

Each letter in CRUD can also be mapped to an HTTP protocol method:

| OPERATIONS | HTTP PROTOCOL |
| --- | --- |
| Create | Post |
| Read | Get |
| Update | Put |
| Delete | Delete |

Let’s dive deeper into each of the CRUD operations. We’ve used a library management app as an example to help with learning.

#### Create

Create allows you to add new rows/records to a database/table or other persistent storage. If the record does not exist, the create operation adds it to the database.

**Recipe example**

1. Create/add a new book to our library management app

{{< figure src="/blog/crud-app/images/create.webp"  alt="Create a record in a basic crud app" >}}

#### Read

Read is the operation that allows us to see the recipe we just created. It does not alter data. It simply displays it. Read consists of a function that queries our database and fetches all our records, in this case, recipes. We can tailor our queries to pull back all recipes, or only recipes of a particular type (for example,, vegan recipes). We can also pull back a single recipe if we have a UID (unique identifier).

**Recipe example**

1. View the books within our library

{{< figure src="/blog/crud-app/images/read.webp"  alt="Read records from a basic crud app" >}}

#### Update

Update is the operation that allows us to modify existing data and records within a table. This enables users to update a single field within a record or multiple fields at once. It is also possible to update multiple records at once too.

**Recipe example**

1. Update a book's availability

{{< figure src="/blog/crud-app/images/update-2.webp"  alt="Update a record in a basic crud app" >}}

#### Delete

Delete is the operation that allows us to remove records from a table using a CRUD web application.

**Recipe example**

1. Remove a book from our library management system

{{< figure src="/blog/crud-app/images/delete.webp"  alt="Delete a record in a basic crud app" >}}

### Two additional basic CRUD app examples

#### Recipe app

1. Create - Add a new recipe to my recipe app
2. Read - View recipes in my recipe app
3. Update - Update the carbonara recipe in our recipe app to use guanciale instead of bacon
4. Delete - Remove the carbonara recipe from my recipe app

#### Project management app

1. Create - Insert a new task in your project management tool
2. Read - View all open tasks
3. Update - Mark a task as ‘complete’
4. Delete - Remove a task from your project management app

### CRUD app ideas

If you want to get started and work on CRUD app ideas, this section provides you with some inspiration.

In general, whenever you see data storage there is potential for a CRUD web app. From something as simple as a to-do list to complex software and apps.

#### CRUD use cases

There are several use cases for CRUD apps, including:

* Event management app,
* Student portal,
* Sports club membership app,
* Book club app,
* Content marketing calendar,
* OKRs app,
* To-do app,
* Project management app,
* Applicant tracking system.

#### What are CRUD projects?

You can create CRUD projects in any application that requires data storage. They can range from a simple standalone table to complex projects with hundreds of interlinked tables.

Another interesting aspect is that many daily tasks are based around CRUD software even if users don’t realize it. For example, a spreadsheet containing your monthly finances uses CRUD operations. 

That is, you can create, read, update and delete data from it.

### CRUD platforms / frameworks / tech stacks

There are many, low code platforms, frameworks, or tech stacks that provide an effective workflow when creating CRUD apps. For instance, full-stack developers might use very different methods to more specialized or less technical colleagues.

* Budibase
* Python and Django
* LAMP - Linux, Apache, MySQL, PHP
* Supabase and Next.js
* MEAN - Mongo, Express, Angular, Node.js

***

## How to build a simple CRUD app {#how}

Budibase is a low code platform that is designed for creating CRUD applications. From the frameworks, tech stacks, and platforms listed above, Budibase is the easiest and fastest way to build a CRUD application. For these reasons, we will use Budibase to build our CRUD app.

{{< cta >}}

### Overview

A local library is currently using an spreadsheet to manage their catalogue of books, and they would like to upgrade to a CRUD application.

Our app must:

1. Make it easier to add new books
2. Make it easier to search books
3. Make it faster to check the availability of books
4. Improve the experience when updating book information, including availability
5. Make it possible to assign users to books
6. Improve the experience around deleting books

### Building our library management CRUD app

There are three high-level steps to building our CRUD app; setting up Budibase, create our data structure, and designing our user interface.

#### Setting up Budibase

If you are new to Budibase, click the ‘Get started’ button in the navigation (if on mobile, click the burger menu, then the ‘Get started’ button). Once you have Budibase setup, follow the actions below:

##### Actions:

* Click the ‘Create new app’ button.
* Give your app a name. We are going to call our app the ‘Library management app’ - very original.

{{< figure src="/blog/crud-app/images/create-new-app.webp"  alt="Create new crud app" >}}

#### Create your data structure

Budibase has its own database and supports several others; including MySQL, PostgreSQL, Mongo, and more. For our CRUD app, we will simply use Budibase’s internal database - Budibase DB.

##### Actions:

* Create a Budibase DB table, and call it ‘Books’
* Create a column within your Books table, and fill out the form:
  * Name - Title
  * Type - Text
  * Select ‘Primary’ under search indexes
* Create another column within your Books table, and fill out the form:
  * Name - Author
  * Type - Text
  * Select ‘Secondary’ under search indexes
* Create another column within your Books table, and fill out the form:
  * Name - Status
  * Type - Options
    * Options 1 - Available
    * Options 2 - Not available
* Create another column within your Books table, and fill out the form:
  * Name - Checked out by
  * Type - Relationship
  * Table - Users
  * Define the relationship - One Users row -> many Books rows
  * Column name in other table - Books
* That’s our database and table structure setup. Now let’s add a few records for testing purposes:
  * Click ‘create row’
  * Complete the form:
    * Title - Superfreakonomics
    * Author - Stephen Dubner
    * Status - Available
    * Checked out by - leave blank
    * Click 'save'
  * Click ‘create row’
  * Complete the form:
    * Title - Burning Bright
    * Author - John Steinbeck
    * Status - Not available
    * Checked out by - leave blank
    * Click 'save'
  * Click ‘create row’
  * Complete the form:
    * Title - Electric Universe
    * Author - David Bodanis
    * Status - Available
    * Checked out by - leave blank
    * Click 'save'
  * Click on the Design tab (in the top navigation bar)

{{< figure src="/blog/crud-app/images/data.webp"  alt="Create a new crud app table" >}}

#### Designing your user interface

The design section is where we create our User Interface. You will notice on the left-hand side of your screen, there is a list of screens/routes and components. These screens were autogenerated by Budibase. Budibase is smart enough to know that for each Budibase table you create, you will need a new, list, and detail screen, in other words, a create (new), read (list), update + delete (detail) screen. This makes it faster and easier to build CRUD apps. Let’s get started.

##### Actions:

* Click the books/:id screen
  * Click ‘Field group’
  * In the settings panel, click ‘Update form fields’

    _This should generate a form, with record details in it, and will allow us to update and delete individual records._
* Click the books/new/row screen
  * Click ‘Field group’
  * In the settings panel, click ‘Update form fields’

    _This should generate a new form for adding new books_

{{< figure src="/blog/crud-app/images/update-form-fields.webp"  alt="Update form fields in Budibase app" >}}

_Adding search_

* Click on the ‘Container’ component under /books
* Add a form component (located within the component panel ((above the main screen))
* Drag the ‘Data Provider’ component (with children) inside the ‘New Form’ component
* Click on the ‘New Form’ component
  * In the settings panel (right panel), select the Schema dropdown, and select Books
  * Under Theme, select ‘Lightest’
* Add a Text Field component (under Form in the component panel)
  * Drag the text field component above the data provider component (and nested under 'New Form')
  * In the settings panel, click the ‘Field’ dropdown and select Title.
  * In the ‘Placeholder’ textbox, add a placeholder - we will use ‘Search title’.
  * Find the ‘Margin’ section and change ‘Bottom’ to ‘20px’.
* Click the ‘data provider’ component in your left nav panel
  * Click ‘Define Filters’
  * Click ‘Add expression’
  * In the first dropdown, select 'Title'
  * In the second dropdown, select ‘Starts with’
  * In the third dropdown, select ‘Binding’
  * And in the fourth input, click the little lightning bolt
    * A new drawer will appear. Select the ‘New Form.Fields.Title' option under ‘Columns’, and click ‘Save’
    * Click ‘Save’ again (to save your new filter)

{{< figure src="/blog/crud-app/images/search.webp"  alt="Create search within your CRUD app" >}}

You’ve successfully added search and we now have our final CRUD app that will:

1. Make it easier to add new books
2. Make it easier to search books
3. Make it faster to check the availability of books
4. Improve the experience when updating book information, including availability
5. Make it possible to assign users to books
6. Improve the experience around deleting books

And believe it our not, that’s us finished. Well done! Click the preview button (play icon) to view your CRUD app, or click Publish to push it live.  Click the Books link, and there is your table with search.

> Tip - if you click the Books screen, and change the route to '/' it will reroute to your homepage.

{{< figure src="/blog/crud-app/images/searching.webp"  alt="A picture of our new CRUD app" >}}

***

## Why CRUD is important {#why}

The CRUD acronym is a great, memorable framework for building applications and constructing usable models. We can examine why CRUD is essential from two fronts; developers and end-users.

1. For developers, CRUD operations are essential to app development. In a similar vein, REST, a superset of CRUD, is necessary for website development.
2. For end-users, CRUD operations allow them to fill out forms, edit data, manage their admin panels and user settings.

CRUD offers many other benefits including:

* Security control
* It is more performant vs. SQL statements
* It’s tried and tested
* It’s a recognized pattern and recognizable by most devs
* It simplifies the process and provides an easy framework for new developers to learn

***

## CRUD Software and alternatives

CRUD means Create, Read, Delete, Update. From this definition, it's clear that CRUD is closely related to databases and data storage. CRUD is the simplest form to interact with tables and documents, and it provides you with a representation of the database itself as it is.

This means that any app that uses these methods is CRUD software. This begs the question, are there other ways to interact with data?

By definition, CRUD itself is limited to primitive operations. But you can do other operations to aggregate, manipulate and represent data in completely different ways.

For example, CRUD software can provide you with ways to interact with each individual table within a database. Alternatively, you could create REST API endpoints or even app screens that load all consituent tables in one place.

Therefore, you can spice up your CRUD software with additional methods that aren’t just pure CRUD.

Check out our ultimate guide to [data sources](https://budibase.com/blog/data/data-sources/) to find out more.

## CRUD app templates

You can find over 50 CRUD app templates on the Budibase template page. These templates are free, 100% customizable, and simple to install.

[View Budibase templates](https://budibase.com/templates)

{{< figure src="/img/meta-images/templates.png"  alt="CRUD app templates" >}}

***

And that’s the wrap. I hope you found value within this post and your understanding of what a CRUD app is and how to build one has improved. I wish you all the best on your development journey.