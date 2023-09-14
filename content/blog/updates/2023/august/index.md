---
title: August 2023 Product Update (v2.10)
description: August 2023 release - New updates and improvements to Budibase.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1694440512/features/CleanShot_2023-09-11_at_14.55.04_2x_yafhxn.png
date: "2023-09-09"
author: Joe Johnston
draft: false

---

The August release has landed and we've excited to launch some major improvements to the current Budibase experience:



---



## Simple and secure filtering with Views 2.0

Views in Budibase are a simple way to filter data. They're incredibly popular so we decided to spend August improving their performance and design. 

The new Views now support the new editable Grid - significantly improve the design and overall editing experience. Additionally, there's a new way to create new Views - Simply filter your table, click Create View, give it name, and that's it -  Budibase will create a new View with your filtered data.



![Views v2](https://res.cloudinary.com/daog6scxm/image/upload/v1694440154/features/viewsv2v2_bjizou.webp)



### Views - Access

By default, View access is inherited from the parent table. **View access is only configurable on the [Business plan](https://budibase.com/pricing) and above.**



![Views RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1694605467/features/views-rbac.png)



### Views roadmap

With this release, we've removed Groupby and Calculation functionality from Views. We apologize is this has caused any inconvenience. We are working behind the scenes on a major transformation to the Budibase data experience. This major update will include a better experience around Groupbys and Calculations and result in a large performance boost. We plan to release this new experience over the next month or two.







---



## Enhancements to the Form block

Building forms with Budibase is now easier and faster. Configure form field visability, validation, actions, and more from the form block settings panel and the new field popover.

![New form block](https://res.cloudinary.com/daog6scxm/image/upload/v1694440139/features/form-block-v2_loa4u9.webp)



---



## Simpler RBAC

We've made a large update to how roles work within Budibase. Previous to this release, there were 3 account level roles:

- Admin - Can do anything and access everything within the account.
- Developer - Can create new apps and edit old ones.
- App user - Can access published apps.



Now, there are only 2 account level roles:

- Admin - Can do anything and access everything within the account. 
- Member - Can access published apps.



## Introducing Creator access

Business and Enterprise customers can now give users Creator access to an individual app. Creator access allow users to edit the app's data, design, and automations.

With this additional granularity, Business and Enterprise customers can select whether a member is a Creator or an App User for each application. This is particularly important when you someone who is has Creator access on one app, having Creator access on another.

It's important to note, existing users with the Developer role will continue with the Developer role until updated by the account admin. Going forward, when adding new users, the Developer role will not be available.

![creator role](https://res.cloudinary.com/daog6scxm/image/upload/v1694440137/features/creator-role_qhbigt.webp)




---



## Streamlined design UX

We have combined the Screens and Component tree panels within the Design section to streamline the app building experience.

![design section refresh](https://res.cloudinary.com/daog6scxm/image/upload/v1694440075/features/componentandscreencombo_hgnmfr.webp)





---



## New content

### Video

**University updates**

- [Budibase introduction](https://youtu.be/I2xvZPIv4IQ)
- [App portal](https://youtu.be/J6G8DaoK0o8)
- [Connect to SQL](https://youtu.be/7GluL-Z8J3k)
- [Internal tables](https://youtu.be/zyBTXYC-GyY)
- [Screens](https://youtu.be/nKR62Iuj8Zo)
- [Displaying data in apps](https://youtu.be/ryTKOLzAbkg)
- [Ejecting a block](https://youtu.be/Ef3tTx1UKUs)
- [Designing UI](https://youtu.be/uJzE3VXdM9Y)
- [Filtering, searching, sorting](https://youtu.be/qTmyzqMFCoY)
- [Building a form](https://youtu.be/YwScV12Oi5s)
- [Designing for mobile](https://youtu.be/LlsdBfMojtE)

**Tutorials**

- [How to turn your Excel spreadsheet into an app](https://youtu.be/Wxyyj3qWHEk)
- [Build an asset mgmt app using Postgres and Budibase](https://youtu.be/CMBCiM8HXyc)
- [Build a custom CRM](https://youtu.be/PtUU6bk5xkI)

### Blog

- [How to build a CRM with Budibase](https://budibase.com/blog/tutorials/how-to-build-a-crm/)
- [What are approval workflows](https://budibase.com/blog/automation/approval-workflows/)
- [What is a workflow application?](https://budibase.com/blog/automation/workflow-application/)
- [What is a workflow engine](https://budibase.com/blog/automation/workflow-engine/)
- [SDKs vs APIs](https://budibase.com/blog/app-building/sdk-vs-api/)

---



### Bug fixes

- [[BUDI-7269\] Data table does not display when table name is matched in a different schema - MS SQL · Issue #11225 · Budibase/budibase](https://github.com/Budibase/budibase/issues/11225)  
- [[BUDI-7355\] Using a Formula column as the display column in SQL will cause the table not to load data after re-fetching · Issue #11423 · Budibase/budibase](https://github.com/Budibase/budibase/issues/11423)  
- [[BUDI-7304\] REST queries using dynamic variables returning 400 "Connection is closed" · Issue #11285 · Budibase/budibase](https://github.com/Budibase/budibase/issues/11285) 
- [[BUDI-7239\] Cannot filter by relationship on new SQL datasource · Issue #11089 · Budibase/budibase](https://github.com/Budibase/budibase/issues/11089)   
- [[BUDI-7165\] Multiple loop steps can be added to an automation step causing loops to silently fail · Issue #10961 · Budibase/budibase](https://github.com/Budibase/budibase/issues/10961)  
- [[BUDI-7106\] FireFox Issue: Mirrored table columns, sorted in opposite direction as defined in design · Issue #10689 · Budibase/budibase](https://github.com/Budibase/budibase/issues/10689)  
- [[BUDI-7026\] When custom role doesn't exist in production app - assigned users should be treated as public · Issue #10438 · Budibase/budibase](https://github.com/Budibase/budibase/issues/10438)  
- [[BUDI-6924\] Empty .update() call detected error displayed when updating a table record from the side panel · Issue #10387 · Budibase/budibase](https://github.com/Budibase/budibase/issues/10387)  
- [Not able to connect to gcp postgres SSL, client-cert client-key, server-ca · Issue #6189 · Budibase/budibase](https://github.com/Budibase/budibase/issues/6189) 
- Warning messages at the top of the screen are causing scrolling issues, making it impossible to view my last app or the save button in Settings, and automation. #7025 
- Query bindings drawer - existing binding value is cleared on cancel #7090 Bug - User table editing causes strange errors #7051 
- Catch parsing error in rowProcessor and prevent it firing bb-alert #7035
- Remove syncing of automation history from production to development DBs #7188 Automation history copied over during app sync #7171  