---
date: 2024-08-10
title: Designing Change Management Processes
description: Learn how to design effective change management processes and apply ITIL thinking to drive organizational value.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Processes
    parent: changeManagement
    identifier: changeManagementProcesses
    post: change-management-processes
---

Managing change across our IT estate and service portfolio is probably the most impactful aspect of our ITSM strategy. This directly influences our ability to deliver individual services and control costs, risks, and workloads across our wider IT provision.

The IT infrastructure library (ITIL) is the dominant framework for managing change in enterprises and other large organizations.

It defines principles and standards that are used by IT teams across the globe in order to design and deliver services that drive organizational value.

In this resource, we’re covering how to design change management processes that adhere to ITIL’s core thinking, along with the specifics of how we can apply its core principles at each stage, from initially identifying demand for change to reviewing our implementation.


## What is change control?

Within ITIL, change control is the practice that governs and manages changes to our IT service provision.

A change is defined as any addition, deletion, update, or modification to any element that contributes to our IT services, such as a device, policy, human resource, software tool, workflow, or anything else that’s required within a service.

These elements are also referred to as configuration items (CIs).

Governing changes to CIs means determining which changes are authorized to go ahead. Managing this means analyzing, designing, and implementing changes to ensure that they are actioned effectively.

The goal of change control is to maximize the number of successful changes that we make to products and services by defining and enforcing processes to achieve our desired impact while minimizing the associated risks and costs.

In turn, this supports our wider service management efforts by providing us with a robust, streamlined approach to ensuring we can respond to changing requirements or implement key improvements across our service portfolio. 


### Types of change in ITIL

Given the broad scope of what change could mean, it makes sense that we are going to need to account for different kinds of changes within our process design.

Helpfully, ITIL offers a clear approach to categorizing changes.

Specifically, it lays out three distinct groupings of changes, distinguished by their potential impact, risk, and associated authorization needs.

These are:



* **Standard changes** - low-risk, regular changes that are required as part of defined service delivery and, therefore, require little or no authorization. For example, add a user to an existing software tool.
* **Normal changes** - irregular changes with varying levels of risk that are required to modify or update our service provision. The authorization steps involved are commensurate with the specific level of risk. For example, deploying a new feature to an existing software tool.
* **Emergency changes** - changes that are required to respond to a disaster, major incident, interruption, or other emergency. The priority is implementing the required changes as soon as possible so authorization processes may be expedited, but this should not undermine our normal controls. For example, rolling out a security patch in response to a data breach.

Each of these is handled slightly differently, requiring distinct models to manage change effectively, although ITIL does not go so far as to outline specific steps for each.

On top of this, it’s important to be aware that our change model will generally vary depending on the types of CIs individual changes relate to.

Broadly speaking, we’ll require different controls depending on whether our proposed change deals with hardware, software, processes, or other resources that contribute to our service delivery. These may also be the responsibility of different teams and colleagues.

We’ll flesh out our understanding of what this means in practical terms in the following sections.


## Structuring a change management process

As noted earlier, ITIL does not attempt to provide a rigid change management process that’s applicable in all cases across all organizations.

Rather, the idea is to provide teams with a framework for designing services that meet their unique requirements within the boundaries of the internal IT resources they have available.

In terms of structuring a process, however, almost all changes will follow a variation on the following steps. The details of what must happen within each of these can then be defined in order to suit the needs of specific kinds of changes, culminating in an effective change model.

At the highest level, here’s what this structure will typically look like.


### Proposal/request

The first step is identifying a demand for change. This is referred to as the proposal stage, as by the end, we’ll be ready to submit a formal change proposal or request.

Demand for change could stem from a need to:



* Satisfy our normal service-level requirements.
* Take advantage of an opportunity to improve our services.
* Respond to changing environments or requirements.
* Restore services after an incident or emergency.

As such, we might identify demand through a range of different channels. The key question for our change control process is which measures and workflows we need to put in place to facilitate this.

Related to the categories of changes we saw earlier, we must be aware of a few key inputs for triggering the proposal stage.

The first and most common is via a defined change request workflow. This is typically how we initiate proposals for standard or low-risk normal changes.

In terms of process design, we have two priorities here. The first is establishing which information we need to gather in order to process a request for a particular type of change. 

The second is providing experiences that are appropriate to the kinds of users that can make these requests. This could be within an existing ticketing workflow, or it could make use of dedicated request forms.

Other times, we might identify a demand for change via outputs of other ITSM practices.

For instance, during service level management or service financial management practices, we might determine that changes are required in order to meet our wider organizational goals. These typically lead to normal changes.

Alternatively, emergency changes are often triggered by incident, disaster, or information security management workflows.

By the end of this change, our specific change should be ready to be proposed or requested.


### Assessment and authorization

Once a request has been received, our priority is to determine if it should be implemented. There are two elements to this, which may be split into distinct stages within your change management process design.

The first is assessing the proposed change in terms of its potential impact, associated risks, costs, other resource requirements, and workload.

