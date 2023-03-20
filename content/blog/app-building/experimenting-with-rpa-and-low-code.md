+++

author = "Ronan McQuillan"
date = "2023-03-20"
description = "We wanted to investigate whether we can get an RPA to ship Budibase apps - and, more importantly, should you?"
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/RPA_and_LOWCODE_better_tegbsq.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/RPA_and_LOWCODE_better_tegbsq.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Experimenting with RPA & Low-Code for CRUD Development"

+++

We’ve been having a little in-house debate about combining RPA tools and low-code development - that we decided to put to the test.

Basically, we ran an experiment to see if we can answer two questions:

1. Can we get an RPA tool to build low-code apps?
2. Would anyone ever actually *want* to do that?

See, at their core, low-code and RPA are both meant to save you time - but the tradeoff is that you sacrifice some of the flexibility that you’d get with doing things the old-fashioned way - either performing a task manually or coding an equivalent solution from scratch.

The use cases for both crop up when the value from doing things quicker outweighs the limitations. We want to explore whether there’d ever be a situation where using *both* in tandem would be a viable option.

Rather than bury the lead, here’s a quick demo of what we put together:

{{< youtube ZqN70bM1AMw >}}

We used a tool called UI.Vision to set up a bot that creates CRUD apps for Postgres in Budibase.

As you can see in the log at the end of the video above, it takes 43.77 seconds to ship a working app. Users give it a name and choose the table in a pre-defined data set that they want to query - and get a working CRUD tool back in under a minute.

So obviously we *can*, but *should* you? Frankly, the results are a little inconclusive.

Here’s what we learned.

## TLDR

Like any exploratory piece of content, what follows is an account of what we wanted to investigate, why, the assumptions we carried across, what we built, the issues we encountered along the way, and what we learned from the whole thing.

To parse out the key points:

- We wanted to investigate if we could **usefully** **use an RPA to automate low-code development tasks**.
- Specifically, we opted to try and get UI.Vision to output Postgres CRUD apps in Budibase, with the minimum number of user prompts.
- We were able to do so relatively easily, with our solution **outputting working tools in under 45 seconds**, with only two user prompts.
- However, to do so *securely* we’d have to limit ourselves to tables that are contained in data sources that are pre-configured in Budibase as environment variables.
- Automating developments like **this only makes sense if you need to ship a large volume of tools that only vary in terms of a handful of defined elements** - such as creating similar tools for separate data sources.
- The kinds of development tasks we could most easily automate with RPA are the ones that are already the fastest and easiest in any given low-code platform.
- This means that, although we can ship tools faster than we could manually with whatever low-code tool we opted to build our automation around, **there’s a very small number of situations (if any) we’d make significant time savings**.

So, we *can* automate low-code development tasks with RPA but it’s not obvious to us that there are any real-world situations where this would be particularly beneficial.

Here’s the full run-down of our experiment.

## Background & assumptions

Let’s think about why we decided to run with a script for making Postgres CRUD tools first. 

Obviously, we needed a class of development processes that’s repeatable enough to be automated, but variable enough that businesses need to build a lot of them - so many that it would be *worth* automating.

CRUD apps are the natural candidates. They basically always do the same thing - with the big point of variation being the data we connect them to. It’s also a use case most internal IT teams will be very familiar with.

In short, we needed a use case that someone could plausibly want to automate and Postgres CRUD tools are as good a candidate as any.

We also had to make a decision about which elements of the build would be pre-configured in the macro and what users could define each time they trigger it. 

This is a big decision since it defines the scope of customization that you can achieve each time you use the macro, but it’s also one of the big bottlenecks in terms of how quickly we can output tools with RPA. The more prompts we require, the longer the whole thing takes.

So, if you were building a CRUD tool, you might want to write your own queries, customize the design, or set access rules. For the sake of PoC, we opted for a slightly simpler approach though. 

In our demo, we only choose a name for our app and select our desired table from a pre-configured data source (more on *why* we took this approach a little later). 

We *could* have added prompts for any of the above, but for the sake of experimentation, we’ve gone with more of a *minimum-viable* approach.

It’s also worth noting that RPA isn’t the only approach that you could turn to if your point of departure was that you wanted a way to expedite low-code development tasks. 

For example, you might want to automate a similar task by utilizing your chosen low-code platform’s API. This would also be a valid approach and - although you’d potentially be able to output tools even faster - it doesn’t quite invalidate RPA as a strategy.

For instance, leveraging an API like this would present much bigger barriers in terms of technical skills and would inevitably be a much more lengthy process to get up and running, even for users who do have the requisite skills.

