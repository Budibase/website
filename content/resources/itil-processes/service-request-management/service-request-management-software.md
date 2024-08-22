---
date: 2024-08-22
title: Service Request Management Software
description: Learn about the key requirements and capabilities of effective service request management software.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Software
    parent: serviceRequestManagement
    post: service-request-management-software
    identifier: serviceRequestManagementSoftware

---

Service request management software is central to how we deal with interactions between our IT team and colleagues across the wider organization. Within our service portfolio, there are countless instances where end users need to initiate defined actions and workflows.

Within ITIL, service request management means taking a systematic approach to this, including defining how specific services can be accessed and by which colleagues, along with processes that must be followed by service agents to assess, approve, and action requests.

Ultimately, the goal is to ensure that agreed services are delivered to users in a streamlined, cost-effective manner.

Our choice of tools has a huge influence on our ability to do so. 

In this resource, we cover the key considerations and decision points related to planning, designing, and rolling out service request management solutions.

## What is service request management software?

Service request management software includes all tools that we use to collect, store, and process information relating to requests from end users to initiate regular, defined service actions.

This might take the form of a COTS ITSM solution, a custom build, a distributed system of internal tools, or a combination of these.

Ultimately, the goal remains the same. Our task is to determine which solutions are appropriate in the context of our unique requirements, resources, and existing IT operations.

For instance, a large proportion of our service request management efforts might be handled through existing tools relating to particular processes, like help desks, ticketing solutions, or service catalogs.

In other cases, we might need to create dedicated solutions. 

Service request management software also plays an important role in unifying relevant data relating to requests across our service portfolio. For instance, for the purposes of reporting or capacity management.

{{< vimeo id="953485337" title="Service Request Management Software" >}}

### Types of tools

Before we move on to thinking about the specific capabilities we’ll need to provide to support our service request management practice, it’s helpful to consider how we can categorize these at a high level.

As we said already, service request management is largely concerned with how we gather, assess, and act on data submitted by service users.

Following on from this, we can think about three key clusters of capabilities relating to how we:

1. Store and manage request data.
2. Facilitate service user interactions with this data, largely in the form of request submissions.
3. Enable IT colleagues to take appropriate action based on the submitted data, subject to defined business rules.

Within each of these, we’ll need to consider a range of factors to determine the right solutions for our needs, as well as understand what capabilities different classes of users are most likely to require.

In the following sections, we’ll explore what this looks like under each of our three categories.

## Data layers for service request management systems

First of all, we must determine the appropriate data solutions for our service request management practice.

This is the foundation of effective systems design. Service requests can essentially be thought of as data objects with a defined schema. What these include is based on the information we need for our IT colleagues to authorize and action them.

So, how and where we choose to store our data is critical for enabling us to provide appropriate end-user capabilities. Of course, this is also a massive factor in how we establish effective security, control, and oversight of our service interactions.

The basic question is the level of centralization that’s appropriate within our request management processes.

### Centralizing service request data

In situations where a high level of oversight and control is the priority, we might opt for a centralized request management database. For example, if all service requests are handled within a single, unitary function.

The core benefit of this approach is establishing a single source of truth for request data, furnishing delivery teams with a consistent, accessible platform for actioning relevant workflows.

On top of this, centralized solutions can often be better suited to tight data governance requirements. For example, handling the exposure and permissions that we grant to particular users.

That is, compared to a distributed approach, relying on a singular store can make it considerably easier to administer permissions across our service request management systems.

Certain capacity and service-level management tasks can also be better facilitated as we aren’t faced with the same challenge of surfacing and aggregating data from disparate sources.

However, centralization also introduces challenges of its own.

One key best practice across ITSM processes is tasking the most relevant functional teams with managing data related to their own services or configuration items on the basis that this is typically a more efficient approach.

Centralization can inhibit this in the sense that we might introduce additional administrative barriers to leveraging our data. 

Another consideration is the fact that requests for various service actions will typically differ greatly in terms of their data schemas, governance needs, and associated workflows.

Reflecting this within a centralized database can be difficult as it will likely result in a highly complex schema, despite the fact that information-sharing requirements between relevant service delivery teams might be fairly limited.

This may mean that the costs associated with establishing and managing a centralized database are not proportionate to the value we’d derive from doing so.

### Distributed approaches to managing service request data

The alternative is relying on a more distributed system of tools to handle service request management data. In most organizations, we’ll already have relevant solutions in place for handling particular kinds of service requests.

For example, across our support desk, asset management, change control, or other practices.

As a result, it’s often a better use of our time and resources to build our service request management capabilities on top of these platforms, especially where most day-to-day tasks don’t require extensive interaction between data related to different kinds of requests.

On top of this, there are the efficiency benefits that we alluded to earlier. 

That is, by retaining ownership of relevant request data within appropriate functional teams, we’ll generally be able to reduce administrative burdens by more easily building request management into existing service-specific workflows.

Additionally, distributed systems may also be beneficial in terms of mitigating certain risks within our data operations. For example, we could be less likely to encounter widespread disruption in the event of an outage compared to storing all of our request data in a single location.

