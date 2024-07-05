---
title: Wrapping up Q1
description: Building forms is a critical and necessary flow within Budibase. Whether you’re building a simple app to collect data or a complex approval flow to manage overtime requests, there’s a critical form at the heart of the workflow. By improving the form-building experience, we are improving every Budibase experience.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.webp
image: https://res.cloudinary.com/daog6scxm/image/upload/v1708118900/cms/forms/formsHero5_uj9csq.png
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1708118900/cms/forms/formsHero5_uj9csq.png
date: "2024-03-25"
author: Joe Johnston
draft: false
---

Busy quarter! In Q1, we set out to:

- Make it easier and faster to build advanced, secure forms.
- Spark more joy in the developer experience. 

## Making it easier and faster to build secure forms

![Form building interface](https://res.cloudinary.com/daog6scxm/image/upload/v1708118900/cms/forms/formsHero5_uj9csq.webp)

Building forms is a critical and necessary flow within Budibase. Whether you’re building a simple app to collect data or a complex approval flow to manage overtime requests, there’s a critical form at the heart of the workflow. By improving the form-building experience, we are improving every Budibase experience.
From chatting with customers, we quickly understood why Budibase was unique - it offered a “secure and flexible” experience for building forms. There are three main reasons for this:

- Data control: Connect and store data within your database
- Self-host: Deploy Budibase on your infrastructure
- Flexible: Build any form from multi-step to dynamic

The effort to improve form-building involved multiple teams pulling together. 

### New form features

From a product perspective, [Jamie Birss](https://github.com/jamie-budibase) worked with the product and engineering team to release several features:

- [Multi-step form block](https://docs.budibase.com/changelog/multi-step-form-block)
- [Global bindings](https://docs.budibase.com/changelog/introducing-global-bindings)
- [Form screen template](https://docs.budibase.com/changelog/new-screen-template-forms)

![New form template](https://res.cloudinary.com/daog6scxm/video/upload/v1709745251/product-marketing-images/formsScreenTemplate2_exoepi.gif)

*We will also launch a new signature component next week :fountain_pen: .*

### New form tutorials

[Ronan McQuillan ](https://github.com/RonanMCQ)released ten new guides to help you successfully build forms with Budibase:

1. [How to build a data collection form](https://budibase.com/blog/data/data-collection-form/)
2. [Embedding a Budibase form](https://budibase.com/blog/app-building/embed-form/)
3. [How to build an availability form](https://budibase.com/blog/tutorials/availability-form/)
4. [How to build an employee complaint form](https://budibase.com/blog/tutorials/employee-complaint-form/)
5. [How to build an expense reimbursement form](https://budibase.com/blog/tutorials/expense-reimbursement-form/)
6. [How to build a client intake form](https://budibase.com/blog/tutorials/client-intake-form/)
7. [How to build an IT request form](https://budibase.com/blog/tutorials/it-request-form/)
8. [How to build an audit form](https://budibase.com/blog/tutorials/audit-form/)
9. [How to build a timesheet](https://budibase.com/blog/tutorials/secure-timesheet/)
10. [How to build a change request form](https://budibase.com/blog/tutorials/change-request-form/)

### New form templates

To top the quarter off and help new users streamline the onboarding process, we created three new templates:

1. Change request form
2. Information request form
3. Visitor check-in form (demo below)

{{< iframe "https://budimaster.budibase.app/embed/visitor-management-app" >}}

These templates offer a great starting point when building forms with Budibase. You can find out more about the templates on the [Budibase Forms landing page](https://budibase.com/forms).

### A different type of form builder

We believe Budibase offers a unique perspective and improved experience regarding form building. We’ve detailed its strengths on the [Budibase Forms landing page](https://budibase.com/forms) - security is the primary driver. We’ve also outlined [why Budibase is a better fit for specific use cases versus other form builders](https://budibase.com/blog/alternatives/forms/).

Since focusing on Forms in January, we’ve seen a steady uplift in the number of new users building forms, which is encouraging. This chart does not take into account self-hosters or existing users.

![number of new users building forms](https://res.cloudinary.com/daog6scxm/image/upload/v1711375117/cms/2024/wrapping-up-q1/CleanShot_2024-03-11_at_15.56.58_2x_b7lsz5.png)

We’re very proud of what we’ve achieved in such a short amount of time. We will continue to improve the form-building experience over the upcoming months, but it won’t be our primary focus.  

## Sparking joy in the developer experience

On average, Budibase users spend more time in the design section than in the data and automation sections combined. So, it made sense to start here. 

### Coding in Budibase

When it comes to user research, being Open Source is a huge advantage. It makes it easy to learn what users feel strongly about. And, by a long margin, users wanted a better coding experience within Budibase. Everyone within the Budibase team knew this was an area of limitation, and we were delighted to tackle the problem :fist_oncoming: with 2 amazing features.

![Budibase live evaluation](https://res.cloudinary.com/daog6scxm/image/upload/v1710841909/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/liveEval_working_xgb3kg.png)

[Live evaluation](https://budibase.com/blog/updates/2024/live-eval-reusable-code-snippets/) - Budibase will evaluate your code and preview the output when writing code within the design section. Credit to [Andrew Kingston](https://github.com/aptkingston) for delivering a much-needed feature. It has made the binding experience exponentially better. 



![Code snippets](https://res.cloudinary.com/daog6scxm/image/upload/v1710841757/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/return_snippet_nbv8k9.png)

[Reusable snippets](https://budibase.com/blog/updates/2024/live-eval-reusable-code-snippets/) - Reuse snippets of code when building apps with Budibase.  This is a major productivity gain and another nod to [Andrew Kingston](https://github.com/aptkingston) who recently implemented this. Reuasable snippets is a [Premium Feature](https://budibase.com/pricing).

### Faster Cloud, faster development, faster apps.

[Sam Rose,](https://github.com/samwho) [Michael Drury](https://github.com/mike12345567), [Adria Navarro](https://github.com/adrinr), [Marty McKeaveney](https://github.com/shogunpurple), and [Christos Alexiou](https://github.com/calexiou) spent several weeks improving the performance of Budibase Cloud. It’s now a lean, mean, app development machine (I’m allowed one terrible joke). I’ve included some of the results of our efforts below (they’re a little technical).

- Median latency retrieving documents from CouchDB has been reduced from ~30ms to 7ms. 90th percentile is down from ~500ms to 18ms.
- Container restarts are down from ~30/hour to ~1-2/hour.
- The median latency for our most hit endpoint, `/api/:sourceId/search` is down from ~500ms to ~200ms.

We plan to write a detailed post about our Cloud performance efforts in the upcoming weeks.

 ![Budibase latency chart](https://res.cloudinary.com/daog6scxm/image/upload/v1711376188/cms/2024/wrapping-up-q1/2485afde-c933-4090-9ecf-a095f5b0e773_yrhbkg.png)



{{< cta >}}

## And then some…

- Native n8n integration - A few weeks back, we launched our native n8n integration. [Read the changelog](https://docs.budibase.com/changelog/new-n8n-integration).
- Automation Scripting Action UX improvements - We made a small yet impactful improvement to the user experience within the automation scripting action. [Read the changelog.](https://docs.budibase.com/changelog/ux-improvement-in-automation-scripting-action)
- Over 100,000 teams have used Budibase to build apps.
- We reached [20,000 Github stars](https://github.com/Budibase/budibase).
- Thank you to Sourcee, mheim_sx, and Poirasiz for all their community contributions.
- Check out the following ChatGPT clone created by a community member:

![showcaseAIApp](https://res.cloudinary.com/daog6scxm/image/upload/v1711376186/cms/2024/wrapping-up-q1/e26553e2-1485-4b8e-b12d-68e9047ebb04_lzti6h.png) 

## Up next in Q2

### Delivering a best-in-class experience for building Portals

In Q2, we will focus on another popular use case: Portals. For those of you building a portal with Budibase, we’d love your feedback on the current experience - [please book some time in my calendar](https://meetings-eu1.hubspot.com/joe-johnston/discovery).

### Budibase DB improvements (and more :eye: )

We’re also planning a major update to Budibase DB - filtering by relationship.

### GovTech event

We’re exhibiting at our first event - [DigiGov Expo ](https://www.digital-government.co.uk/)- in London on the 8 May. If you’re attending, please let me know - joe at budibase dot com  - and we’ll grab some coffee.

### Partnerships research

We’re currently exploring the possibility of building an ecosystem of partners. If you want to learn more and help inform my research, [please book some time in my calendar](https://meetings-eu1.hubspot.com/joe-johnston/discovery).

 

