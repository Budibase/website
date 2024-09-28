---
date: 2024-09-20
title: What is Software Change Management?
description: Read our in-depth guide to software change management.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software Change Management
    parent: changeManagement
    identifier: softwareChangeManagement
    post: software-change-management

---

Software change management is a critical part of how we maintain our IT environment so that it’s fit for the needs of users across the organization. 

However, implementing changes to our software estate is particularly challenging, as it must balance technical, operational, and human considerations while also taking account of often vastly complex webs of dependencies within systems.

Therefore, the controls and processes we need to implement to govern this are particularly important. On top of this, software change management is highly tied up with a range of other processes, including testing, deployment, security management, user management, and more.

As such, the tools, workflows, and policies we rely on to implement successful changes to our software assets are critical.

In this resource, we’re covering everything you need to know. 

Let’s start with the basics.

## What is software change management?

Software change management comprises all of our efforts to maximize the success of change initiatives for our software assets. 

This includes a range of activities, including identifying demand for change, formulating responses, enforcing approval rules, implementing changes, and documenting outcomes.

Each of these can be a complex process in its own right. The goal of software change management is to establish effective policies across all of these areas and select tools and processes that enable us to implement them effectively.

{{< vimeo id="1001639737" title="Software Change Manaegment" >}}

This relates to several practices within ITIL. 

Chief among these is our wider change control efforts, but we’ll also need to consider our configuration management, deployment management, software development and management, and infrastructure and platform management practices, among others.

It’s also important to note that we’ll need distinct approaches for different kinds of changes within our software estate. This can be informed by the nature of the software assets affected or the changes themselves.

Let’s think about each of these issues in turn.

### Common software CIs

First of all, it’s important to understand the kinds of software configuration items we might be dealing with. A software CI is any software tool or resource that contributes to our internal IT products and services.

This can include a variety of proprietary, custom, or COTS software, including:

- Internal tools,
- Internally developed products,
- SaaS platforms,
- Databases,
- Repositories,
- Off-the-shelf licenses,
- Developer tools,
- Libraries, utilities, and frameworks,
- Operating systems,
- Middleware,
- Admin tools,
- Dependencies,
- Polices, certificates, and compliance tools.
- Other CIs that support our software portfolio, such as network infrastructure, cloud assets, or support contracts.
- Any other software.

Importantly, the kinds of changes that we’re likely to encounter under each of these will differ quite substantially.

For example, the changes that we can make to an off-the-shelf package or SaaS platform might be quite limited, whereas we could conceivably alter any aspect of an in-house developed solution if needed.

On top of this, various different kinds of software CIs will typically be owned by distinct stakeholders, either internally or externally. 

For instance, some tools could be controlled by our IT team, while others are owned by business-level departments, external contractors, or vendors.

This will determine who is responsible for approving, managing, and implementing changes, so it’s a vital component of our change management processes.

### Types of changes

It’s also important to understand how we can categorize different kinds of changes to our software CIs. However, given the variety and complexity of software tools we could be dealing with, this can naturally be difficult to predict.

As with other kinds of change management, it’s helpful to have a system for prioritizing initiatives.

We can do this based on the relative costs, risks, and potential impact of change initiatives. 

Specifically, it’s best practice to divide changes into the following three categories:

1. **Standard changes** - regular, pre-defined changes that carry a low amount of risk and may, therefore, be pre-authorized.
2. **Normal changes** - day-to-day changes that must be risk assessed and follow defined procedures for approval and implementation.
3. **Emergency changes** - changes that are required to respond to an incident or emergency, where the risks involved must also be balanced with the need to respond quickly to events and restore services.

Each of these also corresponds to an appropriate level of control and authorization that must be applied to approve and implement change.

For instance, standard changes might require no formal authorization at all, or they might be a simple matter of needing on-the-ground colleagues to schedule the required tasks. By contrast, emergency changes might require the authorization of leaders from a range of teams.

Normal changes might require varying levels of authority to approve, depending on their severity.

In any case, we’ll see how this is defined a little later when we discuss software change management processes in more detail.

### How does software differ from other kinds of change management?

So far, much of what we’ve seen applies to all kinds of change management. So, it’s important to consider some of the specific areas where this is different in the case of implementing changes to software CIs.

One issue, which we alluded to earlier, is that this is highly integrated with a range of processes that are specific to software tools, which we won’t encounter with other kinds of CIs.

For instance, to deploy a change to an internally developed tool, we will likely need to go through existing testing, version control, DevOps, deployment, and other processes. This can make changes considerably more complex to design, authorize, and implement.

Additionally, software CIs are often more intricately integrated and interdependent on one another, as well as other kinds of resources. For example, changes to one software package can greatly impact a number of others.

This can be challenging to manage, both from the perspective of planning and authorizing changes, as well as implementing them.

To account for this fact, we’ll need to have accurate, up-to-date records of how our software tools are configured, both in the real world and in their intended state. 

As part of our change management efforts, we must also adjust our baseline configurations to reflect changes that have been implemented.

## Why do we need software change management?

To understand the role of software change management, it’s helpful to start by considering why change is necessary and even beneficial within our software estate. 

The reality is that a huge range of elements of our software systems might require updates, alterations, or deletions to respond to changing requirements, new threats, or growing and evolving use cases.

Therefore, the extent to which we can respond quickly to these factors and reflect them with changes to our software estate is critical to our ability to provide value to service users.

However, as we said earlier, the core goal of change management is to help us maximize the number of successful change initiatives we adopt. Specifically, this means identifying which changes we ought to make and ensuring that they are implemented effectively.

This brings on a range of concrete benefits, including:

