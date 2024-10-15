---
title: Automation Branching
description: It’s day 3 of our 2024 launch week. Today, we’re thrilled to unveil Automation Branching, empowering you to build sophisticated, automated workflows with ease. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1699284176/Branding/Assets/Symbol/RGB/Full%20Colour/bb-symbol-trans_v60zdz.svg
images:
  - 
image: 
date: 2024-10-23
author: Dean Hannigan, Ronan McQuillan
draft: true
---

Welcome to day three of Budibase 3.0 Launch Week! Over the past few days, we introduced a brand new data experience and enhanced role-based access control. 

Today, we’re bringing powerful conditional logic to your Budibase apps with the introduction of **Automation Branching**. 

Budibase’s Automation section has always been the key to building efficient, streamlined workflows on top of your data.

We’re thrilled to introduce powerful new functionality to build complex, branching logic in Budibase Automations.

Let’s check out how this works.

## Introducing automation branches

We’ve introduced a new step to add Branches to your automation rules. Use the Branch icon to add a new sub-flow beneath any existing automation trigger or action. 

We can create as many parallel Branches as we like or even Branches within Branches. 

Each Branch begins with a **Run Condition**. Adjacent Branches are evaluated from left to right. When the first Run Condition evaluates to true, the branch will be executed.

**Adding a branch GIF**

Budibase Automations are now fully optimized for handling advanced use cases—like multi-step approvals, working with API responses, or categorizing and routing tickets.

Let’s say we wanted to handle incoming asset requests, depending on whether the device in question is in stock. First, we’d query our inventory. 

We’d then add two branches - for in-stock or out-of-stock items.

**Two branches gifs**

Then, we can add whichever actions we like under these. For instance, updating the status of the original rental request.

**Actions gif**

## Drag and drop automation layouts

Alongside Branching, we’ve introduced drag-and-drop re-ordering for automation actions. Action steps are now draggable. Quickly reorder steps, without losing any of their configuration. 

When we grab any step, all of the available positions are highlighted in green, providing an intuitive visual cue for structuring automation flows.

**Reordering steps GIF**

Since Branches are evaluated from left to right, we’ve also added horizontal reordering. Use the left and right arrow icons to shift entire branches in order of precedence. Remember, the first branch with a Run Condition that evaluates to true will be executed.

**Reordering branches GIF**

Branching opens the door to a huge degree of sophistication within our automation rules. To keep this manageable, we’ve added panning and zooming within the Automation section of Budibase.

The more complex our rules are, the trickier it is to understand their structure.

With our new pan and zoom buttons, we can quickly shift our focus between granular subflows - or we can take a step back and view the big picture.

**Pan and zoom GIF**

We’ve also added a new duplicate option to all automation steps, enabling you to seamlessly add new steps based on existing actions.

**GIF**

Our testing tools are designed to make it a breeze to see how each individual automation run has executed - showing only the branches and actions that have actually run. 

**Test GIF**

Tomorrow, our 3.0 launch week continues with some intelligent new functionality to supercharge your app-building experience with AI.