---
date: 2024-08-10
title: Change Management Software
description: Change management software comprises all of the tools we rely on to handle additions or updates to our IT estate.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software
    parent: changeManagement
    identifier: changeManagementSoftware
    post: change-management-software
---

Managing change takes up a huge amount of internal IT resources in large organizations. However, it’s also a necessary part of delivering value to end users through our service provision.

The tools and systems we use to support this are critical.

Specifically, the right change management software is central to our ability to implement new services or update and improve existing ones. In turn, this enables us to maximize the number of successful changes we implement while minimizing the associated costs, risks, and disruption.

This resource covers the specific decision points we’ll encounter while designing change management solutions, including core capabilities and how to navigate a range of technical, security, financial, and operational considerations.


## What is change management software?

Change management software comprises all of the tools we rely on to record, track, authorize, and implement changes to our IT service portfolio.

Ultimately, the goal is to enable us to gather structured data relating to proposed changes, and apply defined business rules to these in order to ensure only viable changes are implemented. 

This means controlling which changes are authorized to go ahead, along with managing the tasks required to roll them out.

As we’ll see, there are a few distinct approaches to developing change management systems. 

In some organizations, we’ll see teams relying on centralized off-the-shelf tools to handle all aspects of change within service portfolios. 

In others, handling change is more of a shared responsibility across the IT team and, therefore, requires a distributed system of internal tools and other solutions.

{{< vimeo id="1001639751" title="Change request management software" >}}

{{< template-cta template = "changeManagement" >}}

### Key capabilities

Next, we can think in more detail about the capabilities effective change management software must provide.

Of course, there’s enormous scope for variation here across different organizations, teams, or even specific IT services.

For now, we can consider how we can place these capabilities into high-level categories.

Broadly speaking, there are three clusters of functionality that we must be aware of. These relate to how we:

1. Store and process data concerning changes.
2. Enable IT teams to manage this data within defined workflows.
3. Facilitate change requests and other initiation actions from service users.

Within each of these, our challenge is first determining the underlying business rules that govern how changes are proposed, assessed, approved, and implemented. We can then select the more granular tools and solutions that are best suited to enforcing these rules.

This is a matter of balancing a range of technical, financial, and operational considerations to determine the most cost-effective options. 

For example, within ITIL, our priority is driving maximum value for service users through successful change initiatives within the constraints of our internal resources and existing IT operations.

In the following sections, we’ll flesh out some of the key decisions under each of the above groups of capabilities we’ll need to make to develop an effective change management system.


## Data layers for change management systems

Our first task is determining the appropriate data storage and management solutions for our change management practices.

The core challenge here is the need to collect, store, and process information in a consistent, enforceable format.

At the most basic level, this enables us to ensure that we gather the information we need when a change is proposed in order to properly assess its potential benefits, costs, and risks, as well as adequately controling its progression towards implementation.

When deciding on a solution here, one of the central considerations is how we balance the need for control and centralization in our change management practice with the current state of our IT operations, including which teams are responsible for this and the tools they rely on.

Here are the broad approaches we have available to us.


### Change management databases

In some large organizations, all changes are handled through a singular, centralized change management database, irrespective of the related IT services, configuration items, or associated risks and costs.

The point is to provide a dedicated, authoritative store for change data. In turn, facilitates a high degree of control and oversight into proposed and accepted changes across our IT estate.

As such, this is often an attractive option for teams where change management is a highly centralized function, with a singular team responsible for authorization.

However, we may still see a large degree of variation here in terms of database design. That is, a dedicated solution must account for the fact that changes across our IT estate can take a wide range of forms, each with its own unique information needs.

This must then be reflected in the data we collect and store relating to individual change initiatives.

For example, ITIL differentiates between **standard**, **normal**, and **emergency** changes based on the relative risks, resources, and goals involved. In a relatively simple data model, we might opt to utilize distinct schemas for these kinds of changes to gather the requisite information.

Alternatively, we might also choose to implement additional layers of complexity by distinguishing between change initiatives in our data model based on the related services, configuration items, or some other factor.

While this is necessary for reflecting the real-world state of our change initiatives, it can also introduce challenges related to managing and leveraging a complex database schema. 