The extent of work required here varies according to the type of change at hand. 

For standard changes, we will typically only need to make a business case once. As long as each instance of a particular change doesn’t deviate from our change model, additional analysis shouldn’t be required. 

For instance, we wouldn’t perform an impact analysis every time we buy a laptop.

Business analysis, however, is critical for normal changes. By their nature, these are initiatives we haven’t undertaken before, so we need to understand what they will achieve relative to what they’ll cost.

Depending on the CIs we’re dealing with, the potential costs/benefits can relate to a range of key issues. Across the board, this will include financial and operational impacts, including workforce management.

Another aspect we’ll need to consider is security risks. However, this can play out differently for specific kinds of CIs. For instance, with software CIs, this could relate to introducing new vulnerabilities, but for information assets, it’s largely a case of maintaining access rules.

For hardware, we might be primarily concerned with maintaining services while we install or transition to new devices.

Notably, in the case of emergency changes, the same logic still applies in the sense that we still need to weigh up the relative costs and benefits. The difference is that we also need to balance this with the opportunity costs related to the root cause of the emergency.

In other words, the risks and costs associated with not taking action. 

Once the expected impacts and costs of the proposed change have been established, our next priority is authorization. This is the the point at which we make a decision as to whether or not the change will be implemented, according to established business rules.

Depending on the specific risks and impact we identified, this may our first task is routing our change request to the appropriate authorization flow. The greater the risks and costs involved, the higher our authorization requirements will be.

Our task is to design appropriate flows based on our own organizational needs.

An effective change authorization flow has two elements:



1. **The change authority** - whether this is a dedicated change manager, a change authority board, a technical colleague, an IT manager, or any other team member responsible for approving a request.
2. **The change criteria** - the specific business rules that we enforce to determine which changes should be approved.

By the end of this stage, approved changes will be ready to be added to our change schedule.


### Scheduling and building

Once a change is approved, it can be scheduled for implementation.

The first task here is adding this to our change schedule. This is a centralized record of when our active changes are planned, including how the required tasks and dependencies will be managed. 

There are a couple of options for how this is handled. On the one hand, we might have a singular, unified change schedule from which all changes are managed.

On the other, we might rely on existing workload management tools within the delivery team responsible for a particular type of change. For example, utilizing existing project boards for software changes or procurement flows in the case of changes to our asset estate.

The challenge is then surfacing the relevant data from each of these distributed tools to achieve appropriate visibility for our change management team.

Depending on the scale and complexity of the change at hand, we might account for its individual constituent tasks differently within our change schedule.

ITIL recommends this as a best practice but does not strongly favor project methodology over another. Instead, it recognizes the relative strengths, weaknesses, and applicability of dominant frameworks like Agile and Waterfall to specific situations.

Once scheduled, we can move on to building our change. This comprises all tasks that may be required to put a solution in place, including software development, process improvements, asset procurement, and more.

We’ll typically then test that our changes have the desired impact and work as expected, before seeking authorization to push them to our live environment, subject to any controls we have in place around doing so.


### Deployment

Deployment means rolling our changes out to real-world service users. Of course, this can take countless different forms in the case of different changes.

In terms of our change management process design, the most important consideration is accounting for the kinds of tasks required to deploy changes relating to specific classes of CIs.

That is, the specific work involved in deployment can look quite different, depending on whether this concerns hardware, software, information resources, processes, or other elements of our service delivery.

A key challenge here is planning for associated work required for various kinds of changes. This can include the logistics of physical installations, providing end-user training on new software and processes, handling transitions and changeovers, and managing service continuity.

Each of these concerns becomes a greater priority the more complex a change is or, the greater the centrality of the IT service it relates to.

As such, the important thing in terms of change management process design is building these considerations into our change model for specific classes of CIs, both during the impact assessment and change scheduling stages.

By the end of the deployment stage, our changes should have been implemented according to their defined specifications.


### Review and closure

Lastly, change management requires us to document, review, and learn from any updates, additions, or deletions relating to our core IT services.

Closure here refers to marking a particular change as completed within whichever system we’re using to plan and manage this.

Post-implementation, we have several priorities.

The first is reviewing the experience of various stakeholders involved in the change control process, including those responsible for proposal, planning, and deployment. 

The goal here is to understand the success of our change initiative at the level of our fulfillment process. For instance, did we encounter unforeseen roadblocks or account for costs and labor that ended up being redundant?

This can inform our future change control efforts.

Secondly, we must review and monitor the change itself in terms of the extent to which it’s achieving our desired impact. For minor changes, this could be relatively self-evident. For example, acquiring end-user devices or software tools.

In other cases, we may be able to set up automated monitoring to establish our level of success here. For instance, around longer-term network capacity, uptime, or security metrics relating to changes to our hardware estate.

Alternatively, some service quality metrics may require more extensive analysis and review work to establish our actual impact. For example, if our changes are focused on user experiences or operational efficiency, it will typically take more effort to surface the relevant insights.

