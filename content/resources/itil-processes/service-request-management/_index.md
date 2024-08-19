---
date: 2024-08-10
title: What is Service Request Management?
description: Learn how service request management is structured and implemented within ITIL.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Service request management
    identifier: serviceRequestManagement
    post: service-request-management
---

Service request management is central to how we handle interactions between the IT team and end users.

Empowering colleagues with regularized, efficient access to services is one of the most basic pillars of our ITSM delivery.

The IT Infrastructure Library (ITIL) is a framework for designing and implementing ITSM processes that prioritizes value for the wider organization.

In this guide, we’re exploring how service requests are handled within ITIL and the practical and theoretical issues that underpin effective service delivery.

## What is service request management?

Service request management is the ITSM process that enables users to access regular, defined services.

This is the point at which most end-user-focused service processes are initiated. For example, device rentals, data requests, password resets, support ticketing, or other day-to-day internal IT services.

The goal of service request management is, firstly, to provide colleagues with a convenient, accessible way to initiate service requests. Secondly, this furnishes IT teams with the information they need to respond to requests.

Therefore, our priorities are balancing streamlined experiences for the users initiating requests with the need to collect the structured data that’s required to enact defined business rules relating to delivering specific service workflows.

### What is a service request?

At the highest level, a service request is any interaction between a service user and the IT team that initiates a service workflow.

Informal examples of this could be an email, phone call, or face-to-face conversation.

However, in an enterprise context, service request workflows must be formalized. This means providing users with a consistent means to provide information about their requests in a defined schema.

Therefore, at a more technical level, when we talk about a service request, we’re also referring to the data object that triggers a service workflow.

Defining this data schema is a core part of our service design, with service requests applying specifically to regularized processes that are offered within our service portfolio.

### Service request workflows

To better understand what service requests are, we can situate them within their broader workflows.

That is, the sequence of events and actions that requests result in.

Naturally, the granular details of this will vary hugely across different organizations and the services they offer. 

However, we can characterize almost all service request workflows as being made up of the following elements.

1. **A request submission** - the initial request itself, made up of whatever data is required to initiate a service.
2. **An approval/authorization flow** - in which IT teams apply defined business rules to the request in order to determine how to proceed.
3. **Service fulfillment** - the follow-on actions that are required to deliver a service if it is approved.

At least, these are the core building blocks of a request workflow.

In the real world, the scale and complexity of each of these steps can vary widely.

For instance, authorizing a basic request like a password reset might be a simple matter of agent availability. Or, this could even be largely automated in a self-service workflow.

By contrast, authorizing a request to acquire a new device might require input from a range of stakeholders, including the IT, legal, finance, or operations departments.

Besides these three core elements, some service request workflows might require additional stages, especially where there are stricter requirements around business analysis and evaluation or documentation and knowledge management.

## Managing service requests in ITIL

ITIL is a very specific approach to managing ITSM that breaks our service provision down into 37 constituent practices. These are divided into three categories: general management, service management, and technical management.

Service request management is an ITIL practice under the service management umbrella.

This is formally defined within ITIL as the practice that handles all pre-defined, user-initiated service requests in an effective and user-friendly way. 

ITIL also defines a service request as any submission from a user that initiates a service that has been agreed upon as a normal part of service delivery.

While ITIL does not prescribe rigid processes to individual ITSM practices, it does offer a clear framework for delivering value across the business through IT services.

Here’s what this means in the context of service request management.

### Types of service requests

Earlier, we alluded to the fact the specific kinds of service requests may be handled differently from one another. ITIL distinguishes between a variety of different types of service requests.

Specifically, these are characterized as including one or all of the following:

- **A request for service delivery** - such as a password change or replacement of a consumable,
- **A request for information** - like a dataset or file,
- **A request for provision of a resource, asset, or service** - including procuring end-user devices,
- **A request for access to a resource, asset, or service** - including device rentals or other capabilities.
- **Feedback relating to a service** - for instance, complaints or recognition of a service team.

In some cases, service requests might also necessitate change within our services, although these are limited to what are known as standard or normal changes within ITIL’s change control practice. 

That is, routine changes that might still require some element of authorization, such as procuring new devices.

The important thing here is that different kinds of service requests will have distinct initiation, authorization, and fulfillment processes, as well as varying in terms of the colleagues that can initiate, approve, or fulfill them.

