---
title: Introducing Global Bindings
description: In the world of application development, speed and quality often sit on opposite ends of the spectrum. Yet, we believe they can coexist harmoniously. That's why we're excited to introduce an easier way to create multi-step forms. 
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1704878154/Photos/headshot_aw4uce.png
images:
- https://res.cloudinary.com/daog6scxm/image/upload/v1706626653/cms/globalBindings/globalBindings_ibbjgy.png
date: 2024-01-30
author: Jamie Birss
draft: false
---

At Budibase, we are continually evolving to make application development more intuitive, accessible, and powerful. With our latest update, we are thrilled to announce a significant enhancement that aligns perfectly with this vision - Global Bindings. Before diving into the exciting details, we assure you that your existing data structures are safe. This update is designed to integrate seamlessly with your existing setup, ensuring that everything you've built so far continues to function flawlessly with the new version of Budibase.

Now we’ve got that out of the way - let’s jump into it. Data is at the heart of Budibase. It’s the foundation of every application and is the first thing you focus on when getting started. Global Bindings make accessing data within your application easier than ever by eliminating the need for complex nested component trees, allowing you to access any data source or static binding from any component within the same screen. This removes unnecessary friction from the development experience, offering new-found flexibility that simplifies the development process, making app building more efficient, intuitive, and user-friendly.

This approach simplifies application development and introduces new and engaging workflows. Let’s look at a practical example to show how it works. 

![App UI](https://res.cloudinary.com/daog6scxm/image/upload/v1706704026/changelog/globalBindings/bindingsAppUI_b9jm3z.png)

In this scenario, we have a screen showcasing an expense table. In this context, we want a side panel that calculates the percentage of total cost associated with each expense. With the old approach, this would have been built with the following component structure: 

![Old Budibase bindings required nesting](https://res.cloudinary.com/daog6scxm/image/upload/v1706704750/changelog/globalBindings/bindingsOldWay_ig7qrs.webp)

This is inefficient for two main reasons. One - the details side panel had to be nested inside the Dataprovider to have scope of the rows to calculate the sum. Secondly, the form block had to be ejected so that the Stat card could be nested within the repeater to get the cost of the expense item.

With Global Bindings, the development process has been streamlined. To make the same application, you could now use the following simplified approach:

![Budibase global bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1706704750/changelog/globalBindings/bindingsNewWay_o1sfpf.webp)

With this update, the component's underlying bindings are built exactly as before, but **global resolution** means they can be leveraged anywhere. 

The `Table block` here provides a binding containing a list of expenses - `Expenses table block.Rows`.This was previously only accessible locally to the block, but now, in the global context, it can be accessed directly within the neighboring `Details side panel` to calculate the sum of the expenses. **Both components are still completely independent and can be moved freely around the screen without the binding breaking.**

Our aim is to streamline the creation of world-class applications, making the process both rapid and intuitive. We’re excited to see the creative and effective ways our community will leverage Global Bindings to turn data into meaningful action.

**To try Global Bindings for yourself, please update to the latest version of Budibase.**

Have some feedback for this release? Let us know on the [Budibase forum](https://github.com/Budibase/budibase/discussions). We’d love to hear your thoughts.