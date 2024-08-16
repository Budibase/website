---
date: 2024-08-10
title: Designing Asset Management Lifecycles
description: Learn how to design asset management lifecycles and apply ITIL’s core principles within these.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Lifecycle
    parent: assetManagement
    post: asset-management-lifecycle
    identifier: assetManagementLifecycle
---

Within our asset management practice, one of the fundamental challenges is defining and controlling our resources, tools, and devices from the point of acquisition until we no longer need them.

This is what’s known as the asset’s lifecycle.

How we handle asset lifecycles has an enormous impact across financial, legal, security, operational, and technical goals. It’s also the starting point for designing all other aspects of our asset management service.

So, it pays to get it right.

In this guide, we’re exploring how asset management lifecycles are handled within the IT infrastructure library (ITIL), a framework for delivering IT services that focuses on providing value across large organizations.


## What is ITIL asset management?

Under ITIL, asset management is the practice tasked with planning and managing the lifecycle of all IT assets. 

The goal is to empower teams to maximize value, control costs, support decision-making, minimize risks, and meet compliance requirements across the organization’s asset estate.

ITIL defines an asset as any component of an IT service or product that has financial value.

Another way of thinking about this is that IT assets are the tools that colleagues across the organization require to fulfill their duties, whether directly or indirectly. We’ll dive into this a little deeper in a moment.

At a practical level, asset management can be broken down into three core strands:



1. Maintaining an accurate, up-to-date record of all of our owned and controlled assets.
2. Maximizing the return on investment, we derive from our asset estate.
3. Ensure that assets are available to colleagues across the organization.

Each of these can comprise a wide range of workflows and activities. The specifics of this will depend on our goals and resources, along with the specific lifecycles we define for different kinds of assets.


### Types of assets

With that in mind, we need to flesh out our understanding of what constitutes an IT asset and how we can categorize these.

For many people, asset management is synonymous with end-user devices like laptops or phones. 

However, this is only a part of the picture.

ITIL distinguishes between a few key clusters of IT assets, including:



* **End-user devices** - such as laptops, desktops, phones, and tablets.
* **Peripherals and accessories** - screens, cases, keyboards, printers, and other low-value devices.
* **Network Infrastructure** - including servers, switches, and any other tools we need to maintain our IT environment.
* **Cloud assets** - resources that support our cloud capabilities.
* **Facilities** - including buildings and equipment.
* **Software assets** - licenses, repos, API endpoints, and other software tools.
* **Data assets** - data sets, files, documents, and other information.
* **Operational technology** - including industrial machinery and tooling or other IoT devices.

While stopping short of prescribing individualized lifecycles for each of these kinds of assets, ITIL does require us to recognize the differences between how we handle each, as well as alluding to some of the key differences involved.

While this isn’t comprehensive, it is helpful in terms of identifying some of the core challenges we need to contend with in relation to various asset classes. 

For example:



* Managing hardware assets requires us to put measures in place to identify and track devices in terms of their physical location, as well as handling maintenance, security, and patch management workflows.
* Managing software assets is largely concerned with governing access, including administering accounts and licenses.
* Cloud-based assets may need to be grouped in terms of their use case or service for the purposes of establishing cost controls.
* Managing data assets largely relates to controlling exposure and access, as well as maintaining integrity, accuracy, and consistency.
* Managing facilities or operational technology introduces a whole range of additional challenges, as we’ll likely need to cooperate with other departments or external stakeholders.

However, underlying this, the core goals of asset management remain the same. Specifically, there is a need to deliver value across the organization by furnishing colleagues with the capabilities they need in a cost-effective manner.


## Defining asset management lifecycles

Now that we’ve established that the way we utilize and manage assets can vary according to their type, we can move on to considering how to translate this into an appropriate lifecycle for different kinds of devices and resources.

We can think of a lifecycle as the stages each asset transitions through, from when we initially identify a demand to acquire it until it is no longer required.

Typically, these stages will be the same for all types of assets, but the specific tasks required within each will vary. We might define these for broad categories of assets or, more granularly, for individual devices and resources.

Here’s how a basic asset lifecycle is structured.


### Request

The first stage of asset management involves identifying the demand for new tools or resources. While it’s typically referred to as the request stage, it could just as easily be considered an initial planning phase.

Its name comes from the fact that, by the end, we’ll be able to submit a formal request to acquire an asset.

In reality, though, we have two goals here:



1. Identifying demand,
2. Engaging with stakeholders and performing analysis to identify specific assets that will satisfy this demand.

Generally speaking, there are two ways to identify demand. We can either receive a request from a service user to provide a new capability or we can determine that new assets are required to achieve a particular improvement as part of our service quality management practice.

Which of these applies depends on the type of asset in question. For instance, in the case of an end-user device such as a laptop for a new hire, this will likely come in the form of a request from HR or their line manager.

By contrast, we’re less likely to receive a request like this for network infrastructure. Instead, we’ll typically identify a demand for increased capacity and then determine that a particular asset, such as a server, is required to satisfy this.

