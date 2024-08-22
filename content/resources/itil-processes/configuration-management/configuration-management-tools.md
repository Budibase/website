---
date: 2024-08-22
title: Configuration Management Tools
description: Check out our guide on the most important configuration management tools and software capabilities.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software
    parent: configurationManagement
    post: configuration-management-tools
    identifier: configurationManagementSoftware

---

Service configuration management is the ITIL practice concerned with documenting and maintaining information across our IT estate. More specifically, this largely relates to how we manage data around elements that contribute to our service delivery.

This can include hardware, software, processes, policies, relationships, data, contractual agreements, interdependent services, or anything else we rely on in the course of normal service delivery. These are referred to as configuration items (CIs).

Accurate, reliable, and accessible information about our CIs is essential, both from the perspective of day-to-day service operations and for how we plan, improve, and oversee our ITSM efforts more generally.

Given that this is essentially a form of applied data management, the software systems and tools we rely on are central to the effectiveness of our configuration management practice.

In this resource, we detail the core capabilities that are required to implement configuration management software, as well as examining the key decision points and best practices we’ll need to roll out effective solutions.

{{< vimeo id="1001639719" title="Configuration Management Tools" >}}

## What is service configuration management software?

Service configuration management software can include any tools and platforms that are used to maintain data relating to CIs. In other words, we can think of this as the wider ecosystem of tools that contribute to our configuration management practice.

This includes solutions that are put in place for the express purpose of managing CI data, as well as other platforms across our IT estate that directly or indirectly impact upon this.

Within ITIL, the dominant framework for ITSM, service configuration management might be established as a dedicated function within the IT department. 

However, it’s equally valid to approach this as a shared function, either bundled together with other ITIL practices or shared across the on-the-ground teams responsible for specific services and CIs.

This is important to recognize as our operational needs in this regard will inform a huge range of decisions when assessing configuration management software solutions.

### Key capabilities

Before we consider the specific capabilities we’ll need to account for in more detail, it’s useful to consider how we can categorize these at a high level.

As we said earlier, the goals of service configuration management include gathering, storing, and maintaining data about our services and the CIs that underpin them. This can then be accessed and used across the organization as and when it is required.

We must, therefore, also control how this information is accessed, ensuring that it is available to the colleagues who need it in a secure fashion that’s appropriate to their needs.

With this in mind, we can divide the most common capabilities we should expect within configuration management into three clusters:

1. Gathering, storing, and managing service and CI data.
2. Enabling responsible colleagues to carry out configuration management workflows that are required to maintain this data.
3. Facilitating and controlling data access and exposure.

To some extent, our requirements within each of these will influence the decisions we make within the others. Similarly, we’ll likely be constrained by a range of technical, financial, and operational considerations within each.

We can consider each one in turn.

## Handling configuration management data

The core of our service configuration management practice is, naturally, how and where we store information regarding our ITSM provision.

As well as being a goal of configuration management in its own right, this also forms the basis of just about all other solutions we might adopt.

However, our decisions here must also be informed by our operational needs, along with the present state of our IT operations. 

For instance, one of the core ideas within ITIL configuration management is that the information we store regarding CIs and the workload required to handle this must be balanced with the organizational value it provides.

With this in mind, here are the two key approaches we might consider for handling configuration management data.

### Configuration management databases

First, we have dedicated configuration management databases (CMDBs). As the name suggests, this means relying on a singular, unified database for information relating to our entire service portfolio.

The goal is to provide a consistent, centralized platform for managing the information underpinning our services, maximizing control, oversight, and visibility across our configuration management practice.

As you might expect, leveraging a singular CMDB can be a highly effective option for organizations where configuration management is handled as a central function, with a single team responsible for all service information.

However, this approach can also present several challenges.

One issue that ITIL highlights is that establishing and maintaining a dedicated CMDB might not be the most cost-effective option. A large part of this is the fact that we’ll need to gather all of the information around relevant CIs, either through manual auditing or automated discovery.

This approach also separates our configuration data from our normal service operations.

So, as CIs are used and updated within day-to-day service delivery, we’ll need to build processes and systems to maintain consistency between our configuration management data and the real state of our services.

This can include both manual data management tasks and automation techniques, including systems integration and data pipelines.

Of course, these kinds of tasks will always form a key part of our configuration management practice. However, we can often perform them more efficiently when we are not bound by a dedicated CMDB.

As such, this may be the preferable option in cases where our need for centralization outweighs these day-to-day costs.

### Distributed solutions

The alternative to relying on a singular CMDB is instead opting for a more distributed approach to building a data layer for our configuration management systems.

Essentially, the idea here is to build our configuration management data around existing service operations rather than establishing an entirely separate store for this. 

This can often be a better solution for aligning the effort required to establish and manage configuration management data with the organizational value that it provides.