In all cases, the key is establishing clear records of outcomes as part of our change management process design. These can then inform future decision-making, as well as providing inputs for our knowledge management and configuration management practices.


## Applying ITIL thinking to change management processes

Once again, ITIL does not lay out detailed processes that we should implement to manage change in our IT service provision.

Rather, it focuses on offering us guidance for designing and implementing change control processes that provide organizational value in our own unique context.

Therefore, we must understand the practical strategies we can rely on to implement ITIL’s core principles within the structure of the change management process we outlined in the previous section.


### Integration with related ITSM practices

A central tenet of ITIL is recognizing and accounting for the fact that our service delivery practices will inevitably interact in complex ways. This is particularly important in the context of change control, given its direct influence on how we manage all other services.

While we can’t predict every possible point of interaction between practices, when designing change management processes, we must identify and plan for the key areas where overlap occurs.

The first and most obvious is in relation to our service configuration management practice. Within ITIL, this is the process that deals with managing information relating to CIs that contribute to our services.

Therefore, at the point of initiation, change requests must be linked to appropriate records in our CMDB. At each stage of our implementation, we must also build in measures to ensure our CI data is kept up to date with our changes as they progress.

Overlap with other ITSM processes is particularly common at the outset of change initiatives. One key issue here is accounting for the fact that service users may not always be able to reliably distinguish between change requests and other related submissions.

Therefore, in addition to dedicated change request tools, we’ll need to establish effective rerouting solutions within our other points of user interaction, including ticketing systems, incident report forms, asset request rentals, and other data collection tools.


### Optimizing and automating change controls

Another one of ITIL’s core principles is the idea of optimizing and automating service delivery processes. In the context of change control, this largely relates to how we can eliminate menial tasks that may act as roadblocks during change initiatives.

The key aspect of optimization is implementing the minimum viable number of controls to adequately enforce underlying business rules. For instance, by establishing clear roles within authorization processes rather than requiring excessive redundant steps.

At a more practical level, we can also think about the strategies we can implement to streamline individual service-user interactions. A key example of this would be providing self-service tools for standard changes or normal changes that require lower levels of authorization.

To the extent that it is possible, automation should be built into all stages of our process design.

For change management, the obvious priority is automating simple approval workflows. For example, automatically authorizing standard changes where they’re proposed by certain colleagues or fall within a defined financial threshold.

On top of this, many organizations choose to rely on automation tools to handle a wide variety of deployment, monitoring, release management, communications, admin, and other common workflows while managing change.


### Establishing and handling change control data

While it does not take a firm stance on the specific tools that should underpin change management, ITIL does highlight the importance of adequately recording and communicating change across the organization.

At its core, this is essentially a question of how we manage data relating to change.

While some organizations opt for a dedicated change management database, another one of ITIL’s central ideas is starting where we are and progressing iteratively.

It follows from this that we may be as or more able to meet our needs with existing solutions, without incurring the cost and disruption of creating and migrating to an entirely new database, except in situations where centralization is a high priority in and of itself.

The principle here is that we can more effectively establish the data we need to manage change gradually through normal service interactions.

As well as managing the progress of our change initiatives, this data is invaluable for communicating developments with the wider organization. 

For example, to populate knowledge bases, project updates, dashboards, or internal communications with relevant information.


### Clarifying roles and responsibilities within change models

Arguably, the most important aspect of how we design change models is the roles and responsibilities that are enforced at each stage. In the most basic terms, we can think of this as who can take certain actions across our change control process.

The goal here is to balance efficiency with oversight and control.

For example, which colleagues can propose or approve a particular type of change?

The key here is ensuring that the appropriate change authority is selected for a given request.

ITIL highlights the fact that it is generally best practice in high-velocity organizations to distribute responsibilities for authorizing change. 

The rationale here is that we can make more effective use of resources, including contextual knowledge relating to individual tools, services, and CIs, by delegating relevant approvals to the most relevant external teams.

However, this does not apply in all cases, as it must be balanced with the need for centralization and control relating to higher-risk changes. Additionally, certain changes might have a wide-reaching, complex impact across multiple teams and domains.

As such, in certain situations, we’ll need to escalate requests to a more centralized change authority, typically in the form of an interdisciplinary change authority board.


### Adopting a continuous improvement mindset

Lastly, ITIL requires us to frame our change management processes within the wider context of continuous improvement.

This is the idea that we should focus on identifying and actioning opportunities to improve our service provision on an ongoing basis.

On the one hand, change control has an inherent role to play in facilitating this, in the sense that it enables us to implement improvements successfully.

On the other, we must also apply the logic of continuous improvement to our change models.

The crux of this is that with each successive change initiative, we should be uncovering and documenting insights about what works and what doesn’t.

These can then be applied throughout the course of future change initiatives to better support our core goal of successfully driving changes that deliver organizational value while minimizing the impact on IT resources.