Alternatively, we can identify demand for most types of assets to replace a similar device that recently reached the retirement phase of its lifecycle.

In any case, we can then move on to determining which assets are best suited to meeting this demand. In the first instance, the key here is working with service users or other stakeholders to understand their underlying needs and pain points.

Once this is documented, we can perform a cost/benefit analysis of options available on the market to determine which assets will most cost-effectively meet our needs.

By the end of this stage, we’ll be able to make a formal request to the team responsible for handling asset procurement.


### Fulfill

Within IT asset management, fulfillment is the stage that deals with assessing and responding to procurement requests within a formalized approval process.

Depending on the nature of the asset in question, the depth and complexity of this stage can vary greatly. For instance, the higher the value of the item in question, the more likely we are to face strict financial controls.

Alternatively, acquiring items that are required as part of normal service operations, such as common end-user devices, may be relatively easy.

The first step of most fulfillment stages is confirming that there is actually a demand for the requested assets to be purchased. 

This means cross-referencing requests with our asset inventory to determine if a device that could satisfy the same demand is already available or underutilized.

If a new asset must be procured, the proposed option will then need to be assessed against technical, legal, financial, and operational approval criteria. For instance, it may be necessary to ensure compatibility with our wider ecosystem or maintain compliance with vendor vetting rules.

At the end of this stage, if all defined criteria are met, the device can be acquired.


### Deploy

Deployment comprises all of the work that is required to bring new assets into service. This is perhaps the area where we see the most variation across different classes of assets in terms of the specific tasks required.

In the case of end-user devices, as well as most peripherals and accessories, there are broadly two strands to deployment. Assets are either prepared and delivered to their primary end users or made available within our device rental workflows.

We might follow a similar process for certain software or data assets, either providing access directly or making them available within appropriate catalogs and request workflows. This might come along with the additional requirement to provide training, particularly for new applications.

Deploying other kinds of assets is typically a much more involved process, especially around our network infrastructure, cloud environments, operational technology, and physical facilities.

These introduce a range of additional practical challenges, including logistics, transportation, storage, installation, managing power requirements, testing, and deploying to live environments. As such, this will typically require careful planning, often on a case-by-case basis.

Once deployment has been completed, our new assets will be live and operational, enabling them to provide business value by satisfying the demand we initially identified.


### Monitor

Once an asset has been deployed, we move on to the monitoring phase of its lifecycle. The goal of this stage is to ensure three things:



1. That the asset is working as intended.
2. That it is being used according to any rules and policies governing it.
3. That it provides the value that we expect it to.

The question then becomes how we operationalize and measure each of these in the context of different asset classes.

For instance, with end-user devices, our primary concern is that assets are in the possession of the authorized users. In terms of monitoring for value creation, we’re primarily monitoring costs associated with the lifespan and service costs of specific devices.

In a similar vein, exposure and access are key for software resources and data assets.

That is, we primarily want to ensure that our assets are being used in compliance with our defined access roles.

Another key concern here is ensuring that our information assets remain fit for purpose. For instance, monitoring for integrity and accuracy within data sets or for bugs and security issues within our software estate.

When it comes to network infrastructure and cloud assets, we’re primarily concerned with uptime monitoring and identifying security vulnerabilities, with the goal of maintaining the required capabilities across the organization.


### Service

The service stage of the asset management lifecycle comprises any regular or irregular tasks that are required to maintain services.

Broadly speaking, this means either scheduled maintenance or repair work for physical assets or any required maintenance tasks and updates for digital resources.

In this sense, we have a few overlapping goals across all asset categories. These are maintaining service levels, security, cost-effectiveness, and visibility across our IT environment.

The key challenge here is determining when maintenance is required and then managing the associated workloads. 

There are two strands to this.

The first is maintaining service schedules for individual assets. Devices will generally have a specific interval at which we need to perform services. We must build this fact into our asset management processes.

The second is putting procedures in place to handle unscheduled maintenance. As we’ll see a little later, this ties in with our incident management practice, as we’re often responding to a breakage, malfunction, or environmental change that necessitates repairs or updates.

The service stage is a continuous process that begins with deployment and concludes at the end of our asset’s useful service life.


### Retire

Lastly, we have retirement. This is the asset management lifecycle stage that deals with what happens to our assets after we no longer need them. It’s also often the stage where we’re most tightly bound by regulatory issues.

The first challenge is determining what must happen to our assets when they can no longer provide value, whether this is disposal, deletion, resale, archiving, or recycling. This should be predetermined, along with the specific conditions that govern when assets should be retired.

The complexity here arises from the fact that we may be balancing several different regulatory issues.

For instance, in the case of hardware assets, the useful service life might come to an end because a particular device is no longer capable of performing the tasks we require from it, due to technological advancement.

However, when it comes to retiring this, we may be bound by a range of concerns, including environmental regulations, data protection and security, the need to recoup costs, or other internal policies, as well as issues relating to our changeover to replacement hardware.

Information assets, including data resources, might present challenges alongside our responsibilities relating to purpose limitation and the right to deletion for data subjects under GDPR or other regional legislation.

