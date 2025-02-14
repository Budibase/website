+++

author = "Ronan McQuillan"
date = 2023-05-12
description = "Check out our in-depth guide to ACID compliance."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/blog_post_template_2_pypjqy.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/blog_post_template_2_pypjqy.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is ACID Compliance?"

+++

ACID compliance is one of the most fundamental data management concepts that you’ll want to get to grips with. In fact, this is so ubiquitous that you not have paid it much attention before - to many people, it’s just the way databases work.

Of course, this isn’t quite the case. Not every database adheres to the ACID model. Indeed, not every use case would benefit from this.

Therefore, we need to know what we’re dealing with in order to make an informed decision about what’s right for our app project’s data model.

That’s exactly what we’re covering today.

More specifically, we’re going to check out what ACID stands for, what it means in practice, the problems it solves, and when it comes into play.

We’ll also think about how the landscape here has changed over the past few years, along with what Budibase brings to the table for internal data management.

Let’s start with the basics.

## What is ACID compliance?

First thing’s first. ACID stands for *atomicity, consistency, isolation,* and *durability.* This is a framework for ensuring the validity of databases while carrying out transactions.

A transaction here is any chain of database commands or queries that are carried out to perform a particular task. For example, reading a row in one database, adding the same values to a different table, and deleting the original entry.

Essentially, the idea here is to mitigate against the risk of anything going wrong during transactions. 

To understand how this works in practice, let’s break ACID compliance into its four constituent principles.

### Atomicity

First, *atomicity*. This means that a transaction is not successful unless all of its constituent elements are successful. Either every action occurs or none of them do - in other words, just one part of a transaction can’t be carried out in isolation.

The idea here is that a transaction happening *partially* will likely cause more issues than the whole thing failing. For example, if your bank debited your account without crediting your payee.

Atomicity guarantees that transactions won’t partially occur, even in the case of power outages, interruptions, or other incidents. It also means that an external database client can’t see that a transaction is *in progress*.

That is, at any given moment, it has either taken place or it hasn’t - there’s no in-between.

### Consistency

Next, there’s *consistency*. This means that every transaction must conform to the database’s internal constraints, rules, cascades, triggers, and primary-key to foreign-key relationships.

This prevents the database from corruption by an illegal transaction.

So, say we have a transaction that involves creating a new row, but the user has provided the date in an invalid format. 

Rather than allowing the unpermitted value to be stored, the whole transaction is rejected.

### Isolation

*Isolation* ensures that transactions can occur concurrently without undermining the database’s integrity. This means that concurrent transactions should lead to the same outcomes as if they were carried out sequentially.

For example, if multiple users as manipulating our data at the same time, we still want these to behave as though they were entirely separate. So, if two customers both order five of our products, our stock levels would decrease by ten.

Isolation is used to define how and when the effects of one transaction are visible within other transactions. There are different degrees of isolation - where increased isolation reduces concurrency errors but increases the likelihood of a transaction failing because of another.

![ACID compliance stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/Inaccurate_Data_https___www.edq.com_blog_highlights-from-our-2018-global-data-management-benchmark-report__peaqgi.webp "ACID compliance")

