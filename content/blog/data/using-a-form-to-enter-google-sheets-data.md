+++
author = "Ronan McQuillan"
date = ""
description = "Budibase is the perfect solution for using a form to enter Google Sheets data. Follow our tutorial to find out more."
draft = true
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1661162349/cms/Using_a_Form_to_Enter_Google_Sheets_Data-2_c9wd4k.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1661162354/cms/Using_a_Form_to_Enter_Google_Sheets_Data-2_gw9fv9.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "Using a Form to Enter Google Sheets Data"

+++
Obviously, Google Sheets is great for collaboratively managing all sorts of data. There are big downsides here too though, especially if you’re working at scale. One solution is using a form to enter data into Google Sheets.

Today, we’re going to look at exactly how you can do this in Budibase.

There are a bunch of other ways you could do this too, of course. We’re biased, but we think Budibase is the best option. We also think that once you hear what we have to say, you’ll definitely agree.

But first, let’s check out a bit of background information.

## Why would you build a form for entering Google Sheets data?

This is a reasonable enough question. After all, it’s perfectly easy to add or edit rows in a spreadsheet.

What’s the point in adding extra complexity?

There are a bunch of situations where spreadsheets alone fall short. We won’t bore you with every single one, but instead, let’s take a couple of quick examples.

First, say you wanted to manage sign-ups for a meeting or event. You can’t just let each participant add their own details, because they’d then be able to see all of the other attendees.

Or, they might accidentally do something they’re not meant to, like delete a row.

Similarly, what if you had a whole army of admin staff working on a lot of data at the same time?

Real-time collaboration is cool and everything, but it can also get very messy, very fast. Data entry and update forms are critical for ensuring accuracy and error prevention.

Check out our ultimate guide on databases vs spreadsheets for more details.

## Why would I build forms for Google Sheets with Budibase?

Another excellent question!

No doubt, you’re well aware that Google offer their own solutions here. So, you could build a form on a separate sheet and use built-in functions and Google Apps scripts to add rows to your dataset.

Alternatively, you could do something similar with Google Forms.

There are three big problems here though:

1. Google’s solutions only really let you add data, not update existing rows.
2. Neither of these options looks particularly professional.
3. You can get a better result with Budibase, with much less effort.

The last point might surprise you. It’s a very big claim, to be fair.

So, how exactly is this possible?

### Our dedicated Google Sheets data connector

Budibase offers an unbeaten range of dedicated connectors for external data sources. One of these just so happens to be for Google Sheets. All you need to do is sign in with your existing Google account, paste a link to your spreadsheet, and you’re ready to go.

