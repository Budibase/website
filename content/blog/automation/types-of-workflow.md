+++
author = "Ronan McQuillan"
date = 2023-01-03T00:00:00Z
description = "Check out our in-depth guide to the three core types of workflow."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1672752536/cms/Types_of_Workflow_Header_liwfgq.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1672752542/cms/Types_of_Workflow_Header_ziegtk.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "3 Types of Workflow | In-Depth Guide"

+++
When it comes to building efficient internal operations, understanding the logic that governs common tasks is crucial. However, this is nearly impossible if we don’t have a firm grasp of the core types of workflow.

That’s just what we’re covering today.

You see, _workflow_ is an incredibly broad term. We could be talking about just about anything - from simple vacation approvals to highly complex automated replenishment tasks.

This presents us with a few major challenges.

First of all, without a framework in place, it’s much more difficult to determine the right strategies for improving workflows.

Besides this, we’ll have difficulty digitalizing the rules behind different workflows if we don’t know the basic logic that these are based on.

Today, we are going to examine everything you need to know about the three dominant types of workflows, as well as common variations and examples of each.

First, though, let’s take a step back and think about the basics.

## What do we mean by types of workflow?

Essentially, what we’re talking about is the different ways that we can define how actions within a workflow are structured - namely the kinds of logic that controls how and when different actions are taken.

Naturally, if the basic rationale behind how a workflow is structured can vary, it follows that workflows themselves can be very different.

So where do the differences occur?

Essentially, the distinction occurs along two lines. First, there’s the nature of the variables that are used in decisions between actions. For instance, are these based on time, the completion of the previous step, or more complex rules?

Second, there’s how actions are structured. Do these happen one-by-one or concurrently? Is there a fixed order or is each one triggered independently by separate rules? Are some actions only carried out some of the time?

Luckily, we can take account of both of these issues with only three types of workflow.

## 3 types of workflows

So what are the three types of workflows that you need to know?

From the simplest to the most complex, we have:

1. Sequential workflows.
2. State-machine workflows.
3. Rule-based workflows.

As we drill into each of these, we’ll also see variations on each, along with how they might be used to control different kinds of internal tasks.

Let’s jump in.

### Sequential

Sequential workflows are the most common, simple kinds of tasks. In fact, this is actually fairly self-explanatory. The basic principle is that we have a set of required steps to complete a task, and these need to be completed in a fixed order.

We can’t move on to the next step until the preceding one is completed. We also can’t jump around or go back and forth - otherwise, it wouldn’t be a sequence.

As such, we don’t have much space for variation here.

One area where we can encounter differences is with the idea of _success/failure conditions_.

That is, we might only be able to move to the next step if the previous one is completed _successfully_. If not, the step fails and, the entire workflow might be abandoned. For example, if we need to get unanimous sign-off from different stakeholders, in a fixed order.

#### Examples

Examples of sequential workflows are everywhere - we couldn’t possibly even begin to make a dent in them.

For instance, we have simple order fulfilments, approval workflows, equipment requests, email sign-ups, and much much more.

Let’s drill a little bit deeper into one of these. Take a basic vacation approval. This would follow a structure along the lines of the following steps:

1. An employee submits a vacation request.
2. HR checks if they have sufficient remaining leave.
3. If so, they check if there is sufficient cover in their team.
4. If so, they check if there are any project-related deadlines or events that would prevent them taking leave.
5. The request is either approved or declined.

From steps two to four, we have. If any of the relevant criteria isn’t met, the workflow can be abandoned.

![Types of workflow example 1](https://res.cloudinary.com/daog6scxm/image/upload/v1672752636/cms/Vacation_Request_Form_Template_Gif_mjwe43_zt1tw3.gif "Types of workflow example 1")

### State-machine workflows

State-machine workflows are a little bit more complex. They’re also typically more limited to digitalization use cases.

Basically, instead of having a fixed structure, each action is triggered by a defined event. This might be a different action being completed or it might not. This could still be a different step being completed.

Alternatively, it could be an external event or even a time-bound one. The different events can form a sequence of sorts, or they can be completely independent.

When an event occurs, the relevant state of the resource in question is updated to reflect this.

The benefit here is that we have a lot more control over the timing of different steps in our workflow.

#### Examples

State-machine workflows are generally used in code-heavy or highly automated tasks. For instance, more complex ecommerce fulfillment, procurement, replenishment, logistics, and more.

Say we were dealing with an online order workflow. This could be made up of actions along the lines of the following:

* When a customer makes an order, an entry is created in the _orders_ database.
* When the items become available, the customer receives an email to tell them when they’ll be dispatched.
* When the items are dispatched, the customer receives another email, and the _orders_ entry is updated.
* When the items arrive, the entry is updated again.
* Three days later, the customer receives a follow-up email offering them a survey.

This is a highly simplified example. In reality, we might have many more highly granular events and triggers.

![Types of workflow example 2](https://res.cloudinary.com/daog6scxm/image/upload/v1672752661/cms/Manufacturing_Inventory_Management_Tempalet_GIF_uwaa3d_apowzt.gif "Types of Workflow example 2")

### Rules-based workflows

Finally, we have rules-based workflows. These offer us the most complexity and specificity. The idea is that each action that _can_ make up a workflow is tied to a defined condition, which can be based on any variable at all.

The appeal here is that this type of workflow allows us to implement branching logic.

For example, we can take the output variable from one step and use it to decide what to do next, based on the specific value. That way, we can have much more sophisticated workflows, where some actions only occur in certain situations.

#### Examples

Examples of rules-based workflows include any time we need to build additional complexity into the way our team carries out different tasks.

For instance, more complex approval and request workflows, most customer interactions, or anything with a large human component, as well as more complicated automated functions.

Say we were dealing with a workflow for routing a customer query to the right department. We might use several rules based on:

* Their location.
* The order value.
* The payment method.
* The shipping method.
* The nature of the query.
* Their contact preferences.
* Their history.
* And more.

![Types of workflow example 3](https://res.cloudinary.com/daog6scxm/image/upload/v1672752683/cms/Callback_qwyzqp.gif "Types of workflow example 3")

## How do you identify the right type of workflow for your needs?

So, we know that there are three main types of workflows. But how do we know which one to build a given internal task around? After all, the whole point here is that we want to figure out the best structure to use to optimize our team’s daily work.

There are a couple of key issues to pay attention to, which we’ve already largely hinted at.

The first is whether we’ll need actions to be completed separately or concurrently.

The second is if every step is required every time a task is completed or if some are optional.

Additionally, if we know actions need to follow a fixed order, we’re probably going to end up with a sequential workflow. If we know that they’ll follow more conditional logic or an events-driven structure, we’ll have to opt for one of the others.  
![Budibase Screenshot](https://res.cloudinary.com/daog6scxm/image/upload/v1672752706/cms/Budibase_Screenshot_hysbwn.png "Budibase Screenshot")

## Budibase for workflow management

At Budibase, we’re on a mission to transform the way businesses build custom solutions for managing all types of workflows.

Our open-source, low-code platform is the fast easy way to build everything from simple CRUD applications to more complex internal tools.

We’ve even built 50+ free app templates to help get you started.

Check out our ultimate guide to [workflow management](/blog/automation/workflow-management/) to learn more.

To start using Budibase to build better tools, faster, sign up for free today.