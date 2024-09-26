---
date: 2024-08-30
title: What is Service Catalog Management?
description: Check out our in-depth guide to managing service catalogs.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Service Catalogs
    parent: serviceRequestManagement
    post: service-catalog-management
    identifier: serviceCatalogManagement

---

Service catalog management is the ITL practice concerned with creating, maintaining, and distributing information about the services available to users and how these can be accessed.

Establishing repeatable, efficient processes for handling this is critical, especially given the diversity of IT services in modern enterprises.

As always, our goal is to minimize the barriers that users face in accessing services that they’re entitled to while also ensuring that we don’t use up excessive IT resources to administer this.

In this resource, we’re checking out what this means in practical terms from the perspective of both the tasks and workflows required to manage service catalogs, along with the tools we can use to present information and even handle user interactions.

Along the way, we’ll explore some of the key decisions we’re likely to encounter under each of these issues. 

By the end, we’ll be equipped to define effective service catalog solutions based on our own unique requirements.

## What is a service catalog?

At the most basic level, a service catalog is a list of the IT services that are available to users. This should also contain key details associated with each service, including who they’re available to, how they’re accessed, and the deliverables on offer.

This can include a variety of support, operations, software, hardware, procurement, project-based, or other categories of IT services.

The goal is to provide a centralized, accessible source of information about our services, as well as providing streamlined experiences for initiating defined actions as part of our service request management practice.

This might be presented as a standalone capability. However, more often, service catalogs will form a part of other core ITSM solutions, such as ticketing tools or intranet portals.

The most effective service catalogs also enable users to initiate service actions.

This could mean building request management workflows directly into our catalogs or simply directing users to existing solutions. A very basic example of the latter would be providing an email address for the relevant delivery team.

However, as we’ll see a little later, as we implement ITIL thinking in our service catalog management efforts, we’re more likely to prioritize user experiences that minimize friction when initiating service actions.

### Service catalogs vs service portfolios

Within ITIL - and ITSM more generally - a concept that’s closely related to our service catalog management practice is our wider service portfolio. While there’s a large degree of overlap between these, they also differ greatly in terms of their scope and purposes.

So, it’s important to understand the distinction between the two.

Whereas service catalogs are highly focused on the practical information that end-users need to access particular services, our service portfolio is a more complete record of the current state of our services, as well as their past and future iterations.

In addition to the basic details of what our services comprise and how specific actions are initiated by users, our service portfolio requires more detailed information around the underlying CIs and workflows, as well as how performance and costs are benchmarked across our IT estate.

Therefore, we can think of these as handling much of the same information, albeit for slightly different purposes.

In particular, our service portfolio is concerned with a more high-level view of our services, including how they interact, while our service catalogs primarily deal with how individual services are initiated, managed, and delivered at a practical level.

Within ITIL, we’ll generally prioritize holistic solutions and processes to reflect this overlap between practices in order to maximize efficiency across our IT estate.

### Why do we need service catalogs?

Service catalogs provide several important benefits. Chief among these is providing a clear, centralized platform for end users across the organization to access information about the services that are available to them.

This enables IT leaders to ensure that services are carried out consistently and in accordance with defined standards each time they are initiated. 

At the same time, it provides end users with clear expectations around a service’s deliverables, helping them to select appropriate actions for their needs.

From an IT operations point of view, this can impact the relative costs and benefits of our service provision in several concrete ways, including:

- **Providing clarity around services** - ensuring that service users and IT colleagues alike understand what services entail.
- **Streamlining service request management** - enabling end users to more quickly and easily initiate appropriate service actions for their needs.
- **Reduced resolution times** - by enabling users to self-select the appropriate services for their needs, we can also reduce the turn-around time for fulfilling requests.
- **Maximizing consistency** - including ensuring that the same outcomes will be reached irrespective of which colleagues are involved.
- **Enhanced decision-making** - centralizing our service catalog data and associated user interactions enables us to make better planning decisions, including around demand for services and the scenarios where this arises.
- **Continuous improvement** - when service actions are initiated and carried out in a consistent fashion, we are much better positioned to identify, action, and monitor opportunities for improvement across our service catalog.

