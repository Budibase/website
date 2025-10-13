+++

author = "Ronan McQuillan"
date = 2025-05-19
description = "Take a look at our in-depth guide to tool calling with agentic AI."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is Tool Calling?"

+++

Currently, interest in agentic AI is exploding. IT teams in all industries are rushing to implement solutions that utilize autonomous agents to power workflows. This not only requires AI models that can perform reasoning, but ones that can also take action based on this.

That’s where tool calling comes in.

Tool calling, also sometimes referred to as function calling, is what enables an agentic AI system to interact with connected tools, services, and resources in order to perform tasks within workflows.

As such, this is an absolutely critical element of any agentic system.

However, this is a relatively new technology. As such, most teams are still getting to grips with what it means in practical terms.

Today, we’re exploring exactly this.

Specifically, we’re covering:

- [What is tool calling?](#what-is-tool-calling)
- [How does tool calling work?](#how-does-tool-calling-work)
- [Key benefits and challenges](#key-benefits-and-challenges)
- [How to build a tech-stack-for-tool-calling](#how-to-build-a-tech-stack-for-tool-calling)

Let’s start with the basics.

## What is tool calling?

As we said a second ago, tool calling is what enables an LLM to perform tasks within agentic systems. More specifically, this allows agents to trigger specific actions within external apps and services, using their API or an MCP server.

The goal is to achieve `autonomy`. Autonomy refers to an AI system’s ability within a given process to accept inputs, reason over them, determine a course of action, and provide a resolution within a process.

For example, receiving a service request, triaging it, identifying the root issue, and using the available tools to provide agreed-upon outcomes.

Crucially, this greatly reduces the amount of human intervention that’s required within workflows, as well as expanding the scope and complexity of day-to-day business tasks that can be automated end-to-end.

![Tool Calling](https://res.cloudinary.com/daog6scxm/image/upload/v1744898700/cms/ai-agents/ai-agentic-workflows/Featured_Image_2_lc3rsi.webp "Tool Calling")

## How does tool calling work?

Next, we can think in more detail about what’s actually happening under the hood. In other words, what is required for an agentic system to be able to effectively execute tool and function calls that are appropriate for a given situation?

To understand the constituent parts of this, it’s helpful to break the process of executing a tool call down into stages.

### Defining available tools

Firstly, we need to make specific tools or functions available to our model. This works by providing a `schema`, usually as JSON to define what each tool is, how it’s invoked, and what it does.

This includes variables such as:

- **Name** - What the tool is called and how it’s referenced.
- **Description** - An overview of what the tool does for the LLM to decide when to use it.
- **Parameter schema** - Structured data to outline the possible inputs, their types, and other constraints.

It’s important to note that this is the only information about the tool or function that the LLM sees. This means that it doesn’t necessarily need to be exposed to the underlying code. We can think of this as being like a developer reading an API spec.

As such, the quality, accuracy, and level of detail of our descriptions are critical. We must ensure that we provide the correct information for the LLM to select and populate calls effectively.

The actual execution of this is handled by our backend, as we’ll see in a moment. The LLM only populates the relevant request. This helps to ensure modularity, security, maintainability, and control over systems.

### Reasoning and logic

In order to effectively implement an agentic system capable of tool calling, we need a model that’s capable of suitable logic and reasoning. This requires what’s known as `tool-use reasoning`, a set of behaviors embedded in the model through its training.

This is a relatively complex behavior, which is why the emergence of agentic systems has only been made possible with the rise of modern LLMs.

The LLM has to do the following:

1. Accept and interpret inputs in natural language.
2. Understand the user’s intent to establish goals.
3. Break this down into subtasks.
4. Determine which of the appropriate tools to use.
5. Populate the required arguments based on the schema we provide.
6. Optionally, sequence and orchestrate multiple tool calls.

Each of these presents its own distinct challenges. In the first instance, we must select a model that offers sufficient natural language processing capabilities to enable the system to receive and interpret inputs, including any relevant domain-specificity in its training data.

This is what enables the system to determine which actions are required.

Similarly, NLP is a critical part of how AI systems construct arguments to populate requests, inferring the correct values from user prompts.

We also need to think about providing our agents with appropriate context and supporting information around the task at hand. 

For instance, tool-calling agents are often deployed within internal services workflows, so it’s vital for these to have exposure to detailed, up-to-date documentation and procedures within our service portfolio for performing RAG tasks.

For more complex systems, we may also require additional layers of reasoning and logic to sequence, organize, and orchestrate actions. Check out our guide to [agentic AI workflows ](https://budibase.com/blog/ai-agents/ai-agentic-workflows/)to learn more.

### Executing a tool call

As we said earlier, our LLM is responsible for populating the required schema for tool calling, but it does not directly execute the request. Instead, this is handled in the backend or middleware of our wider system.

So, once the LLM has determined what action to take and populated the appropriate schema, how is this actually triggered?

This can work in a couple of ways, depending on the complexity of our wider solution. However, in all cases, the LLM sends the appropriate trigger information to our backend server or middleware.

This then takes the provided information, maps the requested function to a specific API endpoint, and uses the provided information to send the request to an external tool, according to its spec.

The target platform provides a response to our middleware, which is passed back to our LLM. This can then decide what to do with the provided information, including feeding it back to the user or performing further reasoning about triggering follow-on actions.

In very simple use cases, we might only require a relatively lightweight backend service or script to execute a specific API as and when required. For instance, if we wanted to implement tool calling within a standalone password reset bot.

However, more advanced use cases involving multiple possible tool calls will require more sophisticated solutions. This has increased the usage of a form of middleware known as a Model Context Protocol (MCP) server.

In very simple terms, this is a piece of software that acts as a bridge between LLMs and external platforms. The goal is to provide an open, standardized approach to connecting AI to external tools, thereby simplifying agent development.

### Using responses

When a tool call is completed, a response is returned to our LLM via whichever backend or middleware solution we used to send the initial request. As we hinted at a second ago, a few different things might happen at this point, depending on the specific workflow.

Firstly, this will need to be interpreted and reasoned over. Then, the model can decide what it needs to do next to fulfil the original request.

In very simple cases, this might simply mean communicating the returned information back to the user in appropriate language. For example, in the case of a straightforward information request.

Or, the model may have determined within the reasoning stage that further actions are required, which it can use the returned information to execute. These are referred to as multi-step or chained calls.

This requires an element of coordination, often relying on orchestration tools, agent frameworks, or specific planning agents.

Alternatively, if the relevant information wasn’t returned, for instance, in the case of a failure, the model could then determine which alternative actions might be taken to reach the desired resolution.

## Key benefits and challenges

Now that we have an in-depth understanding of what tool calling is and how it works, it’s worth stepping back and considering the business-level reasons why we this has gained such popularity, as well as some of challenges we’ll need to overcome to implement solutions.

### Benefits

As we hinted at earlier, the most obvious advantage of tool calling is that it enables us to build fully autonomous solutions. In turn, this means we can more deeply automate a broader range of tasks, especially ones that might otherwise require human cognition or oversight.

This has several concrete benefits.

Firstly, by expanding the scope of which tasks and processes we can automate, tool calling has the potential to massively increase efficiency, especially in terms of cutting our reliance on human resources.

Employees can then be redirected to more productive workloads.

Additionally, this can have a massive impact on the quality of outcomes for affected processes. For instance, by standardizing executions, improving auditability, and reducing the scope for human error.

We can also consider how agentic systems with tool-calling capabilities offer benefits when compared to traditional automation tools.

That is, we may well be able to achieve similar outcomes in terms of applying business logic to carry out tasks using flow-based workflow automation tools or hard-coded solutions.

However, modern AI agents can enable us to build more complex logic that would be considerably more challenging with traditional automation techniques. This works by leveraging reusability, especially when we utilize existing MCP servers. 

### Challenges

However, tool calling also presents several challenges and potential drawbacks that we’ll have to account for.

One of the most prominent challenges is achieving visibility and oversight into AI systems’ behavior and decision-making. This is especially important in contexts involving tool calling, as actions can be triggered across our wider environment.

Therefore, it’s vital that we build effective observability into our tool stack. We’ll return to this a little later.

Other important security considerations also apply, particularly in enterprise contexts. One of the biggest relates to access control. The difficult thing here is implementing effective agentic solutions without undermining our existing access control policies.

So, just as we need to ensure that human users have appropriate tool access and data exposure for their roles within workflows, it’s vital that agentic systems are governed by similar rules.

This includes scenarios where they’ll have to escalate issues to a human agent. So, we’ll need to consider our needs around building human-in-the-loop workflows, including approval stages for specific kinds of function calls.

Separately from this, a range of challenges also stem from our initial solution design. For one thing, this is a novel and fast-moving space, making it tricky to determine which models and technologies to implement.

Similarly, all of this relies on our wider IT environment offering sufficient integration capabilities to facilitate tool calling. For instance, the initial lift required might be increased if we’re heavily reliant on legacy tools for internal processes.

## Use cases and examples

Before we move on to thinking about building a tech stack for tool calling, it’s helpful to consider some practical examples of what this will look like in practice.

One part of this, that we hinted at earlier, is the scale and complexity of the wider system; essentially, how many different tools and functions are we likely to connect with?

So, we can consider two broad scenarios.

### Tool calling in discrete processes

Firstly, there are agentic systems that relate to a discrete process or function. However, even within this, the scope of what’s required can vary quite widely. 

For instance, we might deploy a solution that spans the entirety of our IT service portfolio, or we might target a more granular task, such as booking an asset.

Regardless, this approach means focusing on a specific internal function or cluster of processes, in order to unify experiences for end users.

Therefore, it’s worth thinking about what kinds of functions are viable use cases here.

Individual internal services are popular examples here, including ITSM as well as user-facing processes HR, finance, operations, and facilities departments. Similarly, more and more teams are turning to agentic AI for customer support and services workflows.

However, there is a wide range of use cases for AI systems with tool calling beyond these, including just about any situation where we need automation systems to conditionally perform certain defined actions, based on the individual context of each execution.

Other common examples include software development, QA, copywriting, sales prospecting, contract management, case management, and a host of other workflows where autonomous reasoning and actions supplement human users.

You might also like our ultimate guide to [AI forms](https://budibase.com/blog/ai-forms/).

### ESM agents and assistants

Alternatively, a growing number of organizations are deploying agentic systems with tool-calling capabilities within more generalized solutions. Most often, this comes in the form of an ESM agent, chatbot, or assistant.

Essentially, the goal here is to provide employees or other users with a single point of interaction for initiating agreed service workflows across all departments, either with a dedicated interface or via an existing communications channel, such as Slack or Teams.

The system then uses reasoning and context to determine which service a request corresponds to, and executes relevant tool calls to deliver this.

Instead of navigating their way through a siloed set of department-specific forms, portals, and internal tools, users can simply request the services they need in natural language, via a single point of contact.

Notably, end users don’t even need to know which team or department their request relates to.

On top of this, these types of solutions offer a high degree of centralization and modularity, enhancing our visibility into service delivery efforts, as well as the maintainability and interconnectivity of systems.

Take a look at our guide to [enterprise chatbots](https://budibase.com/blog/ai-agents/enterprise-chatbots/) to learn more. 

## How to build a tech stack for tool calling

Lastly, in order to put everything we’ve learned so far into practice, it’s important to understand the specific tools and resources we’ll need to build effective solutions. 

In the past few years, countless vendors have come to market with tools aimed at making it easy for developers to output conversational AI tools capable of taking autonomous action. The key, however, is understanding the underlying architecture that makes these systems possible.

Depending on the complexity of our desired solution, we’ll likely require a combination of the following components:

- **LLMs and reasoning engines** - Models such as Claude, ChatGPT, and Mistral that provide language processing and reasoning capabilities.
- **Agent frameworks** - Tools include LangChain and CrewAI that coordinate agent behavior and provide capabilities such as task decomposition, memory access, tool selection, and multi-agent collaboration.
- **API management, MCP servers, and systems integration** - As we saw earlier, we need the appropriate integration tools and middleware to handling requests to external systems.
- **Task and workflow runners** - Bridging logic and action, by ensuring that steps are carried out reliably and in the right order, while retaining traceability.
- **Knowledge and memory stores** - Storing short-term and long-term memory, as well as providing our systems with contextual information, including within RAG use cases.
- **Monitoring and observability** - Tools like LangFuse and OpenTelemetry that provide visibility into the real-world behavior of agentic solutions.

Developing an effective solution of our own means balancing several concerns across financial, functional, and non-functional factors, so thorough vetting and research are required for individual cases.

## Turn data into action with Budibase

![Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1680181644/ui/homepage-design-ui_sizp7b.webp "Budibase")

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action.

We offer extensive connectivity for LLMs, RDBMSs, NoSQL tools, APIs, and more, alongside autogenerated UIs and an advanced, visual automation builder.

Take a look at our [features overview](https://budibase.com/product/) to learn more.