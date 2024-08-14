---
date: 2024-08-10
title: IT Asset Management Software
description: Learn about the key capabilities required within effective IT asset management software systems.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software
    parent: assetManagement
    post: asset-management-software
---



IT asset management software plays a key role in enabling service users to access the tools they require to carry out their own daily responsibilities. At the same time, it allows IT teams to manage the costs and risks associated with items across our technical estate.

However, while many teams handle this within a singular, off-the-shelf platform, it’s just as common for asset managers to rely on more complex systems comprising multiple internal tools, data sources, and existing platforms.

In this guide, we’re outlining the capabilities that we need to manage IT asset estates effectively.

Specifically, we’re breaking down the elements of an effective IT asset management system, along with the key decisions you’ll need to make in order to design and implement solutions that drive organizational value according to your unique requirements and resources.


## What is asset management software?

Asset management software comprises any and all tools we use to track, manage, deploy, monitor, and administer IT assets across their lifecycle.

Within ITIL, the dominant framework for ITSM, an asset is defined as any financially valuable component that can contribute to our IT products and services. This includes any tools or resources colleagues across the organization need, directly or indirectly, to do their jobs.

This is most often associated with end-user devices, such as laptops, desktops, or phones. 

However, assets can include a much wider range of resources than this, including but not limited to peripherals, network hardware, software tools and licenses, contracts, data sets, stakeholder relationships, cloud platforms, or anything else with financial value.

In any case, the core role of asset management systems is to enable IT teams to gain visibility into these resources, carry out defined lifecycle management tasks, and control costs while providing access to the users across the organization who need it.


### Components of an asset management system

Before we outline the more granular capabilities we’ll need to account for across our ITAM systems, it’s helpful to think about how we can categorize these. 

That is, while the specific tools and workflows we utilize will vary, the basic decisions around how we structure our solutions remain the same. Therefore, understanding how to categorize these capabilities is a helpful starting point for determining the right solutions for our needs.

At the highest level, asset management software enables us to do three things:



1. Store, manage, and provide access to data relating to our asset estate.
2. Provide service colleagues with the capabilities they need to access and administer this data within defined workflows.
3. Facilitate interactions with end users, including accessing assets and initiating service actions according to their permissions.

Within each of these clusters of capabilities, the key challenge in terms of systems design is understanding the specific decision points that will support our wider efforts to drive organizational value in the context of our technical requirements and available IT resources.

In the following sections, we’ll outline the key decisions required to achieve this across each of the categories we just outlined.


## Asset records and inventories

The most fundamental aspect of any ITAM system is how and where we store our asset records. Our data layer forms the basis of all other tools and solutions we put in place to handle assets across their lifecycle.

There are several valid approaches here. In the context of ITIL, determining which is appropriate for your specific organization means balancing a range of factors, including technical requirements, available resources, and the current state of your IT operations.

Let’s check out the most common configurations, along with their respective pros and cons and some of the scenarios they’re best suited for.


### Configuration management databases

To avoid duplication or other data quality issues, many organizations opt to handle asset information within their existing configuration management database (CMDB). 

This may be because asset management and configuration management are a shared function within the IT team or simply because of the inherent overlap between these two practices. The crux of this is that they often deal with data relating to the same resources.

Stemming from this, some of the core benefits of building asset management systems around existing configuration management data include:



* **Centralization** - handling all data relating to IT resources and tools in a single location
* **Accuracy, reliability, and validity** - avoiding issues including data duplication, redundancy, or conflicts.
* **Cost-effectiveness** - potentially reducing the labor and costs associated with handling data across multiple locations.
* **Simplicity** - enabling all relevant systems to query a singular data source could enable us to reduce our reliance on data pipelines and other solutions to collate information from disparate locations.
* **Control and governance** - providing IT leaders with a singular solution for overseeing and controlling access to our asset data.

Of course, this is reliant on having a CMDB in place already. If this isn’t the case, the workload associated with establishing this is unlikely to be financially viable for the sole purpose of your asset management practice.

Therefore, one major downside of this approach is that there’s a good chance we could achieve similar results with less time, effort, and cost, especially if aspects of our ITAM practice are already handled in existing data stores rather than a CMDB.

There are also key downsides that arise from excessive centralization. For instance, it’s typically more efficient to enable the functional teams responsible for certain ITSM practices to take ownership of the related data.

