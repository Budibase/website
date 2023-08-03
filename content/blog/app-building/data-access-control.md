+++
author = "Ronan McQuillan"
date = 2022-05-23T23:00:00Z
description = "*Data access control* is any method you use to control how users interact with your company's data."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653386953/cms/What_is_data_access_control_header_d6avle.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1653386953/cms/What_is_data_access_control_header_d6avle.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What is Data Access Control?"

+++
Data access control is a crucial element of any information security strategy.

Companies today face a more complex regulatory environment than ever when it comes to protecting personal data. However, this must be balanced with the need for efficient, data-driven decision-making.

As such, how users are assigned access to data across your organization has enormous implications.

Today, we’re going to cover everything your need to know about data access controls, including the theory, the specific methods available to you, and how to create the right framework for your needs.

First, though, let’s start with the basics.

## What is data access control?

Data access control is any method you use to control how users interact with your company’s data. The goal is to ensure that data is accessed in a manner that meets your security, privacy, and compliance needs, without undermining efficiency or accessibility.

Users can be employees or third parties, like customers, partners, consultants, or members of the public.

In other words, data access control means defining and enforcing a system for how different users can use your organization's data.

As we’ll see later, there are various types of access control.

For now, though, let’s consider why this is such a critical issue for modern organizations.

### Why do you need data access control?

Enterprises and SMBs alike store and process greater volumes of data than ever before. While the benefits of this are obvious, there are many other concerns to manage.

The key is balancing the benefits of data-driven decision-making, including increased creativity, innovation, and productivity, with the need to maintain high standards across security, privacy, and compliance.

This is where data access control comes into play.

Here are four specific issues that data access control addresses.

