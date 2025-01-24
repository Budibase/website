---
date: 2024-09-05
title: Change Management vs Configuration Management
description: Take a look at our guide to the relationship between change management and configuration management.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Change Management vs Configuration Management
    parent: changeManagement
    identifier: changeManagementVsConfigurationManagement
    post: change-management-vs-configuration-management

---

Configuration management and change management are two closely related processes, both dealing with how we store, handle, and maintain the data that underpins our IT service portfolio.

As such, there’s a huge degree of overlap between these elements of our ITSM provision, both in terms of their overarching goals and at the practical level of day-to-day workflows.

Nevertheless, they are distinct practices that comprise different aspects of how we maintain and deliver effective IT services.

Therefore, understanding the specific areas where these overlap and where they differ is critical. We’ll need to build this into the solutions and processes we put in place around each.

However, the specifics of how we handle this can vary from one organization to the next, based on factors including the resources we have available, the complexity of our service portfolio, our existing IT operations, and more.

In this resource, we’re exploring the relationship between change management and configuration management, as well as the key practical considerations we’ll need to take account of to reflect this in our ITSM offering.

## Definitions

First of all, we need to understand what each of these practices is and what it achieves. We’ve created more detailed resources on each of these topics, which you can read below:

- [Change management](https://budibase.com/resources/itil-processes/change-management/),
- [Configuration management](https://budibase.com/resources/itil-processes/configuration-management/). 

For our purposes today, here is a brief overview.

### What is configuration management?

Within ITIL, service configuration management is the practice of managing information about the elements that contribute to our IT services. This includes all kinds of hardware, software, policies, human resources, or even other interdependent services.

These are referred to as CIs.

The goal is to provide our team with an accurate record of how our services work. This requires us to thoroughly document individual CIs, as well as the relationships between them. 

{{< vimeo id="1001639719" title="Configuration Management" >}}

Different subsets of this information can then be leveraged in a range of contexts, including by service delivery colleagues, service users, IT leaders, or other users.

As such, our first priority is establishing the configuration data that we need in order to understand our support our service portfolio. Within ITIL, the best practice is to balance the value CI data provides with the effort required to gather and maintain it.

In other words, we need to prioritize the information that’s most useful across other aspects of our ITSM efforts.

Configuration management is also responsible for keeping this information up to date once it is in situ. This includes reflecting the impact of normal service delivery on our CIs, as well as changes that occur outside of this.

For the most part, this requires a systematic effort. That is, rather than manually maintaining our IT estate data, our task is to put processes and solutions in place across our service portfolio to ensure that our CI data remains accurate and consistent.

This includes accounting for data interactions across all areas of service delivery, including within our change control practice, as we’ll see a little later.

Depending on the needs of individual organizations and the resources they have available, configuration management may be a dedicated function. Alternatively, responsibility for managing CI data might be shared among the relevant functional teams.

{{< template-cta template = "changeManagement" >}}

### What is change management?

As the name suggests, change management is concerned with how we handle and administer change in our IT estate. Within ITIL V4, however, different aspects of this are divided across distinct practices, known as change control and organizational change management.

Change control is the practice related to maximizing the number of successful changes implemented across our service portfolio. This means first identifying a demand for change and, second, applying defined business rules to govern which specific initiatives are adopted.

For example, some routine changes may be effectively pre-authorized, while more extensive, costly, or risky changes will typically require more involved analysis and approval workflows.

{{< vimeo id="1001639751" title="Change Management" >}}

Similarly, change control requires us to thoroughly document any initiatives that we implement.

Organizational change management concerns how we deal with the human side of change implementation. For instance, consulting with stakeholders, achieving buy-in, and communicating outcomes of change initiatives.

The specific tasks required for implementing changes will naturally vary depending on what’s being proposed, but for our purposes today, the important thing is that this must also be reflected in our efforts to keep our configuration management up to date.

Like configuration management, a key principle of effective change management is that the controls and other related measures we put in place must be proportionate to the potential impact of the change initiative at hand.

This might be determined by the associated risks, costs, or expected impact.

Therefore, change management requires us to design and enforce appropriate processes for various types of change, including identifying demand, handling authorization, and delivering new initiatives.

As we’ll see a little later, there are several ways we might handle this internally, including relying on a centralized change management team, managing change within existing functional teams, or a combination of both.

You might also enjoy our resource on [change management vs release management](https://budibase.com/resources/itil-processes/change-management/change-management-vs-release-management/).

## Overlap and intersections

Now that we have a clear understanding of what each practice means, we can begin to flesh out the relationship between change management and configuration management. First, let’s think about how and where these overlap, both in terms of their core goals and daily activities.

We can break this down into a few distinct areas:

1. Shared responsibilities and goals.
2. Configuration management activities that act as inputs for change management.
3. Change management activities that act as inputs for configuration management.

Shared responsibilities are tasks are required for the success of both our change management and configuration management efforts, and, therefore could be subsumed within either practice. 

For example, both practices are involved in how we reflect changes to our IT environment within our configuration data. So, both practices share a stake in achieving the same outcomes. However, we may handle this differently in practical terms, as we’ll return to later.

In many ways, effective configuration management is a prerequisite for managing change.

Specifically, almost all change management tasks, including identifying demand, handling requests, impact analysis, and planning delivery, depend on an accurate record of the current state of the services and CIs in question.

Without this information, we can’t make an informed decision about the relative costs and benefits of approving the original request.

For instance, in order to process a change request to acquire a new piece of equipment, we’ll need to understand the capabilities that we already have within our inventory, how these are used, and which other CIs they’re dependent on.

Change management also provides inputs for our configuration management practice.

Most often, these come in the form of triggers for configuration data management actions. Importantly though, this can look different depending on the nature of the change at hand.

Let’s stick with our example of a change request involving acquiring a new piece of equipment.

We might decline this request on the basis that existing CIs within our IT estate are sufficient to meet the required capabilities if they are appropriately redeployed.

We’d likely reflect this outcome by updating certain attributes of the relevant records, like their status or location.

Alternatively, we might choose to go ahead with acquiring the requested equipment. 

If similar CIs already exist within our IT estate, we may simply need to add a new record within our existing configuration management model.

Alternatively, the new CI might be of an entirely new type, in which case we’d need to determine how our underlying data model will need to be changed in order to reflect this, including mapping dependencies and related services.

As such, it’s important to have clear policies and solutions in place for aligning configuration management and change management data relating to various different kinds of change initiatives.

## Differences between change management and configuration management

Next, it’s also important to understand where change management and configuration management differ.

Importantly, while these are distinct practices, they don’t generally diverge massively in terms of their overarching aims.

Rather, we can characterize these as being primarily concerned with different aspects of how we maintain and manage the information underpinning our service portfolio.

The easiest way to conceptualize this is that while configuration management relates to how we maintain our CI data, including reflecting the effects of change initiatives, it is not generally concerned with which changes we choose to adopt or how we implement these.

These are separate concerns that are handled within our change control practice.

By contrast, while a change initiative might require our CI data to be updated or amended, change control is primarily concerned with the real-world implications of the change itself.

This means applying defined business rules to determine the underlying demand, costs, risks, and benefits, with a view to maximizing the organizational value we deliver across our IT estate.

Another way of thinking about this is that configuration management primarily seeks to describe the real-world state of our service portfolio and the CIs that underpin it, while change management enables us to update or improve our ITSM offering in a systematic fashion.

## Practical takeaways

So far, we’ve primarily thought about the relationship between change management and configuration management at a high level. However, we’ve also alluded to the fact that the practicalities of how we handle this within individual organizations.

As such, in order to successfully handle both practices within our ITSM efforts, we’ll need to understand the key decision points and considerations we’re likely to encounter when handling these in the context of our own internal resources and requirements.

Here are the key issues we’ll need to keep abreast of in order to successfully align our change management and configuration management practices.

### Roles and responsibilities for change management vs configuration management

A critical element of how we handle the overlap between change management and configuration management is how we delineate internal roles and responsibilities. That is, which colleagues are responsible for different elements of each practice.

As we hinted at earlier, there are a few distinct approaches we could take to both practices in this regard, based on issues including the scale of our IT services, the complexity of the underlying data, our security needs, and the administrative resources we have available.

One important thing to note is that each practice may or may not be implemented as a dedicated function. That is, we could have a dedicated team for handling configuration management data, or one for handling change control.

Alternatively, in many organizations, these are bundled together as a shared function within a single centralized IT team. This is a strong option in organizations with heightened or sensitive information security needs, but we may sacrifice some element of operational efficiency.

Alternatively, both change management and configuration management may be distributed functions, with the relevant on-the-ground teams responsible for handling changes to CI data related to particular aspects of our service portfolio.

Typically, this is a more efficient approach, although we’ll still generally need to reserve responsibilities for more high-risk or mission-critical CI data within a centralized authority.

Whether our change management and configuration management are handled by the same colleague or distinct teams, we’ll still need appropriate processes and technical solutions in place to reflect the specific points of overlap we identified earlier.

### Systems design

In terms of defining effective systems that reflect the needs of both our change control and configuration management practice, our primary concern is establishing appropriate visibility and centralization over the data involved in each.

For the most part, this is dependent on how we choose to store and process our CI data. Check out our resource on [configuration management databases](https://budibase.com/resources/itil-processes/configuration-management/configuration-database-management-tools/) to learn more about our options here, including using a centralized CMDB or relying on more distributed solutions.

We then need to determine whether or not our best option is handling change request data within the same data store as our configuration management records or as a separate data source.

Of course, a range of factors can go into this decision. For instance, if change management and configuration management are both handled by a single centralized team, it may make sense to rely on a singular solution for handling and processing data.

Alternatively, we might opt for entirely separate data storage for our change control practice. For instance, if our CI data is handled in a highly distributed system, we need to retain a degree of centrality and oversight over how we authorize and implement change.

In either case, we’ll also need to consider the specific workflows where these practices will interact, including the events in each that will trigger actions in the other and the internal tools, automations, data pipelines, and other solutions we’ll rely on to reflect these.