Similarly, over-centralization can lead to additional risks, including increasing the impact of interruptions across our service portfolio, requiring us to put additional mitigations in place compared to a distributed system.


### Dedicated asset management databases

Another common approach is handling all asset management information in a dedicated database that’s either distinct from or forms a federated part of our CMDB. This might also be referred to as an asset inventory or record.

This retains many of the benefits of relying on a more centralized CMDB while also introducing new benefits, particularly for teams with restrictive needs around centralizing control of asset-related data.

As such, this is often the preferable option for organizations with a dedicated asset management function that’s singularly responsible for all tools and resources.

{{< vimeo id="996702784" >}}

At a practical data management level, dedicated asset inventories will also typically simplify our information needs around specific entities compared to what we’d store in a CMDB.

That is, for any given asset, an ITAM database only requires us to store the attributes that are relevant to our asset management workflows, whereas in a CMDB, these might be stored alongside the attributes required for our entire service portfolio.

On top of this, maintaining separate data stores also enables us to mitigate certain security risks by building a degree of redundancy into our wider IT ecosystem. 

While an outage in our CMDB might interrupt all service delivery, the same event in a dedicated asset store can be limited to our ITAM practice.

The major downside of this approach is that we may also have to put additional measures in place to achieve adequate oversight and consistency across our ITSM data.

In particular, teams with a highly centralized or dedicated configuration management function will need to consider solutions for aligning stored data across both practices, including automation tools, governance policies, and workflow design.


### Category-specific asset records

Lastly, in teams where ITAM is a shared or distributed responsibility, it’s common to utilize distinct platforms for storing data relating to various classes of assets. 

For example, separate functional teams may be responsible for end-user devices, network hardware, or software assets.

Typically, this is a highly cost-effective, flexible approach. 

The core benefits here relate to the fact that many day-to-day management workflows for a given category of assets may not necessarily present a great deal of overlap with other classes. 

For example, the colleagues responsible for managing our server room likely don’t need to interact with any of the same data as technicians who handle our end-user device rentals.

Similarly, some kinds of assets may have heightened security needs relative to others, especially those relating to critical infrastructure or sensitive business lines.

Therefore, utilizing category-specific asset records enables us to better reflect the distinct information needs of various resources and teams across our IT estate.

However, as before, this can introduce additional complexity.

A key issue here is that asset management isn’t only concerned with the day-to-day management of tools. Rather, it requires us to manage the costs, risks, and business value associated with our assets as a whole.

So, in cases where ITAM data is distributed across functional teams, we’ll still require effective integration or federation solutions in order to sufficiently surface any required service level and capacity management data to IT leaders.


## Capabilities for asset managers and IT teams

Now that we have a clear grasp of our options in terms of storing and managing asset management data, we can begin to think about some of the more concrete ways that this will be utilized during service delivery, as well as the specific capabilities we’ll need to facilitate this.

Specifically, we can begin by considering the tools we’ll need to furnish our service delivery colleagues with to manage core ITAM workflows.


### Admin interfaces

One of the key functions of any successful asset management practice is tracking the status of assets at any given point in time. 

Achieving this requires suitable admin tools for handling basic interactions with our asset records.

A basic admin interface enables our users to do two things.

First, it must provide effective filtering and searchability in order to enable colleagues to locate the records relating to specific assets, whether these are contained in a single store or distributed sources.

Second, we need to facilitate basic data management actions relating to these. One element of this is performing CRUD operations on our asset records. For instance, registering new assets or updating attributes relating to existing ones.

Admin tools will also typically be used to view or manage data around service user interactions relating to our asset estate. For example, viewing, approving, and actioning rental requests.

A key element to these is providing appropriate permissions and data exposure to service colleagues based on their roles within defined workflows. For example, providing read access to only certain assets and stored attributes, or limiting the admin actions that users can take.


### Check-in/out tools

Other ITAM tools for service delivery colleagues are much more use-case-specific. Perhaps the best example of this is tools for checking assets in and out of our inventory.

This is a vital element of the fulfillment stage of the asset management lifecycle, especially in the case of end-user devices, peripherals, and accessories. The basic task here is recording data around how and when an asset passes from our inventory into end-user deployment.

In a very basic workflow, the responsible colleague may simply update a status or location attribute within our asset record when this happens.

However, dedicated tools offer a range of benefits. Chief among these is eliminating the need to provide the user in question with full CRUD permissions. 

