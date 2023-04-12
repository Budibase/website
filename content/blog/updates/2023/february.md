---

title: February 2023 release notes
description: Discover what's new with Budibase, including new features, announcements, bug fixes, and more.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg
image: https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/Audit_logs_t1p1hp.png
images:
  - https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/Audit_logs_t1p1hp.png
  - https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/New_user_flow_xuidkr.png
  - https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/Undo_and_redo_lcgtfj.png
date: "2023-03-07"
author: Joe Johnston

---

As Budibase continues to grow in users and usage we decided to dedicate February to improving the scalability and usability of Budibase.  

---



## Undo/Redo

![Undo/redo image](https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/Undo_and_redo_lcgtfj.png)

A small but mighty feature, Undo/Redo has been on our backlog since day 1. With the February release, I’m pleased to announce users can undo/redo actions with the click of a button or using keyboard shortcuts. To undo an action, simply press Ctrl + Z / ⌘ + Z. To redo an undone action, press Ctrl + Shift + Z  / ⌘ + Shift + Z. 



---



## Faster user invite experience

![Faster user invite experience UI](https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/New_user_flow_xuidkr.png)

Invite users, assign roles, and configure permissions, right within the data, design, and automation sections. This is a huge improvement and will speed up the user invite flow significantly.



---



## Audit logs

![Audit logs](https://res.cloudinary.com/daog6scxm/image/upload/v1678206223/features/Audit_logs_t1p1hp.png)

Audit logs help you track and analyze your team members’ activity. They’re fully searchable and provide an overview and historical log into nearly every action that can be taken by your team members. Users can also download their audit logs.

Audit logs can be accessed by team members with the Admin role, and are available to customers on the business and enterprise plans. If you're interested in Audit Logs, please [contact sales](https://budibase.com/contact) for a demo.



---



## Enforced SSO 

Enforced SSO allows you to remove email login from the onboarding experience, and ensure all users within your tenant log in using SSO. Enforced SSO is available to customers on the enterprise plan.



---



## Improvements & Fixes

If you're interested in learning more about an improvement/bug fix, copy the issue ID, visit the [Budibase Repo](https://github.com/Budibase/budibase), and paste the ID into Github's search bar.

- Can't add user to a group. #6658
- Adding oidc config logo produces error on form save #6641
- App locked session contamination #6628
- App Access, user groups, I can't assign a user group to my app #6586
- Cannot Edit Display Column after saving CSV import with no display column chosen. #6546
- Unable to edit formula columns #6517
- Cannot assign Barcode/QR field in form #6371
- Helm install and 'clouseau@127.0.0.1' aborted since it cannot handle ["BIG_CREATION"] error #6363
- Zero Values in Sources/Queries force datatype of column to text resulting in column sorting problems #6324
- Table component displays Invalid Date for dates formatted with handlebars Date helper #6137
- OIDC logos don't appear on auth config screen #5757
- Screen freezes when filtering by date. #9406
- Wildcard S3 domains in NGINX CSP #8042
- Trigger binding not adding on click #8560
- Is in filter no longer directly supports relationship pickers #9015



 