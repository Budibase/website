+++

author = "Ronan McQuillan"
date = 2025-05-28
description = "Learn how to build an AI-powered incident form by connecting MySQL to OpenAI with a Budibase automation."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Connect an AI Model to MySQL in 4 Steps"

+++

AI is fast becoming an integral part of all kinds of development projects. At the most basic level, this requires us to know how to connect various elements of our applications to AI tools and models.

As you might expect, interactions between our app’s data layer and LLMs are probably the most important component to this.

The challenge is that this can take a number of different forms. This depends on what kind of data we’re using, our use case, and how widespread or varied the interactions we require are.

Today, we’re examining one of the most common examples of this by checking out how we can connect MySQL to AI models. 

More specifically, we’ll be covering:

- [Why would we connect MySQL to an LLM](#why-would-we-connect-mysql-to-an-llm)
- [Options for connecting AI models and databases](#options-for-connecting-ai-models-and-databases)
- [Building an AI-powered incident report form with MySQL and OpenAI](#building-an-ai-powered-incident-report-form-with-mysql-and-openai)

Let’s jump right in.

## Why would we connect MySQL to an LLM?

For over thirty years, MySQL has been at the center of all kinds of applications, from large-scale enterprise solutions to hobbyist projects.

This ubiquity means that, at some point, there’s a good chance you’re going to need to connect it to an LLM.

A large part of MySQL's popularity comes from its reputation for performance, ease of use, and scalability. It’s also open-source, making it free to use and distribute.

However, in recent years, MySQL has lost a certain amount of ground to other database options, including Postgres and a variety of NoSQL tools. These may be better positioned for many AI use cases, including offering more flexibility and support for unstructured data.

Despite this, MySQL still powers a huge number of production systems, and it remains a popular choice for developers that need a fast, reliable way to implement a SQL database.

Some of the most common scenarios where we might need to connect an LLM to MySQL include introducing AI capabilities to existing workflows, legacy app modernization, data lookup and retrieval, and more.

You might also like our guide to [agentic AI workflows](https://budibase.com/blog/ai-agents/ai-agentic-workflows/).

## Options for connecting AI models and databases

As we said earlier, one area where this gets difficult is that there are several different ways that we can go about connecting databases and models. Which of these is suitable depends on our requirements, use case, and technical skills and resources.

Often, what this comes down to is the scale and complexity of the interactions we require. Naturally, there’s often a tradeoff between the complexity of a solution and the development resources we need to implement it.

So, for some use cases, such as [digital workers](https://budibase.com/blog/ai-agents/digital-workers/) or [enterprise chatbots](https://budibase.com/blog/ai-agents/enterprise-chatbots/), we may need an AI system to be able to autonomously determine which database actions are required in a given context and then execute them.

Generally, this will rely on agentic AI frameworks, such as LangChain. We can think of these as toolkits for building complex AI systems that can act independently in order to achieve a given goal.

Often, in these cases, integrations are handled with a Model Protocol Context (MCP) server. This offers a secure, standardized way to connect models to a range of tools and functions, so systems can determine for themselves which actions are appropriate in specific contexts.

However, just as many real-world solutions rely on more traditional methods to connect SQL databases to AI models.

This means defining logic or events using automation tools, and then passing data to an LLM in response to this via a HTTP request, populating values in a predefined prompt. This can be hard-coded, or it may rely on visual automation tools.

Essentially, this resembles a traditional workflow automation solution, but leverages an LLM for some element of processing, transformation, or decision-making.

Example use cases include things like translation, categorization, performing calculations, data enrichment, and more, within existing workflows.

## Building an AI-powered incident report form with MySQL and OpenAI

To better understand how we can connect an LLM to MySQL, we’re going to build out an example of how we can achieve this in Budibase. 

More specifically, we’re going to use Budibase’s OpenAI automation action alongside a MySQL database to create an AI-powered form for reporting IT incidents.

Each time a new incident report is submitted, our AI system will use the provided data to triage it, determine an impact level according to defined business rules, and update the database row with this enriched information.

We’ll do this in only four steps:

1. [Connecting our MySQL database](#1-connecting-our-mysql-database)
2. [Configuring our OpenAI integration](#2-configuring-our-openai-integration)
3. [Building an AI-powered automation rule](#3-building-an-ai-powered-automation-rule)
4. [Creating an incident report form UI](#4-creating-an-incident-report-form-ui)

If you haven’t already, sign up for a free Budibase account to start building as many applications as you need.

{{< cta >}}

Note that today, we’re using a self-hosted instance of Budibase, but you can also take advantage of a range of AI features alongside our internal database within our cloud platform.

We’ll provide the queries you need to create a look-alike database a little later, so that you can build along with this tutorial.

The first thing we need to do is create a new application project. We have the options of using a pre-built template or importing an existing app export, but today we’re starting from scratch.

When we choose this option, we’ll be prompted to give our new app a name. This will also be used to generate a URL extension. For demo purposes, we’re simply going with `Connect LLM to MySQL`.

![Connect AI Model to MySQL](https://res.cloudinary.com/daog6scxm/image/upload/v1748446653/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_1_bfptey.webp "Connect AI Model to MySQL")

When we create a new Budibase app, it will load with sample data and UIs. We won’t use these today, so we can simply delete them.

### 1. Connecting our MySQL database

Once we’ve done this, we’ll be prompted to choose a data source for our app. Budibase offers dedicated connectors for a range of RDBMSs, NoSQL tools, spreadsheets, and APIs, acting as a proxy to query data, without storing it.

![Data Sources](https://res.cloudinary.com/daog6scxm/image/upload/v1748446652/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_2_od6nzp.webp "Data Sources")

Today, we’re choosing MySQL, although the process for adding an alternative database is largely similar. When we choose this option, we’ll be presented with the following modal, where we can add our configuration details.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1748446650/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_3_aroo5z.webp "Config")

We’re then asked which of our database’s tables we’d like to `Fetch`, making them queryable within Budibase. We’re selecting our database’s one and only table, `incident_reports`.

![Fetch Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1748446649/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_4_bgzhfg.webp "Fetch Tables")

Here’s how this will look in Budibase’s Data section.

![Database Editor](https://res.cloudinary.com/daog6scxm/image/upload/v1748446649/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_5_l6geaf.webp "Database editor")

Already, we can use the spreadsheet-like interface to edit values or make key changes such as enforcing access control rules.

Today, we’re going to make one small change in the Data section that will make our life a little easier when it comes time to autogenerate a form UI.

Specifically, our `description` field currently has the `Text` type. We’re going to update this to `Long Form Text`, changing how Budibase handles it, in order to provide more space to record incident details in our end-user app.

![Long Form Text](https://res.cloudinary.com/daog6scxm/image/upload/v1748446649/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_6_mxsf1e.webp "Long Form Text")

Of the other columns, `id` and `created_at` will be automatically generated by the database when a row is added, while `description` and `users_affected` are the fields we’ll populate with user-submitted data.

So, that’s our data model ready to go.

### 2. Configuring our OpenAI integration

Next, we need to do a little bit of configuration to access Budibase’s OpenAI integration. Budibase offers connectivity for LLMs, including OpenAI and Azure, as well as custom AI configs for enterprise customers.

To set this up, we need to exit our app project and head to the `Settings` tab within the Budibase portal.

Here, we’re presented with the AI sub-menu, where we can enter configuration details for different models.

![AI Config](https://res.cloudinary.com/daog6scxm/image/upload/v1748446649/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_7_vnz9wj.webp "AI Config")

To enable a connection to OpenAI, we can hit edit. We’re then shown a dialog where we can enter our API key and select a model. For demo purposes, we’ll use GPT-3.5 Turbo.

![API Key](https://res.cloudinary.com/daog6scxm/image/upload/v1748446648/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_8_tpfp18.webp "API Key")

And that’s all we need to do.

### 3. Building an AI-powered automation rule

Now, we’re ready to start building the automation logic that will connect our LLM to our MySQL database.

Here’s a quick overview of how this will work:

- The automation is triggered when a new row is added to the `incident_reports` table.
- The `description` and `users_affected` values will dynamically be added to a pre-written prompt containing instructions for the LLM on how to determine a value for the `impact_level` column.
- We’ll update the original trigger row, using the returned value to populate the `impact_level` column.

The first thing we need to do is head to Budibase’s Automation section. Here, we’ll see a CTA to build our first automation flow.

![Automations](https://res.cloudinary.com/daog6scxm/image/upload/v1748446646/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_9_sfhtox.webp "Automations")

When we click on this, we’re prompted to give our new rule a name and choose a trigger. We’ll call our rule `Impact Level` and select the `Row Created` trigger.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1748446646/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_10_ufqvwz.webp "Trigger")

Here’s what this will look like.

![Conenct AI Model to MySQL](https://res.cloudinary.com/daog6scxm/image/upload/v1748446645/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_11_vfmzkj.webp "Connect AI Model to MySQL")

We’ll click on our trigger to access its configuration options. Here, all we need to do is set the `Table` to our `incident_reports` table. 

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1748446645/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_12_wk7zbj.webp "Trigger")

There’s also an option to add a filter, which would allow us to specify additional conditions for when our automation should fire, but today, we want it to execute any time a row is added, regardless of its contents.

Now, we can start defining which actions should be taken in response to our trigger.

First, we’ll hit the `+` icon to access a list of available automation actions. 

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1748446645/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_13_k4ybjz.webp "Actions")

At the bottom, we’ll select OpenAI.

![OpenAI](https://res.cloudinary.com/daog6scxm/image/upload/v1748446644/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_14_gdh9oc.webp "OpenAI")

Again, we can access the settings for this in a side panel to the right of the screen.

![LLM Action](https://res.cloudinary.com/daog6scxm/image/upload/v1748446643/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_15_xxalnd.webp "LLM Action")

Here, we can write our prompt and select a model. We’re sticking with GPT-3.5 Turbo.

We’ll hit the lightning bolt icon in the `Prompt` field to open the bindings drawer.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1748446642/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_16_iqudkj.webp "Prompt")

Our prompt will do three separate things.

1. Determine the logic for how a value for the `impact_level` column should be derived.
2. Provide values for the `description` and `users_affected` columns.
3. Specify the format we need our response to be returned in.

For demo purposes, we’re using the following basic logic to assess the submission, although you could modify this however you need to match your own workflow.

{{< highlight plaintext "linenos=inline" >}}

You are an IT incident triage assistant.

Classify the impact level of the following incident as one of: Low, Medium, or High.

\- Low: Minor issue affecting few users or no major disruption.

\- Medium: Noticeable issue affecting some users or business functions.

\- High: Major disruption affecting many users or critical systems.

{{< /highlight >}}

![Logic](https://res.cloudinary.com/daog6scxm/image/upload/v1748446642/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_17_ndwoxm.webp "Logic")

We can access the values we need from our trigger row under `Trigger Outputs`. We’ll add the following to our prompt to signpost these for the model.

{{< highlight plaintext "linenos=inline" >}}

Incident description:

{{ trigger.row.description }}

Number of users affected: {{ trigger.row.users_affected }}

{{< /highlight >}}

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1748446642/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_18_selxmf.webp "Bindings")

Lastly, we’ll provide an example of the JSON object we’d like returned.

{{< highlight plaintext "linenos=inline" >}}

Respond ONLY with a JSON object in the following format:

{

 "impact_level": "<Low|Medium|High>"

}

{{< /highlight >}}

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1748446641/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_19_mnuibr.webp "Prompt")

To recap, here’s the final prompt.

{{< highlight plaintext "linenos=inline" >}}

You are an IT incident triage assistant.

Classify the impact level of the following incident as one of: Low, Medium, or High.

\- Low: Minor issue affecting few users or no major disruption.

\- Medium: Noticeable issue affecting some users or business functions.

\- High: Major disruption affecting many users or critical systems.

Incident description:

{{ trigger.row.description }}

Number of users affected: {{ trigger.row.users_affected }}

Respond ONLY with a JSON object in the following format:

{

 "impact_level": "<Low|Medium|High>"

}

{{< /highlight >}}

We’ll finish by hitting `Save`.

The last thing we need to do is take our LLM’s response, and use it to populate the `impace_level` attribute in our trigger row.

We’ll achieve this by adding a new action step, this time selecting `Update Row`.

![Update Row](https://res.cloudinary.com/daog6scxm/image/upload/v1748446640/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_21_j9w7ss.webp "Update Row")

As before, we’ll select `incident_reports` as our table.

![Connect AI Model to MySQL](https://res.cloudinary.com/daog6scxm/image/upload/v1748446639/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_22_ik75dc.webp "Connect AI Model to MySQL")

This action step also has a setting called `Row ID`. This enables us to specify the particular row in our database that will be updated.

As we know, we want to target the original row that triggered our automation run.

To do this, we’ll bind our Row ID to `{{ trigger.id }}`.

![Row ID](https://res.cloudinary.com/daog6scxm/image/upload/v1748446639/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_23_u6bbim.webp "Row ID")

Then, we’ll hit `edit fields` and select `impact_level.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1748446639/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_24_wpmhpk.webp "Fields")

We want to bind this to the value that our LLM determined. However, there’s an additional challenge here, in the sense that the value we need is wrapped in a JSON object.

So, we’ll start by opening the bindings drawer, but this time we’ll select the JavaScript editor.

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1748446639/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_25_kmprzr.webp "JavaScript")

We’re going to declare a variable called response, and use the `JSON.parse()` method to set its value to the output of our OpenAI step. We’ll then return the `impact_level` value within this.

We’ll do this with the following code.

{{< highlight javascript "linenos=inline" >}}

var response = JSON.parse($("steps.OpenAI.response"))

return response["impact_level"];

{{< /highlight >}}

![JavaScript](https://res.cloudinary.com/daog6scxm/image/upload/v1748446638/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_26_bdwkns.webp "JavaScript")

And we’ll hit save.

To finish, we can hit `Run Test` to verify everything works as we expect it to.

When we do this, we can choose an existing row to use as our test data.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1748446637/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_27_yjyd17.webp "Test")

In our test details, we can see that the automation has successfully populated an `impact_level` for our row.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1748446637/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_28_gejmdn.webp "Test")

### 4. Creating an incident report form UI

With our automation logic completed, we can move on to building a UI for our end users to report incidents. With Budibase, we can autogenerate customizable UIs based on connected data sources.

We’ll start by heading to the Design section. Here, we’re offered a choice of several layouts.

![Design](https://res.cloudinary.com/daog6scxm/image/upload/v1748446637/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_29_bsjxg3.webp "Design")

We can then choose which table we want to base this on.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_30_fcnat6.webp "Table")

We also need to choose which database operation our form will perform. We want a form that will create a new row.

![Connect MySQL to AI Model](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_31_rtvyhu.webp "Connect MySQL to AI Model")

Here’s how this will look.

![Design](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_32_ynz9ev.webp "Design")

The first change we’ll make is to remove the `impact_level` field, as we don’t need users to provide this manually.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_33_pjy8ob.webp "Form")

Under `Styles`, we’ll set our `Button Position` to `Top`.

![Button Position](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_34_iiuov1.webp "Button Position")

We’ll also make a few adjustments to our display text to make things a bit more user-friendly. Firstly, we’ll update our `Title` and `Button Text`.

![Display Text](https://res.cloudinary.com/daog6scxm/image/upload/v1748446636/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_35_yhl6tb.webp "Display Text")

We’re also going to update the `Label` and `Placeholder` settings for each of our fields to better reflect the information we need users to provide.

![Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1748446635/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_36_dqvs5a.webp "Fields")

When we’re satisfied, we can hit `Publish` to push our app live.

![Publish](https://res.cloudinary.com/daog6scxm/image/upload/v1748446635/cms/ai-agents/connect-llm-to-mysql/Connect_LLM_to_MySQL_37_ppzi1n.webp "Publish")

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

We offer leading connectivity for a huge range of LLMs, RDBMSs, NoSQL tools, APIs, and more, alongside autogenerated UIs, powerful visual automations, free SSO, option self-hosting, and custom RBAC.

There’s never been a better way to ship secure, performant workflow tools at pace. Take a look at our [features overview](https://budibase.com/product/) to learn more.