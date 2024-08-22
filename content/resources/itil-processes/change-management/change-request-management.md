---
date: 2024-08-22
title: Change Request Management
description: Learn how to define build effective workflows for managing change requests.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Request Management
    parent: changeManagement
    identifier: changeRequestManagement
    post: change-request-management

---

Managing change requests is one of the core tasks for enterprise IT teams. This is a critical part of how we ensure our IT environment remains efficient, cost-effective, and fit for purpose.

Within ITIL, this is subsumed within change control, the ITSM practice that deals with maximizing the success-rate of change initiatives across the organization.

Change requests play a central role in this by enabling users to initiate change control workflows. As the name suggests, these are submissions from users which request a change to some element of our IT service provision.

As well as enabling users to submit requests, our goal here is to ensure that these are properly processed and documented as they move from initialization toward completion.

In this resource, we’re covering everything you need to know, including how to define, design, and apply change request management processes, as well as the tools that support this.

## What is a change request?

A change request is a submission from a user that initiates a change control workflow. This could be either a service user or an IT colleague. However, these colleagues will likely need permission to request different kinds of change, depending on their roles.

For example, our service users might want to procure a new end-user device or software tool, whereas an IT colleague might need more complex changes to support internal capacity management goals.

We’ll return to how we can categorize changes shortly.

First, it’s important to understand that a change request is the specific interaction that initiates a change workflow. For instance, this could be an email, instant message, or in-person conversation.

However, the goal of change request management is to provide a streamlined experience for gathering information in a defined format. As we’ll see, this typically involves using dedicated forms, ticketing tools, or other data collection UIs.

{{< vimeo id="1001639751" title="Change request management software" >}}

As such, we can also characterize a change request as the data object that’s output by these tools. 

Our first priority for managing change requests is defining the appropriate data schema for individual requests and providing a consistent experience for users to accurately adhere to this.

Defining a request schema requires us to understand the business rules that determine how we’ll respond to requests within our change control practice.

We’ll consider this in more detail a little later. But for now, we can divide this data into two categories. These are:

1. Information that’s required to determine whether or not to authorize a request.
2. Information that’s required to implement the requested change.

However, the scale and scope of each of these are determined by the nature of the change being requested, along with its associated benefits, risks, and costs.

Therefore, it’s crucial that we understand how to categorize these.

### Types of change requests

There are a few distinct issues we’ll need to pay attention to in order to adequately categorize our change requests.

ITIL provides a generally applicable framework for grouping changes based on their potential risks and the level of control and authorization they’ll require based on this.

Specifically, it distinguishes between:

- **Standard changes** - low-risk changes that follow a tightly defined pattern and may be pre-authorized.
- **Normal changes** - medium-risk changes that require more analysis or reviews and, therefore, heightened controls.
- **Emergency changes** - changes that must be implemented urgently in order to respond to a specific event. These may present a high degree of risk that must be balanced with the need to act quickly.

The goal here is primarily to provide a basis for organizations to define change control processes that are proportionate to the potential impact of a given change initiative, whether positive or negative.

However, for effective change request management, we must also take a more practical view.

One of the central questions here is which colleagues are responsible for assessing, actioning, and owning certain change requests.

As such, we’ll typically want to handle change requests for distinct functions, services, or CIs within our IT environment differently. For example, teams otherwise responsible for our software, hardware, or internal processes will likely be tasked with managing relevant requests.

In other words, we’ll typically route most change request management tasks to the appropriate functional team for assessment and fulfillment, where possible. 

Exceptions to this include situations where the associated risks mean that a change request requires approval from a higher authority or where the scope of the required actions spans multiple functional teams.

Within a specific service vertical, we might also implement more granular categorization for change requests. The key here is routing requests according to the skills and expertise that are required to respond to them.

For example, within our development team, we might route change requests to the specific sub-teams or individual colleagues who are best positioned to assess and implement the required actions.

We’ll return to some of our options for routing submissions within change request management processes a little later.

## Designing change request forms

Change request forms are UIs that enable colleagues to submit the structured data that’s required to provide our team with the information they need to respond to requests.

These play a couple of important roles.

The first is enforcing our defined schema on request submissions. That is, our forms will reflect our information needs within our request management processes. Ultimately, our users shouldn’t be able to submit a form without providing the appropriate data.

The second is providing a streamlined experience for users to submit requests. On the one hand, this boosts efficiency by eliminating friction within our submission process. 

On the other, it can boost process adherence by encouraging users to go through official channels when submitting requests, helping to support our general IT governance efforts.

We can break successful change request forms down into a few key components.

### Data schemas

A form’s schema ultimately determines the structure of the request object that is submitted to our IT team.

At the highest level, this is established by the specific fields we include for users to populate. These are used to assign values to the attributes that we include in our request data object.

