+++

author = "Ronan McQuillan"
date = 2023-08-29
description = "CRUD and REST are two separate but related frameworks relating to how we manage database entries."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1693302551/cms/crud-vs-rest/CRUD_vs_REST_tn9f4e.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1693302551/cms/crud-vs-rest/CRUD_vs_REST_tn9f4e.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "CRUD vs REST | What’s the Difference?"

+++

Wrapping your head around CRUD vs REST means getting to grips with some of the most fundamental concepts of modern application development. However, when we talk about this - we’re not exactly comparing like with like.

Unfortunately, this is where a lot of confusion arises.

See, REST and CRUD are two acronyms that relate to how we access and manage data. But, they differ greatly in terms of what they actually refer to and how they apply.

Today, we’re unmuddying the waters. 

Specifically, we’re going to be exploring what each one means, what contexts they apply in, how they interact, and where they differ.

By the end of this guide, you’ll have a full working understanding of both concepts and the role they play in developing software.

Let’s kick off by checking out the basics.

## CRUD vs REST: definitions

As a bit of background, both CRUD and REST are acronyms representing sets of concepts that deal - at least in part - with how we interact with databases. Although - as we’ll see - this is only part of the story with REST.

Rather than confuse things any further, let’s take each one in turn.

### What is CRUD?

CRUD is a framework for understanding the basic actions that we can take on a database. CRUD stands for *create*, *read*, *update*, *delete*. We’ll return to each of these and explore them in detail in a couple of seconds.

First, though, it’s important to understand the context in which the CRUD framework applies.

Basically, this applies to situations where we’re handling data in the vast majority of storage solutions - particularly *persistent storage*, like traditional relational databases.

There are - however - some more fringe exceptions - largely relating to the *update* operation in certain big data applications - but frankly, that’s beyond the scope of what we’re dealing with today. 

So, for our purposes, CRUD is a way of expressing the different core actions that can be taken when we’re interacting with a database.

#### CRUD operations

Let’s dive a bit deeper into each of the four constituent CRUD operations.

We have:

- **CREATE** - for recording new data.
- **READ** - for retrieving existing data.
- **UPDATE** - for altering existing data.
- **DELETE** - for deleting existing data.

Each of these will be implemented differently depending on how your data is stored. But, generally speaking, we can apply CRUD actions in just about any data system - like traditional RDMSs, NoSQL database applications, spreadsheets, document stores, and flat tables.

This could either apply to manually retrieving data with a particular query language - or to how your application’s UIs and process layer interact with the back-end data.

These are also used as the building blocks of more complex actions. For example, we could use a READ query in tandem with various UI and process elements to enable us to build search capabilities in an application.

