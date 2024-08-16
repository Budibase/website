---
date: 2024-08-10
title: Designing Configuration Management Processes
description: Use ITIL’s core principles to design robust, efficient configuration management processes.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Process
    parent: configurationManagement
    post: configuration-management-process
---


In large organizations, configuration management is generally the aspect of IT delivery that has the most fundamental, far-reaching impact across our wider service portfolio.

By providing a standardized, repeatable approach to managing the information that underpins our IT estate, configuration management serves as an important basis for all other ITSM activities and processes.

ITIL is the leading framework for delivering IT services in an enterprise context, with a particular focus on optimally using IT resources in order to drive organizational value through internal service delivery.

In this resource, we’re covering how to design and implement effective configuration management processes in the context of ITIL’s underlying principles and best practices, including practical tips for how to implement these in the real world.


## What is service configuration management?

Within ITIL, service configuration management is the practice that deals with information about how services in our portfolio work. 

More specifically, this means ensuring that up-to-date, reliable information about our services is available to IT colleagues and end users, whenever it is needed.

Services are made up of a variety of elements, including technical solutions, processes, policies, tools, hardware, and other resources. Within configuration management, any element that contributes to a service is known as a configuration item (CI).

Therefore, our configuration data is largely made up of information relating to our CIs as well as how these interact in order to form the wider service.

Ultimately, the goal of configuration management is to enable other ITSM practices to work effectively by providing each one with the information it’s dependent on.

Of course, this will vary across different types of CIs as well as the processes they contribute towards.

Therefore, effective configuration management processes require us to understand the information needs of various stakeholders across our service portfolio, along with the appropriate measures for storing, updating, and providing access to this.


### Types of configuration items

As we noted a moment ago, any element that contributes to our regular service delivery can be characterized as a configuration item. At the same time, what these are and how they’re used will inform the specific information we need to process relating to them.

Therefore, it follows that in order to design and implement effective configuration management processes, we need a clearer understanding of the types of CIs we’re likely to be dealing with.

This is especially important, given the potential breadth of our earlier definition.

Broadly speaking, we can place most CIs into one of the following categories:



* **Hardware** - including end-user devices, network hardware, peripherals, and other assets.
* **Software** - including SaaS licenses, custom solutions, libraries, code repositories, and other software resources.
* **Networks and cloud environments** - elements contributing to our on-prem or cloud environments.
* **Data and information resources** - databases, views, reports, spreadsheets, files, and documents.
* **Facilities** - including buildings and other infrastructure required for IT service delivery.
* **People** - service users and delivery colleagues, as well as other stakeholders like vendors, suppliers, contractors, or any other personas required to deliver our services.
* **Policies, procedures, and processes** - including business rules, data governance, and more.
* **Contracts** - including our relationships with a variety of stakeholders. For example, support arrangements with vendors.
* **Services** - one service can typically be dependent on several others. These dependencies must be handled in the same way we’d manage any other CIs.

Of course, each of these also includes a great deal of scope for variation. For instance, our information needs relating to end-user devices and data center infrastructure, two types of hardware, are likely to differ greatly.

Therefore, it’s vital to have a clear picture of the specific data points we require about specific kinds of CIs in order to manage these effectively.


## Structuring a configuration management process

Next, we can think in more detail about the more granular tasks involved in service configuration management.

While this will vary across specific situations, our high-level outline of what’s involved won’t change very much.

That is, whatever decisions we make elsewhere in our configuration management process design, we’ll typically follow the same basic structure.

This is made up of the following stages.


### Planning

Planning means assessing and documenting our needs. This includes identifying what we want to achieve through our service configuration management, how we’ll achieve this, and the level of information control we require around specific services.

Within ITIL, it’s generally recommended to divide major IT projects into smaller, more manageable tasks.

So, while detailed information about CI data across our whole organization could naturally be beneficial, we can’t reasonably expect to achieve this overnight. Rather, there’s a clear need to prioritize, either in terms of distinct services or groups of CIs.

For instance, we might focus on our mission-critical IT services at first. Alternatively, we might prioritize high-value hardware across our entire service portfolio.

We’ll also need to consider the level of configuration management that’s required for various CIs. That is, the extent of information we need to store and process relating to elements contributing to our services.

This is another area where ITIL provides clear guidance. Specifically, it highlights the relationship between the scale and complexity of our data and the costs associated with maintaining it.

In other words, the more information we store on individual CIs, the more time and effort it will take to keep this accurate and up-to-date.

Therefore, ITIL emphasizes the importance of planning our information needs around the goals of related services in terms of how they deliver organizational value.

At a minimum, we’ll always need to document the CIs that make up a given service, as well as mapping the relationships between them. 

The specific attributes that we store about each CI will then vary, as we’ll see in the next step.

