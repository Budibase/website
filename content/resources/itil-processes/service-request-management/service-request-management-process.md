---
date: 2024-08-10
title: Designing Service Request Management Processes
description: Learn to design sleek, efficient service request management processes and apply ITIL’s core principles.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723107292/cms/ticketing-system/ticketing_systems_blog_post_v2_ylncwt.png
draft: false
type: resources/glossary
layout: single
---

Service requests are at the heart of how we deliver IT capabilities across organizations. These are the interactions that enable on-the-ground colleagues to access the services they need to carry out their own daily tasks.

As such, the processes we put in place to manage requests, from gathering data to following up on service delivery, have an outsized impact on the efficiency of just about all regular business activities.

Now on its fourth version, the IT Infrastructure Library (ITIL) is a framework designed to enable organizations to design IT services and processes, with an emphasis on maximizing their underlying business value.

In this resource, we’re covering how service request management process design is handled within ITIL.

Let’s start with the basis.


## What is a service request?

ITIL defines a service request as the initiation by an end user of an agreed, predefined service action. Service request management is the name of the ITIL practice that handles these in an efficient, user-friendly manner.

In other words, the idea is to enable service users to request certain actions and resources from the IT team.

Service delivery colleagues must then respond to this request. This can necessitate a range of actions, including analysis, approval workflows, and scheduling, along with the actual work associated with delivering the service itself.

The process for managing a particular type of service request is the culmination of these tasks, along with the sequence they follow and the business rules that govern them.

The goal is to ensure we’re providing the agreed-upon service levels and quality while also optimizing the associated IT resource incursion.


### Types of services requests

An inherent challenge of service request management is accounting for the breadth and variety of actions that service users might be able to initiate.

IT services can differ greatly in terms of the specific assets, resources, or capabilities they relate to, as well as the associated risks, costs, business impact, and controls we put in place to manage them.

Therefore, in order to design request processes, we must first understand how we can categorize our services. 

While there’s plenty of scope for variation between organizations here, ITIL points to the following broad clusters of service requests:



* Requests for basic service delivery actions, such as password resets or replacing consumables.
* Requests for information, including how to carry out defined tasks.
* Requests for provision of resources, including acquiring end-user software and devices, or providing some other capability.
* Request for access to a resource, including renting existing devices or accessing a data set.
* Feedback relating to service delivery, whether positive or negative.

As you can see, these are based primarily on the nature of the service the user is trying to access, including the resources or tools it concerns, as well as what must be done with this in order to fulfill the service.

However, this is only the highest level of categorization. We must also be cognizant of how service requests within each of these clusters can vary.

From the point of view of process design, this largely relates to our internal requirements around governing how users interact with different elements that contribute to our service delivery, also known as configuration items (CIs).

Importantly, CIs may have very different levels of financial or operational value and will, therefore, require different controls to account for associated risks and costs. 

For instance, within an asset provision request, we’ll likely need to enforce tighter controls if we’re dealing with a piece of network infrastructure than we would with an end-user device such as a laptop.

As such, we must also build these considerations into our request management process design within each of the categories that we outlined above.


## Structuring a service request management process

Next, we can begin to think about the specific steps that comprise a service request management process.

As we saw in the previous section, the exact actions and rules that are required to implement an effective request flow will differ for specific services and the underlying CIs.

Despite this, request management processes will typically follow the same basic outline. In fact, ITIL explicitly highlights that reusing existing request patterns and workflows is a key part of implementing new services successfully.

In other words, we can utilize a common structure for the majority of service requests. The constituent actions, decisions, and logic contained within each stage of this can then be tailored to the needs of specific services.

Here’s what this looks like.


### Request submission

Every service request management process begins with an initial submission. In the most basic terms, this is any interaction between an end user and the IT department that seeks to initiate a service action.

In prospect, this could be any form of communication, including unstructured tools like email or even in-person conversations. In practice, though, this is almost always most effective when handled using service catalogs, dedicated request forms, or IT ticketing tools.

This is because there are two key elements that we need to control when it comes to facilitating request submissions.

The first is handling internal roles within our service portfolio. That is, enabling colleagues to submit requests to initiate services that are appropriate to their roles and responsibilities. For example, whether or not a particular colleague has permission to rent a specific device.

The second is the need to gather structured data in relation to service requests. So, for each service action that we want to be accessible via a user submission, we must have a defined schema of the data we require to action this request.

This is determined by the information that’s required by IT teams in order to first authorize and then fulfill the request.

As such, the extent of this could vary greatly depending on the business rules that we determine when designing the following stages.

For example, a simple request for a basic service delivery action, like renewing a printer cartridge, might require very little authorization, and all the fulfillment team needs to know is which printer is affected.

By contrast, the request schema for a more complex request for provision of resources will typically feature heightened information requirements, both in terms of authorization and fullfillment.

