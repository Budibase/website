---
title: Role-based Access Control - Day 2, Budibase Launch Week
description: Welcome to day 2 of Budibase 3.0 launch week, where we introduce Role Based Access Control - a powerful new way to manage access and permissions.  
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1730364261/campaigns/3.0/day%202/day_2_light_ebhyc1.png
image: https://res.cloudinary.com/daog6scxm/image/upload/v1730364261/campaigns/3.0/day%202/day_2_light_ebhyc1.png
date: 2024-11-05
author: Andrew Kingston, Jamie Birss
draft: true
---


{{< youtube id="KkEM5GcMP44" >}}


Welcome back to day 2 of the Budibase 3.0 launch week. Yesterday, we covered the [brand-new data experience](/blog/updates/v3/launchweek/day1) in Budibase, and today, we’re continuing the excitement with a new and improved **RBAC** experience. 

Managing user permissions is one of the most important aspects of building secure applications. Ensuring that users have the right level of access is crucial for protecting sensitive data and maintaining the integrity of your app. 

*What if you could not only set up but also visualize your app’s permission structure at a glance?*

Well, with today’s update, you can!


## Visual Role-Based Access Control 

Picture this: a clean, drag-and-drop editor where you can visually define your roles and their relationships. Want to make sure one role inherits permissions from another? Just drag and drop to connect them. It’s that simple — and powerful.

Introducing branched permission inheritance, a game-changer for managing permissions. Any role further down the inheritance chain automatically gets all the permissions of the roles before it, making it easy to see the hierarchy and how different roles are interconnected.

[GIF]

Roles can also be renamed and given a color, like so.

[GIF]

Let’s take a look at how you would set up permissions for an approval app: 

[image]

In this example, we have our default app permissions (**App User** and **App Admin**), and the custom roles **Submitter**, **Approver**, and **Head of Department**.

The Head of Department inherits all the permissions of the Approvers and App users, but the branching structure prevents them from accessing Submitter permissions. While the Head of Department needs access to Approver data, sensitive Submitter information, such as draft requests, remains restricted.

This separation maintains privacy for Submitters while allowing the Head of Department full visibility over the approval process.

Simply put, branched permission gives you more control over how permissions are assigned and allows you to intuitively understand your app's role structure at a glance. 


## Updates to Role Definitions and Names

We’re moving towards a more intuitive and flexible approach, encouraging users to create custom roles tailored to their real-world business processes—for example, **Requestor** and **Approver** or **Producer** and **Consumer**.

Relying on generic role names such as Basic and Power can lead to a confusing user experience where it’s unclear which permissions apply to which role.

To avoid this, we’ve made some key changes to our default roles:
- **Admin** is now called **App Admin**: This role has full control, with the highest level of permissions.
- **Basic** user is now **App User**: The most restricted role, with no built-in permissions.
- **Power** role has been phased out for new apps but remains unchanged for existing apps.
- **Custom** roles can now inherit permissions from multiple other roles, giving you more flexibility.


## Up next with Budibase 3.0

With this release, managing user permissions in Budibase becomes more intuitive, flexible, and transparent. Whether you're creating custom roles to fit your business or using role inheritance to streamline permissions, Budibase 3.0 gives you full control over how you manage access.

Stay tuned for more exciting features and improvements as we continue to push the boundaries of what's possible with Budibase!