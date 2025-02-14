+++

author = "Ronan McQuillan"
date = 2024-03-14
description = "Knowing the components of an API is vital for successful intergration between platforms."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1689339019/cms/what-are-the-components-of-an-api/What_are_the_components_of_an_api_i3hh2r.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1689339019/cms/what-are-the-components-of-an-api/What_are_the_components_of_an_api_i3hh2r.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are the Components of an API?"

+++

Knowing the components of an API is obviously important for setting them up to do what you want.

Otherwise, how can you ever expect to use them correctly?

Today, we’re covering everything you need to know. We’re going to take each of the constituent parts of an API in turn and explain exactly what they are, what they do, and how you can use them.

Along the way, we’ll think about real-world examples of *why* each one is important, and the specific scenarios where they’re useful.

But, before we dive in, let’s take a zoomed-out view of what we’re dealing with.

So…

## How do APIs work?

Let’s start with a high-level overview of APIs. API stands for *application programming interface*. Basically, this is a piece of code that allows two or more applications, data sets, or other nodes to communicate with each other.

To ensure interoperability, APIs have to adhere to prescribed standards. There are a couple of specific protocols out there, but the basic idea is that - whichever tools we’re using - setting up an API should work the same way.

But what do we mean by *communicate*? Obviously, software tools don’t chat about their feelings.

APIs allow *clients* to make *requests* to *servers* - which then send back *responses*. We’ll dive into each of these in a second.

For now, the important thing is understanding that APIs are a way to request, retrieve, and share data between applications, within a defined framework.

![What are the components of an API](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_use_https___nordicapis.com_apis-have-taken-over-software-development__y2sarz.webp "what are the components of an API")

