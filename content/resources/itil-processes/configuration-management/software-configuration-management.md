---
date: 2024-09-05
title: What is Software Configuration Management?
description: Check out our in-depth guide to software configuration management processes.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software Configuration Management
    parent: configurationManagement
    post: software-configuration-management
    identifier: softwareConfigurationManagement

---

Software systems are likely the most challenging aspect of our IT estate to track, manage, and maintain. Compared to physical assets or infrastructure, it can be considerably more difficult to track the status or manage and document changes to our software tools.

Additionally, our configuration management processes and solutions are closely related to how we manage development and deploy software, especially with regard to pushing changes to production tools.

As such, while information about our software estate is required as part of our broader service configuration management practice, software configuration management is typically handled as a distinct concern, requiring its own systems, processes, and capabilities.

In this resource, we’re exploring what’s involved in managing the configuration of software systems in the wider context of our ITSM efforts, including service configuration management, as well as other related ITIL practices.

We’ll start by examining what software configuration management is and what it achieves before thinking about the specific process and capabilities we can leverage to implement this in the real world.

## What is software configuration management?

Software configuration management comprises all of our efforts to maintain our software systems in a consistent, usable state. This means documenting, maintaining, and controlling the information that underpins our systems.

The goal is to define and implement measures to track, govern, and manage changes to our software systems in order to minimize errors, boost traceability, and enhance the quality and reliability of our systems.

In more specific terms, this involves a few key tasks. These include:

- Identifying configuration items relating to our software estate, including code, test cases, processes, test cases, and more.
- Mapping dependencies across various software resources.
- Developing baselines relating to our software systems.
- Defining systems for labeling, categorizing, and tracking products, resources, revisions, and versions.
- Controlling changes, releases, updates, and versioning.
- Analyzing and testing changes, including functionally and in terms of service outcomes.
- Validating that our software systems meet their underlying business goals.

This is closely related to how we structure our development and deployment processes within the development team, including the methodology that we adopt. For instance, this could look quite a bit different across Agile or Waterfall-based projects.

Ultimately, the purpose of software configuration management is to establish and implement processes that track and manage all software resources, documents, issues, hardware, budgets, and dependencies relating to a product or development project.

The scale and scope of this will vary based on the specific requirements of your organization. 

For instance, SCM is obviously a bigger concern in large organizations with extensive in-house development teams compared to smaller organizations with relatively little custom internal tooling.

This is also a highly interdisciplinary effort, requiring input from a range of technical and non-technical stakeholders, including developers, DevOps teams, project managers, product owners, solutions architects, systems engineers, and more.