By the end of the planning stage, we should have a clear idea of what we’re hoping to achieve through configuration management, along with an outline of the information we’ll focus on to do so.


### Identification

The next stage is identification. This is the point at which we establish the more granular information that we need and begin documenting it. At this stage, we’ll also outline the lifecycle of our CIs in terms of the information controls we’ll put in place.

The first step is defining and classifying CIs. This means identifying the specific instances of CIs that are present in our service estate, whether through a manual inventorying process, automated discovery, or data gathering through normal service delivery processes.

We’ll discuss these options in more detail a little later.

We can then determine the data schema that’s appropriate for each of these. This must be informed both by the specifics of the CI in question and our needs around it within various services and other ITIL practices.

While it’s difficult to generalize about the needs of specific classes of CIs here in terms of the attributes we’ll store, what’s important to recognize is that individual internal processes will typically require different information relating to the same CIs.

For example, with an end-user device like a laptop, various teams might need information relating to its financial value, technical specifications, service history, or current deployment location.

However, ITIL highlights the fact that much of this information will already exist across the organization. For the purposes of service configuration management, the challenge is exposing and centralizing this, an idea we’ll return to later.

Another part of the identification process is determining the configuration lifecycle of specific CIs. Essentially, this comprises all of the data management actions that can be taken relating to our CIs through normal service delivery.

In other words, mapping how elements that contribute to our service delivery are used in terms of their data schemas, along with how similar changes to interdependent CIs affect one another.

By the end of this stage, our configuration data should be in place in an appropriate storage solution. This might be a dedicated configuration management database or a more distributed solution comprising several service-specific platforms, as we’ll see later.


### Control

The control stage of the service configuration management process comprises all of our efforts to maintain CI data, keeping it available, accurate, and up-to-date.

One element of this is implementing appropriate workflows to handle the available actions that we identified in the previous step. Of course, this can take a huge variety of forms. 

On the one hand, we need to put measures in place to ensure that changes to configuration data across our service portfolio are consistently reflected in our master record, including appropriate integration, data pipeline, and automation solutions.

On the other hand, we must facilitate end-user interactions with our data in a controlled manner based on the needs of different service users and IT colleagues across the organization.

As a result, the control stage of our service configuration management process also requires us to develop and implement effective governance policies relating to our CI data.

We can think of this at a few key levels, including our data access control policies, as well as any processes we put in place to handle data migration, auditing, compliance workflows, and more use-case-specific controls relating to individual CIs.

Ultimately, the goal of the control stage is to minimize the deviation from defined standards relating to our CI data during normal service delivery. In turn, this ensures that our CI data remains secure, reliable, accessible, and accurate.


### Status and reporting

At a very high level, the status and reporting stage of the service configuration management process aims to keep track of the current and historical state and usage of our CIs.

As a CI moves through its lifecycle, it’s crucial to track, document, and report on its status.

This serves several key purposes. First of all, it enables IT teams to benchmark the extent to which the controls identified in the previous stage are complied with. For instance, deviations from expected statuses can be indicative of compliance issues.

In turn, this enables us to assess the success of the configuration controls we developed in the previous step.

At a more practical level, status reporting is also a crucial part of how we provide up-to-date information relating to individual CIs in terms of their current, real-world deployment and usage.

This is a crucial part of how we provide reliable, up-to-date CI data to the users who need it.

For example, if our team was dealing with an access request for a particular software tool, they’ll need to know how our existing licenses are being used in order to determine how to proceed.

This isn’t possible without adequate access to information on the status of relevant CIs - in our case, the software licenses. 

Reporting on CI statuses also provides a vital input to a range of interrelated ITIL practices, especially around planning, capacity management, financial management, and performance monitoring.


### Verification and auditing

The last element of an effective service configuration management process is verification and auditing. As the name suggests, this means applying a systematic approach to ensuring that our CIs are configured correctly.

Whereas in the previous step, we were concerned with instances where the status of CIs in our configuration management database deviates from expected values, our goal here is to identify where the real-world state of CIs differs from the data we have stored about them.

Discrepancies here can greatly undermine all other aspects of service delivery by undermining the utility of the configuration data that we rely on.

In addition to discrepancies between our records and the real statuses of CIs, verification also has an important role to play in bringing shadow IT under our control and governance.

That is, in the course of our verification and audit efforts, we’re likely going to discover elements that contribute to our service delivery that we hadn’t previously accounted for. 

We then face a decision as to whether or not we formalize these and include them in our configuration management practice or put measures in place to prevent their usage.

Practically speaking, there are two clusters of strategies we can rely on to verify and audit our CI data. Of course, one of these includes scheduled, large-scale audits of our CIs to ensure validity in our databse. For example, in the form of an inventory audit or equipment inspection.

However, these kinds of verification methods are typically costly, so it’s important to minimize our reliance on them.

