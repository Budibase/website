+++
author = "Ronan McQuillan"
date = 2023-09-29
description = "PoC software is used to prove that a project is viable before we start building it properly."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1695990459/cms/poc-software/PoC_Software_toc9fd.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1695990459/cms/poc-software/PoC_Software_toc9fd.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is PoC Software?"

+++

Building PoC for software development projects is an effective way to validate our ideas without going to the effort and expense of building the real thing.

Not only does this enable us to prove that our approach to the problem at hand is viable - it also gives us a valuable opportunity to gather real-world input from potential users, developers, target audiences, and other business stakeholders.

But, achieving this can be more challenging than you might think. 

See, creating a tool that gives a realistic picture of what the final product will be like - without overbuilding and wasting time on more advanced features - is a fine balancing act.

Today, we’re covering everything you need to know about creating PoCs. Specifically, we’re going to check out what PoC really *is*, how it fits into software development projects, what we can achieve, and some of the challenges we’re going to face.

Then, we’ll move on to the specific tools we have available to us, before checking out a step-by-step framework for building successful PoC tools.

Let’s start with the basics.

## What is proof of concept (PoC) in the software development process?

As you probably know already, PoC stands for *proof of concept.* Essentially, this is a tool that we build to *prove* that software can be used to solve particular pain points or satisfy market demand - or even that a particular *type* of software can.

Of course, we’re always proving this *to* someone. This might be internal decision makers, other colleagues, customers and clients, or even ourselves.

What’s needed to prove that a particular software product is viable will obviously vary from project to project. 

Basically, though, we’re trying to prove one of two things:

1. That our approach is *possible -* that is, technically feasible.
2. That our approach will be *profitable - or worth the time and money*

We’ll drill into each of these in more depth in a second.

For now, we’re only concerned with how this impacts what we’ll include in our PoC app in terms of establishing that an idea is feasible.

Typically, PoC software will focus on the *core functionality* that’s required to solve a particular problem - without any bells and whistles. Ultimately, we want to build as little as possible while still verifying that our approach will work.

In some cases, this might be purely *functional*. That is, we’re solely focused on getting a solution working. This is particularly common in the case of internal R&D.

We can then use this as a springboard for demonstrating to stakeholders how we can make further improvements with additional features.

In others, we might need to pay greater attention to non-functional elements - especially user experiences. 

This is particularly true in situations where we’re trying to illustrate to stakeholders that our new approach will provide a faster, easier, or more efficient experience for carrying out whatever the task at hand is.

That leads us neatly onto…

## Why do teams build PoC software?

Software development is expensive - and it takes a long time. At least, traditionally.

Because of this, businesses need a lot of confidence that their investment is going to pay off before undertaking new projects. Otherwise, we could encounter major sunk costs - if we realize mid-project that things aren’t going to work out.

This is the basic impetus for creating PoC tools.

But, this can work a little bit differently in various contexts. 

Say we’re building an internal tool in a large enterprise. The challenge for a successful proof of concept is getting *sign-off* to initiate our project. 

Often, this will require various levels of approval.

So, we’ll need to prove to IT colleagues that our solution could work - and be cost-effective - before convincing other decision-makers that the end product will offer a more effective alternative to the current approach for our desired use case.

