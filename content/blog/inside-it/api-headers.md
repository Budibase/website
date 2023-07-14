+++

author = "Ronan McQuillan"
date = 2023-14-07
description = "API headers are used to provide additional information about requests and responses."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1689339038/cms/api-headers/What_are_API_Headers_nnu7wo.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1689339038/cms/api-headers/What_are_API_Headers_nnu7wo.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are API Headers?"

+++

API headers are central to how your request is received by the target server - and the response it produces. These can be used to provide extra context for our request, prove our permission to access resources, or for other important metadata.

As such, knowing how to use request headers properly is a vital part of accessing external data via APIs.

Today, we’re going to cover everything you need to know - from what API headers are, what they do, and how they work - to concrete real-world examples of how you can leverage them to build integrated solutions.

We’ll even see how Budibase makes setting up API requests easier and more flexible than ever before.

First, though, let’s think about the basics.

## What are API headers?

API headers are a section of your requests that’s used to transfer metadata about *the request* and the *desired response.*

In more basic terms, this is where you can provide extra information about the request.

API *responses* use HTTP headers too - for exactly the same purposes - providing context to the data that’s been sent.

Header attributes can relate to several different things, but for the most part, we’re dealing with four categories of metadata.

These are:

1. Information about the format of the request and response body.
2. Authorization details.
3. Response caching.
4. Response cookies.

We’ll check each of these out in a little bit more detail later.

For now, the important thing is to understand the relationship between the headers and the body of the API request or response.

The body is the actual data that you’re passing on or requesting. The header gives extra context to this request.

### Why is this needed?

So why do we need API headers? If the body contains the data that we want to transfer with our request and response, what’s this extra information for?

Without getting into the technical stuff just yet, the metadata in your headers can play a few different roles.

The first is proving that we have the necessary permissions to perform the actions we’re requesting - whether this is querying a database or triggering some action in the target server.

We can also provide very basic information that’s helpful for server monitoring, like the DateTime of our request or details about the client we’re using to send it. These might be required by the server in order to get a valid response.

API headers also give us more control over how data is returned to us. For example, specifying a particular format for the response.

![API stats](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_use_https___nordicapis.com_apis-have-taken-over-software-development__y2sarz.webp "API stats")

