+++
author = "Ronan McQuillan"
date = 2022-05-23T23:00:00Z
description = "Here’s everything you need to know about the differences between rule-based and role-based access control."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653385079/cms/What_is_the_difference_between_rule_based_and_role_based_access_control_header_berf5j.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1653385079/cms/What_is_the_difference_between_rule_based_and_role_based_access_control_header_berf5j.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "What’s the Difference Between Rule-Based & Role-Based Access Control?"

+++
How you control user access to your app has a huge impact on its performance, security, and usability. Today, we’re going to explore the differences between rule-based and role-based access control, the two predominant systems for modern applications.

Despite their similar names, rule-based and role-based systems differ greatly, in terms of both technical implementation and business-level considerations.

However, both offer high levels of security and usability. As such, the key decision points are often largely operational, relating to how the systems are maintained and administered.

Today we’re going to cover all of the key differences, with a specific focus on how role-based systems have come to be the preferred option for the majority of app projects. Then, we’ll wrap up by looking at how Budibase makes it easier than ever to control user permissions.

Let’s dive in.

## What is rule-based access control?

As the name suggests, rule-based access control is a system built around defined conditions for providing or denying access to different users.

Most of the time, these rules are based on individual users’ attributes. This is also called _attribute-based access control_ (ABAC).

Rules can be based on other contextual values too. For example, factors relating to previous actions, or the object's current stage in a particular workflow. You could even set rules based on system factors, like the current time of day, or server loads.