![PoC Software](https://res.cloudinary.com/daog6scxm/image/upload/v1695126994/cms/prototype-vs-mvp/User_Engagement_Stats_http___r-stylelab.weebly.com_blog_what-is-poc-in-software-development-why-do-you-need-it_rmjc1i.webp "PoC Software")

([R-Style Lab](http://r-stylelab.weebly.com/blog/what-is-poc-in-software-development-why-do-you-need-it))

We can also point to a variety of customer-facing situations where PoC software is useful.

For instance, in an agency environment - where we’re building solutions for a client - the role of PoC tools will be quite similar to internal tools.

However, things can look quite different in public-facing application contexts. If we need to secure outside investment or prove our product-market fit. Ultimately though, the goal here is the same - demonstrating the viability and profitability of our proposed solution.

## Who builds PoC software?

This is actually a deceptively interesting question.

The reality is that a whole range of colleagues within various departments might encounter a need to produce PoC software. 

The majority of the time - however - the responsibility falls on the IT team. Depending on the resources available, the specific colleagues involved can vary widely from one organization to the next.

Of course, the most obvious candidates are developers - or they might seem to be anyway. Obviously, internal devs are probably the best-positioned colleagues in terms of the requisite skills for building a PoC tool.

But, more practical considerations can get in the way. Developers are in demand - so it’s often going to be a struggle to get resources allocated to PoC projects if there is higher-priority work going on.

So, PoC projects often fall to non-devs in the IT department. Typically, this includes colleagues like:

- Solutions architects.
- Product managers.
- Project managers.
- Administrators.
- Integration and transformation specialists.
- Procurement teams.
- Data professionals.
- System engineers.
- Analysts.
- Support engineers.
- And other internal IT roles.

A large proportion of PoC projects are also carried out within *operations* departments.

Ops professionals aren’t necessarily responsible for the *technology* that’s used within organizations - but they are responsible for how the processes that rely on this technology operate.

So, operations colleagues are often tasked with building PoC solutions in order to prove their value as a process improvement intervention. The actual solution would then normally be developed by IT, once it’s been signed off.

In smaller companies, we can see even greater variety in the kinds of colleagues that end up creating PoC solutions.

This could even be *reasonably* technically competent colleagues or leaders within on-the-ground departments, like sales, logistics, marketing, legal, finance, and even the C-suite in extreme cases.

But, this is dependent on the right tools being available to colleagues. We’ll return to this idea a little later.

![Software delivery stats](https://res.cloudinary.com/daog6scxm/image/upload/v1695126994/cms/prototype-vs-mvp/Full_value_https___financesonline.com_uploads_2022_01_Project-Management-Statistics-2-1024x803.jpg_ihrsit.webp "Software delivery stats")

([Finances Online](https://financesonline.com/uploads/2022/01/Project-Management-Statistics-2-1024x803.jpg))

## PoC in the software development lifecycle

Before we get to that though, it’s worth situating PoC in the wider context of the software development lifecycle. 

This can play out in a couple of different ways.

Naturally, the most important is the kinds of scenarios that we’ve already outlined. So, PoC apps are built before or early on in development projects, in order to prove the viability of a particular solution - or kind of solution.

This offers a number of important benefits throughout the remainder of the project, including:

- Gathering insights from key stakeholders including users, decision-makers, and developers.
- Improving communication, expectations-setting, and efficiency within projects.
- Giving a more accurate picture of the needs of the end product.
- Providing a concrete basis for future development decisions.
- Helping to gain wider buy-in for our solution.
- Lowering the overall cost of solution development.
- More accurate project planning.

What’s less immediately intuitive is doing the same thing *later* in projects.

See, creating PoC for a new app idea is one thing. We can also apply the same principles to individual features later in development projects. For instance, we might need to provide proof of concept for a particular kind of UI within a wider application.

The same applies to extensions or integrations for existing tools.

One lesser-considered aspect of all of this is providing proof of concept for solutions that go *beyond* the scope of developing individual applications.

This could be anything from adopting a new development methodology or release cycle - to rolling out new tools, like low-code platforms. 

Again, we’ll come to this again shortly.

## Challenges

Next, though, we need to consider some of the potential challenges and downsides of creating PoC software. Some of these are relatively contextual and situation-specific, so pay close attention.

One thing to be cognizant of is that the value of building a PoC tool is - at least to an extent - proportionate to the scale and scope of the proposed end solution. 

Basically, if it’s only going to take you a week to ship a working product, there isn’t a huge amount of value in spending a further week creating a proof of concept. The added expense and delays to the project will likely outweigh the potential risk of sunk costs.

At the other end of the spectrum, a common pitfall that teams encounter is failing to dedicate enough resources to building realistic PoC. We might then make the wrong decision about the viability of a project, because we’re basing it on unrealistic assumptions in the first place.

Finally, we already alluded to the fact that development time can be difficult to secure for proof of concept projects - especially if in-house devs have more urgent work to carry out.

We saw earlier that this slack is typically taken up by non-developers within the organization. However, this is dependent on the right technology, tools, and frameworks being in place for them to output working solutions.

Putting these measures in place to empower non-developers to build proof-of-concept applications is one issue that many businesses fail to consider adequately.

Take a look at our guide to [internal processes.](https://budibase.com/blog/automation/internal-processes/)

![PoC Software](https://res.cloudinary.com/daog6scxm/image/upload/v1695126995/cms/prototype-vs-mvp/UX_Costs_https___www.freshcodeit.com_freshcode-post_how-to-calculate-the-cost-of-software-development_glqkkx.webp "PoC Software Stats")

([FreshCodeIt](https://www.freshcodeit.com/freshcode-post/how-to-calculate-the-cost-of-software-development))

## Alternative approaches

We already know that PoC software is primarily aimed at demonstrating the viability of a particular kind of solution. However, there are a few other related concepts in software development with similar goals that we should also be familiar with.

The first is traditional *prototyping*. A prototype is functionally quite similar to a PoC tool - in the sense that it contains the core functionality of the end solution - with less focus on non-functional elements, like design or user experience.

However, there’s a subtle but important distinction here. Whereas PoC tools are used to validate an idea, the ultimate goal of prototyping is to provide an accurate view of *how* a final solution will work, in order to gain feedback from stakeholders.

Therefore, it will typically come a little bit later in the development process.

Another related concept is that of a *minimum viable product* (MVP). This is slightly different again.

Basically, an MVP is the most lightweight version of an application that can solve a particular use case. The goal is to push this live.

We might then continue using an MVP in its initial form to get a solution online quickly - or we might use it as the basis for further iterative development to add additional functionality.

Take a look at our comparison of prototypes vs MVPs for a fuller discussion.

## PoC software tools

We’ve stressed throughout this guide that successful PoC development is contingent on having the right tools in place to empower non-developers to output working solutions.

Naturally, though, what this looks like in practice can vary greatly from one company to the next - both in terms of the solutions you need to build and the technical abilities of the colleagues involved.

With that in mind, let’s check out the three main approaches we can take here, along with concrete examples of each.

### Traditional development tools

First - and perhaps most obviously - we have traditional software development tools. So - hard coding our PoC, in other words. This is how a developer might do it.

However, there are some obvious pros and cons to this approach.

One benefit is that we have the flexibility to do just about anything. At the same time, relying on traditional developments greatly limits the kinds of colleagues who can ship PoC solutions - since they’ll need to know how to code.

Traditional developments also take a lot more time and effort than the other options we’ll see in a second. In turn, this eats into our cost-effectiveness.

There are resources that we can use to help alleviate this problem. For instance, established design patterns, reusable code libraries, frameworks, and other solutions that help to expedite traditional development.

### SaaS solutions and integrations

Next, in certain situations, we might be able to get away without much *real* development at all. One option here is using configurations of existing tools - particularly SaaS platforms - to prove the business value of a proposed solution.

For example, our use case might surround performing some particular interaction with our customer data. In this scenario, we might be able to prove the viability of a custom solution by creating something analogous in an existing platform, like *SalesForce* or *HubSpot*.

We might also leverage integration platforms like *Zapier* to demonstrate the potential viability of solutions that involve multiple existing tools.

Compared to traditional development, this opens up building PoCs to a much larger pool of colleagues - since the technical skills barriers are considerably lower.

However, on the flip side, we’re much more constrained by what is possible within particular platforms.

### Low-code development

Finally, we have low-code development. This is an approach to building software that emphasizes reusability and expedites common development tasks.

At Budibase, we’re on a mission to empower teams to turn data into action.

Our open-source, low-code platform offers market-leading external data support, intuitive automations, autogenerated UIs, extensive customization, self-hosting, and much, much more.

There’s never been an easier way for developers and non-technical colleagues alike to ship professional applications at pace.

Check out our [features overview](https://budibase.com/product/) to learn more.

{{< cta >}}

## How to build effective PoC software in 5 steps

Finally, let’s wrap everything we’ve learned today up by checking out a repeatable framework that you can apply to building PoC software. 

Here’s how to ship proof of concept tools in five steps:

1. **Researching your use case** - Establishing the need for a new internal or customer-facing solution for a particular use case.
2. **Define your proposed solution** - Gathering requirements and defining what our PoC tool will actually do.
3. **Build a data model** - Outlining the different data entities that we’ll need to build our solution, along with how these relate to one another.
4. **Prototyping UIs and processes** - Building out the interfaces and application logic that are required to meet our requirements.
5. **Presenting your PoC** - Presenting our application to key stakeholders in order to get sign-off for initiating a development project.