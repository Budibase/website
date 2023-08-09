+++

author = "Ronan McQuillan"
date = "2023-06-30"
description = "Today we're checking out the practical differences between CAP vs ACID for data storage."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1688129016/cms/cap-vs-acid/CAP_vs_ACID_c0rr20.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1688129016/cms/cap-vs-acid/CAP_vs_ACID_c0rr20.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "CAP vs ACID | What's the difference?"

+++

CAP vs ACID is probably one of the most widely misunderstood questions in the world of data engineering.

Today, we’re setting out to dispel any misconceptions and give you an actionable, practical guide to choosing the right data storage framework for your real-world applications.

We’ll break down some pretty complex computer science theory into insights with real-world applicability - including checking out examples of what key principles look like in practice. We’ll also examine some off-the-shelf databases that comply with different models.

And finally, we’ll wrap up by looking into how Budibase empowers teams to turn all kinds of data into action.

By the end, you’ll have a solid understanding of CAP vs ACID, so you can make a better-informed decision about how to build the perfect data model for your next project.

Here goes!

## ACID vs CAP Theorem: basic definitions

We’ll start by getting our heads around the basic definitions of CAP and ACID. These are two distinct models for how transactions occur in data storage solutions. 

As we’ll see in a second, there is a degree of overlap between the two - but fundamentally, they deal with slightly different ideas and issues.

We should also state up front that when we're comparing the CAP theorem vs ACID, these aren’t exactly *competing* models - so it’s not always a case of choosing one or the other.

Rather, CAP is a *descriptive* theorem that’s concerned with the reality of all data storage solutions and their limitations. ACID is a *prescriptive* model that implements specific standards - but it doesn’t invalidate CAP.

Let’s check out what ACID and CAP theorem each means in turn.

### What is the CAP model?

CAP stands for *Consistency, Availability, Partition Tolerance.* The theory states that - within distributed data stores - it’s only possible to optimally achieve *two out of three* of these characteristics.

The model was developed by Eric Brewer in 2000, as a theorem stating that there's an inherent compromise between these three factors in distributed database systems.

For example, we could have *consistency and partition tolerance*, but they would come at the expense of *availability* in your database management system.

In more granular terms, here’s what we mean by each of these characteristics:

- **Consistency** - the same data is returned no matter what node in the system it is retrieved from - so on the whole we have a consistent system in distributed computing.
- **Availability** - every request returns data, even if one or more nodes in the system are down.
- **Partition tolerance** - the system as a whole continues to work, even if there is a breakdown in communication between individual nodes due to network partitions or node failures.

Consistency is achieved by instantly replicating changes to one node across all others before the *write* action is considered complete. In practice, availability means that all working nodes in a system must return a valid response.

Partition tolerance can be implemented in different ways - such as designating parts of the system as read-only or allowing nodes to operate independently and then resync after an outage is resolved.

Remember, the point is that we can only optimize for two out of three of these. We’ll always need to compromise on one.

We also should re-emphasize that the CAP theorem applies to *distributed systems*. But what are these?

Basically, what we mean here is any system that stores data across multiple nodes - which might be physical locations, virtual machines, or containers - rather than within a single database. 

This isn’t just limited to advanced use cases like big data or IoT.

Rather, pretty much any cloud-based web application meets this definition of a distributed system. Therefore, it’s imperative to have a solid understanding of the CAP theorem before setting out to build a web app.

We’ll return to how to make a decision around specific databases a little bit later.

![Data accuracy](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/Inaccurate_Data_https___www.edq.com_blog_highlights-from-our-2018-global-data-management-benchmark-report__peaqgi.webp "Data accuracy")

