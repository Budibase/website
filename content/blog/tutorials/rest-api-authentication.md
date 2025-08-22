+++

author = "Ronan McQuillan"
date = "2025-02-21"
description = "There are four primary ways to perform REST API authentication."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1689941920/cms/rest-api-authentication/REST_API_AUTHENTICATION_j2ukfx.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1689941920/cms/rest-api-authentication/REST_API_AUTHENTICATION_j2ukfx.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "4 Methods for REST API Authentication"

+++

Understanding the different methods of API authentication is a core competence for any would-be developer, data professional, or anyone else who wants to connect to external tools, data sources, or other resources.

Nowadays, APIs are fundamental to the way we build, integrate, and use all kinds of digital tools - whether this is building custom software from scratch - or simply connecting existing SaaS platforms to create streamlined workflows.

So, *you* need to know how to use the different authentication methods that vendors could implement for their APIs. 

Today, we’re going to cover everything you need to know about working with the most common REST API authentication methods. 

Specfically, we're going to see how we can authenticate REST requests in Budibase using:

1. API keys in headers.
2. API keys as query parameters.
3. Basic auth.
4. Bearer tokens.

By the end of this guide, you’ll be fully familiar with how to access data and resources from just about any API. We’ll also wrap up with a few extra considerations for managing API authentication with extra levels of security.

Here goes.

{{< youtube zeMVcx59IsE >}}

{{< cta >}}

## What is REST API authentication?

API authentication is the process of verifying the identity of a user or other actor - in order to confirm that they have the necessary permissions for whatever they’re trying to do via an API. 

Specifically, authentication allows API owners to do three things:

1. Verify the identity of a client or user.
2. Enable authorized clients and users can access the API.
3. Prevent unauthorized access.

This is very tightly linked to another idea - *authorization*. Following on from authentication, this is how vendors govern which elements of their API clients and users can access. 

Authorization is used for:

1. Granting access and exposure to particular resources or data for different users.
2. Governing what actions different users and clients can take with our API.
3. Otherwise enforce defined access control policies.

From the perspective of someone *accessing* an API, we’re not too worried about *how* vendors implement authorization after authentication. But, it’s worth being aware that they *might* use our authentication data in order to determine what resources and actions we can access.

## How do I know what authentication method to use?

We can actually attack this question from two slightly different angles. On the one hand, there’s how each particular API is built. On the other hand, there’s the kind of solution that we’re trying to build.

Let’s think about the first point first, because it’s a relatively straightforward one. Individual vendors are going to require you to use different authentication methods. 

Some might give you the flexibility to choose from multiple methods, while others will be more opinionated, and insist on using a specific method. Ultimately, there’s not a lot we can do here.

If a vendor only offers access through a particular authentication method, then we’ll need to play ball if we want to use their API.

The other side of the equation requires us to think about the actual *solution* we’re trying to create with whatever API we’re accessing.

In the most generic sense, this comes down to two different decisions. The first is whether we want our API client to authenticate *statically* or *dynamically*.

The difference is as follows:

- **Static authentication** means that the same authentication data is used, whoever is using our solution.
- **Dynamic authentication** means that our solution will store and leverage *different* authentication information, depending on who the end user is - or even using some other contextual conditions.

The other thing we want to think about is whether we need to authenticate *globally* or on a *per-request* basis from our API client.

In other words, choosing between:

- All requests from our client using the same authentication credentials.
- Using different credentials for individual API requests.

There’s no better or worse here - you just need to be aware of these distinctions in order to make an informed choice about how you configure your API connections.

## 4 methods for REST API authentication

With that bit of theory out of the way, let’s dive into the four most common REST API authentication methods.

Just a quick note on our examples here. We’re sending a GET request that sends and instruction to an API to retrieve data bout our users. To do this, we’ve created a Budibase app, with REST API selected as its data source.

