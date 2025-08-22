+++

author = "Ronan McQuillan"
date = 2024-07-28
description = "API calls are used to access information or trigger events in external platforms. Here’s what you need to know."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1690550450/cms/what-is-an-api-call/what_is_an_api_call_ug6kqm.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1690550450/cms/what-is-an-api-call/what_is_an_api_call_ug6kqm.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is an API Call?"

+++



API calls are one of the basic tools we can use for all kinds of development, integration, data sharing, and digital transformation projects. Whether we’re building solutions from scratch or simply hooking up a couple of SaaS tools - we’re probably going to need to make API calls.

Today, we’re going to guide you through everything you need to know.

We’ll start with what API calls are, what they’re used for, and how they work. Then, we’ll check out *how* you can use them, work with data, and configure requests and responses for specific projects - along with which specific tools you might need.

By the end, you’ll have a full working knowledge of how to work with API calls to transfer data and trigger actions across otherwise separate platforms.

Let’s start with the basics.

## What is an API call?

An API call is the process of using defined protocols to send a request to an external platform to retrieve data or trigger a particular action. 

API stands for *application programming interface*.

This is a regularized set of standards that make it possible for separate platforms to communicate with each other using common standards.

For example, say we were trying to build a system for our customers to update their contact details. We’d need to build a form that can *retrieve* the right data from our CRM - and then allow customers to edit whichever values they want to change.

One of our options would be to use API calls to connect our new tool to our CRM’s back-end data.

