+++
author = "Joe Johnston"
date = 2022-03-14T00:00:00Z
description = "Budibase’s public API is now publicly available - making Budibase the hub for all your internal apps"
draft = true
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1647258318/cms/Start_building_with_Budibase_s_API_bum2mr.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1647258452/cms/20200113_Propel_Team_Shots_123_omblqt.jpg"
title = "Budibase’s public API is now available"

+++
![](https://res.cloudinary.com/daog6scxm/image/upload/v1647258572/cms/Start_building_with_Budibase_s_API_jdmdtt.png)

Today, we are launching one of our most requested features - our new public API!

When you sign up for Budibase, you get a low-code platform with an internal database, external data connectors (MySQL, PostgreSQL, MSSQL, Oracle DB, Airtable, MongoDB…), user management, free SSO, drag and drop GUI for building UIs, powerful prebuilt components, free SSO, an automation interface (like Zapier) and now a flexible public API to interact with.

These services integrate very well with each other making the experience of building CRUD apps easier, faster, and a lot more flexible.

As with anything that we build in Budibase, our new public API is simple to use, flexible, and introduces new extensibility. To summarize, the Budibase API enables:

1. Budibase as a backend  
   The Budibase backend is very powerful, and our Public API allows you to specifically use the backend API to build apps, without using, for example, our design GUI. A common use case would be to pair the Budibase backend with Grafana to build powerful dashboards. The number of potential use cases are vast.
2. Extending apps  
   Right now users are limited to what you can do within Budibase. This can make it difficult to extend functionality in a lot of places, especially around data. The new Budibase API allows users to build to a point within Budibase and then extend using the API. This is only the beginning, as Budibase continues to grow we will improve and expand the capabilities of our API.
3. Inter-operability  
   Again right now for inter-op within an organization, you're limited to what Budibase can connect to. Opening up the API allows connecting data in and out of Budibase in ways that are business-specific use cases (e.g. IoT, internal business APIs, etc).

## Design

This post outlines our design decisions while building the Budibase API, and we'll show you how to use it in your own applications.

The API follows RESTful patterns of design and is fully defined using the OpenAPI specification. For schemas and API definitions this enables the spec to be pulled into tools like Postman and you can start making requests straight away once you've inputted your API key and App ID.

The first version of the API covers the tables, rows, users, queries, and applications resources. You have full CRUD operations on those resources as well as the ability to search any of them. This also respects the RBAC system fully. Every user can generate an API key for Budibase and it will only allow users with access to resources to utilize the API.

## Use case

To help you adopt the Budibase API, we’ve created the following example:

1. [Build an app with Budibase and Next.js](https://budibase.com/blog/building-a-crud-app-with-budibase-and-next.js/)

## Docs

You can learn more about the Budibase API at the following places:

1. [General documentation](https://docs.budibase.com/docs/public-api): You’ll learn how to get your API key, how to use spec, and how to use with Postman
2. [Interactive API documentation](https://docs.budibase.com/reference/post_applications): Interact with the API