Take a look at our resource on [network configuration management](https://budibase.com/resources/itil-processes/configuration-management/network-configuration-management/).

### Why do we need to track changes to software systems?

Software configuration management plays a key role, both within development projects and across our IT estate more broadly.

In the most basic terms, the core benefit here is establishing control and visibility over our software assets, including how these are used and how they evolve over time. 

In turn, this ensures that software tools are fit for purpose, providing the maximum organizational value with the least possible resource incursion.

At a more granular level, this also facilitates a range of key technical and operational tasks, including within our software development practice, as well as more general service management issues, including legal, financial, project management, and other processes.

Across these categories, some of the key benefits of software configuration management include:

- **Recording the real-world state of our software systems** - including providing oversight of our software systems, how these work, and how they change over time.
- **Managing multi-user collaboration** - configuration management is essential for enabling multiple users to collaborate on our code base.
- **Accommodating change** - providing a basis for users to request, control, and manage changes to our environment.
- **Testing and QA** - enabling software systems to be tested across multiple environments.
- **Productivity** - including reducing the incidence of conflicts or other errors.
- **Cost controls** - tracking the costs associated with managing and maintaining our software systems to maximize efficiency.
- **Auditing** - ensuring that we have accurate data for performing security, compliance, and legal audits.
- **Informing decision-making** - providing our team with the necessary insights to make informed decisions around our software tools and related service considerations.

Of course, as with any aspect of our IT operations, the specific balance of these is determined by our internal goals, requirements, and the resources we have available.

That is, within our own specific systems, we may be focused more on some of these elements than others. As such, it’s important to develop configuration management processes and solutions that align with our underlying goals.

In the following sections, we’ll explore the key stages of an effective software configuration management process, including some of the key decisions we’ll need to make at each, before checking out some of the most important tools and capabilities we’ll need to support this.

## The software configuration management process in 5 steps

Regardless of the scale, scope, or goals of our software configuration management, our efforts will follow the same broad outline comprising the core tasks that are required to establish control and oversight of our software projects.

We can break this into the following five stages.

### 1. Identification and planning

First, we have the identification and planning stage. The goal of this is to establish the scope of a development project, and then plan and identify the elements that are required to achieving this.

Based on this, we’ll also determine the structure and delivery timelines of our project. This includes the ultimate goals, as well as the criteria that will determine that a project has been completed.

Depending on our choice of development methodology, this can look quite a bit different. For instance, in an Agile project, we might release multiple smaller versions of our final product, whereas Waterfall might involve less frequent, more substantial releases.

In any case, to effectively plan the key milestones of our project, including iterative releases, completion dates for specific features, core modules, or other time-bound deliverables.

In addition to this, the core tasks of the identification and planning phase include:

- Establishing the goals of the project.
- Identifying the required configuration items, including code resources, tools, data sources, specifications, test cases, and more.
- Mapping dependencies and relationships between these items.
- Establishing internal roles and responsibilities, including how changes can be authorized.
- Assessing the other requirements and potential roadblocks around delivering our project on time and to specifications.

### 2. Baselines and version control

One of the critical concepts within our software configuration management efforts is what’s known as the baseline. This is a formally approved version of a particular software tool or underlying CI that can only be modified via a formal procedure.

Essentially, a baseline is an agreed description of our software system’s attributes. We can then implement controlled changes to this to progress our system or project to its next stage or state.

This must be agreed upon and documented as a reference version of how our software systems are expected to operate. We’ll then use our baselines as a reference point in the subsequent stages of software configuration management.

Baselines can also be used to signify and operationalize project milestones. In other words, once a baseline is achieved in the real world, we’ll know we’ve reached the corresponding milestone.

Different types of baselines include:

- **Functional baselines** - when a system’s initial requirements have been established.
- **Developmental baselines** - the state of a system while it is in development.
- **Product baseline** - when the product is in a releasable state.
- **Other baselines** - including those relating to any internal processes and procedures.

With a baseline product in place, we can also begin to enforce version control. This is the process through which we implement updates to the system. When this results in a new agreed baseline, this results in a new version.

Within this, we’ll need to define a framework for tracking and managing new versions and their associated labeling, hierarchies, and revisions.

Therefore, version control seeks to enforce defined approval and authorization processes to ensure that our baselines remain consistent with the underlying goals and requirements of the system.

### 3. Change control

Change control is the formal process that ensures that any alterations made to our system or project are consistent with our baselines and requirements. The goal is to govern the specific changes that are made in order to maintain our product’s functionality and usefulness.

Most changes include adding, removing, or updating configuration items. For example, updating user permissions.

This requires us to establish workflows for the following:

- Enabling relevant users to initiate change requests.
- Assessing the related costs, benefits, and risks associated with the requested change.
- Defining the approval criteria and colleagues with the authority to sign-off changes.
- Scheduling and carrying out the associated workloads.
- Documenting and communicating the outcomes of change control processes for the requestor and other relevant stakeholders.

We’ll likely implement distinct controls for different kinds of changes based on their respective costs and benefits. This applies both to the change authority and the specific controls we’ll put in place.

For example, something minor like a UI tweak could potentially be approved by a project manager. More extensive changes to our code base might require highly involved controls from several stakeholders.

We can also implement more complex roles and responsibilities in terms of how users request changes. For instance, only enabling certain colleagues to request particular actions in the first place.

Take a look at our guide to [ITIL change management](https://budibase.com/resources/itil-processes/change-management/) to learn more about how this can be applied across our IT estate.

### 4. Configuration status accounting

Configuration status accounting means tracking the real-world development of the project against our baselines. This means reporting on the status of configurations that are scheduled or should have been completed.

In most cases, we can break this down into three components:

1. **Recording** - Configuration data is recorded when changes are made to the system.
2. **Status monitoring and reporting** - A detailed audit trail is created of the status of all configuration items across the project.
3. **Verification** - Ensuring that all changes conform to the requirements of the project.

The goal, ultimately, is to ensure that our system continues to adhere to our underlying requirements.

So, another way of framing this is that this stage of the software configuration management process deals with how we ensure that information about our systems is kept up to date with their real-world state.

This assists with a huge range of related asks. For instance, support teams need to have a clear understanding of the current status of our systems in order to formulate responses that solve end users’ problems.

Configuration status accounting is also vital for reducing the incidence of errors across tasks that draw on our software assets. For instance, eliminating the risk of conflicts relating to undocumented changes.

### 5. Audits and reviews

The final stage of the software configuration management process is conducting regular audits and reviews.

Audits are used to systematically review all of the actions, workflows, configuration items, changes, files, documentation, tests, and anything else that has contributed to reaching our baselines.

The review process also involves assessing our software systems to verify their integrity, as well as assisting in creating key documentation, such as release notes, end-user guides, installation manuals, and more.

For instance, confirming that changes to our baselines reflect what is included in relevant reports.

We may also opt to conduct audits and reviews that are more focused on specific metrics or issues. For instance, relating to security vulnerabilities or cost-controls within our development processes.

The overarching goal here is to confirm that our software systems, as they are in situ, align with the underlying objectives of the project. 

Additionally, this helps us to ensure that our configuration management and change control processes are, firstly, fit for purpose and, secondly, adequately adhered to in the real world.

This stage of the software configuration management process typically culminates in the creation of several documents and resources, which may include FAQs, user manuals, configuration guides, how-tos, release notes, memos, or other comms.

As such, this also assists us with a range of follow-on activities, including end-user training and onboarding.

## Key tools and capabilities for configuration management

Lastly, we can consider some of the key technical solutions that we’ll need to consider in order to implement effective software configuration management processes.

Many development teams rely on dedicated configuration management platforms. These are solutions that combine code repositories with key capabilities, such as automated reviews, deployment tools, uptime monitoring, audit logs, and change control policies.

Most of these are Git-based, meaning that versions and updates are tracked, recorded, and reversible. This forms the backbone of all stages of our process by simplifying the process of recording and managing configuration information.

Another key capability we need to consider is how we handle end-user interactions outside of our development team. In the context of software configuration management, the most common example of this is facilitating change requests.

It’s common to handle this outside of our core repository management tools, often for security and user management reasons. 

Typically, this involves developing internal tools such as forms or approval apps in order to enable users to submit requests in a defined schema for our IT team to assess, analyze, approve, and implement.

Check out our guide to [change management software](https://budibase.com/resources/itil-processes/change-management/change-management-software/) to learn more.

Lastly, our configuration management systems must also integrate effectively with other relevant tools within our IT estate. The most important elements of this are our ticketing and service desk platforms.

For instance, we should prioritize interactions both in terms of escalating tickets to our SCM team, as well as providing relevant configuration information to our support colleagues in order to reach effective resolutions as quickly as possible.
