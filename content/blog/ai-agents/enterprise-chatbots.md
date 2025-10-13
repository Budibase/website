+++
author = "Ronan McQuillan"
date = 2025-05-01
description = "Take a look at our comprehsive guide to enterprise chatbots and conversational automation."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What are Enterprise Chatbots? In-Depth Guide"
type = "ai-agents"
layout= "enterprise-chatbots"
[[mentions]]
name = "AI Agents"
sameAs = "https://www.wikidata.org/wiki/Q1142726"
type = "Thing"
+++

Enterprise chatbots are fast becoming a critical part of successful digital transformation strategies in large organizations.

Service portfolios are more complex than ever, cutting across a huge variety of internal departments, processes, and tooling. At the same time, there’s a more urgent need than ever to establish efficient workflows without compromising on security.

Today, we’re exploring one option for dealing with these competing challenges by diving deep into how enterprise chatbots offer a scalable solution for streamlining access to services.

Specifically, we’ll be covering:

- [What is an enterprise chatbot](#what-is-an-enterprise-chatbot)
  - [How is this different from any other chatbot?](#how-is-this-different-from-any-other-chatbot)
  - [Benefits of enterprise chatbots](#benefits-of-enterprise-chatbots)
  - [Implementation challenges](#implementation-challenges)
- [How do users interact with enterprise chatbots](#how-do-users-interact-with-enterprise-chatbots)
- [Top use cases for enterprise chatbots](#top-use-cases-for-enterprise-chatbots)
- [Enterprise chatbot architecture](#enterprise-chatbot-architecture)
- [Developing solutions in the real world](#developing-solutions-in-the-real-world)

Let’s start with the basics.

![Enterprise Chatbots](https://res.cloudinary.com/daog6scxm/image/upload/v1746087930/cms/ai-agents/enterprise-chatbots/Enterprise_Chatbots_wzfixr.webp "Enterprise Chatbots")

## What is an enterprise chatbot?

Enterprise chatbots are AI-powered software agents designed specifically for use within large organizations.

These act as virtual assistants, using operational procedures, internal tooling, process documentation, and other resources to assist colleagues, customers, and partners with resolving service requests toward different functions across the entire organization.

The idea is that users have a single point of contact to initiate all of the workflows that we make available to them. More importantly, though, the chatbot approach allows them to do this in natural language.

So, rather than stating the workflow or named service that they want to trigger explicitly, users can approach chatbots with their underlying problem. The system will then determine what course of action is appropriate based on available resources.

On top of this, modern enterprise chatbots are capable of actually taking the actions that they’ve determined are needed, whereas traditionally, we might think of chatbots as being entirely related to back-and-forth communications.

That leads us to…

### How is this different from any other chatbot?

Knowing that enterprise chatbots are more capable of autonomous reasoning and action than other tools, we can drill a little bit deeper into the specific characteristics that underlie this.

Here are three defining characteristics that we need to be aware of.

||||||||||

#### Conversational automation

Conversational automation means using AI to automate interactions between humans and software systems in a natural, two-way conversation. In the first instance, this relies on natural language processing (NLP) to determine the intents, entities, and context of interactions.

An LLM is then used to determine the appropriate course of action, as we’ll see under the following heading.

The important thing to understand about conversational automation is that it enables users to trigger actions and workflows using natural language.

We can contrast this with both traditional automation tools and non-chatbot-based AI solutions. 

For example, a typical flow for AI-driven ticket categorization might still require a service user to submit a form in order to gather structured data about the issue. The schema of this will normally be different for different kinds of issues and service requests.

So, the user needs to know which form to fill in, what all of its fields mean, and what is expected for each one. 

With conversational automation, users can describe the issue they’re facing in their own words, and the chatbot will parse the information it needs from this using NLP. If needed, it can also follow up for more details or clarification.

This provides a more streamlined, user-friendly experience, as well as enabling users to interact with a single tool for all requests or issue types.

#### Autonomous reasoning & actions

Enterprise chatbots should also be capable of autonomous reasoning and action. In plain terms, this means that it can determine what steps are required to solve a user’s problem and then actually perform them, without human intervention or oversight.

This is powered by an LLM, which will typically be exposed to information relating to company policies, processes, and operating procedures, alongside details of previous successful resolutions for similar requests.

So, once the NLP has determined what the user requires, the LLM is able to use its training data to decide what actions are needed to provide this.

We can see this play out in two concrete ways. Firstly, whereas more basic chatbots might follow strictly linear, scripted interactions, enterprise chatbots are capable of providing unique, contextually aware responses in real-time.

Secondly, enterprise chatbots are able to take autonomous action. This relies on what’s known as *tool calling* - sometimes also referred to as *function calling*. 

Essentially, this means that we provide the chatbot with API endpoints that can be triggered to take certain actions. For example, within our ERP, CRM, or ITSM platform. This means that we’re still enforcing guardrails on what actions the system can take.

In other words, we provide our chatbot with a set of functions that can be performed across whichever systems we choose to connect to it. 

In the course of real-world interactions, it can then execute whichever of these it determines are required to meet the end-user’s requirements.

#### Reflection, learning & continuous improvement

Lastly, enterprise chatbots can be distinguished by their ability to reflect on interactions, learn from previous outcomes, and use this knowledge to improve experiences going forward.

This relies on a combination of *short-term* and *long-term memory*. 

Short-term memory refers to information that’s relevant to the current session. This is what enables the chatbot to recall information the user has previously given them within a conversation, and make better, more contextually aware decisions.

More importantly, long-term memory empowers chatbots to learn from previous interactions by storing past experiences and knowledge, helping them to build knowledge and improve decision-making over time.

At a basic level, this makes chatbot solutions more efficient, meaning they’ll be able to solve users’ issues more quickly. 

Additionally, long-term memory makes it possible for chatbots to maintain continuity across multiple interactions, opening the door for them to work on more complex, long-term, or cognate tasks and projects.

### Benefits of enterprise chatbots

With all of this in mind, it’s important to understand the more practical, business-level side of enterprise chatbots. In other words, how can we quantify the value that they bring to organizations?

We said at the outset that, for more and more businesses, chatbots and conversational automation tools are becoming a core digital transformation strategy. We can see them replacing both human service agents and traditional automation flows.

The reasons for this include:

- **Efficiency** - Enterprise chatbots enable service delivery teams to handle high-volume interactions with fewer resources, helping to reduce operating costs.
- **Availability** - As we’re not bound by core business hours, enterprise chatbots can be available 24/7.
- **Scalability** - Systems can be quickly scaled up, without incurring the outsized costs that would be incurred by adding additional service agents.
- **Working in complex environments** - Enterprise chatbots are highly suited to working within complex environments and service portfolios, including real-time connectivity to relevant tools and information sources.
- **Accuracy & consistency** - This includes eliminating the potential for human error within workflows.
- **Improving service performance** - Enhancing resolution times and service quality across targeted workflows.
- **User experiences** - Providing users with a single point of interaction for all provided services.
- **Enhanced decision making** - Enterprise chatbots can provide useful data and insights that can help to shape future decisions and resource allocation.
- **Security, auditability & compliance** - Users can securely interact with a range of internal systems through a single, conversational interface.

In short, utilizing enterprise chatbots empowers teams to build highly efficient, scalable internal processes without undermining user experiences or security concerns.

### Implementation challenges

However, it’s important to note that, like any transformation initiative, none of these benefits are guaranteed. It’s important to understand that these are highly complex systems. Therefore, successfully seeing ROI hinges on a range of technical, financial, and operational factors.

Some of the key challenges we’re likely to face include:

- **Initial outlay** - Developing enterprise chatbots can be a large undertaking, potentially requiring a relatively high upfront investment before we see any value.
- **Dealing with new technologies** - As systems are reliant on a range of new tools and technologies, basic decisions like choosing vendors and toolstacks can be incredibly tricky.
- **Process documentation** - Enterprise chatbots rely on efficiency and well-documented processes as prerequisites.
- **Managing integrations** - Effective chatbots are reliant on a large, complex set of integrations in order to enable systems to take required actions to resolve user’s issues.
- **Testing, iteration & maintenance** - Testing, updating, or maintaining systems can present issues compared to traditional development techniques.
- **Observability, oversight & auditing** - We’ll need to put appropriate measures in place to ensure visibility and accountability across autonomous systems.
- **Governance, security & compliance** - Enterprise chabots must be subject to the same security and governance constraints as other solutions, including enforcing appropriate access controls.
- **Managing dependencies** - Many systems will have a large network of dependencies, where changes in one platform could have far-reaching impacts.
- **Handling edge cases** - Without appropriate measures in place, fringe cases may not be resolved effectively by autonomous systems.
- **Internal resistance to change** - Many organizations might find it culturally difficult to implement enterprise chatbots, particularly where there are concerns about negative impacts on human service agents.

Importantly, none of these are deal-breakers. 

Rather, as with any other transformation initiative, the key is having a clear picture of the real-world implications of deploying enterprise chatbots, in order to make an informed decision about their viability for specific scenarios and use cases.

## How do users interact with enterprise chatbots?

So far, we’ve alluded several times to the fact that chatbots provide end users with a single, simplified experience for initiating internal workflows.

In order to better understand what this might look like in a real-world setting, it’s vital to understand the practical side of how and where users will interact with our solution.

There are two key configurations that we might opt for here - either deploying purpose-built interfaces or relying on existing communications channels.

||||||||||

Let’s think about each of these in turn.

### Self-service portals

Self-service portals are internal tools that empower end users to access information about or trigger available workflows.

The most basic versions of these allow users to search available services, read their documentation, and submit requests to initiate these. This might then rely on an automated or human-led workflow to resolve.

One of the most popular options for interacting with enterprise chatbots is to provide purpose-built interfaces within our existing self-service portals. 

The principle here is empowering users to manage their entire request from end-to-end in a wholly chat-based experience. As such, the top priority is providing a clean, intuitive experience for users to submit natural language prompts and read the chatbot’s responses.

So, UIs are generally relatively lightweight, consisting primarily of a textbox and read-outs for responses. We’ll often also see additional elements for things like viewing previous interactions, tracking statuses of ongoing requests, or escalating to a human agent.

One benefit of this approach is that, by wrapping our enterprise chatbot in an existing portal, we’re making the purpose of our solution clear to users, replicating the experience they might otherwise have with live-chat tools for support or service request workflows.

Chatbots that are focused on specific subsets of workflows or services also help users intuitively understand which services can be accessed. For example, if we have an ITSM-specific solution that lives within our IT self-service portal.

It’s also helpful for external-facing workflows, as we don’t need to require end users to have access to a specific existing platform.

### Existing communications channels

An alternative approach is to rely on existing communications channels to facilitate interactions between users and chatbots.

So, rather than accessing a dedicated tool, users can initiate interactions using an instant messaging platform, such as Teams or Slack. We’ll use our messaging platform as an interface, connecting to our chatbot via APIs or websockets.

This provides a more natural-feeling experience, as users can interact with our chatbot in much the same way as they would a human agent. 

That is, triggering our chatbot will feel just like pinging a colleague.

Because of this, wrapping enterprise chatbots within existing communications tools can often be the preferred option for end users and admins alike. For instance, we don’t need to handle authentication, access, or training for an entirely new interface.

It’s also a strong approach for use cases where our enterprise chatbot has a wide mandate, including internal services across all departments. This gives users a truly centralized experience for accessing any kind of service.

However, there are a couple of key limitations to this approach, too.

For one thing, we have less control over the UI. For example, it would be more difficult to add additional elements for things like tracking the status of ongoing requests.

On top of this, relying on existing tools for our chatbot can be of more limited use to external-facing workflows. 

That is, it could be more difficult to provide customers or suppliers with access to a Slack or Teams channel than it would be for them to use a dedicated web UI.

However, it’s worth noting that there’s no singularly *better* option here. Rather, the key thing is that each approach offers distinct advantages and disadvantages, which must be understood when planning a situation in the real world.

## Top use cases for enterprise chatbots

With a strong understanding of how enterprise chatbots operate and how users interact with them, we can begin to consider some of the real-world situations that we might apply them to.

As we said earlier, the overarching priority here is providing streamlined, efficient access to services, either internally or externally.

With this in mind, a good jumping-off point for thinking about more specific workflows is to break these down into the most common service functions within large enterprises.

### ITSM

IT is perhaps the department with the most complex, far-reaching service portfolios. In the modern enterprise, it’s also a critical value center, facilitating the daily workloads of colleagues across all other teams.

Therefore, effective delivery of IT services is a top priority. This includes day-to-day delivery of agreed services such as resource provisioning, as well as maintaining access to resources and tools across the IT environment.

At the same time, what makes ITSM uniquely challenging is the knowledge gap between service users and agents. That is, users rely on services, resources, and infrastructure that they often have little to no understanding or even awareness of.

They just know the problem they’re facing at any given moment.

The core value of enterprise chatbots for ITSM is autonomously handling common, repetitive workflows while handing off to a human agent for more complex or sensitive issues.

Examples of common workflows could be things like password resets, basic hardware troubleshooting, access requests, ticket submission, or device rentals.

Chatbots can then still assist human agents with more complex requests. For instance, by summarizing requests, performing routing, or triaging requests related to issues that can’t be resolved automatically, such as major troubleshooting, bugs, outages, or security incidents.

This approach enables faster resolution for day-to-day service requests, as well as freeing up human agents to work on more challenging tasks, while providing a seamless, streamlined experience for end users.

### HR

HR is another major provider of internal services. However, the challenges here are somewhat different from ITSM. 

The most common HR services include things like updating an employee’s details, vacation requests, grievance procedures, salary-related tasks, onboarding, and day-to-day queries around internal policies and procedures.

One clear differentiator here compared to IT is that most colleagues will have a much better understanding of how HR services work, so we don’t face the same issues relating to knowledge gaps.

For example, an employee will more than likely simply know that they need to update their contact details.

However, HR also faces unique challenges of its own. In large part, this relates to the fact that it’s a highly regulated function. 

That is, HR teams are responsible for ensuring that the organization maintains compliance with a huge range of internal and external policies.

This must be accounted for within our enterprise chatbot solutions, both ensuring that our systems are informed by up-to-date, comprehensive policy documentation and providing the appropriate oversight, governance, and accountability measures for our compliance needs.

### Customer service

Customer service is the most important external-facing use case for enterprise chatbots. Naturally, though, the exact nature of this will vary depending on our actual business model.

For example, service workflows differ greatly between B2B service providers and B2C product-focused companies.

In general terms, though, the core use case here is replicating the kinds of interactions that customers would otherwise have with human service agents. For example, initial enquiries, after-sales support, order tracking, returns processing, or payment queries.

Compared to internal services, the priorities here are more tightly focused on the quality of the interaction. That is, we want to provide customers with the fastest possible route to resolving their query.

So, as with IT, we’ll often focus on using chatbots for common queries, but escalate to human customer service agents where necessary.

However, customer service also introduces some unique considerations compared to internal services.

One of these is the need to align chatbot solutions with our wider brand. This largely relates to tone of voice within interactions, although visual design is also more of a consideration than it might be in internal workflows.

On top of this, we might need to consider things like multilingual support or omnichannel interactions across social, email, or web platforms.

### Operations and facilities management

Lastly, many organizations rely on chatbots to handle workflows relating to operations and facilities management. Again, this is an area where there’s a high degree of variability based on the nature of our actual business.

Ops teams can provide a wide range of services that could be targeted towards a specific set of employees or applicable across the entire organization. This includes day-to-day tasks across supply chain management, facilities rentals, maintenance requests, and more.

For example, if a user wants to book a particular meeting room, the chatbot might determine which facilities are free during their request period, confirm which of these will be suitable, and make the booking for them.

Alternatively, we could be dealing with more niche tasks, including process audits, quality control, or resource allocation. In certain organizations, ops could also be responsible for data-related workflows and services.

In all cases, the key challenge is making high-quality, real-time data available to our chatbot.

This is critical for enabling systems to understand both how our internal processes are intended to work and what is happening in the real world. We’ll also need to implement effective security and access control tools to ensure information is only available to authorized colleagues.

## Enterprise chatbot architecture

With a strong grasp of where enterprise chatbots are most commonly deployed and how they provide value, we can begin to think in more detail about what’s going on under the hood.

So far, we’ve talked about this in quite broad terms, while also alluding to some of the key functional elements that are required. 

To solidify this, it’s important to understand the architecture of enterprise chatbots. That is, before we can think about the specific tools and frameworks we might opt for, it’s vital to have a strong grasp of the underlying architecture and design patterns.

The easiest way to think about this is in terms of the wider system’s constituent layers. This enables us to represent the key functional elements of an enterprise chatbot, independently of the specific tools that we choose to implement each one.

||||||||||

The first, which we’ve discussed already, is the `interface layer`. This is what enables the chatbot to communicate with end users or external software systems. At a high level, this accepts and analyzes inputs. 

This is reliant on natural language processing, based on the information submitted by whichever type of interface we choose to present to users.

The interface layer also performs related functions, such as normalizing inputs into structured data and returning the formatted data to the right places in order to initiate specific actions.

Reasoning and decision-making are performed by the `cognitive layer`. This involves leveraging LLMs to understand tasks, react to contextual information, and ultimately, make decisions about how to progress a query.

This requires functions such as task decomposition, planning, input classification, task sequencing, tool selection, and quality checks.

Depending on the specific use case, this may rely on a single LLM, or we might use specific models for different tasks. For instance, one model can be used to process responses and another to plan actions.

In these more complex scenarios, we might also need additional capabilities such as multi-agent orchestration.

Outputs from this are fed to the `execution layer`. This is the part of the system that interfaces with tools and functions in order to perform the required tasks. So, this includes task execution, making API calls, file handling, downstream triggering, and tool invocation.

In order to facilitate learning and continuous improvement, enterprise chatbots also require a `feedback and memory layer`. This is used to store both short-term and long-term memory. This also facilitates feedback loops as well as iterative actions.

More specifically, the feedback and memory layer performs functions such as tracking progress, remembering user preferences, learning from interactions, and storing outputs from previous executions.

Lastly, there’s the `data and integration layer`. This is sometimes bundled together with the feedback and memory layer, but it may also be viewed on a standalone basis.

Essentially, the goal here is to provide our chatbot with access to relevant data, information, and resources, to be used as context or to augment generation. For instance, dealing with knowledge bases, CMDBs, internal policies, structured data, or other relevant resources.

Functions here include data lookups, enrichment, system of record integration, and context retrieval.

Depending on our specific requirements, the relative importance and complexity of each of these could vary. To learn more, take a look at our in-depth guide to [AI agentic workflows](https://budibase.com/blog/ai-agents/ai-agentic-workflows/).

## Developing solutions in the real world

While the architectural layers are crucial for understanding the capabilities that allow an enterprise chatbot to work, if we want to apply this in the real world, we must also be aware of the specific technologies that can help us provide them.

Now, it’s important to note that this is an incredibly fast-moving space. In the grand scheme of things, AI is still in its infancy, with new and existing vendors constantly bringing new tools to market.

So, we couldn’t possibly give a comprehensive picture of the entire market, much less recommend the specific tools that you’ll need for a given use case.

Rather, the priority is understanding the role of each piece of the puzzle, and how they contribute to wider systems in the real world.

### Tool stacks

So, to start, we can think about the kind of tool stack we’ll need to create and manage enterprise chatbots. 

Thankfully, we’ve already alluded to most of the components of this already.

||||||||||

 Here’s a fuller account of what we’ll need.

#### LLMs

LLMs are the most central component of any AI-driven system. These are models that have been trained on vast quantities of data, enabling them to recognize and understand patterns within prompts.

Examples include ChatGPT, Mistral, or Claude. Alternatively, some very large organizations might rely on proprietary models.

They interpret chatbot inputs, apply reasoning, make decisions, and generate outputs, including invoking specific functions to reach a resolution. 

Notably, specific models are best suited to different types of tasks. Alongside usage costs, this will form a huge part of the decision-making around which model is most viable for a specific use case.

#### Agent frameworks

Agent frameworks are software platforms that enable us to utilize LLMs to build autonomous systems.

This includes pre-built components, tools, and abstractions to streamline the process of creating AI agents, as well as functionality aimed specifically at managing multiple agents within individual processes.

Some of the top agent frameworks currently available include LangChain, AutoGen, and CrewAI.

Again, different options here can be better optimized for certain use cases and types of solutions or user personas than others.

For instance, some tools might prioritize multi-agent solutions, whereas others could be aimed at enabling non-developers to create agentic systems.

#### User interfaces

From a technical perspective, the UI of our enterprise chatbot might not seem like the top priority, but it’s important to remember that this plays a central role in enabling users to actually interact with our system.

As we said earlier, the two possible approaches here are, broadly, building our own dedicated chat UIs or relying on existing communications tools.

Each of these comes with its own distinct challenges. 

In terms of building dedicated UIs, we obviously have the option of creating these from scratch using hard code. However, in terms of both initial development time and ongoing maintenance requirements, many teams will be better off opting for no/low-code interfaces instead.

To learn more about our options here, check out our guide to the top [open-source low-code platforms](https://budibase.com/blog/open-source-low-code-platforms/).

Relying on existing tools can alleviate some of these problems, but as we’ve seen already this does still introduce new considerations related to authentication and access.

#### Task and workflow runners

Task and workflow runners act as a vital bridge between logic and action.

Their role is centered around ensuring that the planned steps that have been determined by the LLM are carried out reliably and in the appropriate order. In turn, this ensures that the system remains accountable and traceable.

For example, providing capabilities such as handling errors, timeouts, dependencies, orchestration, and retries. Some of the most common tools under this umbrella include Temporal, Prefect, and Airflow.

#### Tool interfaces and system integrations

In order for our chatbot to be able to act autonomously, it must be able to communicate with the appropriate tooling. 

Tool interfaces and system integrations allow chatbots to connect to external systems using APIs, websockets, SDKs, or other methods.

We’ll likely also utilize identity management, secret stores, or auth tools to enforce access controls for agentic systems and end users alike.

In a lot of cases, this could be hardcoded. However, we also have the option of utilizing a wide variety of API management, workflow automation, or other integration solutions.

#### Memory and knowledge stores

We’ll also need to account for the storage tools that will make up our feedback and memory layer. Importantly, this is quite a bit more complicated than simply wiring our chatbot up to a database.

From a storage point of view, we’ll likely require a mixture of structured and unstructured data, for the likes of task histories, states, documents, and other information resources.

On top of this, we’ll require vectorization tools to make external resources comprehensible for our LLM in order to facilitate retrieval augmented generation.

#### Monitoring and observability

Lastly, monitoring and observability tools are used to provide visibility into our system’s behavior, performance, and the success or failure of specific tasks.

While certain frameworks or tool interfaces might provide a degree of visibility here, it’s important to note that one of the primary challenges with enterprise chatbots and AI-based systems more generally is difficulty in achieving effective visibility.

Multiple tools exist to try to get around this problem, including the likes of OpenTelemetry and LangFuse.

Essentially, the goal is to provide real-time insights into what the system is doing, how, and why, in order to better understand and verify their decision-making.

### Deployment and hosting

Deployment and hosting refer to where enterprise chatbots are stored and how users access them.

The most common option here is deploying to the cloud. This offers a high level of accessibility and scalability, as well as reducing the labor that would be required to manage our own infrastructure.

Cloud hosting could also simplify the process of provisioning access, since users can reach our chatbot from any device connected to the internet. This makes it a good option for public-facing use cases.

Alternatively, many enterprises prefer self-hosting. This means that tools are hosted on their own managed infrastructure. 

This is often more suitable for sensitive internal workflows, as we have a greater degree of control over security and access policies, as well as reducing reliance on third-party cloud hosting services.

However, this is slightly more complicated in the case of enterprise chatbots than with most other types of solutions.

The reason for this is that LLMs can have more complex hosting requirements than other tools, owing in large part to their size. So, in many cases, we’ll still be calling out to an external LLM that’s hosted on the vendor’s own infrastructure.

Alternatively, self-hostable LLMs do exist for more security-focused use cases, although the resources required to manage this will also need to be considered.

### Maintenance and lifecycle management challenges

It’s also important to be conscious of how we can manage our enterprise chatbot solution across its broader lifecycle, including some of the key challenges that these types of systems introduce compared to other kinds of software.

One huge consideration here is that chatbots are highly dependent on consistent, up-to-date documentation around our internal policies, procedures, and processes.

The challenge is that these can evolve and change massively over time. Without accounting for this, the effectiveness of our chatbot could be hugely compromised.

As such, it’s important to come up with appropriate solutions to integrate our chatbot with real-world, authoritative sources of information, so that when these are updated, these changes will immediately be reflected in interactions with end users.

As we noted earlier, another key challenge is that chatbots generally come along with large, complex sets of dependencies. For example, changes to the functionality or API endpoints of one constituent tool could have quite large ramifications.

This requires careful planning and monitoring to ensure continuity across agentic systems, even if the underlying tools have been changed. 

We might also potentially employ mitigation strategies, such as implementing fallback processes if an tool/function call does not execute as expected.

You might also like our ultimate guide to [AI forms](https://budibase.com/blog/ai-forms/).

### Enterprise chatbot platforms

When discussing architecture and tool stacks for enterprise chatbots, we largely assumed a manual development project. That is, while frameworks can expedite the process of building agentic solutions for developers, this often still resembles a traditional development flow.

However, this will not be the reality for how many teams output solutions.

Instead, there is a growing market for teams that want to leverage reusability and pre-built elements when developing enterprise chatbots. This means using no/low-code to reduce the need for boilerplate code or other common development tasks.

For example, we might utilize pre-built integrations for common enterprise platforms, such as Microsoft, ServiceNow, Atlassian, or other tools. Or, the bulk of UI-building could be done for us, leaving us to focus on back-end development.

Take a look at our guide to the top [open-source AI agent platforms](https://budibase.com/blog/ai-agents/open-source-ai-agent-platforms/) to learn more about the tools that are available on the market today.