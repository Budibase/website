+++

author = "Ronan McQuillan"
date = 2025-10-16
description = "Check out our ultimate guide to designing and building chat UIs."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are AI Chat UIs? + Design, Architecture, and Implementation"

[[about]]
name = "AI Chat"
sameAs = "https://www.wikidata.org/wiki/Q116961403"
type = "Thing"

+++

Chat UIs are fast becoming a critical part of how we interact with all kinds of software systems. In the age of AI, natural language interactions are increasingly replacing more structured, static UIs in a huge range of apps and workflows.

We can’t overstate what a fundamental change this is to how users interact with software tools.

Today, we’re diving deep into everything you need to know about serving chat interfaces to your users. Along the way, we’ll touch on design, architecture, and a host of other practical considerations for leveraging conversational UIs.

Specifically, we’re going to cover:

- [What is a chat interface?](#what-is-a-chat-interface)
- [When are chat UIs used?](#when-are-chat-uis-used)
  - [Use cases](#use-cases)
  - [Benefits](#benefits)
  - [Challenges](#challenges)
- [AI chat UI design](#ai-chat-ui-design)
- [AI chat vs traditional internal tools](#ai-chat-vs-traditional-internal-tools)
- [Architecture and technical considerations for chat interfaces](#architecture-and-technical-considerations-for-chat-interfaces)
- [Build vs buy for chat UIs](#build-vs-buy-for-chat-uis)
- [Frameworks and tooling to build chat UIs](#frameworks-and-tooling-to-build-chat-uis)

Let’s start with the basics.

## What is a chat interface?

A chat interface is a conversational UI that enables us to interact with a software system using natural language. Nowadays, this almost always means interacting with a large language model.

In terms of design, this normally follows the same structure as an instant messaging platform. The difference is that we’re communicating with an AI system, rather than another human user.

![Chat UI design](https://res.cloudinary.com/daog6scxm/image/upload/v1760606931/cms/ai-chat-uis/Chat_UI_Better_io94i1.gif "Chat UI Design")

We’ll return to chat UI design in more depth a little later, but for now, the important thing is that this mainly consists of a chatbox for sending messages, along with a message history made up of timestamped message bubbles.

Importantly, the interface must be capable of updating in real time, in order to display new messages as and when they are received. Some tools even display the model’s rationale as it formulates an answer.

Think ChatGPT or an embedded customer-facing chatbot.

However, there’s usually quite a bit more than this going on under the hood.

For instance, being able to communicate with an LLM is one thing, but for a chat interface to be useful in an internal workflow, it also needs to be capable of triggering actions. For example, sending an API request or returning and presenting specific rows from a table.

How we involve users in these actions is a crucial part of the chat experience. As such, most modern UIs will include features such as embedded forms or other UI elements to populate and approve action requests.

As we’ll see a little later, we can also draw a line between tools like ChatGPT, which offer full off-the-shelf AI chat using proprietary models, and standalone chat UIs that can be leveraged on top of a range of models, whether these are off-the-shelf or custom-built.

## When are chat UIs used?

With a basic understanding of what chat UIs are, we can begin to flesh this out by considering how and where they’re used.

Now, this is obviously quite a big question. Around the world, most people are already using some form of pre-built AI chat for day-to-day queries, such as deciding where to go for dinner.

That’s not really what we’re worried about, though. Instead, we’re more concerned with how chat tools are being leveraged within business processes - especially in cases where we use a custom solution consisting of a chat UI on top of a private LLM.

We can attack this from a few different angles.

### Use cases

First up, it’s important to have a clear grasp of the kinds of workflows and processes where conversational interfaces are most prominently used.

One important angle to this is opening up the possibility of automating tasks that would otherwise require human input.

For instance, chat UIs are increasingly widely used within internal services workflows, including by IT, HR, finance, facilities, and other teams.

The idea here is to provide end users with a single point of contact for accessing all available services, as if they were speaking to a human colleague.

Similarly, AI chat is helpful in a range of customer-facing workflows. For instance, enabling an AI agent to answer user queries, as well as leveraging their data which we could not send to a public model. For example, to deal with issues with online orders.

Of course, these are only broad categories. In reality, there is a huge range of potential, often highly granular use cases for AI chat. Some of the most common examples include tools for managing knowledge bases, code repos, internal policies, or other information heavy workflows.

You might also like our in-depth guide to [AI forms](https://budibase.com/blog/ai-forms/).

To better understand the kinds of processes where AI chat is most effective, we can turn our attention to the concrete benefits we can expect from custom AI implementations.

### Benefits

Of course, the more general benefits of AI are well known in 2025. Once again, we’re not worried about the kinds of tasks that everyday users get ChatGPT to perform.

Rather, the key thing to understand here is that one of the biggest challenges that IT teams face today is what’s known as `shadow AI`. That is, when internal colleagues use AI tools in an ungoverned way.

This comes along with a huge set of risks, including sensitive data leaving the organization, or unsuitable models providing incorrect information to end users.

Internal chat UIs are a crucial strategy for combating this. That is, we can prevent shadow AI by providing colleagues with a more effective alternative that we can maintain control and governance over.

In this sense, custom conversational interfaces are also critical to unlocking the wider benefits of AI, where off-the-shelf tools are unsuitable for use in large organizations.

This includes a huge range of efficiency, accuracy, and reliability gains within internal processes. In particular, ones that require complex reasoning and contextual awareness, which would not be viable to handle with strictly deterministic automations.

### Challenges

However, none of these benefits is inevitable, with widespread reports of [AI adoption failing to deliver expected ROI](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/). Of course, part of the issue here is that AI tools, including conversational interfaces, are relatively compex, novel systems.

As such, it’s important that we understand the potential challenges, roadblocks, and other decision points that we’ll need to address in order to successfully implement custom solutions.

Perhaps the most fundamental question here is model selection. We can think of our LLM as the engine that powers our chat experiences. Specifically, this determines the system’s ability to interpret instructions, the quality of the answers, and performance issues, such as speed.

An obvious challenge here is compatibility between our model and chat UI, especially if we want to use a [local LLM.](https://budibase.com/blog/ai-agents/local-llms/) We’ll return to this idea a little later when we start to think about architecture and specific solutions.

Another important thing to keep in mind is that chat UIs must be capable of reflecting colleagues’ existing roles and permissions within workflows in order to be effective.

For example, only serving users with data that they’d otherwise have access to within existing workflows.

We’ll need to account for this with appropriate authorization, authentication, and access control tools in order for our chat UIs to be viable for production use cases.

## AI chat UI design

Earlier, we gave a basic overview of the design elements that make up a chat UI. Now, we can dive a little deeper into this, outlining the core components of an effective internal chat UI, along with the role of each.

The obvious place to start is the elements that actually facilitate back-and-forth communication. 

As we said earlier, the core of this is made up of an input for sending messages, as well as elements for displaying previous messages with timestamps.

The message history also usually utilizes a few visual cues to make it easier to scan. These are things that will be familiar to most users, such as differentiating between senders using distinct coloring and placing containers on opposite sides of the viewport.

Most modern chat UIs utilize side nav to allow users to access previous conversations, administrative settings, or any other more advanced functions and utilities. For instance, if there are set actions that can be triggered, or specialized tools like image generation.

For the purposes of internal business workflows, one of the most important additional elements of chat UI design is what’s known as `component streaming`.

This means enabling the AI system to populate and display interactive app componentry within chats. For example, forms, tables, and charts. 

For instance, if we build a conversational IT ticketing system, this allows us to provide a structured experience for entering key device details.

![Chat UI design](https://res.cloudinary.com/daog6scxm/image/upload/v1760606931/cms/ai-chat-uis/Embedded_Form_djq2qx.gif "Chat UI Design")

As we’ll see in later sections, this requires our chat interface to be connected to appropriate component libraries or other app-building solutions that can be used in tool calls in order to generate suitable UI elements to embed in the chat.

## AI chat vs traditional internal tools

Earlier, we discussed some of the most prominent benefits and challenges of utilizing chat UIs within internal workflows. However, we only hinted at how this relates to alternative approaches to interacting with software systems.

Most traditional workflow tools consist of a relatively narrow set of components to enable users to interact with underlying data sets - primarily forms and tables that enable us to carry out CRUD operations or trigger defined automations in a controlled manner.

With that in mind, we can consider how chat UIs differ from traditional workflow apps.

### User experiences

Perhaps the most important differences here relate to user experiences. That is, from a user’s perspective, natural language interactions have a very different feel from structured data interfaces.

This has a range of practical benefits. 

For example, in cases where the user has a low level of knowledge of the topic at hand, NLP enables them to describe their issue in their own words, with the AI model guiding them through the process of providing the required information to reach a resolution.

As such, this can often be a more efficient experience.

Conversational interfaces also help us to solve UX issues that pop up in teams with large service portfolios.

Say, for instance, that our HR team has dozens of workflows that on-the-ground employees can initiate. With traditional workflow tools, we might contain these within a dedicated HR portal, containing forms that correspond to each request the employee might need to make.

This places a comparatively high burden on the employee, as they have to know the name of the service they want to access, locate the corresponding form, and provide the required information.

A conversational interface can alleviate this by enabling employees to simply describe the issue they’re facing via a single point of interaction.

On the flip side, though, it’s also worth noting that traditional structured data UIs can still be more efficient in individual cases, especially if the user knows the exact service they want to access and has a good understanding of the required data inputs.

### Structured vs unstructured data inputs

Another key differentiator between conversational UIs and traditional internal tools is the rigidity of the data we can collect and interact with.

That is, non-conversational interfaces are largely made up of structured data interfaces. This means that the information schema for triggering workflows is pre-defined and static, although we might use discrete variations on this with [dynamic forms](https://budibase.com/blog/app-building/dynamic-forms/).

Obviously, this has benefits, including ensuring that we always collect the exact information that we need for well-defined workflows.

However, it also presents important challenges, especially when dealing with edge cases or accounting for the context of a request. This can increase the likelihood that we’ll need to escalate to a human user within workflows.

By contrast, chat UIs provide considerably more flexibility to provide a fuller account of the user’s issues. On the one hand, this means allowing users to describe their issue in their own words, with our AI model parsing the required data schema from this.

On the other hand, AI systems are also able to record additional contextual factors that might not be included in a static schema, helping to provide a more complete picture of their request.

At the same time, it’s important that we don’t sacrifice our core data structure as part of this. In other words, we still need to have strategies in place to ensure that we collect the required data to action a service request.

So, we’ll need strategies such as follow-up questions, strict validation logic, and streaming of structured data elements into our AI chats in order to balance these concerns.

### Deterministic vs non-deterministic automations

Following on from what we just discussed, one key benefit of conversational interfaces over structured data UIs is facilitating `non-deterministic automations`.

Traditional workflow management tools are `deterministic`. Automation logic is static, meaning that, for the same inputs, the same outputs should always be reached. This creates a few important limitations.

First, we can’t account for context. Second, if we don’t implement suitable fallback logic, deterministic automations can be more prone to failure when dealing with edge cases.

Non-deterministic automations leverage agentic AI systems that are capable of independent reasoning and action. 

In other words, they can assess the context of the issue at hand and use the tools and data they’re exposed to to reach a resolution without strictly determined automation logic.

For example, many IT teams use chat UIs to build agents for their level 1 support tasks. The user can describe their issue via a conversational interface, and the agent will triage this, either determining a resolution or escalating to a human colleague.

To learn more about how we can build these kinds of solutions, check out our guide on [open-source AI agent platforms](https://budibase.com/blog/ai-agents/open-source-ai-agent-platforms/).

## Architecture and technical considerations for chat interfaces

Having extensively thought about how and when chat UIs are used, we can start to think in more concrete terms about how these actually work. 

More importantly, we can examine the specific architecture of effective conversational systems, including the layers that this comprises, and the specific functions that each provides.

That way, we’ll be in a much better position to think about how we can implement solutions of our own.

### UIs

We’ll start with the front-end of our chat system, as this should be the most familiar already. Obviously, we’ve already touched on the core role of this, as well as the UI components that its made up of.

So, now we want to think more in terms of our technical requirements.

The first capability we need is `streaming`. This is what allows us to establish a real-time connection to the underlying AI model. The priority here is providing a fast, low-latency connection to give the impression of a live conversation.

As such, many chat UIs also utilize what’s known as `incremental rendering`, where responses are sent gradually, as and when individual parts of them are ready.

To support this, we’ll also need visual indicators that our model is generating a response, like animated typing indicators or loading wheels.

We can also consider our requirements around facilitating inputs. While this largely revolves around multi-line text inputs, we’ll also likely want additional features like file uploads or the ability to trigger pre-built commands.

![File attachment](https://res.cloudinary.com/daog6scxm/image/upload/v1760609756/cms/ai-chat-uis/File_Attachment_jwggsa.gif "File Attachment")

In the context of internal workflows, it’s also crucial that chat UIs support appropriate componentry for human-in-the-loop tasks. For instance, utilizing `component streaming` to serve form UIs to seek approval for automation actions or gather follow-up information.

On top of this, we’ll also likely want support for rich-text formatting, displaying error messages, mobile responsiveness, and other more general UI and UX requirements.

![Error](https://res.cloudinary.com/daog6scxm/image/upload/v1760610026/cms/ai-chat-uis/Error_vr6zbw.gif "Error")

### Models

Large language models are what make modern conversational UIs possible. At the highest level, these are software systems that utilize large volumes of data to enable them to analyze and predict human language - both to interpret inputs and to generate responses.

Therefore, our choice of model is one of the most fundamental decision points for our wider chat UI system. This determines several key things, including the system’s performance and the quality of responses we can serve to users.

Because of this, there are several factors that we’ll need to consider when choosing a model. However, the right option is highly dependent on our system’s overarching goals.

Some of the most important considerations we’ll encounter include:

- **Parameter counts** - The actual size of the model.
- **Performance** - Including issues such as latency, throughput, and context windows.
- **Cost** - Pricing per API call and in terms of infrastructure requirements.
- **Domain specificity** - The extent to which a model’s training data reflects our target workflow.
- **Task-specific performance** - The model’s benchmarking for specific tasks, such as code generation.
- **Integrations** - Available SDKs, APIs, and streaming protocols.
- **Fine-tuning** - Our options for tailoring the model’s responses to our specific use case.
- **Open-source vs closed-source models** - Some teams might prioritize open-source solutions for greater control and the ability to host on-prem, while others prefer cloud-based solutions, which can offer working solutions with less setup.

The issues of open-source vs closed-source models is particularly pertinent in the context of internal chat UIs.

One huge aspect of this is that we often can’t send company data to publicly available, opaque models. So, for large organizations, open-source models are often the only viable option for implementing internal chat UIs.

In these cases, our model selection then depends on our resources and requirements for hosting. For instance, do we want to utilize our own servers or rely on a private cloud-based solution.

Having determined this, we can then choose the model with the appropriate parameter count that most cost-effectively meets our functional requirements.

### Tools

As we have seen already, a key characteristic of modern chat UIs is the ability to trigger actions based on users’ requests. 

To do this, we need to expose our system to `tools` in the form of functions or API requests that enable it to perform functions like retrieving data, executing workflows, or updating systems.

Usually, this is performed using an API layer or MCP server, containing the available endpoints for the actions the system can hit, along with descriptions of how and when they’re used, and the required data schemas.

That way, the chatbot can determine which tool is right for the given situation, and populate the relevant request based on user-submitted or contextual information, before interpreting and returning the response.

To implement this within our own chat UIs, we’ll need to consider several technical issues:

- **Function calling** - The mechanism that allows the model to invoke defined tools with structured inputs and outputs.
- **Validation** - Ensuring inputs are authorized, correctly formatted, and safe to execute.
- **RBAC, auth & permissions** - Enforcing user- or role-based access to each connected system.
- **Observability** - Logging tool calls, errors, and latencies for visibility and debugging.
- **Result handling** - Presenting tool outputs clearly, whether as text summaries or structured components.
- **Human-in-the-loop mechanisms** - Allowing the model to request user confirmation or extra data before executing certain actions.

The goal is to bridge the gap from strictly conversational interfaces to fully fledged automation solutions.

For instance, this is what enables our end users to self-serve and reach resolutions to their issues using natural language inputs.

### Data

Lastly, in order to be effective within internal workflows, our chat UIs will need to have access to certain information sources, including databases, files, and other resources. Therefore, how we connect to this data is a key decision from a systems design point of view.

For our purposes, there are two key aspects to this that we should be aware of. 

The first is `data retrieval as a tool call`. This occurs when we instruct our AI chat interface to return specific information for us from a database. For example, an IT colleague might want to quickly retrieve all tickets that match certain criteria, such as having an `open` status.

This information can then be presented to the end user in the form of an embedded interactive table. Depending on how our API layer is set up, information doesn’t necessarily need to be sent to the model for processing.

The other is what’s known as `retrieval augmented generation`. This means enabling the model to retrieve relevant information that can be used as context when generating a response, alongside its existing training data.

For example, if a user asks a question about our internal policies, we could perform RAG on real-world documentation to inform our answer.

In both cases, some of the key considerations for our data layer include:

Some of the key technical requirements to consider include:

- **Data retrieval** - Implementing efficient indexing and search mechanisms for unstructured or semi-structured sources.
- **Context injection** - Supplying retrieved data to the model as structured context or embeddings.
- **Accuracy and freshness** - Keeping data sources current and validating retrieved content.
- **Access control** - Enforcing permissions and visibility rules when users query internal information.
- **Privacy and compliance** - Redacting or anonymizing sensitive data before it reaches the model.
- **Observability** - Monitoring query volume, latency, and source reliability.

## Build vs buy for chat UIs

Once we have a clear idea of our requirements for each individual architectural layer of our chat UI system, we can begin to think about how we’re going to meet these.

The first big decision here is whether we’re going to build our own system in-house or adopt an off-the-shelf chat UI solution.

This affects everything from our technical requirements to practical considerations such as cost-effectiveness, time-to-value, flexibility, security, and maintenance.

Naturally, building internally gives us almost complete control over design, integrations, model selection, data handling, and other issues that enable us to tightly map our solution to real-world workflows.

However, this approach also comes along with significantly higher development and maintenance overheads, as well as requiring us to implement key functionality such as performance management, state handling, authentication, and API security ourselves.

As such, it might be beyond the means of many teams. Even for large teams, fully custom builds can introduce excessively high time-to-value.

One alternative is utilizing a fully off-the-shelf chat UI solution. 

Buying or adopting an off-the-shelf framework simplifies delivery, enabling us to implement working solutions with less overhead. For example, with pre-built streaming support, accessibility, tool calling, and other capabilities.

The downside, however, is a lower level of flexibility. In particular, we’ll need to carefully assess our options to ensure they support our chosen models and other tools.

Some of the key factors we’ll want to evaluate here include:

- **Time to value** - How quickly you need a usable interface.
- **Integration depth** - The degree of connection with internal data and tools.
- **Security and compliance** - Whether third-party hosting meets internal policies.
- **Cost and maintenance** - Build effort versus subscription or licensing costs.
- **Control and extensibility** - How easily you can adapt the system as requirements evolve.

However, for many teams, the most suitable answer lies somewhere between these two extremes. For example, utilizing open-source, model-agnostic chat UI tools that provide additional flexibility compared to their COTS equivalents.

## Frameworks and tooling to build chat UIs

If we decide that we want to go down the route of a custom-built chat UI, we’ll need to understand the tooling that will facilitate this. Even in large organizations, very few teams build AI systems 100% from scratch.

Instead, we’re likely to rely on a range of existing libraries and frameworks.

For the front-end, reactive frameworks like `React`, `Vue`, or `Svelte` are suitable for chat interfaces. These provide a component structure and real-time rendering that can facilitate continuously updating conversations.

Other tools we’ll need include event-driven frameworks to support persistent, low-latency communication via WebHooks, as well as a state management layer to keep messages, updates, and drafts consistent, especially where many events occur at once.

On the server side, we’ll also need to consider authentication, API management, routing, and communication between the UI, model, and connected tools. We might also want to implement [agentic frameworks](https://budibase.com/blog/ai-agents/ai-agent-frameworks/), MCP servers, or tools for observability, monitoring, and testing.

As managing all of these tools can be a complex undertaking, many teams opt instead for low-code development tools to build chat UI solutions.

This reduces abstraction by providing reusability and pre-built capabilities for core components such as interfaces, data management, authentication, and model connections, while retaining customization for business logic or API requests.

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

With autogenerated UIs, extensive external data support, AI-powered automations, optional self-hosting, custom RBAC, and much more, there’s never been a better solution for building professional internal tools at speed.

Take a look at our [features overview](https://budibase.com/product/) to learn more.