Then, you can use Budibase to automatically generate a fully-functioning [CRUD app](https://budibase.com/blog/crud-app/).

We’re going to look at the full details in a second, but the whole process won’t take you any more than a couple of minutes. You’ll also enjoy far superior functionality, customization, data validation, and flexibility than you would with an all-Google solution.

We’ll return to some of the more specific features of Budibase that make it the ideal solution for using a form to enter data to Google Sheets a little later.

For now, though, let’s jump into the practical stuff.

## Building Google Sheets forms in X steps

We do have a couple of obvious prerequisites. We can safely assume that you have a Google account already, along with a spreadsheet you want to manage. You’ll also need to sign up to Budibase, of course.

With that out of the way, here are the specific steps you can follow to start using a form to enter data to Google Sheets.

### 1. Create a new app & select Google Sheets as your data source

Unsurprisingly, our first step is to start a new app project. So, once you’re signed in to Budibase, hit _Create new app_, and then choose _Start from scratch_. At this point, you’ll be prompted to choose a name and URL:

![](https://lh5.googleusercontent.com/CmQAPcpmS1KIlBYBkIVBZ7iIQohE0UWR_eIUMPAKZNF8By_M8PXLOpTAD-IovVXnFS_sFZ3ZtdTp71MdNvH_cXrSvwYs4a3Zg5I9HV6d3jHBEcUB54HqATSjaBlmjvMr3-khHcEp7aH4PZNkJbgt39o =624x365)

Hit _Create app_ when you’re ready. Next, you’ll see a modal with a list of all of the data sources you can choose.

Pick Google Sheets. No surprises here.

### 2. Configure your data connection

With your app created, the next thing you’ll be prompted to do is sign in with Google to connect your accounts.

You’ll then see a screen like this:

![](https://lh5.googleusercontent.com/hGwsH9Onby3XRNKzUuRJWGCjk6tPSNauFyUaskSzjzNu1Ax1TP4FgWGE2EQLGZCEYcSj27anroL4r9nGpY5T_JZcH30YhGQ2Q4AovnQNaBxzfw7XrLdnj8sIl5fZY2-KcsDRODZOTrM_LVYNFRGNFC4 =624x364)

We need to do two things here.

First, we’ll give our [data source](https://budibase.com/blog/data/data-sources/) a name. This is only for internal purposes, so the important thing is that you use something that’s easily distinguished from other data sources you might use.

We only have one data source for our example, so we’ve just gone with _Form_.

Then, we simply paste the URL of our spreadsheet into the second field.

### 3. Fetch tables

Next, we’ll fetch our tables. This means pulling in our Google Sheets data so that we can interact with it in Budibase, as we would any other type of database.

First, hit _Fetch Tables_. You’ll then see something like this, with all of the data from each of your spreadsheet’s tables:

![](https://lh5.googleusercontent.com/9yWjLd9Sd5QFlRCqV67i-iNf1mswqTm4xYPMgvsfAUuqiQKlrWQOKRCCuq1_8WoKfgKey1MD5_nuQf-WLqJIMX6n2iGwKGnvvohGAi5faZKkrGGeg7ZREVW4UhKobL2DEFeB3sfM3grfna6hmI_pzbA =624x355)

For context, our spreadsheet looks like this:

![](https://lh5.googleusercontent.com/FrMoWXGo9Ma9EsJN0vmjZUWBT9XT_H1usAHMjD2_w_EVOZaMKCRCFHH2RZWu1KQXTk5jmonD92vVI2-ep6WTK88KsL4HrsC7wiCteBXGe3KGen5N5AUKg1Dk73j-a8Emra72vh3alfH_H320f6rGbEI =624x355)

Notice that you have a few extra options at this stage. You can add new columns or rows to your Google Sheets data from the Budibase backend. You can also import or export data in bulk, or, if you have multiple tables, define relationships between them.

We just have one table today though.

As we’ll see in a few minutes, we also have the option to set minimum access levels for different kinds of queries.

### 4. Autogenerate CRUD screens

Next, we want to build our forms. Specifically, we want one form to add new rows to our spreadsheet and another one for updating existing rows. For the second type of form, we’ll also need to provide an interface for users to find the right entries before they can edit them.

Budibase offers you a couple of different options here. On the one hand, you can build your own interfaces from scratch, if that’s what you want to do. We offer a huge range of built-in components, making it easy to build professional apps, with minimal technical skills.

For our purposes today though, we’re going to let our auto-generated CRUD screens do the heavy lifting.

Head over to the design tab at the top of the Budibase builder and hit _Add screen_ on the left-hand side. You’ll then be given a choice to either create a blank screen or to use autogenerated screens:

![](https://lh4.googleusercontent.com/t38IO8fqZWsEyRn7xHHtEjPeWdIoF9dkw1LS6uX-daxWuKLMNxZcjzsle7QpLNEEbuBB_o1Q2IM6TgZtUSodKIJ3dN3YT9pHnBMYhcGPI3D0x5UIRylkDA9nOSG1rXEHD6fdGNx7yV6c4a8Q9MIPMFw =624x355)

Choose the second option, and hit _Continue._ You’ll then be asked which data source you’d like to autogenerate screens for:

Remember, we only have one sheet in our connected spreadsheet, but if you had more you’d need to choose between them:

![](https://lh4.googleusercontent.com/MsFIPuTqjtZeeUXI6KgCDCL37yEbNYDzdx5nAAVvGAN1R-86PfsMm8D9I5kFe_PNaEZdHYCbHTUo_qM9r390L4blayIYsmnjghXX0Wb0DO2tLMG7_cpFmy3waqJfpK7iOZRBzQOHZlC5QHA0huiegw0 =624x356)

Hit _Confirm_ and Budibase will build three screens for you. One is a table for reading and navigating to existing entries:

![](https://lh3.googleusercontent.com/SDsrLN231Zx0GPCqldNodQK0WVNvMWkz8Lncu0R7Rq7qLo2kJzFFzkk8l8EgrcO2jquHMPd9WMpqIVWRD7NId0QQyOEFnd1l8YiNXmDrXEMoqJrUmi2kRQRt5edlXB8AjFi8VY2lBUnEsrGWL9tN4-A =624x365)

Each row has a link with the anchor text ‘_View’_. Users can click on this to access the _Update_ form:

![](https://lh4.googleusercontent.com/BLBuatGqxhuynLV45a1Q7ru21R3GKsLMu0-ZtQp_Tvge8Yowb11o4aBdPGax5lH2h_aiDQL6htBn7U5koJYqgVq9YzwdcpRszDIE9ADViMRUGwRIMaU6sdVPnq6RwKFHL3Bx146x1v9bNl9Q6tVJCek =624x364)

And finally, we also have a form for creating new entries:

![](https://lh6.googleusercontent.com/S0bs8nIG1b8Z-e0wXDdgKRgrrItAJf5gQSNnNCXpivj5rd2Xab_N0LhuTsojfBMw6e6516O4zQShrVS5kmf9Evv9WKLWqXBAvJ8KRF7jFK6i3qcqWItDYFWGmpCeZchG4kXD_T9EFxwp1hck2hY9Yyg =624x364)

So far so good!

Before we go any further, let’s make sure our app actually works, though. Hit _Preview_ up in the top right corner to open your demo app. First, we’ll try updating a row. Navigate to any existing entry, using the _View_ link on the relevant table row.

We want to see if changes made in our app are reflected in the connected Google Sheets document, so make a change to one of the attributes. We’ve added the word _TEST_ to the first_name field:

![](https://lh6.googleusercontent.com/9l1RgjXgEvlW0is9UbUo860bByG6UB7M7a5PG_y-PvFdyS575BehgVLV6qB0JFJSW2d64XuEQpzN-hfK5rDO2oLvxBl1Hu61yDFW8i7bMqWvFZSjcirJPjJsEJbH-SapmTz1PyiwZUbxM4YTmn--uf0 =624x365)

Hit _Save_ and head back to your spreadsheet to confirm the change has been made:

![](https://lh4.googleusercontent.com/ZdhiL77GuAKGU2kTQf1qI0DVFriHpTDetG2MK3eQU2uFi0VgAr2dv2ZAWhpzkLgC-XMb3V_6uGD5e3S9ak0XbntOkBgMRQTN9JZpc21JGK6w6kIjsMYItgoFZVDy6FCWL-M56rp7hqVFpyryXeVzC5k =624x348)

Happy days!

We can repeat the same process for our _Create_ form too. We can also reverse this process - so make a change in your connected spreadsheet and then refresh your Budibase data screen, to confirm the update is reflected.

Now, for really simple use cases, we could use what we have so far as a deployable solution. For example, you might not be too worried about access control or design for your Google Sheets form - in which case you could simply skip to step 7 and publish your app.

But, part of the beauty of Budibase is that we don’t need too much more effort to transform this simple app into something really impressive.

Let’s think about how we could spend a couple of extra minutes really supercharging our forms to enter data to Google Sheets.

### 5. Assign access levels

First, let’s think about how we want different kinds of people to use our app. We have two forms, so it’s unlikely that they’ll be used in the exact same way.

For example, maybe we want customers to be able to add their details, but only internal users to read or update existing entries. Luckily, Budibase has you covered with our built-in [role-based access control](https://budibase.com/blog/app-building/role-based-access-control/) system.

Essentially, this allows us to give each user a _role_ and then assign access to different resources to groups of users based on this.

For our Google Sheets forms, we could do this at a few different levels. One option is to restrict queries under the _Manage Access_ modal in the _Data_ tab:

![](https://lh4.googleusercontent.com/yEe8ph34qZ3Pk4iU9jLHjTKm2ryXsSQ1SWUJnotWDYtTWaqI9cJRE5JVgwiiHpVLHvUwOUOR_LQ-Xe-shNoECA4Np3DVI-dUtaZoF2XtZkvQD5epFMsOF2QOvzELW0FswQvNfj89yfKUzY0czU635qU =624x364)

This simple [data access control](https://budibase.com/blog/app-building/data-access-control/) screen allows us to set the minimum role required to carry out different kinds of queries. We’ll need to set _Write_ to _Public_ so that external users can sign up using our form.

We’re also going to set the minimum role required to access each individual screen. So, let’s say we want our _Create_ screen to be accessible to _Public_ users, but for the other two, you need to be a _Basic_ internal user.

We can use a simple dropdown selector to set the minimum access level for each screen.

Our _Create_ form is already set to public:

![](https://lh4.googleusercontent.com/BSU3qiYnaET2XUvjxziOptRgROUfGFaoVrWsxU_YTVRJW9PqQbjw3Ly7ByX4Qy-1UkzOmvTrvzgzjbLy0UzWnjegKAXKbKoEbMxbSH9anASTprA2NzH7i7P7tBZLkWs-xvjIg0-Y12zMiAoJRZisgvM =624x364)

And we can quickly change the others to _Basic_:

![](https://lh5.googleusercontent.com/9Za7VFSartzJO5m-PLCSYc0YMbxXnZuMyNgtcNOzVU3ualouYxiTYajM-mofcvSVXrqqbLVMwiaunBUEfT49XP3yp4JDBlVxK5RHRoCMCqqEVsOghIGrKVUbTrCn_l8F9ENki29giFx_iAqYnKAITVM =624x365)

Since different users can access different screens, we need to adjust our in-app navigation too. That is, we don’t want to show users nav elements that relate to screens they can’t actually access.

This would make our UI much too confusing.

Again, Budibase gives you a bunch of different options for achieving this. One approach would be setting custom conditionality rules to hide individual components. For our app though, there’s an easier way.

First, we’ll set the home screen for each of our two access roles, using the checkbox on the right-hand side. Check this for the _Create_ form and the _Table UI_:

![](https://lh3.googleusercontent.com/Hd14tfAlhmFsbkBynwiU-ymk1-XA1tTsWU_J06c5EymQEDM0g3cZ1U2Xymegl_nnILMQMgvgWtcb2zEmkd-a4J2ZzYFmUEB9WftNlxCePB7eYoO7QumNkuP9Fg7W5KW3LIZb8NAKYB577IKStaeB7g8 =624x365)

We can designate more than one interface as the home screen, but only if they have different roles assigned to them. When a user opens our app, they’ll see the home screen for the highest role they have access to.

Finally, we’ll deselect the _Show navigation_ setting for our _Create_ form:

![](https://lh3.googleusercontent.com/C1B7TS2tcFr44YNYPFvmQ3UCzHlhsV8NQI_8B5A9adxJqRLpBL0KSndyfRJIfValJ1kpvMvtZIVCLR-TeCqgIee4Nc7c3Ts-4YNe1aXtDDsBLupeFLJlayPNY0pt3vn5n95petr9m0a1TWVoaEPg_EA =624x365)

Now, when a public user lands on the app, they’ll see the form, but they’ll have no way of navigating to any other screens:

![](https://lh5.googleusercontent.com/s-amwhPBtp5XF-MN0bXDAqSNbftIiUqgpPaIRCbD0aJJMhG3JTAA7kmuD-sem3c0NnXezaPajIymI273einyOcTQlOpW4ekssvMeGw24JlcdOxf_LRAhBhv_NYfjzpAcavDCXtmpgP23dBFlZBNw58Q =624x365)

### 6. Customize your design

As you might have guessed from the last image, we’re also going to put some work into making our design a little bit more visually appealing. A form to enter data to Google Sheets isn’t the most exciting app in the world, but we should still aim for an attractive UX.

First, let’s change our app’s theme a little bit. We’re creating a customer-facing tool, so we’ll go with something light and airy.

First, we’ll set the default theme to _Lightest_:

![](https://lh4.googleusercontent.com/2Q64ZcG0guACX5SE7EpFLHAxzSg-yFLgoU8iZS_fTqYZFLadoi48w_dMp1Y9Exl73zbHGHt5k9rQTXqVPm86stmIzNPnBfqhfJnQwq5Q0NEECFrj0TUTYM9qeN09n-yhPIvIa58tEJAiNgeNeRXbwnE =624x364)

Then, if we like we can also change our accent color while we’re here. Let’s go with green since we’re talking about Google Sheets:

![](https://lh6.googleusercontent.com/MxkF4vjfxMECcbtV8xuXyl93wbB_GHBeLYVcX6hykI3WiES8fMmurDVjtPEav-fpSc-k0u9UXWE_CzmcxFRuXaxw4mAJ0P4buULUp_kIz5N1x5OjCiNiEe0M9apmjexI_2KWnFwuOHoLHyMVwwJL4Z4 =624x364)

Now, let’s focus on the _Create_ form to show off what we can do in Budibase to make our UIs pop.

First, autogenerated screens come with breadcrumbs by default, but our _Public_ users can only access one screen, so we might as well delete these:

![](https://lh6.googleusercontent.com/82-AQrNb2MzpIJOv5xCGPrElJ86cTXp9atuNAMaL9HlIoXuOPjtltfQpdTuv5RP5FiteufxwJlUyPPxQUXIrXILX9cgnN3FNPdc2z9FNwp-HEw-bcj93SP74Lbfr_EsVQj5WPASPG95I8xZZeGPpov4 =624x364)

Then we’ll add a bit of margin to the top of our form:

![](https://lh3.googleusercontent.com/-hyl3iM4zkCmdhzIWOcm7WIFyqnbQQnWMXyA-N__nTQ5J1JLsVtvnpIxe158JxVFcdcOzZi5sOHPIylDpWDvGMO6pBPyZwSpzZ-xkGb9IxwzMqBmpsQ2ntrT_6ieMeZhUdWodtcHYcWJane5RhTD8Qo =624x365)

We’ll also set the _Variant_ field for the _Save_ button to _Action_, so we can use the theme colors we chose a minute ago:

![](https://lh5.googleusercontent.com/-6qSGhQDDhz1rsHIJ2niKIXN0nMB0EM9odbLyu7KVb2uh52SAlKhzPmRR3RXCCgAGlD2rwWtgjQH6U1uvYwx21Yxp9L9aEwah3ujaLlcJMhUdZJpc7PHk-_uByPumD9uSyyrdslB1FqKNchZ6duwx8w =624x365)

_New Row_ isn’t much of a headline. To change this, select the _Title_ component on the left, and add something a bit more exciting to its _Text_ field:

![](https://lh5.googleusercontent.com/PZ4SUh7I3688X49awFNacxWO69dIKCa0aQtuhVb1hdtOg16jXAC2PMFylH3ABq0RDBPpKRHgOyB3tbF8Zn3OrNvbNaTO8VWAbTayrdk1SB3yAElZ0iAJx3iwVkoaUAnbvuctncOkqtIdQT5nx0Va1Go =624x365)

This is already much better, but our [form UI design](https://budibase.com/blog/app-building/form-ui-design/) still looks a little strange. Next, we’ll select the _Field Group_ component. This is essentially a container that controls certain settings for each individual field component.

We can use this to move the labels above the text boxes, instead of to the left of them:

![](https://lh4.googleusercontent.com/zoGpYXWvGg3SQpiPbMNzxQiJB8SM0814P6oWd4BVizVBcozuDGFvBhE1UU5FpNYqTrUxgH7M0gMAu3JivBSUU0SJG4tVWuAOq9m-EBKZASEFh3WoW8LZJ4n2OhPweq89vmbGgU5CaQ6adMsMaOJlVD4 =624x365)

Finally, we’re dealing with members of the public here, so we don’t necessarily want them to know we’re using our form to enter data to Google Sheets.

We can change the _Label_ and _Placeholder_ text for each form field to something more user-friendly than our spreadsheet headings. Just take care to leave the _Field_ as it is:

![](https://lh4.googleusercontent.com/q7YMDQ4s07cVqORpDUeI187R_Fv9opBueAjsw_1Qi3w3fYKDVEg5GxnFgkYKGAEm5JkHgvJpF9oOXv465Bt_8iz9vjC5gRwJbjaSzPhj4YGqScfNJZ0vaaW_ju83K6dm04gxBF6TXNawA0ofDMbQmiQ =624x365)

Et voila! We now have a clean, professional-looking form to enter data to Google Sheets:

![](https://lh3.googleusercontent.com/xOqzLDHPCE4WyCVd4Rx_SPoFwdQFTppaikk1rWzgMjtOVtAO-XAWKFnOWg5F49iswhr8JM3bWnK8vV74I7PZkko4hx5535gRuUU-tWIJztaO1_SVzdTGqB70oEXzXahRwFHfvUmLc3fJWDzZfyUR3ak =624x365)

It even looks great on mobile:

![](https://lh6.googleusercontent.com/w_6AYRlQOrripwoCHBybPEUvwF5u-Lrf2sy7BmAKXulEbgieX8MiS0LO9BEk9CwMrVAzKyyY694UgXnRM7PX1jZgyZBJDHIst72GXX7o1bT35DFunBmvIdFimJUUBGdlClQwQIb6cF2XNINTO03V1kc =624x995)

We can also make all of the same kinds of improvements on our _Update_ form, but we won’t bore you with showing you all the same ideas twice.

Let’s just make a couple of quick adjustments to our [_Table_ UI](https://budibase.com/blog/app-building/table-ui-design/), and we’re all done. Here’s what this looks like at present:

![](https://lh5.googleusercontent.com/PQdIRIVCjgcy2OPtuUdy6QSAmi03GO-DJOIZMW-PRweuGC8yzAoMnArcctZoY93rnbrVS8mCbuQ0YYIckYMCXQbW6zSF10hq86shTh7aWs5DkxAY9PrdfizYlF6Q9ZMSVc8Uskxqjb3kKGGYA8LP2zY =624x365)

By default, the heading is the name of your source sheet. Let’s change this just like before, except this time we’ll bind the current user’s first name to make it a little bit more personalized:

![](https://lh6.googleusercontent.com/lT9huth2XoznO0QacMr9OGFd3zcaw-6nMfe7ApJKcz52f8EGf6A-3Kt50IJUmd8tZbp4qvHhiGuz9jgMioUfRE2XYsy5llLtOIlpKPTe58QwzXbHYVI377H4rnQ8DowKbGcx3vCnHBzMLYbxcFxHqtw =624x364)

We’ll also change the _Create New_ button to the _Action_ variant again. Now our app looks like this:

![](https://lh6.googleusercontent.com/RXZN2_PKLravFe6qVEzlj6q5NeqXho7tn_8nL4xnFlFy3j5R7OBl0Wh4z2FtuUZzzAs_Is66SXYdTe3Ise9jhFZPfFXbTZZdZ2Nm_-Lwm5Qgr42AjhXerAJudsXlPvszvXnCdXHUlGdHbUcnhVhUA_w =624x348)

Finally, we want users to be able to search for specific entries to edit. Select the _Data Provider_, hit _Add component_, and choose the _Dynamic Filter:_

![](https://lh5.googleusercontent.com/F2f7S4529FLlL2XJ_qrhTmk1i3NpXSNUDvdVvwZ6-xt28obnzOWCub92tZ_KPF-3UCX8YWc9bNn08sJSu6yCEK8f4rA97llVPyskeWc5gOKKNb8IhKB9ISDsDWH1uYmXqIyi33IAfIF-G855jZpgIs4 =624x365)

This gives your team a simple way to create complex filters for finding specific data:

![](https://lh3.googleusercontent.com/LZnjuE6VpUhQIqq87HsLfM79uyCHUTfBPZAumOasfLwz0Ad7rxshdlyD1JJmCyPaHEBbVgxkGuJacRml0BLmzoW6P6RVWY1M6oRrP_ZwzTnHgPjmDXGa3sQWdZ7riciZQa-O3WyZlpSwW0zb7kQi1jE =624x364)

### 7. Publish your app

Finally, when you’re happy with your app, it’s time to push it live. As ever, with Budibase, you have a few different options for how you deploy and host your apps. On the one hand, you can deploy to Budibase Cloud, in just one click and let us worry about everything.

Or, if you prefer, you can deploy to your own infrastructure with Kubernetes, Docker, Docker Compose, Digital Ocean, and more.

This may not seem like the top priority when using a form to enter data to Google Sheets, but there are countless situations where how you host your tools plays a critical role.

For example, you might want to introduce extra levels of security, monitoring, or other measures.

Or you might simply have your own infrastructure and want to use it. As the leading [open-source, low-code platform](https://budibase.com/blog/open-source-low-code-platforms/), our goal is to give you the tools you need, whatever your specific use case.

## The smart option for using a form to enter data to Google Sheets

Budibase is the fast, easy way to build all sorts of custom solutions. Our intuitive low-code tool is the perfect solution for [internal tools](https://budibase.com/internal-tools), customer-facing apps, dashboards, and more.

The vast majority of apps that businesses use are simple interfaces on top of a data source.

We’re on a mission to create the world’s largest ecosystem of open-source tools. Budibase is the smart way to create custom solutions for a whole range of business problems.

Sign up today for free to start building your own incredible, low-code solutions.

Or, check out our library of free, deployable [app templates](https://budibase.com/templates/) to see more of what Budibase can do.