You might also like our guide to [open-source low-code platforms](https://budibase.com/blog/open-source-low-code-platforms/).

### What are API calls used for?

API calls are used any time we need to use one application to access data or trigger actions in an external platform. This can include all kinds of integration, data retrieval, automation, and other day-to-day tasks that involve two or more platforms.

Provided that both tools support connectivity via APIs, you’re mainly limited by the functions that their developers have chosen to expose.

For example, the most dominant framework - *REST* - is built around a handful of common HTTP verbs that mimic the basic CRUD actions we can perform on a database. 

These are:

- **GET requests** - for retrieving data.
- **POST requests** - for adding data.
- **PUT** and **PATCH** **requests** - for altering existing data.
- **DELETE requests** - for deleting data.

Other API protocols, like *SOAP, RCP*, or even *custom* configurations have their own commands for performing similar basic actions.

We’ll compare the common API protocols a little bit later.

We can also use these commands to trigger other kinds of actions besides just basic data management tasks - as long as this is provided for by the target application’s vendor - or by our own developers, in the case of an *internal API*.

What we can do here is determined by the *endpoints* that are available. 

An endpoint is a URL that developers provide to enable us to access a particular function using API calls - often by sending a POST or PUT request to send whatever data is required to carry out the action.

For example, users can send a POST request to the Budibase API in order to create a new application in our platform. 

Other examples of using POST and PUT requests to trigger defined actions in third-party tools could include:

- Generating an invoice from your accounting platform.
- Triggering a report from your CRM or ERP.
- Running a diagnostic script in an infrastructure management tool.
- Sending an automated email.
- Making a purchase on an internal sales platform.
- Sending notifications via an instant messaging tool.
- Complex data management actions.
- And any other functions that the vendor exposes through their API.

To find out which specific functions are available in any given platform’s API - along with what kind of request is required - you’ll need to consult the vendor’s documentation.

![API call statistics](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_use_https___nordicapis.com_apis-have-taken-over-software-development__y2sarz.webp "API stats")

([NordisCapis](https://nordicapis.com/apis-have-taken-over-software-development/))

### Benefits of working with APIs

API calls are one of the most fundamental development tasks around. But, why are APIs so ubiquitous?

The first thing to recognize here is the nature of modern IT ecosystems. Business IT today is characterized by large numbers of SaaS platforms, distributed systems, cloud-based services, and problematic data silos.

This is exacerbated by a global shortage of qualified software engineers and other technical talent.

APIs are fundamental to how we manage - and ultimately alleviate this situation.

Specifically, they offer benefits including:

- Reduced development costs and turnaround times for custom solutions.
- Building efficiency into internal processes.
- Eliminating menial admin tasks.
- Creating visibility across otherwise siloed workflows.
- Facilitating data centralization and information-sharing.
- Cross-platform automation and integration.
- Enabling us to add custom functionality to COTS platforms.
- Improved accuracy, reliability, and validity across organizational data assets.
- And more.

In other words, API calls facilitate all of the benefits that we can see through improved integration between platforms and enhanced data sharing between teams.

Next, let’s take a closer look at what happens when we successfully send an API call.

## How do API calls work?

An API call comes in two parts:

1. A request.
2. A response.

These are sent by a *client* and a *server*, respectively.

Let’s examine each of these two halves in turn. 

### Clients send requests

An *API client* is the user or platform that sends a request to the target application. This could be a hard-coded solution, an API management tool, a SaaS platform, a web browser, a web application, or even a user manually sending a request.

Some types of clients - especially under the custom or manual umbrella - will require us to write requests from scratch. The majority of API clients will provide a more streamlined UI for providing the values we need to populate a valid request.

But - what exactly is a *request*?

One of the core ideas behind standardized API protocols is that we can send requests to access data or trigger actions in a *defined format* - so that they’ll be understood by any platform that adheres to this framework.

For example, a REST API request is made up of several components. 

These are:

- **The endpoint URL** - The location of the resource that the request targets.
- **The method** - For instance, a GET, POST, or DELETE request.
- **The request body** - Containing the specific data that we’re sending as part of our request.
- **Response headers** - Additional information that we provide to give context to our request, around things like authentication, formatting, and caching.

To learn more about this, check out our guide - [What are the Components of an API?](https://budibase.com/blog/inside-it/what-are-the-components-of-an-api/)

To find out about the specific information you’ll need to provide under each of these, it’s important to consult the documentation of whichever API you want to call.

### Servers send responses

API requests are sent to the target platform’s *server* - as opposed to the application or database itself. The server then goes away and retrieves whatever data we’re requesting, before it sends the relevant response back to our client.

This is an important distinction. We’re only communicating with the server - what happens behind the scenes is up to the vendor.

Just like with requests, *responses* have to follow a defined structure within a given API protocol in order to ensure interoperability. This is generally pretty similar to the structure of a request.

So, in REST, an API response includes:

- **A status code** - indicating whether or not our request was successful and what happened.
- **A response body** - containing the data we requested, if applicable.
- **Response headers** - providing additional context around formatting, caching, and cookies related to the response.

We’ll look at how to handle an API response a little bit later. For now, the important thing to know is that the response body can come in one of several formats - including plain text, XML, JSON, or HTML.

This depends on what the vendor supports, as well as what we specify in our request headers.

## How to make an API call in 5 steps

Now that we know all of the ingredients of a successful API call, we can start to think about how we can put this knowledge into practice.

Remember - we could be using a huge array of different clients. Therefore, our goal isn’t to get into the granular details of every possible application. Rather, we want to think about the core principles involved and the data that we need to provide in our requests.

Here are the practical steps involved.

### 1. Find the appropriate API endpoints

The first thing we need to do is locate the relevant endpoint for whatever function we want to carry out with our API call. We can find this in the vendor’s documentation.

The base URL will be made up of three components:

1. The domain.
2. The API version.
3. The specific resource’s location.

The domain is the slug of the URL, while the latter two parts are appended as subfolders. So, an example API endpoint might look like this:

{{< highlight javascript "linenos=inline" >}}

http://api.domain.com/version/resource

{{< /highlight >}}

If we had a domain called *example.com* and we wanted to send a request to the first version of their API, targeting a resource called *customers*, the endpoint could be:

{{< highlight javascript "linenos=inline" >}}

http://api.example.com/v1/customers

{{< /highlight >}}

### 2. Select the right method

Next, we need to choose the appropriate method for our request. Again, this is going to be determined by how the vendor has built their API - so be sure to consult the documentation.

We can generalize to a greater extent with basic database actions, but even in this case there will be variance between vendors. So, most servers will accept a GET request for basic read actions, but a minority may also use POST requests for the same thing.

The other thing to consider is how we can actually specify a request method using a particular API client.

For example, if we wanted to hardcode this in JavaScript, we could use a *Fetch* statement - or define an *Asynchronous* function. 

However, most non-developers are going to be creating API requests in existing tools with a dedicated interface for doing so. In this case, we’ll normally just use a dropdown menu to select the method we want to use.

Here’s how this looks in Budibase:

![What is an api call](https://res.cloudinary.com/daog6scxm/image/upload/v1690550450/cms/what-is-an-api-call/what_is_an_api_call_1_swaxcc.webp "What is an api call")

### 3. Provide request parameters

Next, we’ll usually need to add some form of data to our request - even if we’re just trying to retrieve information. *Parameters* are used to provide values to filter against, select specific rows to retrieve, or to provide the values that we want to add or update within a data set.

These can be provided in the request body - or by appending them to our endpoint URL.

The syntax for appending parameters to a request URL is:

{{< highlight javascript "linenos=inline" >}}

?parameter1=value1&parameter2=value2

{{< /highlight >}}

So, if we used our example from earlier but wanted to filter it to return any rows relating to customers named John who are thirty years old, our URL could look like this:

{{< highlight javascript "linenos=inline" >}}

http://api.example.com/v1/customers?firstName=John&age=30

{{< /highlight >}}

Or, we could add these in our request body as a series of key value pairs, in whichever format we specify with our headers.

### 4. Authentication and authorization

Authentication and authorization are how the target server verifies who we are and which resources and actions we have permission to access. There are a few key standards that vendors might use to handle this.

For the most part, this means providing specific authentication credentials, API keys, or access tokens within the headers of our API request.

But, API security is a topic in its own right, to be totally honest.

Check out our in-depth guide to [REST API authentication](https://budibase.com/blog/tutorials/rest-api-authentication/) to learn more.

### 5. Other request headers

Finally, we might want to configure some additional headers when we send our web API call. Besides providing authentication credentials, these can be used to add a couple of other pieces of information about our request.

Again, headers are a set of key/value pairs that are stored between our request’s URL and body.

These are most commonly used for:

- Storing cookies.
- Configuring caching.
- Stating the format or content type of our request body.
- Specifying how we’d like the response body to be formatted.

We’ve also created a comprehensive guide to [API headers](https://budibase.com/blog/inside-it/api-headers/) that explores this issue more fully.

## How to handle an API response

So, now we know how to create an API call and what to include in our request. We also have a basic idea of what we can expect the response from the server to look like.

The next thing we need to tackle is what to do with a response once it’s been returned.

Really, we need to do two things:

1. Interpret the status code.
2. Pass whichever data we need from the response body to our client’s data, process, or presentation layer.

The first part is relatively easy. Status codes are three-digit numbers that indicate how the server responded to our request. If we get a *200* or *201* status code, then the server is telling us that the request was actioned successfully.

Status codes beginning with *3, 4*, or *5* are error codes that can indicate that something has gone wrong, so we’ll need to look up the relevant HTTP code to investigate what the problem might be.

In terms of handling response data, it’s important to note that this step won’t apply in *every* situation. For example, if we use a POST request to add a row to an external data set, the response might return an empty body - since there’s no data to pass back.

In cases where we *do* expect the body to return data - we’ll obviously also need to verify that this is what we expected. If not, there could be a problem with how we’ve configured our request.

Say we sent a GET request to retrieve some customer data - and we got a relevant data object back. There are a few key clusters of things we might want to do with this.

First, we might want to simply add the data we’ve retrieved to our client’s own database. Second, we might want to use this data within some defined process within our client application.

And third, we might want to display the relevant information in our client’s UI. Or, we could do some combination of all three.

How this works will depend on the specific client that you’re using to make API calls.

We might also need to perform some kind of transformation on the data that we’ve retrieved, using a particular programming language. 

For example, to aggregate values, reformat data, or parse out specific information from the raw data object provided by the response.

Again, the degree of flexibility on offer here will vary from client to client. Budibase offers custom JavaScripting to transform API responses before using them in your application projects:

![What is an API call](https://res.cloudinary.com/daog6scxm/image/upload/v1690550450/cms/what-is-an-api-call/What_is_an_api_all_2_kpdor0.webp "What is an api call")

We’ll check out some of the most important categories of tools for managing APIs towards the end of this guide.

{{< cta >}}

## Common API protocols

So far, we’ve primarily focused on working with making calls to REST APIs. While this is the most common protocol, it isn’t the only show in town. Therefore, it’s worth briefly checking out the landscape here more fully.

Here are the most common API protocols, and what they’re used for.

### REST

REST is the by far the most dominant API framework. It stands for *representational state transfer*. Basically, this is the *client/server* approach that we’ve largely focused on throughout this guide.

The core benefit is that the front/back end of the platforms involved in an API call retain separation - giving us a large degree of flexibility to perform different actions via common HTTP methods.

REST APIs are generally the default option for most data transfer and integration functions because they can guarantee a high degree of interoperability - and therefore low barriers to implementation.

### SOAP

SOAP stands for *simple object access protocol.* This is a messaging standard that allows developers to build APIs, usually around XML. SOAP also supports a wider range of web technologies than REST, including HTTP, SMTP, and TCP/IP.

The idea here is to provide a greater degree of flexibility and extensibility for developers - especially in the context of custom internal APIs.

However, this comes with a tradeoff in terms of interoperability. Put simply, the more customization we implement, the less likely it is that any given platform will be able to work with our API.

### RPC

Remote procedural call (RPC) is a methodology for building client/server applications. This is a lightweight protocol for implementing functions and subroutines across distributed systems. Unlike our other API protocols, the idea isn’t to pass data back and forth.

Rather, RPC is used to trigger specific actions.

This offers a performant way to create solutions within a distributed architecture - but is more limited in terms of the kinds of data it can handle. RPC generally only supports XML or JSON payloads.

{{< cta >}}

## Tools for making API calls

Finally, let’s think about some of the tools that we can use to manage API calls in the real world.

Of course, we know that one of our options is to manually code our requests. But - it stands to reason that if you had the development skills to do that, you probably wouldn’t be reading this guide.

So, what are the options for less technical users who still need to configure and send API calls?

### API managers

The first cluster of tools is what’s known as *API management platforms* - such as PostMan.

These are purpose-built platforms for creating, testing, and managing *multiple* API calls in one location. They’ll also typically include functionality for directly importing vendor’s docs as available endpoints - as well as for performing data manipulations.

Ultimately, the idea is to centralize your API management efforts, improving oversight as well as making it easier to write calls in the first place.

### API management in other SaaS tools

For the majority of non-technical colleagues, API calls are created and configured using existing platforms. The goal is to integrate these with other tools in your software stack to build simple automation actions or data-sharing solutions.

Nowadays, most tools will offer some functionality for doing this - although the specific extent of what’s available will vary from platform to platform.

The upside is that we can typically expect a relatively straightforward interface for populating our requests with data, without any significant barriers in terms of technical skills.

### Workflow management tools

Workflow management platforms, like Zapier, allow non-technical colleagues to define and automate processes using a visual editor.

A huge part of this is implementing actions in third-party tools as specific steps within workflows - using WebHooks and APIs.

Where native API management features in SaaS platforms might only be sufficient for connecting small sets of tools, workflow management platforms are a more viable option for creating complex rules that draw on larger numbers of entities.

### Low-code platforms

Finally, we have low-code platforms, like Budibase. Low-code development is all about empowering non-technical colleagues and professional developers alike to create incredible applications, in a fraction of the time.

API management is a key part of this.

Check out our ultimate guide to [custom app development ](https://budibase.com/blog/app-building/custom-app-development/)to learn more.