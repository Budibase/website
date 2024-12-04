---
date: 2024-08-10
title: What is Configuration Management?
description: ITIL configuration management deals with how we handle data on all elements that contribute to our IT service portfolio.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Configuration management
    identifier: configurationManagement
about:
  - name: "Configuration Management"
    sameAs: "https://www.wikidata.org/wiki/Q5160111"
    type: "Thing"
---

Configuration management is one of the responsibilities of the IT team that has the most far-reaching impact across our entire service portfolio.

This deals with how we manage information relating to any element that contributes to our service delivery.

As such, effective configuration management is a necessary precondition for day-to-day service fulfillment, as well as a huge range of continuous improvement and transformation projects.

The IT Infrastructure Library (ITIL) is a framework for delivering ITSM services that prioritizes end-user value while minimizing the burden on IT teams.

This guide outlines ITIL’s approach to configuration management across both the guiding theory and the practical steps we can take to drive value for end users and IT teams alike across all of our service fulfillment efforts.


## What is configuration management?

Configuration management comprises all of our efforts to manage information relating to our portfolio of services, along with the resources, assets, or other elements that contribute to our ITSM provision.

The purpose of this is to ensure that our services are properly documented and that accurate, up-to-date information is available as and when it is required. That way, we have a centralized, authoritative record of how all of our services work.

We might rely on this information in a wide range of contexts. For example, furnishing support agents with the steps required to fulfill a particular request or providing a basis for documenting changes and process improvements within service workflows.

A key element of configuration management is the need to balance the value delivered by individual services with the resources required to manage the information relating to them.

So, for mission-critical services, we can justify spending a larger amount of time and effort on information management compared to a more niche or low-value service.


### What is a configuration item?

The central concept within configuration management is our configuration items (CIs). This is defined as any component or element that contributes to our service delivery.

This can include:



* **Assets** - including end-user devices, hardware, peripherals, and more.
* **Information and data** - internally owned or controlled information assets.
* **Resources** - knowledge management resources, self-service tools, and documentation.
* **Software tools** - including owned software, coding resources, SaaS licenses, and other endpoints.
* **Infrastructure** - network hardware, such as servers, switches, or cloud environments.
* **Policies** - details of how our services work, their purpose, and the processes for accessing them.
* **Facilities** - including buildings, power management, and other equipment required by the IT team.
* **Contracts** - such as support agreements, warranties, outsourced services, or SLAs.
* **Licenses** - for software or hardware tools and services.
* **Internal services** - service dependencies within our ITSM portfolio.
* **Human resources** - at the level of teams, colleagues, skills, knowledge, or other workforce management.
* **Partners and stakeholders** - including vendors, contractors, customers, suppliers, and other internal and external stakeholders.

One challenge we must contend with is that CIs can include such a diverse range of resources, tools, and both tangible and intangible assets, which don’t necessarily have much in common other than contributing to our IT services.

We’ll return to how we can determine the specific data we need relating to different CIs in a moment.

At a broad level, though, the goal here is to outline how each CI contributes to a service, the details of how these are currently deployed and used, the associated costs, and how our CIs interact with one another as part of service delivery.

The interaction between CIs includes all kinds of dependencies, relationships, or other points of overlap.


### Modeling configuration management data

At its core, configuration management is all about applying structured data management practices to our CIs.

This can be managed in a dedicated configuration management database (CMDB) that unifies information about CIs across the entire organization.

More often, though, we’ll rely on information from separate sources, in part to avoid duplication issues, as this data will typically also be used elsewhere in our service portfolio. We can then use ETL or data lake tools to create a centralized repository from which to manage CIs.

Regardless of how we store our data, our first priority is determining the appropriate schema for individual CIs or groups of CIs.

In other words, we need to establish the specific information that’s required about our CIs, along with the format and structure we’re going to apply to this. 

This will vary across CIs, especially in terms of the information that’s required to understand how they contribute value to services. Broadly speaking, the most important data points include intended usage, deployment information, and other basic characteristics.

In the majority of cases, this information will already exist elsewhere in the organization. However, there may be considerable effort required to gain proper visibility into this, especially as information about individual CIs might be handled in different locations currently.

The more important element of our configuration management data model, however, is interactions between CIs.

We can think about this at two key levels. Firstly, there are the actual relationships between CI entities, which we can represent within a traditional RDBMS or within a more advanced data warehouse.

For example, primary and foreign key variables can be created to map out dependencies across CIs.

Building on this, the second is the more granular flow of configuration management data across different entities and services. For instance, establishing rules and events that control where CIs interact, such as requiring a dependent entity to deploy a particular asset.


