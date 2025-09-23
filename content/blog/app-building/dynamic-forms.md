+++

author = "Ronan McQuillan"
date = 2025-09-23
description = "Learn how to build dynamic forms on top of any data source with Budibase."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Build Dynamic Forms on Top of Any Data | 4 Methods"

+++

Dynamic forms are a powerful, flexible solution for adding additional logic to our data collection workflows. The idea is to enable us to present forms with different schemas, depending on our needs in a given situation.

As we’ll see later, this can be based on a few different types of logic.

However, this is something that can be quite difficult to achieve, even with many of the top dedicated form builders.

In fact, in many platforms, this is limited to dynamic routing in multi-step forms, allowing us to send users down a predefined path based on certain conditions. For instance, in a survey.

Alternatively, many teams rely on hard-coded solutions for more advanced dynamic form use cases. But, this naturally comes along with its own down sides in terms of costs, time to value, and maintainability.

Today, we’re exploring everything you need to know about building dynamic forms in Budibase, utilizing a variety of methods. Even better, we can do this with our built-in database, or one of Budibase’s range of supported external DBs.

Specifically, we’ll be covering:

- [What are dynamic forms?](#what-are-dynamic-forms)
- [Why do we need dynamic forms?](#why-do-we-need-dynamic-forms)
- [Top use cases for dynamic forms](#top-use-cases-for-dynamic-forms)
- [4 methods for building dynamic forms](#4-methods-for-building-dynamic-forms)
  - [Updating fields based on previous inputs](#1-updating-fields-based-on-previous-inputs)
  - [Updating fields based on context and user attributes](#2-updating-fields-based-on-context-and-user-attributes)
  - [Dynamically serving static forms](#3-dynamically-serving-static-forms)
  - [AI-generated forms](#4-ai-generated-forms)

Let’s start with the basics.

## What are dynamic forms?

A dynamic form is a data collection UI where we can implement logic to determine which specific data fields to display. 

The idea is to reflect the fact that, within data collection workflows, we might need to gather specific information in some situations, but not in others. For example, in an asset request form, we’ll likely need different information for different types of devices.

Naturally, there’s a lot of scope for variation within this.

So, we might entirely change our form’s schema, or we might simply hide or display individual fields. Alternatively, we could keep our form schema static, but alter aspects of its UX and design, including layouts or field labels.

As you might expect, the challenge here is defining the logic that will control how our form is displayed. 

This is handled differently in individual form builder platforms. So, some tools are relatively opinionated, limiting us to certain kinds of logic. Others offer greater flexibility for configuring form logic.

We’ll see a few examples of what’s possible with Budibase a little later.

First though…

## Why do we need dynamic forms?

As we hinted at a second ago, the core pain point that dynamic forms solve is enabling us to vary the specific information we collect within a workflow.

This is important for a few key reasons.

One way to think about this is to consider the alternative options for handling variations in the information we need to collect within a specific workflow. Without dynamic forms, we essentially have two options.

Firstly, we could include all of the potential fields in a static form, utilizing design elements such as field labels and other copy to indicate to users which information is required and when. 

Second, where there are variations in the data we need to collect, we could treat these as distinct workflows, with their own corresponding forms to submit. For example, offering distinct forms for renting individual assets within our IT service request portal.

Each of these options introduces important challenges. For one thing, neither will provide a particularly good UX, as we’re requiring too much of our users by expecting them to understand which forms or fields should be completed in a given situation.

Second, developing and managing large numbers of forms with only slight differences in their schemas often isn’t the most cost-effective option, although it can be a viable approach if we have a relatively small number of forms with more substantive differences.

In other words, dynamic forms are typically the most efficient, user-friendly way to reflect variations in our information needs within workflows.

## Top use cases for dynamic forms

So, now we have an understanding of what dynamic forms are and what they achieve. Before we start looking at the specifics of how we can build our own solutions, it’s also worth thinking about some of the most common use cases here.

Of course, the benefits we saw a second ago could apply in just about any type of workflow. Therefore, rather than outlining every possible use case, it’s more useful to consider the types of forms that most commonly require dynamic schemas.

Perhaps the most obvious example is within surveys or other feedback-gathering workflows. Here, dynamic schemas allow us to present follow-on questions that reflect our respondents’ previous answers.

Dynamic forms are also hugely beneficial in a range of internal request and approval workflows.

These are workflows that involve a user submitting a request to access a resource or take a specific action. For example, renting a device, submitting expenses, requesting a change, booking time off, or accessing a data set.

Within any of these, dynamic form schemas can be applied based on the individual resource or action being requested, or on its category. For example, we might need additional information to approve certain categories of change requests or for renting individual IT assets.

Lastly, dynamic forms are an incredibly powerful solution for situations where we need to add personalization to data collection flows. For example, altering the fields we display based on a colleague’s role as part of an [employee onboarding process](https://budibase.com/blog/employee-onboarding-process/).

## 4 methods for building dynamic forms

Knowing the most common situations where dynamic forms can add value, we can start to check out some of the specific strategies that we can use to build solutions of our own.

Specifically, we’re outlining four distinct options for creating dynamic forms. These are:

- [Updating fields based on previous inputs](#1-updating-fields-based-on-previous-inputs)
- [Updating fields based on context and user attributes](#2-updating-fields-based-on-context-and-user-attributes)
- [Dynamically sending static forms](#3-dynamically-sending-static-forms)
- [AI-generated forms](#4-ai-generated-forms)

Importantly, though, these aren’t necessarily mutually exclusive. Rather, they’re the basic building blocks of how we can apply dynamic schemas for our forms, and as such can easily be utilized in tandem with one another to create advanced solutions.

### 1. Updating fields based on previous inputs

Perhaps the most basic option for utilizing dynamic schemas within forms is conditionally hiding certain fields based on the end-user’s previous responses.

This is particularly common in surveys, feedback collection, and other multi-step form use cases.

So, for our example, we’re using a simple employee feedback form.

![Dynamic Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1758621026/cms/dynamic-forms/Dynamic_Forms_1_n9wifb.webp "Dynamic Forms")



This features three steps. The first, which you can see above, prompts the users to submit their name and job role.

On the second step, they’re asked to rate their level of job satisfaction with a Likert scale.

![Survey](https://res.cloudinary.com/daog6scxm/image/upload/v1758621025/cms/dynamic-forms/Dynamic_Forms_2_yhbicb.webp "Survey")



Our form’s final step contains two long-form text fields, where users can provide either positive or negative feedback.

![Feedback](https://res.cloudinary.com/daog6scxm/image/upload/v1758621024/cms/dynamic-forms/Dynamic_Forms_3_y5x5i6.webp "Feedback")



The dynamic element of our form will be utilizing the value our user chooses for their job satisfaction level to determine which of these long-form text fields to display.

Specifically, if they’re dissatisfied with their job, we’ll display the question asking them to submit improvement opportunities, while satisfied users will be shown the question on their favorite aspects of their role.

Colleagues who select `Neutral` will be shown both fields.

In Budibase, app components have a global context. This means that they can access the outputs of any other elements on the screen as bindable values, including within their various settings.

We’re going to utilize this alongside Budibase’s built-in conditionality rules, which allow us to set expressions to hide and display components, or update any of their settings.

We can access this under the `Conditions` tab for each of our fields.

![Conditional UIs](https://res.cloudinary.com/daog6scxm/image/upload/v1758621024/cms/dynamic-forms/Dynamic_Forms_4_swlc4r.webp "Conditional UIs")



We’ll start by adding a `Hide Component` condition to our negative feedback field.

![Hide Field](https://res.cloudinary.com/daog6scxm/image/upload/v1758621023/cms/dynamic-forms/Dynamic_Forms_5_osmvfl.webp "Hide Field")



We’ll then use the lightning bolt icon alongside our `Value` to open the bindings menu. Here, we can see all of the sets of data that our component is exposed to. We’re choosing `Job Satisfaction Level`.

![Job Satisfaction Level](https://res.cloudinary.com/daog6scxm/image/upload/v1758621022/cms/dynamic-forms/Dynamic_Forms_6_rlhhev.webp "Job Satisfaction Level")



Within this, we’ll select `Value`.

![Value](https://res.cloudinary.com/daog6scxm/image/upload/v1758621021/cms/dynamic-forms/Dynamic_Forms_7_uvhxrm.webp "Value")



We’ll then statically set our comparison value to `Very Satisfied`.

![Very Satisfied](https://res.cloudinary.com/daog6scxm/image/upload/v1758621021/cms/dynamic-forms/Dynamic_Forms_8_hmbgnr.webp "Very Satisfied")



Next, we’ll duplicate this rule and change our comparison value to `Somewhat Satisfied` for the new version.

![Somewhat Satisfied](https://res.cloudinary.com/daog6scxm/image/upload/v1758621020/cms/dynamic-forms/Dynamic_Forms_9_jjzl6o.webp "Somewhat Satisfied")



Now, in our app preview, if we select one of these values within our form, only the positive feedback field will be displayed.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1758621020/cms/dynamic-forms/Dynamic_Forms_10_x8inxg.webp "Preview")



We’ll then repeat this entire process to make corresponding conditionality rules, hiding the positive feedback field if the `Job Satisfaction Level` is either `Very Dissatisfied` or `Somewhat Dissatisfied`.

![Dynamic Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1758621019/cms/dynamic-forms/Dynamic_Forms_11_uj0eby.webp "Dynamic Forms")



And we can test this out by selecting one of these values in our app preview.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1758621018/cms/dynamic-forms/Dynamic_Forms_12_rifuun.webp "Preview")



### 2. Updating fields based on context and user attributes

Our next method for building dynamic forms will build on what we just saw to create a slightly more sophisticated solution. Specifically, a large number of use cases rely on variables other than user submissions for the logic that determines form schemas.

This can include a range of contextual factors, including system variables, previous actions in our application, user attributes, API responses, and many more.

In terms of how this works in Budibase, this is similar to the previous example we saw of dynamic forms. That is, we’ll be building conditionality rules based on dynamic bindings.

We’ll check out a couple of the types of data that we might rely on here.

Firstly, user attributes are some of the most common popular ways to define logic for dynamic forms. For example, to carry on with our survey example, we might wish to display different form fields depending on the employee’s department or seniority level.

To facilitate this, we’ve created a `Job Titles` table in Budibase DB. This contains two columns - a `Text` attribute called `Title` and a `Multi User` field called `Users`. This enables us to associate a job title with rows in Budibase’s built-in users table.

We’ve populated this with a range of different `Job Titles` and assigned ourselves to the `Developer` row.

![Job Titles](https://res.cloudinary.com/daog6scxm/image/upload/v1758621017/cms/dynamic-forms/Dynamic_Forms_13_odtsl1.webp "Job Titles")



We’ve then created a filtered View, so that `App Users` are only able to access the row that their user account is associated with.

![App User](https://res.cloudinary.com/daog6scxm/image/upload/v1758621017/cms/dynamic-forms/Dynamic_Forms_14_guia0h.webp "App Users")



Back in our employee satisfaction survey, we’ve added a new question to our final step that only applies to developers.

This asks which new technologies they’d most like to learn in the coming year.

![New Tech](https://res.cloudinary.com/daog6scxm/image/upload/v1758621017/cms/dynamic-forms/Dynamic_Forms_15_i89tfo.webp "New Tech")



Our next task is to configure the logic for when this specific field should be displayed.

However, the data we need to achieve this isn’t currently loaded on our screen. So, we’ll need to start by adding a Data Provider component beneath our existing form UI.

This accepts an argument called `Data` where we can select a data source we’d like to load. We’re choosing our `Current User View` of the `Job Titles` table.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1758621017/cms/dynamic-forms/Dynamic_Forms_16_yvhxaa.webp "Data")



Now, all of the other UI elements on our screen are exposed to the `Job Titles` row that’s associated with the current user.

So, we’ll open the conditionality editor for our `New Tech` text field and create a `Show Component` rule.

![Show Component](https://res.cloudinary.com/daog6scxm/image/upload/v1758621016/cms/dynamic-forms/Dynamic_Forms_17_bxmifl.webp "Show Component")



In the binding for our `Reference Value`, we can see the output of our Data Provider.

![Data Provider](https://res.cloudinary.com/daog6scxm/image/upload/v1758621015/cms/dynamic-forms/Dynamic_Forms_18_cush0p.webp "Data Provider")



The specific binding we need to use is `{{ [Job Titles Data Provider].Rows.0.Title }}`.

![Binding](https://res.cloudinary.com/daog6scxm/image/upload/v1758621015/cms/dynamic-forms/Dynamic_Forms_19_bfkc4t.webp "Binding")



We’ll then statically set our comparison value to `Developer`.

![Developer](https://res.cloudinary.com/daog6scxm/image/upload/v1758621014/cms/dynamic-forms/Dynamic_Forms_20_xrgypi.webp "Developer")



In our app preview, we’ll see this field, but users with other Job Titles will not.

![Dynamic Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1758621014/cms/dynamic-forms/Dynamic_Forms_21_vdvqdl.webp "Dynamic Forms")



However, we might also want to prioritize form completions over certain fields. For instance, we might want to offer a more streamlined survey for mobile users.

Budibase also offers bindings for the current user’s device. So, we’ll add a `Hide Component` condition to our `New Tech` field, this time selecting `{{ Device.Mobile }}` `Equals` `True`.

![Condition](https://res.cloudinary.com/daog6scxm/image/upload/v1758621013/cms/dynamic-forms/Dynamic_Forms_22_lwjgca.webp "Condition")



Now, when we preview our app on mobile, the new field is hidden even though we have the Developer `Job Title`.

![Mobile Form](https://res.cloudinary.com/daog6scxm/image/upload/v1758621013/cms/dynamic-forms/Dynamic_Forms_23_tcsx5s.webp "Mobile Form")



### 3. Dynamically serving static forms

As we said earlier, another approach option for providing a dynamic form UX is to configure multiple static forms and configure business logic to determine which of these to display in a given situation.

A good example of a use case for this that we hinted at earlier is when we have a request workflow, where submissions for different kinds of resources have distinct data schemas. 

Below, we have a simple IT asset request management tool that handles both hardware and software assets.

![Asset Request Tool](https://res.cloudinary.com/daog6scxm/image/upload/v1758621013/cms/dynamic-forms/Dynamic_Forms_24_gnj010.webp "Asset Request Tool")



When a user clicks a row, a modal will appear, where they can submit a request for the relevant asset. 

At present, this contains two forms, to create new rows on our `Hardware Requests` and `Software Requests` tables, respectively.

![Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1758621013/cms/dynamic-forms/Dynamic_Forms_25_gichvg.webp "Forms")



We’re going to configure logic to determine which of these two forms to display, based on the type of asset the end user has selected.

To achieve this, we’ll first need to use Budibase’s `State` functionality to save a variable that denotes whether the clicked row is a hardware or a software asset.

We can do this within our Table’s `On Row Click` actions menu.

![On Click Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1758621012/cms/dynamic-forms/Dynamic_Forms_26_hfxibd.webp "On Click Actions")



Here, we’ve got two actions already configured. The first sets a state variable for the ID of the relevant asset. This is used to populate the `Asset` field on each of our forms. The second opens our modal.

We’re going to add a second `Update State` action, between our two existing actions. This accepts a `Key` and a `Value`.

![State](https://res.cloudinary.com/daog6scxm/image/upload/v1758621012/cms/dynamic-forms/Dynamic_Forms_27_ybxw0o.webp "State")



We’ll set our `Key` to `clickedRowType` and our `Value` to `{{ Clicked row.Asset Type }}`.

![Value](https://res.cloudinary.com/daog6scxm/image/upload/v1758621012/cms/dynamic-forms/Dynamic_Forms_28_qrec70.webp "Value")



Now, we can use Budibase’s conditionality rules to determine which form to display, using our new state variable.

However, this time, we’ve used Form Blocks to output working forms based on each of our data tables rather than building our forms from scratch. This is because we’re going to hide or display the entire form, rather than individual fields.

We’ll start with our `Hardware Request` Form Block. Here, we’re creating a rule so that this is only shown if `{{ State.clickedRowType }}` equals `Hardware`.

![Rule](https://res.cloudinary.com/daog6scxm/image/upload/v1758621012/cms/dynamic-forms/Dynamic_Forms_29_todrab.webp "Rule")



We’ll then add a corresponding rule to show our other form when {{ State.clickRowType }} equals `Software`.

We can test this out by clicking on a row in our app preview and confirming that the appropriate form schema is displayed.

![Dynamic Forms](https://res.cloudinary.com/daog6scxm/image/upload/v1758621012/cms/dynamic-forms/Dynamic_Forms_30_rtntzq.webp "Dynamic Forms")



### 4. AI-generated forms

Lastly, more and more teams are leveraging AI-powered tools to automatically output forms with appropriate schemas for business workflows.

This can be helpful for some of the core dynamic forms use cases we outlined earlier, at a couple of distinct levels. Firstly, it’s increasingly common to use natural language inputs to generate forms, rather than building these manually.

More importantly, however, this also enables us to dynamically generate and utilize forms as part of agentic workflows.

The key here is that, during executions, AI agents will often need inputs from human users. For instance, to ask for additional information or seek approval on certain actions. This is called a human-in-the-loop workflow.

As such, a critical capability is enabling your agents to output working forms dynamically, with appropriate schemas for the task at hand.

At Budibase, we’re on a mission to empower IT teams to build custom solutions for interacting with all kinds of AI tools.

Sign up today to start building as many applications as you need for free, and be the first to hear about our planned new features for building dynamic forms to interact with AI workflows.

{{< form-builder-cta >}}

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

With leading external data support, autogenerated forms and CRUD UIs, flexible AI-powered automations, custom RBAC, free SSO, optional self-hosting, and more, there’s never been a better way to build professional, secure internal tools.

Take a look at our [features overview](https://budibase.com/product/) to learn more.