However, challenges emerge in cases where information sharing across different clusters of service requests is a priority. 

At a high level, there are two areas where this is most apparent.

The first is that if we store data relating to the same services or CIs in multiple locations, we risk issues related to inconsistencies or conflicts. This will require additional mitigations, both at the level of policies and technical solutions.

The second relates to how we expose insights around our request management practice at a macro level. With a unified request management database, it can be comparatively easy to surface performance data, including costs and resolution metrics.

We’ll need to account for this within our service request management software suite, potentially leveraging data warehousing, pipelines, automation, or federation tools to collate relevant performance data from across our service portfolio.

## Data collection and request submission

Arguably, the most important aspect of our service request management systems is the capabilities we provide to on-the-ground users to initiate workflows and handle their submissions.

Of course, a huge element of this is how we gather service request data. However, this isn’t our only task.

Rather, we’re concerned with the full scope of how users access and initiate defined service actions and workflows. 

This includes how we communicate available services to users, including initiation processes and service-level expectations such as deliverables and timelines.

Here are the key capabilities we’ll need to achieve this.

### Service catalogs

Service catalogs are user-facing knowledge management tools. As the name suggests, they’re used to store and provide information relating to the services that are available to colleagues. Typically, users will also be able to initiate actions, including using request forms.

The goal is to provide a single point of access for locating and accessing suitable services. This might apply across the whole of our IT estate or within individual practices, such as asset management or the support desk.

This facilitates more efficient access to services by reducing barriers to identifying and initiating actions.

One challenge here is dealing with different levels of authorization across our user base. In other words, we must account for the fact that we may offer different services to individual teams and colleagues across the organization.

To avoid duplicating our efforts by providing distinct catalogs for each class of users, we can leverage role-based access control and conditional UIs to reflect the needs of different colleagues across the organization.

As noted earlier, an additional challenge can stem from the fact that request data might be stored in different locations. Therefore, we’ll need suitable capabilities for querying these sources directly within our service catalogs or using embedded forms.

### Service request forms

Service request forms are the most common tool for initiating agreed actions. These might be provided as standalone tools or within a broader solution, such as a ticketing, service catalog, or intranet platform.

Regardless, the goal is to provide service users with a streamlined interface that provides the required information in a tightly enforced format and schema. In other words, establishing a structured way to gather the data we need to process and action requests.

As before, a major challenge here is reflecting the potential scale and diversity of different services on offer. We’ll, therefore, typically need the capacity and tools to output and maintain a large number of request forms relating to various services, CIs, and associated data stores.

This also applies to governing access to services. Notably, users should only have permission to access the forms related to service actions that are applicable to their role. 

Our task is to reflect this fact without creating extraneous admin workloads in the form of user management.

One strategy for resolving both of these challenges is leveraging appropriate form-builder tools to enable us to output large volumes of data submission UIs and manage access.

Similarly, we may rely on access control within related platforms that contain or direct users to our service request forms, including service catalogs or ticketing platforms.

### Self-service tools

Lastly, self-service tools play a crucial role in enabling access to defined services and must, therefore, also be considered within our service request management practice. 

However, these differ somewhat from typical request management workflows in that the actions they’re concerned with are generally pre-authorized. Or, in some cases, they may enable users to submit requests to initiate services which are then approved using automation rules.

In this sense, the underlying business rules within our request management processes are still enforced. We just don’t necessarily require manual inputs from the IT team to fulfill these.

Examples of this might relate to basic service actions like password resets or accessing low-value assets like certain documents or end-user devices.

The challenge here is establishing adequate controls over the actions that users can take, as well as ensuring that we provide suitable experiences to ensure that users are able to self-serve successfully.

Essentially, the priority here must be automating the associated workflows to the greatest extent possible, with the ultimate goal of enabling users to self-serve with experiences resembling normal service requests, including form submissions.

However, this won’t be possible in all cases. 

So, some self-service workflows might also direct users to documentation or other knowledge management tools for instructions on resolving issues for themselves, with the goal of alleviating pressure on our service request management systems.

## Admin tools for IT teams

Next, we can consider the capabilities that are required by our fulfillment and delivery teams within service request management software systems.

As we alluded to earlier, IT colleagues play very different roles within request management workflows compared to on-the-ground service users.

Once a request is submitted, it’s our IT team that’s responsible for assessing, approving, and actioning the agreed tasks.

Therefore, the focus of our service request management software is enabling them to do so. Here’s what this looks like in practice.

### Approval apps

Request management means applying defined business rules to the submitted data objects to determine an appropriate response. 

In the most basic form, this requires what’s known as an authorization workflow. Essentially, this means enabling a responsible colleague to determine whether or not the requested actions should be carried out.

This can be handled within an approval app. From a technical perspective, these offer two key capabilities. First, furnishing approvers with the information they need to make an informed decision in the context of established business rules.

Second, enabling approvers to update the appropriate status attribute to progress the request to the next stage.

