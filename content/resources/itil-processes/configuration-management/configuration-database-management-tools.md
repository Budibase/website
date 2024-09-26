---
date: 2024-08-30
title: What is a Configuration Management Database (CMDB)?
description: Check out our in-depth guide to implementing and managing configuration management databases.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Configuration Data Management
    parent: configurationManagement
    post: configuration-database-management-tools
    identifier: configurationDataManagement


---

Service configuration management is perhaps the most central ITIL practice, with a focus on how we handle the data that underpins our service portfolio.

Specifically, this deals with how we gather, store, and manage data relating to any elements that contribute to our service delivery. 

These elements are referred to as configuration items (CIs).

Therefore, the systems that we rely on to handle our CI data are critical within our wider ITSM provision.

In this resource, we’re exploring configuration management databases and CI data management more generally.

We’ll cover the basics of how CMDBs work, where they’re used, and what they achieve, along with some of the key challenges, decision-points, and other considerations we’re likely to encounter when putting a solution into place.

## What is a CMDB?

As we hinted at already, a configuration management database is a platform that’s used to store information about the CIs that underpin our services. 

More specifically, this is a standardized, centralized record of all of the relevant information relating to our hardware and software assets, as well as other aspects of our service delivery, like people, processes, facilities, contracts, or other components.

At a very basic level, we’ll store key details relating to each of these CIs, such as its location, status, type, usage, financial value, purchase date, or other basic attributes.

{{< vimeo id="1001639719" title="Configuration Management Database" >}}

However, the relationships between our CIs are just as important.

That is, a key part of the role of a CMDB is to provide a functional overview of how our services work. To achieve this, we need to understand how the various elements that underpin our services interact with one another.

For example, some CIs might be dependent on others. Our configuration management practice seeks to document and control changes to our IT estate, so if updates to one CI impact another, it’s important to understand how this works.

This has more practical implications, too. For instance, where an outage occurs in one CI, having a clear record of all of the other CIs that could be affected by this is critical for IT teams to assess and respond to the situation.

We’ll think about use cases in more detail in a moment.

For now, the important thing to recognize is that the goal of our configuration management practice is to provide a reliable, up-to-date record of our services and the elements that contribute to them, which can then be used to examine this data from a desired perspective.

### When is configuration data used?

What this perspective might be depends on the specific instance in which our configuration data is being used.

As we already mentioned, CI data can be useful during just about any part of normal service delivery, including by different kinds of users, such as on-the-ground colleagues, delivery teams, or IT leaders.

For example, our CMDB can act as a single source of truth across our entire service portfolio, including asset management, information security management, service level management, financial management, and more.

However, as you might expect, this is particularly important in the context of our service configuration practice and closely related processes, such as change control.

Some of the most common regular tasks that directly relate to our CI data include:

- Creating and managing service documentation.
- Identifying and actioning improvement opportunities.
- Conducting problem management and root cause analysis.
- Identifying and managing vulnerabilities.
- Investigating workflows.
- Reducing downtime.
- Auditing and other regulatory and compliance tasks.
- Tracking CIs.
- Capturing real-time data on service performance.
- Capacity planning, forecasting, and financial analysis.
- Day-to-day administrative tasks.

Importantly, the CMDB intersects with just about every other element of our IT estate. For example, it will often handle some of the same data as our asset management, network administration, and security management solutions.

Therefore, we must consider our configuration data management in the wider context of these associated processes. For instance, identifying where our asset management practice provides inputs for our CI data and vice-versa.

In these cases, we’ll need to ensure consistency across shared data entities and avoid creating issues such as excessive redundancy or duplication. As we’ll see a little later, there are a few distinct approaches to balancing this.

