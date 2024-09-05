---
date: 2024-09-05
title: Service Request vs Incident Management
description: Take a look at our guide on the relationship between incidents and service requests.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Service Requests vs Incidents
    parent: serviceRequestManagement
    post: incidents-vs-service-requests
    identifier: incidentsVsServiceRequests

---

Service requests and incident reports are some of the most common end-user interactions within our ITSM provision. These both enable colleagues across the organization to submit information that triggers certain IT actions and workflows.

However, they are used in different contexts to achieve distinct goals. As such, the specifics of the information that’s required and the workflows that are implemented in response will also differ greatly.

At the same time, we will encounter areas where our service request management and incident management practices overlap and interact.

As such, in order to effectively handle either one, we need a thorough understanding of the respective roles of these two practices, including the specific areas where they diverge and where they overlap.

In this resource, we’re covering everything you need to know, along with some of the practical considerations we’ll encounter when determining how to handle different kinds of user interactions within our ITSM efforts.

## Definitions

We’ll start by exploring what each practice means individually. As we said already, service request and incident submission workflows both enable users to provide information that’s required to initiate certain actions from our IT team.

However, each of these is part of a distinct practice under ITIL, the dominant framework for managing IT services, with its own goals, priorities, and key use cases.

Here’s what each one means and what it achieves.

### What is a service request?

A service request is a user submission that triggers a defined, agreed action or workflow as part of normal service delivery. Generally, this is a low-risk, highly regularized action, such as providing access to information, resources, devices, or other basic services.

This forms a key part of how users access services that are provided for them within our IT service portfolio. 

Depending on the nature of the service action in question, we might have varying levels of controls in place. So, some requests could essentially be pre-authorized, while others will need more stringent approvals, either through manual or automated workflows.

On top of this, the initiator must have the necessary permissions to request a particular action.

{{< vimeo id="953485337" title="Service Requests vs Incidents" >}}

Generally, once a request is authorized, it will follow a consistent, defined pattern for delivery. This constitutes a service request workflow.

Therefore, our information needs relating to a specific type of service are determined by what the relevant fulfillment team needs to assess submissions against relevant business rules and then deliver the actions in question.

As such, each defined service action must have a corresponding request schema to ensure that we have the data we need to action an appropriate response.

So, we can think of a service request as the interaction itself, as well as the data object that is created when this occurs.

#### Examples

Service requests are used to initiate almost all user-facing, regular ITSM actions. In other words, these are agreed actions that don’t require substantial change to our configuration data in order to implement.

Some of the most common examples include:

- **Basic support actions** - such as password resets or user management tasks.
- **Access/rental requests** - including for devices, data sets, software tools, or facilities.
- **Procurement requests** - acquisition of specific assets that are required regularly, especially end-user devices such as laptops.
- **Repair/maintenance/replacement requests** - including basic ongoing maintenance tasks or replacing consumables, such as printer cartridges.
- **Information requests** - including for guidance on specific internal policies, procedures, or processes.
- **Authorization requests** - for end users to take defined actions, such as purchasing new software tools.

We can characterize all of these as having a few key elements in common. The most important thing is consistency and predictability. By definition, service requests are related to actions that are defined as part of our normal service delivery.

Therefore, the idea is that the same steps should be followed each time a given service action is requested, regardless of the colleagues who initiate, process, or deliver this.

Similarly, actions that can be initiated through service request flows must also have clearly defined assessment criteria, deliverables, and other expectations.

Additionally, by virtue of being included in our regular service catalog, we can almost always characterize the related service actions as being low-risk as they should follow predefined, risk-assesed pathways.

### What is an incident?

An incident is an unplanned or unexpected event that has the potential to disrupt, interupt, or otherwise undermine our ITSM offering. Or, it may relate to our IT estate, but have the potential to negatively impact the business more broadly.

In the most basic terms, our IT team has a few key priorities relating to incidents in order to retain normal service levels and other key metrics. 

These include:

1. Preventing incidents from occurring.
2. Identifying where incidents have occurred or may occur.
3. Formulating responses to minimize the impact of incidents and prevent their reoccurrence.

In the context of understanding the relative importance of incidents vs service requests, we’re mainly focused on the second points - identifying incidents when they have occured or may occur.

There are several ways that we can go about this, including ongoing monitoring, specific auditing tasks, automated event flagging, or accepting user submissions.

{{< vimeo id="963211946" title="Incident vs Service Request" >}}

Once an incident has been identified, we must action a response, including analyzing what has happened, establishing any continutity measures we need to restore services, developing long-term fixes, and documenting our experiences.

Depending on the nature of the incident, the regularity of this process can vary.

For example, in the case of a network outage or other downtime event, we might have a clearly defined process in place for restoring services.

However, this won’t be possible in all cases, since incidents, by their nature are somewhat unpredictable. 

For instance, in the event of a more serious security breach or cyber attack, we might have a high-level operational plan in place, but the specific restoration and mitigation actions we’ll need, along with the teams involved, could be more dependent on context.

#### Examples

We’re specifically interested in incidents that are identified via user submissions, either directly or indirectly.

That is, the user may explicitly report an incident, or they may submit another type of request that indicates an incident may have occurred.

The most common examples of explicit incident reports include:

