---
title: Dev/Prod switcher
description: You can now switch between dev and prod environments within the data section.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.png
images:
- https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.png
date: "2025-08-12"
author: Joe Johnston
draft: false
---

![dev prod switcher](https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.webp)
We're excited to announce a new feature that gives you more control over your development and production environments. The Dev/Prod switcher within the data section of the Budibase builder allows you to seamlessly switch between your development and production data.

**Key Updates:**

- Switching Environments: Easily toggle between "Dev" mode and "Prod" mode to view and work with the corresponding data.
- External Tables: The switcher is fully compatible with external tables that use environment variables, making it easier to manage your different data sources.
- Production Safety: When in production mode, the ability to add or edit a table's schema is disabled. It's still possible to update the records.
- Import/Export: While in both dev and production mode, you still have the flexibility to import and export your tables, ensuring you can manage your data as needed.

**Important information for exisiting users**

Before this release, the old system combined data in development and production in a way that was often confusing - to align better with the normal software development cycle we are creating clear separation. If you wish to create data in your production environment, then publish the table, switch to production, and create the rows there.

This new feature will help you confidently build and test your apps without affecting your live production data.