![What is data access control - security](https://res.cloudinary.com/daog6scxm/image/upload/v1653387543/cms/Security_il6bb4.png "What is data access control - security")

#### 1. Security

The most obvious goal of access control is data security. In other words, ensuring that it is accessed only by the right people, in the right contexts. The idea is that only authorized entities can access data or carry out different actions on it.

An entity here can mean a user, an automated process, or a particular platform.

Of course, restricting access is just one weapon in your security arsenal. This sits alongside other tools including encryption, identity management, and hardware security solutions.

Far from replacing these other techniques, data access control complements them by ensuring that an otherwise secure system isn’t circumvented, either deliberately or unintentionally.

In fact, data access control is fundamental to any modern security strategy.

![Compliance](https://res.cloudinary.com/daog6scxm/image/upload/v1653387510/cms/Compliance_obxxoz.png "Compliance")

#### 2. Compliance

Privacy regulations are increasingly complex, especially for enterprises, or other companies that process personal data internationally. This places several constraints on how companies must treat data, especially where this concerns identifiable people.

These constraints stem from established best practices, as well as formal regulations like GDPR, CCPA, HIPAA, PIPEDA, and NIST.

While these all differ in terms of their specific content and the requirements placed on organizations, each one places limits on how subjects’ personal data can be accessed, and by whom.

Most formal regulations stipulate in one way or another that only entities which need to access different data should be able to do so. Additionally, subjects’ data should only normally be accessed by the entities and for the reasons they initially consented to.

As such, effective access control will inevitably form a core part of your compliance efforts.

![Data access control efficiency](https://res.cloudinary.com/daog6scxm/image/upload/v1653387401/cms/Efficiency_tri6jk.png "Data access control efficiency")

#### 3. Efficiency

Data access control is also an important tool for maximizing efficiency across different applications, workflows, and processes. A key part of this is limiting the number of actions that users can take.

At the level of applications, this helps to ensure that user interfaces are as streamlined and effective as possible. At the database level, it helps to minimize labor costs stemming from unnecessary errors, security breaches, and administration tasks.

Additionally, different access control methods offer extra efficiency savings, particularly in terms of assigning and administering permissions. Check out our ultimate guide to [role-based access control](https://budibase.com/blog/app-building/role-based-access-control/) to find out more.

![Data access control vailidity](https://res.cloudinary.com/daog6scxm/image/upload/v1653387372/cms/Validity_fbz48q.png "Data access control validity")

#### 4. Validity, accuracy & integrity

Finally, data access control is an essential way to ensure validity, accuracy, and integrity in your company’s stored data. Essentially, by limiting the number of users who can perform certain actions on your data, you’re also reducing the risk of human error in doing so.

For example, if only certain users have permission to perform _UPDATE_ or _INSERT_ queries, there’s a far smaller risk of input errors, leading to incorrect values.

You might do this across entire datasets, or at the level of individual entries, tables, or views.

In any case, the goal is to limit the number of entities that can make changes to your data, reserving these permissions to users and processes that strictly need to add or update values.

{{< cta >}}

## Access control methods

Now that we have a firmer understanding of why data access control matters, we can think more concretely about how it actually works in practice. As ever, this depends on your specific needs, as well as the particular systems you’re using.

It’s worth noting as well that different methods are aimed at different outcomes. Some are aimed at preventing specific threats, while others are more concerned with managing the day-to-day access requirements of your employees.

As such, you’ll more than likely need to use a variety of methods in tandem.

With that in mind, here are the broad categories of access control methods that are available to you.

### Entity-centric methods

Entity-centric data access control involves setting permissions based on different entities’ attributes. Remember, an entity here can be a user, an automated process, or an external platform.

Generally speaking, there are two ways to go about this:

* Assigning entities a defined role, with set permissions.
* Creating conditions to assign permissions to entities, based on their existing attributes.

These are the two most common ways of assigning user permissions within applications. To find out more about these frameworks, check out our guide on [the differences between rule-based and role-based access control](https://budibase.com/blog/app-building/difference-between-rule-based-role-based-access-control/).

These models use existing organizational structures as the basis for determining permissions to different entities. For example, you might grant access to different employees based on their job title, department, or seniority.

### Data-centric methods

Data-centric methods are centered around the type of data that’s being accessed. In other words, this involves setting rules to control access, at the level of the data itself, rather than based on entities.

For example, you might have a particular dataset that can only be accessed via a dedicated application.

This is a simple way to enforce uniform controls across all entities for a particular dataset.

Of course, one side effect of this is that any user who can access the application then has complete access to the dataset, unless you put additional measures in place.

We can work around this problem in a couple of ways. One would be to strictly control who can access the application, through authentication and identity management tools.

Alternatively, we could [implement RBAC](https://budibase.com/blog/app-building/how-to-implement-rbac/) within the application itself, to more tightly control which users can carry out different queries on the affected dataset.

### Context-centric methods

Finally, context-centric methods are based on the context of how data is accessed. The idea here is to use environmental factors to determine whether or not certain queries can be actioned.

For example, you might restrict the ability to export large volumes of data to certain times of day, to prevent large-scale breaches.

We could also restrict the ability to perform different actions on specific database objects, based on their current stage in a given workflow. For instance, we could create an [approval app](https://budibase.com/approval-apps) for accessing different pieces of data.

Rather than acting as the basis for your complete data access control system, context-centric methods are typically used to combat specific risks.

Relying on context-centric methods requires you to identify and map known threats. As such, these techniques are unlikely to be sufficient for protecting your data, unless used in tandem with the other methods discussed above.

## Access control, authentication, and authorization

No discussion of data access would be complete without touching on the idea of authentication and authorization.

Authentication is how you verify the identity of different entities.

Authorization is whether or not an entity is allowed to access a particular piece of data or carry out a certain action. More specifically, we need to distinguish between authorized and unauthorized access.

![Data access control authorized access](https://res.cloudinary.com/daog6scxm/image/upload/v1653387308/cms/Authorised_vs_unauthorised_r04hqf.png "Data access control authorized access")

### Authorized vs unauthorized access

The distinction between authorized and unauthorized access is effectively a matter of whether or not an entity has permission to carry out an action. Most often reading, creating, updating, or deleting one or more entries.

As the name suggests, authorized access is when an entity carries out an action that they have permission to do.

On the other hand, unauthorized access means that a user has been able to take an action, without the required permission.

This could happen either accidentally or maliciously.

In either case, unauthorized access is a serious threat to any organization.

In the least severe cases, this could mean an internal user accidentally accesses non-sensitive data that they’re not supposed to have the permissions for. If this concerns an identifiable person, it’s still a breach, and should be reported and prevented from reoccurring.

In more serious cases, unauthorized access can easily lead to DOS attacks, data leaks, or other cyber threats.

In addition to the direct impact of these, you could face legal penalties, reputational damage, and other indirect costs.

### Preventing unauthorized access

Naturally then, preventing unauthorized access is a top priority. There are several strategies you can employ to achieve this.

First, note that there are essentially two kinds of unauthorized access:

* Users who should have no access at all viewing or querying your data.
* Authorized users accessing data with the wrong permissions.

Of course, each of these has multiple different permutations. Just like before, either can be unintentional or malicious.

For example, an internal user might mistakenly gain access to a particular resource. This is a very different situation from a malicious actor deliberately hacking into the same system.

However, in both cases, prevention is critical. Effective data access control is a key tool here.

Here are three strategies you can employ to prevent unauthorized access.

#### 1. Combine entity-centric methods and strong authentication

Combining entity-centric access control with effective authentication ensures two things:

1. Only intended entities can access your data.
2. Authenticated entities can only carry out actions where they have the correct permissions.

Strong authentication is essential for preventing unauthorized access, for users and other entities alike. That way, you can ensure any action can be associated with the entity that initiated it.

This includes effective password and identity management, as well as tools like SSO and two-factor authentication.

We can then combine this with the access control methods we outlined earlier to control permissions for all authenticated users. Remember, we can do this by defining discrete roles with associated permissions, or with rules based on users’ existing attributes.

#### 2. Clearly define and audit permission authorization

Whichever data access control method you choose, permission authorization is vital. Permission authorization is the practice of allowing different kinds of users to take specific actions, either through their role, or attribute-based conditions.

One element of this is ensuring that your framework for granting permissions is thoroughly documented. That is, that you have a clear record of how and when different permissions are assigned to users.

This solves a few key problems:

1. Providing a blueprint for ongoing permission assignment.
2. Streamlining the process of auditing and testing implementation.
3. Creating a clear record of changes to your access control framework.

The first point helps to prevent unauthorized access by ensuring that entities are assigned the correct permissions in the first place.

The second and third are vital for allowing you to identify instances where users have been able to carry out actions that you didn’t intend to permit them to. You can then correct any oversights or issues that led to this.

Additionally, this helps you to preempt situations where unauthorized access might occur, and put measures in place to prevent them.

#### 3. Configure and implement additional controls

Once you have a robust entity-centric framework in place, you can begin to think about other measures that will complement this. For example, using additional data and context-centric access control methods, to fill in specific gaps in your policy.

These come in two varieties:

1. Measures aimed at providing additional tailored controls over specific datasets.
2. Measures aimed at preventing specific threats.

Say we have a large dataset, based on our customers’ details, which we’ve already implemented an RBAC system across.

There are several ways we could use additional controls to further safeguard customer data.

For example, we might want to put additional measures in place to prevent large-scale theft of our data. As we saw earlier, one way to do this would be to create contextual control, so that bulk exports can only be carried out during normal business hours.

Alternatively, we could limit this permission to users with a particular IP address, to restrict bulk exports to head office staff.

Or, we could create a dedicated tool for users to take specific actions on our data. For example, we could add an extra layer of security by creating a framework where certain actions can only be taken using a dedicated, locally hosted application.

{{< cta >}}

## How to create a data access control model

As we said at the outset, building a successful data access control model is a tricky balancing act. Specifically, the challenge is balancing the need for efficient access to data, with the need to ensure security, compliance, and privacy safeguards.

However, these goals also intersect to a large extent.

For example, you might have a platform that meets all of your security requirements but is difficult and inefficient to use. This could cause employees to try and circumvent your intended controls, leading to new security issues.

This becomes even more difficult in the context of modern IT environments, where assets and resources are typically distributed across a wide range of physical locations.

The key is developing systems that intelligently provide the right permissions for the right users.

Check out our [IT incident report template](https://budibase.com/forms/templates/it-incident-report-template/) to see our data access control features in action.

Budibase offers an advanced suite of features to help you secure your company data.

With a built-in RBAC system, custom conditionality rules, free SSO, external data support, optional self-hosting, and autogenerated CRUD screens, Budibase is the ideal solution for creating secure, data-driven applications, with minimal coding skills.

Sign up for free to start using Budibase today.