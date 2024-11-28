---
date: 2024-08-22
title: IT Asset Inventory Management
description: Read our comprehensive guide to managing IT asset inventories.
image: "https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png"
images: 
- https://res.cloudinary.com/daog6scxm/image/upload/v1723816303/cms/itil-resources/ITIL-Hero_l3gpgt.png
draft: false
type: resources/glossary
layout: single
menus:
  main:
    name: Inventory Management
    parent: assetManagement
    post: it-asset-inventory-management
    identifier: assetManagementInventory   
---

An up-to-date, accurate IT asset inventory is the cornerstone of almost all ITAM processes, from capacity planning and financial management to on-the-ground tasks like maintenance scheduling and request fulfillment.

However, establishing and maintaining this can be a highly costly, labor-intensive process.

The challenge here is, first, establishing a clear record of the assets that make up our IT estate and, second, ensuring that this is maintained so that it accurately reflects our real-world environment.

In this guide, we’re exploring what this means in practical terms. 

Specifically, we’ll cover what asset inventories are, what they achieve, and the strategies you can implement to establish and maintain accurate, reliable records across your IT estate.

## What is an asset inventory?

An asset inventory is a master record of all of the IT assets that an organization owns or controls. This details all of the relevant information about our assets, along with their usage, locations, repair histories, related processes, financial data, and more.

An asset here can refer to many things. Within ITIL, the dominant framework for ITSM, asset management is the practice concerned with managing financially valuable resources across their lifecycles.

These include hardware and software assets, as well as information resources, data sets, vendor contracts, facilities, and anything else within our IT estate that has financial value.

Given this diversity, it follows that the information needs of various assets can also differ greatly. The specific data we store around each class of assets must be informed both by the nature of the resource itself, the workflows it’s involved in, and the rules that govern it.

{{< vimeo id="996702784" title="IT Asset Inventory Management" >}}

The term asset inventory can also refer to the process of analyzing and documenting our IT estate in order to establish or update our records.

That is, we may conduct an asset inventory in order to initially discover the resources that we own or control. We might also repeat this process at any time in order to realign our records with the real state of our asset estate.

The goal, in either case, is to record an accurate snapshot of our asset inventory at a point in time. However, it’s important to note that certain aspects of our asset data will change through normal day-to-day service operations. 

For instance, the locations of rentable devices.

As such, our focus when conducting an inventory primarily relates to less volatile information, including detailing the assets we store, along with their financial value, intended usage, and the attributes relating to each that are required to action defined lifecycle management workflows.

Crucially, manually auditing and creating inventories is often a highly expensive process and should, therefore, be reserved for instances where the value we’ll see from widespread discovery and information gathering will be proportional to the costs incurred.

### What does an asset inventory achieve?

Understanding the organizational value provided by asset inventories means answering two questions:

1. Why do we need an up-to-date, accurate record of the assets we control or own?
2. In what situations do we need to conduct widespread data gathering in order to establish or maintain this information?

The answer to the first is relatively simple. 

All workflows and processes relating to our asset estate are dependent on accurate, accessible information. For example, to process a rental request, users need to know which devices are available at any given time.

The same applies to more high-level ITAM processes too. For instance, determining the relative costs, risks, and ROI of managing our asset estate.

However, in most organizations, we can expect asset records to already be in place in one form or another. In the ideal scenario, these should be kept up to date through normal interactions in day-to-day service delivery.

This is because manually auditing and documenting our asset estate is an involved, disruptive, time-consuming, and, ultimately, expensive process.

So, at what point is it necessary or, at least, financially viable to conduct a full-on inventorying and discovery process?

There are a few key scenarios to be aware of:

1. Initially establishing an authoritative asset inventory.
2. Centralizing or de-siloing existing data. For instance, moving from spreadsheets to a formalized database.
3. Validating and verifying existing data at regular intervals. For instance, conducting audits on an annual or other fixed-term basis.
4. Auditing IT estates in a targeted manner, such as documenting a specific area of the business or seeking to combat shadow IT.
5. Assessing the capabilities required to implement specific new initiatives or meet a particular capacity management goal.

Thinking about these scenarios elucidates an important point. That is, we must also consider the scale of an inventorying project. So, we can differentiate between auditing individual aspects of our asset portfolio compared to the entire span of our IT estate.

This is vital, as it will determine the relative costs and benefits of inventorying. So, when we focus on a specific element of our estate, the workload required to establish an accurate inventory is lower, and we’ll typically have a clearer, more achievable goal.

However, the ultimate goal remains the same. 

