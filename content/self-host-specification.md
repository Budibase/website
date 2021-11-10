---
title: "Self-hosted Product Specification"
description: "Product Specification for Budibase self-host / on-premise"
layout: single
type: legal
date: 2021-10-22
---

## Overview

Budibase is an open source low-code platform, and the easiest way to build business apps that empower teams and improve productivity.

It allows users to build applications with a visual builder and deploy them for use by members of their organisation. Budibase can be used in our cloud offering or completely self hosted with our docker and kubernetes offerings.


## Main Product Functionality

The budibase product provides several core features.


### Budibase Portal

The budibase portal allows users to manage information about their organisation, invite and manage user roles, and view their entire list of budibase applications.


### Data Management

Budibase allows you to query data from external data sources, currently Postgres, MySQL, MongoDB, DynamoDB, Elasticsearch, CouchDB, Microsoft SQL Server, Amazon S3, Airtable, ArangoDB and REST/HTTP APIs. The data management section allows users to perform read and write operations against all of the above datasources once you have configured your database credentials within the builder. Some data sources such as Postgres and MySQL are able to automatically determine the schema of a database by performing a read operation against the schema tables, which will automatically configure the relevant read and write operations to those databases for the user. Users can also manipulate their SQL schema from within the budibase builder for these datasources. 


Budibase also provides its own internal database that is built on top of Apache's CouchDB. Users can define their own schemas and the representation of those schemas are stored in CouchDB along with the data. Self-hosted users have full access to all of the data inside their CouchDB instance at any time by using the fauxton interface.


### UI Designer

The UI designer functionality in budibase provides a way for users to construct their UI visually for their applications. Representations of an application are built in the builder and stored in CouchDB, which is then read by a client library running in the users browser that constructs the application when the user visits it inside their builder or once deployed. 

The UI designer provides configuration options for every component, and these are updated in the database as applications are built. Changes are reflected in the builder preview and the live dev preview. 


### Automations Functionality

Budibase automations are an automation platform that allow users to perform actions in response to application events, such as data creation, schedules, or HTTP webhooks. They provide a way to perform actions that are not a direct result of a user action in the UI, but happen in the background of the application itself. This part of budibase relies on a redis instance as part of users infrastructure.


### Login, SSO and Roles

Budibase provides its own login functionality built on top of CouchDB, but also provides support for Google Auth, and OIDC based login functionality. Budibase allows users to configure their credentials for these external providers, and will create the relevant budibase user data in CouchDB on sign up and sign in operations. Passwords are encrypted and any session and cookie based authentication operations are encrypted also.

Budibase provides a Role Based Access Control (RBAC) system. This allows users to control which applications users have access to, as well as which queries and data tables they can access. Budibase also provides the ability to show different screens for different user roles, providing a different app experience for users with different roles.


### Deployment

Budibase allows users to deploy their applications for use by others. This process is one that works by way of replication - copying all of the data from your development apps and placing it in a separate database, maintaining total data separation from the development app. Upon builder load, the production data is synced back to the development app to ensure data consistency.


## Data Storage and Analytics

Budibase stores all of its data in the docker-compose offering in docker volumes on disk, to ensure data is not lost between container restarts. For the kubernetes offering, data storage is provisioned with persistent volume claims, and users and have budibase store data in a whole host of different data storage mechanisms on protocols such as NFS, based on their cloud provider or hardware requirements.


## Updates

Self hosted users can pull the latest docker images directly from dockerhub, which is a public repository housing the open source docker images for the budibase platform. Updates can be performed through the UI, or manually with docker-compose commands.

When running on kubernetes, image tags can be updated through helm and redeployed to update budibase to the latest version.
