---
title: The New Data Experience – Budibase 3.0
description: Welcome to day one of Budibase 3.0. We’ve reimagined the data experience from the ground up, introducing five powerful features that make it faster and easier than ever to build secure workflow apps. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - https://res.cloudinary.com/daog6scxm/video/upload/v1709745251/product-marketing-images/formsScreenTemplate2_exoepi.gif
image: 
date: "2024-10-15"
author: Michael Drury, Jamie Birss
draft: true
---

Welcome to day one of the Budibase 3.0 launch week! Over the next few days, we’ll be diving into a variety of exciting new developments, each designed to enhance the way you build and manage your apps. Each day, we’ll explore a different theme, offering insights and guidance to help you get the most out of Budibase 3.0.

[Budibase 3.0 image]

*But let’s not get ahead of ourselves! We’re kicking off the week by diving into the new data experience in Budibase.*

Every great application starts with a strong foundation—its data. In Budibase, the Data section is your starting point for building powerful apps and lays the groundwork for everything that follows. 

With this in mind, we’ve reimagined the data experience from the ground up, introducing five powerful features that make it faster and easier than ever to build secure workflow apps:

- Enhanced Views
- Default Values
- Row Actions
- View Joins
- Dynamic Screen Generation

## Controlling Role-Based Access With Enhanced Views

Controlling who can view, access, and manipulate data is crucial to building secure applications in Budibase. 

That’s why with Budibase 3.0, we’ve completely overhauled Views, making them the primary way permissions and access are defined in Budibase. You can now set up a new view for each role using your application, and seamlessly control what data they can see and manipulate. 

By starting in the data section, we ensure a secure-by-design approach to managing access and permissions, making security step one in application development—not an afterthought.

For example, imagine a typical approval workflow with two roles: a Submitter and an Approver.

A Submitter should be able to:
- Create a new request.
- View, edit, and cancel their own requests.
- Not see other users' requests or approve/reject requests.

An Approver should be able to:
- View all requests.
- Approve, reject, or cancel requests.
- Not see unsubmitted draft requests.

To keep things simple, we’ll just set up the Approver role for now, but we’d take the exact same approach for the Submitter role, too. 

First things first, let’s set up our custom role in our Access settings, like so:


{{< vimeo id="1020213024" title="Adding Roles" >}}

Next, let’s create a new Approver view. We’ll set up a filter on our table to ensure that the Approver can only access requests to which they’ve been assigned. For this example, we’re checking that the Approver email column matches the email of the currently logged-in user to Budibase.

{{< vimeo id="1020231834" title="View Filters" >}}

With Views, you can then customize and manage role permissions effortlessly. Use filters to control which rows each role has access to, or assign permissions to each column—edit, read-only, or hidden.

[gif]

You can create as many Views as you want, which you can easily toggle between using the tabs above. 

**Best of all, managing access with Views is now a free feature for all Budibase users.**

## Setting Default Values

Let’s dive into our next feature—**Default Values**.

Default values offer a more streamlined experience for gathering data. You can set columns to a specific value when a new entry is created, such as setting status to “In progress” or setting the name of the submitter to the currently logged-in user. 

{{< vimeo id="1020234072" title="Default Values" >}}

Default values eliminate the need for repetitive manual data entry, and ensure that information collected automatically is accurate and consistent.

## Streamline Data Workflows with Row Actions

Row Actions link automations to your data, creating data-driven workflows that are both easy to set up and secure by design. This feature allows you to assign different actions to different users on the same dataset.

For example, in an approval workflow, an approver can **approve** or **reject** a request, while a submitter can **edit** or **cancel** it. This can be set up as four different row actions (aka automations), with each action only shown to the correct job role.

Let’s see how to set up the Approve action:

{{< vimeo id="1020235112" title="Row Actions" >}}


This targeted approach lets users take specific actions on a table, such as approving a request, without full access to make unrestricted changes. By controlling user actions, Budibase 3.0 enhances the usability and security of your applications, simplifying automation creation and role management.

## Using View Joins to Connect Related Data

View Joins offer enhanced control over how users interact with related data, while also providing more ways to manage data security. They allow you to display related data from other tables directly in your views, streamlining workflows and enhancing data visibility.

For instance, in an approval app, we might want to set up a relationship between the **Requests** and **Approvers** views. This way, using View Joins, we can easily pull in columns like the Approver's name or email and show them directly in the Requests view without modifying your schema.

{{< vimeo id="1020237703" title="View Joins" >}}

Related data, such as the employee's name, is always view-only, preserving security while providing essential context. View Joins will also only display data from the immediately related table, keeping your views clean and manageable.


## Dynamically Generate Screens

For our fifth and final feature today, we’re covering Dynamic Screen Generation.

You’ll now notice a new Generate button in your data section—this is where the magic happens. With the click of a button, generate fully-working apps and forms from the data you're currently working with.

*With just a click, generate screens from your Views and watch them come to life in seconds!*

{{< vimeo id="1020240787" title="Generate Screen" >}}

You have several screen templates to choose from, including the option to generate a table, or one of our many powerful pre-built forms. In our example, we’ve instantly created a screen for our Approvers, allowing them to view requests, click through, and update the status field.

These screens are generated using the values and fields from your View, making it quick and easy to build functional interfaces on the fly.

## This is just the beginning

We hope you’ve enjoyed today’s release! As we’ve explored today, Budibase 3.0 empowers you to build more secure, data-driven applications with ease. 

From dynamic Views that control role-based access to powerful new features like automatic screen generation, the enhanced data experience streamlines app development and elevates what you can achieve with the platform.

Throughout the week, we'll be unveiling even more features that will transform your app-building journey. Tomorrow, we'll explore Role-Based Access Control, reinforcing our commitment to secure-by-design app development.

Ready to explore Budibase 3.0? Dive into the new data experience and **start building today**.