In terms of authorization criteria, we could potentially be dealing with several types of information across our service request itself, agent availability, finance rules, risk assessments, technical criteria, and much more.

The key is preventing extraneous delays or admin work within our approval workflows.

In some cases, particularly for low-cost or low-risk service actions, we might rely on automated approvals. This is most common where approval criteria are easily computable, including decisions around scheduling or finances.

Where we retain manual approvals, our priority remains to minimize admin workloads. Therefore, we’ll want to automate follow-on tasks, including adding relevant data to our service schedule or sending out relevant communications.

### Workload management

Handling workloads is another key capability for IT delivery teams in our service request management software. Recall that the core goal of our request management practice is facilitating access to agreed service actions.

Therefore, once a request is authorized, the next step is actually delivering these actions.

Of course, the likelihood in almost all organizations is that we’ll already have solutions in place for managing workloads. As such, the challenge is more likely to be implementing appropriate integrations between these existing solutions and our service request management software.

The important thing here is we’re able to pass the required data between tools, whether this relies on APIs, middleware, webhooks, or querying shared data sources. 

We’ll then need to apply whichever processes and business rules are required to this in order to progress the request, whether this is assigning it to a specific agent, scheduling specific tasks, or carrying out further checks and analysis.

In some cases, we may rely on dedicated workload management tools for specific kinds of service requests. These might be custom-built for particular workflows, especially where there is a particularly high degree of regularity in the fulfillment and delivery process.

For example, within our asset management practice, we might rely on relatively simple workload management tools to assign device preparation tasks to technicians, getting the requested assets ready for collection.

### Ticketing tools

Lastly, we have ticketing tools. These are the cornerstone of a huge array of ITSM processes, including within service request management systems.

Ticketing tools allow service users to submit requests. Within the IT team, these can then be analyzed, prioritized, and categorized. The goal is to determine which follow-on actions are required and route the request to the appropriate colleagues for delivery.

We might leverage distinct ticketing tools across various verticals within our service portfolio, or we might use a single platform across our ITSM provision as a whole.

This is critical for handling service requests where delivery involves multiple stakeholders within the IT team or where fulfillment does not necessarily follow a totally regular workflow.

For example, if certain actions are only required in some scenarios but not others for a given type of service request. Or if entirely new or unique tasks are needed to reach agreed service levels and outcomes.

As we’ll see in a moment, ticketing tools are also an important part of how we account for the inherent overlap between core ITSM processes, especially where end-user requests might concern multiple internal IT functions or practices.

This enables us to provide service users with a single point of interaction for submitting requests without necessarily needing to understand which category they fall under.

Again, a key challenge for developing effective ticketing tools is reflecting the needs of different colleagues surrounding permitted actions and data exposure.

This includes accounting for the distinct needs of service users and delivery colleagues. Additionally, we must reflect the differing needs of teams across various IT functions within our access control policies.

## Overlap with other ITSM platforms

One of the underlying ideas with ITIL is that we must recognize and account for the many complex ways that our ITSM processes will inevitably overlap. 

This is particularly apparent in the context of service request management software, given its role in how actions across our service portfolio are initiated and accessed.

At the highest level, there are two strands to this. Obviously, one is that our request management tools provide inputs to other platforms across our IT estate within normal service delivery.

So, we’ll need to consider our integration and data-sharing requirements around these interactions in order to ensure maximum efficiency and consistency in how service actions are initiated.

Secondly, we’ve already alluded to the relationship between service requests and other end-user initiation actions. These include submissions with our change management, incident management, asset management, and support desk functions.

Essentially, the issue we’re contending with here is that a single request could potentially fall under more than one of these categories. 

Perhaps end users don’t fully understand the distinction between submissions, or a particular request could span multiple different functions. For instance, if a normal service request requires an element of change management to be executed.

We have a couple of strategies available to us for dealing with this. Within our process designs for relevant practices, we should build in points of interaction between stakeholders, including establishing the rules and scenarios where various workflows apply.

More relevantly to our service request management software, we must also prioritize information-sharing, integration, and appropriate routing rules across related platforms in order to support these process-level efforts.

## Other requirements

Lastly, we can consider some of the requirements that apply across the entire scope of our request management solutions.

So far, we’ve considered the more specific functional capabilities we’ll need to action common workflows across our request management practice.

However, it’s also important to understand requirements that could be generally applicable at a system-wide level.

The first of these is governing access to our request data. As we’ve seen extensively, our top priority is controlling the actions that distinct groups of users can take regarding our data.

However, in the context of our wider ITSM efforts, we’ll need to balance this with the associated costs. Specifically, we want to implement effective controls without creating excessive user management workloads.

This will inform our requirements around role-based access control, SSO, SCIM provisioning, and other features within service request management software.

Another key general requirement across our request management solutions is integration with other tools across our IT service portfolio, particularly with regard to triggering events in external platforms based on request submissions.

As such, we must consider our requirements for request management software in the wider context of associated workflows in order to ensure appropriate solutions for the reality of our current IT estate.