For instance, we can store standard, normal, and emergency changes for a particular cluster of CIs, like end-user devices, in separate database tables.

As such, in cases where a high degree of centralization and control isn’t the top priority, we may want to consider other options for establishing a data model for our change management systems.


### Configuration management databases

Another key consideration within our change management practice is accounting for overlap with other areas of our ITSM provision. Within ITIL, the most important example of this is our configuration management practice.

Configuration management is the function responsible for managing information relating to all elements that contribute to our IT services.

Because there’s a huge intersection here, many organizations rely heavily on existing configuration management databases (CMDBs) within their change management practice.

The key upside to this is that most change management actions ultimately culminate in data being added or updated within our configuration management systems. Therefore, it makes sense from an efficiency perspective to reflect this fact by relying on shared a data store.

We can then handle key authorization and request management workflows within other layers of our change management system or by utilizing separate request tables and stored procedures within our CMDB.

Building change management tools on top of an existing CMDB can be an effective option for retaining a high degree of centralization, especially where these two practices are a shared function.

Similarly, compared to other options, this approach can make it comparatively easy to ensure data quality, including reducing the risk of conflicting information across distinct ITSM practices, thereby reducing our need to put additional mitigations in place around this.

However, this approach is, of course, dependent on a singular CMDB already being in place within our organization. We can’t take this for granted when designing change management solutions, as this is a decision for our configuration management process design.

That is, many organizations choose to handle CI data in solutions other than a dedicated CMDB to better suit their financial and operational needs.


### Distributed systems

Lastly, a large proportion of teams opt for distributed or federated solutions within the data layer of their change management systems. 

Within ITIL, a best practice is tasking the most relevant functional teams with managing changes to CI data, where our needs around control and centralization don’t override this.

Similarly, it’s generally preferable to rely on pre-existing, service-specific solutions for handling relevant CI data. For example, handling changes to our hardware estate within existing asset management stores rather than duplicating this information by creating a separate database.

The benefits of a distributed approach to handling change management data include boosting efficiency by reducing administrative barriers to change, as well as enabling us to more easily build change-controls into related ITSM processes.

We may also be able to reduce or avoid certain risks associated with more centralized solutions. For instance, the potential impact of system outages will often be lessened compared to relying on a single database.

However, distributed systems for storing change management data also introduce their own set of challenges.

One huge element of this is accounting for the fact that we’ll still require more oversight and centralized control in certain circumstances, especially relating to major changes or other initiatives that require input from a larger set of stakeholders.

Therefore, we’ll need to design and implement measures to adequately surface and share data in these situations, including automation, integration, and federation solutions, as well as potentially establishing a dedicated, centralized store for data relating to major change initiatives.


## Change management tools for IT teams

Next, we can begin to think about some of the capabilities we’ll need within a change request system in order to manage and interact with our data, irrespective of how and where this is stored.

As we said earlier, one important distinction we can draw is between the requirements here of service users and IT colleagues. For instance, service users will often be the ones most impacted by changes.

In some cases, they will also be the ones responsible for initiating changes in the first place.

By contrast, IT teams are primarily responsible for determining which changes are adopted and ensuring that they’re rolled out effectively.

Here are some of the key capabilities we’ll require to achieve this.


### Admin tools

Admin tools facilitate day-to-day interactions with our change management data, primarily in the form of basic CRUD operations.

For instance, enabling colleagues to locate and access specific change records, as well as performing create, update, or delete actions on these. The goal is to streamline and systemize these basic interactions by eliminating the need for colleagues to manually query our data.

However, there are a few particular challenges to change management that distinguish these from simple CRUD tools.

A huge part of this comes down to how we handle permissions and data exposure for various IT users. For example, where certain users may only access particular sets of entries, or carry out more granular actions on specific attributes.

As such, when we develop end-user capabilities within our change management systems, one priority is avoiding a need for excessive, repetitive development and configuration tasks, including focusing on solutions that provide re-usability and effective role-based access control.

An additional challenge here can stem from the fact that the specific data we need might be stored in different locations and formats. 

In these cases, we may need to perform extensive data transformations and aggregations in order to surface the appropriate views for particular users.

{{< vimeo id="1001639737" title="Change request management software" >}}


### Approval and authorization workflows