It’s also fairly common for software developers to implement dedicated tools for performing CRUD operations on a particular data set in a controlled manner. Take a look at our in-depth guide to[ building CRUD apps](https://budibase.com/blog/crud-app/) to learn more.

![CRUD vs REST stats](https://res.cloudinary.com/daog6scxm/image/upload/v1688734431/cms/information-management-workflows/Menial_Tasks_https___sloanreview.mit.edu_projects_artificial-intelligence-in-business-gets-real__h5t5vu.webp "CRUD vs REST stats")

([MIT](https://sloanreview.mit.edu/projects/artificial-intelligence-in-business-gets-real/))

### What is REST?

REST is a very different prospect. Whereas CRUD is a set of specific operations, REST is a protocol for ensuring that otherwise separate systems can communicate with one another. In other words, it’s a set of standards vendors can choose to follow.

Therefore, REST doesn’t actually relate to the specific action we can take on data in a target system.

Instead, REST is an acronym that represents a set of principles that platforms can adhere to within their APIs. Proposed by Roy Fielding, REST is an architectural design style for web APIs, based on the HTTP protocol.

An API that follows these principles can be described as *RESTful*. 

REST stands for *representational state transfer*. We’ll examine the underlying principles of this in a few minutes.

Before we get to that, one important thing to note is that RESTful APIs are based around *clients* sending *requests* to *servers*. So, a web browser, application, or other solution can send a request to the server of an external platform to access or manage data.

This is an important piece of context as we move onto thinking about the specific actions that can be taken using RESTful APIs.

#### REST methods

The specific *methods* that are available within the REST framework are what we’re most interested in in the context of comparing RESTful APIs and web services to the basic CRUD operations.

REST relies on HTTP connections in order to enable connected systems to communicate via API requests and responses. 

REST requests can be used to perform two categories of actions:

1. Basic CRUD operations.
2. Triggering other built-in functionality within the target application.

Of course, we’re mainly concerned about the former.

The specific HTTP methods that are most analogous to the four CRUD operations are:

- **GET** - for reading data.
- **POST** - for creating data.
- **PUT & PATCH** - for updating data - depending on which is stipulated by the vendor’s documentation.
- **DELETE** - for deleting data.

Basically, the way this works is that our *client* uses one of these methods - alongside any relevant data - as an instruction for the server to carry out the required database action. If it’s successful, the server sends back any requested data.

Check out our guide titled [What are the Components of an API?](https://budibase.com/blog/inside-it/what-are-the-components-of-an-api/)

Just as a little extra note - we mentioned a second ago that REST requests can also be used to trigger other built-in functions in external tools via API requests. To do this, we’d typically use the POST or PUT requests - but this can vary from vendor to vendor.

Again though - we won’t delve too deeply into that, since it’s beyond the scope of what we want to talk about today.

![REST API usage](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_use_https___nordicapis.com_apis-have-taken-over-software-development__y2sarz.webp "REST API usage")

([NordiCapis](https://nordicapis.com/apis-have-taken-over-software-development/))

### RESTful principles

So, now we have a decent picture of REST vs CRUD in terms of how to perform basic database management actions. But, we also said that REST is better understood as a framework for enabling separate systems to communicate.

Next, we need to understand the core principles that a system must adhere to in order for its API to be considered RESTful.

There are five key aspects to get to grips with here. Let’s briefly check out each.

### 1. Client-server mandate

RESTful APIs are built around the idea of *clients* interacting with *servers*. The underlying principle here is that - assuming that both can send and receive information in the appropriate format - neither needs to know what goes on within the other.

We saw earlier that clients can be web browsers, web pages, applications, mobile apps, or other solutions. 

A server is where a service, data set, application, or other solution is hosted.

The separation of clients and servers achieves a few key things. First, it means that - however each is built - they can communicate with external tools in a consistent manner. Second, it ensures that each can operate fully independently of the other.

### 2. Stateless

Statelessness is the idea that HTTP requests aren’t cached on the client side. This means that the server will treat each session as being independent and new.

The key thing here is that authentication details from previous requests are not stored by the server.

Therefore, in order to access any resources or trigger actions, the client will have to provide the required authentication information for each request.

### 3. Cacheable

Caching is used by RESTful APIs to improve performance. The server dictates which information can be cached and how - although clients can stipulate in their requests that they don’t want the information to be cached.

When a request for information is received, if the server has a recent cached version of the relevant data, this can be returned.

The idea is to reduce the need for servers to locate and retrieve the same data repeatedly. In turn, this cuts response times, reduces the required bandwidth, and improves reliability when accessing information.

### 4. Uniform interface

The uniform interface principle ensures predictability and consistency when sending and receiving API requests and responses.

Basically, this means that all clients can interact with the server in the same way, using the same kinds of requests.

To ensure this, all RESTful APIs use similar naming conventions, request structures, methods, link formats, and messaging to achieve consistency.

### 5. Layered system

Finally, RESTful APIs rely on a layered systems architecture to deliver services. The first component of this is that developers can create and store different resources and functions on separate servers.

The second is that individual layers don’t know what’s contained within the others or how they work.

In other words, individual layers work independently from each other. From the client’s point of view, when a request is sent, it’s not possible to know which server is being used to action a response.

## CRUD vs RESTful: similarities and overlap

At this point, we have a thorough understanding of REST vs CRUD in terms of their respective definitions, mandates, and scopes. However, we’ve essentially taken each in isolation so far.

To build on this, we can think about where the two concepts overlap. So let's think about the similarities between REST and CRUD.

We can actually approach this from a few distinct angles. The first, as we’ve seen, is that REST requests can be used to perform CRUD actions. Therefore, it’s helpful to understand the CRUD framework in the context of building API-based solutions.

This ties in with the REST methods that we highlighted earlier as being analogous to the core CRUD operations.

Another angle is that we’ll often set out to implement CRUD functionality on a particular data set - and end up needing to leverage REST requests as the best way to achieve this.

To keep our example straightforward, let’s say you want to build a CRUD app for managing data in some existing proprietary database - like an internal table in your CRM or ERP system.

We don’t actually host the database ourselves, so we can’t simply query it using SQL or another language. Therefore, our best option might be to use the vendor’s public API to connect to the data we need to build our CRUD tool.

The final thing to consider is that we may encounter situations where we need to use REST and CRUD actions together in more complex use cases.

For example, say we had a workflow that involved retrieving data from an SQL database and using it to trigger an action in an external SaaS platform. For the sake of argument, we’ll say this is an email automation tool.

We might use a user action to trigger a preconfigured SELECT query to our database in order to **read** the required database row - before using a **POST** request to the email tool’s API in order to trigger the automation with the relevant data.

The possibilities for using CRUD and REST together are almost endless. We’ll consider some of the more practical elements of achieving this toward the end of this guide.

![Development time](https://res.cloudinary.com/daog6scxm/image/upload/v1685701134/cms/agile-digital-transformation/Build_Time_https___www.goodfirms.co_resources_software-development-research_uy9yax.webp "Development time")

([GoodFirms](https://www.goodfirms.co/resources/software-development-research))

## Differences between CRUD and REST

First though, we want to draw more explicit attention to some of the important distinctions between REST and CRUD as frameworks for managing data.

The first is their scope and applicability.

A good way to think about this is that CRUD is an abstract way of expressing the actions that can be taken on a database. 

We’ll still need to have some kind of tool to implement this - whether it’s using REST, native queries in our DBMS, a different API protocol, or some other tool.

On the flip side, REST is only a protocol for enabling systems to communicate. Some of the things that we might do within this framework include performing the basic CRUD operations - but this isn’t the primary focus as such.

Rather, CRUD functionality is just *one of many* things we might leverage RESTful APIs to achieve.

So, ultimately we can leverage CRUD or REST simultaneously or independently of one another.

Another key thing to keep abreast of is the fact that we’re always going to be constrained by what capability is offered by different solutions in our ecosystem.

For instance, we’re dependent on the specific functionality that individual vendors choose to expose in their APIs. 

This is an important point when dealing with the issue of CRUD vs RESTful - in the sense that we can’t take it for granted that we’ll have access to all CRUD operations. Indeed, many RESTful APIs might effectively provide read-only access to data.

Therefore - although CRUD operations might be *technically* possible through API requests, *functionally speaking* this isn’t an option for us, so we’d have to find another solution to do whatever it is we want to achieve. 

## How to use CRUD and REST in tandem

Finally, let’s wrap up by thinking about what strategies we can use to tie together everything that we’ve learned so far.

The REST protocol is *one* of our options for implementing CRUD functionality. Although we can send manual REST requests to perform CRUD operations, this isn’t exactly the sleekest solution available to us.

The missing piece of the puzzle is how we enable users or other processes to access this functionality.

This means building effective user interfaces, automation rules, and other human-facing tools that empower our team to perform data management actions in the most efficient way possible.

To learn more, check out our ultimate guide to [data management software solutions](https://budibase.com/blog/data/data-management-software/).