We’ll also see a similar variety within each category of service request. For instance, all asset rental requests might follow a similar pattern, but the specific business rules governing individual devices could vary depending on their financial value or importance.

As such, ITIL does not go as far as providing detailed guidance on how to handle requests for individual services, as the likelihood is that we’ll need to design a large number of these even within a single organization.

Rather, it provides a series of principles for designing effective service request flows, along with best practices, such as providing expectations and timelines to users around their requests as part of the service catalog management process.

### Service requests vs changes & incidents

One of the underlying facets of ITIL is recognizing and accounting for the intersection of various ITSM practices. Certain IT processes will always overlap.

The two practices we need to be cognizant of here are **change control** and **incident management**.

Change control is the practice of assessing and authorizing requests for updates, alterations, or removals to elements that contribute to an IT service. Incident management relates to how we mitigate the impact of events that could affect our service delivery.

While each of these is a distinct practice within ITIL, it’s nonetheless important to understand the relationships between them and the specific points where they can intersect.

The key thing here is that an single request from a user might entail elements of some or all of these practices.

As we saw a few moments ago, some element of change might be required in order to deliver a routine service. For example, if we need to acquire a new asset or make changes to any other configuration item in order to deliver a service according to specifications.

Similarly, the initial need for an end user to initiate a service workflow could be related to an incident. A common example of this would be requesting a password change because of a low-level security breach.

In this case, as well as delivering the directly applicable service, we’d need to carry out whichever remedial actions are outlined in our incident management practice in response to their service request.

As such, it’s imperative that we build these points of overlap into our designs for each of these practices.

### Applying the service value chain

All ITIL practices are structured around what is known as the service value chain (SVC). The core focus of ITIL is delivering value to end users through IT services.

The SVC is a framework for outlining the activities that IT teams can perform in order to deliver value.

This is made up of six parts:

- **Plan** - analyzing the current state of our services in order to understand the high-level goals for improvement.
- **Improve** - defining the specific improvement opportunities within our IT services.
- **Engage** - working with stakeholders to establish priority areas where the IT team can deliver value.
- **Design and transition** - developing new solutions, including technology, processes, and policies, to meet the requirements of service stakeholders.
- **Obtain/build** - procuring the necessary capabilities and resources to meet our requirements.
- **Deliver and support** - implementing the agreed services in line with our specifications.

The service value chain applies across our ITSM efforts, but individual services and practices typically skew more towards some activities more than others.

For instance, service request management is most heavily weighted towards the delivery and support stage.

Nevertheless, we can apply the entire service value chain to our ITIL service request management practice. 

This might look like the following:

- **Plan** - developing request workflows that provide efficient, consistent access to agreed services.
- **Improve** - using interactions with service users during request workflows to identify opportunities for wider improvements.
- **Engage** - service request management is one of our core channels for managing interactions with service users during regular delivery.
- **Design and transition** - using service request management as a means to identify demand for new solutions or other provisions.
- **Obtain/build** - identifying new configuration items that a re required as part of normal service fulfillment.
- **Deliver and support** - service request management is critical to our users ability to access all kinds of IT services and support.

### Measuring value

ITIL’s overarching goal is to enable IT teams to identify demand for services and respond to these in a way that delivers value to the entire organization.

As such, within individual practices, we need to think about what value means to various stakeholders.

There are a few distinct strands of value we need to be aware of here in the context of service request management.

The first relates to the IT resources that are required to deliver services to users. Effective request management drives efficiency in this respect, including eliminating manual admin and communications tasks, as well as helping to rationalize resource allocation.

Similarly, service request management helps to deliver value for end users by lowering the barrier to accessing the services they need, thereby enabling them to carry out their own daily responsibilities.

So, we might operationalize this around metrics such as time to resolution for service request tickets.

We can also frame the value that service request management drives in terms of our wider goals for specific services. That is, if the service that users are trying to access meets its goals then this is a positive indicator for our request management workflows too.

These could include the likes of uptime, user satisfaction, resolution rates, capacity management metrics, and more, as defined in our service quality management practice.

### Service request management and other ITIL practices

As we’ve said already, one of the key characteristics of ITIL is that the constituent practices are highly interrelated, often in complex ways.

While we can’t predict every possible permutation of this, it’s vital to understand the other practices that ITIL service request management is most closely related to.