Therefore, to the extent that it’s possible, we should aim to build CI data verification into normal service delivery processes. The goal here is to enable us to achieve the same results in terms of verifying our data with a lower manual workload.

For example, building verification steps into key aspects of other ITSM practices, including change control, release management, asset rentals, or service level management.


## Applying ITIL thinking

With a clear picture of the general structure of an effective service configuration management process, we can move on to how to implement ITIL’s underlying principles across the various stages of this.

Again, ITIL does not prescribe a rigid process that can be uniformly adopted by all organizations. Instead, its purpose is to empower IT teams with the principles and best practices that will enable them to develop processes that are appropriate for their unique contexts.

Here are the most important practical ways that we can reflect this in the context of configuration management.


### Handling configuration management data

As we alluded to earlier, service configuration management is primarily concerned with how we manage data relating to our service portfolio. Therefore, one of the most impactful decisions we can make around our process design is how and where we store and process this data.

ITIL highlights a couple of options here which may be equally valid in different circumstances.

Many organizations opt for a centralized configuration management database (CMDB). As the name suggests, this means handling all configuration data across the entire organization within a single master solution.

While this may provide certain security and control-related benefits in very large organizations, especially where CI data is particularly sensitive, it can also introduce unnecessary costs in terms of establishing and maintaining our data.

Because of this, most organizations rely on one of two distributed approaches. 

One of these is creating a federated CMDB, exposing distinct views to appropriate teams. In this case, the CMDB still acts as a centralized source of truth, pulling required data from external sources as and when it is required and combining it with relevant internal data.

The other is relying entirely on distributed solutions for managing configuration data within existing service delivery tools. For example, handling asset management CIs within our asset management systems.

Which of these is the most effective depends on a range of factors, including security considerations, our internal resources, and the present state of our IT operations.

Regardless of our data management solutions, however, ITIL emphasizes the overarching need to document links between interrelated CIs and provide accurate, up-to-date, reliable data to stakeholders as and when it is required.


### Designing discovery processes

ITIL’s guiding principles include the idea that we should start where we are and progress iteratively when seeking to implement new ITSM processes. One aspect of service configuration management where this is most apparent is CI discovery.

Our priority here is balancing the time and effort required to document CIs with the organizational value that we can achieve in doing so.

We can apply this logic both at the level of selecting which data to gather and establishing a process for collecting it.

One common challenge that ITIL highlights the importance of avoiding is handling excessive or redundant data within our configuration management practice, with insufficient detail on the relationships between these that contribute to effective service delivery.

Accounting for this requires us to prioritize the specific CIs and their constituent attributes that we include within discovery.

ITIL also highlights the fact that, while audits and inventorying have a role to play in CI discovery, it is generally not optimal to rely solely on these methods.

Instead, we can often more cost-effectively reach the same outcomes by conducting discovery through day-to-day service delivery processes. 

For example, building workflows that enable data collection through existing user interactions, such as service requests, asset management, ticketing submissions, or other on-the-ground practices related to particular CIs.


### Managing interactions with other ITIL practices

Another one of the fundamental ideas within ITIL is that we must work holistically to account for the inevitable, complex interactions between various ITSM practices. 

As such, it’s vital to understand the areas where this is most likely to occur with respect to configuration management. As stated already, configuration management facilitates value creation across all other areas of our service portfolio.

However, we must also be cognizant of more complex points of interaction.

The other ITIL practice that concerns us the most in this regard is change control. This deals with authorizing and managing changes to our IT services. As such, like service configuration management, it is largely concerned with managing updates to our CI data.

As such, we must have clear solutions in place to ensure that we align these practices, including establishing clear responsibilities for various aspects of our CI data across teams, as well as rules for determining which changes impact our master records.

We can see a similar impact with respect to more specific subsets of CIs in relation to our asset management, release management, knowledge management, and information security management practices.

How we handle this largely depends on how we choose to delegate responsibilities for specific aspects of service configuration management across our service portfolio.


### Roles, responsibilities, and data ownership

Lastly, in order to develop effective configuration management processes, we must adequately enforce appropriate internal roles and responsibilities.

We can consider this at two distinct levels.

The first is establishing data ownership. That is, which specific teams or colleagues are ultimately responsible for various aspects of our CI data. ITIL points to a few distinct approaches to this.

On the one hand, many large organizations have a dedicated configuration management team to handle this on a company-wide basis. In other cases, this may be bundled together with related functions, particularly change management and deployment management.

Alternatively, in many organizations, managing data around configuration items is the responsibility of the relevant functional team.

Within any of these options, we must also have clearly defined roles and responsibilities in place with regards to the specific data exposure and permitted actions assigned to various colleagues within workflows.

This enables us to put systems and tools in place to facilitate and streamline the actions that are required by various users in their daily roles without undermining the consistency, validity, or other governance rules relating to our CI data.
