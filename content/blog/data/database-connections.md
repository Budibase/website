+++

author = "Ronan McQuillan"
date = 2023-09-05
description = "Database connections are used to enable client applications to retrieve and manage data."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1693905197/cms/database-connections/Database_Connections_Header_dlc8xf.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1693905197/cms/database-connections/Database_Connections_Header_dlc8xf.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are Database Connections?"

+++

Database connections are some of the most fundamental aspects of any development, data, or digital transformation project. But despite this, they don’t really get all that much attention.

Obviously, this is a pretty major oversight. 

See, how you manage different tools’ and solutions’ connections to your data assets has a direct impact on everything from internal development experiences and project costs to database performance and the quality of your eventual solutions.

We’re also constrained by the requirements of working with different systems - including at the levels DBMSs, servers, and clients - as well as the technical abilities of the teams who are building solutions.

Today, we’re covering everything you need to know - from the theory behind setting up database connections to the specific standards, protocols, and conventions you’re likely to encounter in the field.

We’ll even check out some of the tools and strategies you can leverage to maximize efficiency, security, and performance in cross-platform solutions.

But first, let’s get the basics under our belts.

## What are database connections?

The first challenge here is that *database connections* is a little bit of an ambiguous term - at least in the sense that it means different things in different contexts. 

Broadly though, we’re dealing with any tool, piece of software, or even just a couple of lines of which allows a client application to communicate with a specific database server. 

Depending on the nature of what you’re building and how you’re doing it - this could be a separate file with the location and credentials for your database - or it might be dedicated UI within an existing tool where you can enter these information.

However, there are a couple of other contextual meanings that you should be aware of too. within some DBMS tools, a database connection refers to a specific *session* when a client is connected to a database.

Under this nomenclature, each time a client connected to the server, it would be referred to as a new *database connection*, even if the exact same configuration is used. A new connection opens each time it goes live.

Besides this - in different contexts - the term database connection might variously be used to refer to the *theoretical model* in use, the actual technical implementation, the flow of data across the path that’s established, or an action that’s used to set up the connection.

But, these are just semantic variations for you to be aware of. For our purposes today, we’re sticking with our definition of a database connection as anything that enables a client application to talk to a database server.

We’ll look at examples of how to establish database connections in specific platforms a little bit later.