For instance, a user might request access to a complex data set that requires significant effort to surface and collate. In this case, our request schema will likely need to take into account a range of factors that serve as inputs for both authorization and fulfillment.

These might include considerations such as data exposure rules, the use cases for the requested assets, the timelines for when they’re required, the underlying business needs, and more.

The overarching goal of the request submission stage is providing service users with a streamlined experience for submitting the information that’s required to initiate the service actions they’re entitled to access.

So, by the end we should have all of the information we need to process this request in a format that’s consistent with our needs in the subsequent steps.


### Assessment and authorization

The next step of the service request management process is assessment and authorization. This is the point at which our IT colleagues determine how to respond to the submission. 

The goal here is to enforce defined business rules surrounding which service requests are approved and prioritized.

This requires two steps. Firstly, we must assess incoming submissions to determine whether the requested actions are appropriate for the underlying needs of the user and consistent with our agreed service specifications.

Secondly, on the basis of this assessment, we must determine whether or not to proceed to the fulfillment stage.

Therefore, for the purposes of designing request management processes, there are two key issues we must address with respect to specific services, actions, or CIs.

These are:



1. **Assessment criteria **- the rules that determine whether or not a request is approved.
2. **The approval authority **- the colleagues or other actors responsible for approving a specific type of request.

Assessment criteria can vary hugely depending on the nature of the request at hand, potentially including technical, operational, financial, and other considerations.

Ultimately, these are used to balance the provision of effective services with the resources incurred by the IT team in doing so. 

So, we may have rules based on the technical requirements of delivering the requested services, as well as more situational criteria like budgets or agent availability. The specific weighting of each of these will vary from one service request to the next.

For instance, accepting a support ticket could largely be related to availability, whereas providing new software or hardware capabilities will have much higher assessment criteria.

The colleagues responsible for authorizing specific service requests must be determined with relation to the specific service in question on the one hand, and the associated risks and costs on the other.

So, service requests will typically be authorized by the teams responsible for their fulfillment, but the seniority of the specific actors tasked with authorizing requests may still vary within this.

For example, our asset management team might be responsible for all service requests relating to asset provision and rentals. However, we may rely on technicians to approve lower-value requests, while their managers must authorize requests with higher associated costs.

By the end of the assessment and authorization stage, we will be in a position to begin fulfilling approved requests, including scheduling, if required. Alternatively, where a request is rejected or queried, we can communicate the reasons for this to the original submitter.


### Request fulfillment

Fulfillment means carrying out the requested service actions in accordance with the agreed service level and quality standards. This may be implemented immediately or scheduled for future delivery, depending on resource availability.

We must have agreed expectations in place around the deliverables and timelines that apply to the services that the user originally requested. The goal of fulfillment is to ensure that these are achieved.

In the context of designing service request management processes, our priority here is standardizing experiences for end users and delivery colleagues alike.

This means that, to the extent that this is possible, the same steps should be followed regardless of which colleagues is assigned to the required tasks, although this isn’t necessarily achievable in all cases.

The challenge here is identifying and accounting for all aspects of fulfillment within our request management processes for specific services. 

For some actions, like triaging a ticket or replacing consumable hardware, this could be a relatively self-contained, consistent flow.

However, other service requests can be more complex to fulfill. For example, we may encounter additional needs around training, logistics, transportation, personalization, or business analysis when delivering high-value regular services, depending on the CIs involved.

This could potentially introduce elements of overlap with other ITIL practices within our service request management process, an idea we’ll return to later.

By the end of the fulfillment stage, the actions that were initially requested by our service user should be carried out according to agreed specifications.


### Review and closing

At this point, our request submission can be marked as closed. However, the service request management process does not end once fulfillment has been completed.

Rather, we must build the need to review experiences into our process design.

Specifically, our goal here is to determine how our request process has contributed to our wider service delivery goals.

We can typically measure this in a couple of different ways. First of all, we should provide users with opportunities to provide feedback around their experiences. The idea here is to determine whether our efforts to enable them to access services are effective.

This will be largely qualitative. So, we want to measure things like their perceptions of how well the service met expectations or their general satisfaction with the outcomes.

Second, we must also review and monitor more quantitative metrics relating to our broader service goals. For example, tracking how long it takes to track a request through each stage of our management process.

Similarly, we must monitor our request management process in terms of how effectively we’re implementing the underlying business rules. For example, verifying that only the requests that meet our assessment criteria are authorized in practice.

In turn, this enables us to continuously identify areas where issues or optimization opportunities may be present, helping us to better serve our service users.


## Applying ITIL thinking

Now that we’ve established the broad structure of an effective process, we can start thinking about how we can apply ITIL core ideas to our request management flows for specific services.

As we know, ITIL aims to empower IT teams with a roadmap to design effective services based on their own unique requirements by providing principles and best practices for driving organizational value through IT service provision.