As such, it’s imperative to have clear policies in place regarding asset retirement and to provide tools and processes that ensure the outcome is documented for regulatory purposes.


## Applying ITIL thinking to asset lifecycle design

Under ITIL, the lifecycle of specific assets will typically follow the structure we just outlined, but the details of this are dependent on the specific needs and IT resources present within your organization.

The processes, policies, and systems we put in place to handle different kinds of assets at each stage make up their lifecycle design.

Our next task is to consider the practical side of how we can apply the core principles of ITIL to designing effective asset lifecycles.


### Establishing and maintaining asset records

All tasks involved in IT asset management rely on accurate, up-to-date information about our IT estate. However, within ITIL, we must approach this in a very particular way.

Specifically, one of the key principles within the framework is the idea of starting where we are and progressing iteratively. Therefore, the established best practice for developing and maintaining an asset register is not to rely solely on costly, labor-intensive audits.

Rather, ITIL recommends gathering information about the status of assets that we require through regular service interactions. For instance, when new assets are delivered or when existing ones are brought in for maintenance and servicing.

This requires us to build our data management requirements into all stages of the asset management lifecycle so that each interaction provides a snapshot of the present state of the related device or resource.

This provides the same level of organizational value and visibility into our asset estate without the excessive costs associated with audits.

While audits may still be required, these will be more infrequent and less costly, as our asset register is more accurate and up-to-date to begin with.


### Building in interactions with other ITIL practices

Another key idea with ITIL is that our IT services will inevitably interact in complex ways, requiring a holistic approach to process design.

The takeaway from this is that we must identify the specific points of intersection with other ITIL practices across our assets’ lifecycles and build these into the appropriate stages.

We can point to a few key examples of this. For instance, acquiring new assets is closely tied to our **configuration management** and **change control processes**. 

The challenge here is that incorporating a new resource within any of these practices could require us to initiate a new asset lifecycle. For instance, if a new device is required as part of a change request relating to our service provision.

As such, it’s important to define and implement data-sharing requirements between processes as part of our request and fulfillment lifecycle stages.

The other most common interactions between asset management and other internal services relate to our **incident management** and **support desk** practices. These will often act as triggers during the service stage of our asset management lifecycle for hardware devices.

For instance, if an incident response or support ticket necessitates maintenance actions within our asset estate. Handling this requires us to establish appropriate integrations between our incident management, support ticketing, and asset management solutions.


### Optimizing and automating asset provisioning

ITIL also prioritizes optimization and automation within our service designs. In the context of asset management, this is most applicable to the lifecycle stages that involve interactions between our end-users and service delivery teams.

The priority here is shifting our focus towards delivering streamlined experiences for both groups of users, primarily within the request, approval, and service lifecycle stages.

For instance, by providing self-service tools or streamlined form UIs for submitting rental, maintenance, or other requests in order to maximize efficiency and minimize the need for manual communications.

Automation also has a key role to play across various stages of the asset management lifecycle. For example, at the fulfillment stage, we can benefit greatly from automated approval flows, especially for low-value resources and easily computable requests.

Similarly, automated scheduling, notifications, and bookings greatly reduce the administrative burden placed on IT teams related to asset servicing and retirement while helping to ensure compliance and process adherence.


### Aligning capabilities and inventories with service quality KPIs

ITIL requires us to frame our service offerings in terms of the wider organizational value that they provide. In this sense, we must build **service quality management** and **service financial management** practices into our thinking across our asset lifecycles.

In other words, we need to balance the costs associated with managing our asset estate with the capabilities required to deliver agreed-upon service levels.

In particular, this should inform much of our thinking relating to the request, fulfillment, and monitoring stage of asset lifecycles.

For instance, if a new asset procurement request is submitted, but we are already able to meet capacity requirements with our current inventory, then this should not be approved for fulfillment. 

Similarly, if our monitoring determines that currently deployed assets are surplus to requirements, remedial action must be taken to improve the cost-effectiveness of our estate.

On the flip side, we might identify that our current estate is not capable of providing the capabilities we require to deliver agreed service requirements, in which case the request stage should be initiated to explore acquiring new assets to fill this gap.


### Delineating roles and responsibilities

Finally, in order to design effective services, we must provide clarity relating to internal roles and responsibilities. 

ITIL does not take a prescriptive stance on which teams or colleagues should be responsible for asset management. Rather, this should reflect the requirements and available resources within individual organizations.

This is particularly important within our asset management practice, as we must consider it both at the level of asset lifecycles as a whole and within their constituent stages.

One approach is to provide a dedicated asset management team that oversees all lifecycle stages.

Alternatively, asset management is often a shared responsibility, with various existing teams contributing to different kinds of assets or at different lifecycle stages.

For instance, relying on service managers to handle fulfillment requests and monitoring but giving existing support colleagues or other appropriate technical teams oversight of deployment and servicing relating to specific types of assets.

Each approach offers its own benefits and challenges, but the key is establishing clear, agreed-upon policies for each stage of the asset lifecycle.
