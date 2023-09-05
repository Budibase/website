+++

author = "Ronan McQuillan"
date = 2023-09-05
description = "Approval workflow are some of the basic building blocks of internal business processes."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1693906506/cms/approval-workflows/Approval_Workflows_Header_vmjeer.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1693906506/cms/approval-workflows/Approval_Workflows_Header_vmjeer.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are Approval Workflows & How do You Build Them?"

+++

Approval workflows are some of the most pervasive admin tasks in almost every business. They’re also one of the types of tasks where it’s easiest to eliminate manual interactions - and free up team members to work on bigger and better things.

At least, they are in theory.

In practice, approvals are one of the biggest time sinks around. You can probably think of a time when a project hit a roadblock because you couldn’t get someone to sign it off. It happens every day.

Today, we’re diving deep into building effective, performant approval workflows. 

Specifically, we’re going to think about where approval workflows fit into your wider operations, the challenges you might face when these aren’t up to scratch, and the key tools and strategies you can use to drive efficiency.

We’ll even check out the step-by-step frameworks you can implement for both designing and implementing effective approvals.

But first, kick off with the basics.

## What are approval workflows?

Approval workflows are the set of steps that are required to enforce a separation of responsibilities between colleagues who can request a particular resource or action - and those who can respond to these requests.

In other words, any time someone has to ask for permission to do something internally - we could describe this as an approval workflow. At least, assuming that the criteria for making a decision is consistent for each request of a certain kind.

So, approval workflows are also characterized by a high degree of regularity and repeatability. Note that we might also have review and approval steps as part of another type of workflow or process - or even multiple approvals.

Ultimately, the goal is to ensure that internal processes are adhered to. This could feed a range of different business goals, such as:

- Helping to manage and distribute resources.
- Providing oversight into project work.
- Tracking assets and inventory.
- Ensuring that employees receive their entitlement to different benefits.
- Maintaining compliance with legal and financial requirements.
- Providing accountability within daily workloads.

This is particularly important in businesses over a certain size - where it’s no longer viable to manage approvals informally.

But in order to distinguish between formal and informal approval workflows we need a more granular understanding of what we’re dealing with.