Ultimately, the goal of service catalog management within ITIL is to maximize the organizational value that our services provide relative to the IT resources that are required to administer and deliver these.

However, it’s important to place this in the context of our wider ITSM efforts. One of the core principles of ITIL is recognizing the various complex ways that our IT services and related processes interact with one another.

This is particularly important in the context of service catalog management, given its centrality to how colleagues across the organization interact with the IT team during almost all normal service delivery workflows.

As such, we can consider each of the benefits we outlined above at both the level of individual services and our ITSM provision as a whole.

Check out our resource on structuring [service request management processes](https://budibase.com/resources/itil-processes/service-request-management/service-request-management-process/).

## Catalog management tasks

Now that we have a clear understanding of what service catalogs are and the value that they provide, we can move on to thinking in more detailed about what’s required to establish, maintain, and manage a service catalog of our own.

We can divide this into a couple of distinct categories. Specifically, we can differentiate between many of the tasks required to initially establish a service catalog compared to those we’ll need to maintain this on an ongoing basis.

Let’s take each of these categories in turn.

### Implementing service catalogs

In most mature organizations, a service catalog will likely already exist in one form or another. However, this might be relatively informally managed or otherwise out of date. Alternatively, our service catalog may not be properly documented at all.

These are all situations where we will need to establish a formal service catalog.

As we know, this means documenting the services that are available to various users across the organization. Now, we can drill into what this means in more granular detail.

Specifically, the priority tasks required to document our services include:

- **Service discovery and identification** - Establishing the services that our IT team currently offers, along with those we would like to offer. This also extends to formalizing services that are offered by IT colleagues, which may not have been previously documented.
- **Documenting service goals** - It’s important to situate our service documentation in the context of the organizational value that they provide. This enables us to define our underlying goals, in turn informing successive steps of our documentation process.
- **Categorization** - We can categorize services based on their functional area, severity, resources required, underlying CIs, teams responsible, or some other factors for the benefit of end users and delivery colleagues alike.
- **Defining SLAs** - SLAs set out the deliverables, timelines, and processes relating to a particular item within our service catalog.
- **Establishing request workflows** - Request workflows comprise the steps that are required to access a given service action, including how this is initiated, assessed, approved, and fulfilled.
- **Internal roles and responsibilities** - Including determining the specific users that can access various services as well as the IT colleagues that are authorized to carry out the constituent tasks required to deliver these.

By the end of this stage, we should be clearly able to define the services that will be provided within our service catalog, along with all relevant information about how users can access these and which deliverables they can expect.

We’ll return to designing solutions to present this information a little later.

### Ongoing management

Arguably, the bigger challenge within ITIL service catalog management is keeping the information we present to users up-to-date with the current state of our ITSM provision.

ITIL prioritizes continuous improvement across all areas of our IT estate. This might mean adding, retiring, or modifying services over time. Our challenge is reflecting this change within our service catalog.

This is highly intertwined with our change control and configuration management practices, as these are the elements of our ITSM efforts that handle changes to the information that underpins our service portfolio.

Ultimately, our goal with respect to ongoing service catalog management should be to automate as much of this process as possible.

For example, when an element of an SLA within a particular service is updated as part of our change control practice, we might automatically update the relevant information within our service catalog.

For instance, if basic attributes like the expected turnaround times are modified.

For more complex changes, we may still require manual actions from users. For example, if we establish an entirely new service, we’ll need to carry out a documentation process like the one we outlined in the previous section.

However, our goal in these situations remains to maximize our use of automations, including collating relevant information and notifying colleagues that documentation tasks are required.

## Building effective service catalogs

Lastly, we can consider the specific tools we’ll rely on to host our service catalogs in more detail. 

As we alluded to earlier, there are several ways that this might be managed, depending on our particular requirements, existing IT operations, resources, and other factors.

For example, in a very basic configuration, a service catalog might simply be presented as an information page, table, or directory within the likes of an intranet portal or ticketing system.

However, this is typically suboptimal.

An important aspect of successful service catalog management is providing various users with information that’s appropriate to their specific needs surrounding our ITSM portfolio, as well as enabling them to take action on the basis of this.

With that in mind, we can consider some of the key technical capabilities we’ll require to ship effective service catalog tools, along with the important decision-points for designing solutions that are appropriate for our needs.

### Catalog views and user roles

Within ITIL, an important idea relating to our service catalogs is providing views that are appropriate to the needs of various kinds of users.

We can think of a view as a subset of the information included within our catalog that reflects the requirements of a given type of user. For example, our service users will likely need different information compared to our IT leaders.

At the highest level, we can think about this in the context of how a given user interacts with our service portfolio.

Specifically, we can distinguish different views based on the information needs of key stakeholders. For example, we might rely on:

1. **User views** - including information relating to services available to specific users, as well as details of their request and fulfillment processes.
2. **Service management views** - information aimed at managers and other stakeholders, including relating to performance, financial, or service-level issues within our portfolio.
3. **IT views** - information relating to service delivery, including technical, security, or process-level details of our services.

We could also create similar views for other stakeholders across our service portfolio, such as vendors, partners, customers, or anyone else who interacts with our services.

Additionally, we must account for the fact that specific users across the organization will typically have varying permissions in terms of the service actions that they can initiate. For instance, based on their seniority, role, department, or some other factor.

This will generally be applied on top of the kinds of views we outlined a second ago. 

For example, we might deploy several user views that relate to various kinds of on-the-ground service users.

Naturally, this introduces certain practical challenges. Specifically, the more granular our views are, the greater the administrative workload we’ll require to manage these.

ITIL recommends that it is, therefore, not best practice to rely on separate or isolated catalog tools to manage distinct views, due to the excessive administrative costs and risk of information conflicts.

Instead, it’s generally preferable to implement solutions that enable us to retain centralization of our service catalog data while also reflecting the information needs of different kinds of users, including effective role-based access control, user management tools, and conditional UIs.

### Designing user experiences

In terms of user experience, service catalogs are highly functional, meaning that our priority is largely enabling users to quickly find the specific information they need as quickly and easily as possible.

They can then take whichever actions are outlined in our request management workflows, as we’ll see in a moment.

For now, though, we can outline a few key design principles that will help us provide streamlined experiences for users to identify the appropriate services for their needs.

Our first task is establishing effective searchability, especially within larger or more complex service portfolios.

For example, we might provide front-end filtering within our catalog UIs to select specific services using some of the data attributes we’ve already discussed, such as their category, delivery team, or underlying CIs.

However, we’ll also want to account for differences in the language various users might use when searching for service, including providing appropriate metadata within our underlying data model to enable more advanced searchability.

Similarly, it’s important to recognize that our service catalog users may have different UX needs in terms of their relative levels of technical expertise and knowledge. 

Therefore, we must account for this with respect to the language we use to outline SLAs, deliverables, and request workflows, ensuring that users can access information that’s appropriate for their level of understanding of key IT concepts.

You might also enjoy our guide to [service request management software](https://budibase.com/resources/itil-processes/service-request-management/service-request-management-software/).

### Integration with service request management practices

Lastly, in order to be effective in terms of facilitating access to service actions, we must consider how our service catalogs will integrate with our wider service request management processes.

Within ITIL, this is the practice concerned with enabling end users to initiate defined service actions.

We may handle initiations slightly differently, depending on the nature of the action being requested. For example, for low-risk or highly regularized processes, we might provide self-service tools that initiate automated workflows.

For most service actions, however, we’ll rely on request forms.

{{< vimeo id="953485337" title="Service Request Form" >}}

In either case, if we want to enable users to initiate relevant actions from within service catalogs, we’ll need to determine how best to integrate with these workflows.

For example, we might embed existing tools within our catalog UIs, direct users to relevant external tools, or provide capabilities that mimic existing request management tools within our service catalog.

Each of these could be valid options in different circumstances. For example, if we already have several request forms in place, it’s likely more effective to rely on these than create redundancy by shipping additional forms and UIs.

However, if we don’t already extensively use request management tools, we may wish to integrate this within our service catalog management practice on a more holistic basis, including building all relevant information and request functions within a centralized platform.

In either case, the priority remains the same, in the sense that our ultimate goal is to provide users with a secure, efficient way to initiate service actions in accordance with the underlying business rules that control requests.