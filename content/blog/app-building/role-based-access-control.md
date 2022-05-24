+++
author = "Ronan McQuillan"
date = 2022-05-23T23:00:00Z
description = "Role-based access control is a key method for maximizing your app’s security and usability. Check out our ultimate guide for everything you need to know."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653383363/cms/How_to_Integrate_Multiple_Databases_header_qwivo9.png"
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Role-Based Access Control | Ultimate Guide"

+++
Granting users the right level of access to your systems and data is essential for security and UX alike. Today we’re going to dive deep into the most prominent way to achieve this - **_role-based access control_** (RBAC).

More specifically, we’re going to cover everything you need to know about implementing RBAC for your application. We’ll start by exploring what RBAC is, and the situations where it’s most effective.

Then, we’ll move on to how you can implement a successful RBAC system, including concrete steps you can follow, best practices, and how Budibase makes it a breeze to assign and control user access.

First, though, let’s start with the basics.

## What is access control?

Before we drill into RBAC, it’s important to have a grasp of what _access control_ means more generally. Essentially, this is any system you put in place to govern how users access different data and functionality within your apps.

In other words, access control means defining rules to grant different kinds of users different permissions. This determines which actions different users can take.

The specific way you create these rules, including what they’re based on, is what’s known as an _access control system_. Role-based access control is probably the most common system, but as we’ll see later, there are a few different options.

We’ll explore each of these shortly.

For now though, let’s take a look at why access control matters.

### Why do you need access management?

When you build any kind of software tool, it’s unlikely that all of your users will have the exact same needs. For example, your area sales manager and a member of your admin team might both need to use your CRM platform, but what they use it for will be very different.

If you give either of them access to parts of the system they don’t need, you’ll introduce unnecessary security risks, as well as making it more difficult for users to carry out their required tasks.

The goal of access management is to ensure that each user has the exact permissions they need to do their job. This means balancing security, efficiency, and ease of access.

Of course, if you only have a handful of users, you could manage this on a case-by-case basis. For anything larger than this, you’ll need to have a systematic approach in place. Just think how long it would take to create custom permissions if you have thousands of users.

As such, the idea of any access control system is to create a framework to assign permission to different users, based on some defined criteria.

Let’s take a look at the different frameworks you can use here, as well as how RBAC fits into the equation.

## Access control systems

As noted, there are a few different common access control systems for modern applications. While these share the same core goal, they differ in terms of how rules are defined, as well as technical implementation.

Let’s look at a few of the standards that are most widely used today.

### Role-based access control (RBAC)

Role-based access control involves assigning permissions to users, based on their role within your organization. In practice, this means grouping your users into different categories, based on the data and functionality they require.

