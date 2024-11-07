---
title: Day 3 - Automation branching
description: It’s day 3 of our 2024 launch week. Today, we’re thrilled to unveil Automation Branching, empowering you to build sophisticated, automated workflows with ease. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/day_3_a1h2jb.png
image: https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/day_3_a1h2jb.png
date: 2024-11-06
author: Dean Hannigan, Ronan McQuillan, Joe Johnston
draft: false
---

{{< youtube id="XCsB0NI3-Ls" >}}

Welcome to day three of the Budibase 3.0 Launch Week! Over the past few days, we announced a [brand new data experience](/blog/updates/v3/launchweek/day1) and [Visual RBAC](/blog/updates/v3/launchweek/day2). Today, we’re thrilled to introduce new functionality that will improve everyone's experience building automations.

## Automation Branches

We’ve introduced Branching to Budibase automations. Use the Branch icon to add a new sub-flow beneath any existing automation trigger or action. We can create as many parallel branches as we like - or even branches within branches. 

Budibase Automations are now fully optimized for handling advanced use cases—like multi-step approvals, working with API responses, or categorizing and routing tickets.

{{< alert-positive "Automation branching is available for free.">}}

![Two branched in Budibase automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730386001/campaigns/3.0/day%203/branching_djgn0q.webp)

## Reordering Branches

Since Branches are evaluated from left to right, we’ve also added horizontal reordering. Use the left and right arrow icons to shift entire branches in order of precedence. Remember, the first branch with a Run Condition that evaluates to `true` will be executed.

![Reordering branches](https://res.cloudinary.com/daog6scxm/image/upload/v1730387063/campaigns/3.0/day%203/move-branch_figxtu.webp)

## Drag-and-Drop

Alongside Branching, we’ve introduced drag-and-drop for automation actions. Quickly drag-and-drop steps without losing any of their configuration. When we grab any step, all of the available positions are highlighted in green, providing an intuitive visual cue for structuring automation flows.

![Drag and drop automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730386682/campaigns/3.0/day%203/drag_and_drop_lowawo.webp)

## Pan and Zoom

Branching opens the door to a huge degree of sophistication within our automation rules. To keep this manageable, we’ve added panning and zooming within the Automation section of Budibase.

The more complex your rules are, the trickier it is to understand their structure. With our new pan and zoom buttons, we can quickly shift our focus between indivudal branches - or we can take a step back and view the big picture.

![Pan and Zoom automations](https://res.cloudinary.com/daog6scxm/image/upload/v1730387330/campaigns/3.0/day%203/CleanShot_2024-10-31_at_15.08.13_d8kvls.gif)

## Update to automation testing

Our testing tools are designed to make it a breeze to see how each individual automation run has executed - showing only the branches and actions that have actually run. 

![Branching added to automation testing experience](https://res.cloudinary.com/daog6scxm/image/upload/v1730387928/campaigns/3.0/day%203/test_ufzu87.webp)

Tomorrow, our 3.0 launch week continues with new functionality to supercharge your app-building experience with AI.

