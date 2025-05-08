+++

author = "Ronan McQuillan"
date = 2023-07-07
description = "ACID and BASE are the two dominant models for handling database transactions."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1688733930/cms/acid-vs-base/ACID_vs_BASE_txfxfr.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1688733930/cms/acid-vs-base/ACID_vs_BASE_txfxfr.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "ACID vs BASE Databases"

+++

Data has never been so fundamental to the success of your business - but nowadays we have more options than ever for how we store and manage information. Today we’re checking out two of the most common approaches, by examining ACID vs BASE databases.

See, we’re always constrained by some core computer science principles. Specifically, there’s an inherent tradeoff between *availability, consistency*, and *partition tolerance*. No database system can guarantee all three.

Different vendors position their platforms at different points within this framework. 

There’s actually a huge amount of variation across the market, with quite subtle differentiation between individual databases.

ACID and BASE are the two dominant models for how database transactions are managed. So, understanding the differences is a vital step in choosing the right data solution for any project.

Today, we’re going to learn how to do exactly that.

Let’s kick off with the basics.

## ACID vs BASE: definitions

ACID and BASE are two acronyms that represent the way databases manage transactions. A transaction here means retrieving, adding, editing, or deleting data - or some combination of these actions.

This is a pretty straightforward process when we’re only dealing with a *single* transaction. But, when we think about this at a macro scale, things get a lot messier. 

For example, how we manage *simultaneous* transactions will affect our data’s end-state.

To see what this means in practice, let’s explore each model in turn.

### What is an ACID database?

ACID stands for:

- **Atomicity** - Transactions are treated as a single unit - so if one action fails, the whole transaction fails.
- **Consistency** - The database must remain in a consistent state for a transaction to succeed.
- **Isolation** - Simultaneous transactions do not affect the outcome of one another.
- **Durability** - Successful changes will be stored permanently.

The basic goal is to ensure consistency in the event that something goes wrong during a transaction.

There are a couple of different ways that databases can enforce the ACID model. These are:

1. **Locking** - Marking data as in use when a transaction is taking place related to it.
2. **Multi-versioning** - *Read-only* transactions are able to access data that’s currently involved in a transaction.