Take a look at our guide to [API integration](https://budibase.com/blog/app-building/what-is-api-integration/).

We’re going to look at what each authentication method looks like within Budibase, but the basic principles are the same whichever API client you’re using. 

We’ll also check out what they would look like in a hard-coded solution for the sake of completion.

### 1. API keys as headers

First, we have API authentication via HTTP *headers*. The headers section of an API request is a series of *key/value pairs* that are used to provide extra information for the server about whatever we’re trying to do.

The *key* is the name of the attribute we’re providing and the *value* is the specific piece of data that corresponds to this.

Authentication is actually one of the most common use cases for headers. Most of the time, this means using a *key* called **x-api-key** and giving it a value of whatever our unique API key is.

Naming conventions can vary here, so make sure you’re using whatever attribute the vendor specifies in their documentation.

So, if our API key was *super-secret-key*, for example, our hard-coded headers might look like this:

{{< highlight javascript "linenos=inline" >}}

{

“x-api-key”: “super-secret-key”

}

{{< /highlight >}}

But, we aren’t necessarily going to want to hard code solutions, so let’s look at how we can use API headers for authentication in Budibase.

We’ve actually got two options for adding headers to queries. First, we can create a new query, and add key/value pairs under the *headers* tab, like so:

![REST API authentication](https://res.cloudinary.com/daog6scxm/image/upload/v1755867324/cms/rest-api-authentication/API_Authentication_1_pukxta.webp "REST API authentication")

This allows us to stipulate authentication credentials on *query-by-query* basis.

Alternatively, we can also add *global headers*. To do this, head to the configuration options for your REST data source, and hit the headers tab again:

![Auth headers](https://res.cloudinary.com/daog6scxm/image/upload/v1755867323/cms/rest-api-authentication/API_Authentication_2_nkmg6i.webp "Auth headers")

With both options, if we simply enter our *API* key in the text box provided, it will be applied statically. We can also use the lightening bolt icon to open Budibase’s *binding menu* to create *dynamic* values.

For example, if we wanted to use environment variables, user accounts, or even form inputs as our API headers. Here’s what this would look like with a secure environment variable:

![Dynamic auth](https://res.cloudinary.com/daog6scxm/image/upload/v1755867323/cms/rest-api-authentication/API_Authentication_3_svofwp.webp "Dynamic auth")

Check out our in-depth guide to [API headers](https://budibase.com/blog/inside-it/api-headers/) for more information on what these can be used for.

### 2. API keys as query parameters

Alternatively, some vendors will ask us to provide authentication details as *API parameters*. Rather than within the headers sections, these are keys and values that are provided in our request URL or body.

If we were using a URL parameter, our GET Users request would look something like this:

{{< highlight javascript "linenos=inline" >}}

{

https://example-api-url.com/v1/users**?apiKey=super-secret-key**

}

{{< /highlight >}}

In other words, to add a URL parameter to a query we append the provided endpoint with:

{{< highlight javascript "linenos=inline" >}}

{

?attributeName=value

}

{{< /highlight >}}

Again, we’ve got a couple of different options for how we want to do this in Budibase.

We could add this manually to our request URL or under the *parameters* tab for any given query. 

However, it's more management if we add this under the `Params` tab. Any parameters we specify here will automatically be added to our request when it's sent.

![REST API Authentication](https://res.cloudinary.com/daog6scxm/image/upload/v1755867322/cms/rest-api-authentication/API_Authentication_4_nhvbyq.webp "REST API authentication")

We also have the option of creating *bindable values* with a *default value* - and assigning these as parameters. 

For example, we could create a binding called *apiKey* with a default value of *super-secret-key*, but use front-end logic to assign different contextual values to this - giving us more flexibility over our queries.

Here’s what this would look like in-situ. First, creating our binding:

![URL parameters](https://res.cloudinary.com/daog6scxm/image/upload/v1755867321/cms/rest-api-authentication/API_Authentication_5_tmcadq.webp "REST API auth parameters")

Then, using this to populate a value for our param:

![REST API Authentication](https://res.cloudinary.com/daog6scxm/image/upload/v1755867320/cms/rest-api-authentication/API_Authentication_6_a1zjue.webp "REST API Authentication")

You might also like our guide titled [What are the Components of an API?](https://budibase.com/blog/inside-it/what-are-the-components-of-an-api/)

### 3. Basic auth

Some vendors might want us to use what’s known as *basic authentication*. This means that instead of having a unique API key, clients and users must provide their a username and password.

To configure this, first head to the *Authentication* tab under your REST data source’s global settings and hit *add authentication*:

![Basic auth](https://res.cloudinary.com/daog6scxm/image/upload/v1755867320/cms/rest-api-authentication/API_Authentication_7_r1psbl.webp "Basic auth")

Then, we’ll see a modal where we can select *basic auth*, and give our method a name. We can also enter our credentials here:

![Auth credentials](https://res.cloudinary.com/daog6scxm/image/upload/v1755867320/cms/rest-api-authentication/API_Authentication_8_jv1xep.webp "Auth credentials")

Once we’ve saved this, we can access it in individual queries in the *Auth* menu:

![Select basic auth](https://res.cloudinary.com/daog6scxm/image/upload/v1755867320/cms/rest-api-authentication/API_Authentication_9_dcj0sk.webp "select basic auth")

### 4. Bearer tokens

Under the global authentication tab, we can also provide a bearer token, if this is what the vendor requires - for instance, if they perform authentication via OAuth tokens.

![Auth token](https://res.cloudinary.com/daog6scxm/image/upload/v1755867319/cms/rest-api-authentication/API_Authentication_10_pqqyzz.webp "Auth token")

We have the option of simply adding our access token in manually as a string. Or, if we’re using the same SSO system as the API we’re trying to access, we can use the following binding to provide this dynamically, based on the current users:

{{< highlight javascript "linenos=inline" >}}

{{ Current User.OAuthToken }}

{{< /highlight >}}

And we can use this in queries in exactly the same way as we did a second ago with basic auth.

That’s it! Those are the four most common REST API authentication methods, along with how you can leverage them to connect to data sources in Budibase.

{{< cta >}}

## Other security practices for API authentication

Authentication and authorization are crucial aspects of your security strategy. However, they’re only going to get you so far in the real world. 

Say for example some nefarious actor gets a hold of your API authentication credentials.

You’d potentially be facing a very big problem, wouldn’t you?

Here are some of the other strategies we can use to safeguard our security when using APIs.

### Access control

Access control is all about how we determine which users can do what with particular resources. It’s important to use an access control policy within our client applications that reflects and compliments the API resources we’re leveraging.

For example, granting permissions based on different data sources, queries, automation rules, or front-end elements.

Take a look at our guide to [role-based access control](https://budibase.com/blog/app-building/role-based-access-control/) to learn more.

### Secure authentication protocols

Secure authentication protocols such as OpenID, OAuth, and other proprietary SSO tools are an effective way to authenticate different users, applications, and other API clients. 

These help to provide an additional layer of security, while also giving IT administrators more control over who can access tools - and how.

### Enforcing strong passwords

Where possible, it’s vital to enforce strong passwords when dealing with user-generated authentication credentials. Of course, we’re constrained here in terms of what is provided for by vendors.

Strong passwords are those that mix different character types, in long or even arbitrary strings.

The best passwords are typically those that have been automatically generated by dedicated tools, within API clients, or other similar platforms.

### Leveraging encryption

Encryption is used to keep database credentials, REST API authentication details, or other sensitive data secure. 

This helps us to eliminate several risk vectors, including hacks, data breaches, or malicious access to our business-critical data.

For example, Budibase offers configurable encryption for in-application environment variables.

### Access monitoring

Finally, monitoring who is accessing our technical resources, alongside how and when, is critical for maintaining the security of all kinds of solutions - including those that rely on external API requests.

Regular auditing of our automation logs and user behavior ensures that we can identify new threats, unauthorized data access, or other critical security risks before they escalate and result in more serious outcomes.

## Turn data into action with Budibase

Budibase is the fast, easy way to create custom solutions on top of just about any data source. Our open-source, low-code platform offers dedicated connectors for REST APIs, RDBMSs, NoSQL tools, Google Sheets, and more - alongside our built-in database.

We're on a mission to empower teams to build professional internal tools in a fraction of the time, with optional self-hosting, autogenerated UIs, free SSO, intuitive automations, extensive integrations, optional front-end code, and much, much more.

Check out our [features overview](https://budibase.com/product) to learn more.