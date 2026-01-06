---
date: 2024-08-30
title: What is IT Asset Tracking?
description: IT asset tracking is critical for maintaining clear, accurate oversight of our hardware estate.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: true
type: resources/glossary
layout: single
menus:
  main:
    name: Tracking
    parent: assetManagement
    post: it-asset-tracking
    identifier: assetManagementTracking
---

Tracking IT assets as they move across their lifecycles is one of the most challenging, laborious elements of delivering IT services to users.

However, this is also critical for ensuring that we have a clear, accurate understanding of how and where our hardware is deployed across the organization. 

This provides inputs for both high-level tasks, such as capacity planning and day-to-day asset management, including processing device rentals.

In this resource, we’re exploring everything you need to know about asset tracking, including what it achieves, how it works, and the key decision points we’ll encounter when developing solutions for specific use cases.

## What is IT asset tracking?

Asset tracking comprises all of our efforts to understand and document the current locations, statuses, and other deployment information relating to our hardware estate.

Ultimately, the goal is to keep our asset register and other relevant data sets up to date as our assets move through normal service workflows.

In addition, we want to identify instances where devices fall out of defined processes.

Therefore, our core task is to implement data collection solutions at relevant steps of our asset management processes to ensure that the information we need is collected when key events occur that indicate a change in a device’s location or status.

For example, when an end-user device is collected or returned, a new asset is delivered, or an existing tool enters a maintenance workflow.

However, as with any ITSM task, our priority must be delivering maximum organizational value while minimizing the costs associated with doing so. In other words, our asset-tracking efforts are most successful when we minimize the barriers to collecting our required data.

As far as possible, this means eliminating the need for manual data entry. We’ll see the specific tools and strategies that are available for achieving this a little bit later.