Of course, this is only the basics. For a more detailed explanation, check out our in-depth guide to [ACID compliance](https://budibase.com/blog/data/acid-compliance/).

![Inaccurate data stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/Inaccurate_Data_https___www.edq.com_blog_highlights-from-our-2018-global-data-management-benchmark-report__peaqgi.webp "Inaccurate data stats")

([EdQ](https://www.edq.com/blog/highlights-from-our-2018-global-data-management-benchmark-report/))

### What is a BASE database?

BASE databases work a little bit differently. Ultimately, they’re aimed at cornering different corners of the CAP theorem. 

BASE stands for:

- **Basically available** - Ensuring the availability of data by distributing it across different nodes in a distributed database.
- **Soft state** - The database itself doesn’t impose consistency, instead placing this responsibility on developers.
- **Eventually consistent** - Consistency should ultimately be achieved, but isn’t guaranteed for individual transactions.

You could be forgiven for thinking that this seems a little bit more confusing compared to ACID. In fact, each of these principles might easily appear to leave a lot of wiggle room. 

So, let’s think a bit harder about some of the practical implications of each.

*Basically available* essentially means that the system will *always* respond to a request - even in the event of a system failure or conflicting values across nodes. So, we’ll always get something back, even if a node is down or there’s a network partition.

The trade-off is this might not be the most up-to-date value.

*Soft state* gives us flexibility in the sense that our data system can evolve and change over time. Contrast this with a traditional RDBMS, where we have a defined schema that tends to be very sticky.

It’s up to us to account for the implications of these changes.

*Eventually consistent* infers that we’re not sacrificing consistency entirely. Rather, the point is that - at any given moment - we might have inconsistencies, but these should be resolved in the longer term.

{{< cta >}}

## Examples of ACID and BASE DBMSs

If we’re thinking about ACID vs BASE, in all likelihood the is that your ultimate goal is to choose a specific database for a particular project.

So, it only makes sense to think about some of your specific options before we go any further. Chances are that you’ll be familiar with some of these - but potentially not all of them.

Let’s take each model in turn.

### ACID

The most common examples of the ACID model are your traditional relational database management systems. Specifically, SQL databases like MySQL, SQL Server, Postgres, and Oracle.

These are characterized by fixed schemas that sort data into rigid tables of rows and columns in order to comply with the ACID rules.

There are also ACID-compliant *NoSQL databases*.

The most ubiquitous example here is *MongoDB*. 

Or, more accurately, MongoDB offers support for *ACID-compliant transactions*, using its multi-document functionality - although it pushes users towards *single-document* transactions, which aren’t built around ACID properties.

### BASE

BASE databases are typically NoSQL tools. Unlike SQL or SQL-like DBMSs, these are characterized by *dynamic data schemas*.

This means that the data attributes stored against entities can vary. Either in terms of the specific attributes we store against each, or in terms of the rules and formatting we apply to them.

This is basically the polar opposite of how data is structured in an ACID system.

![NoSQL stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/NoSQL_https___scalegrid.io_blog_2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use__xrbdbp.webp "NoSQL stats")

([ScaleGrid](https://scalegrid.io/blog/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use/))

However, there’s also a large amount of variation within this category. Indeed, there are a few distinct kinds of NoSQL databases that we need to be aware of.

These include:

- **Key-Value databases** - eg Redis and Dynamo.
- **Document Stores** - CouchDB and Arango.
- **Graph** - eg Neo4j.
- **Wide-column** - eg Cassandra and HBase.

Each of these offers its own distinct advantages and disadvantages, aiming at different use cases and portions of the market.

The important thing to realize is that each falls at a different point on the CAP triangle. For example, Cassandra and DynamoDB largely optimize for availability at the expense of consistency.

CouchDB and Redis take the opposite approach, by optimizing for consistency over availability. 

Take a look at our in-depth guide to [CAP vs ACID](https://budibase.com/blog/data/cap-vs-acid/) to learn more about what these tradeoffs mean in practice.

## Pros and cons

Okay - now we have a firm grasp of the basic characteristics of each model of handling database transactions.

Next, we can start to think about what each brings to the table - both from a business perspective and in more technical terms - alongside the challenges they might potentially introduce.

### ACID

First, let’s think about the pros and cons of ACID transactions. As we do so, keep in mind that this has been the dominant model for most data management applications for almost half a century now.

With that in mind, let’s think about why ACID databases are so ubiquitous - and where they fall short.

#### Pros

As we’ve seen already, *consistency* is the name of the game here. This means that we can achieve a very high degree of reliability, control, and stability.

That is, we can easily impose a tightly defined schema on our data. Therefore, the results of transactions are considerably more *predictable*. 

As we’ll see later, there are also plenty of scenarios where eliminating the chance of inconsistency is imperative.

Taking a step back, we can point to some important, but less technically-focused benefits of ACID-compliant data transactions. 

Chief among these is that they largely rely on SQL-based queries. This imparts a huge degree of interoperability - in no small part because the vast majority of IT professionals, data specialists, and developers are already familiar with SQL.

#### Cons

However, there are downsides too. The biggest thing here is the issue of scalability.

That is, ACID databases are considerably more difficult to scale - either horizontally or vertically.

On the horizontal side, this comes down to *flexibility*. Since ACID requires a rigid schema, adding new entities to our data model - or attributes to existing entities - is comparatively difficult.

On the vertical side, we’ll also see performance-related challenges with ACID platforms - with NoSQL tools typically supporting massive data sets more easily.

### BASE

BASE offers its own distinct benefits and drawbacks. Just as we said earlier that ACID has been the dominant model for several decades, BASE is the relative newcomer - but it’s also growing enormously in popularity by the day.

Here’s why.

#### Pros

As you might expect, we’re dealing in large part with the inverse of ACID here. So, in the first instance, *flexibility* is the major selling point. The data that businesses deal with today is more complex than ever before.

The bigger our data set is, the less likely it is that a rigid, fixed schema is going to be sufficient. 

Eventually, this will hamper our ability to represent information accurately.

This also means that BASE systems typically offer better scalability - since we’re not constrained by the need to adhere to an existing schema.

We also see performance benefits from storing data as distinct objects - further helping with vertical scalability.

#### Cons

The cons of BASE are similarly a mirror image of the benefits of ACID - but this also varies depending on which CAP attributes individual solutions are targeting.

For the most part, we’re going to struggle to achieve the same degree of *consistency* as we would within an ACID system. This is a big problem in situations where we need that predictability and reliability.

You’ll also need to think carefully about whether your existing tools can support specific databases - since interoperability is a bit more spotty here.

Similarly, there’s a much lower chance that your developers are going to know how to use any given NoSQL platform - compared to traditional RDBMSs. This means there’s going to be a learning curve involved in adopting any new platforms.

## Common use cases

Now, let’s apply what we’ve learned so far to some real-world scenarios by thinking about the representative scenarios where you’d be most likely to use each. 

The goal here isn’t to be comprehensive. We couldn’t possibly outline every possible use case.

Instead, our priority is to illustrate the relative business cases for each model.

Here goes.

### ACID

In practice, ACID databases are used for just about everything under the sun. However, what we’re interested in is where it really *shines*. 

One situation where consistency and predictability are critical is when we’re dealing with particularly sensitive data, or where minor variation could completely undermine processes.

A great example of both is financial data - including payment processing.

Similarly, we can point to situations where a consistent schema is either required - or simply more convenient.

An example of the first would be when we need to store the exact same attributes against each entry - such as a simple employee database.

The second simply relates to the fact that working with consistent data is easier - and therefore cheaper. This makes ACID ideal for smaller data sets or situations where we don’t have the technical resources required for more complex data models.

### BASE

The BASE model has a slightly neater set of common use cases. To some extent, we could say that BASE systems are a bit more niche. That is, we’ll typically only use them when we have a specific reason for doing so - whereas ACID is more of a default option.

The most obvious cluster of examples here is big data use cases.

We said earlier that when we’re dealing with really large data sets, too much rigidity can be a hindrance - both in terms of scaling and accurately reflecting reality in our data set.

BASE is also utilized in a wide range of use cases where we need more complexity in our data model - even if the data set itself isn’t particularly big.

A good example of this is anytime we’re handling primarily *qualitative* data - including customer interactions, complex user information, or sentiment analysis.

Of course, there are also countless other scenarios where you might want to use either - for now we just want to give the broad strokes.

![Partition Tolerance](https://res.cloudinary.com/daog6scxm/image/upload/v1683900867/cms/acid-compliance/Power_outages_https___www.datacenterfrontier.com_cloud_article_11427329_uptime-longer-data-center-outages-are-becoming-more-common_o7iysp.webp "Partition Tolerance")

([Data Center Frontier](https://www.datacenterfrontier.com/cloud/article/11427329/uptime-longer-data-center-outages-are-becoming-more-common))

## Decision points

So how do you make a decision about whether you need ACID vs BASE databases for any given project?

In other words, what specific variables do we need to consider in order to figure out which model of data transactions is appropriate for a given use case?

There are several concerns that we need to balance. First, we can think about what we’re actually going to be doing with our data. Specifically, how regularized any associated processes are going to be.

For instance, if we know we’re only ever going to need to take the same basic actions within a rigid schema, ACID will likely suffice. If we want more complex, individualized interactions, we might look to BASE.

As we’ve seen earlier, BASE also offers benefits when dealing with large-scale datasets or when we need optimal performance.

On the flip side, ACID is typically the better option when *consistency* is a firm requirement - such as payment processing, inventory management, or most other day-to-day operational tasks.

Take a look at our ultimate guide to [data management software solutions](https://budibase.com/blog/data/data-management-software/) to learn more.

![ACID vs BASE databases](https://res.cloudinary.com/daog6scxm/image/upload/v1688733930/cms/acid-vs-base/Budibase_ScreenShot_yvkofd.webp "ACID vs BASE databases")

## Turn data into action with Budibase

At Budibase, we’re on a mission to help teams turn all sorts of data into action. Connect your data, autogenerate interfaces, craft automation rules, and deploy your custom tools however you like.

Let’s take a look at what makes Budibase tick.

### Our open-source, low-code platform

Budibase is the fast, easy way to build web apps, internal tools, and data management solutions, with minimal custom code. We offer a generous free tier, autogenerated screens, extensive database support, self-hosting, and much, much more.

Check out our [features overview](https://budibase.com/product) to learn more.

### ACID and BASE database support

Connect to ACID or BASE database models for your backend. We offer dedicated connectors for SQL Server, MySQL, Postgres, MongoDB, CouchDB, Arango, Redis, Oracle, DynamoDB, Google Sheets, REST API, and many more.

We’ve also got our own built-in DB - along with full support for custom data sources.

### Optional self-hosting

We empower our users to deploy their tools wherever and however they want. Self-host your Budibase installation using Kubernetes, Docker, Docker Compose, Digital Ocean, Linode, Portainer, n8n, and more.

Or, choose Budibase Cloud and let us handle everything. Take out our [pricing page](https://budibase.com/pricing/) to find out more about both options.

### Automations and integrations

Budibase makes building custom automation rules a breeze. Combine, configure, and nest our library of triggers and actions to automate workflows - with minimal custom code.

We also offer extensive third-party app integrations using Zapier, WebHooks, REST API, and more.

### Role-based access control

Our native RBAC is the ideal way to craft perfect user experiences without compromising on security. Assign users to defined roles, and grant access based on data sources, queries, automation rules, UI screens, or individual components.

We also offer free SSO through OAuth, OpenID, and Microsoft - alongside secure environment variables for storing your database credentials.

### Custom plug-ins

Budibase leads the pack for extensibility. Use our CLI tools to build custom data sources, automation actions, and components. Or, import community contributions from GitHub in just a couple of clicks.

Check out our [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free application templates

IT teams in all kinds of industries use Budibase to build internal tools around their existing data. To show off what you can do, we’ve created more than fifty free, fully customizable [app templates](https://budibase.com/templates).

Sign up for Budibase today to start building professional solutions, in a fraction of the time.