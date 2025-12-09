---
title: Budibase 2026 - the AI Workflow Toolkit
description: The direction of Budibase - AI Workflows for privacy-first teams
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1763733146/cms/mike-headshot.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1696515375/Branding/Assets/Logo/RGB/Full%20Colour/bb_logo_fullcolor_ky6ozr.png
images:
- https://res.cloudinary.com/daog6scxm/image/upload/v1696515375/Branding/Assets/Logo/RGB/Full%20Colour/bb_logo_fullcolor_ky6ozr.png
date: "2025-12-08"
author: Michael Shanks
draft: false
---

Budibase has reached a pivotal moment, driven by rapid changes in AI and the needs of privacy-first organizations. To continue supporting these teams, we are evolving. Here is our approach.

In [my last post](https://budibase.com/blog/updates/low-code-versus-vibe-code/), I compared Lowcode to AI Code generators. Now, I’ll focus on Budibase - what we believe, what we’re doubling down on, and where we’re heading.

## What We Stand For

These are the principles that guide how we build Budibase:

- **Privacy**. Keep your data within your own infrastructure and trusted providers.
- **Ownership**. Stay in control of your data and the software that processes it.
- **Connectivity**. No walled gardens - connect to the tools that you trust.
- **Humans in the loop**. The future is AI **Assisted**. People still make the critical decisions.

Budibase has always been built for organizations that prioritize security, compliance, and data residency. As AI becomes foundational to modern workflows, our mission is simple:

*Enable privacy-first teams to adopt AI with confidence*

## AI Workflows

Today, you can build low-code apps and automations with Budibase. That won't change. In fact, automations and apps will become even more powerful. 

We're betting on a future where AI assistants will be embedded in most workflows. To support this, we're adding two huge pillars to Budibase Workspaces: 

![Budibase AI Workflows](https://res.cloudinary.com/daog6scxm/image/upload/v1765209192/cms/future-of-bb-dec25/bb-ai-workflows_ydztyp.png)

### 1. Agents

AI Agents work best when they are single-purpose - where each agent has a clear set of instructions and a well defined set of tools to perform its tasks.

Inside Budibase, you’ll be able to create multiple specialized agents - each with access only to the data and APIs you choose. The chat interface (or another agent) will help orchestrate which agent to call for each request.

Agents will be usable via automations and the new chat interface (below).

And, most importantly, Role-based access controls will apply.

- No agent can bypass your permissions.
- No human can see or do anything they have not been given access to.

Budibase provides the foundation for secure AI automation in regulated environments.

**Models**

Budibase will support a range of LLMs via [LiteLLM](https://www.litellm.ai/), so you’ll be able to use any model that’s compatible with the OpenAI format. For beta, our testing will focus on smaller, open-source models:

- Mistral: ministral-14b-2512
- Qwen: qwen3-32b
- OpenAI: gpt-oss-120b
- Meta: llama-4-scout

Budibase agents will also function well with the latest models on all the major public providers, including OpenAI, Gemini, Mistral, Anthropic, etc. 

![Budibase Agents](https://res.cloudinary.com/daog6scxm/image/upload/v1765206510/cms/future-of-bb-dec25/BB-Agent_rxvius.jpg)

### 2. AI Chat

You already know how to use chat - you use it every day with AI, and with colleagues.

But chat alone isn’t enough for real internal workflows - we’re taking it further.

Budibase Chat will surface dynamic forms, tables, and charts within the chat experience, combining the flexibility of free-text with the structure of traditional user interfaces. And, of course, all securely connected to your data.

![Budibase AI Chat](https://res.cloudinary.com/daog6scxm/image/upload/v1765206959/cms/future-of-bb-dec25/BB-chat_xmiurh.jpg)

## Release Schedule

| Date        | Release                       | Features |
|-------------|-------------------------------|--------------------------|
| **Dec 2025**| Agents Alpha                  | Agent node (automations) |
| **Feb 2026**| Agents Beta                   | Evals, logs, testing, stability |
| **Feb 2026**| Chat Alpha                    | Chat interface connected to agents |
| **Mar 2026**| Chat Beta                     | - |
| **Q2 2026** | Agent Testing                 | Interface for validating behaviour before deployment   |
| **Q2 2026** | Agent Analysis                | Visibility into agent actions and decisions |
| **Q2 2026** | Human-in-the-loop automations | Apps/Screens inside automations |



Budibase has always enabled teams to build secure internal workflows. Now, we’re bringing AI into that world in a way that matches the needs of privacy-first organizations.

AI workflows, private LLMs, strict data residency, full RBAC, and multi-agent orchestration - all under your control.

If you want to help shape this future, [join us on Discord](https://discord.com/invite/ZepTmGbtfF). I’d love your feedback as we build the next chapter of Budibase.