([EdQ](https://www.edq.com/blog/highlights-from-our-2018-global-data-management-benchmark-report/))

### Durability

Finally, we have *durability*. This guarantees that once a transaction has been committed to a database, it will remain so - even in the case of a system failure, like a power outage or crash.

This is usually achieved by recording transactions in *non-volatile* memory. Alternatively, databases can write completed transactions to a *transaction log*, which can be reprocessed to revert the database back to the appropriate state after an incident.

The reason this is important should be fairly obvious.

Say we ran an ecommerce site. We’d have a lot of unhappy customers to deal with if all of that day’s orders were lost any time our power dropped out.

{{< alert-positive "Get the must-read stories for IT professionals, straight to your inbox.">}}
>
{{< substack-cta >}}

## Why does ACID compliance matter?

As we said earlier, the point of ACID compliance is to make sure that we preserve the integrity of our databases.

After all, a modern business’s data is probably its most valuable asset. 

Companies today deal with bigger, more complex data sets than ever before. Plus, it’s highly embedded in even the most mundane of decisions and tasks.

Therefore, even minor issues with the format or content of your data can cause big headaches - or even complete breakages and ultimately avoidable costs and disruption.

You might also like our guide to building a [Postgres GUI](https://budibase.com/blog/tutorials/postgres-gui/).

### Examples

Let’s take each element of ACID compliance in turn and work our way through the kinds of difficult situations that each one helps us to avoid - and the benefits that they offer.

#### Atomicity

Atomicity allows us to avoid any difficulties that could arise from a transaction being only partially completed. The potential ramifications of this are pretty easy to grasp. 

Say you were booking a flight - and you managed to pay for it but something went wrong in the final step of the transaction, where your reservation is supposed to be made. The money has left your account, but you haven’t secured your seat.

You’d be pretty annoyed, wouldn’t you?

Similarly, if your payment failed but the reservation was successful either, the airline would have a big problem.

Atomicity helps to avoid these kinds of situations. Remember, the whole point is that no action can succeed unless they’re all successful - thereby eliminating the chance of any weird, unforeseen outcomes.

#### Consistency

It’s pretty easy to wrap your head around what consistency brings to the table, but it’s still worthwhile thinking about some examples.

The easiest way to explain this is to think about the kinds of rules and constraints that can be placed on database attributes, and *why*.

The most common constraints relate to:

- **Format** - for example, dates must be structured in a particular way.
- **Values** - for example, a numerical value must be over a certain threshold or contain a defined number of decimal places.
- **Relationship to other values** - for example, that a particular attribute must be unique or can’t be null.

There can be all sorts of reasons that we need constraints within our data model. For example, we need consistent formatting for attributes across rows, because otherwise manipulating this data will be much more difficult than it needs to be.

Plus, if *none* of our attributes enforce uniqueness it will be very difficult for us to ever identify a particular row.

Now, it’s worth noting that *total* consistency isn’t *always* desirable. 

As in, there’s a tradeoff here, where we sacrifice some flexibility within our data model. Most of the time, we’re probably going to want to store the exact same attributes across every row on a table, but this isn’t necessarily always the case.

We’ll think about some alternative arrangements, like document stores, a little bit later.

#### Isolation

The scenarios where isolation is important are a bit more complex. Remember, the principle here is that concurrent transactions should behave as though they were sequential.

The most common issue that this addresses is what’s called a *write-write* error. This is when multiple users try and manipulate the same piece of data concurrently - but something goes wrong with one transaction and impacts the outcome of the other.

Isolation also imposes an order on actions within concurrent transactions. So, we have some kind of rule in place to determine which transaction has precedence and needs to go first.

A simple example of this would be if two customers try to simultaneously purchase our last remaining unit of a particular product. Without isolation, we might inadvertently sell more stock than we actually have - and end up with at least one angry customer.

Proper isolation eliminates these risks.

#### Durability

Finally, what role does durability play in database management?

This is probably the most intuitive element of ACID compliance. Say we had a transaction that transfers a row from one table to another - perhaps from *leads* to *customers* whenever someone makes their first purchase.

The steps to this are as follows:

1. We read the *leads* entry and copy it.
2. We write this to the *sales* table.
3. The original entry is *deleted* from the *leads* table.

If the power went off before the final changes are committed to disk, the user might think the transaction is completed, even though it hasn’t.

By storing this in a transaction log, we can restore the changes and ensure that the database remains in the state that users expect.

![Durability stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900867/cms/acid-compliance/Power_outages_https___www.datacenterfrontier.com_cloud_article_11427329_uptime-longer-data-center-outages-are-becoming-more-common_o7iysp.webp "durability stats")

([Data Center Frontier](https://www.datacenterfrontier.com/cloud/article/11427329/uptime-longer-data-center-outages-are-becoming-more-common))

## ACID compliant databases

Okay - now we have a firm understanding of what ACID compliance is, how it works, and why it matters.

But how do we know if a database is ACID compliant or not?

Most often, the vendor will advertise this. Most relational DBMSs offer ACID compliance - including almost all SQL variants, like MySQL, SQL Server, Postgres, and Oracle.

With non-relational and No-SQL databases, the picture is a bit more varied.

For example, MongoDB is a bit of an outlier here, in that it offers ACID compliance.

Most other NoSQL databases use the *BASE* framework. This stands for *basically available, soft state, eventually consistent.*

We won’t go into complete detail, but the principle here is that we sacrifice immediate internal consistency for flexibility and availability. We’ll think about some of the scenarios where this is useful in a few minutes.

Check out our guide to [making public forms](https://budibase.com/blog/app-building/public-forms-how-to-build-them-in-minutes/).

## ACID implementation

Let’s get a little bit more technical and think about how DBMSs actually implement ACID compliance.

Now, we don’t necessarily need an in-depth understanding of this as day-to-day database users. However, it’s helpful to have a basic idea of the different ways this can work in order to make an informed decision about which specific platforms are right for you.

There are two primary ways that ACID compliance is implemented. These are:

- Locking.
- Multi-versioning.

Let’s briefly check out how each of these works.

### Locking

Locking basically means that when a transaction is initiated, the data in question is marked as in use. This is then reverted when the transaction either succeeds or fails. A transaction can’t begin until the relevant data is *locked*.

This means that another transaction can’t begin until the lock is removed.

This is an effective, but fairly blunt way to ensure ACID compliance.

More complex transactions will often require multiple locks. This can inhibit performance as well as creating delays when other transactions need to access the affected data.

### Multi-versioning

The main alternative is *multi-versioning*. This means that *reading* transactions can access the existing version of a piece of data, even if another transaction is currently modifying it - without the need for locking.

We’ll still need some form of locking for concurrent *writing, deleting,* or *updating* transactions.

As the name suggests, multi-versioning means storing multiple versions of the same data - each with a timestamp. There are different ways to determine which version any given transaction is exposed to.

The most common is what’s known as *snapshot isolation*. This means that each transaction is exposed to the state of the data as it was when the transaction began.

### ACID compliance in distributed transactions

It’s also useful to have a decent grasp on how ACID compliance works in distributed data systems. As you can imagine, things get a lot more complex in distributed databases, where there isn’t a single node responsible for transactions.

For example, one node could complete its portion of a transaction, only for a power failure to interrupt another node’s actions afterward. 

One solution here is what’s known as the *two-phase commit protocol*. This means that one node effectively sends a message to each of the others to determine if they’re ready for the changes to be committed.

Only when each has replied is the transaction formalized.

## Is ACID compliance always necessary?

So, ACID compliance is the norm, but is it always the right approach?

We said earlier that there are vendors who make non-ACID-compliant databases - so it stands to reason that there must be situations where this could be preferable.

As we said earlier, the trade-off largely relates to flexibility - and to a lesser extent performance. This comes into play when we’re dealing with very large or complex data sets - especially in the context of big data or machine learning.

![NoSQL Stats](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/NoSQL_https___scalegrid.io_blog_2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use__xrbdbp.webp "NoSQL Stats")

([ScaleGrid](https://scalegrid.io/blog/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use/))

So, we might opt for a BASE system in situations where we want to represent large numbers of flexible data objects - perhaps relating to user interactions across different marketing channels.

This is because accurately representing and effectively manipulating our data is a bigger priority than internal consistency between rows.

In fact, internal consistency might not be desirable at all. In fact, there are all sorts of situations where we wouldn’t want to enforce a rigid structure or constraints on our data, so ACID compliance would naturally be less of a priority.

![Budibase Screenshot](https://res.cloudinary.com/daog6scxm/image/upload/v1683900868/cms/acid-compliance/Budibase_ScreenShot_wd52ob.webp "Budibase Screenshot")

You might also like our guide to building a [MongoDB GUI](https://budibase.com/blog/tutorials/mongodb-gui/).

## Turn data into action with Budibase

At Budibase, we’re on a mission to help teams turn data into action. Businesses today are sitting on more data than ever before, but few of them can truly leverage it in their day-to-day internal ops.

Why not check out our ultimate guide to [data management software solutions](https://budibase.com/blog/data/data-management-software/)?

Here’s what makes Budibase tick.

### Our open-source, low-code platform

Budibase is the fast, easy way to build professional web applications around your existing data assets. With a generous free tier, auto-generated UIs, extensive data support, and huge expansibility, there’s never been a better way to build custom apps.

Check out our [features overview](https://budibase.com/product) to learn more.

### Market-leading external data support

We’re proud to lead the pack for external data support. Our platform features dedicated data connectors for MySQL, SQL Server, Postgres, Oracle, Airtable, Mongo, Couch, Arango, S3, Google Sheets, REST API, and more.

We’ve also got our own built-in database, with simple relationships and full support for CSV uploads.

### Optional self-hosting

Security-first businesses love Budibase for the power to host applications on their own infrastructure. We offer optional self-hosting using Kubernetes, Docker, Docker Compose, Digital Ocean, and more.

Or, use Budibase Cloud and let us handle everything. Check out our [pricing page](https://budibase.com/pricing/) to learn more about both options.

### Intuitive automation builder

Budibase makes automating workflows a breeze. We’ve got an intuitive, flow-based automation builder, complete with a range of nestable, configurable actions and triggers.

You can even leverage external app events in your automations using webhooks, Zapier, or REST.

### Custom plug-ins

No other low-code platform comes close for extensibility. Use our dedicated CLI to build your own data sources and components to ship across all of your Budibase tools. Or, simply add our community’s pre-built plug-ins to your installation by pasting a link to the repo.

Check out our [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### Role-based access control

Budibase offers configurable role-based access control, to fully marry security and usability. Assign users to a pre-defined role and grant permissions at the level of data sources, queries, automation rules, screens, or even individual components.

We also offer free SSO through OpenID, OAuth, and more.

### 50+ free application templates

We have such confidence in what Budibase is capable of, that we decided we might as well show you. That’s why we created more than fifty free, deployment-ready, customizable [application templates](https://budibase.com/templates/).

To start building apps the fast, easy way, sign up to Budibase today for free.