Here are some of the key ways we can apply these in the context of handling service requests.


### Optimization and automation

One of ITIL’s central principles is the need to optimize and automate. In this context, optimization means more accurately enforcing our underlying business rules with fewer manual inputs.

There is a range of common strategies that teams can rely on to achieve this.

As we alluded to earlier, ITIL emphasizes the need to minimize the number of approval steps required to effectively enforce the related assessment criteria. The key is that, with standardization, we can streamline our processes by removing redundant steps.

Similarly, where possible, teams should prioritize automating simple authorization actions or even pre-authorizing certain submissions. 

For example, many of our assessment criteria will be based on easily computable values, such as financial data or agent availability. Where this is the case, it is generally preferable to rely on automations rather than manual approvals.

Other key opportunities for automation within our request management process designs include handling communications and status updates, workload management and task scheduling, and rerouting submissions to related ITIL practices.


### Handling overlap with other ITIL practices

Another of ITIL’s guiding principles is that we must work holistically to develop effective internal processes. This stems from a recognition that there’s inevitably going to be a huge amount of overlap between our various ITSM practices.

So, in order to develop effective service management flows, we must be aware of the specific points of intersection with related processes at each of the request management stages we outlined above.

For our purposes, this is clearest at the point of initial submission. The challenge here is that service users may not be able to distinguish between various kinds of IT requests. For instance, understanding what constitutes a service request, asset rental, incident report, or support ticket.

This is especially problematic in situations where these are handled by separate teams. 

We have a couple of options for handling this. We may opt to use a single point of submission for related processes. For instance, handling all user interactions through our service desk or ticketing system. 

We can then enable level-one support colleagues to triage and assign requests to appropriate teams.

Alternatively, whether we rely on a single point of contact or dedicated tools for submitting requests, we may consider utilizing automatic rerouting between ITSM practices. For instance, transferring submissions to the appropriate team based on the CIs involved.

Of course, request management also has a key role to play in ensuring the effectiveness of our wider service portfolio. That is, streamlined access to agreed services is a key aspect of driving efficiency, cost-effectiveness, and organizational value across all ITSM practices.


### Determining internal roles and responsibilities

One of the most challenging aspects of any process design initiative is establishing which colleagues are permitted to take specified actions or access certain data.

This includes which users can submit requests for a given service action, who can authorize these, and which colleagues are responsible for fulfillment.

Within ITIL, the priority is establishing internal roles that reflect both our organizational needs in terms of service levels and the IT resources we have available to meet these.

At the highest level, we must decide which team is responsible for managing service requests. For instance, this could be a dedicated function, a responsibility for our service desk, or it might be shared between the teams that are responsible for handling specific services.

ITIL isn’t necessarily strong on recommending one of these approaches, instead highlighting the need to base this around the needs of individual services, the resources we have available, and the current state of our IT operations.

For instance, service requests might be handled by a dedicated team in very large organizations. However, in small organizations where this is already managed effectively by other non-dedicated colleagues, it’s likely not necessary to create an entirely new function.

Another aspect to consider is what strategies we can use to that only colleagues with appropriate permissions can initiate requests. For instance, utilizing role-based access control within our service catalogs or ticketing tools.

Lastly, a critical element of any successful service request process is determining the appropriate approval authority. 

The key here is proportionality. This means that our choice of colleagues responsible for the relative importance and associated costs of the service action in question. 

ITIL highlights the fact that requests are typically handled most efficiently by the on-the-ground colleagues with the most experience and technical knowledge of the related CIs, including with regard to authorization.

However, in some cases, there will be heightened financial, legal, operational, or risk-management concerns that take precedence over this, meaning that a more senior authority is appropriate.


### Service request data management

Another key consideration is the solutions we put in place to manage the data that underpins our request management practice. In very high-level terms, there are three key elements to this.

The first relates to how we collect data. The challenge here is the need to gather consistent, detailed information relating to service requests in a defined schema, with the equally important need for sleek, streamlined user experiences.

The key to this is providing experiences that are appropriate to the needs and technical knowledge of colleagues initiating requests, whether through dedicated request forms, intranet tools, ticketing systems, or service catalogs.

The second element of request data management is how and where we store and process submitted data. There are a few equally valid approaches here. In some organizations, all service requests are handled in a centralized database.

Often, this is part of a wider ticketing or support desk platform, although some organizations might utilize a dedicated database for request submissions.

Alternatively, it’s common for organizations to handle request data within existing platforms across the organization related to specific services. For instance, existing asset management, configuration management, support ticketing, and other platforms.

Regardless, the third element is enabling appropriate colleagues to interact with our submission data at various stages of the request management process. 

This includes approval apps, CRUD tools, admin panels, dashboards, and other key interactions with our data as it progresses through a defined workflow.