You might also like our round-up of the top [Airtable alternatives](https://budibase.com/blog/alternatives/airtable/).

### When do we need to configure database connections?

So when does this come into play? One obvious answer would be any time that we need to connect a client to a database, right?

This is true of course but it’s not very satisfying.

To understand this better, we need to have a clearer picture of what we’re actually talking about when it comes to client applications and the different places they might need to pull data from.

Client-side can mean a number of different things, including:

- A web app.
- A web page.
- Local software.
- Code files on your local machine.
- Dashboards, reporting tools, and analytics platforms.
- Existing SaaS tools.
- A GitHub repository.
- Other data management solutions.
- Anything else that we can connect to a database.

On top of this, data can be stored and managed with a whole range of different hosts. This could be anything from a particular directory on your local file system - to a company-wide server, to a massive public cloud solution - and all places in between.

So, in theory, our database connection could be a combination of these clients and types of storage.

In this context, the role of database connections should be pretty obvious. They enable us to call, manipulate, and manage data that’s stored in one location using tools that may or may not be stored in another.

However, there are a couple more important things to get to grips with. First, our configuration for connecting to a database will also be used to determine our access. So, we might need certain credentials to access particular data - or even the data set as a whole.

On top of this, our database connections are factors in the security, performance, and other aspects of your end solutions. This is because they directly influence how data travels across different nodes within systems - impacting speed, reliability, and more.

We'll also see a few distinct types of connections a little bit later, along with the strategies that can be used to create connections.

![Data preparation costs](https://res.cloudinary.com/daog6scxm/image/upload/v1693907174/cms/database-connections/Digital_Transformation_ROI_https___media.edq.com_49061a_globalassets_blog-images_2018-data-management-stats.png_nslpw0.webp "Data preparation costs")

([EdQ](https://media.edq.com/49061a/globalassets/blog-images/2018-data-management-stats.png))

## What are the challenges of managing database connections

Suffice it to say then that database connections are pretty fundamental to the success of all sorts of data management and software development projects. 

The next question is *what can go wrong*.

Or, to put this another way, why do we need to pay specific attention to how we configure and manage database connections?

There are a few specific aspects to this that we’ll need to take account of for individual projects. We know that your database connections can impinge on your security, performance, user experience, reliability, and more.

So, let’s flesh out some of the specific variables that come into play when optimizing for each of these to better understand the importance of effectively managing connections.

One of the most important issues here is governing who can access our data assets. This means managing our *authentication* and *authorization* efforts using our connection configuration. 

This means that creates two distinct challenges for us. The first is defining an access control policy that’s suitable for ensuring that users can only access resources that are appropriate to their role.

Besides this, we need to provide users with the credentials they need to access our database in a secure manner - assuming we’re in control of the database we’re trying to manage connections to.

On top of traditional authentication strategies, we might add additional layers of security through encryption or password-update policies.

We also need to think about some of the more specific ways that database connections impact our solutions - especially from the perspective of how real-world users experience them.

This is tricky, because we’re actually constrained to a large extent by how our underlying database tools are built. For example, many DBMSs don’t allow simultaneous operations via a single connection - but others do.

Similarly, some tools will only be able to support a certain number of connections at once or might handle concurrent connections differently. We also need to deal with how connections are opened and closed in different platforms.

![Data technology](https://res.cloudinary.com/daog6scxm/image/upload/v1693907173/cms/database-connections/Data_Projects_Fail_https___www.dnb.com_content_dam_english_image-library_Modernization_illustrations_infographic-data-mgmt-challenges-stats.jpg_pwfdu9.webp "Data technology")

([DnB](https://www.dnb.com/content/dam/english/image-library/Modernization/illustrations/infographic-data-mgmt-challenges-stats.jpg))

We’re also constrained by the infrastructure surrounding both our database server and our client applications. This is largely what’s going to determine the performance and reliability of our connections.

We’ll check out some of the optimization strategies that are available to us here a little bit later.

## Database connection standards

Now that we have a clear idea of what database connections are, we can move on to thinking about some of the more specific ways that this can work within specific platforms.

So, as a bit of context, it’s important to know that - when we connect to just about any database- there are a couple of pieces of information that we’ll need. This includes:

1. The name, location, and port of that database.
2. Our authentication details.

For some tools, we might need other information too - relating to things like security certificates, timeout policies, caching, and more.

The important thing however is that we provide this in the format required by whichever tools we’re trying to connect to. We might also need the drivers for whichever DBMS we’re connecting to on our local machine.

Let’s check out a few of the forms that this might take.

### Database connections in SQL

The database storage market has changed a lot in the past few years, but the vast majority of data sets are still stored with SQL-derived tools, like SQL Server, MySQL, and Postgresql databases.

Here, connections are established using what’s referred to as a *connection string*.

Essentially, this is a series of semi-colon-separated key/value pairs, providing information about the database we want to access and the information we need to provide to do so. So, it might look something like this:

{{< highlight javascript "linenos=inline" >}}

Key1=Value1;Key2=Value2;Key3=Value3;Key4=Value4

{{< /highlight >}}

These keys might be the address of the server, the name of the database, and our username and password, for instance.

How the connection string is actually used depends on how your client application is built. So, if we’re hard-coding a solution, we’ll need to define functions or configure open standards to handle this.

We might also use our connection string to define other variables, like time-outs, SSL policies, how idle connections are handled, or any other attributes supported by the target DBMS. Most databases conform to relatively consistent and formalized principles for formatting connections.

If we’re working within existing solutions or low-code development tools, we might simply need to enter the appropriate credentials in a dedicated UI to generate a connection string.

We’ll see how Budibase handles this a little bit later.

### Database connections in other DBMS tools

However, with changes in the way businesses handle data over the past decade, SQL-based tools are no longer *entirely* dominant. Therefore, we also need to think about how connections can work in NoSQL tools.

NoSQL tools don’t *generally* store data in tightly structured tables as RDMSs do - so, when we connect to a database, there’s an additional challenge of location and accessing the specific information we’re looking for.

Some platforms will allow us to use a conventional connection string, but others are more complicated.

So, we might need to use dedicated clients, virtual environments, or CLI tools in order to establish database connections. 

An example of this would be MongoDB’s *Mongo Shell* tool.

This can be used to open a connection to a particular database connection, before using *dot notation* to access specific documents within this.

### API-based database connections

Finally, it’s also very common to access databases via API connections rather than direct database connections - this is especially true in scenarios where we don’t own or control the data that we’re trying to query.

If someone else, like a SaaS vendor, owns the database, they’re not that likely to furnish us with our own connection credentials. But, they will typically expose *some* data in their public API.

However, exactly what this is is out of our hands.

Public APIs can follow a few distinct protocols, but the most common are what’s known as RESTful APIs. This is a defined set of standards for otherwise separate platforms to communicate in a consistent manner.

The basic principle is that client applications can send *requests* to the server of a target application - in order to retrieve data or take a specific action.

If this is successful, the server will send a *response*. This should contain any data we requested or details of any actions that were carried out.

Check out our in-depth guide to [API calls](https://budibase.com/blog/app-building/what-is-an-api-call/) to learn more about working with REST.

There’s also the Open Database Connectivity (ODBC) model, which is an API standard used specifically for accessing DBMSs.

![Database connections statistics](https://res.cloudinary.com/daog6scxm/image/upload/v1681719117/cms/No_value_tasks_https___www.mckinsey.com_capabilities_mckinsey-digital_our-insights_designing-data-governance-that-delivers-value_ibnyhp.webp "Database connections statistics")

([McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/designing-data-governance-that-delivers-value))

## Approaches to optimizing database connections

Before we wrap up, it’s also important to be familiar with the kinds of tools and strategies that we can leverage to ensure our database connections are maximally effective.

Let’s take a look at how we can attack this problem from a few different angles.

### Connection pooling

One major technical challenge stems from the fact that establishing a database connection takes a disproportionate amount of time and effort relative to most individual operations that we’d want to perform using this connection.

Therefore, it’s hugely inefficient to create, use, and close a connection each time we want to perform an operation.

*Connection pooling* is the most common solution to this problem. So - what is connection pooling?

In the most basic terms, this means creating a pool of connections to a database and sharing this with multiple client applications. This means using a *wrapper object* so that individual applications connect to the database via the pool - which acts as an intermediary.

This means that a relatively large number of applications can connect to the database with a comparatively small number of connections - with each one only opening a connection to the wrapper as and when it is needed.

Individual applications don’t necessarily need to know that they are connected to the database via a pool. From their point of view, they might just as well be connected directly to the database.

The *pool size* is the number of connections contained in the wrapper. It might also be configured to support a maximum number of connected clients.

### Low-code development

From a more practical point of view, managing database connections also presents a number of administrative and organizational issues. One of the biggest is securely handling and sharing database credentials with the people who need them to build solutions.

After all, a business’s data is among its most valuable assets.

One strategy that’s growing in popularity here is leveraging low-code development platforms to build solutions for manipulating databases.

The idea here is to utilize a single, secure platform for developers to store and utilize database credentials - without necessarily being directly exposed to them.

For example, Budibase offers self-hosting and secure environment variables for storing your database credentials and building applications with them.

Check out our [features overview](https://budibase.com/product/) to learn more.

## How to connect to databases in Budibase

Budibase is the ideal solution for busy IT teams that need to turn data into action. We offer dedicated database connector UIs for a huge range of platforms, including MySQL, MSSQL, Postgres, Couch, Mongo, Arango, Oracle, Google Sheets, S3, REST, and more.

Under each of these, you can use a simple form interface to input the requsite information for establishing a connection.

![Budibase database connections](https://res.cloudinary.com/daog6scxm/image/upload/v1693905197/cms/database-connections/Database_COnnection_Budibase_Screenshot_uqycif.webp "Budibase database connections")

We can then easily access data in UIs, automations, or Budibase’s backend data section to build complex custom solutions, with minimal manual code.

Credentials can also be stored as encrypted environment variables, giving developers limited, controlled access to your most important data assets.


Check out our in-depth guide to [custom app development](https://budibase.com/blog/app-building/custom-app-development/) to learn more about where Budibase fits into your production processes.