### Configuration management workflows

To properly understand the ways that CI data can interact, it’s vital to situate these within defined workflows.

These are the constituent tasks involved in configuration management and the steps that are required to complete them.

The most common workflows include:



* Identifying and documenting new CIs,
* Updating configuration data to reflect changes to our IT environment,
* Verifying that CI data is accurate and up to date,
* Auditing our environment and service portfolio to identify undocumented CIs.

In terms of maintaining the relationships between CIs, the priority is accounting for change. 

This includes determining how new CIs fit into the picture in the form of their relationship with existing ones.

The other element of change is identifying the instances where change relating to one CI will necessitate action elsewhere in our configuration management practice.

One example of this is capacity management. Say, for instance, that we know each server in our data center requires a certain amount of power. When we want to add new servers, we’ll have to acquire and document new power management CIs to account for this.


## Configuration management within ITIL

So far, we’ve talked about configuration management in more general terms. However, the goal of this guide is to provide a comprehensive overview of what this means in the context of the ITIL framework.

This is covered within **service configuration management**, one of ITIL’s constituent practices under the **service management** category. 

The formal definition in ITIL doesn’t differ much from the one we saw earlier, characterizing service configuration management as the practice tasked with ensuring that accurate and reliable information about CIs is available when it’s required.

On top of this, ITIL is not primarily concerned with providing a standardized model for individual IT services. Rather, the goal is to empower organizations with a toolkit for driving end-user value with their ITSM efforts.

Therefore, we must still apply a very specific approach in order to successfully implement ITIL.


### Service models

Service models are a central part of how we understand the CIs that make up a service and how these relate to one another. 

This is a high-level visual representation of the elements that are required to deliver a given service.

In the most basic form, a service model might simply map out our CIs as nodes in a web or flowchart diagram, with lines representing the relationships between them.

