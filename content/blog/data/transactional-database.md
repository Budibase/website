+++
author = "Ronan McQuillan"
date = 2023-09-29
description = "Transactional databases store information that’s created by interactions between multiple actors."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1695991177/cms/transactional-databases/Transactional_Database_ft5wbj.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1695991177/cms/transactional-databases/Transactional_Database_ft5wbj.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is a Transactional Database?"
+++

Transactional databases are some of the most foundational and ubiquitous tools around. In fact, for countless IT teams, this is the default model for data storage. 

But, in recent years, the size, scale, and complexity of businesses’ data assets have exploded. In turn, it’s become more important than ever to choose the right data management tools for specific applications and use cases.

This means that we need to have a realistic, clear grasp of the respective pros, cons, and core tenets of different models - including transactional systems.

Today, we’re diving deep into everything you need to know about handling database transactions. We’ll start by covering the basic definitions of transactional databases and *transactions* more broadly.

Then, we’ll move on to thinking about why and when these are used by IT teams. We’ll also dig a bit deeper under the hood to see how transactional databases work, alongside some real-world examples, and the strategies we can use to optimize their performance.

We’ll wrap up by seeing some of the situations where transactional databases *aren’t* appropriate solutions - and a little bit of what the market for alternative models looks like.

So, let’s kick off with the basics.

## What is a transactional database?

A transaction database is a type of database that stores data resulting from interactions between two or more parties. Each of these interactions is called a *transaction*.

Transactions are made up of basic database operations - including writing data or reading, updating, and deleting it. More often, a single transaction consists of several of these operations chained together to complete some particular business task.

But what about the *parties* involved in carrying out a transaction?

This can be a DBMS, data warehouse, SaaS tool, human user, automated process, stored query, web app, ETL pipeline, or any other actor that can interact with our data.

With that high-level definition in mind, let’s check out how transactions are actually handled.

### Core features

There are a few underlying principles that must be ensured in order for database transactions to be carried out effectively. 

These are built into platforms by design. Specifically, a transactional database prioritizes:

- **Data integrity** - Transactional databases consistently enforce rules and constraints on stored data in order to ensure accuracy, integrity, and reliability - while data is stored in a consistent state.
- **Scalability** - Both in terms of scaling horizontally by adding new infrastructure for storage - and scaling vertically by adding greater volumes of data within an existing schema.
- **Real-time processing** - Data updates must be processed in real-time in order to avoid conflicts or other concurrency errors.
- **Concurrent access** - Transactional systems must be able to handle simultaneous queries from multiple database users.
- **Auditability** - Audit trails provide a useful history of transactions for compliance and issue-handling purposes.

Now, we use the word *prioritize* because specific platforms will focus on each of these to a greater or lesser extent compared to others. It’s also worth noting that these aren’t *exclusive* to transactional databases.

For instance, some transactional databases are designed to be better than others in terms of auditability - but not offer the same scalability. At the same time, many non-transactional platforms offer some or all of the above.