So, if you had an online [complaints record](https://budibase.com/business-apps/templates/complaints-record-template/) tool, you might need three distinct roles, so that:

* Customers can submit complaints or view and manage their own previous submissions.
* Service agents can view and respond to all complaints.
* Managers can view and analyze each agent’s responses and track record, along with all complaints.

One of the key principles of RBAC is minimizing the data that different user groups are exposed to. Specifically, each role is given the least permission that will allow them to carry out their required tasks.

As far as implementation, RBAC requires you to define roles in terms of the permissions you’ll grant them, and then assign each user to one of these.

Therefore, all users must have a role.

Roles are generally, though not always, hierarchical within RBAC systems, at least within a single application.

In a hierarchical system, each role inherits the same permissions as those below it. So, in our example, the service agents have all of the same permissions as customers, plus their own additional access.

For more complex systems, non-hierarchical RBAC may be more appropriate. For example, if you had a complex application that multiple different departments use, you might decide to use a more complex, non-hierarchical RBAC.

![Role-based access control](https://res.cloudinary.com/daog6scxm/image/upload/v1653384780/cms/Role-Based_Access_Control_n2ucsa.png "Role-based access control")

### Attribute-based access control (ABAC)

Attribute-based access control is an alternative framework, that evolved out of RBAC. Rather than creating specific roles, ABAC involves _setting conditions_ to automatically grant permissions, based on users’ _existing attributes_.

These could be variables like their job title, location, or department. It could even be a changing attribute, like the current device or network that a user access your platform from.

ABAC is also sometimes referred to as _dynamic access control_.

This is because a user’s permissions automatically change when one of the tied attributes changes. So for example, an employee might automatically gain increased permissions, if they get a promotion. At least, if their permissions are tied to their job title.

An attribute system can be based on a number of attributes, and combinations of different conditions. Conditions are evaluated with boolean logic to determine whether or not to grant access to different resources.

So for example, we might limit access to the most sensitive data to users whose:

* Job role equals manager.
* Length of service is more than five years.
* Location is head office.

We could set similar conditions for any number of different permissions. We’ll compare ABAC and role-based access control in more detail shortly, to gain a fuller picture of which is appropriate in different contexts

![Attribute Based Access Control](https://res.cloudinary.com/daog6scxm/image/upload/v1653384737/cms/Attribute-Based_Access_Control_vlpd0v.png "Attribute Based Access Control")

### Access control list (ACL)

Access control lists are a very simplistic access control system. Today, ACL systems are less common for applications but are still used in networks and legacy file systems.

Essentially, this is a table that lists the permissions attached to different objects and resources.

So, an ACL lists three things:

* Controlled objects.
* The users that can access them.
* The actions these users can carry out - ie _read, update, create_, or _delete_.

Each user must have their own entry. This is then linked to the security attributes of all relevant objects.

The reason that ACL isn’t widely used for modern applications is that it is comparatively difficult to implement at scale. That is, there’s no systematic way to assign new permissions quickly.

If a new employee joined, you’d have to assign all of the permissions they need manually.

![Access Control List](https://res.cloudinary.com/daog6scxm/image/upload/v1653384704/cms/Attribute-Based_Access_Control_2_gycyeg.png "Access Control List")

### Mandatory access control (MAC)

Mandatory access control is a security method that can be used to complement RBAC. This can be distinguished from _discretionary access control_, which we’ll come to shortly.

MAC is any system where a central authority sets policies for how different users can access different objects. This can mean using either physical or digital access controls.

Mandatory access control is popular as it offers complete control for central authorities. However, it can create a large administrative workload, as well as introducing certain security risks, compared to the more systematic approaches we’ve seen so far.

### Discretionary access control (DAC)

By contrast, discretionary access control allows individual resource owners to assign permissions to their own assets.

This can be preferable over MAC, as individual resource owners can manage access themselves, without the need to go through a central authority. This can be more efficient and flexible.

However, DAC also introduces additional security risks. Since resource owners have the discretion to assign permissions themselves, the scope for human error is increased, meaning that it’s more likely that a user could mistakenly be given the wrong access.

## Why implement role-based access control?

So, now that we have a better understanding of the different options available, let’s think about when and why you would choose role-based access control.

More specifically, we’ll look at the benefits of RBAC, the challenges you’ll encounter, how it stacks up against alternative systems, and key use-cases.

### Benefits of RBAC

RBAC is widely used across modern applications. Part of this popularity comes from its ability to reduce errors, improve administrative efficiency, and eliminate employee downtime.

Let’s take a look at some of the more specific high-level benefits of implementing role-based access control.

#### Efficiency

The most obvious benefit of RBAC is that it offers exceptional operational efficiency. All roles can be defined to match your existing organizational structure. This streamlines processes at two key levels.

Firstly, since users’ permissions are based on the needs of their jobs, any systems and workflows based around this will inherently offer more efficient user experiences. That is, users will be limited to the actions they actually need to perform.

Secondly, RBAC is particularly easy to administer. For example, there’s little work involved in adding new users, or updating an existing one, as they simply need to be assigned to an existing, predefined role.

#### Compliance

RBAC also offers easy compliance with different regulatory frameworks. Remember, the whole point of a role-based system is that each user must be assigned to a defined role. There is no scope for exceptions or derivations from this.

This means that you only have to worry about keeping your roles compliant with different regulations, without having to consider this at an individual user level. This is a massive benefit over other access control systems, where users may have bespoke permissions.

Consider as well that the goal of any RBAC system is to give each user the lowest level of access that will allow them to do their job.

This means that RBAC is naturally consistent with key data protection principles, including _minimization_ and _purpose limitation_.

#### Visibility

Role-based systems also offer a high degree of visibility and easy auditing. Since there are a limited number of defined roles, it’s easy to quickly check which users can access different elements of your application.

This also allows you to audit the suitability and effectiveness of your access control, at the level of roles, rather than on an individual user basis. That way, it’s easier to identify and correct issues.

For example, you might find specific users that are assigned to the wrong role. Alternatively, you might find that there are cases where none of your existing roles are suitable, and it’s necessary to add new ones.

We can also quickly see which users have different permissions, in a defined and coherent manner.

![RBAC Audit](https://res.cloudinary.com/daog6scxm/image/upload/v1653384552/cms/RBAC_Audit_oicgra.png "RBAC Audit")

#### Cost-savings

Owing to its efficiency, RBAC can also be highly beneficial to your business’s bottom line. This makes sense, as reducing administrative workloads will naturally save your labor costs. The same can be said for improving efficiency for end-users.

In both cases, these cost savings will be directly proportional to the number of users your application has.

This means that RBAC is particularly popular among large organizations or businesses that need externally-facing apps, as it’s easy and cost-effective to administer permissions for large numbers of users.

RBAC’s compliance benefits also contribute to its cost-effectiveness.

Again, we can think about this on two levels. Firstly, there’s the fact that compliance tasks themselves are more straightforward when dealing with a discreet number of defined roles.

Secondly, with improved compliance outcomes, there’s a reduced risk of fines, reputational damage, or other associated costs.

#### Risk management

Data security is a top risk factor for modern businesses. In particular, data leaks, unauthorized access, service interruptions, and other security breaches can lead to massive direct and indirect costs.

These include penalties from regulators, damage to your reputation, and internal operational costs.

Role-based access control is an effective framework for reducing these risks, as well as limiting the impact when things do go wrong.

Let’s take the example of unauthorized access.

Say one of your sales team accidentally gives away their CRM logins. The potential impact of this is much lower if the affected user can only access limited data, say for instance their own sales records and correspondence.

The potential impact would be much greater without RBAC, as the account may have access to _all_ customer data. This would mean a greater number of customers would be affected, and a greater volume of data relating to each one would be exposed to the breach.

#### Scalability

RBAC also offers a high level of scalability, both horizontally and vertically. That is, there are minimal barriers either to adding new users to existing roles, or updating the roles themselves.

So, if we need to add new users, we can simply assign them to a defined role, without the need to manually create custom permissions. This makes it easy to add users at scale. For instance, for a large cohort of new employees.

Similarly, if our application’s requirements change, we can alter our roles to reflect this.

For example, your workflows might evolve so that certain members of your team need access to additional resources, data, or functionality. Or, the opposite could be true, and you may decide that accessing certain data isn’t critical for a particular user group.

RBAC makes it easy to implement these changes, by simply modifying existing roles, rather than changing permissions on a user-by-user basis.

Additionally, RBAC systems are often utilized in combination with _single sign-on tools_. This means that you can easily administer the same access control system across multiple tools and platforms.

### RBAC challenges

However, role-based access control isn’t the perfect solution for every use case. To gain a better understanding of where RBAC is appropriate, it’s important to understand some of the challenges it brings.

![Role-based access control challenges](https://res.cloudinary.com/daog6scxm/image/upload/v1653384455/cms/RBAC_Challenges_okvjah.png "Role-based access control challenges")

#### Role explosion

_Role explosion_ is a common challenge when creating and managing RBAC systems. This occurs in more complex applications, when administrators must define and manage a large volume of distinct access roles, relating to different datasets, user groups, and functionalities.

The trouble here is that when this gets out of hand, it can actually negate some of the core benefits of using RBAC.

Let’s take an extreme example of role explosion to illustrate the problem. Say that you have a very large platform, with 1,000 distinct user roles. It would be very difficult in this case for admins to manage permissions for each of these.

When the time comes to add new users, it would also be incredibly difficult for admins to figure out which role to assign.

Again, this is a particularly extreme case of role explosion.

However, it illustrates the need to consider whether or not RBAC is suitable for specific, complex applications.

#### Dealing with new data

Another challenge to be aware of is dealing with new datasets or even new functionality in your application.

Remember that RBAC means _predefining_ roles to control how different users access systems. This means that any new resources normally won’t be accounted for by your existing roles.

This might lead you to add datasets that none of your users can access, as no one has the correct permission.

As such, you’ll need to preempt any such changes to your application and adjust your roles accordingly, in advance.

#### Managing fringe cases

RBAC’s rigidness can also create challenges. We’ve said it before, but the whole point of a role-based system is to place every user into a defined group, giving them the right amount of access to fulfill their needs.

But what if a specific user’s need fall outside of this framework?

For example, say you have ten administrators assigned to one role, and three managers assigned to another. The managers can access all of the same data as the administrators, plus a few other objects.

This works fine, but one day your workflows change, and one of your admin team moves into more of a quality assurance function, which requires all of their current permissions, plus one of the objects that are restricted to the management role.

This is what’s known as a fringe case since that one user doesn’t fit the existing framework.

There are a few different ways you could deal with this:

* Assign the user to the management role, giving them the data they need, plus additional data that they don’t.
* Maintain the user’s current role, preventing them from accessing all of the data they need.
* Alter the administrator role, so that all users within it can access the required data.
* Add an additional role, for just this one user.

As you can see, each of these options requires compromise. This is by no means insurmountable, but it does highlight the importance of ongoing policy review for maintaining an effective RBAC system.

#### Ongoing policy changes

RBAC is sometimes referred to as a _set-and-forget_ approach to access control. While there is some truth to this, in comparison with other systems, it’s not the whole picture either.

The reality is that you’ll need to update and rejig your RBAC policies on an ongoing basis.

This means responding to new requirements for your application, as well as ensuring that your access control policies still meet old ones.

We’ll cover this in more detail later when we cover the steps you can follow to implement an effective RBAC system.

First though, let’s think a bit more concretely about the times when you’d choose RBAC for a web app project.

### RBAC vs ABAC

Nowadays, RBAC and ABAC are the two dominant access control systems. Remember, ABAC means using set conditions to grant permissions based on existing user attributes, rather than creating discreet roles and assigning them to users.

Obviously, this means that ABAC can offer a higher degree of granularity.

Take a look at our dedicated guide to the [differences between rule-based and role-based access control](budibase.com/blog/app-building/difference-between-rule-based-role-based-access-control) to learn more.

So, if we return to our previous example, where we had an RBAC system with distinct roles for _administrators_ and _managers_, how would this look in ABAC?

The first thing to note is that we could use individual users’ _job role_ attributes to achieve a similar result to our RBAC system. The difference is that we could also add additional attributes to the mix, to create a more detailed system.

For example, by taking their location or length of service into account.

However, this doesn’t mean that ABAC is superior. Indeed, the truth is a lot murkier.

For one thing, ABAC requires more computational power to implement than RBAC, which can harm your application’s performance. Opting for ABAC also means forgoing many of the benefits of role-based access control, although it also carries its own benefits.

For example, with an attribute-based system, it’s relatively difficult to quickly determine the existing permissions of any given user. The upside, however, is that administrators don’t need to assign permissions to users, as the system will do this automatically.

It’s worth noting that ABAC doesn’t necessarily prevent the challenges we outlined earlier for working with a role-based system.

Take fringe cases for example.

A user might temporarily need additional permissions to carry out a specific task. In an ABAC system, we’d need to alter their core attributes to achieve this, even if these don’t reflect the user’s actual attributes.

This can get confusing, especially if you’re conditions are built on multiple factors.

This is easier to manage in RBAC, as we can simply assign the user to an appropriate role, if only temporarily.

As such, one rule of thumb is that role-based access control is generally preferable, wherever it can feasibly be implemented. ABAC can then be used in situations where a role-based system is insufficient, or in very complex applications where role explosion is likely.

### RBAC use cases

So far, we’ve mainly covered the theory behind role-based access control. Before we move on to how you can implement an RBAC system, let’s take a look at a few real-world examples.

One classic example would be a simple internal tool, like an [employee directory](https://budibase.com/business-apps/templates/employee-directory-template/).

Say this is built around a database with two tables, for employees and users, joined by a one-to-one relationship.

All employees should be able to look up any of their colleagues or edit their own details. Some users in the HR team will need to be able to update any employee’s details, as well as adding new records.

So, we’ll need two roles:

* **Basic users** with _read_ permissions for all entries in the _employees_ table, and update permissions for any row that’s related to their own entry in the _users_ table.
* **Admin users** with _read_, _update_, _delete_ and _create_ permissions across the entire _employees_ table.

We can then use _conditional UIs_ to hide or display different elements, based on the current user’s role. For instance, a basic user would be shown a different interface, depending on whether they clicked through to their own entry or a colleague’s.

Of course, RBAC systems can also be much more complex.

For example, you might want to create a customer-facing web app. In this case, you might need four different roles, for distinct groups of internal and external users:

* Unregistered customers,
* Registered customers,
* Basic internal users,
* Admins.

Each of these would provide different levels of access. For example, unregistered customers may be able to view products, but not make an order.

## RBAC rules

Next, let’s think about the anatomy of an effective RBAC policy. So far we’ve taken a bit of a black-box approach to roles and role-based systems. Before we cover the practical side of implementing RBAC, let’s take a look at its constituent parts.

You can think of your RBAC system as being made up of three rules. Here’s what you need to know about each.

![Role-based access control rules](https://res.cloudinary.com/daog6scxm/image/upload/v1653384197/cms/RBAC_Rules_gnbzgg.png "Role-based access control rules")

### 1. Role assignment

The first RBAC rule is _role assignment_. This means that a user can only perform actions if they have been assigned a role.

In other words, every user must have a role.

The idea here is to ensure that no user can access the platform without being explicitly placed within your access control framework. This effectively prevents individual users from slipping through the cracks, or your access control framework from being circumvented.

This contributes to preventing unauthorized access.

### 2. Role authorization

_Role authorization_ is the second rule in RBAC systems. This means that a subject’s current role must be authorized for them. Here, a subject is any user, or it can also refer to an automated agent.

This must be assigned by whoever controls the system, normally an administrator.

So, a user can’t simply assign themselves the role they want. Obviously, this would hugely undermine the security of your application, so role authorization is critical.

### 3. Permission authorization

The third and final rule is _permission authorization_. This states that subjects can only exercise a permission if it is authorized for their current role. In other words, users can only take actions that are explicitly allowed by the role they’ve been assigned.

Permissions might mean allowing a particular role to _read_, _create_, _update_, or _delete_ a certain data set. The goal here is to ensure that users can only take actions that are required by their job function.

Additionally, this means that actions can’t be taken at all if they haven’t been authorized for a role.

On the one hand, this is crucial for maintaining a secure and efficient application. However, it also presents the challenge of maintaining and updating your roles on an ongoing basis. You’ll need to create and authorize new permissions when a new action is required.

## Implementing RBAC in 6 steps

Now that we have a firm grasp of what RBAC is, when it’s used, and the benefits it offers, we can start to think about the practical side of creating a role-based system.

Luckily, we can follow reproducible steps here to ensure the best outcome.

We've also created a dedicated guide on [how to implement RBAC](budibase.com/blog/app-building/how-to-implement-rbac).

Designing an effective role-based access control system is equal parts operational and technical. That is, the goal is to create a system that maximizes efficiency within your workflows, but there are also technical considerations to achieving this.

With that in mind, here’s how you can implement role-based access control in six steps.

### 1. Create an inventory

The first step is to create a thorough, detailed inventory of the resources your RBAC system will cover. The extent of this will depend on whether you’re defining a framework for a single application, or a wider ecosystem of tools.

For now, we’ll focus on creating an inventory for a single system. We can then expand the same principles to work with multiple tools.

At the most basic level, we can build our inventory around the different data sets we want to govern, as well as the actions different users can take for each.

So, we can start by outlining the different database entities our application will query.

We can then list the kinds of queries that will be needed for each for our app to meet its requirements. We don’t need to think about specific roles for now. It’s sufficient to know whether or not _someone_ will need to read, create, update, or delete different entries.

We can also think about more specific interfaces or processes involving such queries.

So for example, you might have a data source that provides information about your customers’ orders. You could use a single _read_ query to populate a listings page, as well as to create aggregate values for an analytics screen.

Although these involve the same data, and the same type of query, you’d want to note them differently in your resource inventory. That is, accessing individual customer details and analyzing broader trends can be thought of as distinct actions.

### 2. Analyze workflows

Next, we can begin to analyze workflows. Once we have a clear picture of all of our resources, the goal is to figure out which users will interact with them, and how.

Really, there are two elements to this:

1. Figuring out the specific resources different users need to do their jobs.
2. Determining the most efficient way for user actions to fit together and map internal processes.

In other words, analyzing workflows means deciding what different kinds of users can do within your application, and what other users can do in response to different actions.

Approval workflows are a helpful example here.

Say we have a tool for employees to submit invoices for travel expenses, and get reimbursed. This is based around a table, which we’ll call _invoice_submissions_, along with a separate table for _users_.

The core workflow would look something like this:

1. An employee submits information regarding their expenses claim.
2. The employee’s manager reviews this request, and either approves, queries, or rejects it.
3. The reimbursement is processed if the submission is approved.
4. The finance team will review and audit submissions and approvals to ensure compliance with internal policy.

When an employee submits an invoice, it creates a new row on the _invoice_submissions_ table, with a many-to-one relationship to their entry on the _users_ table. When a new row is created, it’s automatically given the value of _pending_ for its _status_ attribute.

Managers can then review submissions, and update the _status_ attribute for each. When an entry is marked as _approved_ the information can be sent to process the reimbursement, either by an automated process or manually.

Otherwise, the employee can be notified that their claim has been rejected, or that they need to provide new information.

Separately, the finance team can access all submissions for the purposes of auditing. They’ll use a dedicated dashboard for this, as well as detailed information on each submission.

This is just one example of how we can break our application’s workflows into constituent parts.

Note, that our example is a simple application, that only deals with a single workflow. In other cases, you’ll need to repeat the process to analyze several workflows.

### 3. Create and assign roles

Our next step is to define the specific subjects our RBAC system will comprise, and the permissions that each one needs. After analyzing our workflows, this should be fairly self-evident.

The first step is to group your different users into distinct roles.

In our previous example, we’d have:

* Basic employees.
* Managers.
* Finance team employees.

Note that what we call these doesn’t matter, so for now we'll stick with descriptive names. We’ll look at Budibase’s naming system for roles a little later.

Once we’ve identified our subjects, we can flesh them out into more detailed roles, by determining the specific permissions they need to carry out the workflows we identified in the previous step.

Again, the more thorough we were in the previous step, the easier this is.

The key is to translate the abstract terms we used in our workflow analysis to match the more specific technical elements of how our application manages them.

In other words, we need to identify the specific queries, data, screens, processes, and other UI elements that each role needs to access.

So for each of the roles in our example, this would break down as follows.

**Basic employees** will have permissions for:

* Creating entries on the _invoice_submissions_ table.
* Reading any entries that they themselves have created.
* Updating any of their own submissions with a _queried_ status.
* Deleting any of their own entries with a _pending_ status.

The **Managers** role will allow users to:

* Read all entries on the _invoice_submissions_ table.
* Update the status of any invoices submitted by a basic employee user, and/or provide notes.
* Create their own submissions.
* Delete or update their own entries, on the same conditions as basic employees.
* Escalate decisions to the finance team.

**Finance team** users can then:

* Read and analyze all invoice submissions and managers’ decisions.
* Update and approve escalated submissions, or submissions from Manager-level users.
* Delete any entries.

Note that these are just the basic queries and actions that different roles can perform. We’ll also need to marry these up with their respective UIs and screens.

### 4. Technical implementation

Once we have the details of our roles in place, we can start to implement them. Of course, what this looks like in practice will vary greatly depending on what tools you use to build your application and authenticate users.

We’ll look at how to implement role-based access control in Budibase a little later.

For now, though, we’ll look at technical implementation in broader terms.

Really, there are three levels within an application where we can grant or restrict permissions for different actions:

1. Datasets and queries.
2. Screens.
3. Individual UI components.

Sometimes, we could use any one of these to achieve a similar result. Other times, it may be easier to use a specific one. For instance, in a complex app, with a lot of screens, implementing role-based access control at a data level might be more convenient.

At the data level, we can build dedicated queries for each role’s permissions. So for example, we might create a _read_ query for basic users, along the lines of:

    SELECT *
    FROM invoice_submissions
    WHERE created_by = {{ current user.ID }};

We’d then give managers and finance team users access to a similar query, without the where clause at the end.

Check out our guide to [data access control](budibase.com/blog/app-building/data-access-control) to find out more.

Alternatively, we could create a single read query, and implement our RBAC system at a UI level. One way to do this would be to create dedicated listings screens for the different sets of submissions that each role can access.

Or, we could use conditionality rules on specific UI elements, to enforce our RBAC rules on a single screen. So, our [invoice submission tool’s](https://budibase.com/approval-apps/templates/invoice-approval-software/) home screen might be based around a table for existing entries.

We could apply a condition to this table so that the data is filtered to only show entries created by the current user if they have a **basic** role. The downside with this approach is of course that we’d have to apply similar conditions to any other relevant UI component.

We’ll explore how Budibase makes it easy to use any of these techniques a little later.

### 5. Maintaining roles

Generally, a role-based access control system will require ongoing maintenance and tweaking. The goal here is to ensure that your roles remain suitable for your needs, both in terms of security and usability.

There are a few key things to keep abreast of here.

For one, over time you may encounter unforeseen problems with your system. For example, fringe cases could emerge.

Beyond this, there’s the need to respond to change. For example, changes to your workflow, data model, or other technical elements of your application.

Given the principles of RBAC we’ve covered already, you essentially have four levers to pull here:

* Adding additional roles.
* Removing roles.
* Adding permissions to existing roles.
* Removing permissions from existing roles.

Remember that all users must be assigned to a role, and actions can’t be taken unless a role explicitly authorizes it. As such, all changes will need to be preempted and accounted for using the above strategies, to minimize disruption.

### 6. Ongoing auditing

Besides maintaining the suitability of your RBAC system, you’ll also need to regularly monitor and audit its implementation. As noted earlier, one of the key benefits of role-based access control is the ability to easily identify the exact permissions of different users.

The goal of auditing is the ensure that all users are assigned an appropriate role for their needs, at any given moment.

This achieves two things:

1. Ensures your RBAC system is implemented correctly.
2. Helps you to identify the need for changes or maintenance.

So for example, we could audit our role assignment, and find that one or two users have been given more permissions than they need.

We’d need to investigate whether this was simply a mistake in how their roles were assigned, or if it’s indicative of a problem or oversight with the way we’ve built our RBAC system.

We can then either change the affected users to the more appropriate one for their needs or implement any needed changes to our system, as we outlined in the previous section.

## Best practices for implementing role-based access control

Of course, there are also a range of non-technical barriers you might encounter when implementing an RBAC system, especially if you’re replacing or upgrading existing tools.

Indeed, you can expect to encounter many of the same issues and challenges as you would with any other kind of change.

With that in mind, here are some established best practices for implementing role-based access control.

### Audit your current status

It’s useful to know what your base level is, in terms of both security and usability. In other words, where are you now, and what will using RBAC achieve?

Obviously, though, this doesn’t apply to the same extent if you’re building an entirely new tool.

However, even in these cases, you can still consider the same aspects of how you currently manage relevant workflows.

In any case, the goal here is to identify pain points and improvements with your current systems and processes. For example, you might determine that excessive information access is a barrier to efficiency, as users are slowed down by a cluttered UI.

Having a clear understanding of your current status achieves two things:

1. Crystalizing the goals of your access control system.
2. Gathering evidence to help gain organizational buy-in.

As we’ll see in a moment, the second point is often critical.

### Account for organizational culture

Cultural factors can also influence your decision-making. That is, there might be some elements of your current system that employees like, particularly if they facilitate creativity or collaboration.

In this case, it would naturally be valuable to consider this.

It’s also worth keeping in mind that different sizes of organizations might handle certain workflows differently.

For example, in a large enterprise, job roles and functions will be tightly defined. In an early-stage start-up, the lines between different employees’ and departments’ responsibilities may be blurrier.

This obviously impacts how you’ll define your roles.

In fact, in this example, it might actually be trickier to define roles for the start-up, as it can be more difficult to predict the exact permissions each user will need.

In an enterprise setting, things are can be much more predictable, as the organizational structure is likely a lot firmer. So for example, you might have a large admin team, with tightly defined daily tasks.

### Document everything

Documentation is key. Having a clear paper trail of all of your decisions is helpful when it comes to maintaining and administering role-based access control. This includes your initial system, as well as any changes you make over time.

So what specifically do you need to document?

The obvious starting point is the nature of your roles themselves. Thinking back to our discussion earlier about how to define roles, this means that we need a record of the following:

* The names of your roles.
* The permissions associated with each.
* How these relate to different functions within workflows.
* The kinds of users that should be assigned to each role.

This works as a kind of glossary for your roles. That is, you’ll have a clear policy that anyone can refer to when assessing or assigning roles. This is particularly valuable if your RBAC system is maintained by colleagues who weren’t involved in creating it.

You can also document your rationale for creating different roles, and the steps your team should take to decide which role is appropriate for different users.

Beyond this, you should also keep your written policies up to date as your RBAC framework evolves and changes. This includes the creation of new roles, as well as changes to the permissions associated with existing ones.

### Prepare for change

We’ve seen throughout this guide that change is a fact of life when implementing RBAC. In fact, it’s almost inevitable that you’ll have to tweak or modify your roles at some point. If you’re slow to respond, you can disrupt workflows or even interrupt services.

The question is how you prepare for change.

The first step having a clear picture of your current status at any given moment. Specifically, pay attention to the limitations of your existing RBAC system, to preempt the need for change.

For example, you might anticipate fringe cases as part of your workflow analysis. That way, you can quickly have a plan in place for the changes that will be required to address these, before they occur in the real world.

In other cases, your workflows might change, and require new functionality or data within your application. Most often, this should give you sufficient notice to account for new requirements within your RBAC system.

Of course, not every change can be predicted.

You might need to take sudden corrective action if something goes wrong with an integrated platform. Say, for example, this means switching to a different data source for your app, to avoid service interruption.

In these cases, the paper trail we discussed in the previous step will be vital, as it will enable you to recreate the permissions you need quickly and easily.

## Using role-based access control in Budibase

Budibase offers flexible, intuitive RBAC. We’ve made it easy to design, implement, and maintain role-based access control systems, with simple dropdown interfaces and pre-defined roles.

Say goodbye to complex technical implementation and resource-sapping admin tasks.

With our low-code platform, implementing RBAC has never been easier.

### Assigning roles to users

Budibase offers four predefined roles, which you can assign to users from a simple dropdown menu. As we’ll see in a minute, you can then grant permissions relating to different screens, components, and queries for each of these.

Note that our platform has separate sets of roles and permissions for your apps’ end-users and your actual Budibase installation.

Today, we’re talking specifically about end-user roles. If you want to know more about permissions within the Budibase builder, you can find out more in our docs.

Our built-in roles are:

* Admin,
* Power,
* Basic,
* Public.

Each inherits the permissions of any roles below it in the hierarchy. For example, an _admin_ user will automatically have access to any actions assigned to all roles.

Our _admin, power,_ and _basic_ roles are reserved for registered users. Any unregistered users on your app are treated as having the _public role_.

This means that Budibase is perfect for creating public-facing web apps.

To assign a role to a registered user, simply head over to the data section of our app builder. You can then select the appropriate role from a dropdown list when editing or creating any given row in the _users_ table.

### Restricting and granting access to screens

Permissions in Budibase are primarily managed at the level of app screens. Whether you autogenerate screens or build them from scratch, you’ll need to designate the minimum role that users need to access each one.

So for example, if we wanted to restrict _create_ functionality on a given data set to users with the highest level of permissions, we’d limit the screen that allows this to _admin_ users.

Again, permissions to view a given screen can be assigned to any role, with a simple dropdown selector. This can also be selected when you create the screen or changed any time afterward.

You can also create multiple app screens with the same URL, as long as they’re assigned to different roles.

![Created CRUD screens](https://res.cloudinary.com/daog6scxm/image/upload/v1653383756/cms/Create_CRUD_Screens_crigxt.png "Create CRUD screens")

For example, we could create separate versions of our app’s home screen for different tiers of users. Users will then be able to view the version set to the highest permission within their assigned role.

This allows you to minimize the number of components and conditional elements you’ll need to create for users to navigate around your app, making it easy to build streamlined UIs for your workflows.

### Conditionality rules and RBAC

Within screens, we can also use conditionality rules to tailor our UIs for different access roles. Again, we can build conditions to create permissions for any role, and users with higher access will inherit these.

More specifically, we can use conditionality rules to hide, display, or update core settings on any UI component.

We can do this either to implement a permission, or to streamline experiences for users that don’t have an existing one. An example of the latter would be hiding navigational elements that point to a restricted screen.

Or, say we wanted to restrict the ability to edit certain attributes to our power and admin users, but still allow basic users to edit other fields for a given entity. We could build a single _update_ form for the entity in question.

We’d then apply conditionality rules to any restricted attributes so that they’re only displayed to users with the appropriate role assigned to them.

Using conditionality rules to update component settings can also help us to implement different permissions. Earlier we used the example of an invoice submission tool, where most employees can only view their own submissions, but managers can view all invoices.

We could achieve this with a single table UI.

With Budibase, you can create a conditionality rule so that the table is filtered for entries created by the current user if they have a particular role. The same table will then display all entries to users with higher permissions.

### Custom queries

Budibase also allows you to set permissions at the level of queries. This is particularly useful when working with external data sources, but we can also assign permissions for internal tables in BudibaseDB.

Under the data section, each table your app access has the option to _manage access_. Here, we can set the minimum role needed to _read_ or _write_ data on individual tables.

So, if we wanted our _basic_ users to have _read_ permissions, but for _write_ permissions to be restricted to _power_ and _admin_ users, we’d use the following settings:

![Role based access control set access](https://res.cloudinary.com/daog6scxm/image/upload/v1653383637/cms/Manage_Access_wkhzbn.png "Role-based access control set access")

We can do something similar for custom queries. Say we wanted to create a _read_ query that’s filtered by a specific attribute for _basic_ users, and give _power_ and _admin_ users access to a separate, unfiltered query.

We could configure the first query as follows, selecting _basic_ as the access level:

![Query RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1653383594/cms/Query_RBAC_z1kgct.png "Query RBAC")

We’d then create a similar query without the WHERE clause, and assign this to the _power_ access level.

### Role-based app previews

We’ve also recently launched the ability to _preview by role_ in our app builder. Quickly preview your apps, exactly as different roles will see them, to build and test the perfect UX for each user group.

This allows you to instantly switch between different versions of your app, as displayed to different roles.

Tweak and perfect your RBAC system with role-based previewing in Budibase. Test how workflows operate in practice, optimize each UI, and build the smoothest, most efficient tools possible.

## Wrapping up on role-based access control

We’ve covered a lot of ground, so it’s helpful to recap. RBAC is a framework for controlling how different groups of users interact with your applications. At a high level, this means creating discrete roles, that each has its own set permissions.

Each user must then be placed into one of these roles. The goal is to ensure that roles are created to closely match the needs of different stakeholders within each workflow, granting each employee the minimum level of access they need to do their job.

The benefits of this include:

* Reduced admin burdens.
* Simplified auditing.
* Scalability.
* Flexibility.
* High levels of security.
* Low requirement for computational resources.

Budibase is built around an intuitive role-based access control system. With predefined roles, conditional UIs, and low-code interfaces for setting screen or query-level permissions, it’s easy to build an effective, adaptable RBAC system.

Sign up for free to start building secure, usable web apps with Budibase today.