---
title: June 2023 Product Update (v2.8.1)
description: To put it briefly, this is our greatest monthly release to date. New features include; Collaborative Grid block, Public Embeds, OpenAI automation action, Typeahead plugin, design updates, and more! At the bottom of this post, you’ll also find a list of newly created resources that will help you on your Budibase journey.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1688574131/features/Frame_6_zbvh6p.png
date: "2023-07-05"
author: Joe Johnston
draft: false

---

To put it briefly, **this is our greatest monthly release to date**. New features include; Collaborative Grid block, Public Embeds, OpenAI automation action, Typeahead plugin, design updates, and more! At the bottom of this post, you'll also find a list of newly created resources that will help you on your Budibase journey.

---



## Add multiplayer collaboration to your published apps with the new Grid block

After much anticipation, you can now add our new Grid interface directly into your applications. This powerful, new design block enables multiple users to collaborate in real-time within your apps. The Grid will reflect your data source of choice, and allow you to customize whether end users can create, edit or delete rows. 

You can try the new Grid Block [below](#embed).

![Grid block](https://res.cloudinary.com/daog6scxm/image/upload/v1688636514/features/grid%20block.webp)

---



## OpenAI automation action

> The OpenAI automation action is currently only available in self hosted Budibase installations. An OpenAI API key is required.



Connect ChatGPT to Budibase automations and build AI apps in minutes with the new OpenAI automation action. This new functionality packs a lot of power and will improve many workflows. We've created a quick tutorial to help you get started:

[📄 Docs Tutorial: Create AI Flashcards with ChatGPT and Budibase](https://docs.budibase.com/docs/openai)

[📹 Video Tutorial: Create AI Flashcards with ChatGPT and Budibase](https://youtu.be/64l-sBltgnw)

![Open AI integration with Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1688574131/features/Frame_6_zbvh6p.webp)

---



## Embed

With the Budibase Embed feature, you can share your public apps outside of Budibase and integrate them directly within websites or apps. You can try a Budibase embed below:

{{< iframe "https://budimaster.budibase.app/embed/inventory" >}} 

_**The embed above is restricted to read-only access for demo purposes. You'll not be able to access the embed if your browser is set to Incognito.**_

[Find our more about Embeds](https://docs.budibase.com/docs/embedded-app)

---

{{< cta >}}

---

## Typeahead plugin

With the typeahead plugin users can search for options within a dropdown. This improves performance by querying the datasource directly and returning results based on the search value.

To add the Typeahead plugin to your Budibase account, navigate to the Plugins section, click Add plugin, and add the following URL:

```
https://github.com/ConorWebb96/bb-type-ahead
```

[Visit the Typeahead plugin repo](https://github.com/ConorWebb96/bb-type-ahead)

![typeahead plugin](https://res.cloudinary.com/daog6scxm/image/upload/v1688638207/features/typeahead2.webp)



---



## New app preview 

Preview your application without navigating away from the Budibase builder.

![Budibase preview](https://res.cloudinary.com/daog6scxm/image/upload/v1688570633/features/preview-wide.webp)

---



## Data section improvements

We have made improvements to our data source creation flow based on user feedback. Improvements include:

- Automatically pull in worksheets from Google Sheets
- Select which tables to fetch from your SQL database or Google Sheet
- A number of UI/UX updates to improve the general data source experience

![Google sheets table import selection](https://res.cloudinary.com/daog6scxm/image/upload/v1688637287/features/google-sheets-table-selection.webp)

---



## New home for app settings

We've moved app settings from the portal to the app building experience. The experience feels natural and should make it easier and faster to access settings and information relating to your app.

![in-app-settings](https://res.cloudinary.com/daog6scxm/image/upload/v1688570153/features/in-app-settings.webp)



---

{{< cta >}}

---

## Further updates

- **Microsoft SQL Server Trusted Authentication**

  You can now connect to your Microsoft SQL Server with Windows Authenticated credentials. This provides a secure connection method to your Microsoft based datasources.

- **43 bug fixes**

  We managed to fix 43 bugs in June - one of our best months for bug fixing.

- **Field group layouts**

  Within the field group component, you can now select from a range of preconfigured layouts - no more wrestling with containers for multi-column layouts.

  

---



## New content

### Video

- [How to build a custom inventory management app with Budibase](https://youtu.be/5p4Vwv1xQl0)
- [Build a MySQL Admin Panel](https://youtu.be/IyMmw6jENeo)
- [Build a CRUD app using a REST API](https://youtu.be/uch3bOftxHU)
- [How to build a MongoDB admin panel with Budibase](https://youtu.be/OjGZ841KgBk)
- [Build a CRUD app using Budibase and PostgreSQL](https://youtu.be/X6LgF15NqY0)

### Blog

- [CAP vs ACID | What is the difference?](/blog/data/cap-vs-acid/)
- [Onboarding Automation Guide](/blog/automation/onboarding-automation/)
- [Project Management Automation Guide](/blog/automation/project-management-automation/)
- [IT Operations Analytics post](/blog/inside-it/it-operations-analytics/)
- [Digital Transformation UX post](/blog/inside-it/digital-transformation-ux/)



### Docs

- [OpenAI automation action](https://docs.budibase.com/docs/openai)
- [App embeds](https://docs.budibase.com/docs/embedded-app)
- [Troubleshooting SQL](https://docs.budibase.com/docs/troubleshooting-sql)
- [Grid block](https://docs.budibase.com/docs/grid-block)

---



