---
title: Level-up Your Automations With Automation Branching - Day 3, Budibase Launch Week
description: It’s day 3 of our 2024 launch week. Today, we’re thrilled to unveil Automation Branching, empowering you to build sophisticated, automated workflows with ease. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/day_3_a1h2jb.png
image: https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/day_3_a1h2jb.png
date: 2024-11-06
author: Dean Hannigan, Ronan McQuillan, Joe Johnston
draft: true
---

{{< youtube id="XCsB0NI3-Ls" >}}

Welcome to day three of Budibase 3.0 Launch Week! Over the past few days, we announced a [brand new data experience](/blog/updates/v3/launchweek/day1) and [enhanced role-based access control](/blog/updates/v3/launchweek/day2). Today, we’re thrilled to introduce new functionality that will improve everyone's experience building automations.

## Automation Branches

We’ve introduced a new step to add Branching to your automations. Use the Branch icon to add a new sub-flow beneath any existing automation trigger or action. 

We can create as many parallel Branches as we like or even Branches within Branches. 

Each Branch begins with a **Run Condition**. Adjacent Branches are evaluated from left to right. When the first Run Condition evaluates to true, the branch will be executed.

Budibase Automations are now fully optimized for handling advanced use cases—like multi-step approvals, working with API responses, or categorizing and routing tickets.

![Two branched in Budibase automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/branching_djgn0q.webp)

Let’s say we wanted to handle incoming asset requests, depending on whether the device in question is in stock. First, we’d query our inventory. 

We’d then add two branches - for in-stock or out-of-stock items.

Then, we can add whichever actions we like under these. For instance, updating the status of the original rental request.

![Automation run conditions](https://res.cloudinary.com/daog6scxm/image/upload/v1730386002/campaigns/3.0/day%203/branching_condition_bbhyc0.webp)

## Drag and Drop

![Drag and drop automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730386682/campaigns/3.0/day%203/drag_and_drop_lowawo.webp)

Alongside Branching, we’ve introduced drag-and-drop re-ordering for automation actions. Action steps are now draggable. Quickly reorder steps, without losing any of their configuration. 

When we grab any step, all of the available positions are highlighted in green, providing an intuitive visual cue for structuring automation flows.

## Reordering Branches
![Reordering branches](https://res.cloudinary.com/daog6scxm/image/upload/v1730387063/campaigns/3.0/day%203/move-branch_figxtu.webp)

Since Branches are evaluated from left to right, we’ve also added horizontal reordering. Use the left and right arrow icons to shift entire branches in order of precedence. Remember, the first branch with a Run Condition that evaluates to true will be executed.

## Pan and Zoom
![Pan and Zoom automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730387330/campaigns/3.0/day%203/CleanShot_2024-10-31_at_15.08.13_d8kvls.gif)
Branching opens the door to a huge degree of sophistication within our automation rules. To keep this manageable, we’ve added panning and zooming within the Automation section of Budibase.

The more complex our rules are, the trickier it is to understand their structure.

With our new pan and zoom buttons, we can quickly shift our focus between granular subflows - or we can take a step back and view the big picture.

We’ve also added a new duplicate option to all automation steps, enabling you to seamlessly add new steps based on existing actions.

## Branch Tests

![Branching added to automation testing experience](https://res.cloudinary.com/daog6scxm/image/upload/v1730387928/campaigns/3.0/day%203/test_ufzu87.webp)

Our testing tools are designed to make it a breeze to see how each individual automation run has executed - showing only the branches and actions that have actually run. 

Tomorrow, our 3.0 launch week continues with some intelligent new functionality to supercharge your app-building experience with AI.