Check out our resource on designing [configuration management processes](https://budibase.com/resources/itil-processes/configuration-management/configuration-management-process/).

## Why do we need a configuration management database?

Before we look at some more granular processes and technical considerations relating to configuration data management, it’s helpful to zoom out and think about some of the more high-level factors that can determine whether or not a centralized CDMB is our best option.

To begin with, let’s consider some of the respective advantages and challenges of establishing and maintaining our CMDB.

### Advantages

At the most fundamental level, the purpose of a configuration management database is to provide us with a unified view of our CI data. This can then be accessed and utilized in more specific contexts, as and when it’s needed.

In more specific terms, this offers a number of more concrete advantages, including:

- **Centralization and control** - centralization enables us to bring CIs under the control and governance of our IT teams.
- **Visibility and oversight** - providing a more detailed, accurate account of how and where CIs are deployed across the organization, along with how these provide value.
- **Efficiency** - providing a single source of truth for configuration data can drive efficiency savings across all associated workflows.
- **Data-driven decision-making** - empowering IT leaders with clear, authoritative insights for process improvement, capacity planning, financial management, and more.
- **Combatting shadow IT** - eliminating the scope for service users to rely on IT resources that fall outside of our governance and control.
- **Desiloing data** - establishing integration solutions across related ITSM processes to enable us to better manage our IT environment.
- **Security, compliance, and process adherence** - facilitating a range of auditing, monitoring, and regulatory tasks by providing us with clear, accurate records of how and where our CIs are used.

Of course, none of these effects are inevitable or can be taken for granted.

Indeed, as much as our data storage solutions play an important role in the success of our configuration management efforts, we’re equally dependent on the quality of the data itself, along with the workflows we put in place to manage this.

We’ll return to this a little later.

### Challenges

First, though, we must also be aware of some of the most common issues that we could encounter relating to configuration data management, along with the decisions we may need to make to reflect these or even the situations where we might want to consider alternative solutions.

One core issue here is that the effort and resources required to manage our CI data must be proportionate to the value that it provides. Therefore, there could be a range of operational, technical, or other factors that present barriers here.

In particular, the common challenges we may encounter when considering a CMDB include:

- **Initial costs** - auditing our IT estate to initially establish a CMDB is a costly, laborious process.
- **Over-centralization** - excessive centralization might impede functional teams from carrying out basic data management actions without really providing any additional benefit.
- **Risk** - handling all CI data in a single location may introduce additional risks that must be mitigated.
- **Maintaining validity** - as our CMDB must be kept up to date with a wide variety of data sources, ensuring the ongoing accuracy and validity of stored data can be incredibly challenging.
- **Inefficiencies** - in many cases, it is more efficient to handle configuration data management tasks closer to functional teams responsible for individual CIs rather than as a dedicated function, in which case centralization may not be appropriate.

Some of these will require us to put additional mitigations in place, which will naturally have an impact on the overall ROI of our CMDB. In certain cases, these will tip the balance in favor of alternative approaches to configuration data management.

### Other configuration data management solutions

Next, we can think about what these alternative solutions are, along with some of the situations we might most commonly rely on them.

The first is taking a federated approach to our configuration management database. This involves creating a centralized repository of our configuration data that draws from multiple sources that are kept in situ.

So, we may rely on automation tools and data pipelines to unify CI data from sources such as our asset management database, change control tools, data catalogs, or other relevant platforms and load this into a central CMDB.

A federated CMDB enables us to centralize information without encountering many of the costs and manual discovery processes of creating a standalone store. We can, therefore, achieve a single source of truth for CI information but retain data ownership within functional teams.

Alternatively, in cases where we do not require a highly centralized configuration management function, we may rely primarily on existing platforms for most day-to-day data management tasks.

This approach means implementing configuration management principles into our process design for more functional practices and enabling the relevant teams to oversee this.

We may then collate and aggregate relevant data on a more case-by-case basis, such as within performance or capacity management dashboards, without wholesale centralization of the underlying data.

However, this is an approach that is generally more suited to smaller organizations with less complex ITSM offerings.

## Managing a CMDB in ITIL

In the remaining sections, we’ll consider some of the more practical elements of managing configuration data, including our options for structuring data schemas and handling end-user interactions.

However, first, it’s important to consider the specific principles that guide our decisions here within ITIL.

The overarching principle in ITIL is the need to balance ITSM workloads with the organizational value that they provide. This is particularly apparent in the context of configuration management data with respect to the information that we choose to store and process.

One key practical implication of this is that the more information we store in our CMDB, the more costly and difficult this will be to maintain. Therefore, we must prioritize the data that will provide us with the most value within our service portfolio.

We might apply this logic at the level of the CIs we document or the specific attributes that we store relating to these.

Other important principles within ITIL include the need to work holistically, starting with the current state of our IT operations.

One potential implication of this is that large-scale audits may not always be the most cost-effective method for gathering and documenting CI data.

Instead, a best practice that ITIL highlights is conducting data gathering through normal service interactions wherever possible. 

That is, discovering and identifying CIs as and when they interact with existing workflows can be a more cost-effective way to achieve results similar to those of more costly audits.

For certain kinds of CIs, especially hardware and software assets, we might rely, at least in part, on automated discovery tools in order to assist with this process.

## Configuration management database models

One of the major priorities within our configuration data management efforts is to define and reflect the relationships between the various CIs that contribute to our services within our CMDB.

An issue that’s closely related to this is the underlying structure of our database schema, in particular, in its conceptual model.

We have a few distinct options for constructing this within our CMDB.

Here are the two key models we might opt for.

### Relational models

Relational data models are the most common option for structuring CMDBs. These are based on representing our data as related tabular entities within an RDBMS. Each table could related to multiple others. It might even have multiple relationships to a single other table.

Tables relate to a single type of CI that share the same attributes. Relationships are established using primary and foreign keys, which reference the unique identifiers of individual rows within our tables.

The nature of the relationship is primarily reflected in the name of the relevant foreign key. For example, we might link our hardware assets to our employees table and call the foreign key deployed_to, denoting which employee currently has a device.

This provides a highly scalable, flexible model for representing the relationships between CIs and services.

Relational structures are declarative. In terms of querying, users simply state which information they require and allow the database system to handle the underlying structures and retrieval processes.

For example, enabling IT leaders to quickly determine all of the end-user devices affected by an outage with a particular piece of network infrastructure with a single query.

### Semantic models

Alternatively, some CMDBs rely on what are known as semantic models to handle relationships between our CIs and services, generally within a graph database.

This relies on what’s known as the resource description framework, an approach to data modeling that relies on more complex metadata to adequately represent the relationships between entities.

In addition to linking the two related entities, semantic models contain what’s known as a predicate to describe the relationship. So, we might stipulate that one CI has a particular kind of dependency on another.

This is particularly helpful in very large or complex data sets, particularly where these are heavily focused on AI or machine learning use cases. However, it can also introduce additional difficulties for day-to-day data management.

## Managing user interactions

Lastly, we can think in more practical terms about how we can expect end users to interact with our CMDB. 

In other words, what are the most common configuration data management actions?

Recall that the core task of our configuration management practice is to provide up-to-date, accessible information about our service portfolio as and when it is required. The majority of this should be handled during normal service operations.

However, there are, nonetheless, situations where we’ll need to interact more directly with our CI data.

One of the key aspects of this is reporting. That is, as part of our configuration management efforts, we’ll need to expose insights relating to the performance and utilization of our CIs, either on a regular or a one-off basis.

So, we’ll need dashboards on the one hand for regularized reporting, but we’ll also need to empower relevant teams with suitable permissions and experiences for querying our CI data on a more case-by-case basis.

Similarly, we’ll encounter situations where we need to carry out manual admin tasks relating to our CI data outside of normal service delivery. Some of these might be relatively regularized and consistent, while others could relate to more fringe cases.

For example, we’ll need to provide experiences for users to create entirely new CIs, or update their details across their lifecycle.

Check out our guide to [configuration management tools](https://budibase.com/resources/itil-processes/configuration-management/configuration-management-tools/) to learn about this in more detail.