Approval and authorization workflows are a critical part of almost all change management processes. Essentially, this means applying defined business rules to a proposed change or element thereof to determine whether or not it should be adopted.

Most often, this means responding to change requests to either accept or deny them. However, approval workflows may also be required during other elements of change management, such as signing off individual elements during the fulfillment and delivery process.

At a technical level, these elements of our change management software are relatively simple. Generally, we simply need to update the status of the relevant request entity to progress it to the next stage of its lifecycle.

However, this can look quite a bit different for different kinds of change, depending on the specific approval criteria in place and the actors that are responsible for authorization.

For example, for most normal changes, approval will generally be the responsibility of the teams responsible for relevant services and CIs. However, for more major changes, we might have heightened controls, while very low-risk changes could be pre-authorized for certain users.

So, when it comes to building approval tools, our priority is providing the appropriate colleagues with streamlined experiences to assess and respond to requests, including furnishing them with the information they require to implement defined business rules.

Additionally, within ITIL, there’s a strong focus on leveraging automations wherever possible. Approval and authorization tasks within change management systems are clear opportunities to implement this.

For example, automating key communications tasks or even automatically approving or rejecting requests based on easily computable values.


### Change schedules and workload management

Once a change has been authorized, our next challenge is managing the workload associated with delivering it. 

In the majority of cases, this means adding it to what’s known as the change schedule. This is an accessible view of all upcoming change initiatives within a given team or across the organization as a whole.

The goal of this is to enable the teams responsible for delivering changes to schedule tasks and document goals, milestones, and deliverables.

Just like in the case of the admin tools we discussed earlier, the key here is providing suitable CRUD permissions to the users in question.

For example, enabling project specialists to schedule tasks and assign them to specific delivery colleagues, who can then leave comments or mark tasks as completed.

The key challenge here is the need for integration with other relevant workload management platforms.

There are a few options for implementing this, including providing a change schedule as a dedicated internal tool, basing it on a view of our existing change management database, or surfacing information by drawing data from existing tools like project management and ticketing platforms.


### Dashboards and reporting

Lastly, one of the key responsibilities of IT teams in large organizations is maximizing the success of change initiatives, both in terms of the value that they deliver and the resources incurred to achieve this.

However, surfacing the required insights to establish a return on investment can be an enormous challenge, especially where this relies on manual analysis.

As such, dashboards provide crucial reporting and analytics capabilities within our change management systems. The idea here is to provide real-time access to defined metrics as and when they are required, using pre-configured reports.

For example, as part of our change management process we may need to provide stakeholders with visualizations around workforce usage, resource allocation, financial results, delivery times, or a range of other service level and capacity management metrics.

As ever, the key challenge for creating dashboards is surfacing the relevant information, potentially from disparate data sources. 

In some organizations we may have solutions in place already to facilitate this, including within data lakes, warehouses, or enterprise resource planning platforms.

Alternatively, we may rely on simultaneous querying of separate data sources along with data transformation and aggregation techniques to expose and visualize our required insights.


## Handling service user interactions

Earlier, we discussed the differing needs of IT colleagues and service users in terms of how they interact with change management processes and data. 

Once again, for service users, this primarily relates to initiating change requests, as well as receiving updates on their progress, and ultimately deriving value from their implementation.

With that in mind, we’ll typically require the following core capabilities.


### Change request forms

The primary way that service users initiate actions is via dedicated change request forms. These provide an accessible, streamlined experience for end users to initiate change management workflows in a controlled manner.

Specifically, this means collecting the relevant data within a defined schema as well as controlling which users can submit particular requests.

Our form schemas must reflect the needs of associated workflows, including all of the information that’s required for service agents to authorize and action requests according to defined business rules.

An additional challenge is that we’ll generally need to ship and maintain relatively large numbers of form UIs to facilitate change requests for a variety of IT services and configuration items.

We must, therefore, also have the capacity and tools to develop forms that enable our users to save data to a range of different sources, especially where we rely on distributed data management systems across our change management software stack.

Similarly, we must account for the different needs of specific users within the organization when submitting change requests. One element of this is developing experiences that are appropriate for the technical needs and knowledge of requesters.

Additionally, only users with the appropriate permissions should be able to submit a particular request. By extension, users should also only be able to access forms relating to change requests they can initiate.