That is, providing accurate, reliable information about our IT estate to enable us to control costs and optimize utilization across the organization.

## How to conduct an asset inventory

Next, we can consider the specific steps that are required to conduct an IT asset inventory. 

However, it’s worth noting that our starting point here could vary somewhat depending on our goals, the current state of our ITAM processes and data, the resources we have available, and the specific tools we utilize to audit our inventory.

For instance, we may opt to conduct this manually, or we might rely heavily on automated discovery tools.

In either case, the process for creating an asset inventory should follow the same structure. In the remainder of this section, we’ll outline what this looks like, along with the key decisions we’re likely to encounter at each stage along the way.

### 1. Defining a scope

Our first priority is defining the scope of our asset inventory. It’s crucial to get this right, as it will determine many of the decisions we make at successive stages of this process.

We’ve already alluded to some of the key ideas here.

The most obvious aspect to this is whether we are setting out to establish an asset inventory across the entirety of our IT estate or we’re targeting a more specific subset of assets.

There are a few distinct ways we could divide up our estate in this regard. For instance, we may focus on a specific class of assets, such as network hardware, end-user devices, or software licenses.

Alternatively, we might decide to limit the scope of our inventory based on some other factor, such as its intended usage, the department where it’s deployed, its financial value, or its associated risks.

Beyond this, we must also consider the scope of our inventory in terms of our underlying information needs. In other words, this relates to the reason we’re carrying out an audit in the first place.

For example, our information needs may be considerably different if we purely want to understand the financial value and liabilities of our asset estate at a given point in time compared to if we were seeking to establish a working asset management database.

By the end of this stage, we should have a clear understanding of what we want to achieve by creating an asset inventory, along with a basic outline of the data we’ll need to collect in order to achieve this.

### 2. Identifying and classifying assets

Next, we can begin to actually create and document our inventory. Our first task is to identify the specific devices or other resources that fall under the scope of whichever subset of assets we decided on in the previous step.

At the most basic level, we simply want to identify the assets that are under our control or ownership. We have a few distinct options for how to go about this. As we noted a few moments ago, we might rely on manual auditing, automated discovery, or a combination of the two.

In any case, we’ll need to have some understanding of where we’re gathering this information from. A certain proportion of our assets will already be under the control and oversight of our IT team, but others will be in place across the organization or in the field.

So, when setting out to identify these, we must formulate a discovery plan. For example, we might gather information by asking colleagues across the organization which assets they currently have.

We might also physically inspect certain buildings, facilities, or other physical locations across the organization.

The other critical element of this step of the inventorying process is classifying assets. 

However, in order to achieve this, we’ll need to have an appropriate taxonomy in place to begin with. How detailed this is can depend on the scope of our inventory that we decided on in the previous step.

So, at a very high level, we might want to classify assets into basic categories, such as end-user hardware, network devices, software licenses, data assets, or other descriptive groupings.

In other cases, we might determine that it’s necessary to take a more granular approach. For instance, presenting subcategories of each of these groupings or using them in tandem with other taxonomies, such as the related business functions or departments.

However we choose to go about this, by the end of this stage, we should have a clear picture of the specific assets that will need to be accounted for within our inventory.

### 3. Documenting asset details

Once we’ve established which assets we have in our control, we must formalize them within our inventory.

The goal here is to record the relevant details of each asset in an appropriate, controlled schema. There are a couple of distinct approaches to this, with the specific information we’ll record being informed by our underlying information needs.

For instance, we might define and enforce distinct schemas at the level of asset classes, more granular categories of devices, or even for individual resources. 

Depending on our starting point, this may already be in place in an existing inventory that we’re updating, but we may also need to define it from scratch.

We might opt to store this in a dedicated asset management database, a subset of our CMDB, or some other solution.

The challenging part here is data collection. This means recording real world values and adding them to our database.

We have a few options for how we go about this. Many organizations rely on basic tools like spreadsheets, but these are suboptimal and may introduce unnecessary scope for error.

Another option is deploying dedicated data collection forms. These provide users with a streamlined experience for submitting the correct data in a controlled format, in order to either create or update a record in our inventory.

Related to this is the idea of asset tagging. This means utilizing QR codes, barcodes, or RFID to identify individual assets and relate them to a record in our database. 

From the point of view of establishing an IT asset inventory, there are two things to be aware of here. The first is that if we opt to implement asset tagging, we’ll need to build this into our initial inventorying process.

The second is that if tagging is already in place, we’ll likely be able to rely on scanning and check-in workflows as part of subsequent inventorying processes in order to boost efficiency, accuracy, and consistency across our data collection efforts.