Two that we’ve seen already are **change control** and **incident management**, which both also seek to manage user interactions for defined service workflows. **IT asset management** is similarly intertwined with request management.

We’ve also alluded to **service financial management**. This is the practice that relates to the budgetary resources required to deliver our services. Request management has a role to play here, especially in terms of minimizing the costs associated with fulfillment.

Several practices under the **service management** category also interact closely with our request management efforts, including **service level management**, **capacity and performance management**, **service desk**, and **service design**.

Each of these is central to how we define goals and design request workflows to meet them as part of our normal service delivery.

ITIL emphasizes the need to work holistically in order to deliver value through our ITSM provision, with no individual practices operating in isolation. We’ll return to this idea later in this resource under best practices.

## Benefits and challenges for ITIL service request management

ITIL is a specific framework for IT service delivery. However, it’s not the only model we can use to structure our ITSM provision. As such, it’s useful to consider the relative pros and cons of implementing ITIL in the specific context of handling service requests.

### Benefits

To understand the benefits of ITIL thinking, we’re best served by considering the core principles that underpin it.

ITIL’s seven guiding principles are:

1. Focus on value.
2. Start where you are.
3. Progress iteratively with feedback.
4. Collaborate and promote visibility.
5. Think and work holistically.
6. Keep it simple and practical.
7. Optimize and automate.

These provide guidance on how best to develop ITSM workflows that mutually benefit IT teams and service users.

By applying these principles to our service request management practice, we can expect the following benefits:

- **Flexibility** - by basing our actions around practical steps to improve our real-world service delivery, ITIL is applicable in a wide range of contexts.
- **Efficient access to services** - enabling end users to access services quickly, as and when they are required.
- **Regularizing and centralizing request data** - providing centralized solutions for handling request data in order to maximize process adherence and transformation potential.
- **Decreased risk** - including incidents, security breaches, financial loss, and more.
- **Understanding service demand** - applying a systematic approach to managing service requests is an essential part of understanding the internal demand for IT services.
- **Capacity planning** - leveraging request data to understand where and when capacity is required.
- **Clear service records** - providing a paper trail of request outcomes, experiences, and learnings as part of our wider knowledge management practice.
- **Continuous improvement** - identifying opportunities to enhance our service provision on an ongoing basis.

Ultimately, we can distill this down to the idea that ITIL provides us with a roadmap to design and implement ITSM workflows that deliver value to users while minimizing the costs incurred by the IT team.

### Challenges

However, implementing ITIL service request management is not necessarily a straightforward process. In fact, we’re likely to encounter a range of challenges that could impede our progress across financial, operational, human, and technical issues.

These include:

- **Accounting for complex service portfolios** - defining request workflows in large, complex service portfolios can be a highly laborious process, particularly where distinct approaches and points of contact are required for each.
- **Modeling appropriate service request data** - creating request workflows requires us to establish the required data objects that will underpin our authorization and fulfillment tasks.
- **Overcoming internal resistance to change** - when implementing any new initiatives, we’ll need to secure agreement surrounding both the need for change and the specific strategy we’re opting for.
- **Designing user experiences** - while building our request workflows, we must be conscious of the specific needs of service users, especially in terms of their preferred tools and levels of technical knowledge.
- **Dealing with permissions** - various kinds of colleagues will have access to different services, as well as permissions to access different data and actions within relevant workflows.
- **Approving service requests** - developing approval and authorization flows that enforce business rules without creating excessive administrative workloads.
- **Securing resources and providing capabilities** - identifying the resources and technical capabilities that are required to manage service requests and securing the budget to acquire these.
- **Maintaining data accuracy and consistency** - both within our service request management practice and in conjunction with related practices, such as knowledge management, service catalog management, and more.

While none of these are likely to rule out ITIL request management entirely, they are all issues that we need to account for within our process design.

As such, we need practical guidance on the steps we can use to maximize our chances of success.

## Best practices

As we know, ITIL is not concerned with defining rigid processes or prescriptive structures for our ITSM practices. Instead, the priority is furnishing IT teams with guidance on how to design practices that are appropriate to their unique requirements.

As part of this, ITIL outlines several best practices for managing service requests.

### Maximize standardization and automation

As far as possible, request workflows relating to a particular service must be standardized. That is, the underlying business rules must be enforced consistently for each instance of a given service request.

