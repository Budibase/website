---
title: Dev/Prod switcher
description: You can now switch between dev and prod environments within the data section.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.png
images:
- https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.png
date: "2025-08-18"
author: Joe Johnston
draft: false
---

![dev prod switcher](https://res.cloudinary.com/daog6scxm/image/upload/v1755010157/cms/updates/dev%20prod%20switcher/prod_mcmfua.webp)

We're excited to announce a new feature that gives you more control over your development and production environments. The Dev/Prod switcher within the data section allows you to switch seamlessly between your development and production data.

**Key Updates:**
- Switching Environments: Easily toggle between "Dev" and "Prod" modes to view and work with the corresponding data.
- External Tables: The switcher is fully compatible with external tables that use [environment variables](/pricing), making managing your different data sources easier. If you use an external data source and do not have environment variables, you will not have access to the Dev environment.
- Production Safety: In Prod mode, adding or editing a table's schema is disabled. It's still possible to update the records.
- Import/Export: While in both dev and prod mode, you still have the flexibility to import and export your tables, ensuring you can manage your data as needed.
- Seed data: You can seed prod tables with dev table data by clicking the arrow beside the workspace publish button and selecting "Seed and publish".

![Seed data flow](https://files.readme.io/6b653e142e4779d25de58a948f343ea820028ceffaa7109cd8fd70d6a6098fad-prod_publish.png)


**Important information for existing users**
Before this release, the old system combined data in dev and prod in a way that was often confusing. We are creating a clear separation to better align with standard software development. This new feature will help you confidently build and test your apps without affecting your live production data.


## Documentation
[Read the docs](https://docs.budibase.com/docs/dev-prod-switcher) to learn more about  dev/prod environments.
