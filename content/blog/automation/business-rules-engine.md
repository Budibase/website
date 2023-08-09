+++

author = "Ronan McQuillan"
date = "2023-04-21"
description = "Let's check out how to use Budibase to build a simple business rules engine."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/Business_Rules_Engine_pmgzyp.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/Business_Rules_Engine_pmgzyp.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Building a Business Rules Engine with Budibase"

+++

Business rules engines (BREs) do a huge amount of heavy lifting within the field of process automation. But, despite their outsized importance, they’re something you might not have paid much attention to before.

Basically, any internal process can be expressed as a set of business rules. These make up the logic that decides what actions are taken by employees or automated systems at each point in a process or workflow.

Automation is obviously a big priority for just about every organization in the world.

The only trouble is that we need a certain amount of specialist skills, resources, and technology to take advantage of this. 

Today, we’re going to see how business rules engines can improve your ability to automate tasks, lightening the load on your development team and empowering less technical colleagues to automate daily tasks within their own departments.

We’ll even check out how you can use Budibase to build a fully functioning open-source rules engine - for free - with almost no custom code required.

First, though, let’s start with the basics.

## What is a business rules engine?

A business rules engine is a software application that allows you to define, store, and execute rules within business processes.

You can think of this as being a bit like a central *brain* for your rules-based automated workflows. This is also sometimes referred to as a business rules management system.

We use a business rules engine to create a centralized location to store all of the rules that govern our processes. These can then be used to trigger or respond to actions in external platforms and data sources in real time.

The idea is that we can define and manage our business rules in one location and then leverage them wherever we need them.

Say for example we had a logistics process that routes orders through different flows depending on their value - which is enacted in *multiple* different workflows. Rather than needing to code this into every related solution, a business rules engine enables us to do this just once.

Then, if we need to make changes, we can do so in a single location as well.

We can also use business rules engines to provide an accessible, user-friendly way to implement governing logic. 

We can provide users with a library of pre-configured automation rules that can be accessed through webhooks or API requests - thereby lowering the technical barriers for business users to create custom automations based on these.

### How do business rules engines work

Let’s think about this in the abstract first and then we can come on to the practical side in a second.

At their core, we can essentially break a business rules engine down into three components:

- **Inputs** - the data that we provide to them.
- **Processes** - the rules and conditions that are applied to the inputs.
- **Outputs** - the decisions, data, or actions that are returned as a result.

How we interact with this can vary, based on how you build your solution. So, your engine might simply be a back-end tool that develops can connect to other platforms - or, you might create a UI to enact your stored logic.

This ultimately depends on what you want to use your BRE for. We’ll see some of the different common configurations in a second.

It’s also important to note that each rule will have a defined *schema*. This is the data that the rule can accept in order to be initiated. So, the specific attributes that we’ll assess, along with any stipulations we want to make about their format, type, or values.

