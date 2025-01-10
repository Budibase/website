+++
author = "Ronan McQuillan"
date = 2024-05-29
description = "Check out our round-up of the top open-source data governance tools."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Top 5 Open-Source Data Governance Tools"
[[mentions]]
name = "Data Governance"
sameAs = "https://www.wikidata.org/wiki/Q872685"
type = "Thing"
[[softwareApplications]]
name = "Apache Atlas"
applicationCategory = "businessApplication"
operatingSystem = "Windows, Mac"
url = "https://atlas.apache.org/#/"
[[softwareApplications]]
name = "TrueDat"
applicationCategory = "businessApplication"
operatingSystem = "Web"
url = "https://www.truedat.io"
[[softwareApplications]]
name = "Amundsen"
applicationCategory = "businessApplication"
operatingSystem = "Web"
url = "https://www.amundsen.io"
[[softwareApplications]]
name = "Magda"
applicationCategory = "businessApplication"
operatingSystem = "Web"
url = "https://magda.io"
[[softwareApplications]]
name = "Egeria"
applicationCategory = "businessApplication"
operatingSystem = "Cloud"
url = "https://egeria-project.org"
+++

As a modern business, your data is your most valuable asset. Data underpins all of our internal processes and informs critical decision-making. However, it can also be a massive risk factor, especially if we don’t know what information we’re storing and how it’s being used.

This means that lifecycle management for our data assets is a top priority. This is where governance comes into play.

Today, we’re examining the market for open-source data governance tools. Specifically, we’ll be checking out a range of tools aimed at distinct use cases and target personas. Along the way, we’ll highlight some of the key situations where each might be suitable for you.

Then, we’ll wrap up by seeing how Budibase empowers teams to turn data into action.