- **Outage reports** - reporting that a particular resource, tool, or capability is unavailable.
- **Breakage/damage reports** - reporting that a particular asset or device is broken.
- **Injury/accident/near-miss reports** - reporting that an incident has occurred that injured or had the potential to injure a colleague.
- **Security incident reports** - reporting that a breach, cyberattack, DoS, or compliance issue has occurred.
- **Unauthorized access** - reporting that an unauthorized actor has gained access to internal IT assets.

However, we must also be aware of instances where a user submission other than an explicit incident report indicates that an incident has occurred.

This could come in the form of a ticket, service request, or other interaction. We’ll think about how we can handle these kinds of incident reports systematically a little later.

For now, we can think about what characteristics the examples above share.

The key thing is that the workflows that they initiate might be somewhat less predictable or regularized. 

That is, an incident report generally indicates that we need to perform some element of investigation and analysis in order to determine what has happened, what the potential impact could be, and how we need to respond.

On top of this, incidents or potential incidents, by their nature, involved heightened risk.

That is, these are events that include potential or real disruption to our IT estate or other negative organizational impacts. As such, a core part of our task is identifying, measuring, and mitigating the specific risks involved.

## Incidents vs service requests: key differences

Now that we have a clear understanding of what incidents and service requests are, we can begin to think in more detail about the relationship between the two.

We’ll start by examining the areas where these diverge and serve different purposes.

The most succinct way of describing this is that service requests are used to initiate regular service actions, while incident reports indicate issues and irregularities that could relate to a problem within our service portfolio.

As we’ve seen already, this breeds a difference in the kinds of workflows that each one requires to respond to it. Generally, service requests are highly regularized, while incident reports require more analytical work to determine how to proceed.

Service requests are most often largely pre-approved, whereas incident responses require more intensive work to plan, analyze risks, and deploy solutions.

Generally, these also differ in terms of the colleagues responsible for managing responses.

For most service requests, this will often be the functional team that’s most closely related to the service action being requested. For example, our ITAM team typically fulfills service actions relating to our asset estate.

However, in some instances, we might require more centralization or coordination between teams, particularly for complex service requests or instances where the resources involved have heightened financial values or security implications.

Generally speaking, there’s more variation in the internal responsibilities related to managing incident submissions.

For instance, a single functional team might take the lead on handling specific tasks or events, but across the board we’re likely going to need the input of a more diverse range of stakeholders, including within and outside of the IT team.

So, initial submissions might be triaged and categorized by the support desk, but analysis and resolution development could be a shared effort between numerous relevant teams.

## Why handle service requests and incidents separately?

In some organizations, almost all end-user interactions are handled through a centralized service desk, ticketing system, or intranet portal. Users can submit information to initiate ITSM workflows without necessarily knowing what constitutes an incident vs a service request.

In other cases, we might handle aspects of each within distinct platforms. For instance, facilitating service requests within a standalone service catalog while pricing dedicated report forms for initiating incident management workflows.

Both approaches are valid. Whichever we adopt, though, it’s critical to reflect the fact that incident management and service request management are distinct practices and should, therefore, be managed separately.

One key issue here is routing various submissions to the appropriate colleagues to resolve. That is, the sooner we can categorize submissions as relating to one practice or another, the more quickly and efficiently we can deliver a response.

Similarly, we must be cognizant of the fact that each practice presents quite different requirements around how we handle and process data.

For instance, the most sensitive aspect of a service request will often be the personal information of the submitter.

By contrast, incident report data could be considerably more sensitive, as it may relate to mission-critical infrastructure, hardware, or software assets.

As such, it’s important to handle each of these using appropriate solutions based on our more contextual requirements. For instance, we may opt to self-host certain, more sensitive data sets.

Handling incident reports and service requests as entirely separate interactions can also help to boost accuracy and efficiency in key workflows. For example, this approach can simplify reporting by providing easy-to-implement categorization of user submissions.

## Dealing with the overlap between service request management and incident management

Lastly, when talking about incidents vs service requests, we must also be aware of the areas where these interact. The goal is then to put practical measures in place to reflect these points of overlap.

We’ve hinted at some of these already. First of all, any time we’re handling user interactions, we need to account for the fact that one type of request can reflect the need for a workflow from a separate practice to be initiated.

For example, the information provided in a service request could indicate that a potential incident has occurred, which we need to investigate. Or, a user could erroneously submit an incident report when the actions they need are offered as part of our normal service catalog.

As such, it’s vital to have solutions in place for recategorizing or rerouting requests to appropriate flows, whether across dedicated solutions or within a singular platform such as a ticketing system.

It’s also important to note that our incident responses and service request fulfillment actions will often require input from the same colleagues.

Therefore, we’ll likely encounter situations where we need to compare the relative priority of tasks and projects across our two practices in order to determine how to appropriately schedule and allocate resources.

Lastly, our success across each practice can have a sizeable impact on the effectiveness of the other a higher level. 

So, when we have clearly communicated robust service request workflows, incidents are generally less likely to occur. 

Similarly, when incidents are appropriately prevented or mitigated, our IT team has more time to focus on key service-level goals, including request management KPIs.

As such, it’s critical to take a holistic view of these practices, both in terms of process design and the solutions we put in place to manage this in order to maximize the value we can provide across our ITSM offering.