More complex service models can resemble [logical database models](https://budibase.com/blog/data/how-to-create-a-data-model/), with the additional element of the attributes we store about each entity representing our CIs.

The key here is that the level of detail in our service model must be appropriate for the context it’s used in. 

Specifically, there are two issues that we need to take into account here.

The first is the level of detail that’s required about individual entities for high-level configuration management tasks. That is, we’re unlikely to need every stored attribute relating to each CI in order to adequately communicate the relationships between them.

The second is balancing the value provided by individual services with the effort required to maintain a detailed service model diagram. 

By limiting this only to the essential attributes or clusters of data, we can greatly reduce the workload required to represent service dependency visually.


### Applying the service value chain

ITIL’s central goal is to provide enterprise IT departments with a framework for designing and implementing services that deliver organizational value while minimizing the burden on delivery teams.

One of the central concepts within this is the **service value chain** (SVC). This is a generic outline of the activities that IT teams can undertake to provide value to colleagues. This is applicable at the level of individual ITIL practices and to our service portfolio as a whole.

The service value chain is made up of six parts:



* **Plan** - understanding the current state of our service delivery, including where it succeeds and where opportunities for improvement might lie.
* **Improve** - identifying specific improvement opportunities within our services.
* **Engage** - working with stakeholders and service users to identify goals and priorities within ITSM processes.
* **Design and transition** - developing and implementing new solutions, including identifying the required processes, workflows, permissions, and technology.
* **Obtain/build** - acquiring the capabilities required to implement new solutions and services, including both hardware and software tools.
* **Deliver and support** - rolling out our new services to users, including associated tasks such as workload management, support provision, and performance monitoring.

To understand the practicalities of implementing ITIL within our configuration management practice, we must first apply the service value chain.

This could look like the following:



* **Plan** - identifying the components that are required to delivery IT services, including how and where these are deployed.
* **Improve** - measuring the effectiveness of our configuration management efforts, largely in terms of the value they provide within associated services.
* **Engage** - working with stakeholders to identify when and how information related to CIs is required.
* **Design and transition** - defining the data that’s required relating to specific CIs, as well as the solutions we’ll rely on to store and manage this.
* **Obtain/build** - developing the capabilities necessary for our configuration management practice, including appropriate data storage and management tools.
* **Deliver and support** - making information about CIs available across the organization with adherence to internal rules and policies, as well as any work required to maintain the accuracy and validity of this data.


### Establishing value

Given ITIL’s focus on driving organizational value through IT service delivery, it’s essential that we have a clear idea of what this means in the context of configuration management.

In other words, how do we measure value here?

Broadly speaking, there are two strands to how service configuration management provides organizational value.

The first is facilitating value creation within our wider service portfolio. Within ITIL, this is characterized as indirect value. 

As such, we can benchmark this against how easily service delivery teams can access the information they need during normal operations or improvement and transformation projects.

The other strand is the resource burden placed on our IT team to manage service information. In this sense, we can measure the value of our configuration management practice in terms of the efficiency with which IT colleagues can manage and deploy CI data.


### Overlap with other ITIL practices

Another key pillar of ITIL is recognizing that the various aspects of our service portfolio will inevitably interact and overlap in complex ways.

This means that we must build these interactions into our service management efforts, both for the purpose of avoiding redundancy and maximizing efficiency across our service portfolio.

While it’s not possible to generalize about all possible areas where processes will interact, it’s nonetheless helpful to consider the other ITIL practices that most closely relate to service configuration management.

The biggest concern here is **asset management**. This is the process that deals with managing information relating to the tools and resources colleagues across the business need to carry out their responsibilities.

For instance, end-user devices like laptops, as well as peripherals, accessories, network hardware, software licenses, data sets, and other resources.

The overlap here is particularly deep since, by their nature, IT assets are also configuration items. So, depending on our needs within each, we might bundle elements of both practices together, with the same colleagues and data management solutions handling each.

Alternatively, we might retain distinct asset management and configuration management practices, responsibilities, and information repositories. In this case, the challenge is avoiding conflicts and maintaining data consistency across our practices.

For instance, relying on integration tools to ensure data integrity or handling information relating to CIs within a federated solution.


## Benefits and challenges for service configuration management

ITIL is one of the leading frameworks for delivering IT solutions, but it’s not the only approach available to us.

It follows that in order to implement this effectively, we must also understand the benefits and challenges we’re likely to encounter in doing so.


### Benefits

ITIL outlines seven guiding principles for designing, managing, and delivering services. Helpfully, these also provide a starting point for understanding the benefits on offer when applying this thinking to individual processes.

These seven principles are:

1. Focus on value.
2. Start where you are.
3. Progress iteratively with feedback.
4. Collaborate and promote visibility.
5. Think and work holistically.
6. Keep it simple and practical.
7. Optimize and automate.

The key thing here is extrapolating these principles to identify the more granular business-level impact we’ll focus on by applying them within our configuration management practice.

This includes:

* **Reducing admin burdens on IT teams** - by prioritizing the most impactful CI information management tasks, we can reduce the amount of paperwork and manual data management required to support our service portfolio.
* **Enhancing decision-making and resource allocation** - thoroughly documenting the elements that underpin our IT services provides a strong basis for making more rational decisions about how we utilize these effectively.
* **Facilitating change and transformation** - understanding the actual state of our service configuration is a necessary precondition for all kinds of improvement projects.
* **Securing mission-critical information** - understanding which information relating to our CIs is sensitive allows us to take appropriate steps to safeguard this.
* **Future planning and capacity management** - understanding how and where our CIs are currently required in order to inform future decisions around demand for services.
* **Providing a basis for automation** - documenting our service provision as computable data objects in order to enable all kinds of automation solutions.
* **Promoting knowledge sharing** - assisting end users and IT colleagues by providing clear documentation around our service portfolio.
* **Boosting service quality metrics** - facilitating streamlined services, both in terms of resolution rates and lead times.


### Challenges

However, due to the centrality of configuration management to our wider ITSM efforts, implementing change is inevitably a fraught process.

As such, we must be cognizant of the potential roadblocks and challenges we’re likely to face along the way.

These cut across technical, financial, operational, and organizational factors.

The most common issues we’ll need to plan for include:



* **Handling complex service portfolios** - as our services and their constituent actions interact in complex ways, modeling the underlying data can be incredibly tricky.
* **Data centralization** - although much of the required data may already exist across the organization, centraizing this in an accessible location and format will often be highly challenging.
* **Defining priorities** - ITIL configuration management requires us to have a clear picture of which CIs provide the most value across the organization. We must then decide how to prioritize these, including the depth of information we need to manage relating to each.
* **Overcoming internal resistance to change** - as with any change initiative, adopting ITIL configuration management requires us to achieve buy-in from a range of internal and external stakeholders.
* **Combatting shadow IT** - our configuration management efforts are highly unlikely to succeed in cases where there is widespread use of undocumented or unauthorized IT resources across the organization.
* **Agility and responsiveness to change** - given configuration management’s centrality in our wider IT environment, it’s essential that we build agility into the underlying workflows and processes.
* **Monitoring success and ROI** - as configuration management largely facilitates value creation via other ITIL practices, it can often be difficult to demonstrate return on investment. This can also present an additional challenge for securing buy-in.

While none of these will necessarily be deal-breakers, we must still be aware of them in order to set ourselves up for success. 

We’ll see some practical steps we can take to sure up our configuration management efforts in the next step.


## Service configuration management best practices

As we stated earlier, most of the tasks that make up service configuration management can be characterized as data management workflows.

Recognizing this is a helpful starting point for thinking about the strategies that are available to us to maximize the impact of our efforts.

Here are some of the best practices we can rely on.


### Start with a defined scope

One of the guiding principles of ITIL is starting where we are. That is, beginning with a clear understanding of the state of our service delivery efforts rather than tearing these down and starting from scratch.

Following on from this, it’s critical to have a defined scope for what we want to achieve within individual practices, including configuration management. We can then build on this later as we progress iteratively.

We can think about the scope of our initiatives at a few distinct levels. These include initially focusing on a subset of:



* **Services** - beginning by documenting the CIs that relate to a group of services.
* **CIs** - focusing on another category of configuration items, such as hardware and devices.
* **Attributes** - initially gathering the core information about our entire estate of CIs and then adding detail later.
* **Business lines and vertical** - other aspects of the organization, such as departments.
* **Value-based prioritization** - focusing on the CIs that provide the most value, irrespective of their associated services or categories.

It’s also possible to apply combinations of these clusters, such as going after the highest-value hardware CIs.

While there’s no singular right or wrong answer here, the key is to determine the appropriate initial focus that will be most impactful in your organization, balancing your specific requirements with the IT resource available for meeting these.


### Align technology with organizational needs

Following on from this, we must have technical solutions in place that are suitable for our business requirements. As we said earlier, we have a few options here, including dedicated configuration management systems or more distributed solutions.

Both are valid. What’s important is to identify the option that’s most appropriate for our specific context. This requires us to take account of both our current needs and how these may change and scale in the future.

One key issue that influences this is the size and complexity of our configuration management data, along with where this is currently processed. 

For instance, it’s much easier to implement a formal CMDB with a relatively small, unitary data set, although more complex data doesn’t preclude this.

We’ll also need to take account of how our we interact with CI data. One element to this is how many users we have within our configuration management practice itself, and the complexity of the workflows involved.

On top of this, we need to factor in how users outside of our configuration management practice interact with this data. 

For instance, if we already have solutions in place to manage this as part of other ITSM processes, the disruption caused by moving data to a CMDB may not be worthwhile. In this case, we’d likely be better off with another solution to gain visibility into CI data.


### Focus on CI ownership and information governance

There are also several valid approaches to governance relating to CI data. The core question here is which colleagues ultimately have ownership and control over information within our configuration management practice.

ITIL does not take a prescriptive approach here, instead emphasizing the need to align control with the wider needs and resources available within the organization.

So, in the context of a large enterprise, we might have a dedicated team that is responsible for configuration management across the entire organization. In other cases, this might be bundled together with related practices, like change control or release management.

Alternatively, managing CI data can be a wholly distributed function, with teams responsible for specific kinds of assets or resources taking ownership of their own data within agreed-upon guidelines.

The priority is having clearly delineated roles and responsibilities for data ownership. Beyond this, setting governance policies is primarily a question of providing the most organizational value with the least resource incursion.


### Iterate and refine solutions

Lastly, all ITIL practices prioritize continual improvement as well as taking an iterative approach to implementation. 

We must apply this logic both to the data that we handle within configuration management, and the solutions and workflows we rely on to do this.

For the former, our priority is ensuring that the data we store around CIs remains suitable for supporting our wider ITSM efforts. For instance, over time, we may discover that there are gaps in our service model or that we store extraneous information about CIs.

In terms of specific configuration management workflows and solutions, our goal as we iterate is to identify and action opportunities to improve efficiency.

A huge part of this is reducing the labor costs associated with data management. For example, by removing or automating menial and redundant tasks.


## Tools and capabilities

Lastly, the effectiveness of our configuration management practice is highly dependent on the technology that underpins it.

At the highest level, there are three clusters of capabilities that we need to be aware of here. The first relates to initially auditing and documenting our CIs. 

Many organizations rely on dedicated automatic discovery tools to achieve this, although it’s also common to conduct discovery manually. For the latter, we’ll need appropriate data collection tools.

Then we have storage. As noted several times, we have a number of options here, including dedicated CMDBs or more distributed solutions. We’ve created a more in-depth resource on configuration management databases that covers this topic.

Lastly, we must facilitate interactions with our CI data. As individual types of CIs often have unique schemas and can be the responsibilities of different teams, this often necessitates a range of dedicated forms, CRUD tools, and admin panels.

The key, in any case, is to provide streamlined interfaces for performing defined data management actions that are suitable to the needs and preferences of the responsible end users.