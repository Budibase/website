+++
author = "Ronan McQuillan"
date = 2025-04-17
description = "Take a look at our comprehensive guide to implementing AI Agentic Workflows"
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are AI Agentic Workflows? + Use Cases & Examples"
type = "ai-agents"
layout= "ai-agentic-workflows"
[[about]]
name = "AI Agents"
sameAs = "https://www.wikidata.org/wiki/Q1142726"
type = "Thing"
+++

Agentic AI is one of the hottest topics in IT, digital transformation, and automation right now. It promises to revolutionize almost all aspects of work, including replacing human colleagues within business processes.

But there’s a lot of confusion out there, too. 

Today, we’re cutting through the noise to present a full account of what AI agentic workflows are, how they work, and where they’re used.

By the end, you’ll have a full working knowledge of the growing role of agentic AI within business workflows, as well as how this can be used for your more specific internal use cases.

Specifically, we’ll be covering:

- [What are AI agentic workflows](#what-are-ai-agentic-workflows)
  - [What is agentic AI?](#what-is-agentic-ai)
  - [When is a workflow agentic](#when-is-a-workflow-agentic)
  - [Components of AI agents](#components-of-ai-agents)
  - [Benefits of agentic AI](#benefits-of-agentic-ai)
  - [Challenges](#challenges)
- [AI agents vs other workflow and automation solutions](#ai-agents-vs-other-workflow-and-automation-solutions)
- [3 essential agentic workflow patterns](#3-essential-agentic-workflow-patterns)
  - [Planning](#planning)
  - [Reactive execution](#reactive-execution)
  - [Iterative refinement](#iterative-refinement)
- [Agentic AI use cases and examples](#agentic-ai-use-cases-and-examples)
- [Tool stacks, architecture, and solutions](#agentic-ai-architecture-tool-stacks-and-solutions)
- [Looking to the future](#looking-to-the-future)

Let’s start with the basics

## What are AI agentic workflows?

An AI agentic workflow is a sequence of steps to perform a defined task utilizing AI agents. In other words, these are common internal tasks where agentic AI can be leveraged.

Whereas other types of automations might only offer basic logic based on events and conditions, agentic AI can offer more sophisticated reasoning and decision-making that’s suitable for real-world, less strictly linear tasks.

This includes giving solutions autonomy to determine for themselves how best to complete a task based on the tools, resources, and information available to them.

![AI Agentic Workflow](https://res.cloudinary.com/daog6scxm/image/upload/v1744896875/cms/ai-agents/ai-agentic-workflows/AI_Agentic_Workflows_Featured_1_yblhxa.webp "AI Agentic Workflows")

To understand this better, let’s take a step back.

### What is agentic AI?

Agentic AI is a subfield of AI solutions that exhibit `agency`, meaning they can use reasoning, memory, and connected tools to determine how to perform complex tasks with minimal human input.

The core unit of an agentic AI solution is an `AI agent`. We can think of this as a software entity that we configure with the agency to perform a particular task or set of tasks.

At the most basic level, this will typically comprise an LLM for reasoning and logic, in tandem with a set of available tools, resources, or API endpoints for taking more specific actions. Agents also generally feature memory to learn from previous interactions and outcomes.

As we’ll see later, there are more specific types of agents that utilize different patterns to perform particular kinds of tasks.

### When is a workflow agentic?

So, we can start to think more concretely about how agentic AI applies to workflow management.

As we said earlier, an agentic workflow is a set of tasks within your organization that we handle with AI agents. 

Another question within this is, what makes a particular workflow suitable for agentic solutions? In other words, when would we be better off with agentic AI compared to other AI or automation tools?

Traditional automation tools like trigger/event rules, BPA, or RPA are useful when workflows follow a tightly defined sequence of steps, but they’re typically not suitable for less rigid, wholly repeatable use cases.

So, AI agentic workflows are often related to tasks where the required steps or sequence of actions to complete a particular goal is more loosely defined or contingent on other factors. Normally, this would mean a human needs to assess the situation and decide how to proceed.

For instance, where there are multiple potential routes to a resolution, where more advanced diagnosis and triaging are required, or where completing a task requires us to take account of more contextual information.

We’ll check out some more concrete examples of this in a later section, as well as the more granular tasks and decisions agents can make to approach tasks.

### Components of AI agents

Earlier, we said that AI agents are composed of LLMs working in tandem with other tools, integrations, information, and resources to identify and perform actions to complete the task at hand.

To better understand this, we can break down the constituent elements of AI agents more granularly.

#### Large language models (LLMs)

The most central part of any AI agentic workflow is a large language model - or, in certain cases, multiple LLMs.

An LLM is a `neural network` trained on large quantities of data, which allows it to understand natural language inputs, and generate coherent, appropriate responses.

For the purposes of AI agents, LLMs provide the capabilities needed to execute the logic and reasoning required to complete a task.

This can take a few key forms:

- **Interpreting user goals** - Understanding human inputs to understand the nature of a request submitted in natural language.
- **Task decomposition** - Breaking down complex problems into discrete tasks and subgoals.
- **Choosing appropriate actions** - Determining which of the available functions, tools, or integrations can be utilized within subtasks.
- **Maintain contextual understanding** - Keeping track of conversations, tasks, and prior actions.
- **Reflection and adaption** - Evaluating outcomes of actions and making necessary adjustments.

#### Knowledge bases and other datasets

As we said a second ago, LLMs are trained on huge volumes of data. But, within internal workflows, we’ll also need to draw on more situational data that may be unique to our organization, such as policies, procedures, service catalogs, or approval rules.

The trouble is that these may evolve over time, and dealing with this fact by updating the LLM’s underlying training data would be difficult and costly.

So, AI agents will often require exposure to relevant information assets, such as documentation, internal policies, procedures, or knowledge bases.

This can work in a few different ways, including `retrieval augmented generation`, `embeddings and vector search`, or simple `API calls` for structured data.

#### Tool and function calling

Tool calling, also known as function calling, is what enables an AI agent to take specific actions. Essentially, this means making structured requests to connected tools, APIs, or defined internal functions, in order to perform tasks beyond simply generating text.

While we allow AI agents to act autonomously, we must still consider which tools and functions we give them access to.

So, tools are also typically accompanied by roles and permissions for different agents.

For instance, our agentic AI solution might be connected to a wide-reaching platform, like our ERP system, but certain agents would only be exposed to particular, task-specific API endpoints.

The extent to which we define which functions and tools are available to agents can vary. So, for some straightforward use cases, this will be tightly controlled, but in other cases, we’ll give agents more autonomy to choose the right tools for specific issues.

#### Feedback mechanisms

Feedback mechanisms allow humans to interact with our AI agentic workflows, especially after they’ve already been initiated - including during and after execution. This is sometimes referred to as `human in the loop`.

This serves a few key roles, including establishing accountability, improving performance over time, and aligning agent behavior with human expectations.

In many cases, human users remain deeply involved in workflows, providing oversight and intervention across agents’ decisions. For example, giving approval to take certain actions, reviewing draft outputs, or selecting from an agent-generated set of options for actions.

Alternatively, human users may give post-execution feedback to help agents improve over time. This might take the form of a simple *helpful/unhelpful* designation, or we could give more specific feedback, like flagging incorrect, harmful, or otherwise problematic responses.

Some agents may also be configured for self-reflection. For instance, checking if their solution worked, reassessing the steps taken, or attempting to correct failed actions. This helps agents to remain safe, accurate, and aligned with underlying business workflows.

#### Memory

In order for many of the components of AI agentic workflows we’ve seen so far to work, agents need the capacity to recall feedback, context, and outcomes from previous interactions and executions.

This requires memory. Unlike other automation tools, where execution is largely pre-defined, AI agents benefit from the ability to remember prior steps in a process, track goals across multiple sessions, learn from feedback, and adapt behavior based on past outcomes.

There are two broad types of memory we need to be aware of. `Short-term memory` is the immediate context that an agent can access within a given session. 

This includes recent messages, actions taken, retrieved documents, and other context to help the agent generate a cohesive response.

`Long-term memory` stores information across sessions, including historical decisions, user preferences, or prior outputs. This assists with personalization, agent learning, and continuous improvement.

Depending on the specific type of information, long-term memory can be implemented with vector databases, key/value stores, graphs, or external systems, such as CRMs or ticketing platforms.

#### Multiagent collaboration, communication, and orchestration

![Multi-agent collaboaration](https://res.cloudinary.com/daog6scxm/image/upload/v1744898700/cms/ai-agents/ai-agentic-workflows/Featured_Image_2_lc3rsi.webp "Multi agent collaboration")

While many workflows rely on single task-specific agents, more complex use cases often require numerous specialized agents working in tandem. These can have specialized functions, roles, and knowledge domains for more granular sets of tasks.

In these cases, effective coordination and collaboration between agents is critical.

One option here is `agent-to-agent` communication, using message passing, shared memory, or intermediate outputs, where one agent triggers another’s involvement as a function. Agents also share context in the form of conversation history or task and dependency trees.

Agent orchestration refers to the coordination layer that manages how, when, and why different agents are activated.

This could be hard-coded, implemented dynamically with a `manager agent`, or rely on `graph-based` structures where dependencies determine agent execution order.

In any case, the goal is to ensure that agentic systems remain scalable and modular, with agents able to act individually or in coordination to adapt to real-world, complex scenarios.

### Benefits of agentic AI

Now that we have an in-depth understanding of what AI agentic workflows are and how they work, we can zoom out and think about some of the more practical, business-level pros and cons of implementing them.

The high-level benefits of agentic workflows include:

- `Increased efficiency and throughput` - accelerating complex, knowledge-centric tasks that would otherwise take hours or days, enabling human colleagues to focus on higher-value work.
- `Context-aware automation` - adaptability for changing inputs, exceptions, and edge cases, suitable for real-world, messy business environments.
- `Fast iteration and innovation` - as modular systems, agentic workflows can rapidly prototype, refine, and implement new solutions.
- `Cost optimization` - cutting operational costs without sacrificing the quality of outcomes.
- `Knowledge retention` - through agent memory, agents can retain information from across sessions, helping to capture and de-silo institutional knowledge.

In other words, AI agents offer us an autonomous layer of intelligence that can continuously adapt, learn, and improve, not just simply follow automation rules.

However, this introduces some important challenges, too.

### Challenges

Implementing AI agentic workflows is not without costs, risks, and potential downsides.

This is part of why it’s so important to understand their ideal use cases in order to determine if they are the most appropriate solution for a given task.

This will then need to be weighed up against the following potential drawbacks:

- `Complexity` - agentic systems feature multiple interrelated parts, which can increase the engineering overhead required to develop and maintain solutions.
- `Visibility issues` - if intermediate steps within agentic workflows aren’t exposed to end-users, we may encounter issues with validating, debugging, or auditing the system.
- `Security and access issues` - AI agents interact with live systems, meaning we’ll need to put measures in place to prevent privilege misuse, data leaks, or unintended actions.
- `Evaluation difficulties` - since we’re often dealing with natural language, assessing the success of an agentic workflow can be ambiguous or subjective.
- `Establishing ROI` - judging the return on investment on agentic solutions may be difficult without clear, targeted use cases.

None of these are necessarily deal breakers. Rather, each is a consideration we’ll need to keep abreast of in order to maximize the value we derive from agentic workflows.

On top of this, agentic AI is a relatively young technology, especially when compared to alternative automation solutions.

While this represents a huge opportunity for early adopters to gain a competitive edge, it also introduces certain additional challenges.

Most importantly, the market for AI agent platforms moves incredibly quickly, with a steady stream of new vendors and solutions. This may make it difficult to assess your specific needs and choose appropriate tooling based on them.

We’ll return to specific players a little later when we think about tool stacks for AI agentic workflows.

## AI agents vs other workflow and automation solutions

Next, though, we can solidify our understanding by considering how agentic AI stacks up against other forms of automation and workflow management, along with the instances where our various options are strongest.

||||||||||

The first of these is what we could describe as `traditional workflow automation`. This includes tools such as BPA, RPA, or logic-based workflow builders that enable us to define explicit rules to move data, trigger actions, and execute processes.

These are most effective in cases where:

- Tasks are repeatable and deterministic.
- Inputs and outcomes are predictable.
- Business logic is static.
- Traceability and auditing are high priorities.

Alternatively, we can also consider non-agentic AI solutions. This includes situations where AI is used for classification, analysis, summarization, or generation but without autonomy, memory, or goal-directed behavior.

This typically means embedding an LLM within a wider software application in order to automate a specific task or piece of functionality. These solutions are often most effective when:

- Performing single-shot tasks at a high volume, such as translating or classifying tickets.
- Memory of awareness of previous interactions is not required.
- Inputs and outputs are well-bounded.
- Users need to trigger discrete automated tasks at will.

In other words, where both approaches are helpful for their own set of intended use cases, they each also lack the more sophisticated, autonomous decision making of agentic solutions, meaning they’re less viable for more advanced use cases.

## 3 essential agentic workflow patterns

So far, we’ve covered quite a lot of ground in terms of what AI agentic workflows are and how they work, but we’ve been more general in terms of how we can utilize them.

We couldn’t possibly do a deep dive into every possible use case. A better option is to consider the core design patterns that we can apply to more specific use cases.

We can define a pattern as a reusable structure or approach that defines how agents approach and interact with tasks, information, tools, and objectives. Specific resources and logic can then be applied to these to adapt them to more specific situations.

Let’s check out the three most important agentic workflow patterns.

### Planning

A `planning` pattern enables an agent to break an objective down into more manageable, actionable tasks. It then determines the most effective sequence with which to carry these out, with adjustments along the way where needed.

![AI Agentic Workflow Planning Pattern](https://res.cloudinary.com/daog6scxm/image/upload/v1744893943/cms/ai-agents/ai-agentic-workflows/Planning_wzn9u9.webp "AI Agentic Workflow Planning Pattern")

In other words, it decides how to carry out the task, then actions this plan. This makes the planning pattern highly suited to complex tasks with high level goals, like employee onboarding or dealing with incoming change requests.

This might draw on a range of tools and functions, including scheduling, memory modules, task boards, or use-case-specific functions to achieve its goal. These are generally used sequentially, but the control flow may loop back and make adjustments or refinements.

Core components of planning agents include:

- A `decomposer` - to split the task up into smaller components.
- A `scheduler` - which sequences the tasks.
- An `executor` - to perform tasks.
- A `monitor` - which tracks progress and makes adjustments as needed.

### Reactive execution

`Reactive execution` patterns allow agents to respond to inputs and events as and when they occur. So, rather than starting with a high-level goal, they continuously monitor for triggers, interpret them, and take immediate, context-aware actions.

![Reactive Execution](https://res.cloudinary.com/daog6scxm/image/upload/v1744893943/cms/ai-agents/ai-agentic-workflows/Reactive_Execution_ual9k3.webp "Reactive Execution")

So, rather than defining how to solve a problem in advance, reactive execution agents wait for something to happen and then decide what to do in response. This makes them ideal for event-driven workflows, such as anomaly detection, triaging issues, or responding to alerts.

They might then use a range of tools to take appropriate action, depending on which tools and functions we make available to them.

The key elements of a reactive execution agent are:

- A `listener` - to detect events and incoming data.
- A `classifier` - to determine the nature, intent, or type of the input.
- A `responder` - to select and carry out the required actions.
- A `state tracker` to retain short-term context or session data, if required.

### Iterative refinement

Lastly, we have `iterative refinement` patterns. These are centered around producing an initial output, evaluating its quality and completeness, and then improving it through repeated cycles.

![Iterative Refinement](https://res.cloudinary.com/daog6scxm/image/upload/v1744893942/cms/ai-agents/ai-agentic-workflows/Iterative_Refinement_mafmoh.webp "Iterative Refinement")

The idea here is that, rather than arriving at the perfect result immediately, the agent refines its output until the desired standard is reached.

As such, this pattern is best suited to scenarios where the task at hand is open-ended, quality-sensitive, or even creative. For example, drafting documents, generating code, tuning configurations, or other tasks where there is no singular correct answer.

Refinement agents commonly use evaluators, feedback loops, and memory or versioning systems to compare current and previous outputs. The core components are:

- An `initial generator` - which drafts the initial response.
- An `evaluator` - to assess the quality of this.
- A `refiner` - to make targeted improvements based on feedback.
- A `controller` - which determines if the result is sufficient or if more refinement is needed.

## Agentic AI use cases and examples

Armed with a better understanding of the most common design patterns for AI agents, we can now move on to thinking about some real-world examples of this.

As we’ve said already, it would be impossible to give a full account of every single use case for agentic workflows.

So, instead, we’ve selected three common examples that are illustrative of what we’ve learned so far, to help solidify our understanding.

### Automated employee onboarding

First, a common example of a planning agent is within employee onboarding workflows. When a new colleague joins the organization, several administrative tasks must be completed across IT, finance, and HR teams, as well as the hiree’s specific department.

For instance, setting up payments, creating IT credentials, conducting any necessary training, and ordering equipment.

While this is also a common use case for traditional automation tools, non-agentic solutions would still require a far higher degree of human involvement.

Here’s a breakdown of how we can apply an agent with a planning pattern to this workflow.

1. **Trigger received** - The agent is activated by a new employee record being created in the HR system.
2. **Goal identified** - Ensuring the hiree is fully onboarded by their start date.
3. **Task decomposition** - The agent breaks onboarding down into granular tasks, such as email set-up, granting software access, scheduling introductions, and organizing salary payments.
4. **Sequencing and scheduling** - Dependencies are analyzed, and tasks are scheduled. For example, an email account must be set up before VPN access can be granted.
5. **Execution** - Tasks are executed through tool calling with connected systems, such as ITSM, identity management, HR, finance, and other platforms.
6. **Monitoring and adjustment** - The agent monitors for blockers and issues, making adjustments as necessary. For example, ordering an appropriate device if none are available.
7. **Completion** - Once all tasks are completed, confirmation is sent to HR and the hiring manager that the employee is ready to start.

Employee onboarding is a great example of a workflow that benefits from the agent’s ability to reason about the dependencies within underlying tasks and adapt dynamically to change, in much the same way that a human user would.

### Ticket triage assistant

Another popular use case for agentic AI is handling incoming tickets, especially within IT or other internal service teams. When new tickets are received, the initial challenge is analyzing them to understand their severity and which colleagues are best positioned to deal with them.

This is known as triage.

Triaging tickets is a great example of a reactive execution pattern, as the agent continuously listens for new submissions and reacts in real time when these are submitted rather than strategizing beyond its next immediate action.

Here’s how we can apply a reactive execution agent to triage incoming tickets:

1. **Event trigger** - A user submits a new ticket or service request.
2. **Classification** - Using NLP and appropriate knowledge resources, the agent categorizes and prioritizes the issue. For example, password resets, hardware issues, etc.
3. **Metadata tagging** - Relevant tags are added to the ticket according to defined business rules.
4. **Routing** - The ticket is assigned to the relevant support queue according to its classification and severity.
5. **Initial response** - The submitter receives an automated response confirming receipt of their ticket and an estimated lead-time for resolution.
6. **Looping** - The agent returns to the listening state and is ready for new tickets.

Reactive execution agents are ideally positioned to automate ticketing workflows due to their ability to operate quickly at high volumes in situations where rapid, context-aware decisions are required.

### Drafting knowledge base articles

Lastly, drafting knowledge-based articles is a strong example of a workflow that can be effectively managed using agents with an iterative refinement pattern.

For instance, once a technical issue has been resolved, we may employ an AI agentic workflow to use learning to solidify internal knowledge around this, including building relevant documentation.

As an example of a process where there is no singularly correct outcome, it’s important to have a solution in place that supports ongoing refinement, along with human input for the resources created.

We can achieve this using:

1. **Trigger** - A support ticket tagged as requiring a knowledge entry is closed.
2. **Initial generation** - The agent uses ticket content, resolution notes, and other available information to draft a knowledge base entry.
3. **Evaluation** - The draft is reviewed for clarity and accuracy. The agent may also incorporate feedback from previously accepted articles.
4. **Revision looping** - The agent improves the text, including its language and technical content. The loop may be repeated until a quality threshold is reached. Human feedback may also be used.
5. **Versions and QA** - The agent may store and manage previous versions of its draft.
6. **Finalization** - Once the article is finalized, it may be published to the knowledge base or flagged for human approval, depending on internal business rules.

Drafting knowledge entries requires a high level of contextual awareness to reach an objective where there is no clear binary correctness, making iterative refinement agents an ideal addition to human users.

## Agentic AI architecture, tool stacks, and solutions

With a solid understanding of some of the most common situations where AI agentic workflows can be applied, the next thing to consider is how we can actually implement solutions in the real world.

In other words, from a technical point of view, how do we go about building agentic systems?

To answer this question, we can consider the available architectures, tool stacks, and solutions.

### Agentic AI architecture

First of all, we know already that AI agents are modular systems, with distinct, specialized components that align with the underlying structure of workflows. 

To understand how to account for this in the real world and select specific tools for each of these components, it’s important to consider the broader architecture of agentic AI solutions.

Like other types of software solutions, it’s helpful to think of this in terms of the *layers* - the logical groupings of functions and responsibilities within a system that define how it operates.

Just as a more traditional software tool, like a web app, has data, interface, and process layers, we can describe agent systems in a similar fashion.

The following are the layers of an agentic system that we’ll need to account for.

![AI Agentic WOrkflow Architecture](https://res.cloudinary.com/daog6scxm/image/upload/t_square/v1744893944/cms/ai-agents/ai-agentic-workflows/Agentic_Architecture_Diagram_dwwguq.png "AI Agentic Workflow Architecture")

The `Interface Layer` enables the agent to interact with the outside world, including communication with human users, software systems, and environments. This includes accepting and analyzing inputs.

Interface layer functions include:

- Capturing and interpreting user or system inputs.
- Normalizing inputs into structured data.
- Initiating agent workflows.
- Returning the formatted outputs to the right places.

The `Cognitive Layer` provides logic and reasoning capabilities within an AI agentic workflow. This leverages LLMs to understand tasks, make decisions, and react to the context in which they operate.

Cognitive layer functions include:

- Decomposing goals.
- Classifying inputs.
- Sequencing tasks.
- Selecting tools.
- Quality checks.

The `Execution Layer` is responsible for putting our agent's plans into action. This interfaces with the tools and functions that we’ve exposed the agent to, in order to trigger any required tasks and actions.

Execution layer functions include:

- Task execution.
- Tool invocation.
- API calls.
- File handling.
- Downstream trigger.

The `Feedback & Memory` layer stores both short-term and long-term memory, as well as handling feedback loops for continual improvement or iterative actions.

Feedback & memory layer functions include:

- Tracking progress.
- Remembering user preferences.
- Learning from interactions.
- Storing outputs from previous interactions.

The `Data & Integration` layer may be bundled together with the feedback & memory layer, but can also be treated on a standalone basis. This provides access to knowledge bases, structured data, CMDBs, or other relevant resources.

Data & integration layer functions include:

- Data lookups.
- Enrichment.
- System of record integration.
- Context retrieval.

### Tool stacks for agentic workflows

With a good grasp of the underlying architecture of agentic systems, we can now think about how to select the right tools to implement this within our own workflows.

For this, we’ll need to understand the core technical capabilities we’ll need and how each of these fits into the wider agentic AI system.

*LLMs and reasoning engines* form the core of agentic systems, including interpreting inputs, making decisions, and generating outputs. These also enable agents to understand language, formulate plans, and interact naturally with users.

LLMs include the likes of ChatGPT, Claude, and Mistral and provide the reasoning behind AI solutions. We can also use routing tools within our solutions to determine which model is most appropriate in a given context.

*Agent frameworks* are used to coordinate agent behavior, including task decomposition, memory access, tool routing, and multi-agent collaboration. So, tools like LangChain, CrewAI, and AutoGen help to organize complex workflows by connecting distinct modules.

*Task and workflow runners* ensure that planned steps are carried out reliably and in the right order. This bridges logic and action, ensuring that agent behavior remains traceable, with tools like Temporal, Prefect, and Airflow handling orchestration, timeouts, retries, and dependencies.

*Knowledge and memory stores* power long and short-term memory for AI agentic workflows. Vector databases like PineCore and Weaviate power retrieval-augmented generation, while SQL and NoSQL tools can be used to store task states and histories.

*Tool interfaces and system integrations* allow agents to interact with third-party platforms using APIs, webhooks, or SDKs. We might also connect to *identity management, auth,* or *secrets* management tools to enforce access controls for agents and users alike.

*Monitoring and observability* provide visibility into agent performance, behavior, and success/failure. Specialized tools like LangFuse and OpenTelemetry assist with this, offering real-time insights into what agents are doing, how, and why.

### Real-world agentic AI solutions

We’ve just covered some pretty extensive ground with regard to the technical side of implementing AI agentic workflows.

Before we wrap up, it’s worth solidifying this by running through some options for how we might implement agentic systems in the real world.

Specifically, we can think about this in three categories.

`Single-agent systems` comprise a single autonomous agent handling an entire end-to-end workflow. These offer the simplest implementation but are mainly suitable for well-bounded, reasonably consistent use cases, such as IT onboarding.

`Multi-agent systems` are more complex, utilizing a team of specialized agents with distinct roles. For instance, we might have one planning agent and multiple agents responsible for executing different tasks, depending on which of these are required.

While more complex to implement and manage, these kinds of systems are more suitable for complex, multi-faceted, or irregular workflows, where resolutions may vary across individual instances - like handling tickets or change requests.

Alternatively, `embedded agents` are lightweight, task-specific agents that can be integrated within existing services, applications, or other solutions. These don’t necessarily automate entire workflows but can be helpful for streamlining high-volume tasks.

For instance, adding agentic categorization and triage to an existing ticketing solution.

## Looking to the future

According to [Gartner](https://www.gartner.com/en/articles/ai-agents/), a third of new enterprise software applications will incorporate agentic AI by 2028, up from 1% in 2024. So, in the coming years, AI agentic workflows will become a daily reality for employees across all industries.

This presents huge opportunities and challenges alike. On the one hand, this is a unique chance to be an early adopter of a revolutionary technology. On the other, this is a fast-moving space, and it can be incredibly difficult to navigate.

As such our priority must be to strategically embrace change, selecting the right tools, fostering a culture of innovation, and ensuring that appropriate governance is in place to empower the right colleagues with new agentic ways of working.