By the end, you’ll be fully equipped to make an informed decision about the right solution for your specific data governance requirements. This includes:
- [What is data governance?](#what-is-data-governance)
- [What do data governance tools do?](#what-do-data-governance-tools-do)
- [Types of data governance tools](#types-of-data-governance-tools)
- [Why opt for an open-source-tool?](#why-opt-for-an-open-source-tool)
- [5 open-source-data-governance-tools](#5-open-source-data-governance-tools)

First, though, let’s start with the basics.

## What is data governance?

Data governance means managing the availability, integrity, usability, and security of our data assets. In the first instance, this is based on defined internal policies for how and when our data can be used.

The goal is to ensure our data is consistent, trustworthy, and usable in the right situations while also preventing it from being misused.

This leads to several concrete benefits, including reduced data management costs, enhanced decision-making, increased efficiency, and streamlined compliance efforts.

In terms of specific actions, data governance can be quite varied. The core aspects of a successful data governance strategy include cataloging internal data assets, documenting their intended usage, and applying appropriate rules to support this.

On top of this, we’ll need to consider lifecycle management tasks, including defining data flows, implementing risk management policies, leveraging automations, managing storage, monitoring usage, and eventually handling deletion and end-of-life processes.

### What do data governance tools do?

As the name suggests, data governance tools help to support our data governance efforts. However, individual platforms can vary quite a bit in terms of capabilities - since no two businesses are alike in terms of the data they need to store and manage.

We can still point to some core functionality that we’ll expect across most tools though.

Almost all data governance tools offer cataloging features. At a basic level, this means documenting individual data assets, including their contents and permitted usage. We’ll also typically see searchability features and associated metadata management to support this.

On top of this, most platforms offer tools to help us administer permissions and access. For instance, implementing role-based access control or defining approval workflows for handling requests to access various pieces of data.

Many tools provide more advanced capabilities around analyzing, mapping, and automating internal flows. This can range from process discovery tools to fully automated ETL functionality and master data management.

Depending on our needs, we’ll likely also want to look out for features round managing data quality and security. For example, monitoring usage, data lineage, and consistency against defined frameworks.

### Types of data governance tools

In addition to the core functionality we’ve just seen, we need to be aware of how different platforms target distinct use cases and customer personas.

There are a few different angles that we can approach this from.

One is that certain platforms offer a much tighter set of features than others, perhaps only targeting one specific cluster of capabilities that we saw a second ago. For instance, stand-alone data cataloging or ETL platforms.

By contrast, others seek to provide more of a full-stack solution for governing data usage.

Although data governance is a more common pain point in large enterprises, we might also see platforms that are optimized for different sizes of organizations. 

So, some tools prioritize security features for larger teams, while others are more focused on offering accessible capabilities to smaller organizations that might lack extensive internal IT resources.

Lastly, some tools are offered as commercial off-the-shelf solutions, while others are provided under open-source licenses.

That leads us to…

## Why opt for an open-source tool?

Many businesses, especially enterprises and other large organizations, prioritize open-source technologies. 

There can be a few different reasons for this, but in the case of data governance, the most important is the power to audit and review the source code of platforms that will interact with our mission-critical data assets and internal processes.

Besides this, open-source platforms also offer other benefits over their COTS equivalents. Notably, they can often be a more cost-effective option, with reduced licensing costs incurred, depending on the pricing models of individual vendors.

Alternatively, some teams might opt for open-source tools for higher levels of control over the solutions they use internally. 

For instance, if there’s a need to modify the source code or take maintenance tasks in-house in the event that a vendor folds. However, it’s important to note that this is subject to individual platforms permitting this through their particular licensing terms.

You might also like our round-up of the top [open-source digital asset management](https://budibase.com/blog/inside-it/open-source-digital-asset-management/) tools.

## 5 open-source data governance tools

Now that we have a strong grasp on what open-source data governance tools do, it’s time to drill into some of our specific options within this space.

As we said earlier, our goal is to present a variety of options to suit different requirements and target use cases. Along the way, we’ll flag the relative strengths, weaknesses, and other key considerations for using each one.

Our top picks are:
1. [Apache Atlas](#1-apache-atlas)
2. [TrueDat](#2-truedat)
3. [Amundsen](#3-amundsen)
4. [Magda](#4-magda)
5. [Egeria](#5-egeria)

Let’s jump right in.

### 1. Apache Atlas

![Open-source data governance tools](https://res.cloudinary.com/daog6scxm/image/upload/v1716979613/cms/open-source-data-governance-tools/Apache_Atlas_lbvkyu.webp "Open-source data governance tools")

First up, we have Apache Atlas. This is an open-source framework that empowers data teams to collaborate on cataloging big data assets and managing metadata across their organization.

It offers a highly integrated solution for administering and managing complex, scalable enterprise data models.

#### Pros

Apache Atlas is a popular option for teams that need a highly scalable, customizable data governance solution. We can easily integrate with existing data sources using API requests, pub-sub models, and Kafka-based messaging.

Atlas also gives us the flexibility to define complex, custom data models, with huge flexibility around data classifications, metadata attributes, data lineage tracking, and more.

We’re particularly impressed by Atlas’s experiences around interacting with data assets. We can store and reuse commands with standard SQL syntax, as well as leveraging an intuitive native UI with complex search capabilities across entities’ types, classifications, metadata, or free text.

#### Cons

One common user complaint regarding Apache Atlas relates to initial set-up and configuration. Essentially, we’ll need a high level of expertise, including around Atlas’s proprietary data hierarchy in order to use it effectively.

Similarly, it’s worth restating that Apache Atlas is an open-source data governance framework rather than a ready-to-use solution. So, while it offers extensive flexibility and customization, you may want to consider an alternative if using an off-the-shelf solution is a priority.

Some users also complain that query responses can take a little longer than in other platforms, although this will naturally vary from use-case to use-case, depending on the scale and complexity of your data model.

#### Pricing

Atlas is offered on an open-source license by the Apache Foundation and maintained by an active community of contributors. 

In other words, it’s provided on a totally FOSS basis.

However, it’s worth noting that we might incur costs in other ways. For instance, if we opt to engage a development partner to roll out or maintain a custom configuration of Atlas.

### 2. TrueDat

![TrueDat](https://res.cloudinary.com/daog6scxm/image/upload/v1716979612/cms/open-source-data-governance-tools/TrueDat_aqsc7u.webp "TrueDat")

Next, we have TrueDat. This is a slightly different offering to Apache Atlas in the sense that, while the platform itself is open-source and uses a free license, it’s also offered by a commercial vendor.

So, they charge for other related services like hosting, consulting, and enterprise support.

#### Pros

TrueDat offers a relatively modern, streamlined interface for configuring data catalogs and EDMs, especially compared to some of the other platforms in this round-up. For instance, we can use entity templates to quickly manage attributes, metadata, permissions, and policies.

There’s also impressive functionality for automatic discovery and cataloging of connected data sources, lowering the barriers to entry and making this a more viable option for business users. We can even use our own LLMs to generate metadata within enterprise environments.

On top of this, TrueDat is particularly strong on reporting. It features a native integration with Metabase, giving users a huge degree of flexibility to extract and visualize insights around their data quality and usage.

#### Cons

Despite being offered on an open-source license, one clear issue with TrueDat is a lack of information. In particular, documentation is somewhat sparse, especially given that we’ll need to configure the tool to meet our specific processes.

While we can clone a public GitHub repo, information about deploying this to a production environment is also lacking.

Because of these issues, you may end up requiring TrueDat’s associated commercial services in order to launch it as a viable solution.

#### Pricing

TrueDat is offered with no usage-based licensing costs. However, in addition to consulting services, they do offer two paid plans.

TrueDat Lite is a self-managed system that’s available on the AWS marketplace for €0.7 per hour, with unlimited users and data volumes. However, this offers a limited number of connectors. Specifically, these are AWS Glue, PostgreSQL, Oracle, and MySQL.

To access the full range of external data connectors with a commercial license, we’ll need to opt for custom enterprise pricing. Therefore, TrueDat has the potential to be a relatively expensive solution compared to some of the alternatives we’ll see today.

### 3. Amundsen

![Amundsen](https://res.cloudinary.com/daog6scxm/image/upload/v1716979612/cms/open-source-data-governance-tools/Amundsen_ec85dq.webp "Amundsen")

Amundsen is a slightly different proposition again. Originally developed by Lyft, it’s an open-source data discovery and metadata engine that data scientists, analysts, and software engineers can leverage within custom projects.

The goal, therefore, is to empower development teams with data governance capabilities rather than offering a ready-to-deploy solution.

#### Pros

At the most basic level, Amundsen provides searchability across your internal data assets by indexing connected data sources and providing page-rank style search results based on usage patterns. This is framed as something akin to Google Search for data assets.

This is broken down into three related services - for building front-ends, executing searches, and managing metadata. Each of these supports entities, including database tables, machine learning tools, existing dashboards, and even people.

Amundsen also provides an impressive range of native integrations, including relational databases, NoSQL tools, data warehouses, and any other platform that provides a dbapi or sql_alchemy interface.

#### Cons

The obvious downside of using Amundsen for our data governance efforts is that it will require extensive development work to roll out a working solution. In fact, as a data search engine, it’s more of a developer tool than a standalone governance platform.

While we can build rudimentary React front-ends using Amundsen, we may need to connect to other tools or libraries in order to build more custom solutions. In fact, by the vendor’s own admission, the front-end library is somewhat stagnant and in need of updating.

Amundsen also lacks some important capabilities that are typically offered by other data governance solutions, including granular access control. This might rule it out as a viable solution for large teams.

#### Pricing

Amundsen is currently offered on a totally free and open-source basis. So, there are no direct licensing costs, which could make it an attractive offer for teams that have the required development resources.

However, we’ll need to balance this with other associated costs. These primarily come in the form of the development work needed to configure and maintain a solution built on Amundsen.

On top of this, SLAs and support packages aren’t currently available, so if these are a firm requirement, we’ll need to look elsewhere.

### 4. Magda

![Magda](https://res.cloudinary.com/daog6scxm/image/upload/v1716979613/cms/open-source-data-governance-tools/Magda_hal6gp.webp "Magda")

Magda is an open-source, federated data catalog platform for large organizations. The goal is to help organizations de-silo disparate data assets of all sizes by providing a single platform for documenting, tracking, enhancing, and leveraging assets from CSV files to massive databases.

As such, it’s a particularly strong offering for teams that struggle with a large number of comparatively small datasets.

#### Pros

One huge selling point of Magda is that it’s comparatively easy to get up and running. It offers one-click deployments to the cloud, on-prem infrastructure, or local machines using Kubernetes and Helm.

Native search capabilities are also particularly strong. In particular, Magda is able to return data assets based on synonyms, user behavior, geospatial data, and data quality.

The other primary benefit of Madga is the relative ease of connecting data sources. We can add a range of datasets using CSV files, inventory tools, RDBMSs, existing metadata APIs, and RESTful APIs.

#### Cons

However, compared to some of the other tools we’ve seen, Magda lacks some important features. For instance, whereas some tools offer much more advanced visualization capabilities, this is generally lacking in Magda.

While role-based access control is offered, some users report that it is less effective for creating more granular access policies.

Lastly, Magda generally aims to make it easy to work with a wide range of data sources, but experiences for handling unstructured or rapidly evolving data can present more difficulties, according to some users

#### Pricing

Magda doesn’t currently offer a paid version of their product. Under their open-source license, we’re free to use it on our own infrastructure.

As ever, there are many businesses that want to pay vendors of open–source solutions for things like priority support or SLAs. In the case of Madga, it’s unclear if this is possible.

However, one important point relating to costs is that Magda can be deployed and rolled out much more quickly and easily than many of the other platforms we’ve seen and will, as such, likely incur lower internal costs.

### 5. Egeria

![Egeria](https://res.cloudinary.com/daog6scxm/image/upload/v1716979612/cms/open-source-data-governance-tools/Egeria_e3xwgg.webp "Egeria")

Lastly, we have Egeria. This is an enterprise-focused FOSS tool that’s focused on large volumes of metadata across large organizations.

As such, it could be a strong pick for teams that need a highly automated, integrated solution for exchanging metadata between platforms.

#### Pros

Egeria’s core value-add is enabling teams to automate metadata capture, search, and management using a specialist server that syncs information across different connected platforms.

It also offers exceptionally high levels of connectivity and integrations, including APIs, metadata repositories, JDBC, file connectors, secret stores, and more. The goal is to enable teams that use different platforms internally to share information seamlessly.

Egeria also boasts extensive documentation and a dedicated community of contributors, although we’ll need a relatively large development effort to get it up and running across different tools in our organization.

#### Cons

Egeria is intended to primarily work alongside existing internal technology. One impact of this is that there are relatively limited capabilities around user interfaces. The main offering here is a general admin GUI, including a searchable catalog. However, this is a little bit limited.

If we want to create more advanced or use-case-specific UIs, we’ll need to build these ourselves.

Although Egeria offers a wide range of integrations, it places the emphasis here on open standards. So, we can connect to a huge number of existing tools, but we’ll need to configure this ourselves, whereas some alternatives offer native connectors for common platforms.

#### Pricing

Egeria is fully community-maintained, free, and open-source. We can use it to create solutions, with no limitations on usage or connected data sources.

However, there are contractors offering services related to deploying and using Egeria, including mentorship, custom development, and implementation.

Alternatively, Egeria is also used within IBM’s Watson Knowledge Catalog, which is available as a SaaS product.

## Turn data into action with Budibase

{{< vimeo id="930591556" title="Budibase Mini Demo" >}}

Budibase is the open-source low-code platform that empowers IT teams to turn data into action. Technical colleagues, including data professionals, systems architects, solutions engineers, and more, choose our platform to ship professional tools in a fraction of the time.

We make it a breeze to build fully functional workflow tools on top of just about any data.

Build seamless, low-code interfaces on top of relational databases, NoSQL tools, data warehouses, API requests, spreadsheets, or even your metadata catalogs and other data governance tools.

Use our autogenerated CRUD tools and forms to output data management solutions in a fraction of the time. Budibase also keeps your data secure with free SSO, role-based access control, optional self-hosting, environment variables, air-gapped deployments, and more.

To learn more about using Budibase to turn data into action, check out our [features overview](https://budibase.com/product/).