This must then be sent to whatever data store we’re using to handle our requests. Typically, this will be in the form of a direct create query, but we might also require a more complex solution. For instance, relying on some element of middleware or API requests to existing platforms.

In any case, the basic requirement here is selecting form-building tools that support our data source and enable us to easily build UIs that reflect its underlying schema.

However, this is only the most basic aspect of our form’s data schema.

Another key consideration is validation. This relates to any rules or conditions we put in place regarding the information that users can submit, whether in terms of its format, value, or some other condition.

The most basic example of this is stipulating that some fields are required while others might be optional. This kind of logic can often be handled server-side.

However, in the context of change request management, our validation rules can often be quite a bit more complex. For instance, we may require a particular field or apply some other rule to it depending on the value a user submitted for a separate attribute.

It’s often preferable to handle these more complex rules client-side to avoid wasting users’ time.

Therefore, our priority is selecting solutions that will enable us to reflect the granular rules that govern our request data in a controlled, efficient manner.

### User experiences

Another key aspect of our change request forms is the experience we provide for users.

Of course, this is a wide-reaching issue that we can consider at a few distinct levels. From a pure design perspective, we’re primarily focused on reducing the barriers and friction that must be overcome to submit data in the appropriate format.

We have several options open to us for achieving this. One we’ve seen already is implementing client-side validation to ensure that users are provided with necessary feedback as soon into the submission process as possible.

On top of this, we should focus on designing interfaces that reflect the needs and expectations of our target users. 

In the context of handling change requests, the key issue here is communicating requirements to users in language that’s appropriate to their knowledge levels. For instance, where the changes they need to initiate relate to CIs that they may not fully understand.

Additionally, we must consider our options for reducing the cognitive load on requesters.

For example, in cases where we require large amounts of information to process a change request, we might opt to provide multi-step forms, clustering relevant fields together to make it easier to comprehend what’s required.

Alternatively, we might utilize front-end logic to reflect the more complex rules relating to our data schema. For instance, we could leverage conditionality so that certain fields are only displayed when they are required.

In terms of user experience, we must also consider our needs around the devices we expect our users to access our change request forms. For instance, if cross-device compatibility is a firm requirement, we’ll want to prioritize solutions that make it easy to ship responsive forms.

### Other requirements

Of course, we may have additional requirements around our change request forms, particularly if these relate to sensitive or high-security aspects of our IT environment.

The first thing we’ll want to consider in almost all cases is our access control rules. More specifically, our priority is determining which internal users should be able to access and respond to specific forms.

As you might expect, the key here is reflecting existing business rules around service users’ permissions to initiate particular kinds of change actions.

However, the challenge here is managing this across the organization, where individual user’s permissions might be determined by their specific role, seniority, department, or other factors.

Therefore, our goal is to enforce these rules without creating extraneous admin work to manage users. For example, flexible role-based access control can be leveraged in combination with other strategies such as SSO or SCIM provisioning.

With any data-focused workflow, we must also consider our requirements around hosting and storage. 

For instance, many IT teams rely on cloud-based solutions to store change request data, but in cases where this is particularly sensitive or mission-critical, we might opt to self-host it on our own infrastructure.

## Request management within our change control process

Next, we can think about how to flesh out request management workflows for more specific initiatives within our wider change control practice. 

Typically, we’ll apply different processes to various kinds of changes, depending on their associated costs, risk levels, and related services and CIs.

However, across the board, we’ll need to consider similar issues in order to develop appropriate workflows. In the remainder of this resource, we’ll outline the basic structure of this and some of the most common decisions we’re likely to encounter along the way.

### Defining request schemas

As we’ve said already, the most critical aspect of our request management efforts is the specific schema that we enforce on any given user submission.

This will also serve as an input for all subsequent steps of our workflow, so it’s important that we define our schema with reference to the various business rules that we’ll assess requests against at successive stages.

In this sense, we can point to a few categories of information we’ll likely need to collect.

First, we’ll almost certainly need to capture the initiator’s basic details. In basic cases, we might ask users to submit these manually, but more often, we’ll want to link the request to an existing users or employees table for efficiency’s sake.

Beyond this, our information needs are largely dictated by the nature of the request at hand. 

In particular, we need to include the data attributes that will enable us to determine whether a request meets our change authorization criteria, along with any information that our fulfillment team will need to implement changes.

The first could take a few distinct forms. For instance, for a hardware rental, we might simply need to know the dates that the requested device is needed. 

But, for more complicated authorization criteria we might need extensive qualitative information in order to determine if there is a business case for the requested change. We’ll think about this in more detail in the next step.

The information that’s required to actually implement and deliver a change can vary a little bit more. With standard or many normal changes, this should typically be quite predictable, as these will follow a relatively defined workflow.

