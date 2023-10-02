---
title: September 2023 Product Update
description: September 2023 release - New updates and improvements to Budibase.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1696249989/features/quick-app-access_qbaaco.png
date: "2023-10-01"
author: Joe Johnston
draft: false


---

The September release is here and it comes with a number of crowd-pleasing, community-driven changes that will improve the app building and  access experience:



---



## Retain user & table data when overriding applications

We’ve been asked time and time again for the ability to update an application without impacting the user or data tables. From today, you can import applications, while retaining these artifacts.

![new app import](https://res.cloudinary.com/daog6scxm/image/upload/v1696249767/features/new-app-import.png)



---



## User columns now available (and updates to the user table)

The user table as you know today will still exist, but in a read-only format. If you have user assignment needs, please use the new user column.

![User column](https://res.cloudinary.com/daog6scxm/image/upload/v1696249989/features/user-role_br68nq.png)



---



## Support for date-only field types

Previously we only supported DATETIME type fields, requiring users to set a default time for their value. Now we support DATE type values as well.



![date-only field type](https://res.cloudinary.com/daog6scxm/image/upload/v1696249988/features/date-only-field-type_hvrtot.png)



---



## View and interact with your applications directly in the Budibase portal 

We have redesigned our portal experience, allowing you to use your applications directly within the portal view.

![quick app access](https://res.cloudinary.com/daog6scxm/image/upload/v1696249989/features/quick-app-access_qbaaco.webp)



---



## Query UI improvements

We have made improvements to the query creation process for data sources allowing you to view your query results side-by-side with your query string and transformer.

![query ui improvements](https://res.cloudinary.com/daog6scxm/image/upload/v1696249989/features/query-ui-update_k69d1u.png)



---



## New content

### Video

**Tutorials**

- [How to build a PostgreSQL admin panel](https://youtu.be/rle_Gaucol8)
- [Easiest way to build a CRUD app](https://youtu.be/DESg-LMggtg)
- [Unlocking insights - creating a realtime dashboard](https://youtu.be/RCeoYL9xVfc)
- [How to set up a Sales KPI approval process](https://youtu.be/uyh8QMjG-bk)

### Blog

- [10 strategies for simplified data management](https://budibase.com/blog/data/simplified-data-management/)
- [Microsoft Access alternatives](https://budibase.com/blog/data/microsoft-access-alternatives/)
- [How to build complex approvals with Budibase](https://budibase.com/blog/tutorials/complex-approvals/)
- [Admin UI design tips](https://budibase.com/blog/app-building/admin-ui/)



---



### Bug fixes

- Linked rows, longform text areas, and multi-select arrays do not save when set within an automation #7528 https://github.com/Budibase/budibase/issues/11844 
- Delete automations once apps are deleted #7366  It looks like you can add a new user via the table block, but it fails silently #7258 https://github.com/Budibase/budibase/issues/11155 
- Google Sheet rowIndex error - off by 1 (or 2?) #7249 https://github.com/Budibase/budibase/issues/11075 
- Schema changes in REST queries are overwritten on refetch #7084  
- Initial form step binding drawer can crash #7481  
- Postgres / SQL: Invalid time value error when saving JSON as text #7476  
- Save Row action will attempt to save the image data of the S3 Upload component #7468 https://github.com/Budibase/budibase/issues/11719 
- Customers cannot access app backups #7467  
- More than filter not working for static number type formula, when changed from a dynamic formula #7449 https://github.com/Budibase/budibase/issues/11669 
- Finish and test automation for cron trigger ignores test timestamp when filtering #7447 https://github.com/Budibase/budibase/issues/11663 
- Relationship picker incorrectly renders selections, and not all records show in the dropdown #7375 https://github.com/Budibase/budibase/issues/11478 
- Data table does not display when table name is matched in a different schema - MS SQL #7269 https://github.com/Budibase/budibase/issues/11225 
- Deleting account that hasn't been verified, or failed provisioning, produces 500 #6973  
- The Number 0 cannot be displayed on input number fields, when being pulled in from a data provider. #6922 https://github.com/Budibase/budibase/issues/10412 
- Dynamic Filtering on 0 for external sources e.g. mysql, postgres #6781 https://github.com/Budibase/budibase/issues/10118