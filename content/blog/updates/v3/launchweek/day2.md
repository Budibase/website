---
title: Day 2 -  Visual RBAC
description: Welcome back to day 2 of the Budibase 3.0 launch week. Yesterday, we covered the brand new data experience in Budibase, and today, we’re continuing the excitement with a new and improved RBAC experience. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1730364261/campaigns/3.0/day%202/day_2_light_ebhyc1.png
image: https://res.cloudinary.com/daog6scxm/image/upload/v1730364261/campaigns/3.0/day%202/day_2_light_ebhyc1.png
date: 2024-11-05
author: Andrew Kingston, Jamie Birss
draft: false
---


{{< youtube id="KkEM5GcMP44" >}}


Welcome back to day 2 of the Budibase 3.0 launch week. Yesterday, we covered the [brand-new data experience](/blog/updates/v3/launchweek/day1) in Budibase, and today, we’re continuing the excitement with a new and improved **RBAC** (role-based access control) experience. 

Managing user permissions is one of the most important aspects of building secure applications. Ensuring that users have the right level of access is crucial for protecting sensitive data and maintaining the integrity of your app. 

*What if you could not only set up but also visualize your app’s permission structure at a glance?*

Well, with today’s update, you can!


## Visual Role-Based Access Control 

Imagine a streamlined, drag-and-drop editor where you can visually define roles and their relationships. Want to ensure one role inherits permissions from another? Just drag and drop to connect them. It’s that simple — and powerful.

Enter branched permission inheritance, a game-changer for managing permissions. Any role further down the inheritance chain automatically gains all the permissions of the roles before it, creating a clear visual hierarchy of interconnected roles.

Let’s explore how you might set up permissions in an approval app:

![RBAC UI](https://res.cloudinary.com/daog6scxm/image/upload/v1730470042/campaigns/3.0/day%202/rbac_i_xjbtrz.webp)

In this setup, we start with the `Submitter` role, responsible for creating and submitting requests. Flowing from the Submitter, the permissions branch into two specialized Approvers: an `Engineer Approver` for technical review and `QA Approver` for quality control. Each can approve their respective sections independently, but the request is only marked as approved once both have given the green light.

At the end, we have the `Manager` role. This role inherits all permissions from both Approvers, giving full visibility and control over the approval process while retaining the division of responsibilities at the approver level. Visually, the branches from the Engineer and QA Approvers merge back into the Manager, showing how permissions converge.

This hierarchy ensures that the Manager has oversight without needing to micromanage, while specialized Approvers focus on their expertise areas. With branched permission, you now have the freedom to control role access intuitively, understanding your app’s role structure at a glance.


## Updates to role definitions and names

We’re moving towards a more intuitive and flexible approach, encouraging users to create custom roles tailored to their real-world business processes—for example, `Requestor` and `Approver` or `Producer` and `Consumer`.

Relying on generic role names such as Basic and Power can lead to a confusing user experience where it’s unclear which permissions apply to which role.

To avoid this, we’ve made some key changes to our default roles:
- `Admin` is now called `App Admin`: This role has full control, with the highest level of permissions.
- `Basic` user is now `App User`: The most restricted role, with no built-in permissions.
- `Power` role has been phased out for new apps but remains unchanged for existing apps.
- `Custom` roles can now inherit permissions from multiple other roles, giving you more flexibility.


## Up next with Budibase 3.0

With this release, managing user permissions in Budibase becomes more intuitive, flexible, and transparent. Whether you're creating custom roles to fit your business or using role inheritance to streamline permissions, Budibase 3.0 gives you full control over how you manage access.

Stay tuned for more exciting features and improvements as we continue to push the boundaries of what's possible with Budibase!