For example, the steps required to change a password or add a user to a software package shouldn’t vary much. We’ll just need to know the user in question and the tools they’re trying to access.

However, more substantive or emergency changes could require more extensive, context-specific information gathering, so it’s important to account for how we can facilitate this in our change request management processes.

### Routing, categorization, and triaging requests

Once a change request is received, our first task is to assign it to the appropriate colleagues to manage. This means categorizing our requests according to the rules we established earlier, as well as prioritizing them based on their urgency or potential impact.

We have a few options for how we can go about this, but we’ll like require a combination of these.

First of all, we can perform basic routing at the point of data submission. That is, we can provide separate channels for users to submit requests for certain kinds of changes. This is particularly easy in the case of standard changes that relate to normal service delivery.

However, less consistent, predictable changes often can’t be handled this way, as we’re less likely to be able to rely on dedicated submission forms. Instead, these might come from more general data collection tools, like generic change request forms or even ticketing systems.

In these cases, we’ll need to implement appropriate logic to route requests to the appropriate team. As we know, our categorization might be based on the severity of a change request or the related services and CIs.

As far as possible, we can seek to automate this process, creating rules based on the information submitted by users.

However, in some cases, we may still need to manually triage change requests, especially where the required follow-on actions are more complex or span multiple functional teams.

In any case, the goal of this stage is to direct the submission to the appropriate colleagues to formulate a response.

### Analysis and impact assessment

For most standard, major, or emergency changes, we’ll also need to establish the implications of the implementation, both in terms of costs and benefits.

Ultimately, the goal here is to establish what actions will be required to deliver a change initiative and the business case for doing so.

On the cost side, we’re primarily concerned with the resources we’ll require, along with the associated workload. This must be analyzed in the context of our existing IT environment. 

For instance, to establish if new resources are necessary or if existing capabilities can be redeployed.

Similarly, change requests must be analyzed with respect to the risks they present.

The most basic risk associated with any change initiative is the prospect of investing time and effort without achieving the desired outcomes. This could result in sunk costs, scope creep, or a combination of both.

As such, it’s vital to establish a clear, detailed understanding of what our change initiate’s goals are and how we’re going to achieve these.

Individual change initiatives might present more specific or contextual risk factors. For instance, around service interruptions, security, or compliance issues.

The key here is determining the key risk factors for specific services, CIs, or change types. These must then be reflected across our authorization criteria in the following step.

Understanding the potential benefits and concrete goals of change initiatives also requires extensive analysis. For instance, proving the potential ROI on a new piece of equipment, service delivery process, or IT policy.

By the end of this stage, we should be ready to apply defined authorization criteria in order to determine whether or not to carry on with the requested change.

### Applying change control rules

Besides information gathering, approval workflows are probably the most central aspect of change request management. Ultimately, this is the point at which we decide whether to accept or reject change a new initiative.

There are two key components to the rules that underpin an approval workflow:

1. The colleagues or other actors who are authorized to approve a request.
2. The specific criteria they’ll assess our change requests against.

When designing individual change request management workflows, the key idea here is that our controls must be proportionate to the relative costs, benefits, and risks of the initiative at hand.

{{< vimeo id="1001639737" title="Change request management software" >}}

In terms of choosing the relevant authority to approve changes, it’s generally best practice to rely on the most relevant functional teams that we can, except in cases where the potential risks or costs outweigh this.

For instance, in scenarios where higher risks exist, or the required actions span multiple functional teams, we may require a higher authority to approve initiatives.

Alternatively, since normal changes are often largely pre-authorized, we’ll typically rely on automated checks to ensure that the appropriate criteria are met.

Our change criteria can also vary greatly depending on the nature of the change request. For example, some simple changes might only be a case of resource availability, while others are more strategic and will require more extensive qualitative and quantitative assessment.

We cover this in more detail in our resource on designing [change management processes](https://budibase.com/resources/itil-processes/change-management/change-management-process/).

### Implementation and follow-up

Our change request management workflows end when the requested initiative has been delivered.

Here, we can distinguish between implementations that follow a defined pattern and those that do not. So, most normal changes will follow the same pattern each time they’re applied, while more major changes are more likely to vary between individual instances.

While it’s difficult to generalize in terms of the actual workload required across various types of change here, we can nonetheless point to a few key issues we’ll need to be aware of across the board.

The first relates to communications and documentation. That is, we must adequately record the inputs, outcomes, and rationale for our change initiatives. This is crucial both from the perspective of establishing our success and communicating practical changes to service users.

This applies to colleagues that initiated specific change requests, as well as any other stakeholders that may be affected.

On top of this, ITIL emphasizes the need for continual improvement across IT operations.

Having a clear record of our previous change initiatives is a vital part of this. By establishing detailed records of which requests lead to organizational value and which do not, we’re much better positioned to identify areas for improvement in the future.