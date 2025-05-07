+++

author = "Ronan McQuillan"
date = 2025-05-07
description = "Take a look at our round-up of the top open-source LLMs."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "10 Open-Source LLMs"

+++

AI is becoming an integral part of more and more software projects. However, building effective, production-ready solutions relies on having the right model to power our application.

Naturally, this requires us to determine which model is best positioned to meet our technical requirements. Depending on our needs, this will either mean embedding the model in our app, or calling out to an external model via its API or MCP server.

Today, we’re exploring an important segment of the market, as we check out the top open-source LLMs.

See, a huge challenge with developing AI-powered tools is the cost. In particular, calls out to external, commercial models can add massively to the lifetime cost of applications.

As such, more and more teams are opening for open-source options. Today, we’re covering everything you need to know, including:

- [What is an open-source LLM](#what-is-an-open-source-llm)
- [Why opt for an open-source LLM](#why-opt-for-an-open-source-llm)
- [Key use cases](#key-use-cases)
- [Top 10 open-source LLMs for 2025](#top-10-open-source-llms-for-2025)

Let’s start with the basics.

## What is an open-source LLM?

An open-source LLM is a large language model with publicly available source code. We can contrast this with commercial models, which we can use without necessarily having much insight into how they’re built.

Depending on the specific model’s license terms, this can have a few key practical implications.

Firstly, we can typically use the model for free, including for commercial purposes. However, we’ll need to carefully consider any restrictions that are placed on commercial usage, as well as whether a paid plan might be more suitable for specific use cases.

Open-source models can also offer a greater amount of flexibility, allowing us to inspect, modify, and host them as we wish, as well as making it easier to swap out different models during the development process.

To better understand what this means in practical terms, it’s helpful to take a step back first. So…

### What are LLMs?

A large language model is an AI model that has been trained on large amounts of data in order to learn patterns within textual information. 

This enables the model to understand the relationships between words, spot patterns, parse intent, and generate human-like text.

This can be used for a wide range of applications, such as creating virtual assistants, implementing logic and reasoning, translating text, working with documents, and much more.

The majority of LLMs rely on what’s known as a *transformer architecture*. This essentially means that the model can deal with individual parts of a document or piece of text in parallel, in order to represent the nuance and structure of natural language.

This relies on enormous sets of data, ranging to hundreds of billions of parameters, meaning LLMs require huge computational resources to train. 

Once trained, though, they can often be fine-tuned or optimized for particular domains, allowing developers to deploy them for highly specific use cases.

### What does it actually mean for an LLM to be open-source?

This is one area where a decent amount of confusion can arise. For traditional software, the key implication of an open-source license is that we can read the source code, trace functions, and understand how a product works.

Unfortunately, with an LLM, the situation is somewhat different.

The key difference here is that LLMs largely comprise *model weights*. These are vast matrices of floating-point numbers that represent the statistical relationships the model learned during training.

In and of itself, this may not be particularly helpful, as model weights aren’t human-readable. That is, we can’t inspect a sequence of billions of numbers and expect to understand why a model responds to our prompt in a certain way.

As such, a truly open-source LLM typically offers visibility into a wider set of components, including:

- **Model weights** - The learned parameters that inform the model’s output.
- **Architecture code** - The neural network’s configuration, including layers and attention mechanisms.
- **Training code** - The scripts and architecture that are used to train the model. 
- **Training data** - Insight into the information that is used to train the model, which is crucial to understand biases and limitations.

In practice, the extent of visibility into each of these elements will vary from one model to the next.

## Why opt for an open-source LLM

First, though, it’s helpful to flesh out our understanding of why development teams prioritize open-source models.

Luckily, we’ve already hinted at some of the key ideas here.

The big one is cost. Commercial models like OpenAI’s GPT or Anthropic’s Claude generally charge on a per-token basis. This means that costs can easily balloon at scale, especially with large or high-volume requests.

By contrast, open-source LLMs can be run on our own infrastructure, eliminating the need for usage-based fees. For organizations that are already paying for cloud compute, this can work out much more cost-effectively.

However, cost isn’t the only concern here. Indeed, teams opt for open-source models for a range of reasons, including:

- Full control over deployment and data.
- Greater ability to customize and fine-tune.
- Transparency for auditing and debugging.
- No dependency on third-party run-time or policy changes.
- Avoiding vendor lock-in.
- Enforcing heightened security, governance, and compliance controls.

So, on the whole, open-source models offer a flexible, adaptable basis for teams to build AI-powered solutions, especially in scenarios where security, control, or ongoing costs are priorities.

## Key use cases

To illustrate this, it’s helpful to consider some of the most common ways that open-source LLMs are leveraged in real-world application projects.

These span a range of industries and internal functions. However, what’s important is the underlying themes. Some of the top use cases for open-source models include:

- Internal knowledge assistants,
- Document summarization & semantic search,
- Workflow automation,
- Usage within development processes,
- Classification & tagging,
- Data parsing and extraction from unstructured inputs,
- Autonomous agents and conversational chatbots,
- Structured output synthesis.

However, it’s also important to consider the context in which these functions are performed.

Remember, these include use cases with large transaction volumes or more heightened security requirements around our internal data assets.

For example, the former often could include internal service delivery workflows, such as ITSM tasks, where process documentation is relatively sensitive.

Similarly, open-source LLMs are preferable for a range of internal and external-facing workflows that require operating at a scale where commercial models would be financially unviable. That is, if the value we see per transaction would not overcome the cost of a COTS model.

You might also like our round-up of the top [open-source AI agent platforms](https://budibase.com/blog/ai-agents/open-source-ai-agent-platforms/).

## Top 10 open-source LLMs for 2025

With a strong grasp of what open-source LLMs are, what they offer, and how they’re used, we can begin to check out some of the most prevalent options that are available today.

It’s important to note that no single model stands head and shoulders above the rest for every possible use case. Rather, the key thing to recognize is that each has its own target personas and optimization focus.

Therefore, the challenge is ascertaining which model is most appropriate for each individual scenario. To reflect this fact, we’ve chosen a range of open-source LLMs, covering a wide scope of target usages.

These are:

1. [Phi-3 (Mini / Small)](#1-phi-3-mini--small) 
2. [Mistral 7B](#2-mistral-7b)
3. [Command R+](#3-command-r)
4. [Gemma](#4-gemma)
5. [Nous Hermes 2](#5-nous-hermes-2)
6. [Jamba](#6-jamba)
7. [Mixtral 8x7B](#7-mixtral-8x7b)
8. [OpenChat 3.6](#8-openchat-36)
9. [OLMo 2](#9-olmo-2)
10. [Dolphin 2.9](#10-dolphin-29)

Let’s check each one out in turn.

### 1. Phi-3 (Mini / Small)

Offered under the MIT license, Microsoft’s Phi-3 model is optimized for low-latency, resource-efficient reasoning tasks. The Mini and Small versions of this are designed specifically for environments with limited computational resources, offering lightweight, powerful solutions.

This makes it a popular option for domain-specific workflows or tasks that need to be deployed to edge devices. For example, small-scale conversational agents or decision-support systems. It’s also well suited to scenarios where high compute costs might otherwise be a barrier.

However, with their focus on resource-constrained environments, Phi-3 Mini & Small may be less suited for situations where scalability is a top concern. For example, applications requiring particularly high transaction volumes or intricate contextual awareness.

### 2. Mistral 7B

![Mistral 7B Open Source LLM](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/Mistral_7B_w898lc.webp "Mistral 7B Open Source LLM")

Mistral 7B is a 7.3 billion parameter model with impressive performance numbers across a range of benchmarks for language processing tasks, code generation, and more, even outperforming some well-known competitors.

It also offers a high degree of flexibility for fine-tuning, making it a popular choice for use cases like chatbots, where developers don’t want to incur the comparatively high computational overhead that would come along with a larger model.

Despite this, there are a few potential downsides. 7B’s parameter count restricts the knowledge it can store compared to larger models. It’s also somewhat prone to hallucinations and doesn’t include moderation mechanisms. So, it may need additional safeguards for more sensitive use cases.

### 3. Command R+

![Command R+](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/Command_R_xlz3iv.webp "Command R+")

Cohere’s Command R+ is an enterprise-grade model, designed specifically for RAG and multi-step workflow use cases within businesses. It can be used on an open-source basis for R&D purposes only, under the CC-BY-NC license. Commercial licenses are also available.

Command R+ excels in scenarios requiring advanced answer generation, document summarization, and external tool use. This positions it well to handle a range of internal and external service management workflows.

In addition to requiring a commercial license for certain uses, Command R+ also has a relatively high computational requirement, as a model with over 104 billion parameters. As such, it might be prohibitively expensive for some teams.

### 4. Gemma

![Gemma](https://res.cloudinary.com/daog6scxm/image/upload/v1746622440/cms/ai-agents/open-source-llms/Gemma_l3ncc0.webp "Gemma")

Google’s Gemma family of LLMs is designed to be lightweight and efficient, while operating on the same research and technology as the better-known Gemini models. There are Gemma models ranging from 2 to 27 billion parameters.

Due to their lightweight nature and multi-language support, Gemma models are well-suited to tasks such as text generation, summarization, and translation on a range of platforms, including mobile devices and single-GPU systems.

However, Gemma models are open-weight, but arguably not truly open-source. While license restrictions are relatively permissive, some community members still complain that this may restrict certain commercial use cases. So, you’ll need to review this carefully for your needs.

### 5. Nous Hermes 2

Nous Hermes 2 is another open-weight LLM, built on various architectures, including Llama 2 and Mistral, as well as utilizing GPT-4 generated training data. It’s available in a variety of configurations to support different levels of computational resources.

One key strength is its ability to handle high-fidelity instructions and multi-turn conversations, making it ideally suited to RAG use cases or chatbots that require more complex contextual awareness.

However, some users note issues with the quality of responses. As Nous Hermes 2 is primarily trained on GPT-4 generated data and other publicly available sources, some issues may arise with inheriting biases.

### 6. Jamba

![Jamba](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/Jamba_o11xdq.webp "Jamba")

Released in March 2024, Jamba is a relatively new entrant into the open-source LLM space. Employing a hybrid architecture, it’s an open-weight model with 52 billion training parameters. It’s also well-regarded for its longer-than-average context window.

Jamba is particularly effective for long-form text analysis, complex reasoning tasks, and multi-modal extensions. This makes it a good option for handling complex information, such as internal policies or documentation.

It’s offered under the permissive Apache 2.0 license. However, it’s worth noting that Jamba will require a relatively large computational overhead, compared to many other open-source large language models, owing to its somewhat larger parameter count.

### 7. Mixtral 8x7B

Mixtral 8x7B by Mistral is a somewhat novel option compared to some of the other models we’ve seen. It’s an open-weight LLM, offering a sparse mixture-of-experts model. It contains 46.7 billion, but only 12.9 billion are active per inference step.

It also offers a 32,000 token context length. On the whole, this makes 8x7B a strong pick for tasks that require extensive, structured reasoning, including advanced RAG apps, [enterprise chatbots](https://budibase.com/blog/ai-agents/enterprise-chatbots/), and document-centric workflows.

Again, though, as an open-weight model rather than a fully open-source one, this may preclude it for certain applications. 8x7B also has particularly high hardware requirements and may need high-end infrastructure to deploy production solutions.

### 8. OpenChat 3.6

Next up, we have OpenChat 3.6, part of the wider OpenChat series of releases. It utilizes a tuning technique called *Contrastive Preference Optimization* (CPO) to enhance helpfulness, harmlessness, and honesty, without sacrificing performance.

This enables it to align outputs closely with user intent, while still maintaining safety and performance. As such, OpenChat is highly suited to use cases of human-AI dialog, such as customer-facing chatbots.

OpenChat 3.6 inherits the Llama 2 Community license, which permits restricted commercial usage up to 700 million monthly active users. It’s also worth noting that computational resource requirements could inhibit usage within constrained environments.

### 9. OLMo 2

![OLMo 2](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/OLMo_2_euzbvt.webp "OLMo 2")

Released by the Allen Institute for AI in early 2025, OLMo 2 is an R&D focused open-source LLM. The developers prioritize openness and transparency, aiming to facilitate research, reproducibility, and innovation within the AI community.

It’s available under the Apache 2.0 license, with 7 billion or 13 billion parameters and base-tuned or instruction-tuned versions. It’s a strong option for research and development tasks, education, or as a basis for creating custom, domain-specific models.

However, OLMo 2 may not be suitably optimized for production use cases. It also lacks the commercially-focused ecosystem that some other tools offer for business usage, such as integration options or out-of-the-box tools.

### 10. Dolphin 2.9

Lastly, we have Dolphin 2.9. This is an open-weight model, built on top of the Llama 3 architecture, designed to be used as a basis for building custom models for commercial use cases. It’s offered with 8 billion or 70 billion parameter sizes.

It offers a high level of capabilities for complex conversational tasks, as well as tool/function calling, making it a strong offering for [AI agentic workflows](https://budibase.com/blog/ai-agents/ai-agentic-workflows/).

Dolphin 2.9 uses the Llama 3 license, meaning it’s available for commercial usage, but we’ll still need to keep abreast of certain restrictions. It’s also designed to be uncensored, so developers may need to develop their own safeguards and moderation measures.

## Build AI-powered tools on top of any data with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action. We offer connectivity for all kinds of APIs, RDBMSs, NoSQL tools, and LLMs, with autogenerated app UIs and powerful, visual automations.

There’s never been an easier way to build secure, performant internal tools. Take a look at our [features overview](https://budibase.com/product/) to learn more.