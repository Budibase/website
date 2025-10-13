+++

author = "Ronan McQuillan"
date = 2025-07-24
description = "Take a look at our in-depth guide to building LLM-powered applications in Budibase."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Building LLM-Powered Applications"

+++

AI is forming a key part of more and more development projects. While this obviously offers massive benefits, it also introduces some important challenges, including securing the required skills and resources to create internal solutions.

Today, we’re diving deep into how to build LLM-powered applications, including practical examples of how Budibase empowers you to utilize AI within our low-code platform.

Specifically, we’ll be covering:

- [What is an LLM-powered application?](#what-is-an-llm-powered-application)
- [Key use cases and examples](#key-use-cases-and-examples)
- [Benefits and challenges](#benefits-and-challenges)
- [AI capabilities in Budibase](#ai-capabilities-in-budibase)
  - [AI across the builder](#ai-across-the-builder)
  - [AI columns](#ai-columns)
  - [AI in Budibase automation](#ai-in-budibase-automations)

Let’s start with the basics.

## What is an LLM-powered application?

An LLM-powered application could be any software tool that incorporates AI. This could be for a single function or in a more wholesale fashion.

So, for instance, we could utilize AI to implement specific functionality within an existing application, or some use cases may be more deeply AI-focused, such as chatbots.

In any case, the goal is to leverage the capabilities of AI within day-to-day processes and workflows.

Generally speaking, applications rely on calls out to external models, whether these are provided as a cloud service or accessed locally. 

As such, developers don’t typically need to create entirely new AI capabilities from scratch. Rather, the more important skill is often knowing how to work with existing AI services, including how they interact with various parts of our application.

## Types of AI applications

As you might imagine, AI-powered applications can vary widely, both in terms of the specific functions they’re designed to carry out, and the architecture and technology they rely on to achieve this.

At the same time, it’s helpful to examine a few key categories of tools that we’re most likely to encounter.

As we said earlier, many tools leverage AI for individual, discrete functions within an existing workflow. For example, any application that relies on an LLM-based function instead of scripted logic.

We can essentially think of this as using AI to perform defined functions within otherwise deterministic workflows.

Of course, a huge proportion of AI applications also surround natural language processing. 

Even within this, we can see a large amount of variety in terms of the complexity of solutions. So, at one end of the spectrum, we could have tools that perform relatively discrete natural language tasks, like extracting variables for inputs or translating text.

However, this also includes more sophisticated NLP-based applications, including chatbots, code generation tools, or virtual assistants.

Nowadays, more and more attention is being paid to the idea of AI agents. These are LLM-powered systems that are capable of autonomous reasoning and actions, making them suited to non-deterministic workflows.

As well as this, many LLM-powered applications revolve around monitoring and anaylzing data, often independently of human interactions.

For instance, real-time systems that are able to detect anomalies or perform predictive analytics.

Take a look at our guide to [AI agentic workflows](https://budibase.com/blog/ai-agents/ai-agentic-workflows/) to learn more.

## Key use cases and examples

With a clear understanding of the high-level ways that LLM-powered applications might function, we can drill deeper into some of the most common use cases, especially in the context of internal tools and workflows.

A crucial cluster of use cases here surrounds internal services, such as HR and ITSM. For example, AI-powered self-service portals, service desks, enterprise chatbots, or agentic systems can be used to replicate human decisions and actions within these workflows.

This can work in a few different ways. As above, we might implement specific AI functions within deterministic workflows, or we could implement agents that fully replicate certain roles within our service portfolio, like front-line support.

 

Of course, we’ll also often see similar types of applications within customer-facing workflows, including for service and after-sales.

Beyond this, AI applications can be utilized in a wide range of deterministic and non-deterministic administrative and back-office processes, with key use cases including:

- Data extractions,
- Document processing,
- Translation,
- Categorizations,
- Response generation,
- Automating approvals,
- Intelligent routing,
- Triaging issues and requests,
- Monitoring and predictive analytics,
- Dynamic workflow automations.

For a more in-depth look at how some of these might look in practice, take a look at our guide to [AI for ITSM](https://budibase.com/blog/ai-agents/ai-for-itsm/).

## Benefits and challenges

Knowing what LLM-powered applications can help us achieve in terms of specific functions and use cases, it’s also important to consider the business-level implications, as well as some of the associated costs and limitations.

In other words, what are the pros and cons of adopting AI within workflow tools, especially compared to alternative approaches, such as strictly deterministic, scripted logic or even human-led workflows?

Some of the key benefits of LLM-powered applications include:

- **Expanding automation use cases** - enabling us to handle tasks and functions that would be difficult or even impossible with traditional automation tools.
- **Reducing the need to hard-code logic** - implementing logic with natural language prompts, rather than requiring extensive coding skills to implement it using scripting.
- **Efficiency gains** - enabling us to manage workflows more cost-effectively, including reducing the need for human interactions.
- **Enhanced user experiences** - especially providing more natural interactions for end users.
- **Improved decision-making** - providing insights and tools that can assist us with decision-making.
- **Expediting resolutions** - enabling faster resolutions to common queries than strictly human-led workflows.
- **Scalability and maintainability** - workflows can be easily modified by altering prompts, rather than having to manually alter code or scripts.
- **Continuous improvement** - some AI-powered applications can remember previous executions, using memory to inform future actions, thus providing continuous improvement.
- **Handling natural language, unstructured, and qualitative data** - for instance, enabling end users to describe issues in their own words, rather than submitting strictly formatted data.

At the same time, it’s important to be realistic that AI functions aren’t the appropriate option in all cases. Indeed, there are a number of challenges and limitations we’ll need to be aware of that might make scripted logic or more human-centric workflows more suitable in certain cases.

In particular, this includes:

- **Resource intensity** - AI-powered tools may require comparatively high computational resources.
- **Ongoing costs** - if we’re reliant on external services to provide AI capabilities, the costs of this will need to be factored in.
- **Visibility, observability, and auditing** - without the right measures in place, it can be difficult to understand what LLM-powered systems are doing and why.
- **Reliability** - due to the nature of AI-powered logic, it’s possible that the same results won’t be arrived at for similar inputs across executions.
- **Security considerations** - including how we expose AI models to data, tools, or other resources.
- **Technical requirements** - LLM-powered systems present unique technical challenges, especially around integrations and access control.
- **Skills barriers** - we may require specialized technical skills and knowledge to implement systems.
- **Resistance to change** - we might face resistance to change from a range of stakeholders, including on-the-ground colleagues, end users, and top-level decision makers.
- **Tool selection and return on investment** - with AI being a fast-developing technology, many businesses are struggling to select the right platforms and ultimately achieve ROI.

## AI capabilities in Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action. 

Alongside extensive support for all kinds of data, autogenerated UIs, powerful visual automations, custom RBAC, and more, Budibase offers a whole suite of AI-driven capabilities, making it the perfect solution for outputting modern, secure internal tools.

To put some of what we’ve learned so far into practice, we’re going to check out some of the key ways that we can implement AI functions and tools when building workflows in Budibase.

This includes a range of features powered by Budibase AI, OpenAI, or Azure.

### AI across the builder

Firstly, Budibase users can take advantage of AI features across the platform to enhance developer experiences and speed up key tasks.

One huge part of this is autogenerating database schemas based on natural language prompts. For example, when creating a new app project, we can specify that we need a table for managing IT asset management requests.

Budibase will then output an appropriate database schema, complete with rows of dummy data.

{{< vimeo id="1104079365" title="LLM Powered Applications" >}}

As well as this, Budibase offers AI-powered code generation within JavaScript bindings across the builder.

This opens up a range of capabilities for advanced data transformations for users with less extensive coding skills, as well as providing a helpful time-saver for those that do.

Here’s an example of how this might work, returning a date variable for next Monday at 9am.

{{< vimeo id="1104079343" title="LLM Powered Applications" >}}

### AI columns

AI Columns within BudibaseDB are a convenient, powerful way to carry out a range of LLM-powered tasks.

We can add AI Columns to any internal database table, utilizing a range of pre-configured prompts for common language-processing tasks like sentiment analysis, translation, categorization, summarization, and more.

We can also write custom prompts to carry out more use-case-specific actions on our data.

Let’s take an example. Below, you can see a table representing our IT tickets.

![LLM Powered Applications](https://res.cloudinary.com/daog6scxm/image/upload/v1753353184/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_1_ol9x3d.webp "LLM Powered Applications")

We’re going to add an AI Column to this, calling it `Category` and choosing `Categorise Text` as our `Operation`.

We can also choose which columns we’d like our LLM to analyze to categorize our rows. We’re choosing `Title` and `Description`.

![AI Column](https://res.cloudinary.com/daog6scxm/image/upload/v1753353183/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_2_ntvov2.webp "AI Column")

Then, we simply need to input our possible categories. We’re going with `Hardware`, `Software`, `Network`, `Security`, and `Other`.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1753353183/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_3_hy23ni.webp "Categories")

Now, when a user submits a new ticket, our AI column will automatically categorize the text.

![Tickets](https://res.cloudinary.com/daog6scxm/image/upload/v1753353182/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_4_tpatjm.webp "Tickets")

Similarly, we can add a second AI Column, which we’ll call `Translation`, choosing `Translate` as our `Operation`.

![Translation](https://res.cloudinary.com/daog6scxm/image/upload/v1753353182/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_5_j95irw.webp "Translation")

We’ll then input `English` as our language, and choose `Description` under `Column`.

![Language](https://res.cloudinary.com/daog6scxm/image/upload/v1753353182/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_6_yzzsct.webp "Language")

Now, we can test this out by adding a row in another language. When we do this, we can see that our `Description` field has been automatically translated into English.

![Translation](https://res.cloudinary.com/daog6scxm/image/upload/v1753353181/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_7_q35www.webp "Translation")

You might also like our ultimate guide to [AI forms](https://budibase.com/blog/ai-forms/).

### AI in Budibase automations

Lastly, we can also access extensive AI capabilities within Budibase’s Automation section, making it the perfect solution for implementing intelligent capabilities within all kinds of workflows and business rules.

Specifically, we offer dedicated automation actions for a range of functions, including translation, categorization, generating text, custom prompts, and extracting data from documents.

For our example, we’ll continue using our Tickets table.

This time, we want to create an automation rule that automatically generates and sends a response for tickets with a low priority. To start, we’ve chosen a `Row Created` trigger, which is pointed at our `Invoices` table.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1753353180/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_8_pplczc.webp "Trigger")

We’re also going to add a filter to this, so that our rule only continues if the `Priority` column is equal to `Low`.

![Filter](https://res.cloudinary.com/daog6scxm/image/upload/v1753353180/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_9_jgkugg.webp "Filter")

When we hit the `+` icon to add an action, we can see a range of options under the `AI` subheading.

![Actions](https://res.cloudinary.com/daog6scxm/image/upload/v1753353180/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_10_r8chay.webp "Actions")

We’re going to add a `Generate Text` action. Under `Content Type`, we’re choosing `Email`.

![LLM-Powered Applications](https://res.cloudinary.com/daog6scxm/image/upload/v1753353180/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_11_jojuwc.webp "LLM-Powered Applications")

We’ll then hit the lightning bolt icon to open the bindings drawer.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1753353179/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_12_mm9vik.webp "Bindings")

We’re going to use the following prompt:

{{< highlight plaintext "linenos=inline" >}}

You are an IT service desk assistant. {{ trigger.row.Title }} {{ trigger.row.Description }} is a new ticket.

Please draft an email, suggesting troubleshooting steps and advising relevant timelines.

{{< /highlight >}}

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1753353179/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_13_cskrnc.webp "Prompt")

We’ll then run a test, using a row that we know has its `Priority` set to `Low`.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1753353179/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_14_zavgtv.webp "Test")

Under `Data Out` for our `Generate Text` action, we can see that this has worked.

![Generate Text](https://res.cloudinary.com/daog6scxm/image/upload/v1753353179/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_15_ytj1zw.webp "Generate Text")

Lastly, we can add a `Send Email` step to use our response to notify users that their ticket has been received. Alternatively, we could use a HTTP request to send this to an instant messaging platform.

![Email](https://res.cloudinary.com/daog6scxm/image/upload/v1753353179/cms/ai-agents/llm-powered-applications/LLM_Powered_Applications_16_ilg7fb.webp "Email")

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

With extensive data support, autogenerated UIs, powerful automations, comprehensive AI capabilities, custom RBAC, free SSO, and optional self-hosting, there’s never been a better way to build professional, LLM-powered applications.

Check out our [features overview](https://budibase.com/product/) to learn more.