In fact, we can circle back to one of the big reasons that RPA - and especially visual ones - remain popular. Not everyone would be able to get an API to do what they want in every use case. Even if they could, it would be a much more laborious process to set up.

Therefore, it’s still worth exploring the potential of using RPA and low-code together.

## Choosing an RPA tool

Knowing what we wanted to achieve, the next thing was choosing an RPA tool. We said already that we opted for UI.Vision. 

It’s worth thinking about why.

First, though, we should say that we don’t have any relationship with UI.Vision. We’d never previously used it. We’re not even *promoting* or really *recommending* it as such - it’s just an RPA tool that fits what we’re trying to achieve.

We chose UI.Vision because it:

- **Is UI-based -** we can just record the task we want to automate rather than writing commands manually.
- **Uses Selenium commands** - so there isn’t a prohibitive learning curve when we do want to modify the macro or add new elements.
- **Is open-source** - Budibase is too, and this is important to us.
- **Stores and processes data and images locally** - we wanted to keep the data that we pass into the macro to a minimum, but it’s still nice that this never leaves our local machine.
- **It just worked when we tried it** - we were able to get UI.Vision to do what we wanted with pretty minimal effort.
- **Offers enterprise-grade security -** which is obviously a priority if we wanted to do this in the real world.

There’s also functionality that we *didn’t* use that’s still worth noting - including a desktop version, command line API, CSV imports, flow control, and password encryption.

But - we don’t want to get too bogged down in surveying the RPA market.

Instead, let’s check out how it works.

## Setting up a bot in UI.Vision

First, we’re using the browser-based version of UI.Vision, so we started by installing that in Chrome.

After that, there were basically two steps to set up our macro. First, we recorded a demo version of how we’d build our CRUD app. The way this works is that UI.Vision records our onscreen actions, including *what* elements we interact with and *how*.

Each one gets recorded as an event with a *COMMAND, TARGET, and VALUE attribute*. The command is what we want to do, the target is the on-screen element we do it to, and the value is the variable we input or save for later, if applicable.

So, creating a screen in an existing Budibase app would look like this:

![Record screen](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Record_Screen_s16mxl.webp "record screen")

But, unless we wanted to create the exact same application over and over again, this wouldn’t be very useful on its own. 

If it’s ever going to be usable, we’re going to need to allow users to provide inputs for our macro. For example, if they want to build a screen, they’ll need to give it a name. We’ll start by recording this again with some dummy data (anything at all):

![Type Test](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Type_Test_vz1fga.webp "Type Test")

This time it’s created a *TYPE* command with the value *TEST* - since that’s what we typed into the text box. To let users set a value for this, we’ll add a *PROMPT* command to the start of our sequence and bind its output to the value of the *TYPE* step, with /${appName}:

![Bind app name](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Bind_App_Name_uev1l5.webp "Bind app name")

That’s how we got the user prompts for the *app name* and *table* in the video you saw earlier.

