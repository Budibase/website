---
date: 2024-09-25
title: Change Management vs Release Management
description: Take a look at our guide comparing change management and release management.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Change Management vs Release Management
    parent: changeManagement
    identifier: changeManagementVsReleasenManagement
    post: change-management-vs-release-management


---

Change management and release management are two highly interrelated activities at the center of how we deliver effective, fit-for-purpose IT services. However, this is also a common source of confusion and conflicts.

The challenge here is that these practices are so closely tied together, with each one playing a key role in how we alter our service portfolio to ensure that it continues to drive maximum organization value.

In this guide, we’re exploring the relationship between these two practices, including what each one is, where they differ, and the key areas where they overlap. 

By the end, we’ll have a full understanding of the respective roles and benefits of each one, along with some of the practical steps we can take to reflect this relationship.

## Change management and release management: definitions

We’ll start by checking out the basic definitions of each practice, as well as where they sit within our wider ITSM portfolio. 

As we hinted at earlier, both come into play when we’re handling new or updated initiatives and services.

Let’s take each one in turn.

### Change management

Change management is formally included in the change control and organizational change management practices within ITIL. 

Change control seeks to maximize the number of successful changes that are implemented, while organizational change management deals with the human side of this. The goal is to identify the changes that will drive value and manage their implementation to minimize costs and risks.

A change can comprise any update, addition, or deletion relating to our service portfolio or any of the elements that contribute to its delivery.

Change management centers around defining and applying business rules that are appropriate to the needs of different kinds of change initiatives. Depending on the seriousness of the proposed change, the extent of what’s required will vary.

So, some repeatable, low-risk changes might essentially be pre-authorized. Other changes will be less predictable and may require more extensive analysis, risk assessment, and approval workflows to determine if they should be adopted.

Change management is also concerned with how we identify that there’s a demand for change in the first place. 

This can come in a few forms. 

Our primary method is often allowing users to submit change requests through formal channels, although the need for change may also come from other sources, including normal service interactions, capacity planning, incident responses, and service level management.

{{< vimeo id="1001639751" title="Change management vs release management" >}}

Similarly, change management deals with how we prioritize different initiatives based on their associated costs, risks, and benefits. This culminates in a change schedule, which allows us to manage the delivery of concurrent initiatives in line with their required resources.

{{< template-cta template = "changeManagement" >}}

### Release management

Release management deals with the more practical side of actually building and rolling out changes to our services, especially in the case of software CIs and resources. The goal is to manage the process of making new versions of our CIs available for use.

A software CI can be an in-house developed tool, resource, or asset. Alternatively, it might be a piece of software that’s developed or provided by a third-party vendor or contractor.

We can define a release as a rollout of a new or modified software CI. 

Changes to our software tools are particularly complex compared to other types of CIs. Release management seeks to account for this fact by enforcing processes and procedures for planning, building, assessing, testing, and deploying changes to production environments.

This comes into play when a change initiative concerning our software CIs has been authorized as part of the change control process.

Release management applies to entirely new software tools as well as alterations to existing ones.

Critically, a release comprises much more than simply pushing a new version of a software tool live. Rather, most releases will require changes to several elements, including our code base itself, as well as network CIs, documentation, processes, dependencies, and more.

The ultimate goal of release management is to plan and coordinate all of these factors in order to establish the exact combination of elements that will be required to successfully implement a change. 

These are then scheduled and managed to completion.

Importantly, the specific structure of release management tasks is informed by our existing development processes. For example, releases are typically staged, but this will look different depending on whether the project follows an Agile or Waterfall methodology.

While release management is a stand-alone practice with ITIL, it’s also closely interrelated with a range of other processes, including software development and management, infrastructure and deployment management, configuration management, and more.

