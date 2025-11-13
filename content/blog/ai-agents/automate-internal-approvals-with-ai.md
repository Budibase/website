+++

author = "Ronan McQuillan"
date = 2025-11-13
description = "Take a look at our in-depth guide to using Budibase to automate internal approval workflows with AI."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Automate Internal Approvals with AI"

+++

Internal approvals are some of the most prevalent workflows in just about every organization. In fact, these are critical to all kinds of processes where we need to control access to specific resources or when users can carry out various actions.

This is crucial for a range of compliance, security, and other operational reasons. But at the same time, managing approval workflows manually can create huge amounts of admin work.

Because of this, the use of AI in internal approvals is becoming ever more commonplace.

Today, we’re diving deep into how to use AI within approval workflows. Specifically, we’ll be covering:

- [What are approval workflows?](#what-are-approval-workflows)
  - [Core use cases](#core-use-cases)
- [Why implement AI for internal approvals](#why-implement-ai-for-internal-approvals)
  - [Benefits](#benefits)
  - [Challenges](#challenges)
- [How to implement AI for internal approvals using Budibase](#how-to-implement-ai-for-internal-approvals-using-budibase)

Let’s start with the basics.

## What are approval workflows?

An internal workflow is any set of tasks that involves one type of user submitting a request to access a resource or take an action, which can then be assessed and either authorized or rejected by another type of user.

This decision is based on defined business logic. For example, relating to the availability of the resource in question or the justification for the requested action.

So, the goal is essentially to enforce control over the requested resources and actions, as well as give us oversight into how and when they’re authorized. For example, providing a record of who approved which requests.

Some approval workflows are relatively simple, consisting of a single step, where authorization is only required from one stakeholder to progress the request.

Others are more complex, potentially requiring multiple approval stages or other actions before a request can be authorized. Or, within a given workflow, the specific actions required to approve a request may vary. 

For instance, if we need additional checks for higher-value resources or actions that carry more risk.

In most cases, approval workflows are triggered by a form or ticket submission. Take a look at our guide to [form automation](https://budibase.com/blog/automation/form-automation/) to learn more about how this works.

### Core use cases

Understanding what internal approvals are, it’s also helpful to think about some of the most common use cases. These range from day-to-day tasks that just about everyone will be familiar with to more niche or use-case-specific tasks that require an element of approval and authorization.

Some of the most prominent examples can be found in internal service teams, like IT, HR, and finance. For example, IT asset requests, booking vacations, or submitting expense claims.

These are often some of the simplest workflows to execute, with logic generally being based on relatively simple business rules. For example, authorizing a time-off request might only require us to check the employee’s remaining leave and the availability of colleagues to provide cover.

These are the classic examples, but countless other workflows comprise some element of approvals.

In particular, many workflows require us to implement approvals that handle qualitative information, necessitating human judgment and analysis. This might also lead us to need distinct actions for individual executions of the workflow.

Examples of this can include project kick-offs, change requests, incident reports, content approvals, or other tasks that don’t necessarily revolve around a fixed data schema.

You might also like our guide to building [AI forms](https://budibase.com/blog/ai-forms/).

## Why implement AI for internal approvals?

With a better grasp of what internal approvals are and where they typically arise, we can begin to think more specifically about how and why we’d want to implement AI within these.

At a very high level, the rise of AI has greatly expanded the scope of the kinds of tasks that we can automate compared to traditional automation tools. This allows us to automate more complex logic that might otherwise require human input, especially when dealing with natural language inputs.

### Benefits

As we hinted at earlier, some of the core goals of implementing AI in internal approvals include increasing efficiency, accuracy, and reliability within workflows.

This works in a few concrete ways, with the key benefits including:

- **Speed and efficiency** - Automating routine approval steps, reducing manual review time, and accelerating overall turnaround.
- **Consistency** - Applying approval criteria uniformly, minimizing human bias, and ensuring adherence to policy.
- **Context awareness** - Using past approvals, metadata, and related documents to make informed recommendations.
- **Error reduction** - Flagging incomplete or noncompliant requests before they reach approvers.
- **Scalability** - Handling higher request volumes without increasing administrative workload.
- **Insight generation** - Surfacing approval trends, exceptions, and workflow inefficiencies for process improvement.
- **Natural language interactions** - Enabling end users to interact with approval workflows using natural language.

Notably, this can hugely alleviate pressure on human colleagues by reducing our need for manual approvals, especially in situations that traditional, fully deterministic automation tools would struggle with.

### Challenges

However, it’s also important to be cognizant that AI implementations are often difficult and fraught with challenges. 

This is particularly apparent in the context of implementing AI in internal workflows, especially as we’re typically dealing with mission-critical processes and data. Because of this, we need to be realistic about the potential challenges and roadblocks that we might encounter.

These include:

- **Data quality and access** - AI depends on structured, reliable request data to make accurate decisions.
- **Transparency** - Automated approvals can raise questions about how and why a decision was made.
- **Change management** - Employees and approvers may need time and training to trust AI recommendations.
- **Governance and oversight** - Clear policies are required to define where AI can act autonomously versus when human review is mandatory.
- **Integration complexity** - Connecting AI logic to multiple systems can require careful design and testing.
- **Security** - Approval data must be protected, with strong controls around access, retention, and handling.
- **Data sovereignty** - Organisations must understand where approval data is stored and processed.
- **Model selection** - Choosing the right model affects accuracy, explainability, and long-term maintainability, making it a key part of any AI-driven approval workflow.
- **RBAC (Role-Based Access Control)** - Approval processes require clear permission boundaries, and AI must operate within those boundaries without overstepping user roles or access levels.

The goal is to ensure that decisions made by AI-driven approval systems can be trusted, both in terms of making appropriate decisions and in terms of maintaining security across our wider data and tool stack.

## How to implement AI for internal approvals using Budibase

To put some of what we’ve learned so far into practice, we’re going to build a simple AI-driven workflow using Budibase.

Specifically, we’re going to build an automation flow for approving invoice submissions. We’re going to create logic so that certain requests will be automatically approved, while for others, AI will simply make a recommendation based on defined business rules.

Sign up for a free Budibase account to build along with our demo.

{{< cta >}}

We’re starting with a simple BudibaseDB table to store details of our expense claims.

![Automate Internal Approvals AI](https://res.cloudinary.com/daog6scxm/image/upload/v1763050216/cms/ai-internal-approvals/AI_Approvals_1_frbrcf.webp "Automate Internal Approvals AI")

The `Amount`, `Category`, `Justification`, and `SubmittedAt` attributes will be populated at the point that a request is made.

We’re going to create AI automation logic to populate the `AIRecommendation` field. Depending on the outcome of this, `ManagerDecision` will either be populated by the AI or by a human reviewer.

### Building our request form

To start, we need to create a form where users can submit expense requests. Staying in the Data section of our Workspace, we’ll hit `Generate` and then `Form`.

![Generate Form](https://res.cloudinary.com/daog6scxm/image/upload/v1763050215/cms/ai-internal-approvals/AI_Approvals_2_qamlf3.webp "Generate Form")

We’re then prompted to choose which type of operation we want our form to carry out. We’re choosing the option to create a row.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1763050214/cms/ai-internal-approvals/AI_Approvals_3_rqcimi.webp "Form")

Here’s how our form will look out of the box.

![Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1763050214/cms/ai-internal-approvals/AI_Approvals_4_avdt8j.webp "Request Form")

We’re only going to make a few minor tweaks to this for UX purposes. We’ll start by giving it a more descriptive title, as well as using the right-hand sliders to disable the `SubmittedAt`, `ManagerDecision`, and `AIRecommendation` fields.

`SubmittedAt` will be populated automatically with Budibase’s default values, while the other two fields don’t need initial values.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1763050214/cms/ai-internal-approvals/AI_Approvals_5_yycrva.webp "Fields")

Then, under `Styles`, we’ll set our `Button Position` to `Top`.

![Button](https://res.cloudinary.com/daog6scxm/image/upload/v1763050213/cms/ai-internal-approvals/AI_Approvals_6_zklopf.webp "Button")

Now, our form is ready to start collecting expense reimbursement requests.

### Adding AI approval logic

Next, we can start building some AI approval logic to process the information that end users submit.

Specifically, we want to automatically approve any low-risk expenses that are for items costing less than $50. For any other submissions, the AI will make a recommendation based on business rules, but a human user will still have the final say.

Back in the Data section, we’ll start by hitting `Generate` again, this time choosing the option for an automation that triggers when a row is created.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1763050213/cms/ai-internal-approvals/AI_Approvals_7_aciaj9.webp "Automation")

This creates a new rule in the Automation section of our workspace, with a `Row Created` trigger, pointed at our `Expenses` table.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1763050212/cms/ai-internal-approvals/AI_Approvals_8_qrarrf.webp "Trigger")

Any actions we configure after this will be executed each time a new row is completed, including when a user submits an expense for approval via our form.

The first thing we want to do is pass the relevant values from our new row to our LLM, wrapped in a prompt that contains the analysis and approval logic.

To do this, we’ll hit the `+` icon to add a new action. Under `AI`, we’re choosing `LLM Prompt`.

![LLM Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1763050212/cms/ai-internal-approvals/AI_Approvals_9_digxhe.webp "LLM Prompt")

This accepts a single argument called `Prompt`. We’ll hit the lightning bolt icon to open the bindings drawer, where we can access and use all of the data that this action is exposed to.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1763050211/cms/ai-internal-approvals/AI_Approvals_10_dft72u.webp "Prompt")

The specific prompt we’re going to use will use the `Amount`, `Category`, and `Justification` to decide if the request should be approved automatically, if it requires human review, or if it will likely be rejected.

{{< highlight plaintext "linenos=inline" >}}

You are an assistant for an internal expense-approval workflow. 

Your task is to analyse an expense request using the amount, category, and the employee’s written justification. 

Based on this analysis, return **one state only**, with no explanation or extra text.

Use the following decision logic:

1. **Automatic low-value approval**
   - If the amount is **under $50** and the justification is not obviously inappropriate or unrelated to business needs, return **APPROVE_AUTOMATICALLY**.
2. **Policy alignment**
   - Whether the justification clearly describes a business purpose.
   - Whether the expense is typical and reasonable for its category (e.g., travel, training, equipment, meals).
   - Whether the justification includes relevant context, such as events, meetings, travel reasons, or project references.
3. **Risk assessment**
   - **Low risk**: low amounts, common categories, clearly stated purpose.
   - **Medium risk**: vague or short justifications, moderately high amounts, or categories that often require clarification.
   - **High risk**: high amounts, luxury or sensitive categories, unclear business value, or weak rationale.
4. **Completeness and clarity**
   - Strong justifications explain what was purchased, why it was needed, and how it supports business activity.
   - Weak justifications lack detail, omit key context, or sound personal rather than business-related.

Based on the above criteria, return **exactly one** of the following states:

- **APPROVE_AUTOMATICALLY** – Clear business purpose, low-risk details, justification complete and reasonable, or the amount is under $50.
- **REQUIRES_HUMAN_REVIEW** – Justification is partly clear but missing detail, ambiguous, or the expense has medium-risk characteristics.
- **REJECT_LIKELY** – Justification unclear, high-risk factors, insufficient business rationale, or the request appears inappropriate.

Return the state only, with no explanation.

**Expense details:****
**Amount: {{ trigger.row.Amount }}

Category: {{ trigger.row.Category }}

Justification: {{ trigger.row.Justification }}

{{< /highlight >}}

![Automate Internal Approvals AI](https://res.cloudinary.com/daog6scxm/image/upload/v1763050211/cms/ai-internal-approvals/AI_Approvals_11_itxv3s.webp "Automate Internal Approvals AI")

Next, we need to add a branch to our automation flow, using the `Add Branch` icon.

![Branch](https://res.cloudinary.com/daog6scxm/image/upload/v1763050212/cms/ai-internal-approvals/AI_Approvals_12_om6ppl.webp "Branch")

Each automation branch has a condition. These are evaluated from left to right. The first branch with a condition that evaluates to true will be executed.

Both of our branches will update the original row to populate the `AIRecommendation` and `ManagerDecision` fields. The difference is that the left-hand branch will set `ManagerDecision` to approved, while the right-hand one will set it to `Pending`.

First, though, we need to configure the run conditions.

We’ll set our left-hand branch to only run if `{{ steps.LLM Prompt.response }}` `equals` `APPROVE_AUTOMATICALLY`.

![Conditions](https://res.cloudinary.com/daog6scxm/image/upload/v1763050209/cms/ai-internal-approvals/AI_Approvals_12.1_as4eth.webp "Conditions")

Then, we’ll add a corresponding rule to our other branch, so it only runs if `{{ steps.LLM Prompt.response }}` `not equals` `APPROVE_AUTOMATICALLY`.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1763050209/cms/ai-internal-approvals/AI_Approvals_12.2_crvoaj.webp "Condition")

With our conditions configured, we can start adding actions under our branches.

We’ll start by adding an `Update Row` action under our first branch, pointing it at the `Expenses` table.

![Update Row](https://res.cloudinary.com/daog6scxm/image/upload/v1763050210/cms/ai-internal-approvals/AI_Approvals_13_fzhk8u.webp "Update Row")

We need to specify which row we’d like to update with the `Row ID` argument. We can set this to our original row with the binding `{{ trigger.id }}`.

![Trigger Row](https://res.cloudinary.com/daog6scxm/image/upload/v1763050210/cms/ai-internal-approvals/AI_Approvals_14_jszemn.webp "Trigger Row")

We’ll then set `AIRecommendation` to the output of our `LLM Prompt` step, with `{{ steps.LLM Prompt.response }}`. We’re also setting `ManagerDecision` to `Approved` as a static value.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1763050210/cms/ai-internal-approvals/AI_Approvals_15_nttbrl.webp "Fields")

We’ll repeat this exact same process under our other branch, this time setting `ManagerDecision` to `Pending` as a static value.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1763050210/cms/ai-internal-approvals/AI_Approvals_16_cb5nni.webp "Fields")

Now, we can test our AI approval workflow using one of our existing rows to confirm that it is working correctly. In our example, we can see that the AI has correctly identified that the trigger row requires a human to review it.

![Automate Internal Approvals AI](https://res.cloudinary.com/daog6scxm/image/upload/v1763050209/cms/ai-internal-approvals/AI_Approvals_17_inmc4o.webp "Automate Internal Approvals AI")

When we’re ready, we can publish our Workspace to start using Budibase to handle AI internal approvals.

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

We offer extensive support for all kinds of databases and APIs, autogenerated UIs, AI-powered workflow automations, optional self-hosting, custom RBAC, and much, much more.

Check out our[ features overview](https://budibase.com/product/) to learn more.