On top of this, we must consider points where service users can initiate service actions that aren’t explicitly change requests but may still trigger change management workflows within normal service delivery, an idea we’ll return to a little later.


### Ticketing systems and help desks

Another one of the key ways that service users interact with our change management systems is through ticketing and help desk platforms. These may contain dedicated change request forms or a change could be initiated as part of a ticket for another service request.

From a service user’s perspective, the additional capability here is being able to track and interact with their request as it progresses.

This could be as simple as receiving updates on their submissions. Or, they may need to take additional actions, such as providing extra details or arranging certain elements of the fulfillment process for themselves.

Meanwhile, IT colleagues can also use ticketing systems as part of their change management processes, including authorizing and eventually rolling out new initiatives.

As such, the key challenge for an effective ticketing platform is providing distinct groups of users with appropriate data access and views, enabling them to carry out actions that are appropriate to their role within ITSM processes.

In the context of our change management systems, an additional consideration here is dealing with routing. The crux of this is that some tickets may explicitly relate to change requests, but most will not.

Therefore, we must build this fact into our ticketing workflows, including using both automated and manual routing to initiate change management actions throughout the course of normal service interactions.


### Knowledge bases and self-service tools

Lastly, within our change management practice, arguably the most important capability we can provide for our end users is handling communications around changes during and after implementation.

That is, any change within our service portfolio will impact its respective end users. 

In order to avoid disruption or other issues, it’s vital that new processes, deliverables, expectations, or other aspects of changes are documented and disseminated to affected colleagues.

For major changes or other initiatives with a wide-ranging impact, we might leverage mass communications, such as internal emails or even in-person briefing meetings.

However, our priority here must be reflecting change management outputs in our wider service portfolio, especially the points at which users regularly access service information.

The most common examples of this are our knowledge bases and self-service tools. 

These are tools that provide users with the information they need to initiate service actions, including what’s required of them, the deliverables of the service in question, and other relevant expectations, such as timelines.

To account for this within our change management software system, we can rely on a combination of automated and manual updates to our documentation and other knowledge management practices.

The goal, as ever, is maximizing the end-user value provided by information while minimizing the costs, risks, and disruption associated with change.


## Related systems in other ITSM practices

One of ITIL’s guiding principles is a recognition of the fact that our ITSM processes will inevitably interact with one another in myriad complex ways.

As such, it’s vital to understand the points at which our change management software will overlap with systems and tools related to overlapping practices.

Given the nature of change management, there are two key ways that this can occur. First, actions and events within regular service provision may trigger change management workflows.

Second, changes will impact the delivery of our wider service portfolio.

As we’ve alluded to already, one of the practical challenges here is routing relevant interactions and requests to interrelated teams. 

To approach this systematically, we must first identify the specific instances where normal service interactions indicate a demand for change and then put measures in place to route these to the appropriate change control workflows.

For example, within a service catalog or asset rental tool, we might create automation rules to route requests to our change control practice based on the information submitted by users.

Or, we might detect a demand for emergency changes because of an incident report form submission.

Alternatively, we might provide service agents with the functionality to manually reroute or escalate tickets to change management teams within our support desk tools.

As we saw earlier, the key issue in terms of reflecting change in our wider IT estate is utilizing appropriate data sharing across processes. For instance, relying on shared storage or appropriate automation solutions.


## Other requirements

Lastly, we must consider certain requirements that are applicable across the breadth of our change management systems, regardless of the specific decisions we make under each of the categories above.

In large part, these relate to how we govern and control user interactions. 

Appropriate access control, both at the level of data assets and the end-user tools we rely on to interact with these is critical. For example, restricting the changes that individual users can propose, or the data they can access relating to in-progress initiatives.

From the purpose of designing effective systems, our priority here must be implementing tools that make it easy to consistently apply rules across a range of related platforms. For instance, with a combination of role-based access control, SCIM provisioning, and SSO.

Additionally, it’s worth considering the additional security requirements we may have with regard to change management software.

This can vary across different aspects of our service portfolio. 

It is important to recognize that certain aspects of our change management data could be highly sensitive and require special information security measures. 

For example, if we opt to store the majority of change data in cloud-based stores but retain on-premises storage for particularly sensitive product or service data.