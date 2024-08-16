---
date: 2024-08-10
title: What is Asset Management?
description: Learn how ITIL handles asset management, including the core goals, priorities, and capabilities.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Asset management
    identifier: assetManagement
    post: asset-management
---



Asset management is one of the fundamental internal IT services, playing a key role in ensuring that colleagues across the organization have the tools they need to perform their roles.

It’s also one of the constituent practices within the IT Infrastructure Library (ITIL) framework for ITSM delivery. The goal is to ensure that the assets required by service users are provisioned without undermining security, finance, or other operational goals.

Like all ITIL practices, asset management must be focused on providing value to service users. 

Therefore, by adopting the ITIL approach to asset management, our goal is to establish the policies, processes, and capabilities we need to furnish colleagues with assets in the most cost-effective manner possible.


## What is asset management?

Asset management is the practice of systematically planning, tracking, deploying, and utilizing IT assets across our organization. This applies across the full lifecycle of devices, from acquisition to usage and eventual retirement.

As well as providing users with frictionless access to appropriate assets, our priorities include:



* Controlling costs,
* Managing risk,
* Inform decision-making,
* Support capacity planning and process improvements,
* Maximize the value and utility we derive from owned assets,
* Assist with compliance and security tasks.

In the first instance, this requires us to audit and document all of our owned assets, either within dedicated asset management tools or as part of our configuration management database.

This, in turn, forms the basis of a wide range of workflows, from basic device rentals and asset tracking to providing the data and insight required for strategic decision-making. We’ll explore these in more detail later in this resource.


### What is an IT asset?

Within ITIL, an IT asset is defined as anything with financial value that contributes to our service delivery. We can place these into a few key categories, each with its own distinct requirements and management workflows.

These include:



* **End user devices** - such as laptops, desktops, phones, and other basic tools required by users.
* **Network infrastructure and hardware** - including servers, switches, and other tools that are required for operations, without service users necessarily interacting with them directly.
* **Software assets** - such as licenses, subscriptions, code bases, and other software tools.
* **Data assets** - data sets, databases, data views, documents, credentials, reports, dashboards, API endpoints, and other sources of information.
* **Peripherals and accessories** - including keyboards, screens, printers, cases, memory cards, and other low-value items.
* **Cloud assets** - any assets that are required for maintaining our cloud infrastructure, including hardware, containers, licenses, and more.
* **Client assets** - assets that are managed by or on behalf of external stakeholders.
* **Facilities** - such as office buildings, server rooms, and data centers.

Accounting for the breadth and variety of assets here can be a major challenge. 

In many organizations, asset management is a dedicated function, with a specific team responsible for it. In others, managing different kinds of assets might fall under the mandate of existing teams.


## Managing assets in ITIL

Asset management is a service that almost every IT team handles in one form or another. However, ITIL asset management presents a more specific approach to how this is structured and delivered.

Like all ITIL practices, the core concept here is delivering **value** to users.


### Service value chain

ITIL structures all services in terms of what’s known as the **service value chain**. This is a framework for structuring IT services with specific reference to how they deliver business value. 

This works by dividing service delivery into six distinct stages:



* **Plan** - understanding the current state of our IT services and establishing an improvement direction.
* **Engage** - working with stakeholders, including service users and vendors, in order to understand their priorities and the specific actions that can alleviate pain points.
* **Design and transition** - the analysis of business requirements and translation of these into technical plans to provide value while also focusing on value-for-money and time-to-market.
* **Obtain/Build** - achieving the capabilities required to implement our new service.
* **Deliver and support** - delivering our new service according to agreed specifications.
* **Improve** - implementing continual improvements to our services.

The service chain is applicable to our ITSM efforts as a whole as well as within individual ITIL practices. As such, individual practices can be more heavily weighted towards different stages of the service value chain.

Applying this framework to asset management might involve:



* **Plan** - outlining asset management policies in accordance with user needs, as well as financial and operational constraints.
* **Engage** - interactions with service users that indicate demand for assets, as well as capacity planning to identify demand for assets that users don’t interact with directly.
* **Design and transition** - identifying suitable assets and management processes to meet the needs of the organization.
* **Obtain/build** - including asset procurement, as well as processes to ensure traceability.
* **Deliver and support** - the day-to-day activities relating to how we deploy, track, trace, control, and maintain assets.

We’ll examine the more concrete lifecycle of individual assets later in this resource.


### Goals

Within ITIL, the overarching goal of IT asset management is to ensure that business-level requirements are met with appropriate capabilities while also managing risk, finances, security, compliance, and other operational factors.

To expand this, we can think about some of the more granular priorities that IT teams typically benchmark asset management performance against.

These include:

* Creating and maintaining a record of owned and controlled assets.
* Controlling the asset lifecycle across procurement, deployment, and retirement.
* Providing real-time and historical data around asset usage, performance, and associated costs.
* Auditing assets for the purposes of managing security, compliance, and internal process adherence.
* Providing insights and forecasts around current and future asset demand.


### Asset management and other ITIL practices

One of the key principles of the ITIL approach to ITSM is taking a holistic approach to service delivery. A huge part of that is understanding that various services and practices will inevitably interact in complex ways.

This applies right across the spectrum of ITIL practices, but we must still be cognizant of the processes that are most likely to interact with our asset management processes.

The most notable here is **configuration management**. This is the practice that is related to documenting and controlling all elements that contribute to our service delivery, including assets, as well as networks, pipelines, people, suppliers, stakeholders, buildings, and more.

As such, depending on the scale of your business and the complexity of your IT processes, configuration management and asset management might be closely intertwined, although in many cases, they will remain separate concerns.

Asset management is also closely related to **information security management**. This is the process of ensuring that all of our mission-critical data is protected, including with respect to its integrity, consistency, availability, and access policies.

Issues where asset management has an important role to play here include the disposal of data storage devices, as well as management of our network infrastructure and hardware relating to our wider IT environment.

Risk management and service financial management both inform various aspects of our ITIL asset management practice, especially with regard to accounting for the costs associated with controlling and deploying assets.

Equally, asset management is heavily reliant on almost all of ITIL’s general management practices, including service strategy, service level management, service catalog management, service continuity management, monitoring and performance management, and more.


## Asset lifecycles

A huge aspect of ITAM is devising, managing, and actioning the lifecycles of individual devices, tools, media, and other assets.

ITIL does not provide a specific position on how this ought to be structured in the case of all assets. Rather, as with any other ITIL practice, the goal is to provide IT professionals with a structured framework for delivering value to users across the lifespan of assets.

Nevertheless, it’s necessary to understand the various stages that most assets will undergo in their lifecycle. Within this, there may be some expectations where assets require additional lifecycle stages or forgo others.

Generally speaking, though, the lifecycle of most IT assets includes:


### Planning

The first element of planning is identifying the demand for assets. Depending on the nature of the resources in question, this can come in a few distinct forms. For instance, demand for end-user devices or data sets is typically related to established request workflows.

In the case of network hardware or cloud assets, demand identification is more likely to be fed by capacity management processes.

Once demand has been established, our next step is defining requirements and identifying the most cost-effective means to meet these while complying with relevant internal business rules and budgetary constraints.

By the end of this stage, we should have identified the specific assets we need to acquire to meet our service demand and potentially the vendor we’ll procure these from.


### Acquisition

The next stage of the asset management process is acquisition. This means bringing the asset in question into our ownership or control. This might mean purchasing a device, commissioning software, signing up for an external service, or scheduling data processing.

During this process, IT teams must comply with a range of financial, legal, and operational processes for procurement, including vetting vendors, negotiating contracts, seeking approval for purchases, and following accounting procedures.

For physical assets, we’ll also need to contend with a range of practical considerations, including delivery, transportation, storage, installation, and more - along with the additional costs associated with these.

By the end of this stage, the assets we require should be in place and ready to deploy.


### Deployment

Deployment means making our assets available to end users. This can take a range of forms depending on the asset in question. For example, in the case of network infrastructure, deployment means installation and inclusion in our production environment.

For end-user devices, as well as peripherals and accessories, deployment means delivering devices to colleagues, either on a permanent or rental basis. In the former case, the device might be continuously deployed for its useful lifespan.

For rentable devices, deployment is a recurring process, with assets being accessed by users as and when they are required.

This is the phase where devices are operational and providing value to end users.


### Maintenance

Maintenance is any work that’s required to keep our IT assets operational. For the majority of physical assets, maintenance will come in a few distinct forms. The first is scheduled maintenance, including regular health checks and replacing any perishable components.

However, a large proportion of maintenance work is irregular. Therefore, we must provide colleagues with tools and processes to request maintenance services outside of fixed schedules.

The maintenance phase of IT asset management also includes workflows such as patch management, handling updates, and any other day-to-day tasks that are required to keep our IT estate operational, secure, and effective.

In the case of non-physical assets, maintenance can include any actions that are required to keep resources accurate, up-to-date, and accessible.


### Retirement

Lastly, we have asset retirement. This comprises all of the actions that the IT team needs to take when an asset reaches the end of its useful service life. This can be fed by a range of operational, security, financial, and environmental concerns.

In most cases, the most important factor here is securing devices before they leave our control. This includes thorough deletion of any company data from a device’s storage to prevent this from being accessed by external users.

