+++
author = "Ronan McQuillan"
date = 2024-06-04
description = "Check out our guide to service request management for IT teams."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is Service Request Management?"
+++

IT teams handle huge volumes of service requests every day. This is a key part of how we deliver internal services to colleagues and customers.

How we handle interaction between IT and the wider organization has a huge impact, across security, service up-time, operational efficiency, resource utilization, and more.

Today, we’re covering everything you need to know about service request management within ITIL.

Specifically, we’ll start by checking out some basic definitions of service requests, and how these differ from other common ITSM workflows before moving on to the specific framework laid out for managing these in ITIL.

Then, we’ll move on to thinking about some of the specific strategies and tools we can use to optimize our service request workflows before wrapping up by seeing how Budibase empowers ITSM teams to manage internal processes.

Let’s start with the basics.

## What is a service request?

A service request is an interaction between an on-the-ground colleague, customer, or vendor and the IT department that initiates a predefined service workflow.

In other words, this is a formalized way for service users to request something from IT, usually in the form of access to equipment, information, or some other resource.

{{< vimeo id="953485337" title="Service request management" >}}

To learn how to build the form you can see above, check out our tutorial on creating [IT request forms](https://budibase.com/blog/tutorials/it-request-form/).

Broadly speaking, this requires the service user to browse the services that are available to them and follow a set process to initiate a request, including providing some defined information.

IT will then follow rules and procedures around how to respond to this request, including whether to approve it, the level of priority, and the specific steps that are required to deliver the relevant service to the user.

It’s worth thinking about how this differs from other types of ITSM requests, such as incident reporting or change management. The big distinction here is predictability. That is, service requests are much more regularized.

So, whereas individual incidents and problems will generally vary hugely, service requests deal with defined resources that are available to users.

Therefore, the goal of service request management is to streamline the process of receiving and fulfilling requests according to existing business rules.

### Examples of service requests

Next, let’s think about some real-world examples of service requests. These will obviously vary from one company to the next, but there are still several clusters of services that most IT teams will offer in one form or another.

One of the most common is hardware or other physical assets, such as computers, accessories, or more specialist tools. This could be a request to rent an existing device or to procure a new one.

In terms of fulfillment, IT teams then need to assess this request based on the user’s authorization levels, hardware availability, or financial rules.

Non-physical assets like software or datasets normally work in a similar way, with IT teams basing decisions on whether the user has sufficient permissions to access a particular resource, as well as factoring in financial or scheduling constraints.

For instance, purchasing additional licenses or dedicating time to extracting a particular data set.

Service requests can also deal with day-to-day administrative tasks that require IT input, such as password resets, scheduling training, or generating usage reports.

You might also like our round-up of the top [open-source help desk software](https://budibase.com/blog/inside-it/open-source-help-desk-software/).

## Service request management in 5 steps

Now that we have a clear picture of what service requests are and the kinds of resources they deal with, we can start to flesh this out into a more concrete process.

The goal here is to present a repeatable framework that we can apply to any internal service.

Within ITIL, this typically follows a five-step process. Here’s how this works.

### 1. Submission

The first step is for a user to submit a service request. 

This can be achieved in a number of ways, depending on the size of your team and the maturity of your internal IT. In very small teams, this could be relatively informal, perhaps relying on emails.

More often, though, we’ll handle this using more specialist ITSM tools, like internal portals, service desk platforms, or dedicated service request forms. 

The goal is to ensure that service users can provide the required information in the appropriate format with as little effort as possible. This also gives IT teams a secure, accessible record of service requests, facilitating the remainder of the management process.

{{< vimeo id="925338777" title="Service request management" >}}

### 2. Assessment

Once a request is received by the IT team, the next step is deciding how to respond according to established business rules. 

In other words, this is an approval workflow.

The outcome of this might be to approve, reject, or query the request.

For some kinds of service requests, this could be based on very simple logic. For instance, responding to a request to rent a low-value device might simply be a case of whether or not it is available on the dates provided.

In other cases, things can be more complex. For example, say the service request related to acquiring an entirely new tool. 

The logic here could be considerably more complex, even drawing in multiple teams. So, we might need to go through several stages of approvals across financial, technical, security, and operations rules.

For a more in-depth look at how this works, check out our guide to [ITIL application management](https://budibase.com/blog/inside-it/itil-application-management/).

From a practical point of view, the first step is gathering the required information, as we saw in the previous step.

Besides this, the challenge is determining how we want to enforce different business rules.

At the broadest level, this is a question of using automated or human decision-making. For example, we could quite easily automate a decision around the availability of a resource, but if our decision is based on the relative urgency of different requests, this could be trickier.

In both cases, the goal is to ensure that we strictly adhere to business rules as we efficiently reach and communicate our decisions.

### 3. Fulfillment

When a service request is approved, the next step is fulfillment. This means actually delivering the service. Of course, the exact steps involved here depend on the nature of the service being requested.

In most cases, though, service desk teams will need to assign whichever resources are required to action the request, whether this means scheduling tasks or allocating finances. We’ll also need to communicate expectations and timelines to service users.

Throughout this stage, we might rely on a variety of platforms to help us, such as project boards, scheduling tools, field service management, ticketing systems, or self-service portals for employees to track the status of their service requests.

No matter the service at hand, the goal is to reach an appropriate resolution as efficiently as possible through a combination of automating repeatable tasks and streamlining remaining human interactions.

### 4. Completion

The completion stage occurs when a service request has been fulfilled. At this point, the relevant ticket is closed and archived.

IT teams might also wish to use this opportunity to evaluate their internal experiences. For example, the performance of individual service agents, processes, tools, or other workflow elements.

This might mean evaluating the outcomes of individual service requests or at an aggregated level.

In either case, the key is having the appropriate data collection and reporting set up within our ITSM tool stack. For instance, in the form of admin panels, dashboards, and other IT portal tools.

### 5. Follow-up

Lastly, we have the follow-up stage. The goal here is to engage with service users in order to understand their experiences and to try and identify lessons or improvement opportunities.

One goal here is improving alignment between IT and business-line users, given that their priorities might differ somewhat when it comes to assessing the quality of services.

There are two key strategies here. Firstly, we can proactively seek out feedback from users. For instance, sending out automated surveys at defined intervals after tickets are closed.

Alternatively, we might want to take a more reactive approach, such as providing static feedback and suggestion forms that can be accessed by colleagues at any point.

In both cases, our objective is to continuously identify ways to improve our service request management efforts and provide better outcomes for users.

## Strategies for improving service request management

Now that we understand the components of the service request management process and what we’re hoping to achieve at each stage, our next task is to think about some of the strategies we can put in place to optimize this.

We’ve touched on some of the key ones already.

Like any other element of ITSM, automation is a huge priority. The important thing to recognize here is that our service agents’ time is valuable. So, the more we can eliminate manual admin tasks and basic decision-making, the better.

However, this is dependent on having the right service data in place.

This requires a high degree of data centralization and integration across our service workflows. The more we can provide services via centralized, accessible channels, the better positioned we are to gain control over our ITSM data.

Related to this, another key strategy is providing cohesive, unified experiences for service users and agents alike.

By prioritizing accessibility and ease of use for service users, we can simultaneously improve service quality, data accuracy, user experience, resolution times, and other key ITSM KPIs.

## Service request management tools

So far, we’ve touched on several kinds of tools that we might rely on to support our service request management efforts. 

Now, we want to solidify this by examining the key platforms we’ll want to consider when building out ITSM processes.

We have a couple of different options here. Of course, there are purpose-built off-the-shelf solutions out there in the form of help desk software and ticketing systems. These will typically also enable us to build basic forms, inventories, reporting, and approval flows.

The benefit of pre-built tools is that we’ll typically need less up-front labor to roll out our solution. However, this doesn’t necessarily mean a lower lifetime cost. We may also find that it’s more difficult to map these to our existing processes and tech stacks.

Check out our round-up of [ServiceNow alternatives](https://budibase.com/blog/alternatives/servicenow/) to learn more about what’s on the market here.

The alternative is building our own ITSM tools. Even within this, we have a few distinct options. Many teams rely on fully custom intranet-style solutions to handle their IT services, including ticketing, service requests, scheduling, asset management, and more.

The benefit of this is that we can tightly align our internal solutions to our existing business processes and tech requirements. The downside is that, with traditional development tools, this will typically require a large amount of upfront development work and associated costs.

Because of this, a growing number of companies are turning to low-code development to ship internal tools for service request management.

These are platforms that prioritize reusability and visual development, empowering developers and non-developers alike to create professional applications in a fraction of the time.

This is particularly helpful when handling ITSM workflows, as we may need to quickly output or modify the likes of approval apps, request forms, dashboards, ticketing solutions, or other internal tools, without overburdening our development team.

Let’s take a look at why Budibase leads the market here.

![Service Request Management](https://res.cloudinary.com/daog6scxm/image/upload/v1717495015/cms/service-request-management/Service_Request_Management_a6u6nm.webp "Service Request Management")

## Budibase for ITSM

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action. 

Thousands of technical colleagues including solutions architects, systems engineers, IT manager, data specialists, and more choose Budibase to ship professional internal tools, with optional custom code.

We offer dedicated data connectors to query RDBMSs, NoSQL tools, APIs, Google Sheets, and more alongside our built-in low-code database. 

Use our intuitive visual development tools to build custom interfaces, including forms, ticketing tools, CRUD apps, approval workflows, portals, admin panels, dashboards, inventories, project trackers, and more on top of any data source.

Budibase also offers autogenerated forms and CRUD UIs, optional self-hosting, a low-code automation builder, role-based access control, air-gapped deployments, custom plug-ins, free SSO, and much more, making it the ideal solution for teams that need to make work flow.

Check out our [features overview](https://budibase.com/product/) to learn more.