([NordisCapis](https://nordicapis.com/apis-have-taken-over-software-development/))

To understand this in more depth, we need to circle back to our original question - what are the components of an API?

Here goes!

## API clients

An *API* client is the application that makes the initial request for data. This could be a web browser, a SaaS platform, an API management tool, a mobile app, or any other piece of software.

The client is also responsible for bringing together all of the data that we need to *make* the request - which we’ll explore in a second.

When a request is made successfully, the *response* is sent back to the client.

We also need to consider the logic that determines *when* a client sends a request. This could be based on a whole range of different triggers, depending on the specific workflow we’re dealing with.

So, this could be user actions, like someone pressing a button, refreshing a screen, or filling in a form.

Or, it could be based on automated logic - like a database query, time-based trigger, or some other condition being met in the back end.

## API requests

Next, let’s examine how *requests* are made up.

Remember, part of the idea behind APIs is that - whichever protocol you’re using - any platform that supports this should be able to interact with requests and responses in the same way. 

This is the basis of interoperability.

Therefore, it follows logically that requests are going to need to follow a consistent format so that they can be handled the same way, regardless of the client and server involved.

API requests are made up of five basic components. These are:

### Endpoints

The endpoint is the URL that an API request is directed at. This can be made up of a few distinct parts, depending on how our client and server are configured.

The first is the actual destination of the resource that we’re trying to access. This includes the *domain* of the server, along with any resources that the vendor has chosen to expose to us and the version of their API that we’re calling.

So, say we were sending a call to an API for our local zoo. It lives at *api.the-zoo.com* and we want to access data about lions. The vendor has created an API endpoint for us to request this called */lions*. 

We’re using the second version of their API.

Our endpoint might be:

{{< highlight javascript "linenos=inline" >}}

https://api.example.com/v2/lions

{{< /highlight >}}

You’ll need to check specific vendors’ documented API specifications to see what format you need to use and what endpoints are available.

The endpoint can also be used to provide extra information - called *query parameters* within our request. These need to be attributes that the server can accept within a particular endpoint so again, check the docs carefully.

Say we only wanted to pull data about a *particular* lion - whose name is *Franky*. The zoo’s API allows us to do this using the *lionName* parameter. We can add this to our endpoint like so:

{{< highlight javascript "linenos=inline" >}}

https://api.example.com/v2/lions?lionName=Franky

{{< /highlight >}}

But, this isn’t the only way to pass parameters in an API request. We’ll check this issue out more fully in a couple of minutes.

### Methods

Before we get to that, we need to talk about *methods*. A method is an instruction that tells the server what we expect it to do with the information that we’ve sent in our request.

Specifically, what sort of operation we want it to perform on the resource we’re dealing with. API methods are essentially analogous to database operations.

REST, the most dominant API protocol, uses standard HTTP methods. The most common of these include:

- **GET** - for retrieving a data object.
- **POST** - for creating a new data object.
- **PUT** - for creating a new data object *or* altering an existing one.
- **PATCH** - for modifying an existing object.
- **DELETE** - for deleting existing objects.

For example, we created an endpoint earlier that targets any lions with the name Franky. If we sent a GET request to this endpoint, we might get back a JSON formatted data object that looks like this:

{{< highlight javascript "linenos=inline" >}}

{

“lions”:{

​	“lionName”: “Franky”,

​	“age”: 16,

​	“adoptionDate”: 2016-02-02,

​	“favoriteFood”: “Steak”

​	}

}

{{< /highlight >}}

If we didn’t have any kind of filtering, the API request would return the same information for *all* of the zoo’s lions.

Say we wanted to change Franky’s favorite food. We’d probably use a PUT request - although some APIs might be set up to prefer for you to use PATCH - always read the docs.

But, so far, we only have the components to select a row and say we want to update it. We don’t have anywhere to *add new values* just yet.

### Parameters

That’s where *parameters* come in. These are arguments that we can pass to our API request. We’ve actually seen this already when we placed attributes in our URL in order to filter a GET request.

Besides filtering, parameters can also be used to specify which attributes we want to retrieve, for authentication and user management, to provide new data in our request, or for any other data transfer purposes.

There are a few different types of parameters that we need to be aware of. These include:

- **Path parameters** - Extensions to the URL to select specific attributes that we want to retrieve.
- **Query parameters** - For performing sort, filter, and pagination functions within our request URL.
- **Header parameters**  - Data that we store in our request headers. More on this in a second.
- **Request body parameters** - Attributes that we place in our request body in order to add or modify data objects.

So, in order to successfully perform a PUT request on our *lions* data, we’ll need to provide the new data in our request body. 

In our example, this would be Franky’s new favorite food.

### Headers

Before we look at the request body though, we need to think about *headers*. This is a special part of our API request that allows us to provide additional context to the data we’re sending.

This is useful for a number of reasons, including:

- Adding authentication details to prove that we are permitted to take whatever action we’re requesting.
- Storing cookies.
- Configuring whether and how we want our request and response to be cached.
- Giving information about how our request is formatted and the type of response we expect.

![API authorization stats](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_incident_https___nordicapis.com_20-impressive-api-economy-statistics__lkamoz.webp "API authorization stats")

([NordisCapis](https://nordicapis.com/20-impressive-api-economy-statistics/))

We’ve created a dedicated guide to [API headers](https://budibase.com/blog/inside-it/api-headers/) which explains this in more depth.

### Request bodies

Finally, we have the body of our request. This is where we store any data objects and attributes that we want to send in our request - mostly within PUT and PATCH, and POST requests.

PUT requests are intended to replace the *entire* entity. So, we’d need to provide our new values, as well as all of the existing ones. In this case, the body for Franky’s new favorite meal might be:

{{< highlight javascript "linenos=inline" >}}

{

“lions”:{

​	“lionName”: “Franky”,

​	“age”: 16,

​	“adoptionDate”: 2016-02-02,

​	“favoriteFood”: “Chicken”

​	}

}

{{< /highlight >}}

PATCH requests can be used to update *only specified fields*. Basically, that means that we don’t need to fill in all of the existing data. If we specify an *existing* attribute, its value is modified.

To update Franky’s favorite meal, we could simply use:

{{< highlight javascript "linenos=inline" >}}

{

“lions”:{

​	“favoriteFood”: “Chicken”

​	}

}

{{< /highlight >}}

If we specify an attribute that *doesn’t exist*, then this will be added to the current schema, along with whatever value we give it - assuming we have permissions to edit the schema.

Whether we’re using PUT or PATCH, we’ll still need the same query parameters to filter the data set and *only* update Franky’s row.

Note that different servers will have rules in the backend that constrain how we take different actions, so read the vendor’s documentation for guidance on how you’re supposed to modify values.

## API server

Next, we can move on to the server. This is the platform, tool, data set, or other node that we send our request to. 

The first role that this plays is providing an API in the first place. 

So, the vendor specifies what the endpoint is, which objects are exposed to the API, what actions developers can take, how they can do this, and what the application will do in response.

They should also provide detailed documentation to outline all of this information for developers.

The server then determines how to handle requests. This includes authentication, data validation, retrieving data, creating responses, caching and cookies, and taking any other actions that are provided for.

To understand this, we need to examine two distinct layers of whichever applications we’re dealing with:

1. The data layer.
2. The business process layer.

![components of an api](https://res.cloudinary.com/daog6scxm/image/upload/v1682672764/cms/on-prem-vs-cloud/Cloud_Spending_httpswww.cloudzero.comblogcloud-computing-statistics_a4evhk.webp "components of an api")

([CloudZero](https://www.cloudzero.com/blog/cloud-computing-statistics))

Let’s take each in turn.

### Data layer

As the name suggests, the data layer is where data is stored. At the most basic level, this is the data source that we’re querying using our API requests - whichever operation we’re using. So, in the simplest possible example, this would be the target application’s database.

Therefore, the data layer comprises not just the actual attributes and values stored, but also the underlying data structures and schema of this. 

Check out our post - [what is a database schema?](https://budibase.com/blog/data/what-is-a-database-schema/)

However, real-world data layers are often a bit more complex than this.

There are plenty of ways that the database can enforce rules on the data that we can use in API requests - including validation rules, access control policies, stored procedures, query permissions, and any constraints that are applied to individual attributes.

For example, some attributes might be read-only, while others might be updatable only by certain users. Or, they might have rules applied to only permit certain values - like if a certain attribute must be unique.

In the context of sending API requests, how these rules are implemented isn’t necessarily a big concern. We only really care about whether something is possible or not, which should be outlined in the vendor’s docs.

### Process layer

The process layer is where the target application carries out its *own actions* on the data layer. We might be able to implement these processes without substantially altering the underlying data.

For example, if we had a database that stored all of our sales data - a basic process might be generating and sending an invoice.

This is important because many of these actions will be *triggerable* via API requests.

For instance, we might have a customer portal that allows users to generate invoices based on their previous orders.

Depending on how the vendor sets up this process, we might need to use a POST or PUT method in order to make this request successfully.

We’d also need to provide the right data in our client to select the appropriate data - that is, getting the right data for the current user and whichever time frame they need the invoice for.

It’s harder to generalize here than it is with basic data management actions. The important thing is to fully understand the vendor’s requirements around how to trigger different actions in the process layer.

{{< cta >}}

## API response

The next component of an API that we need to get our heads around is the *response*. This is what’s sent from the server back to the client after a request is made.

This provides three key roles:

1. Outlining whether or not the request action was successful - and if not, why.
2. Providing extra information around authentication, cookies, and caching.
3. Passing data back to the client.

Each of these has its own distinct section. 

Let’s take a look.

### Status code

First, we have the status code. This is a three-digit code that indicates what the server has done with our request. The first digit indicates the category of the status, and the second two indicate the specific status.

Codes in the 200s indicate that the request is successful. 300s relate to redirects. 400s indicate an issue with the request. 500s indicate an issue with the server which prevented the request from being actioned.

In theory, we could see the full suite of HTTP status codes in response to REST requests.

In practice though, there are a few key ones that we need to be aware of. The most common status codes include:

- **200** - The request was successful.
- **201** - The request succeeded and a new data object was created.
- **303** - The response can be found at a different location.
- **400** - The request was bad and the server couldn’t understand it - likely due to a syntax issue.
- **401** - The response was not authorized.
- **404** - The requested response wasn’t found.
- **408** - Request timeout.
- **500**  - Internal server error.
- **501** - The server doesn’t support the requested method.
- **504**  - The server is acting as a gateway and timed out trying to retrieve the requested resources.

### Response headers

The response can also include header parameters. These work in exactly the same way as they do within an API request - to provide context to the information included in the response itself.

Most of the time, response headers are used to do some combination of three things:

1. Sending cookies to the client, to be stored for user management purposes.
2. Stipulating which additional authentication information is required.
3. Giving information about the format of the response body.

### Body

The final component of an API we need to be aware of is the response body. Just like the request body, this is used to hold the data that we want to pass to the client. However, this is only required in responses to certain request methods.

So, if we’re sending a DELETE, PUT, PATCH, or POST method, we don’t necessarily need the server to send any data back. We’d simply get a 200 or 201 status code to indicate that the request was successfully actioned.

But, we always need a response body in a GET request, in order to pass the data that was retrieved back to the client.

Just like earlier, this comes in the form of a data object - a series of key/value pairs representing the information that was requested.

And that’s it - all of the components of an API that we need to be aware of.

{{< alert-positive "Get the must-read stories for IT professionals, straight to your inbox.">}}
>
{{< substack-cta >}}

## 4 types of APIs

For a bit of extra context, it’s important to know that APIs aren’t all created equal. In fact, there are a couple of different types of APIs that vendors might provide for different kinds of developers and projects.

These are:

- **Private APIs** - Internal APIs that are created to be used by a company’s own developers.
- **Public APIs** - APIs that are publicly available and usable by anyone - although these might require payment.
- **Partner APIs** - APIs that are made to satisfy particular business relationships. For example native integrations with other platforms.
- **Composite APIs** - A combination of multiple APIs that are used to action related or interdependent tasks. Usually, the idea is to improve performance compared to using multiple individual API requests.

![API parameters](https://res.cloudinary.com/daog6scxm/image/upload/v1689339019/cms/what-are-the-components-of-an-api/Budibase_Screenshot_nypfwr.webp "API parameters")

Check out our ultimate guide to [IT transformation](https://budibase.com/blog/inside-it/it-transformation/).

## Manage internal processes with Budibase

Budibsae is the ideal solution for building sleek, integrated applications that leverage all kinds of existing data assets. We’ve even got our own public API, alongside full support for REST data sources and automation actions.

Here’s what makes Budibase tick.

### Our open-source, low-code platform

Budibase is the fast, cost-effective way to build professional applications. We offer extensive data support, market-leading extensibility, autogenerated screens, optional self-hosting, intuitive design tools, flexible automations, and much more.

Check out our [features overview](https://budibase.com/product) to learn more.

### Connect your data

We’re proud to lead the pack for external data support. Budibase offers dedicated data connectors for MSSQL, MySQL, Postgres, Oracle, S3, Redis, Mongo, Couch, Arango, Google Sheets, REST API, and more.

We’ve also got our own built-in database, alongside full support for custom data sources.

### Optional self-hosting

Security-first organizations love Budibase for the power to deploy custom solutions to their own infrastructure. We offer self-hosting through Kubernetes, Docker, Docker Compose, Digital Ocean, Linode, Portainer, and many more.

Or, choose Budibase Cloud and let us handle everything. Check out our [pricing page](https://budibase.com/pricing/) to learn more about both options.

### Public API

Budibase has its own public API for all kinds of application management, data manipulation, integration, and customization tasks.

Check out our [API docs](https://docs.budibase.com/docs/public-api) to learn more.

### Automations and integrations

Build custom automation rules with minimal custom code. Combine, nest, and configure our built-in triggers and actions to build, test, and publish powerful flows in minutes.

We also offer extensive integration with third-party tools, using Zapier, REST API, and WebHooks.

### Role-based access control

Budibase offers configurable role-based access control. Assign users to defined roles and grant permissions based on data sources, queries, automation rules, screen UIs, or individual components.

We also provide free SSO through OAuth, OpenID, Microsoft, and more - alongside secure environment variables for storing database credentials.

### Custom plug-ins

Budibase won’t be beaten for extensibility. Use our dedicated CLI to build custom data sources, automation actions, and components. Or, import community contributions from GitHub, in just a couple of clicks.

Take a look at our [plug-ins docs](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free app templates

Companies around the world - in all kinds of industries - choose Budibase to build secure, performant apps in a fraction of the time. To show off what’s possible, we’ve built more than fifty free, totally customizable [app templates](https://budibase.com/templates).

Sign up for Budibase today, *for free*, to start building custom tools the fast, easy way.