In particular, we can build key data management tasks into day-to-day service operations, including for the purpose of discovering, documenting, and maintaining information relating to key CIs.

Generally speaking, this is the preferable option for teams without a dedicated configuration management function, where service and CI data is instead managed by the relevant functional teams.

ITIL highlights that this is particularly beneficial when it comes to initially documenting our services, as we can typically achieve the same results through normal service interactions as we would via extensive audits at a lower cost.

Similarly, this approach can provide a helpful basis for determining which attributes are required relating to specific CIs. In building our discovery around functional interactions with services, we’re better positioned to focus on the data that actually provides organizational value.

However, distributed solutions introduce challenges of their own.

These largely relate to how we share data across functional teams within our configuration management practice. 

It’s common for multiple services to handle similar data relating to certain CIs. For example, across our asset management and network infrastructure teams. In these cases, we’ll need to consider appropriate solutions to avoid conflicts.

Similarly, even where on-the-ground teams are responsible for the majority of day-to-day configuration management tasks, we’ll generally still have some tasks that require a higher-level view of our service configurations.

For example, for capacity planning or financial management. 

Therefore, we’ll need to surface this information across the breadth of our service portfolio, including relying on data automations or federating our existing platforms into a CMDB for relevant central teams.

## Key capabilities for IT teams

Regardless of how we choose to handle data across our configuration management software systems, we’ll need to account for our IT team’s requirements around interacting with this and carrying out the required workflows to keep it accessible and up-to-date.

As we’ve seen already, the specific colleagues and teams responsible for this can vary across organizations. This will, of course, inform certain decisions across our systems design, especially with regard to how we govern access and permissions.

With this in mind, here are the core tasks that we’ll need to facilitate for managing configuration data.

{{< vimeo id="1001639694" title="Configuration Management Tools" >}}

### Basic data interactions and change control

The most basic configuration management software tools provide users with a streamlined, controlled experience for carrying out defined actions when interacting with CI data.

In the simplest form, this might provide CRUD functionality for data relating to a particular service. So, users tasked with maintaining relevant information may need to locate, add, update, or delete particular data objects in their day-to-day work.

A CRUD tool essentially provides a user-friendly experience for doing this without the need to manually query the relevant data source. 

This could apply to a database or constituent table as a whole, but we might also apply more complex permissions within a CRUD tool. This could mean providing more granular permissions to certain colleagues so that they can only update a subset of attributes.

The key here is handling permissions and data exposure securely in a way that reflects the roles and responsibilities of different users within defined workflows.

The other basic form of data management within our configuration management systems relates to how we govern alterations to our data. In ITIL, this is handled in the interrelated change control practice, which deals with updates or additions to our CI records.

For example, some service actions will require changes to our CI data that need additional authorization and approval. 

We must account for this within our configuration management software, including providing approval applications and workflows, to enable responsible colleagues to assess and respond to requests to update or add new CI information.

### Service-specific solutions

Beyond basic data management interactions, many configuration management tasks are handled within tools and platforms that are specific to certain services or other verticals within our IT estate.

While these might not explicitly be configuration management tools, they nonetheless play an important part in our practice and must, therefore, be considered in the wider context of our systems design.

Typically, these are used to action more service-specific workflows using our CI records.

One of the most common examples is IT asset management, the ITIL practice that deals with how we process and leverage financially valuable resources and tools across their lifecycle within our IT estate.

As there’s a high degree of overlap here between these practices in terms of the information required, our task is to align the underlying processes and workflows in order to ensure CI data is kept up-to-date and reliable.

Other key ITIL practices that rely heavily on dedicated tools that will impact our configuration management efforts fall under the technical management category. 

These include deployment management, infrastructure and platform management, and software development and management.

Each of these will rely heavily on dedicated tools for handling complex workflows relating to CI data, including version control, authorization, quality assurance, and other technical tasks.

### Dashboards and reporting capabilities

Lastly, a crucial element of our configuration management systems is reporting on how they’re used and the value that we derive from them across the organization.

This applies both at the levels of individual services and across our wider IT portfolio.

We can place the specific metrics we’re likely to need within this into three broad categories.

1. Usage-based metrics, including deployment and utilization rates, as well as more CI-specific KPIs.
2. Value-based metrics, including the extent to which our CIs and service provide the internal value we expect.
3. Cost-based metrics, including the financial, risk management, and other implications of CIs across our IT estate.

Each of these can provide an important strategic steer, informing a range of planning, capacity management, process improvement, and resource allocation decisions.

Dashboards aim to provide these insights while eliminating the admin and analysis work required to surface them, instead relying on pre-configured reporting UIs that update in real-time, as and when stakeholders require them.

Naturally, the first challenge here is defining and exposing the required information. This may be comparatively easy with a dedicated CMDB, as we’ll have a unified platform to query and pull relevant metrics.