![Approval workflow training](https://res.cloudinary.com/daog6scxm/image/upload/v1693301807/cms/workflow-application/Training_https___www.bptrends.com_bpt_wp-content_uploads_2020-BPM-Survey.pdf_p5bwbv.webp "Approval workflow training")

([BP Trends](https://www.bptrends.com/bpt/wp-content/uploads/2020-BPM-Survey.pdf))

### What are the components of an approval workflow?

Approval workflows are made up of a few key elements - even if these aren’t all explicitly defined.

However, for an approval workflow to be effective and formalized, we need to have a strong picture of each.

Here’s what we’re dealing with.

#### Requests

The first - and most obvious element of any approval process is the *request* itself. That is, what’s being asked for. We said earlier that this can be a *resource* or an *action* - meaning someone wants to do something or access something, but they need approval first.

This could be requesting to use annual leave, expense an invoice, rent a device, access a data set, submit a piece of work, kick off a project, register a purchase order, or any other regular internal task that requires some element of sign-off.

However, there’s a bit more to it than this. Specifically, there are two other factors that we need to get our heads around within different types of approval workflows.

The first is which kinds of colleagues or other stakeholders are able to submit particular kinds of requests.

The second is the information that’s required of a user in order to submit a request - corresponding to the specific decision points involved in making an approval or rejection decision.

This touches on a few of the other key ingredients of an approval process - which we’ll get to in turn.

#### Stakeholders

Stakeholders are essentially anyone involved in a workflow. In the case of approvals, we can pretty easily place these into two distinct clusters.

- People who can make a particular request.
- People who can approve or decline this request.

Of course, the specifics of each of these can vary massively depending on the nature of the task at hand.

Some of the most common configurations include:

- Colleagues making requests that need to be approved by their line manager.
- Colleagues in one department making requests that need to be approved by a separate department.
- Customers or clients making requests that need to be approved by your internal team.
- Colleagues making requests that need to be approved by customers or clients.
- Other external stakeholders like vendors or consultants making requests that need to be approved by your internal team.
- Internal colleagues making requests that need to be approved by external stakeholders.

Note that this is specifically related to manual approval workflow processes. We'll come on to automated approval workflows a little later.

#### Roles and responsibilities

We also need to know what each stakeholder’s roles and responsibilities are within individual request/approval workflows.

The most obvious element of this is who can make requests and who can approve them, as we saw a second ago.

Besides this, we also need to account for more granular roles and responsibilities.

Basically, this means having a clear framework in terms of a few different types of *permissions*:

1. To be able to take specific actions.
2. To be able to access different information about requests.

These can also interplay to quite a large degree, making for more complex configurations. For example, if a finance colleague was able to approve requests for invoices - but only those that are under a certain value threshold.

Similarly, one of your project managers might only be able to approve requests from certain clients.

![Approval workflow automation stats](https://res.cloudinary.com/daog6scxm/image/upload/v1693301807/cms/workflow-application/Automatable_Tasks_https___www.mckinsey.com_featured-insights_future-of-work_jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages_iannuo.webp "Approval workflow automation stats")

([McKinsey](https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages))

#### Logic

Logic refers to the actual business rules that we’re implementing when we carry out an approval workflow. In other words, these are the specific decisions we need to make in order to arrive at a particular outcome.

Depending on the complexity of the approval process itself, this can be relatively straightforward - or it might be based around more sophisticated rules.

We might even have several sequential decisions, as we’ll see in a second.

We can group the kinds of decisions you’re most likely to encounter into three main clusters:

- **Information contained in the request itself** - for example dates of holiday requests, values of invoices, or other data points contained in the submission.
- **Information about the person making the request** - for example, the requester’s remaining holiday or expense allowance.
- **Other contextual information** - for example, which colleagues have already booked time off, the date that the request was made, or due dates for submissions.

We might also use simple yes/no assessments - or more complex logic that weighs different decision points conditionally within more complex workflow management software.

If our approval workflow is particularly complex, we’ll also need to account for the factors that determine if a request can move from one stage to the next or not - or even which stage it needs to move to next, in the case of non-sequential processes.

#### Structure

Finally, we have the structure of our workflows. This is the order that different constituent steps must follow in order to complete the wider task at hand. 

As we said a second ago, this might be sequential, or it might follow a more complex structure based on multiple decision points and conditions.

In a sequential flow, there’s a fixed order of steps - each of which must be completed before a resource can progress to the next. For example, in the case of an expense claim, the structure might look like this:

1. An employee submits an expense request.
2. It’s checked to see if all of the necessary data is provided.
3. It’s checked to see if the items in question are expensible by this employee.
4. It’s checked to see if the values are appropriate.
5. The invoice is checked to see if it’s correct.
6. The expense is approved.
7. The employee is sent an email notification.

In a more complex workflow, there might be additional steps required in certain cases - like if the employee is a certain seniority level or the value of the invoice exceeds a particular threshold.

### 3 types of requests and approvals

So, now we have a pretty thorough idea of what approval workflows actually are. But, no doubt you can see that - in the real world - there’s an awful lot of scope for variation here.

So, it’s helpful to break up the field a little bit further. 

Specifically, we want to run through some of the most common categories of approval workflows that you’re likely to encounter.

Here are the three types of tasks we can break approvals up into

#### Process requests/approvals

First, we’ve got approvals that take place within regular business processes. These are the most basic admin tasks, where there’s a clear desired outcome and a relatively unchanging path to meeting this.

In other words, there’s a high degree of predictability - usually owing to the fact that we’re dealing with internal tasks - like day-to-day admin.

Basic document management, financial tasks, HR workflows, and other non-customer-facing tasks within departments are good examples of this.

#### Project requests/approvals

Next, we have requests and approvals as they occur within projects - either in an internal or a client-facing context. Since projects present a lot more variability than more menial processes, we’ll see a corresponding reduction in predictability here.

This might be because of one of a number of factors. One is that project approvals will typically involve a greater number of stakeholders - so we might have layers of signoff required from people at different levels - either internally or externally.

For instance, in a content approval workflow.

Similarly, project approvals will often have more complex approval criteria. Contrast the process of signing off something creative - like ad copy - with the equivalent process for signing off an expense report.

In other words, we’re dealing with human factors that are often difficult to plan around.

#### Case requests/approvals

Finally, we have case-based workflows. This includes the likes of research and development, investigations, strategic decisions, or any other type of task where it’s impossible to know the outcome.

Despite this, case-based processes can still often have a high need for approval actions - potentially even more so than other kinds of tasks.

For one thing, there might be several directions that the project could take here, so we need thorough vetting, accountability, and sign-off procedures to ensure that the underlying goals are met.

![Existing technology](https://res.cloudinary.com/daog6scxm/image/upload/v1681719117/cms/Automation_with_existing_tools_https___www.mckinsey.com_featured-insights_future-of-work_jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages_rwdosc.webp "Existing technology")

([McKinsey](https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages))

## How to design a request/approval workflow

Now we have a bit more of a fleshed-out picture of request and approval workflows, we can start thinking about what makes a good one. For that, we need to check out the steps you can follow to design a workflow of your own.

We’ll return to how we can *implement* this a little bit later - but for now, the key thing is understanding how to get this right in the abstract.

Here are the steps you can follow:

1. **Audit existing processes** - to outline how tasks are completed at present.
2. **Remove extraneous or redundant steps** - we want to cut the need for approvals to only what is strictly necessary to complete the task.
3. **Map your new flow of steps** - including the order in which they need to occur.
4. **Define approval/denial criteria** - outline the data and decision points that determine if a request can progress to the next stage or be approved.
5. **Document stakeholders and roles** - outline who can do what within the workflow.
6. **Implementation strategy** - deciding which parts of the workflow can be automated, which will still need human interactions, and how we’ll enable different stakeholders to interact with requests.

Remember we said earlier that - many times - businesses already have approval flows in place, but they may not be formalized or documented.

So - as well as driving efficiency - our goal can also be to reduce ambiguity, establish clear control, and regularize common internal tasks.

That leads us to…

## Why do we need strong approval workflows?

It’s important to consider what we can actually achieve by getting our approval workflows right. This helps us to set goals for transformation, get buy-in from different stakeholders, and provide a clear vision for any changes we want to make.

The biggest factors here include:

- Improving efficiency within internal tasks.
- Providing clarity in what’s required of different employees.
- Ensuring process adherence.
- Facilitating automation.
- Boosting employee morale.
- Creating a clear paper trail of actions that have been taken.
- Regularizing tasks.
- Improving access to information.
- Reducing admin burdens.
- Ensuring fairness.
- Supporting compliance efforts.

Some of these are pretty self-explanatory. Others aren’t so intuitive, so they’re worth spelling out.

Many of these are actually interrelated 

For example, eliminating manual admin tasks frees your team up to work on more cognate, satisfying tasks, which in turn makes them more productive, happier, and more motivated at their jobs.

Similarly, when we route requests through clearly defined channels, it’s much easier to record what has happened at each stage, which makes ensuring compliance and process adherence much easier.

With that in mind, we can start to think about some of the specific tools we can use to implement approval workflows in the real world.

## Strategies for managing approvals

We’ve alluded a couple of times already to the distinction between approval tasks that require human interactions and those that we can automate. 

But, the key thing is that these shouldn’t be entirely isolated from one another. Rather, it’s important that they act symbiotically - including giving users appropriate tools to interact with automations - including triggering them or viewing their output data.

With that in mind, we have three key strategies for managing approvals - from a technical point of view at least.

Let’s check each one out in turn.

### Dedicated UIs

The first is building user interfaces that reflect different stages of your workflow model. In the case of requests and approvals, this is relatively straightforward stuff. We only really have two types of interfaces to deal with for the most part.

The first is *forms* for submitting requests. The priority here is efficiently guiding users through the process of providing the right information about their request, the first time around.

We can also use front-end validation logic and conditional design to give users feedback in the case that something is missing or there’s some other problem with their submission.

The other thing we need to consider is the kinds of UIs that will enable users to access information to make approval/rejection decisions - as well as similar screens to allow requesting users to view the status of their submissions.

There are two components to this:

- **READ functionality** - to enable users to search, locate, and view particular submissions.
- **UPDATE functionality** - enabling responsible users to update the status attribute of individual requests or add notes.

So, we’ll need a combination of forms, tables, and in-line actions. Check out our guide to [table UI design](https://budibase.com/blog/app-building/table-ui-design/) for some inspiration here.

### Data centralization

The data piece is a bit more complex. It’s also much more contingent on the specifics of your transformation project. In fact, there are a couple of different routes we could go down here, depending on the scale of what you want to achieve.

The first thing we need to think about is getting all of the data that we need for colleagues to make decisions within approval workflows into one location. So, we might need a combination of integration, automations, and custom queries to multiple data sources to achieve this.

The trickier thing is when it comes to designing a common data model to represent multiple similar types of requests and approval workflows.

Take a look at our guide to [workflow management database design](https://budibase.com/blog/app-building/table-ui-design/) for a fuller discussion of this.

### Automation

Finally, we have automated approvals. As you can probably imagine, the idea here is to replicate human decision-making using digital tools. Like any other automation project, this can take a number of different forms.

However, the vast majority of day-to-day business approvals are actually based on pretty simple and easily computed data points.

The tricky thing isn’t so much the actual processing - as it is getting the required data in one place to begin with.

Check out our ultimate guide to [enterprise workflow automation](https://budibase.com/blog/automation/enterprise-workflow-automation/) to learn more.

## Building approval workflow tools with low-code

Approval workflow tools are used to manage specific requests - giving a single platform where users can create submissions for review - and other stakeholders can make a decision. Take a look at our [approval apps](https://budibase.com/approval-apps/) page to see where Budibase fits into this.

From a development perspective, these aren’t complex solutions at all. 

Rather, for most businesses, the challenge is the sheer volume of distinct approval applications that development teams are tasked with creating. 

Today, low-code is exploding in popularity as a solution to this problem - by empowering IT teams to output professional solutions, with a fraction of the time and resources.

Check out our guide to [digital transformation platforms](https://budibase.com/blog/inside-it/digital-transformation-platforms/) to learn more.