![Prompts](https://res.cloudinary.com/daog6scxm/image/upload/v1679328598/cms/App_Name_and_Table_f2xvlu.webp "Prompts")

The difference is that for selecting the *table*, we don’t use a *TYPE* command, since we’re choosing from a list:

![Tables](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Tables_List_qrea9h.webp "Tables")

Instead, we record ourselves clicking one of the items in the list and then replace the *TARGET* field for this command with:

xpath=//[text()[contains(.,'${table}')]]

![Click Table](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Click_table_um7l2s.webp "Click Table")

This tells UI.Vision to click on the listed element that contains the text that the user set as the *table* variable at the start of the macro.

These are the only elements that we altered after initially recording the basis of our macro, and we were able to create and publish a working CRUD app with 34 commands.

## Limitations

However, we also encountered some constraints that would limit how viable this is in the real world. 

We said earlier that UI.Vision offers its own password encryption tools - but many of our users are going to be averse to storing their credentials in a browser-based tool or using them in macros - even in encrypted form.

Therefore, we’re not storing either our Budibase logins or the database credentials we need to build a CRUD app in UI.Vision. The former means we’d have to manually sign in to Budibase as normal before we could initiate our macro.

Dealing with database credentials constrains us more in terms of how usefully we can combine RPA and low-code. 

Instead of passing our credentials to UI.Vision, we set up our macro to work with a pre-configured data source in Budibase, using *environment variables* - which encrypt and store your credentials within your Budibase instance.

That way, UI.Vision doesn’t know anything about our data other than the name of the table we’re querying.

The flip side is that we can only run our macro when the data source we need is already configured and usable within Budibase. 

This isn’t the end of the world, but it’s going to limit the amount of time you can save in situations where you need to set up a whole new data source manually. Although - only by a couple of minutes and just the first time we need to set up each database.

In our example macro, we’re assuming that the user would be working with a single data set, with multiple tables, and the only configuration option we’ve provided is *which table* to build a CRUD tool for.

So, when it sets up a data source for a new app, the macro only has to select the right environment variable for each field to create an app:

![Credentials](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/PG_credentials_t1hgjy.webp "Credentials")

Alternatively, you might have multiple data sources configured as environment variables, like so:

![Environment Variables](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Multiple_env_variables_mqvend.webp "Environment Variables")

In this case, we’d need to add additional steps to the macro to:

1. Prompt the user to input the name of the data source they want to use.
2. Choose the appropriate *type* of data source - if they aren’t all the same.
3. Choose the appropriate credentials.

We should state for absolute clarity that environment credentials are a *paid* feature in Budibase. 

The macro we’ve produced also publishes our application without using a separate development data set or giving you a chance to test it out before it goes live - which obviously we’re not recommending you do. 

We’re using dummy data for the sake of experimentation, so we haven’t factored these elements into our automation script.

So, security considerations clearly limit the cases where combining RPA and low-code would be a viable option in the field.

Is there anything else we need to keep in mind?

## Other considerations

We’re also trying to explore how *useful* any of this would be in the real world. In other words, could we save enough time by automating app-builds like this for it to actually be worth the effort?

One way of framing this is that part of the reason that it was so easy for us to create the macro that we did is that we picked a type of tool that can be built quickly in Budibase in the first place.

It only took 43.77 seconds because Budibase can already autogenerate CRUD screens, so our macro doesn’t exactly need to do much heavy lifting. This would probably only take a human user a couple of minutes, so the effective time-saving is actually pretty marginal.

We don’t mean this as self-promotion - we could apply the same logic to any of our competitors in that their core use cases would be the easiest to automate with RPA too. 

More complex use cases would take longer to do manually, but they’re less likely to crop up often or repetitively enough to be worth automating.

This puts us in a slightly strange position. It follows logically that the kinds of low-code development tasks that are most easily automated with RPA will also offer pretty minor efficiency savings in doing so.

It’s also worth noting that UI.Vision works by analyzing and then interacting with onscreen elements. Therefore, if you use it with Budibase - or any other tool - and an update comes out that materially changes the UI, your macro is probably going to break.

This is a point in favor of the alternative approach of creating an API-based solution that we mentioned earlier - although we still need to caveat this with the fact that doing so would be a much more burdensome and technically complex approach that isn’t viable for everyone.

So where does all of this leave us?

## Takeaways

As we said at the outset, this is a bit of an exploratory, experimental topic more so than a tutorial, recommendation, or even really a promotional piece. 

The idea occurred to us of using an RPA platform to build low-code apps and we wanted to explore whether or not it was a good idea. If nothing else - because we couldn’t find anyone else who’d attempted it.

We kicked off with two questions. Let’s answer each one in turn.

### Can we make an RPA build Budibase apps?

Yes - although admittedly, with some caveats in place. But, functionally speaking, we *can* get an RPA tool like UI.Vision to output apps in Budibase:

![CRUD app](https://res.cloudinary.com/daog6scxm/image/upload/v1679328599/cms/Postgres_CRUD_tool_cq9gzn.webp "CRUD app")

Truth be told, we had a pretty good idea that this would be the case - although we’re not aware of anyone having previously tried, so we didn’t *know* that it would work, at least not as such.

However, although there are plenty of repetitive development tasks out there, we’re still dealing with a pretty limited subset of projects that are so repetitive that you’d want to automate the full build, as we did in our little demo.

That leads us to *arguably* the bigger question.

### Would anyone want to?

Hard to say. Our example macro builds a CRUD tool. This is a nice use case to play around with since most developers are familiar with it, it’s fairly repetitive, and business IT teams need to ship them on a relatively large scale.

But, if you were already using Budibase to output these kinds of solutions, then it’s specious to imagine that shaving an extra minute or two off the build-time through RPA is going to be revolutionary - unless you’re working at an enormous scale.

Still, there might be potential here for RPA to add value to low-code development workflows.

For example, you might build a lot of tools that are *based* *on* a common skeleton - like a basic CRUD app that you then add additional elements on top of. 

Or, you might need to output a high volume of even simpler tools with minor variations, like basic data entry forms or even dashboards, where you could save time if all you had to do was select specific fields to include each time.

Basically, though, it’s not obvious to us that there’s a particularly compelling use case for using an RPA to build low-code apps - but we won’t go as far as ruling it out entirely. There might also be situations where this could add value to more granular development tasks that stop short of a full app build.