However, in distributed systems, this can be somewhat trickier, as we’re more likely to need to aggregate, transform, or cleanse information from multiple sources.

We have several options here, including relying on data warehouses and ERP platforms, utilizing more contextual data automations and pipelines, or relying on dashboard-building platforms that enable simultaneous querying of separate sources.

With this in place, our task is to provide suitable visualizations for the needs of individual stakeholders while also managing the data governance issues surrounding this, including securely providing access to permitted users.

## End-user capabilities

While the majority of configuration management workflows primarily concern our internal IT team, we must also be aware of the ways that end users across the organization will interact with our CI data.

Typically, this will be quite limited in terms of actually carrying out configuration management workflows.

Rather, these kinds of users will primarily interact with our service configuration management in terms of accessing information that’s relevant to their roles. In some cases, they may also need to initiate configuration management actions.

### Service catalogs and knowledge management

One of the core ways that our configuration management software provides organizational value is by providing inputs for our knowledge management practices. 

This includes our documentation, service catalogs, and knowledge bases, as well as any other tools where colleagues access information regarding our service portfolio.

Ultimately, the key thing we need to account for here is how we maintain the accuracy of the information presented to users within these resources.

So, from the perspective of configuration management, our priority is leveraging automation to minimize the workload associated with handling this.

In some cases, we may be able to automate this process entirely. For instance, adding or removing certain services and CIs to knowledge management platforms as and when they are added to our data stores.

However, in most cases, this will still need to be managed manually, as changes to CI data alone may not sufficiently communicate the practical implications to service users. 

We may still automate certain elements of this. For instance, notifying documentation teams that updates are required.

In cases where the same information is presented to users in multiple locations, such as self-service tools, knowledge bases, documentation, or service catalogs, we may also want to consider furnishing IT teams with a single point of interaction for updating this.

### Request management tools

The other key point where we need to consider service user interactions with configuration management systems is any instance where normal service delivery acts as an input for workflows relating to our CI data.

That is, where a service interaction within another ITSM practice triggers a configuration management action, such as adding, updating, analyzing, or initiating some other workflow regarding our CI records.

These typically relate to processes involving end-user requests, including asset management, service request management, incident management, support desk management, and change control.

As such, when we develop capabilities for these kinds of processes, we must be cognizant to build-in the requirements of our configuration management practice.

Practical examples of this include considering the relevant data governance policies that apply to users across various practices, as well as identifying the specific events in external platforms that will trigger configuration management workflows.

Our goal here is to identify the specific instances where such platforms provide inputs to our change management practice so that this can be incorporated into our systems design.

## Overlap with other ITIL practices

One of the key ideas within ITIL is that we must work holistically across our IT service portfolio in order to reflect the many ways that individual practices will inevitably overlap.

Accounting for this in the context of configuration management can be a particular challenge, given its central role in how we deliver all other aspects of our service portfolio.

So far, we’ve seen a few discrete instances of this. However, when determining which configuration management solutions are appropriate for our particular requirements, we must also approach this issue at a more systematic level.

As noted earlier, by far the biggest point to consider is the overlap between our configuration management and change management software.

There are a few valid ways to approach this. In some organizations, these practices are a shared function, and systems can, therefore, be developed in tandem.

In others, we’ll still need to be cognizant of how we can build the interaction between related platforms into our requirements, for instance, developing change control tools on top of our existing CMDB.

In more distributed systems, the key is often to build appropriate configuration management processes and best practices into function-specific platforms with a heavy emphasis on handling CI data.

For example, establishing the need for accessible, reliable CI records as a requirement in other service management platforms and practices. 

For instance, handling configuration data within functional tools such as ITAM platforms, rather than within a dedicated configuration management practice.

## General requirements

Lastly, regardless of the specific tools and capabilities that we choose to implement around our configuration management software, there are a few additional considerations that are applicable at a more general level.

The key issue that we haven’t touched on so far is security.

This is a particular concern, as the data that underpins our IT services and related CIs is almost always mission-critical. Breaches or other incidents relating to this could, therefore, have an enormous cost.

Therefore, it’s essential that we consider the additional measures and mitigations we’ll require to reflect this.

A key issue is how and where we choose to host our CI records. For instance, the majority of COTS ITSM solutions offer cloud-based hosting, but organizations where security is a primary concern will typically prioritize platforms that can be hosted on-premises.

Another important consideration here is how we govern access to our data.

In the context of configuration management, access control policies may be highly complex. The crux of this is determining and enforcing the rights of various user groups across the entire organization, including terms of specific data objects, attributes, and actions.

Therefore, it’s imperative that we clarify our requirements here in order to design appropriate systems that enable us to enforce our access requirement needs consistently across the data underpinning our entire service portfolio.