Generally speaking, this means that the same outcomes should be reached regardless of which colleagues initiate and respond to the request. Or, in more complex cases, this might apply to individual colleagues that share a particular role.

Standardization is also a precondition for automating workflows. 

Again, one of ITIL’s guiding principles is to optimize and automate service delivery. 

There are a few key areas within service request management where we can most readily apply this. One important optimization strategy is providing users with self-service tools, enabling us to divert IT resources toward more pressing issues.

Opportunities for improving service request management include automatically authorizing requests based on computable values, as well as triggering certain communications or other basic follow-on actions.

### Minimize authorization and approval steps

Related to standardization is the idea that our practices should be simplified to the minimum number of steps required to effectively enforce business rules.

The element of request management where this is most pertinent is authorization and approvals. 

It’s not uncommon for teams to get caught up in extraneous approval processes. In turn, this introduces additional costs and delays, thereby harming our **service quality management** and **service financial management** practices.

As such, our goal should be to outline clear responsibilities so that we can rely on the minimum number of approval steps that adequately enforce our business rules.

### Focus on user expectations

When designing service request solutions, it’s useful to think in terms of user experiences. The idea here is that a streamlined, effective UX will also feed other aspects of our service quality management, including efficiency, resolution rates, or other key metrics.

There are a couple of key aspects to focus on here.

The first is our request submission flow. This begins from the moment the user realizes they need to access a service. Our task at this stage is empowering them to identify the specific services that will meet their needs without our service catalog.

Following on from this, our priority is to provide a clear, guided experience for users to submit requests, typically in the form of ticketing platforms or dedicated form UIs.

During the fulfillment stage, user experience largely relates to resolution times, but we can also consider what steps we can put in place to ensure that users receive adequate communications as their cases progress, including leveraging automations.

### Continuously improve

One of the key ideas within ITIL service request management is continuous improvement. At a broad level, this means that we should seek out opportunities to make our request workflows more effective on an ongoing basis.

There are a couple of practical elements to this.

Firstly, it’s good practice to provide colleagues, including IT teams and service users, with tools to submit feedback on our service provision. For example, feedback or suggestion forms to help us identify opportunities to streamline workflows.

Secondly, we can more proactively seek out improvement opportunities. As a part of our monitoring and quality management workflows, the goal here is to identify areas where improvement is required and then use this information to design specific interventions.

Related to this is the issue of maintaining our service quality in the face of changing requirements, service demand, or other external factors. For example, planning for how we can scale our service request workflows to a growing user base.

### Define workflows to re-route service requests to related practices

Lastly, in order to effectively implement ITIL thinking, we must take account of the areas where constituent processes intersect. As we said earlier, the most relevant practices here include **change management** and **incident management**.

In both cases, part of the challenge is that users might submit information relating to a change or an incident as part of a normal service request without understanding the difference.

We can think more practically about how we can put measures in place to ensure that the appropriate process is initiated by these kinds of requests.

The key here is what’s known as workflow routing. Essentially, this means passing our submission to a separate practice if certain defined criteria are met, such as relating to a particular kind of configuration item or event.

We might even rely on automation here. Enabling our service colleagues to automatically create a new row in our incident management database based on a service request submission using an in-app action like a button-click.

## Tools for managing service requests

Lastly, it’s important to be aware of the kinds of capabilities that are generally required for service request management. We’ve touched on most of these already and will cover each in more detail in a separate resource.

For now, though, we can simply outline the core tools that most IT teams rely on here.

One approach is handling all service requests within a centralized ticketing platform. A benefit of this is that we can provide service users and IT colleagues with a singular tool to manage requests, as well as related tasks like support, incident management, or device rentals.

As such, this can often be an attractive option, especially for teams with more simplistic ITSM requirements.

For more sophisticated ITSM portfolios, we’ll often rely on a service catalog. This is an internal tool where colleagues can access information about the services available to them and initiate requests.

Importantly, different colleagues might have access to different services, depending on their role and seniority. In any case, the goal is to outline what the service entails and what’s required to initiate it.

We might still handle submissions within a ticketing platform or with dedicated forms, depending on how closely we want to control our submission data.

Lastly, like all ITIL practices, our service request management needs effective tracking and monitoring in the form of admin panels, dashboards, and other tools, in order to consistently monitor key metrics, such as request volumes, resolution rates, or other defined KPIs.