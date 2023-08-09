---
title: July 2023 Product Update (v2.9)
description: July 2023 release - New updates and improvements to Budibase.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1691574578/features/design-collab.png
date: "2023-08-08"
author: Joe Johnston
draft: false
---

Budibase is officially a collaborative platform where IT professionals can work together to build internal apps, faster. The July release introduces a number of new features, including; multiplayer support, running Budibase in an air-gapped environment, customizing the color of options within a select field, disabling notifications on blocks, and more.

---



## Team up to move app building forward, faster

We are thrilled to announce that multiplayer mode is now available within the design and automate sections of Budibase. Creators can now:

- Give colleagues access to data.
- Invite teammates into your design process.
- Collaborate to build better automations.
- Build better apps with their team, faster.

![design collab](https://res.cloudinary.com/daog6scxm/image/upload/v1691574578/features/design-collab.webp)



---



## Customize the color of options

Customize the color of options within Options and Multi-select fields.

![Option colors](https://res.cloudinary.com/daog6scxm/image/upload/v1691501572/features/select-field_c76g47.webp)





---



## Air-gapped deployment

> Available to enterprise customers only.

Enterprise customers can now deploy Budibase within an air-gapped environment.

*If you're interested in deploying Budibase within an air-gapped environment, please [contact sales](https://budibase.com/contact/).*



![air-gapped environment](https://res.cloudinary.com/daog6scxm/image/upload/v1691582457/features/air_gap_psvdsh.webp)



---



{{< cta >}}


---



## Further updates

- **Disable notifications within Block components**
  
  Block components can be configured to disable notifications
  
- **Filter relationship pickers**
  
  You now now apply filtering to your relationship picker component.
  
- **Download system logs**
  
  Budibase self-host installations now support exporting system logs (up to 20MB).
  
  
  
  

---



## New content

### Video

- [How to work with REST APIs and Budibase](https://youtu.be/zeMVcx59IsE)
- [Build a form on top of a SQL database](https://youtu.be/PZQNxwMk0es)
- [Build an AI app in under 20 minutes](https://youtu.be/64l-sBltgnw)
- [Build a simple CRUD app on top of PostgreSQL](https://youtu.be/X6LgF15NqY0)

### Blog

- [What are the components of an API](https://budibase.com/blog/inside-it/what-are-the-components-of-an-api/)
- [What are API headers](https://budibase.com/blog/inside-it/api-headers/)
- [Integration for digital transformation - 6 methods](https://budibase.com/blog/automation/integration-digital-transformation/)
- [Workflow management database design](https://budibase.com/blog/data/workflow-management-database-design/)
- [What is an API call?](https://budibase.com/blog/app-building/what-is-an-api-call/)
- [ITOM vs ITSM](https://budibase.com/blog/inside-it/itom-vs-itsm/)



### Docs

- [Helpers - inbuilt functions to prevent the need for writing code](https://docs.budibase.com/docs/helpers)
- [Configuring form fields in a table block (**recipe**)](https://docs.budibase.com/docs/configure-form-fields-of-a-table-block)
- [How to scroll to top of screen](https://docs.budibase.com/docs/scroll-to-form-field)
- [Update date field on change](https://docs.budibase.com/docs/update-date-field-on-change)

---



### Bug fixes



- [Cannot filter by relationship on new SQL datasource #7239](https://github.com/Budibase/budibase/issues/11089) 
- [Multiple loop steps can be added to an automation step causing loops to silently fail #7165](https://github.com/Budibase/budibase/issues/10961) 
- Query bindings drawer - existing binding value is cleared on cancel #7090 
- Catch parsing error in rowProcessor and prevent it firing bb-alert #7035 
- [When custom role doesn't exist in production app - assigned users should be treated as public #7026](https://github.com/Budibase/budibase/issues/10438) 
- [Empty .update() call detected error displayed when updating a table record from the side panel #6924](https://github.com/Budibase/budibase/issues/10387) 
- [Not able to connect to gcp postgres SSL, client-cert client-key, server-ca #5262](https://github.com/Budibase/budibase/issues/6189) 
- Selecting and de-selecting search fields on a Table block before ejecting causes the screen to permanently break #7280 
- Field group layout type setting does not appear when ejecting a block #7276 
- Clicking on Data or Automate tabs when a field dropdown is selected causes the page to open as a drawer #7275 
- [Number of filters set is different between Match Any and Match All #7264](https://github.com/Budibase/budibase/issues/11175) 
- [Fetch tables after upgrade to 2.8.1 spins infinitely when the datasource had no tables, only queries #7261](https://github.com/Budibase/budibase/issues/11160) 
- [[Builder] Bindings drawer HBS {{ /if }} syntax highlight issue #7260](https://github.com/Budibase/budibase/issues/11158) 
- [Edit column icon appears for datasource preview table #7254](https://github.com/Budibase/budibase/issues/11138) 
- Cannot eject table block #7229 
- Button action: 'navigate to' screen selection is empty #7180 
- if you create a google sheet table, you can't delete it #7140 
- [Issues with Onchange update record events #7117](https://github.com/Budibase/budibase/issues/10693)
- [Helm chart uses wrong image tags #7070](https://github.com/Budibase/budibase/issues/10791) 
- User Access Field Empty for Invited User in App Side Panel when Invited via User Settings Panel. #7043 
- Settings,Email, Broken ui in the base format email templates #7006 
- [Unexpected undo when editing inputs within the design view. #6987](https://github.com/Budibase/budibase/issues/10561) 
- User Data table, edit user link is broken #6981 
- CSV exporting and importing multi-select columns #6963 
- Unable to create a user through email invite #6947 
- [Clear Form does not unselect multi select picker #6701](https://github.com/Budibase/budibase/issues/9882) 
- [Deleting a data provider with nested parent container will prevent component being added to screen initially #6651](https://github.com/Budibase/budibase/issues/9838) 
- [Add sorting option "None" #4998](https://github.com/Budibase/budibase/issues/5395) 