By contrast, dedicated check-in/out tools enable users to collect and submit the required data without requiring full access to the existing record, improving both efficiency and security within workflows.

For example, a dedicated form might be accessible by scanning a barcode on an asset at the point of check-in/out.


### Other function-specific tools

IT asset management systems will generally feature a range of other function-specific internal tools for service delivery colleagues to interact with records.

Again, the goal here is generally to provide various colleagues with a streamlined way to carry out defined data actions in a controlled, secure manner.

At a high level, we can point to two key clusters of functionality here.

The first is enabling users to collect or update information relating to specific tasks within our asset management practices. For example, checking the service status of tools or submitting maintenance reports within scheduled repair workflows.

As before, the goal here is to enable colleagues to update the relevant attributes relating to their workloads while enforcing appropriate limits on their data exposure.

Alternatively, many function-specific ITSM tools can be characterized as ticketing systems. We’ll return to what these look like for service users a little later.

For now, though, we’re only concerned with the capabilities these provide to service delivery colleagues. Generally speaking, this involves accessing, reviewing, and actioning submissions from end users to initiate a defined service action.

For example as part of asset rental, hardware incident management, or support request workflows.


### Dashboards and reporting

Lastly, IT asset management systems will typically provide capabilities around reporting on key performance data.

It can often be challenging to surface the required insights, however, especially as we may need to perform complex aggregations and transformations on data from a diverse range of sources.

For example, if we store relevant financial and service-quality data in different platforms.

Dashboards are a critical element of this, enabling us to set up complex reporting and provide streamlined, easy access for decision-makers and other stakeholders.

This enhances visibility into key data while also eliminating the need for repeated manual analysis. That is, by building a dashboard, we can create the appropriate queries once and enable end users to access visualizations of real-time metrics as and when they need to.

For example, relating to the cost-effectiveness, overall capacity, or other high-level metrics within our asset estate.

From a technical perspective, the challenges here are twofold.

First of all, since the required information likely spans several data sources, we’ll also probably encounter issues related to compatibility, especially in terms of formatting. So, even similar attributes might be handled slightly differently across different sources.

Therefore, we’ll need the ability to create suitable transformations within whichever solution we use to create dashboards to adequately leverage this data.

Second, there’s the issue of making disparate sources easily queryable. That is, if we need to combine, aggregate, or compare metrics from separate schemas or databases.

In some organizations, we may already have suitable measures in place as part of a data lake or warehouse. In other cases, we might rely on dashboard-building tools that support simultaneous querying between external data sources.


## End-user tools

Next, we can start to think about the capabilities we’ll need to provide to service users within our asset management systems.

Obviously, our service users interact with assets very differently from service delivery colleagues and, therefore, need to take different kinds of actions within workflows.

For the most part, this means initiating defined service actions. In the context of ITAM, this can be renting a device, requesting a related service, or submitting information about problems, issues, and incidents.

Here are the key capabilities we can provide to enable this.


### Asset catalogs

Asset catalogs are internal tools that provide service users with information relating to the assets that are available to them. This includes what resources are, their intended usage, whether they’re currently available, and how they can be accessed.

In other words, this provides a read-only view of the specific entries and attributes within our asset records that are appropriate to a given user.

For example, we might enable users to access different asset information based on their role, department, seniority, or other factors.

This might apply to our asset estate as a whole, or we might provide distinct catalogs for categories of assets, like data resources, end-user devices, software licenses, and or any other category.

Generally speaking, asset catalogs will also provide a means to access specific assets.

{{< vimeo id="961320496" >}}

At a practical level, there are a few variations on how this could work, depending on the status of the asset in question. Specifically, users can either submit a request to rent, reserve, or acquire a new device or resource directly within our asset catalog.

This request can then be managed within the appropriate service-delivery tools, for example, by initiating an approval workflow or scheduling the required tasks within our ITAM team.

The goal, especially within ITIL, is to enable on-the-ground colleagues to self-serve to the greatest possible extent, as well as systematize interactions with the IT team in order to maximize both efficiency and process adherence.


### Request forms

IT asset management workflows rely heavily on dedicated request forms to handle interactions with service users. Essentially, the goal here is to provide experiences that enforce a specific schema on end-user requests to initiate service actions.

This can relate to a wide variety of ITAM workflows, including rental, support, servicing, and information requests, as well as damage, incident, and reports, or even simple user feedback and queries.