You might also like our guide to [software change management](https://budibase.com/resources/itil-processes/change-management/software-change-management/).

## Key differences between change management and release management

Now that we’ve explored what both change management and release management mean in practice, we can begin to flesh out our understanding of the relationship between them.

The first important distinction we can draw between these two practices is in terms of scope.

One way of conceptualizing this is that change management deals with the full operational side of how we handle change across our entire ITSM provision, including identifying demand, planning interventions, seeking approval, implementing, and following up on change.

By contrast, release management has a more narrow scope, focusing primarily on the practical side of how we implement changes to our software estate and related CIs.

As we’ll see in the next section, this means that change control provides crucial inputs for our release management practice.

We can also see important distinctions between the colleagues that are typically responsible for each of these practices.

As a function, release management is highly concentrated within on-the-ground technical teams, particularly those that are responsible for specific software projects and resources.

So, most release management tasks are carried out by relevant architecture, development, testing, QA, and documentation teams, as well as DevOps and infrastructure colleagues. The specific inputs we’ll require can vary according to the scale and scope of the release.

In some cases, we might also have a dedicated release management role.

By contrast, change control can be much more of a shared responsibility across the IT team and other departments.

This is a result of two key factors. First, whereas release management deals almost exclusively with software CIs, change control is concerned with our entire service portfolio and all elements that contribute to it.

A general best practice is that changes should be managed, assessed, and authorized by the most relevant functional teams related to the CIs they concern, as long as the associated risks and costs don’t preclude this.

This means that the principles of effective change control must be built into processes across functional teams rather than necessarily being centralized as a singular responsibility.

However, the second factor relates to the fact that the rules governing change must be proportionate to the risks, costs, and benefits of individual initiatives.

So, managing more major changes might be a more centralized or collaborative process. For example, requiring input from multiple stakeholders or reserving approval rights for a more centralized authority.

Take a look at our guide to designing [change management processes](https://budibase.com/resources/itil-processes/change-management/change-management-process/) to learn more.

## Overlap and intersection

In order to fully appreciate the relationship between change management and release management, we must also examine the key areas where these two practices overlap and intersect.

One of the central principles of ITIL is a recognition of the inherent overlap between the practices that make up our IT service provision and the subsequent need to act holistically to account for this fact.

Changes and releases are two of the most closely related ideas in terms of how we structure our IT services.

So, let’s think about how these fit together.

As we alluded to in the previous section, a good way to conceptualize this is that change management provides inputs to release management in the form of authorized changes to implement relating to our software CIs.

In turn, release management provides the outputs required to implement these change initiatives.

It’s important to note that change control does concern the implementation of change initiatives. Specifically, the design & build, and deployment phases of the change management process handle the practical side of change implementation.

Naturally, what this means in practice varies according to the nature and needs of the change initiative at hand. In the case of changes relating to our software estate, this will likely produce some element of development work, followed by a release management process.

In this sense, change management and release management can occur simultaneously.

At a more granular level, there are also situations where we will need to implement change controls within our release management efforts. 

For instance, if successfully rolling out a new software version requires additional unforeseen changes to related CIs. As such, we’ll also need to build the principles of effective change management into our release management workflow design.

You might also benefit from our resource on [software configuration management](https://budibase.com/resources/itil-processes/configuration-management/software-configuration-management/).

## Handling the relationship between change management and release management

Lastly, with a strong idea of the respective roles of change management and release management, as well as the key areas where they relate and differ, we can start to think about some of the practical steps we can take to manage this relationship.

That is, what are the specific measures that we can put in place that will maximize our success across both practices?

One useful starting point here is to consider some of the prerequisites that apply to each. The most important consideration here is our reliance on effective, accurate configuration data. 

Specifically, we’re reliant on a clear picture of the real-world state of our IT estate in order to effectively roll out new initiatives or alterations to our service portfolio. 

However, it’s important to recognize that both change management and release management also have a role to play in achieving this. That is, we must also reflect the outcomes of both practices within our CMDB in order to keep this up to date with additions and alterations.

Check out our to [change management vs configuration management](https://budibase.com/resources/itil-processes/change-management/change-management-vs-configuration-management/) to learn more.

Similarly, given the close interaction between change control and release management, we must be cognizant of the need to establish oversight, visibility, and collaboration across both functions.

Neither practice will be able to operate effectively if they’re constrained by siloed data and poor communication between teams. Instead, we must establish reliable, authoritative sources of truth in order to minimize redundancy, data conflicts, delays, and other errors.

Lastly, both change and release management are only as effective as the organizational value they provide for end users.

One critical aspect of this is communicating outcomes to relevant stakeholders across the organization. This can take the form of documentation, policy changes, new training initiatives, or other knowledge management tasks.

Ultimately, the goal of each is to enable us to ensure that our wider ITSM efforts remain effective and fit for purpose in the face of a range of factors, spanning new technical requirements, incident responses, and day-to-day factors that necessitate change.

To learn more, take a look at our in-depth guide to the constituent [ITIL processes](https://budibase.com/resources/itil-processes/).