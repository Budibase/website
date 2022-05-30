+++
author = "Ronan McQuillan"
date = 2022-05-22T23:00:00Z
description = "A database schema is a blueprint for how data is organized and structured. Our guide explains everything you need to know."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653318045/cms/What_is_database_schema_header_xhuznt.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1653318045/cms/What_is_database_schema_header_xhuznt.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is a Database Schema?"

+++
Your app’s database schema is absolutely central to its functionality, performance, and success. In fact, this determines just about every aspect of how your finished app will work.

As such, knowing how to create an effective schema is critical when building any kind of tool.

In this guide, we’ll cover everything you need to know. We’ll start with the basics, including what a schema contains, before moving on to more specific details you need to know when working with different kinds of databases.

Finally, we’ll take a look at how low-code development is shifting the balance here.

First though, let’s look at some definitions.

## What is a database schema?

A database schema is a blueprint for the way your data is organized and structured. In other words, this is a set of rules for what data can be stored, along with how and where. Note that this is separate from the actual values that your database will store.

Creating a schema means mapping out the values your database will store, how they’ll relate to each other, and the rules that will govern them.

In other words, a schema is a blank canvas for your data. Later, you can start to populate this with actual values.

The goal is to build a framework that closely matches your requirements for your finished app. Then, you can use this as the foundation of your business process layer, and your user interface.

### Why do you need a schema for your database?

When building apps, you should normally develop a robust database schema, before you do almost anything else.

One reason for this is ensuring that the data you gather and store actually matches up with what you need for your app to work properly. For example, in terms of formatting, specificity, and consistency.

There’s also the issue of ensuring interoperability between systems. That is, if you’re building an app that you want to integrate with other tools, this will be a factor in your database schema design.

If you know from the outset that this is a requirement, you should build this fact into your schema, including through your choice of data types and formats.

Finally, your schema acts as a kind of roadmap for any developer that will work on your app project. Having a clear blueprint of your app’s data is crucial when building processes, user interfaces, and automation rules.

## What should your schema include?

But what specific information does a database schema contain? Remember, the idea is to outline the data you’ll store, what rules apply to different values, and how different variables will relate to each other.

With that in mind, here are the more specific contents of an effective database schema.

### Tables

A database is a way of organizing data into one or more tables. These are made up of _rows_ and _columns_.

Note that this works a bit differently in NoSQL databases. We’ll dive into this further a little later. For now, we’re assuming you’re using a relational DBMS, as these are more common.

The first thing to do when creating a schema is to outline your database tables.