Any of these could be provided as stand-alone tools or within other asset management software solutions, such as ticketing systems, help desk tools, asset catalogs, or a wider IT services portal.

For example, within our asset management catalog, we’ll more than likely use form interfaces to enable users to request a specific device once they’ve located the appropriate record.

{{< vimeo id="956383530" >}}

There are a few distinct challenges we’ll need to contend with here. The most important is the need to balance providing streamlined user experiences with ensuring that we collect the accurate, structured data we need to implement requested workflows.

In the case of asset management, this is amplified by the fact that, for any given service action, the data we need relating to specific assets might have a different schema. For example, we’ll likely have tighter controls in place for users requesting higher-value devices.

One option would be to account for this fact by providing multiple asset-specific form UIs. However, this could quickly become overwhelming, making our asset management systems difficult to oversee and maintain.

Instead, a more efficient approach is to reflect the different data schemas of various assets by providing dynamic forms that display appropriate fields based on the relevant resources for the user’s request submission.


### Ticketing tools

Lastly, many end-user interactions within ITAM processes are handled using ticketing platforms, as we alluded to earlier. 

These are internal tools that enable service users to submit defined requests in the form of tickets, track their progress, and provide any other required inputs for reaching a resolution.

Within the IT team, tickets can be assigned to service agents, related tasks can be scheduled, and the fulfillment process can be managed.

In the context of IT asset management software, ticketing tools are largely used in workflows that require more extensive user interactions, complex fulfillment processes, or more involved workload management.

Common examples include handling maintenance requests, outage reports, incidents, end-user training, change requests, or procurement.

For instance, a request to procure an entirely new asset for an end-user may require analysis and approval from a range of stakeholders within and outside of the IT team, including technical, compliance, legal, and financial vetting.

A ticket relating to a system outage might require input from our network, development, data, quality assurance, or other technical teams to respond to.

Ticketing systems enable us to handle more complex asset management tasks that span multiple teams by providing a single point of contact for managing interactions as tickets pass through various stages towards completion.


## Systems within related ITSM processes

Within ITIL, one of the core principles of effective service delivery is recognizing that our ITSM practices will inevitably interact in complex, interrelated ways.

One of the most practical steps we can take towards accounting for this fact is identifying the tools outside of our dedicated ITAM systems that also have a role to play in our asset management practice.

This can be because related practices provide inputs for asset management, asset management provides inputs for related practices, or the two practices simply rely on common data.

The key example of the latter, which we’ve already covered, is service configuration management.

Some of the most common ITIL practices that can serve as inputs for asset management include help desk management, incident management, change management, and service request management.

Specifically, user interactions and submissions within these practices can act as triggers for ITAM actions. Say a user submits an incident report form. This isn’t explicitly an ITAM tool, but it may result in an asset management workflow being actioned to reach a resolution.

Asset management requests can also act as triggers for interrelated ITSM practices. For example, rental request data might expose the fact that our current hardware inventory is insufficient to keep up with demand, triggering a change management workflow.

In both cases, the key is identifying regular points of interaction between practices and building these into our asset management software tools, including appropriate solutions for sharing data and integrating with our wider IT environment.


## Other requirements for ITAM systems

Lastly, across all of the specific tools and capabilities we’ve seen so far, we’ve alluded to a few key requirements that will generally apply across the board.

To wrap up, we can outline these a little bit more explicitly.

The most important is access control. We can think about this at a few distinct levels. For example, handling permissions surrounding specific assets, data objects, entities, attributes, processes, or actions.

In some cases, like a rental request approval flow, this could be relatively simple, with only two distinct user groups - those who can submit requests and those who can respond to them.

Alternatively, in a ticketing system or asset catalog, we may require a more complex set of permissions, with distinct roles for various users from across the organization.

So, when designing our wider asset management system, it’s important to clarify the underlying business rules that will govern access and choose platforms that will enable us to reflect and enforce these.

Another key consideration is how and where our asset management data and the software tools we manage this with are hosted. 

For example, many organizations opt for cloud-based solutions, often motivated by some combination of cost-effectiveness, convenience, availability, or scalability.

However, in other cases, particularly in the context of large enterprises or other organizations with more sensitive asset data. 

Therefore, it’s important to consider our asset management systems in the wider context of our information security and compliance needs, including choosing tools that offer hosting options that enable us to meet these requirements.