+++

author = "Ronan McQuillan"
date = 2025-05-14
description = "Take a look at our round-up of some of the most prominent self-hosted & local LLMs."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "6 Self-Hosted & Local LLMs"

+++

With fast-advancing technology, running AI models locally is no longer the preserve of massive enterprises or researchers. Today, smaller businesses and even hobbyists are also leveraging self-hosted LLMs within development projects.

Thanks to advances in model quantization, local runtimes and runners, and smaller yet highly capable models, it’s increasingly viable to run LLMs in cloud containers or even consumer hardware.

But, of course, this introduces a range of challenges. One of the biggest is choosing the right model for our needs.

That is, we not only need a model that’s suitable for our use case, but also one that is self-hostable with the compute resources we have available.

Today, we’re diving deep into exactly how to make this decision.

Specifically, we’ll be covering:

- [What is a self-hosted LLM?](#what-is-a-self-hosted-llm)
- [How can you run a model locally?](#how-can-you-run-a-model-locally)
- [Why would we want to host a model locally?](#why-would-we-want-to-host-a-model-locally)
- [What to look for in a self-hosted LLM](#what-to-look-for-in-a-self-hosted-llm)
- [6 self-hosted LLMs for 2025](#6-self-hosted-llms-for-2025)

Let’s start with the basics.

## What is a self-hosted LLM?

A self-hosted LLM is a large language model that runs on your own hardware or infrastructure. This could be a local computer, server, or edge device, or using a containerization service like Docker or Kubernetes.

We can contrast this with commercially available models that are offered as services, where we’re reliant on the vendor’s API.

As such, self-hosting gives us full control over the model, environment, and data, with all inference happening locally. We also usually won’t have to pay a usage fee for making API requests.

Models that are suitable for self-hosting have a few key characteristics in common.

The first of these relates to size. That is, any model we wish to self-host must be of a manageable size to run on consumer hardware. It will also need to support tooling for local usage, as well as having a license that permits self-hosting.

We’ll return to some of the key decision points for choosing a specific model a little later.

### How can you run a model locally?

First, though, it’s worth fleshing out our understanding of the practical side of running an LLM locally. That is, how does this work, and what tools will we need?

The first thing we need to understand is how the hardware we have available will constrain our choice of models. Essentially, our compute resources will determine which models we can run, how they’ll perform, and which actions we can take with them.

This includes RAM/VRAM, CPU/GPU, and storage specs. The broad relationship here is that we’ll need more resources to run models with higher parameter counts, although it's important to check the specific requirements of individual models.

You might also want to cross-reference this with the experiences of other users, as real-world performance can differ from the vendor’s hardware requirements.

We can then download a quantized version of the model. This means it has been compressed and optimzed to run in local environments.

Once we know what our hardware can handle, the next step is determining the appropriate `inference stack`. This comprises all of the software that’s required to run a model.

The key components of this are:

- **Inference backends** - Tools like Ollama or llama.cpp that load the model into memory, handle computation, and generate responses based on input prompts.
- **User interfaces** - UIs that sit on top of the model, allowing you to interact with it via a desktop app or web interface, rather than relying solely on terminal commands. These might also include prompt history, context memory, formatting tools, or presets.
- **Containerization tools** - Tools like Docker and Kubernetes that enable us to containerize solutions, making them easier to scale in production environments.

While these second two components are optional, they will nonetheless be important for most production use cases.

## Why would we want to host a model locally?

With a better grasp of the practicalities of self-hosting an LLM, we can circle back and think in more detail about why we’d want to do this in the first place. There are two key ways we can slice this.

That is, we can think about this first in terms of the overarching benefits and then the most common use cases.

Local LLMs offer a few key advantages over models that are offered as a service. One that we alluded to already is cost. By self-hosting, we can avoid usage-based license fees, meaning local solutions can be scaled more cost-effectively.

Security is also an important driver for teams choosing to self-host models. One major aspect of this is limiting the flow of data to external services. 

Across IT teams in all industries, a huge challenge of the emergence of generative AI has been determining how to take advantage of innovative new technologies without undermining existing data governance requirements.

Self-hosting can enable us to ensure that any data that’s transferred to our model remains under our control on our infrastructure. It also reduces our reliance on external services more generally, including the risk of outages, interruptions, or changes in terms.

On top of this, most self-hostable models are either open-source or open-weight. This can afford a far greater degree of flexibility and customization when it comes to reasoning and behavior.

So, considering all of the above, what kinds of production use cases are most popular for local LLMs?

High transaction volumes are one important characteristic. The more we’d otherwise have to pay for requests to an external model, the more attractive self-hosting becomes.

The other key considerations relate to security. So, in sensitive, highly regulated, or mission-critical use cases, self-hosting is often a firm requirement for any software tools, including those that provide AI capabilities.

Some common examples that span both of these include internal knowledge assistants, document workflows, and a whole host of internal service processes such as finance, ITSM, HR, and more.

## What to look for in a self-hosted LLM

Before we begin to explore some of our specific options, it’s also helpful to consider the broad decision points that will go into determining if one model or another is more suitable for our specific needs.

In other words, what are the criteria we can use to compare models?

One of these that we’ve hinted at already is a model’s `parameter count`. This refers to the number of learnable weights the model contains, which determines its capacity for reasoning, memory, and language generation, as well as which hardware it could run on.

Generally speaking, the more weights a model has, the more powerful it is likely to be. However, it’s worth noting that this is a broad rule, and model weights aren’t the only variable in play here.

As such, we’ll also want to pay attention to benchmarking. This refers to how well models perform on standardized tasks. Notably, these can be quite broad or more domain-specific, with most models performing better on certain tasks than others.

For instance, highly domain-specific models can outperform alternatives with higher parameter counts on relevant benchmarks, even if they’re less effective on more general tasks.

License terms are also critical decision factors. 

As we said earlier, most self-hostable models are either open-weight or open-source. The distinction here is that the former only offers the availability of the numerical parameters needed to run the model, while the latter includes all underlying training data, code, and methodology.

Even within this, some licenses are more permissive than others. Many models are offered on well-established open-source licenses, like MIT or Apache 2.0. Others use proprietary licenses, which may enforce more restrictions, especially for commercial usage.

You might also like our round-up of the top [open-source LLMs](https://budibase.com/blog/ai-agents/open-source-llms/).

## 6 self-hosted LLMs for 2025

With a good grasp of what we’re looking for, we can begin to check out some of the specific options that are out there.

It’s worth restating that the specific requirements of individual readers will vary greatly, from hobbyists who want to experiment on their local machine to IT pros who need production solutions they can run on internal infrastructure.

And that’s without even getting into specific use cases. So, our goal isn’t to present a fully comprehensive account of the market or which models are most effective in every possible use case.

Rather, it’s to highlight some of the most prominent self-hosted LLMs, what they’re most effective at, and how they’re typically used, in order to solidify what we’ve learned so far.

With this in mind, we’ve chosen a range of models, spanning different hardware requirements and target use cases. Our picks are:

1. [Mistral 7B](#1-mistral-7b)
2. [Phi-3 Mini](#2-phi-3-mini)
3. [OLMo-2-1B](#3-olmo-2-1b)
4. [Gemma 3](#4-gemma-3)
5. [Dolphin 2.9 Mistral 7B](#5-dolphin-29-mistral-7b)
6. [Jamba Mini](#6-jamba-mini)

Let’s check out each one in more detail.

### 1. Mistral 7B

![Mistral](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/Mistral_7B_w898lc.webp "Mistral")

First up, we have Mistral 7B. With 7.3 billion parameters, this is one of the most widely adopted self-hosted LLMs, offering outsize performance for a range of tasks, across language processing, code generation, and more.

It also offers a high degree of flexibility for fine-tuning, making it an effective choice for use cases such as chatbots, without incurring the higher computational costs that would come with a larger model.

However, there are also a few limitations to be aware of. Firstly, some models with larger parameter accounts could facilitate more effective knowledge storage. Additionally, some users report issues with hallucinations.

Mistral 7B is offered under the permissive Apache 2.0 license, including use, modification, and distribution. By some reports, it can be run with as little as 12GB of VRAM, although others state that 16-24GB will be needed for it to work effectively.

### 2. Phi-3 Mini

Microsoft’s Phi-3 Mini is a 3.8B parameter model that’s designed to run in resource-constrained environments. It’s widely regarded to offer similar performance to models in the 7-billion parameter class, especially for reasoning and instruction-following tasks.

Another strength is that, unusually for its class, it supports a 128K context window. This makes it highly capable of handling long input sequences.

The drawback, however, is that as a smaller parameter-count model, Phi-3 Mini is less effective than its larger counterparts for general knowledge within its training data.

It’s offered with an MIT license, offering unrestricted usage, modification, and distribution, as long as copied versions adhere to the same license terms. It can be run with as little as 4GB of combined RAM, although this might not be sufficient for fine-tuning or long context windows.

### 3. OLMo-2-1B

![OLMo](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/OLMo_2_euzbvt.webp "OLMo")

Built by the Allen Institute for AI, OLMo-2-1B is the smallest self-hosted LLM we’ve seen so far, with a parameter count of just one billion. It’s built primarily for experimentation and research, especially around how transformer models behave in constrained environments.

It’s optimized for efficiency, including a comparatively high level of inference capability on consumer hardware, such as low-end GPUs or even CPUs. This makes it a highly useful tool in a prototyping or educational setting.

However, it’s generally not intended for production use cases, and its small parameter count could make it less viable for many reasoning or language generation tasks.

OLMo-2-1B is offered under the Apache 2.0 license. As it’s designed to run on consumer-grade hardware, memory requirements may also be lower than many other self-hosted LLMs.

### 4. Gemma 3

![Gemma](https://res.cloudinary.com/daog6scxm/image/upload/v1746622440/cms/ai-agents/open-source-llms/Gemma_l3ncc0.webp "Gemma")

Gemma is Google’s family of open-source LLMs, which currently includes models ranging from 1B to 27B parameters. As such, these can facilitate LLM-powered applications in a range of environments, from edge devices to larger-scale processes.

Built on the same technology as Gemini, Gemma models are design for strong performance across a range of tasks, including question answering, instruction following, and text summarization. They also offer a high-degree of fine-tuning.

Gemma is distributed under Google’s proprietary open-weight license, which imposes restrictions on certain commercial use cases. Additionally, domain-specific models may perform better for certain tasks.

With support for INT8 and 4-bit quantization, Gemma models can be run on consumer-grade GPUs with as little as 4GB of RAM for the 1 billion parameter version. Larger parameter counts will, of course, require higher computational resources.

### 5. Dolphin 2.9 Mistral 7B

Dolphin 2.9 is an open-weight model, based on Mistral 7B’s architecture and fine-tuned using Direct Preference Optimization (DPO). It’s a particularly effective offering for aligning with user instructions, including in conversational tasks.

 It’s also available with a range of quantization options, with a corresponding variety in file sizes, performance, and computational requirements. This provides a useful degree of flexibility for hosting.

Like the underlying Mistral model, Dolphin 2.9 is offered under the Apache license, offering permissive usage, modification, and redistribution.

It can be run on consumer-grade GPUs, with some reports stating that the smallest versions can run with as little as 7-8GB of VRAM.

### 6. Jamba Mini

![Local LLM Jamba](https://res.cloudinary.com/daog6scxm/image/upload/v1746622439/cms/ai-agents/open-source-llms/Jamba_o11xdq.webp "Local LLM Jamba")

Lastly, we have Jamba Mini. Aimed at enterprise usage, it uses a Mixture of Experts architecture. This means that, out of 52 billion total parameters, only 12 billion are active at any given time, helping to enhance performance and efficiency.

It also supports a context window of up to 256,000 tokens, making it suitable for complex, knowledge-intensive tasks, such as multi-document summarization or RAG workflows. It also benchmarks higher than many similar models for inference on long contexts.

It’s offered under Jamba’s Open Model license, which permits both research and commercial usage.

However, as an enterprise-focused model, Jamba could require comparatively high computing resources. These requirements will also be increased for performing long-context tasks.

## Turn data into action with Budibase

Budibase is the open-source, low-code platform that turns data into action. We offer connectivity for a huge range of LLMs, RDBMSs, NoSQL tools, APIs, and more, alongside autogenerated UIs, visual automations, free SSO, optional self-hosting, and more.

Take a look at our [features overview](https://budibase.com/product/) to learn more.