![Rule based access control](https://res.cloudinary.com/daog6scxm/image/upload/v1653385661/cms/What_is_rule_based_access_control__h8utpo.png "Rule based access control")

Essentially, this type of access control means configuring different conditions based on users’ existing attributes. These are then used to automatically determine the permissions assigned to individuals.

The system then uses boolean logic to determine whether each condition is true or false, and assigns permissions based on this or moves onto another nested condition.

Rules can be built around different combinations of attributes, or just one. So for example, a very simple rule-based system might only take account of a user’s current location to determine permissions.

In a more complex system, you might use their location as one factor, but also take account of their department, length of service, current device, or any other attributes or environmental factors.

### Pros

Let’s think about some of the primary benefits of rule or attribute-based access control systems.

#### Highly granular access control

As you can probably tell, one of the key selling points here is the degree of granularity available. That is, the core benefit is how easy it is to create highly specific, tailored permissions for different users.

Rules can also be nested, creating complex branching logic, with IF/ELSE-style statements.

This means that there may be different scenarios where users could be assigned the same permissions. So for example, your C-suite might automatically be granted the highest permissions, but other users may need to satisfy several criteria to get the same access.

Branching logic also helps you to create highly detailed access control policies. For instance, you might have a rule that grants human resources users a particular set of permissions, but give them additional privileges if they access the app from a particular IP address.

#### Efficient administraion

The other key benefit of using rules-based permissions is a greatly reduced admin burden when adding new users.

By definition, once you’ve defined rules, system administrators don’t need to manually assign permissions, as the system does it automatically.

This greatly reduced the labor costs associated with system administration, as well as largely eliminating the possibility of human error. Assuming that your access control system is thoroughly tested, users won’t accidentally be assigned inappropriate permissions.

### Cons

Of course, there are also downsides to choosing a rule-based system. When considered in sum, these can easily outweigh the benefits. Let’s take a look in more detail.

#### Difficult initial configuration

The primary downside to working with rule-based access is the amount of work needed to implement it. This begins with the need to determine the kinds of users who will need different permissions, and then figuring out all of the combinations of attributes that they could have.

It’s actually a massive undertaking to thoroughly understand the different attributes that could indicate that a user needs a particular permission.

Once you’ve done this, you’ll then need to actually design and implement your rules, before thoroughly testing them to ensure they behave as intended in the real world.

#### Technical burdens

Another potential pain point with rule-based access is the extent of computational resources needed. This is directly proportional to the complexity of your systems.

The trouble is that the system has to assess individual users against your rules, each time they access your app. The more users and/or conditions you have in place, the bigger the impact will be.

This has the potential to hamper performance if you have large volumes of users or complicated criteria for assigning permissions.

In most cases the impact is likely to be marginal, this is nonetheless a consideration, especially if you’re reliant on older hardware.

#### Lack of administrator discretion

ABAC is also inherently inflexible, once your rules are in place. In some ways, this is also a benefit, but it’s worth keeping in mind the negative impact this can have. One thing to note here is that it’s almost impossible for system administrators to exercise discretion.

For example, there might be situations where a user needs access to a particular resource, on a short-term or project-specific basis.

In a typical ABAC system, this may not be possible. Of course, you could build in specific conditions to achieve a similar result, but to a certain extent, this undermines the whole point of implementing a rule-based system in the first place, especially if they’re relied on regularly.

#### Auditing and visibility problems

Another key disadvantage of rule-based access relates to auditing and visibility of existing users’ permissions.

In fact, it can often be impossible to quickly determine the specific permissions assigned to a particular user, unless you’re extremely familiar with the overall system.

![Auditing rule-based access control systems](https://res.cloudinary.com/daog6scxm/image/upload/v1653385502/cms/Rule-based_visibility_and_auditing_a6bmz8.png "Auditing rule-based access control systems")

This makes it challenging to audit the implementation of your access control system, either on an individual user basis or more widely. In turn, this can create difficulties when trying to identify issues or oversights in your policy.

#### Responding to change

Finally, ABAC systems are notoriously difficult to maintain and modify. The problem is a lot like the difficulty with initially configuring a rule-based system. This hampers your ability to respond to change.

This effect is amplified when you have more complex, nested conditions in place.

For example, you may account for a single attribute in multiple different branches. If you need to change how you weigh this attribute for some reason, you’ll need to reflect this in multiple statements.

On one level, this creates an additional workload when implementing changes. On another, it introduces more scope for error, or for bugs and issues to arise when responding to change.

## What is role-based access control?

Now we have a thorough understanding of rule-based systems. Next, let’s think about role-based access control.

A quick note on terms. Obviously, role-based or rules-based access control could both be abbreviated to _RBAC_, although it’s more commonly used for role-based systems.

For clarity’s sake, we’re going to avoid using this abbreviation later when we compare systems. For now, when we do use the term _RBAC_, we’re referring to role-based systems.

As noted earlier, this is the other predominant framework for managing user permissions.

Role-based access involves defining fixed groups of users, with corresponding permissions. As the name suggests, these groups are known as _roles_. Each user must then be assigned to one of these.

The idea is that your roles should be based on the different job functions in your existing organizational structure.

![RBAC](https://res.cloudinary.com/daog6scxm/image/upload/v1653385471/cms/What_is_role_based_access_control_t1reqf.png "RBAC")

Unlike ABAC, roles must normally be manually assigned to users by your administration team. However, you might put steps in place so that users are given a particular role by default, which is then manually updated.

Users also can’t choose their own roles.

Additionally, resources can only be accessed where the appropriate permission has explicitly been assigned to a role.

As such, an RBAC policy is effectively built around three components:

1. **Role assignment -** Each user must be assigned a role.
2. **Role authorization -** A user can only take on roles for which they’ve been authorized.
3. **Permission authorization -** Users can only take actions that are authorized by their current role.

So an example of a simple RBAC system for a CRM might have three roles:

* **Basic users,** who can add new entries, or read basic customer details.
* **Power users,** who can perform any query across all customer data.
* **Admins,** who can also query data relating to how employees use the platform.

The idea is that when a new user joins your team, all you need to do is decide which role to place them in. Ideally, this should be predetermined by their job function, as these should have been used to create your roles in the first place.

However, this also creates certain challenges, which we’ll come to shortly.

First, though, let’s take a look at some of the reasons behind RBAC’s popularity and widespread use.

### Pros

Besides security, RBAC offers a number of operational and administrative benefits. Here’s a selection of core benefits.

#### Efficient administration

Efficiency is central to RBAC’s popularity. In particular, this means cutting out administrative work. Unlike, in a rules-based system, you still need to manually assign permissions, but this is as simple as setting new users to a defined role.

The real efficiency dividend comes into play when maintaining and managing existing users. For example, if an employee temporarily moves into a new job function, you can move them into a suitable role, in seconds.

Similarly, this cuts out the potential for error when assigning user permissions. Since you’re dealing with a small number of discrete roles, errors are unlikely and easy to resolve if they do occur.

This in turn cuts out unnecessary admin burdens in identifying and resolving issues.

#### Simplified auditing

Leading on from this, one huge difference between rule-based and role-based access control is the degree of visibility offered by the latter. Since everyone must be assigned to a defined role, it’s easy to identify the permissions for any given user.

This greatly simplifies the process of auditing user permissions.

That is, administrators can instantly see the exact level of access for each user, and assess whether or not this is the appropriate role for their needs.

This is critical for two reasons:

1. Identifying issues with how your roles have been implemented in practice.
2. Finding oversights within your RBAC system, and identifying the need for changes.

#### Quickly respond to change

It’s almost inevitable that your roles will change over time. This might be because of the requirements of your tools changing, your workflows evolving, or just because you didn’t get it right the first time around.

Recall that under a rules-based system, altering your framework can be fairly tricky, as you might need to modify a large number of statements and conditions to change how you treat a single attribute.

In RBAC, this is much more straightforward, as you don’t have to deal with complex, nested conditions.

Earlier, we used the example of a CRM system, with three different roles, _basic_, _power_, and _admin_ users. If we wanted to remove _delete_ permissions from the _power_ role, we could do this in a few seconds, without even considering the attributes of the affected users.

The same principle applies if we needed to add additional roles. For example, if we wanted to add an additional tier for _public_ users so that customers can submit queries to our team.

This is possible without needing to alter the existing roles we outlined earlier.

![Responding to change](https://res.cloudinary.com/daog6scxm/image/upload/v1653385349/cms/RBAC_respond_to_change_snob7y.png "Rule-based and role-based access control responding to change")

#### Cost-effectiveness

Considering all of the above, another huge upside to RBAC is its cost-effectiveness. That is, it’s often the best way to achieve your desired security and usability outcomes while minimizing operational or administrative costs.

Of course, there’s no way to control access without incurring labor costs.

The key is minimizing avoidable costs when maintaining and implementing controls.

Additionally, RBAC allows you to more cost-effectively use existing resources, as well as minimizing risk. That is, controlling access allows you to minimize burdens on servers and memory, in addition to avoiding the costs of security breaches.

### Cons

However, when considering the differences between rule-based and role-based access control, it’s also important to think about where the latter falls short.

Many of the benefits of role-based systems stem from their simplicity and intelligibility. The flip side of this is that they may not be appropriate for every use case. Or at the very least, that these benefits might be undermined in some contexts.

Let’s take a look at how.

#### Dealing with complexity

Managing access with RBAC can be tricky when it comes to very complex systems or workflows. For example, if you create a framework with a large number of roles, you might forgo some of the benefits we described earlier.

For example, adding users or changing their roles becomes more difficult in this scenario. If you had dozens or even hundreds of roles, administrators would likely have a tough time deciding which one is appropriate for each user.

The same problem arises when it comes to auditing users’ existing roles.

We said earlier that one of the primary benefits of RBAC is that it’s easy to check the permissions for any given user. This is undermined if you have a large number of different roles.

#### Preempting changes

With a role-based system, you’ll also need to preempt any changes to your needs to avoid disruption. Remember, users can’t take action unless it’s explicitly allowed by their role.

If you add a new dataset or functionality, you’ll have to build it into your access control framework, before it can be rolled out. If you don’t do this in advance, you’ll disrupt the roll-out of new features.

This isn’t insurmountable by any means, but it is something to be conscious of.

## Rule-based vs role-based access control

Now that we have a firmer understanding of what each framework is, we can start to think about the key differences between rule-based and role-based access control.

As we noted earlier, both systems are effective ways to protect data and create efficient, user-friendly applications.

We've also created an in-depth guide on [data access control](https://budibase.com/blog/app-building/data-access-control/).

The differences largely relate to how each system is maintained, implemented, and administered, as well as the business-level impact of this.

Here are the key distinctions that decision-makers should be conscious of.

### 1. Configuration

The first thing to consider is the initial task of configuring each system. That is the amount of work required to get each one up and running. In either case, this starts with a thorough assessment of your current resources and different kinds of users’ needs.

Beyond this, creating a rule-based system is a much more involved and time-consuming process. For one thing, you’ll also have to thoroughly analyze the different combinations of attributes that correlate with needing specific permissions.

Then, there’s the time spent creating and testing any rules based on these.

While role-based systems still require a certain amount of up-front work, this is a much less laborious process. Check out our ultimate guide to [role-based access control](https://budibase.com/blog/app-building/role-based-access-control/) to find out more about how this works.

Of course, in either case, the amount of time you’ll spend on the initial configuration is directly related to the complexity of the system itself.

On the whole, though, you can expect to incur more up-front labor costs from your IT team if you opt for a rule or attribute-based system.

### 2. Administration

Things are a bit less clear-cut when it comes to administration. By this, we mean adding new users or changing the permissions associated with existing ones. How this works in practice will often vary across both systems.

Let’s take adding users first.

When a rules-based framework is implemented effectively, adding users is incredibly easy. After all, the whole point is that the system determines each user’s permissions, based on their existing attributes, or other contextual factors.

This means system administrators don’t have to manually assign permissions.

Under a role-based system, there is a need to set a role for each user. That is, admins will need to decide the right level of permissions for each new user. However, since roles are discrete and based on existing job functions, the actual labor here is often negligible.

In many cases, having the ability to manually assign roles can outweigh this.

The difference between rule-based and role-based access control is starker when it comes to changing permissions for existing users.

In a rule-based system, permissions will be updated automatically when the user’s attributes change. For example, if an employee gets a promotion, their permissions could change, assuming that their job title attribute is updated.

If your access control is built around roles, these need to be updated manually.

However, this gives your administrators more discretion than in a rule-based framework, as roles can be quickly updated in response to individual circumstances, without the need to alter users’ other attributes.

### 3. Granularity and complexity

Granularity is the level of detail that you can build into your access control framework. In other words, the extent to which you can distinguish between different kinds of users and the permissions each needs.

Most people agree that rule-based access wins out here.

![What is the difference between rule-based and role-based access control - granularity](https://res.cloudinary.com/daog6scxm/image/upload/v1653385231/cms/Granularity_vgyo43.png "What is the difference between rule-based and role-based access control - granularity")

That is, you can more easily create a highly granular system, with a large number of highly specific conditions.

While it is possible to create a similar level of specificity in a role-based system, doing so can easily undermine many of the key benefits we outlined earlier. This is because of what’s known as _role explosion_.

Essentially, this is when the number of roles you need to achieve your desired level of granularity becomes unmanageable. For instance, to the extent that you can no longer easily tell what permissions different users currently have, or should be assigned.

### 4. Maintenance

Any kind of access control will require a certain degree of ongoing maintenance. However, a critical difference between rule-based and role-based systems is the ease of making changes.

In a role-based system, there are two ways of going about this:

1. Adding or removing roles.
2. Altering the permissions associated with existing ones.

However, since each role is discrete, this is relatively straightforward. That is, you can adjust the permissions associated with one role, without accidentally impacting any others.

This is more difficult in a rule-based system since permissions are determined by a set of conditions that are tested against different attributes. This means that to change permissions you’ll have to either alter the condition, or the attribute in question.

Unfortunately, this introduces two challenges:

* You may need to make the same changes across multiple statements.
* There’s more scope for human error when implementing changes.

These problems are amplified if the current system isn’t well documented, or if changes are made by someone who isn’t already highly familiar with its details.

As such, maintaining a rule-based system is generally much more laborious and time-consuming.

### 5. Cost-effectiveness

Of course, your bottom line is also a key consideration. That is the resources required to achieve a similar result using either access control methodology. In most cases, role-based systems are more cost-effective than rule-based ones, but this isn’t inevitably true.

In fact, this largely depends on the complexity of your application, and the volume of users, which must be processed.

For example, if you require complex decision-making to administer permissions to a large number of users, handling this manually might be unviable.

Here, rule-based permissions may be more cost-effective, if you can’t rely on a default assignment for new users in a role-based system.

As such, a useful rule of thumb is that role-based access is generally preferable and more cost-effective, but rule-based systems can be used instead in situations where this is unviable.

## Effective access control for modern applications

Budibase offers streamlined, efficient role-based access control, with four pre-built, configurable permission tiers. Assign roles to users with a simple dropdown, and grant or restrict access to resources at the query, screen, or component level.

Apply conditionality rules to any UI element to introduce other contextual factors to how users interact with your app. Limit users to data they’ve created themselves, or restrict access to different resources depending on the device they’re using.

Check out our free guide to find out more about [how to implement RBAC](https://budibase.com/blog/app-building/how-to-implement-rbac/) in Budibase.

Sign up today for free to start building intuitive low-code tools, with an intuitive, flexible RBAC system.