Each table should represent a single _entity_. The columns represent the different _attributes_ that this entity can have, while the rows represent individual instances. So for example, say you have a table for all of your employees as part of a [company directory app](https://budibase.com/business-apps/templates/employee-directory-template/).

The columns will be made up of all the information you want to store about each individual employee, like their name, job, address, and phone number. The rows in the table are then used to populate this information, for specific members of your team.

Tables must also have a unique name within your database. This is a piece of metadata that allows us to refer to each specific table when making queries from other elements of our app.

In our company directory app, we might call our employees table _employees_ or _employee_details._

![Database Table](https://res.cloudinary.com/daog6scxm/image/upload/v1653319100/cms/Table_septek.png "Database table")

Depending on your needs, you might opt to include a single table in your schema. Typically, this kind of schema would be used for very simple applications. More often, you’ll have several related tables.

More on this later.

### Fields and attributes

We know that each table’s columns represent the different _attributes_ an entity can have. These are also referred to as _fields_. A key part of your schema is outlining these in detail. This is where you’ll flesh out the more specific data you want to store.

Naturally, the first element of this is defining the attributes you need to store against each of your entities. Your app requirements are a good starting point here.

In other words, what data will you need for your app to work? What do users and system processes need to know about each entity?

Let’s stick with our company directory app example.

At a minimum, we’d probably decide we need two tables for this to work. We’ll call these _employee_details_ and _user_details_. As you might have guessed, these will represent our employees and our users respectively.

Now we can flesh out and name the attributes we want to store within each table.

So for _employee_details_, our attribute names might be:

* first_name,
* last_name,
* email_address,
* phone_number,
* department,
* job_role,
* date_of_birth,
* join_date,
* unique_id.

For _user_details_, we might store:

* name,
* email_address,
* access_level,
* unique_id,
* Any required authentication details.

One key thing to keep in mind here is that we can’t have two attributes with the same name in a single table. This would make querying values incredibly confusing, so your database management system (DBMS) won’t allow it.

We’ll also need at least one of the attributes to be unique for each row in the table. The idea here is the same. We need some way of distinguishing between rows so that we can reference them in queries.

You could do this using one of the attributes that you derived from your business requirements. However, this will create problems, as it prevents us from having multiple rows with the same value for that column.

For example, you could easily have two John Smiths working in your accounting team.

A better option is creating a _unique ID_ attribute for each table. This is normally a system-generated variable that’s used to refer to specific rows. There are a few different standards for this, but they all share the same goal.

That is, to provide us with a fully unique way to reference any given row in our table.

### Data types

Once we know the attributes we need to store and what we want to call them, we’ll also need to define the kinds of values they’ll store. For example, do they store numerical or text-based values?

This is known as the attribute’s _type_.

Different database standards and app-building tools will offer slightly different options here. Generally, the data types you can assign to each attribute are:

* **Strings -** Text-based variables.
* **Numbers -** Either integers or decimal numbers.
* **Date/Time -** Temporal data.
* **Arrays -** Lists of values in a set order.
* **Enumerators -** Defined options.
* **Booleans -** True/false data.
* **Formulas -** Outputs based on defined rules applied to other values.
* **Unique IDs -** A defined system for creating unique identifiers in your DBMS, for example, in UUID or GUID formats.

With some tools, like BudibaseDB, you’ll be able to use additional data types, such as _file attachments, relationships_ or _long-form text fields_.

So, if we apply this to the attributes we identified for our _employee_details_ table, we’d have something like this:

* first_name: _string,_
* last_name: _string,_
* email_address: _string,_
* phone_number: _string,_
* department: _enumerator,_
* job_role: _string,_
* date_of_birth: _date,_
* join_date: _string,_
* unique_id: _unique ID._

### Rules

Once we’ve defined a data type for each attribute, it’s time to start thinking about any rules we want to govern these.

Some of the most important rules you can implement include:

* How values should be formatted.
* Default values.
* Whether an attribute is required.
* Whether an attribute can be duplicated or must be unique to an instance.

So for example, we might stipulate that phone numbers must be a specific number of characters, to ensure the validity of the value. Or, we could make all of our _employee_details_ attributes mandatory, except _date_of_birth,_ so employees can keep their age private.

You can also apply rules to the specific formats of different data types. For example, certain numerical values may need to be integers, while others might be set to a fixed number of decimal places.

You’ll also want to specify a format for any date attributes, to ensure consistency across your database.

### Relationships

A key part of your database schema is defining the relationships between different attributes and values. Note, that not all database standards offer relationships between different data.

For example, relationships are a core feature of SQL databases, but other tools don’t support them. Others support a form of relational data, but treat it slightly differently. Again, we’ll take a look at this in more detail when we discuss NoSQL databases.

For now, relationships are how you’ll define the ways that different entities interact with each other. In other words, they allow us to create links between rows across different tables.

Between two tables, we can implement three different kinds of relationships:

* **One-to-one relationships -** Each row in the first table can be related to a single row in the second.
* **One-to-many relationships -** Each row in the first table can be related to several rows in the second.
* **Many-to-many relationships -** Several rows in each table can be related to each other.

Each of these is useful in different contexts. In our company directory example, we’d likely use a one-to-one relationship, so each user is linked to the corresponding _employee_details_ entry.

![One to one relationship](https://res.cloudinary.com/daog6scxm/image/upload/v1653316251/cms/7_poof4m.png "One to one relationship")

If we had a third table, for example, _department_details,_ we’d likely use a one-to-many relationship, to join each department to all of the corresponding team members in the _employee_details_ table.

### Views

A _view_ is a defined subset of a database, which is created by a stored query. This is predefined in your schema so that users and system processes can query it in much the same way they would a standalone database.

This allows you to limit the degree of exposure that different users or processes have to the underlying database.

Views offer a number of benefits, including allowing you to:

* Limit access to different data.
* Create virtual tables, simplifying or joining different entities.
* Return aggregate values, like sums, averages, and counts.
* Create virtual tables to sort or filter by different attributes, for example, sales figures for individual years.

Since views are created by stored queries, they can be configured as _read-only_ or _updatable_. This is a helpful way to ensure the security and integrity of the underlying data.

So we might have one master database, storing all of our sales leads. We could then use two views to create virtual tables for _enterprises_ and _SMBs_, based on each entry’s number of employees.

![Databaes views](https://res.cloudinary.com/daog6scxm/image/upload/v1653318838/cms/Views_imdz0b.png "Database views")

### Stored procedures

For certain database standards, including SQL, your schema can also include _stored procedures_. These are set pieces of code that you can apply to different values, elsewhere in your application.

This works a bit like defining a function, using a set of SQL statements. The key benefit is that you can create the procedure once, and use it to perform the same task over and over again. This eliminates the need to manually code it again elsewhere.

You can simply call the stored procedure in your queries.

This also provides performance benefits across your app.

For instance, our company directory example stores each employee’s date of birth. We might want to create a stored procedure in our database schema to calculate their current age based on this.

We can then use this in various ways across our app’s interface, without the need to store a new attribute or calculate it more than once.

### Primary and foreign keys

In relational databases, like SQL, you’ll encounter the terms _primary_ and _foreign keys._ These are attributes that are used to define relationships between entities. This can be either an existing attribute or one created for this specific purpose.

Often this is the row’s _unique ID_. Other times, you might use a different attribute, to improve readability for database users.

The _primary key_ is the attribute that’s used within a table to identify a specific row. To avoid confusion, this must be a unique value. It also can’t be null.

The _foreign key_ is an attribute that one table uses to reference a specific row in another table. This is the same value as the row’s _primary key_ in its own table. This doesn’t have to be unique, for instance in the case of one-to-many or many-to-many relationships.

Foreign keys can also be null, where the specific row does not have any relationships in the other table.

Each table can only have one _primary key_ attribute, but it can have many _foreign keys_, to allow relationships with multiple tables.

In our company directory, each row in _employee_details_ has one primary key, but it could have two different attributes, to store the foreign keys for related rows in the _department_details_ and _user_details_ tables.

![Database schema primary and foreign keys](https://res.cloudinary.com/daog6scxm/image/upload/v1653318773/cms/Primary_and_Foreign_Keys_gkyduy.png "Database schema primary and foreign keys")

## Types of database schema

Now that we know what a database schema is and what it contains, we can start thinking about creating our own.

The first part of this is understanding the different types of schema, how they fit together, and how they’re used by different stakeholders.

We can break this down into three layers:

1. Conceptual.
2. Logical.
3. Physical.

These vary in terms of how technical or abstract they are. Each one is useful for different stakeholders within your app project.

Let’s take a look at each of them in turn.

### Conceptual schemas

Your conceptual database schema is an abstract overview of the data your app needs to meet its core requirements. Note that this is primarily focused on your business’s information needs, rather than the actual underlying structure of your database.

This is generally the first stage of creating your schema. It’s primarily created for the benefit of non-technical stakeholders.

At this level, we can simply define the entities we need, the attributes each will contain, and an overview of the relationships between them.

We don’t need to be concerned at this stage with the specifics of how we’ll format and store data, or even necessarily how we’ll operationalize different variables.

For example, if we wanted to create an ecommerce store, at the conceptual level we might decide we need four distinct entities:

* Products.
* Orders.
* Customers.
* Users.

We could then list out the basic properties we want each instance of these entities to have.

We might even establish the basic ways they can be related. For example, each user is linked to one customer, each customer can create many orders, each order can contain multiple products, etcetera.

### Logical schemas

Next, we can build on this to create a _logical schema._ This provides more granular technical detail to our conceptual schema. For instance, the specific keys we’ll use to create relationships between entities.

At this point, we can begin to translate our desired entities and attributes into more concrete tables and columns. As the name suggests, the logical database schema also outlines any logical constraints that will be applied to values.

For example, we can outline any rules we want to govern different attributes, at least in abstract terms.

The goal here is to create a technical outline of how our database should be structured, irrespective of the specific DBMS we end up using.

### Physical schemas

Finally, the physical schema is a concrete, technical design for our database. A large part of this is translating your logical schema into a more detailed model that suits the specific requirements of your chosen DBMS.

This includes creating and naming all tables, attributes, and keys, as well as validation rules, triggers, stored procedures, and integrity constraints. We’ll also implement the relationships we outlined in the previous levels of our database schema.

The physical schema also includes the technical detail of how and where your data will be stored, including indices, paths, and domains.

Creating a physical schema is often synonymous with creating the database itself.

That is, once this process is complete, we’ll actually have a finished database that we can populate.

## Database schema designs and models

As we know, the schema is an outline of how our database is structured. However, there are a number of different ways to structure a database. This is what’s known as your _database schema design_.

Your choice of schema design depends largely on your app’s requirements.

Luckily, there are a few common models we can rely on here. Let’s take a look at the most important ones for creating modern applications, along with schema diagrams for a visual representation.

### Flat

The flat model is the most basic kind of database schema, consisting of a single table. Essentially, this is little more than a CSV file, or a spreadsheet. Sometimes, this is all that’s needed for simple apps, like a sign-up tool.

Obviously, this comes along with certain limitations. Most notably, you can’t really define relationships between entities with a single table. In fact, you’ll effectively only have one entity to work with.

However, there are also key benefits to the degree of simplicity offered by flat database schemas. These include ease of use, low costs, and a general lack of complexity.

Flat schemas are often used for simple, single-function internal tools. For instance, an online call-back form.

![Flat Database Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1653318358/cms/Flat_Schema_veoot8.png "Flat Database Schema")

### Relational

Relational database schemas are ubiquitous for modern applications. As we’ve seen already, building relationships between different entities is foundational to the functionality of many app projects.

As we referred to earlier, this means creating tables for distinct entities and using primary and foreign keys to create different kinds of relationships between them.

This introduces a large degree of complexity, as each entity can have different relationships to several other tables.

However, relational databases also provide high levels of flexibility. For example, there is a massive scope to establish your own complex design for how each of your tables relates to the others.

Relational schemas also make it easy to query complex, related data. Specifically, it’s possible to query attributes in a related table, without the need to go through a hierarchical or directory-based structure.

![Relational Database Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1653318326/cms/Relational_Schema_wvd2cj.png "Relational Database Schema")

There are countless different ways you can organize your entities using a relational schema. This gives you the flexibility to create a schema that works for your particular entities and business requirements.

With that in mind, let’s take a look at a couple of common variations.

### Star

A star schema is an evolution of the relational model, which divides entities into _facts_ and related _dimensions_. Facts are always numerical, while dimensions are descriptive.

This model gets its name from the fact that several _dimension_ tables branch off a single _facts_ table, in a hub and spoke format.

For example, we might have a _facts_ table to record sales on our online store. We’d then use _dimension_ tables branching off this to record more specific attributes _items_, _locations_, _salespeople_, _customers_, or other important entities.

The _sales_ table only needs to contain the number of units sold, and the foreign keys for each respective row in the dimension tables.

The simplicity of the start model makes it easy to visualize and understand the relationships between entities. However, it’s limited in terms of flexibility, as you can’t create more complex relationships.

![Star Database Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1653318290/cms/Star_Schema_uzqxr4.png "Star Database Schema")

### Snowflake

A snowflake schema is essentially a more complex variation on the star model. The difference is that in a snowflake database schema, each dimension table can also have additional dimensions branching off from it.

So, to return to our previous example, we could add additional dimensions branching off from our _items_ table. For instance, warranty information, details of any promotional offers, or other related product details.

We can do the same for any of our dimensions.

As you might have guessed, the snowflake model takes its name from the fact that its branches of dimensions tables resemble a snowflake.

This offers more flexibility than the star model while retaining much of its simplicity.

![Snowflake Database Schema](https://res.cloudinary.com/daog6scxm/image/upload/v1653318257/cms/Snowflake_Schema_yyirab.png "Snowflake Database Schema")

## Schemas within different database standards

Earlier we said that part of creating your physical schema is translating your requirements into a concrete structure that’s consistent with the conventions of your DBMS. As such, it’s important to understand the differences between common database standards.

Here are some examples of how schemas operate in different DBMSs.

### SQL

In a SQL database, the schema is made up of an unlimited number of _objects_. Objects here refer to tables, views, functions, and indexes. We can create a single schema that’s used across multiple databases.

Take a look at our article on [how to integrate multiple databases](/blog/data/how-to-integrate-multiple-databases).

Objects can also be transferred between different schemas.

We can define a schema in SQL using the _CREATE SCHEMA_ command, to give it a name, and define any database objects within it. Alternatively, SQL treats _DATABASE_ and _SCHEMA_ synonymously, so we can also use _CREATE DATABASE._

There are a number of other parameters which are associated with a SQL schema.

These include:

* **schema_title** - the name of the schema.
* **AUTHORIZATION owner - the user who created or currently owns the schema.**
* **DEFAULT CHARACTER SET set_name - stipulates the default character set used by values in the schema.**
* **CREATE statements** - any required CREATE statements.
* **GRANT statements** - any required GRANT statements.
* **PATH schema_title** - file path and name, if required.

Note that, by default, the user who creates the schema will be its owner. This can then be transferred to another user later.

### Postgres

PostgresSQL is an open-source DBMS, designed to extend SQL’s functionality while maintaining the same basic querying language.

However, Postgres treats database schemas a little bit differently.

A Postgres schema is a _namespace_, containing all of the database’s stored objects. A _namespace_ is simply a collection of names that are used to refer to different objects. This also helps to ensure that all object names are unique.

Postgres databases can have more than one schema. However, each schema can only belong to one database.

A public schema is also created by default when you create a Postgres database. Any objects that are not assigned to a schema manually can be found here.

### NoSQL

Things are a little bit trickier when it comes to NoSQL databases. In fact, there’s debate as to whether these need schemas at all. This is because they have what’s called a _dynamic schema_.

That is, there’s still an underlying logic to the way you organize your database, but it’s more flexible. This means that NoSQL databases are easier to modify, to respond to changes in your business needs, or the data they contain.

However, you’ll still obviously need to have a clear picture of the data you want to store before you start creating an application.

So you’ll still need to thoroughly consider the different entities and attributes you’ll need for your app to meet its requirements. With a NoSQL DBMS, we just won’t store different entities’ details on different distinct tables.

MongoDB is an example of a NoSQL DBMS.

There’s also a misconception that NoSQL databases can’t handle relationships.

This isn’t true. They just do it a little bit differently to relational DBMSs. Rather than relying on multiple tables for different entities, NoSQL DBMSs allow you to nest relational data within single objects.

In many cases, this can improve scalability and query speed, as the same information can be retrieved from one entity, rather than two or more.

## Database schemas and low-code development

As we said at the outset, creating a database schema is a critical first step when building apps. This has a huge impact on your application’s functionality, performance, security, and ultimate success.

But what is a database schema’s role in the age of low-code development?

After all, low-code is all about simplifying and speeding up the development process. Do you still need to spend time creating a database schema?

For sure, low-code changes things, but database schemas remain critical.

To understand how let's take a look at how Budibase handles different kinds of data.

### BudibaseDB

BudibaseDB is our built-in database. We’re biased, but we think this is the fastest way anyone can build a database for their app project. Add tables, create attributes, and enter rows, at the click of a button.

Our database supports a wide range of intuitive datatypes, including long-form text, relationships, formulas, and file attachments.

BudibaseDB also supports relationships between entities, without the need for any DBMS knowledge. Assign a display column, and create complex relationships in seconds.

![BudibaseDB](https://res.cloudinary.com/daog6scxm/image/upload/v1653318188/cms/Budibase_DB_s3zdq2.png "BudibaseDB")

Our built-in database also makes it easy to quickly add or alter attributes and screens, as your needs change. Build an initial database schema, and allow it to evolve as your app’s requirements change.

With CSV uploads, autogenerated CRUD screens, and automatically updatable form UIs, Budibase is the fast, easy way to build tools around your perfect database schema.

### Connecting to external databases

We also offer extensive connectivity for a range of external databases. You can build Budibase apps around SQL, Postgres, MongoDB, Airtable, and more. Leverage existing data, or build your database schema from scratch, using your preferred DBMS.

Budibase gives developers the power to create the perfect data layer for their specific apps. Build your own in-depth database schema, or use BudibaseDB to create a flexible, scalable database in seconds.

Or, use our platform to query and manage existing datasets.

We also offer dedicated data connectors for REST API and Google Sheets.

Take a look at our ultimate guide to [data sources](/blog/data/data-sources) for web app projects.

![External database connectors](https://res.cloudinary.com/daog6scxm/image/upload/v1653318127/cms/External_Data_Connectors_kszh1s.png "External database connectors")

## Start using Budibase

Our users choose Budibase for fast, cost-effective builds, and unrivaled flexibility. Build your data layer, create professional UIs, and deploy finished apps, in minutes.

Use BudibaseDB to quickly build an adaptable database schema or query eternal databases with our range of connectors.

You might also enjoy our guide on [how to create a data model](/blog/data/how-to-create-a-data-model).

Start using Budibase today, for free.