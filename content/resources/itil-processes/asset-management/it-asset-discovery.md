---
date: 2024-09-20
title: What is IT Asset Discovery?
description: Read our in-depth guide to asset discovery.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Discovery
    parent: assetManagement
    post: it-asset-discovery
    identifier: assetDiscovery

---

What is IT Asset Discovery?

IT asset discovery is a critical part of our wider ITAM practice, especially in large organizations. Without it, many IT teams will struggle to establish a clear, accurate record of the hardware and software tools that are used across the organization.

In this guide, we’re covering everything you need to know.

Specifically, we’re going to explore what asset discovery means, what it involves, what it achieves, and how it fits into our wider ITAM practice. Within this, we’ll also cover some of the variations in terms of approaches, strategies, and tools we can rely on.

By the end, you’ll have a working knowledge of asset discovery and how you can implement it to support our own ITSM practices.

## What is asset discovery?

IT asset discovery means utilizing automation tools to determine which IT devices are used by colleagues across the organization. The goal is to provide a scalable, convenient way to gather data on the assets that exist within the organization. 

This reduces the need for manual inventorying but may not eliminate it entirely.

We’ll return to some of the specific techniques and processes that can be leveraged to achieve this a little later.

First, though, we can think in more detail about the specific data that we can gather through asset discovery. 

Within ITIL 4, this is framed around a progressive framework involving establishing the *what*, *where*, and *how* of our asset estate. 

Let’s examine each of these elements in turn.

*What* refers to the specific assets that we’re dealing with, typically divided into categories such as:

- **Hardware** - end-user devices, network infrastructure, peripherals, data storage, accessories, telecomms, and other physical assets.
- **Software** - end-user software, operating systems, middleware, ERP tools, server applications, SaaS platforms, licenses, code repos, and more.
- **Cloud services** - virtual machines, cloud environments, containers, cloud storage, buckets, etc.
- **Data** - databases, files, media, customer information, documents, and other resources.

*Where* refers to the location of assets, either physically, in terms of hosting, or with regard to which part of the organization they relate to:

- **Geography** - the actual location of physical assets.
- **Functions** - the line of business that assets relate to, including specific teams or departments.
- **Environments** - such as production, development, testing, or QA environments for software assets.
- **Facilities** - Data centers, storage sites, buildings, or other facilities.

*How* refers to the activities associated with specific assets within our ITAM practice:

- Internal asset management policies.
- Processes and techniques used for identifying assets.
- Key asset management processes, including those relating to financial management, rentals, deployment, controls, maintenance, lifecycle management, and more.

Notably, the specific attributes we’ll need to record relating to different kinds of assets within the discovery process will vary. 

In addition, we may or may not know all of the information that we need to know about particular assets. For instance, with common end-user devices such as laptops, this will be relatively consistent.

In other cases, the specific attributes we require relating to devices will be harder to predict. Determining what these are will form an important part of the discovery process.

### How does discovery work?

Asset discovery relies on dedicated software to perform organization-wide scans across the company network. This is used to initially identify and map the devices that are present on the network.

Discovery tools also provide a basis for automating aspects of how we keep our asset records up to date. This works by periodically gathering more detailed information from known assets, including their status, location, or other relevant configuration data.

As we’ll see a little later, depending on the level of detail that’s required about individual assets, we may also need to install software agents on the devices themselves in order to provide more substantive updates.

We’ll check out some more specific approaches and strategies for asset discovery elsewhere in this resource.

### Discovery vs asset inventory management

First, though, it’s important to consider how this fits into our wider ITAM practice. One key aspect of this is the relationship between asset discovery and inventory management.

These are distinct ideas, but they, nonetheless, present a large degree of overlap. As such, we need to have a clear understanding of the respective roles of each within ITAM.

The easiest way to understand this is that inventory management comprises all of our efforts to maintain accurate, up-to-date records of our assets during their normal service life.

This includes recording asset details, tracking changes across our estate, and putting measures in place to reflect changes to the statuses of our devices relating to basic ITAM workflows.

Inventory management also seeks to support the effective usage of our asset estate, including with regard to handling costs, risks, deployment, maintenance, and other key aspects of our ITAM practice.

As such, one way to characterize the relationship here is that discovery provides crucial inputs across our inventory management processes. For instance, when initially creating an inventory or day-to-day maintenance of our records.

However, it’s not quite the case that asset discovery is purely a subset of inventory management. Rather, it can also be conducted for its own sake, as well as to support a range of other activities, as we’ll see in the following section.

## Why do we need asset discovery?

Asset discovery is a critical element of how large organizations handle complex IT estates. This touches directly or indirectly on a huge range of areas within our ITSM portfolio. Obviously, this is most closely related to activities involving our physical devices, but it is not limited to these.

The core benefits of asset discovery include:

- **Tracking hardware remotely** - enabling our team to monitor the status of devices wherever they are.
- **Visualizing IT networks** - providing a clear record of all of our assets and how they interact within our IT estate.
- **Reducing admin burdens** - reducing the manual admin work required to maintain asset inventories.
- **Detecting anomalies** - identifying issues, errors, incidents, or threats relating to our hardware estate.
- **Combatting shadow IT** - bringing all assets under the control and governance of our IT team.
- **Security and compliance** - facilitating a huge range of security and compliance tasks, including vetting, certificate management, and audits.
- **Risk and cost management** - enabling us to take steps to mitigate risks and maximize the value we derive from our assets relative to their financial liabilities.

It’s also worth noting that asset discovery can impact a range of ITIL practices besides just ITAM.

Another key benefit of asset discovery is feeding our configuration management practice by providing real-time, up-to-date information about the status and usage of various assets.

Similarly, the data we surface during asset discovery acts as a critical input within multiple other aspects of our ITSM portfolio, including relating to how we manage finances, risk, capacity, change, planning, and more.

Check out our guide to [IT asset tracking](https://budibase.com/resources/itil-processes/asset-management/it-asset-tracking/) to learn more about how we can manage the status of devices across their lifecycle.

## Active vs passive asset discovery

Next, we can begin to flesh out our understanding of IT asset discovery by considering how this can look at a more practical level.

At the broadest level, we can distinguish between two key types of asset discovery. These are:

1. Active discovery,
2. Passive discovery.

Each of these offers its own unique benefits, drawbacks, and ideal use cases. Let’s check each one out in turn.

Active discovery means utilizing dedicated software to scan our network for asset information at a specific point in time. This is also sometimes referred to as **standard asset discovery**, because of its ubiquity.

Active discovery tools work by pinging or querying devices on the network to provide information relating to their presence, status, and configuration.

The idea here is to provide an immediate, detailed, and up-to-date picture of our asset estate.

However, this also presents downsides. Most importantly, active discovery is comparatively expensive. It also only provides a snapshot of our asset estate at the moment that a scan was conducted rather than on an ongoing basis.

In some cases, active asset discovery might also lead to a perceptible slowing in our network speeds.

Passive asset discovery involves monitoring our network traffic and logs to identify and document devices throughout normal interactions with our network based on their unique signatures.

This means that discovery tools do not have to actively engage with the devices themselves in order to identify them. Therefore, there’s less chance of our network being disrupted.

Rather than providing a snapshot of our entire asset estate at a single point in time, passive discovery records device information on a more continuous basis.

This also means that passive discovery is typically cheaper and easier to implement.

However, the downside is that we’re typically only able to gather less detailed information. For example, it might not be possible to record some of the configuration data that would be available with active tools using passive asset discovery.

So, passive discovery is useful for gathering less intensive information on a more regular basis.

As such, it’s common for active and passive techniques to be used in tandem, even within a single asset discovery tool.

Take a look at our guide to [IT asset management software](https://budibase.com/resources/itil-processes/asset-management/it-asset-management-software/) for a broader overview of the tools we can rely on for ITAM.

## Agent-based vs agentless asset discovery tools

Lastly, we can consider some of the tools that we can leverage for asset discovery. As we noted earlier, discovery generally relies on dedicated software to monitor and document the devices that interact with our networks.

These fall into two categories:

- Agent-based,
- Agentless.

Each of these requires a distinct approach, so it’s helpful to think about them separately.

### Agent-based

Agent-based discovery tools utilize software that’s installed on devices within our estate. The software on each device is referred to as an agent. This is used to periodically send defined information about the device to a centralized platform.

As such, this is a passive discovery technique in the sense that once it’s configured, we simply need to wait for agents on devices to provide an update.

At the point of configuration, we can define how often our devices should send updates to the server, as well as what information we need from them. As such, this can often be an attractive option for more complex or contextual use cases.

However, it can also be somewhat challenging to implement. For one thing, we must already be aware of all of the assets in our estate in order to install agents on them. So, it can’t be used to initially inventory devices.

Agent-based discovery tools are also somewhat more complex to manage and maintain, as we need to do this across all devices within our network, creating a larger technical and administrative burden.

### Agentless

Agentless discovery tools rely on existing network protocols to gather information from assets without the need for locally installed software agents. This can include SNMP, WMI, SSH, or other protocols, each one offering different levels of information about connected devices.

This is a much lower-maintenance approach, particularly in the sense that it doesn’t require us to know which assets we have in our estate in advance.

One caveat to this, however, is that devices will need to have whichever protocol we’re using for discovery enabled. In some cases, the discovery solution might need to be whitelisted to enable devices to be tracked.

However, since we don’t need to install agents on the devices themselves, this is a much cheaper solution to roll out and maintain compared to agent-based tools.

The downside, though, is that we’ll sacrifice some of the detail we could achieve with an agent-based solution, as well as the flexibility and control.