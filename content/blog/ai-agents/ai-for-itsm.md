+++

author = "Ronan McQuillan"
date = 2025-07-16
description = "Take a look at our comprehensive guide to common AI ITSM use cases."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "AI for ITSM | 5 Use Cases and Examples"

+++

For IT teams, there’s a particular urgency about adopting AI solutions. Indeed, ITSM is one of the use cases where some of the most effective solutions for implementing AI have come to market.

As you’d expect, it’s also one of the internal teams that stands to gain the most from intelligent, AI-driven processes. In particular, ITSM workflows are characterized by large volumes of repetitive tasks that often require contextual awareness and human reasoning.

Today, we’re exploring the role of AI in ITSM in 2025, including checking out some practical use cases and examples that we can implement today.

Specifically, we’ll be covering:

- [What is AI for ITSM?](#what-is-ai-for-itsm)
  - [Types of AI solutions](#types-of-ai-solutions)
  - [Benefits and challenges](#benefits-and-challenges)
- [5 AI ITSM use cases](#5-ai-itsm-use-cases)
  - [Ticket triage](#1-ticket-triage)
  - [Incident categorization](#2-incident-categorization)
  - [Translation](#3-translation)
  - [Change request summarization](#4-change-request-summarization)
  - [Response generation](#5-response-generation)

Let’s start with the basics.

## What is AI for ITSM?

Implementing AI for ITSM largely means designing LLM-powered systems that can replicate and augment tasks that would otherwise rely entirely on human service agents.

To understand this better, it’s helpful to take a step back and think about the kinds of tasks and processes that service agents typically perform. 

These range from very simple, deterministic workflows, like password resets, to more complex, context-dependent tasks, like investigating incidents.

Importantly, as service workflows, these are typically triggered by requests from end users, who might not necessarily have a high level of knowledge of the underlying issues. 

Therefore, a huge proportion of the workload often revolves around routing requests to the appropriate teams, flows, or queues. Naturally, this takes time and resources away from actually providing agreed services to users.

Therefore, AI is often used as part of our efforts to automate ITSM workflows, with the overarching goals of providing better outcomes more efficiently.

### Types of AI solutions

Knowing what AI for ITSM involves at a high level, we can next start to think about the kinds of solutions that are available here.

As you might expect, there are a number of distinct ways that AI can be utilized to make our processes more efficient. As we hinted at earlier, this might seek to replicate human interactions or provide augmentation and assistance for our existing service agents.

Some of the most common types of AI solutions for ITSM teams include:

- **Monitoring, detection, and predictive analytics** - including detecting events or anomalies that can trigger ITSM workflows.
- **Intelligent routing** - determining which agent, queue, or workflow a request should be routed to.
- **Ticket triage** - identifying the related CIs and relative priority of a ticket based on established business rules.
- **AI actions within traditional workflow automations** - using LLM-based tools to carry out specific actions within a workflow, as an alternative to scripted or low-code actions.
- **Extracting variables from natural language** - extracting required values for downstream processing.
- **Chatbots** - interactive tools that can direct users to relevant tools to self-serve, or even trigger actions to resolve their issues.
- **Agentic AI** - AI-based systems that are capable of autonomously reasoning and taking actions within workflows.
- **Content and response generation** - leveraging LLMs to generate responses to end-user queries.

So, we can broadly differentiate between AI solutions that handle the full scope of ITSM processes and those that deal with more individualized or discrete tasks and actions. 

As you might expect, different options have their own respective use cases and applications. 

For instance, wide-scale, comprehensive AI ITSM solutions might offer greater overall efficiency improvements, but many teams will still benefit from a more targeted approach, especially with lower implementation costs.

You might also like our guide to [AI agentic workflows](https://budibase.com/blog/ai-agents/ai-agentic-workflows/).

### Benefits and challenges

To flesh this out, it’s important to understand the potential benefits and challenges of AI for ITSM. 

Naturally, there will be slight variations here between different types of AI solutions. However, at a high level, almost all AI ITSM solutions seek to achieve the following benefits:

- **Increased productivity** - enabling human service agents to focus on more productive tasks.
- **Faster resolution times** - resolving routine issues automatically, reducing overall wait times.
- **Improved knowledge management** - helping to make knowledge articles more relevant and accurate for end users and service colleagues alike.
- **Increased coverage** - ensuring that users are able to get help when they need it.
- **Lower costs** - reducing the labor hours required to deliver services.
- **Reduced downtime** - including helping to prevent service disruptions.
- **Improved resource usage** - optimizing our use of IT resources.
- **Issue detection** - identifying issues and anomalies automatically.
- **Data-driven decision making** - providing a basis for identifying problems and improvement opportunities.
- **Enhanced user experiences** - increasing satisfaction for both end users and service colleagues by providing better resolutions more quickly.

At the same time, implementing AI solutions can be a large undertaking, which is often fraught with potential challenges.

These include:

- **Upfront costs** - we need to account for the upfront costs of developing and deploying AI ITSM solutions.
- **Technical skills and resources** - many teams, especially smaller ones, might require additional technical skills and resources to develop solutions.
- **Integration and data challenges** - integrating relevant systems and data resources within AI systems.
- **Inefficient existing processes** - if our existing underlying processes are ineffective, handling these with AI is unlikely to improve things.
- **Resistance to change** - many organizations face resistance from internal stakeholders when adopting AI.
- **Maintenance and lifecycle management** - we must be conscious of the maintenance and lifecycle management burden of AI systems as our needs grow and change.
- **Oversight, monitoring, and auditing** - we’ll need to put measures in place to ensure visibility into AI behavior.
- **Governance and compliance** - including any tools and policies we use to ensure AI systems comply with relevant regulations.

It’s important to note that none of these are necessarily deal-breakers. Rather, what they highlight is the need to choose appropriate solutions for our particular needs, as well as focusing on the core use cases that will deliver the most real-world value.

For a broader approach to improving IT workflows, check out our guide to [ITSM automation](https://budibase.com/blog/inside-it/itsm-automation/) use cases.

## 5 AI ITSM use cases

Now that we have a strong grasp of what AI for ITSM is, how it’s used, and what we can achieve, we can start to think about how we’d go about implementing some of the most common use cases.

We’ve chosen five of the service management tasks that are most commonly handled using AI. Even better, these are all use cases we can easily implement in Budibase, with minimal custom coding.

The specific examples and use cases we’re going to discuss are:

1. [Ticket triage](#1-ticket-triage)
2. [Incident categorization](#2-incident-categorization)
3. [Translation](#3-translation)
4. [Change request summarization](#4-change-request-summarization)
5. [Response generation](#5-response-generation)

To build along with us, make sure to sign up for a Budibase account.

{{< cta >}}

### 1. Ticket triage

Ticket triage is the process of using defined business rules to determine the category and priority level of incoming submissions. This can then be used to decide how they should be prioritized, which colleagues should deal with them, or which queues to route them to.

The challenge is that traditional automation techniques can often be ineffective here, as triaging tickets requires analysis and understanding of qualitative information. For instance, parsing the core issue details from a description input.

For our example, we’re starting with a lightweight tickets table in our database. This contains attributes called `Title`, `Description`, and `Status`.

![AI for ITSM](https://res.cloudinary.com/daog6scxm/image/upload/v1752670862/cms/ai-agents/ai-itsm/AI_ITSM_1_qafsiu.webp "AI for ITSM")

We’ll accept user submissions for `Title` and `Description`, while `Status` is populated automatically using Budibase’s default values.

We want to use this information to determine a `Category` and `Priority` for our ticket, using defined business logic.

To achieve this, we’re going to use Budibase’s AI Column. So, we’ll start by adding a new column to our table, calling it `Triage` and choosing the `AI` data type.

![Triage](https://res.cloudinary.com/daog6scxm/image/upload/v1752670861/cms/ai-agents/ai-itsm/AI_ITSM_2_sudxwl.webp "Triage")

Once we’ve chosen this option, we’re offered several pre-defined operations, but today we want to write our own prompt from scratch, so we’re choosing `Prompt`.

![Operations](https://res.cloudinary.com/daog6scxm/image/upload/v1752670861/cms/ai-agents/ai-itsm/AI_ITSM_3_b9gean.webp "Operations")

We’ll then hit the lightning bolt icon to open the prompt modal.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670858/cms/ai-agents/ai-itsm/AI_ITSM_4_dklwx5.webp "Prompt")

Here, we can enter our prompt, including any variables from our table that we’d like to send to the LLM.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670858/cms/ai-agents/ai-itsm/AT_ITSM_5_nd0qcx.webp "Prompt")

The first thing we want to do is pass our `Title` and `Description` variables to our prompt. We’ll do this using the following instructions:

{{< highlight plaintext "linenos=inline" >}}

You are an IT ticket triage assistant. 

{{ Title }} and {{ Description }} are the details of a new ticket.

{{< /highlight >}}

Next, we’ll provide the business rules we want to use to triage our ticket.

{{< highlight plaintext "linenos=inline" >}}

Use this information to determine a Category for the ticket.

Possible Categories are Hardware, Software, Network, Security, Other

Then, provide a Priority for the ticket.

Options are Low, Medium, High, Emergency.

The priority should be based on the number of users affected (one, a few, many, organization-wide) and the likely impact of the issue described.

{{< /highlight >}}

This is only the logic we’ll use for demo purposes, but in the real world, you could use whichever business rules you like.

Lastly, we need to define the format we want the information returned in. We’re going to specify a JSON object and provide an example.

{{< highlight plaintext "linenos=inline" >}}

Return this information as a JSON object in the following format:

{

"Category": "Hardware",

"Priority": "Low"

}

Do not include any other information.

{{< /highlight >}}

Here’s what our final prompt looks like in situ.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670858/cms/ai-agents/ai-itsm/AI_ITSM_6_egzsow.webp "Prompt")

We can test this out by submitting a ticket using our app UI.

![Ticket Form](https://res.cloudinary.com/daog6scxm/image/upload/v1752670858/cms/ai-agents/ai-itsm/AI_ITSM_7_peedx4.webp "Ticket Form")

Back in the Data section, we can see that our ticket has successfully been triaged.

![Triage](https://res.cloudinary.com/daog6scxm/image/upload/v1752670858/cms/ai-agents/ai-itsm/AI_ITSM_8_r2c9bp.webp "Triage")

### 2. Incident categorization

As we said a second ago, Budibase’s AI Column also features a range of pre-built operations for common tasks. We’re going to show one of these off for a common AI ITSM use case, incident categorization.

Once again, we’re starting with a simple database table, with `Title`, `Description`, and `Status` columns.

![Incident Categorization](https://res.cloudinary.com/daog6scxm/image/upload/v1752670856/cms/ai-agents/ai-itsm/AI_ITSM_9_navpfj.webp "Incident Categorization")

We’ll add an AI Column, this time calling it `Category`.

![Category](https://res.cloudinary.com/daog6scxm/image/upload/v1752670855/cms/ai-agents/ai-itsm/AI_ITSM_10_gxd0lk.webp "Category")

Under the `Operation` dropdown, we have a range of options. We’re choosing `Categorise Text`.

![AI for ITSM](https://res.cloudinary.com/daog6scxm/image/upload/v1752670854/cms/ai-agents/ai-itsm/AI_ITSM_11_lavquz.webp "AI for ITSM")

Under the `Columns` menu, we’ll select `Title` and `Description`.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1752670854/cms/ai-agents/ai-itsm/AI_ITSM_12_nirom2.webp "Columns")

Lastly, we’ll hit the lightning bolt icon alongside the `Categories` field to open a modal where we can specify our categories.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1752670853/cms/ai-agents/ai-itsm/AI_ITSM_13_l6cs0a.webp "Categories")

We’ll add the following categories as comma-separated values - `Hardware`, `Software`, `Network`, `Security`, `Data Breach`, `Account`, `Configuration Error`, and `Other`.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1752670853/cms/ai-agents/ai-itsm/AI_ITSM_14_ddixi3.webp "Categories")

Hit save, and we can head to our incident report form to test our AI column out.

![Incident Form](https://res.cloudinary.com/daog6scxm/image/upload/v1752670852/cms/ai-agents/ai-itsm/AI_ITSM_15_bjqolm.webp "Incident Form")

Again, we can head back to the Data section to confirm that this has worked.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1752670851/cms/ai-agents/ai-itsm/AI_ITSM_16_qyjqd8.webp "Data")

### 3. Translation

In large enterprises and other international organizations, many ITSM teams struggle to deal with multilingual service requests.

Specifically, we want to provide coverage for users across the organization, but providing specialist IT teams with relevant language skills can be highly tricky. As such, translation is also a key, yet often overlooked, use case for AI in ITSM.

To demonstrate what we can do here, let’s head back to our `IT Tickets` table from earlier.

![Tickets](https://res.cloudinary.com/daog6scxm/image/upload/v1752670850/cms/ai-agents/ai-itsm/AI_ITSM_17_ycog3q.webp "Tickets")

We want to configure this so that tickets can be submitted in any language, and they’ll be automatically translated into English.

This time, we’ll call our AI Column `Translation`.

![AI Column](https://res.cloudinary.com/daog6scxm/image/upload/v1752670850/cms/ai-agents/ai-itsm/AI_ITSM_18_tfrs26.webp "AI Column")

For our Operation, we’re choosing `Translate` and pointing this at the `Description` column.

![Translate](https://res.cloudinary.com/daog6scxm/image/upload/v1752670849/cms/ai-agents/ai-itsm/AI_ITSM_19_znhhfo.webp "Translate")

We’ll then specify `English` as our `Language`.

![English](https://res.cloudinary.com/daog6scxm/image/upload/v1752670849/cms/ai-agents/ai-itsm/AI_ITSM_20_ppwt3q.webp "English")

If we wanted to, we could repeat this process to translate our `Title` column as well.

As ever, we’ll hit save and head back to our ticketing form to test this out. We’ll submit a ticket in another language to show it working.

![AI for ITSM](https://res.cloudinary.com/daog6scxm/image/upload/v1752670848/cms/ai-agents/ai-itsm/AI_ITSM_21_z74lhd.webp "AI for ITSM")

Back in the Data section, we can see that this has worked correctly.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1752670847/cms/ai-agents/ai-itsm/AI_ITSM_22_wweqjm.webp "Test")

### 4. Change request summarization

Initially assessing and interpreting requests can be a huge time sink for agents in a range of ITSM workflows. 

As we hinted at earlier, this relates to the fact that end users tend not to have a high level of knowledge around the requests they’re making, including not necessarily understanding our environment, service portfolio, or other technical factors.

As such, we can save huge amounts of time by furnishing IT colleagues with the key facts. This is especially important for more complex workflows that don’t necessarily follow a deterministic path, and, therefore, agents need to decide how to proceed.

Often, this is triggered by a submission with a relatively large amount of qualitative information.

Change requests are a prime example of this. For our demo, we have a change request table for internal IT users, with three long-form text fields - `Description`, `Reason for Change`, and `Impact Analysis`, along with a `Title`, `Estimated Cost`, and `Status`.

![Change Requests](https://res.cloudinary.com/daog6scxm/image/upload/v1752670847/cms/ai-agents/ai-itsm/AI_ITSM_23_cr9eus.webp "Change Requests")

We have two options here. We could write a custom format to specify a format for our summary. But, since we’re already working with structured data rather than a single longer input, we’re only concerned with getting a top-level summary.

So, we’ll add an AI Column, call it `Summary`, and choose `Summarise Text` as our operation.

![Summarize Text](https://res.cloudinary.com/daog6scxm/image/upload/v1752670847/cms/ai-agents/ai-itsm/AI_ITSM_24_dh648x.webp "Summarize Text")

Next, we’ll select `Title`, `Description`, `Reason for Change`, `Impact Analysis`, and `Estimated Cost` under `Columns`.

![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1752670846/cms/ai-agents/ai-itsm/AI_ITSM_25_t0pgiw.webp "Columns")

Here’s the form we’ll use to submit our test data.

![Change Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1752670846/cms/ai-agents/ai-itsm/AI_ITSM_26_hle5tu.webp "Change Request Form")

Once again, we can head back to the Data section to see that this has worked.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1752670845/cms/ai-agents/ai-itsm/AI_ITSM_27_kcv6pt.webp "Data")

### 5. Response generation

Lastly, one of the most exciting AI use cases for ITSM is response generation. Service desk colleagues spend huge amounts of time drafting relatively generic responses to simple tickets, including setting expectations and providing troubleshooting steps for end users.

So, by automating this process, we can greatly reduce the workfload involved, freeing agents up to work on higher priority tasks.

This time, we’re starting in Budibase’s Automation section. Here, we’ll be prompted to create a new rule.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1752670845/cms/ai-agents/ai-itsm/AI_ITSM_28_dcstxb.webp "Automation")

When we click through, we’re prompted to give our automation a name and choose a trigger. We’re calling ours `Generate Response` and using a `Row Created` trigger.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1752670844/cms/ai-agents/ai-itsm/AI_ITSM_29_dmljxt.webp "Trigger")

We then need to point our trigger at the `IT Tickets` table.

![Row Created](https://res.cloudinary.com/daog6scxm/image/upload/v1752670844/cms/ai-agents/ai-itsm/AI_ITSM_30_frcahl.webp "Row Created")

Now, we only want to automatically generate a response for certain kinds of tickets. Specifically, this wouldn’t be appropriate for high-priority or emergency situations. In other words, we’ll only proceed for low or medium priority tickets.

To achieve this, we’ll need to use the `Priority` value from our `Triage` object from earlier.

We’re going to start by adding a `Condition` action.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1752670844/cms/ai-agents/ai-itsm/AI_ITSM_31_jggjqm.webp "Condition")

This accepts three arguments - a `Reference Value`, a `Condition`, and a `Comparison Value`. If the condition is met, the automation flow will continue. Otherwise, it stops.

We’re going to open the bindings modal for our `Reference Value` and select the JavaScript option.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1752670843/cms/ai-agents/ai-itsm/AI_ITSM_32_shjvls.webp "Bindings")

Recall that our `Triage` column is formatted as a JSON object, but it’s actually stored as a string. So, we need to use a JavaScript function to extract the `Priority` value.

To do this, we’ll use:

{{< highlight javascript "linenos=inline" >}}

var triage = JSON.parse($("trigger.row.Triage"))

return triage["Priority"]

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1752670843/cms/ai-agents/ai-itsm/AI_ITSM_33_jlv4mv.webp "JavaScript")

We’ll hit save, set our `Condition` to `Not Equals`, and enter `Emergency` as our `Comparison Value`.

![Comparison Value](https://res.cloudinary.com/daog6scxm/image/upload/v1752670842/cms/ai-agents/ai-itsm/AI_ITSM_34_mbhm1u.webp "Comparison Value")

We’ll then repeat this process with the exact same piece of JavaScript, this time setting our `Comparison Value` to `High`. We’ve also given our two Condition actions more descriptive names.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_35_anvy0e.webp "Condition")

Next, we’ll scroll down to the `AI` subheading and add an `LLM Prompt` action.

![AI Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_36_wffvxf.webp "AI Actions")

This accepts a single argument, allowing us to input our prompt.

![LLM Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_37_wfmhjn.webp "LLM Prompt")

We’ll open the bindings modal to populate this.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_38_tn17ub.webp "Prompt")

The prompt we’re going to use is:

{{< highlight javascript "linenos=inline" >}}

You are an IT service desk agent. The following is a ticket submission:

{{ trigger.row.Title }} 

{{ trigger.row.Description }} 

{{ trigger.row.Triage }}

Provide an email response advising that one of our team members will look at this shortly, as well as providing any relevant troubleshooting tips.

{{< /highlight >}}

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_39_fhibbf.webp "Prompt")

Again, this is only the prompt we’re using for demo purposes, but in a real-world application, we might use more complex logic.

Next, we’ll test out our automation rule, using a row that we know has a `Medium` `Priority`.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_40_duunmz.webp "Test")

Under Data Out, we can see the response that’s been generated.

![AI for ITSM](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_41_yvhgdy.webp "AI for ITSM")

We could then use an `Email` action to send this to the end user via email or use a `HTTP` request to notify them via an instant messaging service.

![Email Action](https://res.cloudinary.com/daog6scxm/image/upload/v1752670841/cms/ai-agents/ai-itsm/AI_ITSM_42_rsosji.webp "Email Action")

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

With connectivity for a huge range of RDBMSs, APIs, and NoSQL tools, alongside autogenerated UIs, powerful automations, extensive AI capabilities, custom RBAC, optional self-hosting, and free SSO, there’s never been a better way to ship professional internal tools.

Take a look at our [features overview](https://budibase.com/) to learn more.