Alternatively, we may rely more heavily on automated tools to document our asset estate.

Many off-the-shelf IT asset inventory tools will offer capabilities here, while other organizations rely on more function-specific platforms, including end-point management solutions, to implement automations within their asset discovery efforts.

By the end of this stage, we should have documented our asset estate in an appropriate database, subject to the scope we defined earlier.

### 4. Establishing lifecycle stages

When thinking about IT asset inventories, it’s crucial to situate this in the context of our wider ITAM practice. Specifically, the lifecycles of individual assets or asset classes have an important role to play in determining their respective data models.

Our asset inventory will serve as the basis for almost all other ITAM workflows and tasks. So, in order to facilitate this, we’ll need to establish the appropriate status attributes to reflect the stages each asset can be at within its defined lifecycle.

For example, for rentable devices, we’ll need appropriate attributes to denote whether individual assets are currently deployed or available to users. So, we might simply apply a binary attribute to represent the device’s availability.

In a more complex schema, we might link entries in a requests table to asset records, in order to calculate the next date at which it is available.

We can apply the same logic to other lifecycle management issues, including scheduling maintenance and repairs, handling security tasks, tracking usage, or retiring devices.

From the perspective of database design for our asset inventory, the important thing here is, first, determining the various states that an asset can be in and, second, understanding the business rules that determine the appropriate state at a given time.

As part of our inventorying process, we’ll need to assign appropriate values to each item we record in order to accurately reflect the real-world of our IT environment. 

These will then be updated throughout the course of our normal service interactions, as we’ll see in the following sections.

### 5. Designing asset management workflows

Lastly, when we create an IT asset inventory, it’s important to be cognizant of the workflows that will determine the state of individual devices and resources within the system we defined in the previous step.

At this point, we should know the rules and patterns that determine the state of a given asset. 

Our final consideration is the specific mechanisms and actions that will enforce these rules.

At the highest level, we have two options for implementing this. One is within our inventory database itself, in the form of formula variables, stored procedures, or simply conditional operations and case statements within SQL queries.

For example, we might return true for an availability attribute of a device record that has no related request submissions corresponding to the current date.

In this case, our status attribute is reflected through normal service interactions without requiring any additional input from the users involved.

However, for other workflows, we may need to provide more direct solutions for updating our inventory data through end-user interactions.

For example, within a check-in/check-out workflow, we may automatically update the same availability attribute for a device based on whether it is being rented or returned by a service user.

As such, in addition to building workflows into our asset inventory at the level of database design, we’ll need to consider the internal tools that will enable this, including at the level of end-user data interactions and automation rules.

We’ll consider some of our top priorities here in the following section.

## Key asset inventory management workflows

In order for our asset inventory solutions to adequately reflect our real-world IT estate, it’s crucial to take into account the various ways the specific user actions and internal processes that will impact the information we store.

Earlier, we alluded to the fact that widespread inventorying is often not the most cost-effective way to gather data about our IT estate. Instead, we can often achieve the same results via normal service interactions.

As such, it’s important to understand the specific workflows and other aspects of our ITAM practice that we can characterize as featuring some element of inventory management.

While this will vary from one organization to the next, we can point to a few key practices that will apply in the majority of contexts. 

An obvious one that we’ve touched on already is asset rentals. 

Within our asset estate, there will be certain devices that users can access on a short-term or irregular basis. These are shared across the organization rather than being deployed to a single user for their entire lifespan.

For example, end-user devices, peripherals, or accessories like cameras, measurement equipment, or other hardware that colleagues only require occasionally.

To manage this, we may need a variety of internal tools, including rental forms, scheduling apps, inventory dashboards, workload management solutions, and automated communications, each of which may update elements of the relevant asset records at various workflow stages.

On top of this, a more general category of inventory management workflows we’ll need to consider is handling end-user requests. 

The challenge here is that a huge variety of request submissions within both ITAM and other related ITSM processes could potentially lead to changes within our asset inventory. 

As well as rentals, this could involve procurement, service, or change requests, as well as incident reports, ticketing submissions, complaints, or other end-user interactions.

Some of these will follow relatively regular patterns. Others might involve interaction with our inventory data on a more case-by-case basis. 

As such, where possible, we should seek to build inventory management actions into normal service delivery workflows. For instance, within service request management or change management tools.

However, as this will not be possible in all cases, we must consider how we can facilitate less predictable ITAM tasks, including providing suitable interfaces and permissions for responsible colleagues to manually update or overwrite values in our asset inventory.