([NordisCapis](https://nordicapis.com/apis-have-taken-over-software-development/))

Finally, we might need to use headers simply because the server requires it - and we won’t get a response if we don’t meet the documented requirements.

## What are API headers used for?

A minute ago, we saw that the information contained in request headers broadly falls into four categories.

Next, let’s check each of these out in turn to see the specific data we can include and what it does.

### Body and response information

First, there’s information about our request body and the response - particularly relating to their format.

For request headers, some of the most common attributes are:

- **Accept** - For specifying the type of content that can be accepted in a response. For instance, application XML or JSON format.
- **Content-type** - For indicating the type of content that’s included in the request body.
- **Accept-charset** - For telling the server which character sets are acceptable to the client.

For response headers, the most common attributes here include:

- **Allow** - Denoting the types of requests that can be made by clients. For example, GET, Put, etc.
- **Content-type** - For indicating the type of content that’s included in the request body.
- **Status** - A response code that indicated whether the server successfully actioned the request - and if not, why.

Already, this gives both servers and clients a lot of flexibility within API calls. For example, we could specify that we need a response in a JSON object, but the server could throw a 406 error as its status - because this content type isn’t supported.

For more information on API bodies, take a look at our guide - [what are the components of an API?](https://budibase.com/blog/inside-it/what-are-the-components-of-an-api/)

### Authorization

Authorization is related to how we prove that we have permission to carry out specific actions. In other words, these API headers are used to safeguard security by preventing unauthorized access to server resources.

For the client side, the most common request header here is **authorization**, which is used to store your unique *API key*. This serves two roles. First, it proves that we’re allowed to make requests to the server.

Second, it can indicate to the server which specific resources we can access via API requests - at least within role-based access control systems.

The most common response header for authorization is **www-authenticate**. This indicates that some form of authentication is required before the server can respond to the original request.

![API headers security](https://res.cloudinary.com/daog6scxm/image/upload/v1685701489/cms/API-integration/API_incident_https___nordicapis.com_20-impressive-api-economy-statistics__lkamoz.webp "API headers security")

([NordisCapis](https://nordicapis.com/apis-have-taken-over-software-development/))

### Response caching

Response caching is when the server stores response data in order to reduce the number of requests that are made to the underlying dataset. This cuts the amount of work that’s required by the server to generate a response.

Basically, when a response is cached, the stored body is returned to requests, rather than the information being retrieved each time.

This is defined using the **cache-control** header. 

We can use this to set a number of directives, such as:

- **public** - A cache can store the response.
- **private** - The response can be stored, but not in a shared cache.
- **max-age** - The time in seconds for which a cached response is acceptable.
- **no-cache** - Used by clients to specify that a stored response shouldn’t be used, or by the server shouldn’t use the response for subsequent requests without validation on the origin server.
- **no-store** - A cache must not store the request or response - if specified by the client or server respectively.

### Response cookies

Finally, we have response cookies. These are small data objects that servers send to clients, which can then be stored and sent back in subsequent requests. This is particularly useful in user-facing contexts - for instance, browser-based applications.

This can be used for session management tasks, user tracking, personalization, or any other scenario where it’s useful to know that the same user has triggered several requests within a single session.

Servers can define cookies using the **set-cookie** attribute, and clients can send them back with the **cookie** header.

We can also add extra information to cookies if the server supports it - including expiration, security details, or other metadata.

## Where can I find the headers in my API request

So, now we know what API headers are, how they work, and what they do. Let’s start to think about how they’re actually used.

The first question is where you can find them.

Now, to some extent, this is kind of an academic question. That is, most of the time we’re dealing with APIs in a dedicated API manager, or another purpose-built UI in a platform that can send API requests. 

In this case, we’ll be able to set them in the *Headers* section of whatever tool we’re using’s UI. We’ll see this in Budibase a little later.

But, for the sake of completion, it’s worth knowing how these are contained in hard-coded API requests. Request and response headers live in the message body. This is the big data blob that includes our entire request or response.

Usually, headers are stored in a data object between the request/response line and the request/response body.

The fact that this object contains the headers isn’t specified explicitly. Instead, you can recognize them by their format.

That leads us neatly to…

## Formatting headers

Headers are structured as a series of *key-value* pairs. Each key and value is separated by a colon. Pairs are separated by commas. The whole object is contained in a single pair of handlebars.

Each key and value is formatted as a string.

So, this would look something like this:

{{< highlight javascript "linenos=inline" >}}

{

“key1”: “value1”,

“key2”: “value2”,

“key3”: “value3”

{{< /highlight >}}



Obviously, these aren’t real values.

The *keys* are used to denote the attribute that’s being stored. For example, any of the headers that we saw a little bit earlier.

The *values* are the data that we want to store against each of these attributes. Often, these aren’t intended to be readable by users. Rather, many intended to be long and arbitrary, so they can’t simply be guessed.

Others are readable, especially if they might be used for debugging - for instance, those relating to the format of the request or response body.

## API headers in action

Next, let’s think about how we can apply all of the knowledge we’ve gained so far in the real world with a couple of examples.

First, let’s check out how we’d use headers in a request. Say for example we were sending GET a request to our customer database to retrieve some particular rows that are specified in our request body.

In our example, we have a few requirements.

- We need to provide our unique API key to authenticate the request.
- We don’t want the response to be cached.
- Our request body is a JSON object with UTF-8 characters.
- We want to record the date and time of our request.

So, our headers might look like this.

{{< highlight javascript "linenos=inline" >}}

{

“authorization”: “AGjdgdagd843qjfagdkadgkjdg93tadjdkgsgda9dgasfgdkagahfsas”,

“content-type”: “application/json; charset=utf-8”,

“date”: “Wed, 01 Oct 2023 00:00:00 GMT”,

“cache-control”: “no-store”

{{< /highlight >}}

In our response, we want to include the status, date, and content-type.

If the request was successful, our response headers would look like this:

{{< highlight javascript "linenos=inline" >}}

{

“status”: “200”,

“content-type”: “application/json; charset=utf-8”,

“date”: “Wed, 01 Oct 2023 00:00:01 GMT”

{{< /highlight >}}

Note that the *200* status code indicates that the request was successful. If there was a problem, we’d likely see a 3XX or 4XX status code. For example, *404* - indicating that the requested resource couldn’t be found.

## Configuring request headers in Budibase

Now, let’s check out how we can configure API headers in Budibase. 

Actually, there are two distinct areas we need to cover here:

- Using Budibase’s internal API.
- Leveraging external APIs within the Budibase builder.

On the first point, you’ll need to configure your request headers in whichever client you’re using to interact with the API. 

Check out our [API documentation](https://docs.budibase.com/docs/public-api) to learn more.

Budibase can also be used as a client for connecting to APIs as a data source or within automation rules.

We offer an intuitive, form-based interface for adding headers to API requests - including bindable values using handlebars and JavaScript formulas:

![Configure API headers](https://res.cloudinary.com/daog6scxm/image/upload/v1689339019/cms/what-are-the-components-of-an-api/Budibase_Screenshot_nypfwr.webp "configure api headers")

It’s never been easier to dynamically pass values to API headers based on app states, user actions, or stored data.

Take a look at our ultimate guide to [custom application development](https://budibase.com/blog/app-building/custom-app-development/).

{{< cta >}}

## Turn data into action

Budibase is the ideal solution for busy IT teams that need to output professional solutions at pace. Connect your data, build interfaces, add automations, and deploy your tools however you like, with minimal manual coding.

Let’s check out what makes Budibase tick.

### Our open-source, low-code platform

At Budibase, our mission is to help teams turn data into action. We offer extensive external data support, autogenerated UIs, powerful automations, flexible self-hosting, a generous free tier, multi-player collaboration, and much, much more.

Check out our [features overview](https://budibase.com/product) to learn more.

### External data support

Budibase is the clear market leader for data support. We offer dedicated connectors for MySQL, SQL Server, Postgres, S3, Oracle, Airtable, Couch, Mongo, Arango, Google Sheets, REST API, and more.

We’ve also got our own built-in database, along with full support for custom data sources.

### Optional self-hosting

Deploy your Budibase installation to your own infrastructure for maximum control. We offer optional self-hosting with Kubernetes, Digital Ocean, Docker, Linode, Portainer, and more.

Or, you can use Budibase Cloud and get up and running in minutes, letting us take care of everything. Check out our [pricing page](https://budibase.com/pricing/) to learn more about both options.

### Automations and integrations

Budibase offers powerful custom automations with minimal manual coding. Combine and configure our built-in triggers and actions to craft the perfect rules to streamline your internal processes.

We also offer support for a huge array of third-party app integrations, using REST API, Zapier, WebHooks, and more.

### Role-based access control

Seamlessly marry security and user experience with our built-in role-based access control. Assign users to defined roles and grant permissions based on data sources, queries, automation rules, app screens, and individual components.

We also offer secure environment variables - alongside free SSO using OAuth, OpenID, Microsoft, and more.

### Custom plug-ins

Budibase won’t be beaten for extensibility. Build your own custom components, data sources, and automation actions with our dedicated CLI tools. Or, import community contributions from GitHub in just a few clicks.

Check out our [plug-ins documentation](https://docs.budibase.com/docs/custom-plugin) to learn more.

### 50+ free app templates

Thousands of businesses across all industries choose Budibase to build professional, integrated tools to manage their internal processes. To show off what’s possible, we’ve created more than fifty free, fully customizable [app templates](https://docs.budibase.com/docs/custom-plugin).

Sign up for Budibase today to start building custom solutions, in a fraction of the time.