---
date: 2024-09-25
title: Service Requests vs Change Requests
description: Take a look at our guide comparing service request management and change request management.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Service Requests vs Change Requests
    parent: serviceRequestManagement
    post: service-requests-vs-change-requests
    identifier: serviceRequestsVsChangeRequests


---

Handling interactions with service users is one of the most fundamental challenges across our entire ITSM provision. Service requests and change requests are two of the most basic ways that colleagues across the organization can interact with the IT team.

Understanding the respective roles, goals, and use cases of each of these is critical for designing effective service delivery workflows.

However, this can be complicated by the fact that, despite being distinct types of interactions, there’s also a huge degree of overlap between the two.

In this resource, we’re exploring exactly what each one is and what it achieves, as well as how they relate to one another and some of the specific strategies we can rely on to handle this intersection.

## Definitions

We can begin by checking out what each of these types of IT requests is.

### What is a service request?

A service request is a submission from an end user that seeks to initiate an agreed, defined action within our service portfolio.

IT teams offer discrete services to colleagues and other users, typically within a service catalog. Service requests are the primary way that these are accessed. Typically, this means completing a request form, although it could also be another interaction, like an email, ticket, or call.

{{< vimeo id="953485337" title="Service Request Management Software" >}}

Therefore, a service request refers both to the interaction itself and the data object that is submitted with the form completion.

What’s contained within this must be determined by the team responsible for delivering the service, including any information they need to decide how to respond to and, ultimately, fulfill the request.

Service requests can also be governed by access rules and policies. That is, certain services might only be accessible by particular users.

While service requests are used to initiate a wide range of workflows across our entire portfolio, they’re primarily handled within the service request management function.

### What is a change request?

A change request is a different kind of user interaction. Whereas a service request deals how users initiate normal service actions, change requests are concerned with instances where we need to alter this somehow in order to meet the user’s requirements.

{{< vimeo id="1001639751" title="Change management vs release management" >}}

All of our services are underpinned by what are known as configuration items (CIs). These are any elements that contribute to our services about which we store information as part of our configuration management practice.

Change requests typically seek to formally add, update, or delete some aspect of our configuration data. 

However, the level of regularity within this can vary according to the specific change actions that are required. 

Generally, these are divided into three categories:

1. **Standard changes** - which are predictable, low-risk, and require little or no authorization.
2. **Normal changes** - which must be risk-assessed and authorized based on defined business rules.
3. **Emergency changes** - where we must balance risks and costs with the need to act quickly.

The processes that we follow to respond to each of these types of changes will vary greatly. Indeed, we’ll also see extensive variation within each one.