In some cases, the device will then be disposed of. This needs to be done in line with any local environmental regulations. In others, it might be resold to try and recoup some of the costs of ownership.

In either case, we’ll need to log and document what happened to an asset when it left our control.


## Benefits of ITIL asset management

Next, we can think about some of the reasons we might want to adopt ITIL asset management, rather than an alternative framework.

As with all ITIL practices, our primary focus is maximizing the value that we deliver to service users. 

Since providing necessary devices and resources to colleagues is such a fundamental part of successful ITSM, asset management feeds the success of a huge range of business goals.

The key benefits here include:



* **Visibility into our asset estate** - A centralized database provides critical data into the current state and history of our assets and how they’re used.
* **Maximizing asset utility** - Helping us to achieve the maximum value from our asset estate, including ensuring we have the right resources in place and that we get the maximum utility from these.
* **Efficient service interactions** - Facilitating consistent, user-friendly workflows for users to request devices or report maintenance requirements.
* **Asset security** - Documenting how and where all of our assets are deployed assists with managing a range of security threats.
* **Combatting shadow IT** - Bringing our entire IT estate into the control of the ITSM team ensures that we’re able to identify and deal with shadow IT.
* **Risk management** - Establishing clear controls over our IT estate helps to prevent and mitigate the impact of a huge range of security, financial, legal, and other risks.
* **Controlling costs** - Effective IT asset management seeks to minimize the cost of ownership of our resources.
* **Enhanced decision-making** - Establishing clear visibility into our assets and the value they provide to users in order to inform future resource planning and allocation.

Additionally, given ITIL’s emphasis on a holistic approach to IT service delivery, adopting this framework within our asset management processes can help us achieve similar effects in a range of related practices, as discussed earlier.


## ITIL asset management best practices

In addition to the **service value chain**, ITIL is based on building a number of key principles into our ITSM practices. These are:



* Focus on value,
* Start where you are,
* Progress iteratively with feedback,
* Collaborate and promote visibility,
* Think and work holistically,
* Keep it simple and practical,
* Optimize and automate.

From these, we can establish more specific best practices to guide our asset management efforts.


### Centralizing asset data

Successful asset management relies on establishing a unified view of the resources and devices our organization controls. Typically, this will either take the form of a dedicated asset management database or a subset of our configuration management database.

In either case, the initial challenge is documenting our assets. This requires us to audit our IT estate to identify which assets are currently owned or controlled by our organization.

As part of this discovery process, we’ll then need to work with stakeholders across the organization to understand which specific data points we need to store and process about different classes of device.

The goal here is to establish how each asset contributes value to its end users, including its purpose, who uses it, which processes and workflows it’s involved in, what rules govern it, and more.

Establishing a unified view of our asset estate is also a critical stepping stone to almost any process improvement or digital transformation project, including relating to asset procurement, rental, requests, tracking, maintenance, and retirement.


### Establish and track KPIs

Given ITIL’s focus on providing value to service users, it’s essential to have clear key performance indicators in place for our asset management practice.

This also ties in with several of the seven guiding principles of ITIL that we outlined above, specifically in terms of promoting collaboration and iterative improvements.

As such, KPIs will typically be informed by the needs of a variety of stakeholders, including service users, as well as finance, legal, technical, and other teams.

Some of the most common KPIs for asset management include costs, asset visibility, resolution times for service requests, lifespans, user satisfaction, incident rates, and process adherence. 


### Integrate ITAM with other ITIL processes

Lastly, asset management does not exist in isolation, as we saw earlier. In order to work holistically, focus on value, and foster collaboration, there are a range of practical steps we can take to integrate our ITAM practice with other ITIL processes.

The most important aspects to this is establishing the specific areas where asset management overlaps with other processes. A  very common example of this is incident or problem management processes involving end user devices or network hardware.

On the basis of this, we can think about the specific kinds of integration that are required, including sharing data, triggering workflows across different ITSM practices, or notifying separate teams.

The goal is to maximize efficiency and visibility across all of our ITIL practices and the specific colleagues responsible for delivering them.


## Tools for managing assets

Asset management is perhaps the ITIL practice that’s most dependent on the technology that we use to implement it. 

As such, it’s vital to be aware of the capabilities we’ll need here.

In most large organizations, this is based on a dedicated **asset management platform**. This comprises an **asset management database**, as we outlined earlier, along with interfaces for administering this.

Within asset management workflows, we might also require a range of **request forms** for initiating actions such as device rentals, reporting incidents, or submitting support tickets. We might also provide **service** **catalog** tools on top of our asset management database.

In terms of tracking KPIs and other important metrics, **dashboards** and **monitoring tools** are critical for providing real-time and historical reporting into the state and performance of our asset estate.
