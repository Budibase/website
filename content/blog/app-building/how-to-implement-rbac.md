+++
author = "Ronan McQuillan"
date = 2022-05-23T23:00:00Z
description = "Knowing how to implement RBAC is a crucial skill for building modern web applications. Here’s our 8 step guide."
draft = true
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653385829/cms/How_to_Implement_RBAC_ngjzus.png"
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Implement RBAC in 8 Steps"

+++
Knowing how to implement RBAC is a crucial skill for building modern web applications. With an ever-increasing need to maximize security, efficiency, and usability, RBAC is an essential tool for successful app projects.

In short, RBAC, or _role-based access control_, is a framework built around defined roles, each with associate permissions. Users are then assigned to one of these roles, to determine which actions they can take within your app.

For a more in-depth explanation, check out our ultimate guide to role-based access control.

Today though, we’re looking at the specifics of how you can put this into practice in your next app project.

Here’s how to implement RBAC for web apps in 8 steps.

![How to implement RBAC audit workflows](https://res.cloudinary.com/daog6scxm/image/upload/v1653386660/cms/How_to_Implement_RBAC_copy_vvpxzu.png "How to implement RBAC audit workflows")

## 1. Audit your current status

The first thing you need to do is audit your current status. More specifically, you’ll need a clear idea of two things:

1. The exact resources your RBAC system will cover.
2. How users currently access and interact with these resources.

For the first step, resources can include entire datasets; specific databases, tables, and views; or individual attributes, rows, and objects, as well as any processes, actions, or functions that are based around these.

RBAC is built on the principles of least privilege and separation of duty, meaning that users should be exposed to the minimum amount of data that allows them to carry out their daily tasks.

Obviously, we need to know what data we’re working with before we can decide how to assign permissions.

You’ll also need to audit how your resources fit into existing workflows.

In many cases, you’ll have already done this as part of your requirements-gathering process.

If not, the key is to determine what works in your current workflows, as well as where you’re incurring risks or encountering inefficiencies.

So for example, you might be replacing a legacy system with a more modern solution for managing a specific workflow. There might be a particular UI, process, or some other element of your previous app that your employees are satisfied with.

Despite this, you might determine that your admin team can access data that they don’t need. For example, they only need certain elements of your customers’ information, but not their full personal details.

The overall goal here is to take each of the resources you identified and relate these to the kinds of users who interact with them so that you can achieve the ideal balance of security and accessibility.

![Defining Roles](https://res.cloudinary.com/daog6scxm/image/upload/v1653386624/cms/How_to_Implement_RBAC-2_vaecmv.gif "Defining Roles")

## 2. Define roles

Next, we can use this information to start defining our roles. There are two parts to this process:

1. Deciding on discrete customer groupings.
2. Determining the roles that should be associated with each.

Normally, this means creating a hierarchy of roles, based on your employees’ existing job functions. In other words, mimicking your existing organizational or departmental structure in your RBAC system.

So in a sales app, you might have separate roles for individual salespeople, team leaders, and managers.

Of course, you might have workflows that cut across different teams and departments. Say you wanted to create roles for an IT device rental tool. In this case, your roles wouldn’t neatly follow your existing organizational structure.

That is, an employee’s job title doesn’t really reflect the data they need to rent a laptop or a monitor. Instead, your roles here should reflect different users' competence within the specific workflow.

This could be as simple as defining two separate roles for device management teams and all other employees.

Once you’ve outlined your roles in the abstract, you can define the exact permissions that each needs.

As a starting point, you can return to the resources you identified earlier, and decide whether each role will need _read, create, update,_ or _delete_ permissions, or none of these.

So in our device rental example, ordinary users will need to read limited information on different assets to create and update rental requests. IT teams will need complete permissions across both datasets.

You can then think about additional constraints within each of these permissions.

For example, we don’t want our basic users to be able to update _any_ rental request. Rather, they only need to do this for requests they’ve made. Similarly, they’ll need to be able to read their own requests.

We’ll look at how you can achieve this a little later.

![Query-level RBAC implementation](https://res.cloudinary.com/daog6scxm/image/upload/v1653386492/cms/Query_level_RBAC_v5gfou.png "Query-level RBAC implementation")

## 3. Query-level implementation

Now it’s time to think about putting our roles and permissions into practice. Specifically, we’re going to look at how to implement RBAC within an application at three separate levels:

1. Database queries.
2. App screens and interfaces.
3. Individual components.

These offer differing levels of specificity when it comes to implementing permissions.

Let’s take a look at query-level implementation first. This means restricting actual database queries to different roles, regardless of how they’re triggered in your app’s UI.

There are two ways to go about this:

1. Restricting all _read_ or _write_ permissions to specific roles for individual data sources.
2. Creating custom queries, and assigning them to a specific role.

We’ve created a dedicated guide to data access control, which you can check out to learn more.

This is a useful way to provide blanket permissions to resources, as restrictions will apply across your entire application. An obvious use case would be if you know that certain groups will _never_ need to access particular data sets or tables.

Within Budibase, we can achieve this using the _manage access_ tab under any data source.

We can also assign custom queries on external data sources to any existing role, with an intuitive drop-down selector.

There are a couple of downsides here though.

Firstly, this type of blanket restriction isn’t always viable without creating additional custom queries or views for cases where certain roles only need partial access to a given dataset.

Secondly, you’ll still need to account for your RBAC system within your app’s UI, even if you implement it at the data level. Remember, RBAC is just as much about providing intuitive, efficient UIs as it is about securing your data.

As such, even with query-level implementation, you’ll normally need to take additional steps to hide empty UI screens and components from users without the correct permissions.

![Implementing RBAC for screens](https://res.cloudinary.com/daog6scxm/image/upload/v1653386447/cms/Screen_level_RBAC_yvktkg.png "Implementing RBAC for screens")

## 4. Interface-level implementation

As we’ve touched on already, we can also implement our RBAC system at the level of screens and interfaces. In other words, users must have the appropriate role to access a given app screen.

In our device rental example, ordinary employees might only have access to asset listings and request forms. Your IT team could then access additional screens for device management, analyzing demand, and responding to rental requests.

In a hierarchical RBAC system, we can assign the minimum permission required to access any screen.

In Budibase, we can do this when we create a screen or any time afterward. Again, this is selected from a simple dropdown.

This is an effective, easy way to provide a streamlined UX for each role. Users will only be able to access screens that relate to their core tasks, greatly simplifying in-app navigation.

However, this type of RBAC implementation also poses its own challenges, especially if you have multiple roles with different permissions on the same datasets.

Let’s return to our device rental app example to illustrate this.

Remember our basic users can _read_ or _update_ rental requests that they’ve made themselves. They can also read certain attributes from the device management data, say item descriptions, but not others, like service or demand information.

IT team members can read or update all attributes and entries across both datasets.

That means if we relied solely on screen-level RBAC implementation, our app would likely need at least six screens for all of the different permutations of actions users can take.

This would be manageable, but if we had a larger number of roles or datasets, things could get messy.

Component-level implementation can make life easier in these scenarios.

![Component level RBAC implementation](https://res.cloudinary.com/daog6scxm/image/upload/v1653386399/cms/Component_level_RBAC_a4o0ew.png "Component Level RBAC implementation")

## 5. Component-level implementation

We can make individual UI components behave differently, based on the role of the user who’s viewing them. This is useful when the difference in permissions between two roles is relatively minor, or we want to minimize our app’s screens.

Essentially, this means using _conditionality_ to set rules based on the current user’s role. Specifically, we can use these conditions to:

* Hide components.
* Display components.
* Update component’s settings.

Say our device rental tool’s home screen was built around a simple table, listing all of the assets that are available to employees. Rather than creating separate home screens for each role, we could apply conditionality rules to its constituent parts to achieve the same results.

We could apply a rule to the table so that when ordinary employees use the app, only the relevant attributes are displayed. When an IT team user accesses the app, they’ll see all of the additional attributes too.

We could do something similar so that when a basic user accesses our app, the table is filtered to only show entries they’ve created.

Similarly, we could create rules so that any components that allow users to navigate to device management screens are hidden from anyone who doesn’t have the right role to access these.

Of course, in reality, we’ll often need to use a combination of all three implementation techniques to achieve our desired results, in terms of both security and usability.

As we can see, each of these is best suited to different situations, largely relating to the degree of difference between different roles, with regard to a particular dataset.

![Testing roles and implementing RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1653386355/cms/Testing_fpkk4b.png "Testing roles and implementing RBAC")

## 6. Testing roles and implementation

Whichever combination of implementation methods you choose, the next step is thorough testing.

This achieves three things:

1. Ensuring that your RBAC system works as you intended.
2. Identifying gaps or holes in how you’ve implemented your system.
3. Confirming that your UIs are as efficient as possible.

Naturally, you’ll need the ability to preview your app as each different role would see it.

In Budibase, you can preview unpublished apps from any role’s perspective. Quickly switch between different roles to thoroughly test your RBAC implementation.

The goal here is to test two things within your app:

1. That each role has the appropriate permissions, according to the principle of least privilege.
2. That each role’s UI is sufficiently decluttered and streamlined.

The idea here is to sequentially work through each role’s possible actions, paying specific attention to any unnecessary, missing, or unintuitive resources and design elements.

![Implementing an RBAC system assigning roles](https://res.cloudinary.com/daog6scxm/image/upload/v1653386313/cms/Testing_2_nrvgzr.png "Implementing an RBAC system assigning roles")

## 7. Role assignment

Once you’re satisfied that your roles are implemented effectively, it’s time to begin assigning them to users. A core principle of RBAC is that all users must be assigned to a defined role. They can then take any actions that are permitted for their role.

Luckily, you should have done the bulk of the work required here while you were defining your roles in the first place. That is, you should already have a clear understanding of which users should be assigned to each role.

The remaining step is putting this into practice.

In Budibase, you can manage role assignments under the _users_ tab of any of your apps.

Click to edit any user, to assign them to the proper role with a dropdown selector. You’ll need to do this when creating new users too.

![Ongoing monitoring](https://res.cloudinary.com/daog6scxm/image/upload/v1653386006/cms/Ongoing_Monitoring_nlhpwk.png "Ongoing monitoring")

## 8. Monitoring and auditing

Finally, it’s important to thoroughly audit and monitor your RBAC implementation on an ongoing basis.

The purpose of this is twofold:

1. Ensuring that your RBAC system is implemented correctly.
2. Identifying issues that might mean that your system is not fit for purpose.

On the first point, the idea is to audit your users regularly to ensure that they are assigned the correct role. Again, this is relatively straightforward, as roles typically map onto defined job functions or competencies within workflows.

There are only a handful of situations where issues can occur here. These include scenarios where:

* A user was assigned to the wrong role in the first place.
* A user’s needs have changed but their role hasn’t but updated.
* A user’s role has changed when it shouldn’t have.
* Your RBAC system has changed, but a user’s role hasn’t been updated to reflect this.

This leads us neatly to the other reason to monitor and audit your app’s RBAC framework.

That is, ensuring that it continues to be fit for purpose.

Issues can emerge over time with any access control system. For example, you might roll out new features and data, or implement changes to your workflows. In many cases, this will require adjustments to your existing roles.

This means adding or removing roles from your framework, or making adjustments to existing ones. The key here is identifying the situations where this might be necessary, so you can take action in advance.

With Budibase, it’s never been easier to create professional web apps, with fully functional RBAC. Our low-code platform offers conditional UIs, custom automations, optional self-hosting, and extensive support for external data sources.

Sign up to Budibase for free today.