Take a look at our guide to [change request management ](https://budibase.com/resources/itil-processes/change-management/change-request-management/)to learn more.

Change requests also comprise the data object that’s created, along with the interaction itself. This can be handled through informal methods like calls or emails. However, establishing effective records of changes that have been made is critical.

Therefore, change requests are also best handled using dedicated forms or ticketing tools as part of our change control practice within ITIL.

### Key differences

We’ve already alluded to a couple of important differences between service requests vs change requests. 

One way of summarizing what we’ve seen so far is that service requests are used to initiate normal service actions that are available to users, while change requests seek to alter some element of our service portfolio to meet the user’s goals.

As we’ll see in the next section, these aren’t necessarily mutually exclusive.

Service requests and change requests can often differ in terms of the colleagues responsible for managing them. For service requests, this is almost always the on-the-ground team responsible for delivering the service itself.

With change requests, roles and responsibilities can be quite a bit more complex. In the case of pre-authorized standard changes, this will often still be the most relevant functional team.

However, beyond this, the colleagues involved in handling change requests will typically vary according to the severity and importance of the change at hand. So, the change authority will typically be proportionate to the associated risks, benefits, and costs.

Another important point where service requests and change requests differ is their respective management workflows. Since service requests deal with pre-agreed actions, our primary challenge is scheduling work and communicating expectations to users.

Ultimately, the goal here is simply to meet our agreed service levels in the most cost-effective way possible.

Change request management workflows are more varied. For some low-value changes, this might resemble a service request management workflow, where our primary challenge is scheduling the required work.

However, for other kinds of changes, we’ll require more extensive controls, analysis, and other management tasks. 

This can also vary depending on the specific CIs that are involved. For instance, we’ll have distinct workflows for change requests relating to our software assets or network infrastructure.

Take a look at our guide to [ITIL change management](https://budibase.com/resources/itil-processes/change-management/) to learn more.

## Service requests and change requests: overlap

As we said earlier, change requests and service requests aren’t mutually exclusive. In fact, there are situations where our change control and service request management practices present massive amounts of overlap.

As such, we need to be particularly conscious of the situations where either or both could come into play. 

The most obvious place to start here is an interaction that meets our definitions of both a service request and a change request. That is, a request which seeks to initiate an agreed service action, which inherently also necessitates some element of change to our configuration data.

For example, if a colleague requests for the IT team to acquire a new device or piece of equipment.

These types of requests typically relate to standard changes since these are already pre-authorized and may generally be delivered as normal service actions.

Another area of overlap is any situation where change is required in order to deliver an agreed service action on a more contextual or individual basis. For example, if we need to increase server capacity to handle a specific service request on a one-off basis.

So, the team handling an initial service request might need to submit a change request to their colleagues in order to deliver the original service action.

Lastly, we have interactions that come from common channels where we must determine whether they should be routed to service request management or change control workflows.

For example, when a user submits a ticket via our help desk platform. End users might not necessarily know what constitutes a service request or change request in every possible scenario.

So, we need appropriate methods in place to ensure that the right procedures are followed based on the established business rules for each type of interaction. 

We’ll return to some practical ways to handle the overlap between these practices a little later.

## Structuring workflows for changes and service requests

First, though, we can drill into the tasks and processes that are typically required for dealing with service requests and change requests in order to get a better feel for how these differ in practical terms.

Within each practice, there’s naturally a great deal of variation, with workflows being specific to different kinds of services or changes. However, within each, we can also outline a general structure that most responses will follow.

Typically, a service request management workflow follows a structure made up of the following steps:

- **Request submission** - enabling end users to initiate workflows, including providing any required information.
- **Approval and authorization** - applying defined business rules to determine if the requested service action is appropriate for the user’s underlying needs.
- **Fulfillment** - following an established process for delivering the requested service action according to agreed standards.
- **Closing** - marking the request as complete and carrying out any required follow-up actions.

Change requests management workflows can present even more variation, owing to the fact that they are somewhat less predictable and, unlike service requests, don’t always follow pre-defined processes.

Still, we can utilize a generalized outline to illustrate the kinds of tasks that are required to respond to change requests.

The key takeaway for our purposes today is that this is a somewhat more involved undertaking than responding to service requests, comprising:

- **Proposal/request** - accepting explicit change requests or using other methods to identify a demand for change based on user interactions.
- **Assessment** - assessing the relative costs, benefits, and risks of the proposed change to establish a business case and then routing it to the appropriate authorization flow.
- **Authorization** - using defined business rules to determine whether or not the change should be implemented.
- **Schedule and build** - defining the tasks that are required to implement the proposed change and placing them into our change schedule.
- **Deployment** - rolling out the accepted change initiative.
- **Review and closure** - marking the change as closed and carrying out any analysis or monitoring that’s required to establish its effectiveness.

In addition to being a more extensive flow, we can also see that there are more points at which individual instances of this might vary. That is, compared to a service request management workflow, each step might contain more complex decisions that impact subsequent actions.

## Handling the intersection between change control and service request management

Lastly, we can consider some of the practical steps we can take to account for the relationship between service requests and change requests, based on what we’ve learned so far.

This will, of course, be informed by our own specific context, including the scale and complexity of our service portfolio, as well as the resources we have available for managing this.

At the same time, we can point to some of the broad trends that are most helpful in aligning our service requests and change management efforts.

One key issue here is how we account for routing and information sharing across processes. For example, we might receive one type of request that should actually be the other, or we may rely on a common platform, like a ticketing tool, to handle both.

In either case, the key is establishing the conditions that mean a request should be redirected from one flow to the other and then designing solutions to enforce these. 

For instance, relying on automation tools or providing users a streamlined way to reroute tickets and submissions.

Of course, this is reliant on adequate integration between the relevant tools and workflows. However, this might be complicated given that change control and service request management are likely to be handled as distinct functions.

So, in some cases, we may be able to rely on shared data sources, whereas in others, we might need more complex cross-platform solutions.

Take a look at our guide to [change management software](https://budibase.com/resources/itil-processes/change-management/change-management-software/) to learn more.