([EdQ](https://www.edq.com/blog/highlights-from-our-2018-global-data-management-benchmark-report/))

### What is the ACID model?

First, though, let’s check out the other model that we want to wrap our heads around. *ACID* is a set of rules that seek to ensure the validity of data in the event that something goes wrong during a transaction.

These rules are:

- **Atomicity** - all parts of a transaction must succeed or the whole thing fails - whether these are read operations, write operations, or more complex functions.
- **Consistency** - only transactions that follow specified internal rules can be completed.
- **Isolation** - transactions can occur concurrently without affecting one another.
- **Durability** - data is saved following a successful transaction. The system continues even if there is a power outage or other network failure.

We’ve written a dedicated guide to [ACID compliance](https://budibase.com/blog/data/acid-compliance/), where you can learn more about each of these principles.

For now, we’re mainly concerned with how this differs from the CAP theorem. There are a couple of key points that we need to draw your attention to.

First, CAP applies to all distributed systems. It’s simply the nature of the beast. *ACID* is a framework that individual databases may or may not comply with.

When it comes to the difference between CAP vs ACID, there’s one key issue where most people get confused. That is, both use the term *consistency* - but they don’t really mean the same thing by this.

To reiterate, consistency in the context of CAP means that all nodes store and provide the same data. For ACID, consistency means that internal rules within an individual node must apply across the board.

For example, that all values in a column must be unique.

These don’t necessarily rule each other out - as long as the same internal rules apply to all nodes in a system.

## CAP vs ACID: Where is the overlap?

Consistency within CAP overlaps with ACID’s *atomicity* stipulation - in the sense that a transaction in a distributed system wouldn’t be successful unless it is written to *all* nodes.

In theory, the stipulation of *isolation* is also very similar to *consistency* within CAP - although in practice, there are different degrees of isolation, depending on how it is implemented.

Therefore, we can have ACID-compliant distributed systems - particularly those that are primarily SQL-based.

However, since CAP means optimizing for two out of three of its core tenets, we’ll have to rule out any solution that optimizes *availability* and *partition tolerance* at the expense of consistency.

Additionally, most distributed RDMSs don’t offer partition tolerance in practice, limiting them to CA systems. 

Some ACID-compliant NoSQL solutions offer a CP system.

But, we’re getting ahead of ourselves a little bit.

To understand what we’re dealing with, let’s think about the practical implications of each of the available combinations under the CAP theorem.

## CA systems

First up, we have systems that optimize for *consistency* and *availability*, at the expense of *partition tolerance*.

In other words, we can achieve a high degree of consistency with relatively low downtime, but we run the risk of network issues bringing down the entire system - or at least causing individual transaction failures.

As we hinted at a second ago, CA systems are typically based around traditional relational databases, like SQL, Postgres, or Oracle.

![Data centre stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900867/cms/acid-compliance/Power_outages_https___www.datacenterfrontier.com_cloud_article_11427329_uptime-longer-data-center-outages-are-becoming-more-common_o7iysp.webp "Data centre stats")

([Data Centre Frontier](https://www.datacenterfrontier.com/cloud/article/11427329/uptime-longer-data-center-outages-are-becoming-more-common))

## CP systems

Next, we have systems that prioritize *consistency* and *partition tolerance*, to the detriment of *availability*. 

So, we’re able to maintain consistency and deal with network issues, but we introduce the risk that some data may become unavailable - at least at specific moments.

The most common example of a CP system is MongoDB - which is a popular, ACID-compliant NoSQL database.

## AP systems

Finally, we have systems that focus on *availability* and *partition tolerance* over *consistency*. 

In other words, data is always available - even during outages. But - in order to achieve this, we introduce the risk that the data that’s retrieved is incorrect, out of date, or otherwise inconsistent.

Some of the most common examples of AP systems include CouchDB and Cassandra.

![CAP vs ACID NoSQL stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/NoSQL_https___scalegrid.io_blog_2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use__xrbdbp.webp "CAP vs ACID NoSQL stats")

([ScaleGrid](https://scalegrid.io/blog/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use/))

## How to choose a data solution using the CAP theorem

The CAP model is derived from computer science theory, but it’s a mistake to assume this means that it doesn’t have practical applicability at a business level. 

In fact, this actually gives us a very helpful framework for deciding what type of data storage to opt for when we’re planning a new application project.

That is, once we’ve identified which out of CA, CP, and AP systems is right for our needs, it’s a relatively simple case of choosing the best vendor within this category.

So what are the decision points we need to take account of?

One thing to think about is the scale of our data set and user base. When either of these is smaller, it’s less likely that we’ll be dealing with a large number of nodes, and so partition tolerance is potentially less of an issue.

Or, we might have huge data sets and large numbers of users, so partition tolerance would be more of a must-have - in which case we need to decide to prioritize either consistency or availability.

For example, in a use case like payment processing, we *absolutely* need consistency, so we’d have to de-prioritize availability. On the flip side, if we’re more concerned with fast iterations over our data and high horizontal scalability, we might focus on availability instead.

Check out our ultimate guide to [data management software solutions](https://budibase.com/blog/data/data-management-software/) to learn more.

![CAP vs ACID Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1688129016/cms/cap-vs-acid/Budibase_ScreenShot_kshxcr.webp "CAP vs ACID Budibase")

## Turn data into action with Budibase

At Budibase, we’re on a mission to help businesses turn data into action - no matter where it’s hosted or in what format. Our open-source, low-code platform is the perfect solution for building professional solutions, to manage your data assets.

Let’s take a look at what makes our platform tick.

{{< cta >}}

### Our open-source, low-code platform

Connect your data, build interfaces, automate workflows, and publish professional applications, with minimal custom code. Budibase is the fast, cost-effective way to build internal tools, that don’t compromise on security, UX, or performance.

Check out our [features overview](https://budibase.com/product) to learn more.

### Optional self-hosting

Build secure tools and deploy them however you like. We offer self-hosting with Kubernetes, Docker, Docker Compose, Digital Ocean, Linode, Portainer, n8n, and many more.

Or, choose Budibase Cloud and let us handle everything. Check out our [pricing page](https://budibase.com/pricing) to learn more about both options.

### Market-leading data support

Budibase won’t be beaten for external data support. We offer dedicated connectors for SQL, Postgres, Oracle, S3, Couch, Arango, Mongo, REST API, Google Sheets, and many more - as well as empowering our users to build their own custom data sources.

We’ve even got our own built-in database, so you can get your data layer off the ground in a matter of minutes.

### Low-code automations

Use our built-in automation editors to quickly nest, combine, configure, and customize a huge range of triggers and actions. It’s never been easier to build streamlined data management workflows, with minimal manual coding.

We also offer a huge range of third-party app integrations using Zapier, webhooks, REST API, and more.

### Configurable RBAC

Keep your data secure without compromising on your internal tools’ UX. Budibase offers fully configurable role-based access control, allowing you to grant permission based on data sources, queries, automation rules, UI screens, or individual components.

We also offer secure environment variables and free SSO, based on OpenID, OAuth, Microsoft, and more.

### Custom plug-ins

Budibase leads the pack for extensibility. Use our dedicated CLI tools to build your own data sources, automation blocks, or UI components. Alternatively, you can import our community contributions from GitHub in just a few clicks.

Check out our [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free application templates

Thousands of major organizations around the world choose Budibase to build professional, performant apps in a fraction of the time they could turn around hard-coded solutions. Check out our library of 50+ free, customizable [application templates](https://budibase.com/templates) for a flavor of what’s possible.

If you’re ready to start building internal tools the fast, easy way, sign up for Budibase for free today.