Take a look at our guide to [ITIL asset management](https://budibase.com/resources/itil-processes/asset-management/) for a broader overview of ITAM.

### Why do we need to track assets?

First, though, we can consider the underling business goals of IT asset tracking in a little bit more detail.

We can consider this at two levels:

1. The importance of accurate, up-to-date information relating to the status of assets across our estate.
2. The cost/benefit calculation relating to how we manage this.

On the first point, our asset records play a key role in a wide range of ITSM tasks, both within our asset management practice and in associated processes.

More specifically, effective asset tracking drives:

- **Visibility and oversight** - providing IT teams with a clear, accurate view of the real-world state of our hardware estate.
- **Accuracy and data quality** - ensuring the validity, accuracy, and reliability of our asset-related data.
- **Reduced administrative costs** - including eliminating the need for manual admin tasks and auditing.
- **Capacity planning and decision-making** - providing a basis for making informed, data-driven decisions.
- **Risk reduction** - including mitigating against theft, breakages, misuse, or damage.
- **Security and compliance** - facilitating a range of threat-monitoring and regulatory tasks.
- **Efficient resource usage** - ensuring that we are able to use our assets in the most cost-effective manner possible.
- **Enhanced user experiences** - including facilitating self-service actions as well as more efficient fulfillment of asset-related service requests.

However, these must be balanced with the costs and workloads associated with maintaining our registers.

The core benefit of asset tracking in this sense is, therefore, systematizing repeatable tasks associated with maintaining our asset registers, including eliminating or reducing manual data entry and maximizing consistency across regular service interactions.

In other words, we can collect more accurate, reliable data more quickly.

## Types of asset tracking

Next, we can think about the specific techniques that are available to us for tracking assets. Each of these has distinct pros, cons, and use cases. So, it’s important to have a firm grasp of how each one works and where they’re most effective.

It’s also worth noting that in certain situations, we might rely on a combination of these across different parts of our asset estate.

### Manual data entry

The most basic type of asset tracking is manual data entry. Essentially, this means defining data entry tasks at key points within asset management workflows and, typically, providing dedicated experiences for carrying these out.

In other words, at points in our existing workflows when an asset changes status or location, the users involved in this can manually provide the required tracking data using forms, admin panels, CRUD apps, or dedicated workflow tools.

This option benefits from comparatively low upfront costs, as we don’t need to purchase any specific hardware or implement a tagging system across our assets.

{{< vimeo id="956383530" title="IT Asset Tracking" >}}

However, once in situ, it is somewhat more time-consuming and, therefore, less efficient to operate. 

The core challenge here is that users need to manually locate the appropriate asset record to update each time they action a task. This takes time, as well as introducing scope for human error, as users may select the wrong device.

They may then need to add additional details manually, too.

As such, this can be a useful option for relatively small asset estates or irregular tasks, but we may prefer more systematic approaches for larger-scale use cases.

Check out our guide to [IT asset inventory management](https://budibase.com/resources/itil-processes/asset-management/it-asset-inventory-management/) to learn more about storing and processing data.

### Barcodes

Barcode scanning is another common approach to tracking assets. This means tagging each device with a unique barcode that corresponds to the relevant entry in our database. This eliminates the need for users to manually locate the appropriate row in our asset register.

Depending on the specific solutions that we put in place around this, we might automatically perform the relevant updates based on the context in which a device is scanned or we might retain some element of manual data entry.

The most common example of this is within a check-in/out workflow. For instance, during asset rentals or servicing processes.

When a device enters or leaves our inventory, the user who processes this can simply scan its barcode to update its status or location. We can use the context of the device’s previous status to determine what to update this to within defined workflows.

In more complex use cases, users might still need to provide additional information, such as the details of the colleague who is renting the device. However, this is still more efficient than wholly manual data entry.

This is a comparatively cheap option for implementing asset tagging with minimal additional hardware, especially since all that’s needed for individual assets is a printed barcode.

However, there are still costs associated with rolling this out. Barcodes may also require more frequent updating or maintenance compared to hardware-based solutions.

### RFID

RFID stands for stands for radio frequency identification. This involves tagging assets with special chips that transmit information to a receiver. 

This facilitates several potential benefits over relying on barcodes. RFID chips will transmit information to the receiver without our users needing to do anything. This means that devices can be scanned remotely as long as they are in range.

We can also scan multiple items in or our without needing to manually process each one.

Alternatively, we might use RFID to determine the specific location of a particular device on one of our sites for situations where we need a more detailed view of asset usage.

However, RFID also introduces some important challenges. One is that it’s a relatively expensive option for asset tracking since we’ll need to purchase chips for each device we want to tag, along with the required receiver hardware.

RFID can also be prone to errors in certain environments. So, some events might be missed in scenarios where radio frequencies are blocked.

Therefore, while it might be helpful for certain use cases relating to high-value assets, it’s unlikely to be the best option for the core of our asset-tracking solutions.

### GPS tagging

Alternatively, we might rely on GPS technology for IT asset tracking. We can fit assets with GPS trackers and monitor their location remotely, either in real time or at fixed intervals.

This is particularly useful for large, highly mobile assets that are used in the field, including operational equipment, machinery, or IoT devices. GPS is a relatively easy, cost-effective way to gain visibility into the usage of these kinds of assets.

{{< vimeo id="926228969" title="IT Asset Tracking" >}}

However, it’s use-case is somewhat more limited compared to the other asset-tracking strategies we’ve seen so far.

That is, GPS is generally only accurate over large areas. So, it’s an effective way to determine the location of an asset over a large scale, but we can’t accurately determine the location of a smaller device within a single office site, for instance.

We’ll also require additional measures to record anything other than the location of our assets, limiting GPS’s uses.

At the same time, it’s a relatively cheap, passive strategy for monitoring the usage of high-value items with minimal manual human inputs.

### Endpoint management

Lastly, endpoint management software is a valuable addition to our IT asset-tracking solutions. Endpoint management is used to automatically track and manage certain status elements of devices that are connected to our internal network.

For example, we can track very granular aspects of which assets are in our inventory, which users have access to them, how they’re being used, their security needs, and more.

We can even automate asset discovery, giving us a clearer picture of the real-world state of our IT environment.

This generally relies on dedicated software, which must be rolled out across our network, but we’re unlikely to need any additional hardware. In large organizations, we’ll likely have some form of endpoint management in place already, though.

While endpoint management can be helpful for a range of asset tracking tasks, it’s not generally suited to core physical ITAM tasks, such as processing rental requests or handing over end-user devices.

## Asset tracking hardware

Lastly, almost all forms of asset tracking will require some form of hardware to implement. We’ve alluded to what this can look like across different tagging methods already, but within each of these, we may face additional considerations and decision points.

So, to wrap up, let’s think about this in a little bit more detail.

### Asset tagging systems

We’ve seen several types of asset tagging tools already. Each of these has its distinct pros and cons. They may also require different additional hardware to manage.

Here’s a brief reminder of what our options are for tagging devices and their relative selling points:

- **Barcodes** - a relatively inexpensive option for recording and updating device status data during day-to-day ITAM workflows.
- **RFID tags** - which are useful for automating certain ITAM tasks, but require additional hardware investment.
- **GPS tags** - used for tracking the location of large, mobile assets across a wider area, with limited ability to record non-location data.

However, asset tagging is only one part of a wider system.

So, we must also be aware of the wider solutions we’ll require in order to make effective use of each of these.

With barcodes, the key capability is providing our IT colleagues with scanning tools that are compatible with our underlying data management needs and workflows. We’ll see what our options are in this regard in the following sections.

RFID tagging requires more complex hardware and software solutions to implement. The most important aspect of this is establishing a network of receivers that’s suitable for our intended use cases, as well as the environment we’re operating in.

In addition to this, we’ll likely need additional software capabilities to manage interactions between RFID tags and our receivers. In turn, this must also be compatible with our underlying asset data.

GPS tagging is reliant on existing satellite networks. We’ll need appropriate software tools to track and manage our tagged devices. However, this is most often sold as a complete system, including the required hardware and software.

### Rugged devices and dedicated barcode scanners

Next, we can consider our options for scanning barcodes within our asset tracking systems. Rugged devices are dedicated tools that are designed for longevity and robustness in the field, including within warehouses, construction sites, or other industrial environments.

The idea is to enable us to accurately scan barcode tags with a single-function device that’s unlikely to get damaged over its service life.

However, we’ll need to consider our needs here carefully. 

One aspect of this is that scanning itself only identifies a specific asset. Therefore, we still need additional capabilities in place to perform the required data management action, such as updating the associated row in our asset record.

Dedicated barcode scanners can’t handle this, so we’ll need an additional device, such as a desktop, laptop, or tablet.

On top of this, compatibility can be tricky to navigate with dedicated devices. For instance, some hardware vendors might lock us into certain asset inventory or POS platforms, or at least offer limited integration options.

Therefore, this can be a comparatively difficult solution to implement, as we’re highly constrained by our existing ITAM systems.

### Mobile devices

The alternative is existing mobile devices to handle asset scanning tasks. Unlike a dedicated scanner, this means we can identify assets and process data management actions with a single device, whether this is a phone or tablet.

This approach can also present lower upfront costs.

All that’s required is a form interface that supports barcode scanning inputs, whether this is a native mobile app, PWA, or web form. We can then access this using any device with a camera that has access to our network.

Most [form-builder tools](https://budibase.com/forms/) will support this.

Depending on our specific use case, we might then either automatically process whatever action is required or provide the user with additional form fields to provide details manually.

Like before, a major consideration here is compatibility with our underlying ITAM solutions, especially around inventory management.

However, unlike dedicated scanner tools, we’re not as tightly constrained by the capabilities of the hardware itself.

Instead, we must simply choose an appropriate form solution that offers connectivity for our underlying asset data, whether this is through direct querying, API requests, middleware, or some other solution.

As such, this is generally an easier, more flexible approach to building IT asset-tracking solutions.