![Reliability](https://res.cloudinary.com/daog6scxm/image/upload/v1693907174/cms/database-connections/Digital_Transformation_ROI_https___media.edq.com_49061a_globalassets_blog-images_2018-data-management-stats.png_nslpw0.webp "Reliability")

([EdQ](https://www.edq.com/blog/highlights-from-our-2018-global-data-management-benchmark-report/))

### Types of transactions

So, to flesh out our understanding of transactional databases further, it’s worth drilling into the various forms that *transactions* can take. Specifically, there are two categories of database transactions that we need to wrap our heads around.

The first is **single transactions**. These are discrete units of work that can be made up of one or more operations within a single database platform. Regardless of how many operations are included in the transaction, they must all be completed for the transaction as a whole to occur.

We’ll return to this idea when we come to think about the architecture of transactional databases.

The other category is what is referred to as **multi-transactions** - or **distributed transactions**. These are made up of individual or chained operations across multiple databases and other platforms - with the goal of completing a single action.

For instance, a customer service agent might need to take an action that triggers related operations in your CRM, billing platform, and centralized customer database.

Therefore, in the case of distributed transactions, we’ll often require some element of orchestration or workflow automation in order to ensure that relevant changes are applied consistently across otherwise separate platforms.

### Types of transactional databases

Transactional databases are actually quite a broad class of solutions, so as you might expect, there’s a lot of variety across the market. We’ll check out some specific examples a little bit later.

For now, we just want to break the market down into a couple of more descriptive subcategories.

There are two to be aware of, so let’s take each in turn.

### Relational databases

Relational database management systems (RDBMSs) are the dominant model of storing transactional data.

Data is stored in *tables* with each *column* representing a particular *attribute* - and the *rows* representing specific *entities* with these attributes. Therefore, for each type of entity, we have a tightly defined, consistent schema.

We can also establish regularized *relationships* between tables. So, each row can be related to one or many corresponding rows in another table - depending on the type of relationship that we decide to set up.

We’ll see some specific examples of RDBMSs a little later, but for now, these are primarily SQL-based solutions. So, they can be queried using SQL - or any other coding language that we can connect to them - including Python or JavaScript.

Relational databases are particularly strict in how they enforce rules to the data we store, making them highly suitable for achieving consistency and performance across large datasets.

However, they are generally unsuitable for handling unstructured data, like images, media, or documents. So, we’d typically use an RDBMS for structured or semi-structured data applications.

### NoSQL transactional databases

To bridge this gap, we also have the option of utilizing transactional *NoSQL* databases. NoSQL databases can be used to store unstructured data, like media, files, documents, or anything else that doesn’t fit neatly into a tabular schema.

But, *transactional* NoSQL databases - in the sense of strict adherence to the principles we laid out earlier are a little thinner on the ground. 

We’ll look at a few examples of these later too.

Naturally, in order to achieve true support for unstructured data, we must be willing to sacrifice a great deal of consistency across our data set. We simply can’t consistently enforce rules and constraints consistently without a clearly structured schema.

How we query NoSQL tools varies from one platform to the next. So, some will support SQL-like queries while others will require you to use other languages.

![NoSQL stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/NoSQL_https___scalegrid.io_blog_2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use__xrbdbp.webp "NoSQL stats")

([ScaleGrid](https://scalegrid.io/blog/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use/))

## When are transactional databases used?

Okay. Now we’ve got a pretty clear understanding of what transactional databases are and some of the internal variation within this segment of the DBMS market.

The next thing we want to do is examine *why* you’d want to use a transactional database. We can attack this from two separate angles - in terms of their key benefits and use cases.

Let’s check out each one in turn.

### Benefits

First, let’s think about the benefits of transactional databases. To some extent, a lot of this will relate to things we’ve touched on already, so we’ll try to keep it brief.

The most generic benefits of transactional databases include:

- **Consistency** - Consistently applying rules and constraints across our data set.
- **Performance** - Transactional databases are very efficient at performing certain kinds of operations.
- **Reduced cost-to-serve** - Lowering the overall operational cost of running a data set in appropriate situations.
- **Scalability** - Making it easier to add new data points or new entities based on an existing schema.
- **Data integrity** - Ensuring the validity and accuracy of stored data.
- **Reliability** - Helping to prevent errors or incidents that reduce access to our data.
- **Usability** - Transactional databases are typically queried using widely-known languages like SQL.
- **Portability** - Transactional databases are comparatively easy to move between environments.
- **Security** - Ensuring that our data remains protected.
- **Low-latency** - Transactional databases are highly suited to performing tasks that must be carried out in milliseconds.
- **Supporting concurrency** - Enabling users to carry out transactions simultaneously.
- **Ease of monitoring** - Using audit logs to monitor how and when our data is used.

### Key use cases

That’s *why* we use transactional databases. 

But, what about *when*?

Of course, we can’t give an exhaustive account here. In fact, the majority of software applications rely on transactional databases. 

So, instead, let’s think about a selection of exemplar use cases. 

These include:

- **Manufacturing** - Inventory management, stock flows, and product delivery.
- **Logistics** - Handling orders, supply chains, and more.
- **Finances** - Financial tasks like invoice processing.
- **Internal tools** - Applications built for specific business processes.
- **Ecommerce** - Managing online order processing and related workflows.
- **Customer or employee management** - Handling user data and.
- **IT and operations** - Data relating to core internal services, assets, and more.

Again, this is far from an exhaustive list.

In truth, transactional databases are helpful in just about any scenario when we need to handle data relating to interactions between multiple platforms or actors.

![Transactional database stats](https://res.cloudinary.com/daog6scxm/image/upload/v1686561935/cms/data-entry-automation/Unreliable_https___thrivemyway.com_data-entry-stats__we7hq5.webp "Transactional databases stats")

([Thrive My Way](https://thrivemyway.com/data-entry-stats/))

## Transactional database architecture

Next, we can get a bit more technical in terms of how all of this is achieved. In terms of architecture, we’re dealing with two interrelated things here - *ACID compliance* and *row-based storage*.

### ACID compliance

First, the majority of transactional databases adhere to the *ACID* principles. Basically, these are four principles that relate to how platforms ensure the reliability and accuracy of stored data.

ACID stands for *Atomicity, Consistency, Isolation,* and *Durability*:

- **Atomicity** - Each transaction is treated as a single unit - so none of the constituent operations can be considered complete unless they all are.
- **Consistency** - Transactions will fail if the resulting data does not comply with any defined rules.
- **Isolation** - Each transaction is isolated from the others in order to prevent data conflicts.
- **Durability** - Stored transactions are persisted even when there is a system failure.

Check out our ultimate guide to [ACID compliance](https://budibase.com/blog/data/acid-compliance/) to learn more about each of these.

For today, it’s worth just briefly highlighting some of the ways that these are achieved. 

Atomicity is probably the most complex in terms of implementation - in the sense that there are a few distinct ways that different platforms handle this.

One is using *undo* and *redo logs*. These essentially provide a record of which changes have been attempted at different stages of transactions - so that they can be rolled back or reattempted in the case of failure.

Atomicity can also be achieved using *two-phase commits*, which ensure that - in the case of distributed databases - each individual node must accept a transaction before it is considered complete.

At the same time *locking* ensures that a particular piece of data can only be involved in a single transaction at any point in time.

Implementing consistency is a little bit more self-explanatory. Transactional databases must apply defined rules and constraints on all relevant data consistently - whether the data in question results from ingestion or transactions.

At the same time, actors involved in one transaction typically aren’t exposed to other in-progress transactions in order to achieve isolation.

Durability can be implemented in a number of ways, including RAID technology, checkpointing, write-ahead logging, and data replication in various guises.

However - to complicate things somewhat - not *all* transactional databases are fully ACID compliant.

So, when transactions are *fully* ACID compliant, they’re referred to as *ACID transactions*.

However, we might also use *non-ACID* *transactions*, which typically sacrifice *isolation* in favor of higher performance in the case of high-volume processing or distributed data sets. These are typically carried out using NoSQL databases.

### Row-based storage

Transactional databases are generally *row-based*. Basically, this means that all of the attributes concerning a single entity are stored together. 

We can contrast this with a *column-based store*, where all values for a given attribute are stored together.

The point is that, in order to handle a transaction, the querying actor must have exposure to the full record for a relevant entity - or at least an index or view thereof.

In other words, transactional databases are structured for efficiency in terms of manipulating individual entries - rather than performing aggregation or analysis across the data set as a whole.
{{< cta >}}
## Examples of transactional databases

We’ve covered a whole lot of theory at this point. Now, it’s time to start thinking about some real-world examples of transactional databases.

We said earlier that most transactional databases are SQL-derived, but that there are also NoSQL options out there.

So, let’s take a look at two of each.

### MySQL

MySQL is an open-source relational database management system. It’s the most widely-used open-source transactional database - characterized by prioritizing efficiency and reliability over full adherence to standard SQL syntax.

It’s used by companies like Netflix, Facebook, Twitter, and many more for handling transactions.

In addition to a high level of usability, MySQL offers huge extensibility, with an active community building extensions, plug-ins, integrations, and documentation. 

It’s also popular for its scalability and easy user management.

### Postgres

PostgreSQL is another open-source RDBMS. Again, it’s SQL-based, but transactions are handled a little bit differently than in standard SQL. 

Postgres handles transactions by rolling statements up in BEGIN and COMMIT statements, as well as offering a dedicated ROLLBACK statement for undoing changes.

Many businesses opt for Postgres as a transactional database because of its advanced functionality, including multi-version concurrency control, point-in-time recovery, nested transactions, and asynchronous replication.

Additionally, there are several newer vendors offering Postgres as a service in innovative cloud-based environments.

### MongoDB

MongoDB is the first of our NoSQL transactional databases. Rather than structuring data in tables, Mongo is what’s known as a *document store*. Entities are stored as documents with flexible schemas.

Unlike most NoSQL tools, transactions concerning single entities are fully atomic. 

You can then use nested documents and arrays for handling transactions concerning multiple entities - at least in most use cases - all but eliminating the need for true multiple-document transactions.

Transactions can be carried out in a range of programming languages using the Mongo Shell, including JavaScript, Python, and more.

### ArangoDB

ArangoDB is a NoSQL database that offers ACID-compliant transactions. It’s another document store, but this time we can see a greater focus on true multi-document transactions.

Arango offers three distinct types of transactions, using standard AQL, *Streams*, and JavaScript.

Streams are basically analogous to transaction handling in Postgres, but Arango uses BEGIN, COMMIT, and ABORT commands to carry out the same functions.

For many, the real selling point is JavaScript transactions. These enable you to send JavaScript functions and commands to the server - which will then be carried out transactionally - offering us a huge degree of flexibility in manipulating data.

Budibase offers dedicated data connectors for all of the above - and many more data sources for building professional web apps at pace. Check out our [features overview](https://budibase.com/product/) to learn more about how we’re empowering teams to turn data into action.

{{< cta >}}

## Optimizing transactional databases

Next, we can start to think about some of the concrete strategies we can use to optimize transactional databases for particular use cases. 

First, though, we need to think about what specific *aspects* we’re dealing with when it comes to optimization. Realistically, we’re going to be focused on some combination of:

- Database performance.
- Reliability.
- Security.
- Accuracy.
- Efficiency.

Of course, database optimization is a huge, highly technical topic in its own right. We could go into immense detail about any individual optimization strategy, but that’s well beyond our scope today.

Instead, let’s check out some of the key, broadly applicable strategies that we have available to us, including:

- **Indexing** - Indexes are used to enable faster data retrieval and more granular access by creating more organized subsections of your wider data set.
- **Privacy and access control** - Strategies including RBAC and seclusion optimization can be used to determine which actions different users can take on your data and how the database responds.
- **Memory management strategies** - Including sharding, defragmentation, and other optimization techniques related to physical storage and data transfer.
- **Data modeling** - Building security, accuracy, and efficiency into your data model using constraints, stored procedures, and separation of concerns across related data objects.

## Challenges and disadvantages

As we alluded to earlier, transitional databases aren’t ideal in every situation. In fact, there are important use cases where they’ll be - frankly - suboptimal. In particular, these concern analytical applications.

One issue is their row-based architecture - which makes aggregation tasks somewhat inefficient. This is because we have to retrieve every attribute for each row in order to get the specific values we want to aggregate - unless we use views.

We can also point to other performance-based challenges. Many non-transactional databases - especially in the NoSQL segment - offer more lightweight solutions and - as a result - offer a lower infrastructure footprint and faster query speeds.

This is naturally beneficial in situations where we don’t need the rigidly defined schema of a traditional RDBMS - although, of course, transactional NoSQL tools are able to bridge this gap to some extent.

Similarly, there are situations where a rigid, tightly defined data schema will make representing real-world entities challenging. Each instance of whatever entity might not fit neatly into this schema.

In these cases, we might opt to use an alternative approach.

To learn more, take a look at our guide to [data management software](https://budibase.com/blog/data/data-management-software/).