- **More effective software** - ensuring that our tools remain fit for purpose.
- **Reduced risk** - facilitating risk assessment for all proposed change actions.
- **Cost savings** - including boosting efficiency and reducing development costs.
- **Control and governance** - enforcing business rules regarding which changes are implemented.
- **Oversight and visibility** - providing clear records of how our systems evolve over time.
- **Future planning** - creating a basis for predicting our needs around future change initiatives.

We can set goals for our change management practice against any combination of these, which can be used to inform the processes we develop for handling various kinds of changes to our software estate.

## Process for managing software changes 

Changes to software tools follow the same basic pattern as other CIs. However, given some of the factors we discussed earlier, software also presents some unique challenges, particularly in terms of heightened requirements for planning, testing, and deployment.

Here are the core steps we’ll need to follow to successfully implement software changes.

### 1. Request

The first thing we need to do is establish that there is a need for change - or a potential need for change. In most cases, this is submitted via a *change request*. Normally, this means providing users with dedicated forms for suggesting changes to our tools within a defined schema.

The goal here is to create streamlined experiences for users to submit the information that’s needed to initiate and action a request management workflow.

As such, the specific schema of our forms will likely vary across different types of software changes. For instance, providing specific forms for key changes like feature requests.

Take a look at our resource on [change request management](https://budibase.com/resources/itil-processes/change-management/change-request-management/) to learn more.

### 2. Request review

Next, submitted change requests must be reviewed and analyzed. This may be the responsibility of the relevant project team or a more collaborative approach. 

The basic goal here is to determine whether or not the proposed change is viable, at least in prospect. That is, whether it fits our organizational goals and would benefit our existing software systems.

The review stage also involves categorizing the request in order to determine its priority and the controls that must be applied later in the change management process.

This includes who will be responsible for the remaining stages of the change management flow, as well as who the authority is for approving the change.

### 3. Planning

The planning stage requires more in-depth analysis of the costs, risks, and timelines associated with implementing our proposed change. In the case of software change management, this is particularly complex.

One of the key factors we’ll need to determine here is the time that will be required to implement the change, whether this is development hours or some other kind of work. This will determine when the required work can be scheduled.

We’ll also need to consider other costs, such as licenses for new tools or other equipment and resources, alongside workloads, including testing, QA, and deployment.

Similarly, planning requires us to assess the dependencies of the tools in question in order to assess the potential impact of any changes we might make and reduce the risk of associated interruptions or other issues.

By the end of this stage, we should have a clear business case for the proposed change.

### 4. Authorization

Authorization is the point at which we decide if a change will go ahead or not. We can think of the business rules that underpin this as comprising two parts. First, there’s the authority. This is the colleague or other stakeholder responsible for approving the change.

Second, we have the approval criteria. These are the specific conditions that must be met in order for a particular kind of change to be authorized. Importantly, these vary across different types of changes and should be proportionate to their associated risks, costs, and benefits.

For instance, a minor change like altering the color of a button UI might simply be a case of whether or not our team has sufficient availability. More major changes will have more stringent requirements.

Emergency changes are somewhat more complex, as we need to balance the need for expediency with deploying effective resolutions. As such, these might require more advanced approval criteria, as well as collaborative efforts from multiple stakeholders for authorization.

Once authorized, a change can be scheduled for implementation.

### 5. Implementation

Implementation is the area where differs most from other kinds of change management. This is because it’s highly tied up with a range of existing development processes. For example, managing changes to our code via a Git-based repo.

We’ll also have to factor in associated tasks, such as design changes, back-end work, capacity management, DevOps, testing, deployment, version control, and more.

As such, even relatively simple changes to custom code bases can be constrained by extensive, complex processes, particularly in larger teams or situations where we’re implementing changes to mission-critical tools.

Importantly, this can look quite a bit different depending on whether we’re dealing with changes to a live product or one that is currently in development. 

That is, change to a development project that hasn’t been launched yet can be somewhat simpler, as we’re tasked with altering the tasks that make up our development roadmap, rather than making changes to a production system.

### 6. Closure

The closure stage comprises everything that happens after a change has been implemented. In the first instance, this means marking any relevant tickets, requests, or tasks as complete.

However, to complete our software change management initiative, there are a few critical tasks we’ll still need to perform. For one, we must determine the success of our initiative - both in terms of the underlying goals of the change itself, and the associated costs of implementation.

Documentation is also critical when dealing with changes to software CIs. We can consider this in two broad strands. First of all, we need to keep our configuration records up to date, including any changes to the status or other key elements of our software assets.

Take a look at our guide to [software configuration management](https://budibase.com/resources/itil-processes/configuration-management/software-configuration-management/) to learn more.

Secondly, we need to communicate the practical implications of changes to affected users or other stakeholders, including within direct communications, training materials, documentation, and other elements of our knowledge management practice.

## Tools for handling software change

Lastly, we need to consider the key capabilities we’ll need to effectively manage changes to software CIs.

We can divide these into a couple of broad categories. Firstly, there are tools that are used to deal with the administrative side of request management. That is, receiving, assessing, and responding to requests.

The most important among these are change request forms, whether these are presented as dedicated tools or part of a wider service desk or ticket management platform. Take a look at our guide to [change management software](https://budibase.com/resources/itil-processes/change-management/change-management-software/) to learn more.

The other cluster of capabilities we’ll need to account for are more specific to software CIs. As we’ve alluded to extensively, our change control practice here is deeply intertwined with our existing development and deployment management practices.

As such, we’re reliant on a diverse range of existing platforms for managing changes to our software estate, including version control, development tools, DevOps platforms, platform management, deployment solutions, and anything else that we’ll need within normal development workflows.