Check out our guide to [workflow management database design](https://budibase.com/blog/data/workflow-management-database-design/).

Let’s take a look at some of the different ways we can put this into practice.

### Types of business rules engines

We can actually divide business rules into two broad categories - based on the kind of tasks they’re used for.

The first is a **production/inference** rule. These are also referred to as **If/Then** rules, which gives a big clue about how they work. Basically, these involve assessing data against a defined set of conditions and taking an action based on the outcome.

For instance, assessing if an employee’s expense request is permissible.

The other category is **Event-Condition-Action** rules. These are rules that react to certain *events* with defined sets of actions. So, these go one step further and actually initiate the follow-on task depending on what conditions are met.

They can also be triggered by *system events*, whereas production/inference rules are generally triggered by user actions. 

For example, we might have a rule that queries a table in our *customers* database at fixed intervals. We’ll then assess their most recent order date, so we can delete any customers that haven’t bought anything in over three years, for data protection purposes.

We’re still enforcing a business rule in this case, we just don’t require any human input.

### Architecture for business rules engines

We can also distinguish between different types of business rules engines in terms of how they’re built and implemented.

First, we’ve got **code-based** BREs. As you’d expect, these are hard-coded sets of defined automation rules. Your developers can then access these in a few different ways, depending on how you configure things.

So, you might simply provide your BRE as a development resource and allow them to import the functions they need. Or, it could be deployed somewhere, so you can allow them to initiate rules through webhooks or API requests.

The problem with this approach is that we assume quite a high level of technical ability for users to access our BRE. In all likelihood, they’ll need to be able to read and understand your code in order to call a function.

Code-based BREs are also relatively difficult to maintain, as we need to hard-code changes too and there’s an outsized risk that we’ll break something in doing so.

One alternative is using **low-code** tools to enforce our business rules. Normally, this will mean we can only access rules through webhooks or API requests, but it makes life a lot easier when it comes to managing, maintaining, or modifying them.

Generally speaking, we’ll also make it a lot easier for less technical colleagues to take advantage of our business rules engine. With Budibase, we can build web-based, open-source business rules engines at pace.

### Use cases

Let’s think about a few more situations where business rules engines can come in handy.

The first is your run-of-the-mill development workflows. Business rules are centrally defined - normally either by departmental leaders or the ops team. However, they can’t predict every technical solution that will need to draw on these rules.

We can save our IT team huge amounts of time and effort by eliminating the need to hard-code business logic from scratch, every time they need to build a tool that enforces one of these rules.

Say an insurance company needed to enforce up-to-date business logic on a whole number of internal solutions.

The other big use case is helping to empower non-developers to automate tasks. 

See, most companies don’t have enough developers to meet their internal demand for automation solutions. Today, most SaaS platforms for different business functions offer native automation functionality.

Business rules engines help to take advantage of this latter fact by empowering colleagues to automate tasks while still retaining high levels of process adherence.

## Benefits of business rules engines

With a better knowledge of what business rules engines are and where/when they’re used, it’s a good idea to drill a bit deeper into what they actually achieve.

As ever, money plays a massive role. In fact, there are several ways the BREs can help us to either cut operating costs or boost revenues. The most obvious is the development labor we can avoid by eliminating the need to hard-code the same rules over and over again.

The same is true when it comes to modifying or maintaining automation - we can just do it in one central location.

On the flip side, the potential to improve employee productivity is huge - since we can automate a larger number of tasks for less - even eliminating the need to involve our developers in many use cases.

Of course, this means we can more easily access the benefits of automation as a whole too.

So, in facilitating more widespread automation, business rules engines have a huge role to play in improving accuracy, consistency, efficiency, security, and scalability within our operations.

## How to use Budibase as a free business rules engine in 6 steps

Okay - that’s more than enough theory. The point of this article is to help you understand how you can create your own business rules engine and put it to work in the real world.

With a huge range of supported data sources, our own internal API, and an intuitive, low-code automation editor, we think Budibase is the perfect solution for helping you to enforce all kinds of business rules programmatically.

Let’s build an example rule to show you just how simple this can be in practice.

Specifically, we’re going to create a webhook to enforce a simple decision around shipping methods for online orders.

Basically, we have a threshold-based rule, where orders over $50 are sent by courier, while the rest go by regular mail. We need to give external platforms a way to trigger this automation and then update a centralized Postgres table with the outcome.

Here’s how we’d do just that in Budibase.

### 1. Create a Budibase app

First, we’ll need to create a new Budibase application to serve as our BRE. If you haven’t already, you’ll need to create a Budibase account. Since our use case obviously has the potential to get automation-heavy, we’re going to use a self-hosted Budibase instance.

Simply head over to you Budibase portal and create a new app. You can give it whatever name you want. Budibase will create a URL for the app based on this - but you can overwrite that if you want.

![create an app](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_1_oepw3z.webp "create an app")

We don’t need our demo data, so you can also de-select that option.

### 2. Set up your data source

Next, you’ll be presented with this modal, asking us to choose a data source for our app:

![choose a data source](https://res.cloudinary.com/daog6scxm/image/upload/v1682071886/cms/business-rules-engine/BRE_2_yfsej8.webp "choose a data source")

We’re choosing Postgres, but you could go for any data source you want in the real world.

We’re then prompted to fill in our database credentials and fetch the tables. Our dummy database only has one table so we don’t need to do anything extra here. If you had a more complex data set, you’d need to specify the tables you want to fetch.

![Connect to postgres](https://res.cloudinary.com/daog6scxm/image/upload/v1682071886/cms/business-rules-engine/BRE_3_g9hh4u.webp "connect to postgres")

Our demo table is nice and minimalist since it’s just for the sake of example:

![Business rules engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_4_mkpp4t.webp "Business rules engine")

Basically, we’re storing four attributes relating to online orders. The *item, unitCost,* and *quantity*, as well as an enum for the *shippingMethod*. 

This can be *Mail, Courier*, or *null.*

Both of the entries have *null* values for their *shippingMethod*. You can imagine we get the *item*, *unitCost*, and *quantity* data from our online ordering system, and we need to use this to determine a *shippingMethod* before the order can be processed in the warehouse.

But, this can only happen when we receive confirmation from a third platform - say, our payment processing tool.

### 3. Create a new automation

With our data in place, we can start to build our automation rule. We’ll go to the *Automate* tab and hit *Add Automation*. This time, we’re asked to pick a name and a *Trigger*:

![Create an automation](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_5_griwjq.webp "create an automation")

This is the event that initiates our automation. It can be a database query, time-based rule, or app action, but we’re choosing a *WebHook*.

We’re going to use *Postman* to simulate our payment platform firing a trigger. We could use any other API management tool instead, or any other platform that lets us fire off requests.

First, we need to grab our *Budibase API* key and import this into Postman. Your API can be found under your user icon in the Budibase portal:

![Business Rules Engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_6_s39mqw.webp "Business rules Engine")

When you click this, it’ll pop up in a modal, allowing you to copy it. Then head over to Postman - or create a free account if you don’t have one already. 

Hit *import* and paste in the URL from our [public API docs](https://docs.budibase.com/docs/public-api):

![Postman](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_7_aoovkc.webp "Postman")

Once you’ve imported this, you’ll need to head to the authorization tab and set the value for *x-budibase-api-key* to your API key. 

![Postman](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_8_xrlzwz.webp "Postman")

Then head to Variables and set the *Current Value* for *baseURL* to whatever URL your Budibase installation is hosted at, followed by */api/public/v1*:

![Business Rules Engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_9_avl1wl.webp "Business rules Engine")

Next, we’ll create a new *POST* request, with the *Trigger URL* from our Budibase automation as the *URL*.

At this point, we need to define the schema for our business rule. That is, the data we need to provide each time we run it. So, we’ll add an attribute to the request’s *body* to represent the item we’re applying the rule to.

We’ll call it *rowID* and set the value to *1*, because we know that we have an entry in our orders table with an *ID* that matches that:

![Business Rules Engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_10_j0fjc0.webp "Business rules Engine")

Keep in mind, this is just an example of how we could do this. We might not have the luxury of our IDs in the triggering platform and target database matching - in which case we’d need to come up with more sophisticated filtering to query the correct entry.

So for instance - using the order number, date, or customer information to find the right row in the database.

### 4. Test your webhook

Next, we’ll head back to Budibase and *Publish* our app, so that what we have of our automation so far is live. Then we can send our request from Posthog to check if our webhook works.

Once our request has been sent, we can go to the top left corner of Budibase and choose *Automation history*:

![webhook](https://res.cloudinary.com/daog6scxm/image/upload/v1682071887/cms/business-rules-engine/BRE_11_izsd9j.webp "webhook")

And we can see that our webhook fired successfully:

![Automation history](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_12_s7edoc.webp "automation history")

### 5. Query rows

We’ll head back to the *Automation* section of the app builder, and add a *Query Rows* block after our trigger, with the *table* field set to *orders*:

![Business rules engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071886/cms/business-rules-engine/BRE_13_weum3p.webp "Business rules engine")

We’ll then add a filter, to set the *ID* field to *{{ trigger.rowID }}*.

![filter](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_14_fx7ifb.webp "filter")

So far, our automation accepts an ID from an external platform and then goes and finds the row in our Postgres table that matches this.

### 6. Update rows

Finally, we’ll add an *Update Rows* block. We’ll set *item, unitCost*, and *quantity* to the respective outputs from the previous step and the *ID* to *{{ trigger.rowID }}*.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_15_uy05m0.webp "Bindings")

The binding for *shippingMethod* is where we’ll create the logic that enforces our business rule. 

This time, we’re going to use a little bit of JavaScript. We use an *if* statement to assess whether the product of the *unitCost* and the *quantity* is greater than 50. If so, we’ll return *Courier*.

If not, we’ll return *Mail*. Easy.

![Business rules engine javascript](https://res.cloudinary.com/daog6scxm/image/upload/v1682071885/cms/business-rules-engine/BRE_16_czw0oa.webp "Business rules engine javascript")

Once we’ve tested our automation, we can *publish* our app again to put the finished automation live.

Then, if we send our Postman request, the fully automation will run, and the matching row will have its *shippingMethod* attribute updated:

![Business rules engine](https://res.cloudinary.com/daog6scxm/image/upload/v1682071886/cms/business-rules-engine/BRE_17_oun9tc.webp "Business rules Engine")

Of course, this is just *one* business rule. To create a fully-fledged business rules engine, we’d need to repeat this process for a whole raft of other rules, either within a single department or across the organization as a whole.

## Turn data into action with Budibase

At Budibase, we’re on a mission to help teams turn data into action. Our leading open-source low-code platform is the ideal vehicle for building all manner of custom web apps, utilities, and automated workflows.

Check out our ultimate guide to [digital transformation platforms](https://budibase.com/blog/inside-it/digital-transformation-platforms/).

Let’s take a look at what makes Budibase tick.

### Our open-source, low-code platform

Budibase is design to make repetitive, menial development tasks a breeze. Our design philosophy - *simplicity by default; extensibility when you need it* - makes Budibase the perfect tool for time strapped developers and overwhelmed IT teams.

Check out our [features overview](https://budibase.com/product) to learn more.

### Extensive data support

No other low-code platform comes close to Budibase for external data support. As you’ve seen, we offer dedicated connectors for MSSSQL, MySQL, Postgres, Airtable, REST, Mongo, Couch, S3, Oracle, Google Sheets, and more.

We’ve also go our own internal database, with full support for CSV uploads and simple relationships.

### Optional self-hosing

Budibase is the clear choice for security-first organizations. We offer optional self-hosting, so you can deploy custom solutions to your own infrastructure using Kubernetes, Docker, Docker Compose, Digital Ocean, and more.

Or, to get started even faster, choose Budibase Cloud. Check out our [pricing page](https://budibase.com/self-host/) to learn more about both options.

### Low-code automations

Build custom automation rules, with minimal manual coding. We offer an intuitive, flow-based automation editor, complete with a whole range of loopable, configurable triggers and actions built in.

Connect to external platforms as automation triggers and actions using REST, Zapier, or WebHooks to use Budibase as an engine for your internal processes.

### Configurable RBAC

Budibase offers configurable role-based access control, making it easier than ever to create secure platforms that don’t compromise on user experience.

Assign users to predefined roles and enforce permissions at the level of screens, data sources, queries, automation rules, or even individual UI elements.

### Custom plug-ins

Budibase leads the pack for extensibility. Use our dedicated CLI tools to create your own data sources and components to ship across your Budibase builds.

Check out our [custom plug-ins page](https://github.com/Budibase/plugins) to learn more.

### 50+ free application templates

Companies around the world choose Budibase to solve all kinds of business problems. For a flavor of what our platform can do, we’ve created over 50 free, deployment-ready, and fully customizable [app templates](https://budibase.com/templates).

To start building custom solutions the fast, easy way, sign up to Budibase today, for free.
