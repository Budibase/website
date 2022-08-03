+++
author = "Joe Johnston"
date = 2019-04-23T00:00:00Z
description = "Learn the best way to build a web app and deploy it. This tutorial will provide you with two different methods."
title = "How to build a web app: A beginner's guide (2022)"

+++
{{< figure src="/how-to-make-a-web-app/how-to-make-a-web-app.jpg" attr="Picture by [Med Badr](https://unsplash.com/@medbadrc)" alt="How to make a web app" >}}

In this post, I’m going to show you EXACTLY how to make a web app.

In fact, this is the process I’ve used, revised and perfected over the last 5 years.

I’ve used this exact process, or a version of it to build over 15 applications of all shapes and sizes. For me, this is 100% the best way to build web applications.

But, before we start the  tutorial, a quick recap on what we define as a web application at Budibase.

## What is a web app

An interactive computer program, built with web technologies (HTML, CSS, JS), which stores (Database, Files) and manipulates data (CRUD), and is used by a team or single user to perform tasks over the internet.

There is a lot of confusion around what exactly is a web app. For the purpose of this post, we feel our definition above simplifies what a web app is. If you’re still unsure, we've included examples of what we believe are web apps, and what are not, below:

<table>
<tr>
<td><strong>Name</strong>
</td>
<td><strong>Web App?</strong>
</td>
</tr>
<tr>
<td>______________
</td>
<td>____________
</td>
</tr>
<tr>
<td>Amazon
</td>
<td>No
</td>
</tr>
<tr>
<td>Wikipedia
</td>
<td>No
</td>
</tr>
<tr>
<td>Facebook
</td>
<td>No
</td>
</tr>
<tr>
<td>Google
</td>
<td>No
</td>
</tr>
<tr>
<td>Trello
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Gmail
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Notion
</td>
<td>Yes
</td>
</tr>
<tr>
<td>Pipedrive
</td>
<td>Yes
</td>
</tr>

</table><br>

## How to build a web app: slow-code vs low-code

Like any other kind of development, there’s no one single approach when it comes to how to build a web app. In reality, there is a vast range of different tools, methodologies, techniques, and standards out there.

On the one hand, this is good news, because it means that there’s a suitable option out there for every skill level and every project scope.

On the other hand, it makes writing a comprehensive guide to creating web apps a little bit trickier.

For simplicity’s sake, we’re going to divide your options into two separate strands.

The first is traditional development. The second is newer technologies, including low-code platforms. Let’s take a quick definition of each, and then later we’ll jump into the specific steps you’ll follow to create a web app using each.

### Traditional development

Traditional development, or slow-code as we like to call it, essentially means building everything from scratch, including your interfaces, your data connections, and your business logic.

As you might expect, this is a pretty labor-intensive process.

There’s also the fact that you need the specific technical skills required to achieve this.

As we’ll see, there are some tools out there that make this easier, including component libraries, code frameworks, and other shortcuts. In fact, it’s pretty rare that you’d sit down to build a web app, and actually hard-code every element of it from scratch.

Even _with_ these tools, this is an involved process.

That’s before you even think about testing, hosting, and deployment. Again, we’ll cover each stage of this process in a few minutes.

### Building a web app in 2022

These days, more and more developers are turning to more high-level, abstracted tools to build web apps.

The no/low-code revolution is at the center of this.

Instead of building apps from scratch, developers are realizing that even complex projects can be built faster, cheaper, and more effectively with low-code tools.

And that’s just for people who _already_ know how to create a web application.

Low-code offers just as much, if not more, for less technical types. For example, Budibase empowers users to build fully functional, professional web apps, without writing a single line of code.

We’ll take a look at exactly how this works towards the end of this guide.

Ok, now we’re on the same page, let’s jump into prerequisites.

## **Prerequisites to create a web app**

To make a data-centric web app from the bottom-up, you’ll want to understand:

1. Backend language (e.g. Python, Ruby) - control how your web app works
2. Web front end (HTML, CSS, Javascript) - for the look and feel of your web app
3. DevOps (Github, Jenkins) - Deploying / hosting your web app

If you don’t have any experience with the points above, don’t worry. You have two options:

1. Learn the points above - there are lots of resources online to help you. I’d recommend Codecademy.
2. Use a web app builder like Budibase - As a builder, Budibase will remove the need to learn a backend language. On top of that, Budibase will also take care of a lot of your DevOps tasks such as hosting.

Moving on. The time has arrived to quickly dive into the specific methods you can use to build a web app of your own.

First up, we’ll check out the 12 steps for making a web app.

Are you ready? Let’s do this!

## How to make a web app in 12 steps (4 stages)

<br>

**Ideation stage**

[1. Source an idea](#source)

[2. Market research](#research)

[3. Define functionality](#functionality)

**Design stage**

[4. Sketch your web app](#sketch)

[5. Plan your workflow](#workflow)

[6. Wireframe the UI](#wireframe)

[7. Seek early validation](#validation)

**Development stage**

[8. Architect your database](#database)

[9. Develop your frontend](#frontend)

[10. Build your backend](#backend)

**Launch stage**

[11. Host your web app](#hosting)

[12. Deploy your web app](#deloyment)

## Step 1 – Source an idea {#source}

{{< figure src="/how-to-make-a-web-app/idea.png" alt="Choose an idea" >}}

Before making a web app, you must first understand what you intend on building, and more importantly why?

The idea process for many is the toughest part.

**Your idea should stem from solving someone's problem. Ideally, your own problem.**

It’s important that you choose an idea which interests you. Interest is key to fuelling motivation which is crucial when making a web app. It takes effort building web apps and it's important you have fun during the process.

Ask yourself:

* How much time do I have to build this app?
* What am I interested in?
* What apps do I enjoy using?
* What do I like about these apps?
* How much time/money will this app save or generate for me (as a user)?
* How much will it improve my life?

If you are having a hard time finding ideas, here’s [6 micro saas ideas](/blog/micro-saas-ideas/).

## Step 2 – Market Research {#research}

{{< figure src="/how-to-make-a-web-app/market-research.png" alt="Conduct market research" >}}

Once you’ve chosen your idea(s), it’s important to research the market to see:

1. If a similar product exists
2. If a market exists

The number 1 reason startups fail, is down to the failure to achieve product-market fit.

Marc Andreessen defined the term product-market fit as follows:

“Product/market fit means being in a good market with a product that can satisfy that market.”

To quickly find out if a similar web app exists, use the following tools to search for your idea:

1. [Google](https://www.google.com)
2. [Patent and trademark search](https://www.uspto.gov/trademarks-application-process/search-trademark-database)
3. [Betalist](https://betalist.com/)
4. [Product hunt](https://www.uspto.gov/trademarks-application-process/search-trademark-database)

If a similar product exists, don’t worry. This can be a sign a market for your idea exists. Your future competitors have laid the groundwork, educated the market. It’s time for you to swoop in and steal the thunder.

If a similar product does not exist, it’s a possibility you’ve struck lucky - you masterful innovator 👍.

On the other hand, it’s a possibility someone before has ventured down this path and hit a dead-end 👎.

Nobody wants to experience that, so it’s important to dive deep into the market and source the wisdom of:

1. Your Web App’s target market - Share your web app idea on forums related to your target market. If you know anyone who works within your target market, explain your idea to them. The more you talk and receive validation from your target market, the better.
2. [Google Trends](https://trends.google.com/trends/) - A quick search of your web app idea will reveal relating trends.
3. SEO tool - I’d recommend MOZ/Ahrefs. Google's keyword planner will suffice. Write a list of keywords relating to your web app. If it’s an ‘OKR tool’, use the tools to search ‘OKR tool’, ‘OKR app’,  and ‘objectives and key results software’. If the SEO tool indicates there are lots of people searching for your keyword terms, this is a small indicator you have a target market.
4. Social Media - Jump over to Twitter/Facebook groups and present your idea to your target market.
5. Events - If there is a local event in your area attracting people from your target market, go to it. Share your idea and record the feedback.

After completing the above steps, you should have enough information to understand if there’s a market for your product.

If there is a market for your product, and there’s also established competition, it’s important to research them.

## Step 3 - Define your web apps functionality {#functionality}

{{< figure src="/how-to-make-a-web-app/functionality.png" alt="Define functionality" >}}

You’ve got your idea, you’ve validated the market, it’s now time to list everything you want your app to do.

A common mistake here is to get carried away.

Your web app is NOT a swiss army knife. It won’t have all the features and functionality of Salesforce and it doesn’t have to.

I repeat, don’t get carried away. The more functionality you add, the longer it will take to build your web app. Quite often, the longer a web app takes to build, the more frustration you’ll experience.

One of the most important aspects of making a web app is having fun, enjoying the ride, and celebrating the small wins.

Only  define functionality which solves your target markets problems.

I promise I’m not here to kill your dreams. Remember, you’re web app is a work in progress and the first goal is version 1. It will still have cool features and delight your users, but you must keep things simple.

Moving on.

For direction, I’ve included a list of basic functions required for a simple CRM app.

* Users can create an account
* Users can retrieve lost passwords
* Users can change their passwords
* Users can create new contacts
* Users can upload new contacts
* Users can assign a value to contacts
* Users can write notes under contacts
* Users can label a contact as a lead, customer, or associate
* Users can filter contacts by lead, customer, or associate
* Users can view the total value of leads, customers and associates

The above list will help you define your features. Once you’re done, roll up your sleeves.

It’s time to get creative!

**Moving from the Ideation stage, to design stage.**

## Step 4 - Sketch your web app {#sketch}

{{< figure src="/how-to-make-a-web-app/sketch.png" alt="Sketch web application" >}}

There are multiple stages of designing a web app.

The first stage is sketching.

My favourite and the quickest way  is to use a notebook (with no lines) and pen/pencil. Old school!

After step 1,2 and 3, you should have an idea of what your web app is, who your users are, and the features it will have.

Sketch out the wireframe of your web apps UI - it doesn’t have to be exact - this is just a sketch.

When sketching, consider the following:

* Navigation
* Branding
* Forms
* Buttons
* Any other interactive elements

Sketch different versions of your web app. Consider how your web app's functionality will affect the overall design.

Annotate your sketch and outline how your app should work.

Taking notes will help you clarify and understand why you’ve designed certain elements at a later stage.

Once again, don’t get carried here. Your sketch is for communicating and experimenting, not selling. Overcomplicating the design at this stage will only lead to frustration.

After sketching your app, it’s time to move on to step 5.

## Step 5 – Plan your web apps workflow {#workflow}

{{< figure src="/how-to-make-a-web-app/workflow.png" alt="Plan workflow" >}}

It’s time to put yourself in the shoes of your user. In step 5 we’re going to plan your web apps workflow.

Now is the time to go back to step 2 and look at your market research. Take your list of competitors and sign up to their free trials. Have a quick play around with their product.

Write notes on what you thought was good and what you thought was bad. Pay particular attention to the workflow.

After you’ve finished analysing your competitor’s web apps, it’s time to write down different workflows for your app. Consider the following points:

* How does a user signup
* Do they receive a verification email
* How does a user login
* How does a user change their password
* How does a user navigate through the app
* How does a user change their user settings
* How does a user pay for the app
* How does a user cancel their subscription

All of a sudden our one-page web app turns into a 10-page web app.

Write a list of all the different pages your web application will have.

Consider the different states of pages. For example, the homepage will have two states; logged in and logged out. Logged in users will see a different page than logged out users.

## Step 6 – Wireframing / Prototyping Your Web Application {#wireframe}

{{< figure src="/how-to-make-a-web-app/wireframe-ui.png" alt="Wireframe/prototype the web application" >}}

Ok, it’s time to turn those sketches and that new-found understanding of your web application into a wireframe/prototype.

### What is wireframing / prototyping

Wireframing is the process of designing a blueprint of your web application. Prototyping is taking wireframing a step further, adding an interactive display.

The decision is to wireframe or prototype is down to you. If you have the time, I’d recommend prototyping as it will make it easier to communicate your web app when seeking validation.

You can prototype/wireframe using the following tools:

* [Sketch](https://www.sketch.com/) (macOS)
* [InVision Studio](https://www.invisionapp.com/studio) (macOs)
* [Adobe XD](https://www.adobe.com/products/xd.html) (macOS, Windows)
* [Figma](https://www.figma.com/) (Web, macOS, Windows, Linux)
* [Balsamiq](https://balsamiq.com/) (macOS, Windows, Web)

I recommend you create a design system / style guide first. You can find inspiration at [UXPin](https://adele.uxpin.com/). Design systems improve design consistency. But it’s not required.

## Step 7 – Seek early validation {#validation}

{{< figure src="/how-to-make-a-web-app/validation.png" alt="Seek early validation" >}}

You’ve now got a beautiful wireframe/prototype which visually describes your web app.

Digital high five ✋.

It’s time to show your beautiful wireframe to the world. At this stage we want constructive feedback.

Simply asking your friends would they use your new web app is not enough.

You should start with a small number of representative users. Go to your target market’s forums, watering holes, their places of work and verify the problem with them, and present your solution.

Try to build a rapport with these representatives as they could become your customers.

I like to use this stage to test my sales pitch - the ultimate tokens of validation are pre-launch sales.

Takes notes and document all feedback. The learning from these meetings will help direct the development of your MEP (Minimal Excellent Product).

Ok, now you’ve got great feedback and product validation. It’s time to start building your web app.

### Before we start the development stage.

Before we make our web app, I would like to share the following tips:

1. Attempt to get a small section of your app fully working. What we would call a “Complete Vertical”.
   * Building the smallest possible section will allow you to piece all the bits together, and iron out those creases early.
   * You will get great satisfaction early by having something working - great motivation.
   * Create things that you know you will throw away later - if it gets you something working now.
2. At the start - expect things to change a lot as you learn and discover what you haven’t thought about.
   * Have faith that your app will stabilise.
   * Don’t be afraid to make big changes.
3. Spend time learning your tools.
   * You may feel like you are wasting your time, reading, or experimenting with “hello world”. Learning the correct way to do things will have a huge positive, cumulative effect on your productivity over time.
   * Where possible, “Go with the grain” of your tools. Realise that as soon as you step out of the normal flow / usage of your toolset, you are on your own and could be in a deep time sink. There are always exceptions to this of course!
4. Don’t avoid issues that need to be fixed.
   * Face your issues head on - they will never go away and will only grow in stature.
   * However, If things are still likely to change - its best to spend as little time as possible on things… It’s a tricky balance!

It’s time to consider your database.

Exciting times!

## Step 8 – Architect and build your database {#database}

{{< figure src="/how-to-make-a-web-app/database.png" alt="Architect the database" >}}

So, we know roughly our web application’s functionality, what it looks like, and the pages required. Now it’s time to determine what information we will store in our database.

### What is a database

A database is simply a collection of data! Data can be stored to disk, or in memory on a server, or both.  You could create a folder on your hard drive, store a few documents, and call it a database.

A Database Management System (DBMS) is a system that provides you with consistent APIs to (most commonly):

* Create databases, update and delete databases
* Read and write data to databases
* Secure access to a database by providing leveled access to different areas and functions

What data you need to store and what your users need to do, will determine the type of database required to run your web app.

### Database types

There are many types of database for many different purposes. A web app will most commonly use one of the following:

#### SQL

You should use a SQL database if your data is very relational. Your data is relational if you have multiple, well defined record types that have relationships between them. For example, a “Customer” may have many “Invoices” stored against their record. Typically, you would create a Customer table and an Invoice table - which could be linked together by “Foreign Key” columns. E.g. Customer.Id = Invoice.CustomerId.

SQL databases have an extremely powerful query language that allows you to present your data in all sorts of useful ways.

They have been around for decades, are very well understood, and usually a safe choice. MySQL, Postgresql, Microsoft SQLServer are some of the most common - along with many more modern offerings.

The downside of SQL databases is that you must declare all your tables and columns up front. There  can be a lot of overhead to manage. If you have never used one before - you’re in for a pretty steep learning curve. However, there are plenty of learning resources available, and it’s always a great skill to have.

#### Document Database

You should use a document database if your data is not very relational. Document databases store “documents”. Each record in your database is simply a big blob of structured data - often in JSON format.

If you need to store relationships between your records, you will have to write code to manage this yourself. However, many other aspects of using document databases are much simpler. Your database can be “schemaless” - meaning that you do not have to declare your records’ definitions up front.

Generally speaking, the bar to entry to a document database is much lower. They also tend to be much more scalable than SQL databases. They usually offer some querying capabilities, although sometimes not as powerful as SQL.

Examples of document databases are: MongoDb, CouchDb, Firebase (serverless), Dynamo Db (AWS). There are many.

### Decide how to segregate your data

Each of your clients has their own, private dataset. One of the worst things that can happen to your app is for one client’s data to be seen by another client.

Even if there is only a small amount of non-sensitive leaked data, and no damage is done, an event like this will massively erode trust in the security of your app.

You must architect a solid strategy for segregating your clients’ data to make sure that this never happens.

Broadly speaking, you have two options - Physical Separation and Logical Separation.

#### Physical separation

Every one of your clients has a separate database (although could share a database server with others). This makes it much more difficult to make a mistake that leads to data leakage.

##### Pros:

* Most secure
* More scalable

##### Cons:

* Managing, maintaining and upgrading is more complex
* Query all your clients’ data together is more difficult

For example, listing all Invoices in a database will only return Invoices for one of your clients. In order to get another Client’s invoices, you need to connect to another database.

Since each of your client’s data is in its own database, you can easily spread them all across many database servers, without the need for “sharding”. Your app will be much easier to scale this way.

The code you will need to write:

* When creating a new client, you need to create a new database and populate with any seed data.
* You need to keep a record somewhere of all your clients, and how to connect to each client’s database.
* If you need to upgrade your database (e.g. add a new table), you need to code to upgrade each separately.
* If you need to query all your client’s data into one, you need to pull the data out of each and aggregate it.

#### Logical separation

All of your clients are stored in one giant database.

Every time you need to get data for a single client, you must remember to include a filter for the client. E.g. 'select' from customers where customerClientId = 1234”

##### Pros:

* Easier to get started
* Easier to maintain and upgrade
* Can easily query all your clients’ data with one query

##### Cons:

* Easy to make a mistake that will result in a data breach
* More difficult to scale

You now only have one database to manage. Setting this up and connecting to your database is easy. Your speed to market increases.

When you need to upgrade your database, you can do so with a few clicks, or by typing a few commands. It’s very easy to add new features.

As you gain more users, your database will grow to millions of rows. Put some effort into how your database handles this extra volume and load. You will have to start tuning your queries.

When you’re under pressure, it is so easy to forget to include that “where clientId = 1234” filter.

Doing so could result in a business ending data breach.

### Ensure your database is secured

You should look into best practices for securing your particular database. Some databases come with a default administrator login, which people often forget to change. This could leave your data open to the world.

From the start, you should create a  login with “Just Enough” access. If your app only reads and writes data, then it should authenticate to your database using a login with only data reading and writing access.

## Step 9 - Build the frontend {#frontend}

{{< figure src="/how-to-make-a-web-app/frontend.png" alt="Build the frontend" >}}

Note: In reality, you will build your backend and frontend at the same time. But for this post, we’ll keep it simple.

### What do we mean by the frontend?

The Frontend is the visual element of your web application.  It defines what you see and interact with. The frontend is developed with HTML, CSS, and JavaScript.

If using server pages, getting started is super easy. Your backend framework is all set up and ready to start building. This is where the huge benefit lies with server pages.

With SPA, it's a little trickier.

First, you need to set up your development environment. The components of this will be:

1. A code editor, such as VS Code, Sublime Text
2. A compilation, and packaging framework:
   1. [Webpack](https://webpack.js.org)
   2. [Gulp](https://gulpjs.com/)
   3. [Grunt](https://gruntjs.com/)

      This is also used for serving and “Hot Loading” your application at development time, on a nodejs web server, running on localhost.
3. A frontend framework (strictly not necessary, but highly advised unless you are an experienced frontend developer):
   1. [React](https://reactjs.org/)
   2. [Ember](https://emberjs.com/)
   3. [Vue](https://vuejs.org/)
   4. [Svelte](https://svelte.dev/)

      The list is endless!
4. Configuring your packaging tool to talk to your backend - which is most likely running on a different port on localhost. Usually, this is done using Node’s HTTP proxy. Most packaging solutions have this option built-in, or available as plugins. This point commonly gets people stuck, and may need a diagram. Remember - if you write your backend API in C Sharp (for example) then at dev time, you will be running it on a local web server, through your code editor. I.e. your frontend and backend are running on 2 different web servers, in dev. However, in production, your frontend should (probably) be running on the SAME web server as your backend - mainly because you want them to run under the same domain.

   This means a few things
   1. At dev time, your frontend should make API requests to its own (Nodejs server - e.g. Webpack dev server). This Nodejs server should then proxy all “/api” request to your backend server.
   2. When building for production, you need to get your compiled frontend files into your backend server - so they can be served as static files. You can copy and paste the files in when you deploy, but you will want to set up some sort of script to do this.

There is always a significant time required to set up your dev environment for a SPA. There are plenty of boilerplate templates out there for your frameworks of choice. However, I have never written an app that has not eventually needed some custom code on top of the boilerplate.

Still, I always choose a SPA.

* The end product for a web app is a much more usable application.
* When you are up and running with your dev environment, I find SPAs much more productive to work with - which is more likely to do with the capabilities of modern javascript frameworks than anything else.
* Writing a SPA is really the only way to make a Progressive Web Application.

You should now have a better idea of how to setup your frontend and define the look and feel of your web app. In most cases I build the fontend and backend together.

Moving on to the backend.

## Step 10 - Build your backend {#backend}

{{< figure src="/how-to-make-a-web-app/backend.png" alt="Build the backend" >}}

### What do we mean by the backend?

The backend is typically what manages your data. This refers to databases, servers, and everything the user can’t see within a web application.

Building your backend is one of the toughest parts of web app development. If you feel overwhelmed, a tool like [Budibase](https://www.budibase.com) can take away many of the complexities - including the follow tasks.

If you feel confident, continue on.

When building your web app, you need to choose between:

1. Server Pages (Multiple Page Application)
2. Single Page Application

“But isn’t this the frontend?” - I hear you say. Yes! But your choice will affect how you develop your backend.

The primary jobs of the backend will be to:

* Provide HTTP endpoints for your frontend, which allow it to operate on your data. E.g. Create, Read, Update and Delete (“CRUD”) records.
* Authenticate users (verify they are who they say they are: aka log them in).
* Authorization. When a logged in user makes a request, the backend will determine whether they are allowed (authorized) to perform the requested action.
* Serve the frontend

If you have chosen Server Pages, your backend will also be generating your frontend and serving it to your user.

With a single page app, the backend will simply serve your static frontend files (i.e. your “Single Page” and it’s related assets).

When choosing your backend:

* Go with what’s familiar.
* Try [Budibase](https://www.budibase.com)
* Server Pages / SPA should inform your decision of framework choices within your chosen language. For example, a SPA will only require an API only framework. Server pages need their own framework.
  * [Django](https://www.djangoproject.com/)
  * [Express](https://expressjs.com/)
  * [Flask](http://flask.pocoo.org/)

Login/User & Session Management

* How will users authenticate?
  * Username and password?
  * Open ID (i.e. sign in as Google, FB, etc)
* Be sure to read up on security best practices. I highly recommend: [OWASP](https://github.com/OWASP/CheatSheetSeries)
* What user levels will you create in the system?

Environments. You will usually need to create multiple environments. For example:

* Testing - for all the latest development features.
* Beta - to give early releases to clients.
* Production - Your live system.

## Step 11 - Host your web application {#hosting}

{{< figure src="/how-to-make-a-web-app/hosting.png" alt="Host your web application" >}}

### What is hosting

Hosting involves running your web app on a particular server.

When using Budibase, this step can be automated with [Budibase hosting](https://www.budibase.com/host-a-web-app/). With Budibase, you are still required to buy a domain.

If you are not using Budibase to host your web application, follow these quick steps: \\

1. Buy a domain - [Namecheap](https://www.namecheap.com/)
2. Buy/Setup an SSL certificate - [Let’s Encrypt](https://letsencrypt.org/)
3. Choose a cloud provider:
   1. [Amazon](https://aws.amazon.com/)
   2. [MS Azure](https://azure.microsoft.com/en-gb/)
   3. [Google Cloud Platform](https://cloud.google.com/)
   4. Lower cost: Digital Ocean / Linode - if you are happy managing your own VMs
   5. Zeit Now, Heroku, Firebase are interesting alternatives that aim to be faster and easier to get things done - you should read about what they offer.

Choosing one of these hosting options will almost certainly provide you with everything you need. They have ample documentation and community support, and are generally reliable options.

## Step 12 - Deploy your web app {#deployment}

{{< figure src="/how-to-make-a-web-app/deployment.png" alt="Deploy your web application" >}}

You’ve sourced your idea, validated it, designed and developed your web app, and chosen your hosting provider.

You’re now at the last step. Well done!

The deployment step includes is how your web application gets from your source control on your computer to your cloud hosting from step 11.

How does your application get from Source Control / Your computer to your cloud hosting provider?

The following development tools provide continuous integration and will help you with deploying your web app to your cloud hosting:

1. [GitLab](https://about.gitlab.com/)
2. [Bitbucket](https://bitbucket.org/)
3. [Jenkins](https://jenkins.io/)

There are many of course.

To start with, you can just deploy directly from your machine of course.

And that’s it. You have made a web application. Well done. You should take some time to celebrate this achievement. You're the proud owner of a new web app.

{{< figure src="/how-to-make-a-web-app/well-done.png" alt="Well done on building a web application" >}}

***

## How to build a web app the fast, easy way

As you might have gathered already, the slow-code approach to building web apps takes a fair amount of time and effort, as well as some pretty advanced skills. No wonder more and more developers are seeking out an easier way.

And they’re finding that Budibase is their best bet.

### Introducing Budibase

Budibase is leading the charge in the low-code revolution. [Our open-source low-code platform](https://budibase.com/blog/open-source-low-code-platforms/) is the perfect solution for building a web app, whether you’re a complete beginner or a seasoned pro.

Thousands of hobbyists, businesses, and major enterprises around the world choose Budibase for fast builds, incredible developer experiences, and total control over their projects.

## How to build a web app in Budibase - 4 steps

The beauty of Budibase is that we offer the perfect combination of simplicity, efficiency, and flexibility. That is, our platform takes the legwork out of common tasks, while still offering you enough customization to build the perfect tools for your specific requirements.

To make life easier, we’ve consolidated the whole process of creating a web app into four steps, each with its own dedicated UI in our builder.

On top of this, you can quickly flick between different layers in our web app builder. For example, by the time you start building interfaces, you might decide you want to make a change to your data layer.

With Budibase, it’s easy to make changes to any part of your app, on the fly.

Let’s take a look.

### 1. Connect your data

Just like before, we need to put an effective data model in place.

Budibase offers two different strands here:

1. BudibaseDB, our internal database.
2. Dedicated connector tools for external data sources.

Let’s take a look at the first option first.

Budibase DB is by far the easiest, most intuitive way to [create a data model](https://budibase.com/blog/data/how-to-create-a-data-model/) for a web app, regardless of your skill level.

You’ve got two options here. First of all, you can add rows and columns to your data tables, with simple drop-down selectors. Alternatively, you can upload a CSV file, and turn it into a database table, in just a few clicks.

BudibaseDB supports a full complement of data types. Obviously, we’ve got the basics, like strings, numbers, dates, and boolean expressions. We also offer more advanced data types, including formula variables, simple relationships, file attachments, and JSON objects.

Alternatively, Budibase sits perfectly alongside your existing external data sources.

Use dedicated connectors for a market-leading variety of [data sources](https://budibase.com/blog/data/data-sources/), including Google Sheets, SQL, Postgres, REST, Airtable, Oracle, and more.

### 2. Build your interfaces

Next, we can start to create web app screens. The brutal truth about building web apps is that design isn’t rocket science. We’re really aiming for efficiency over all else. That is, we want to give our users the fastest route from point A to point B that we can.

More specifically, we want users to be able to carry out defined actions on our data, with minimal effort.

Budibase comes fully loaded with features to creating web app designs an absolute breeze.

We offer a huge library of built-in components, with each one offering an incredible degree of configurability. Budibase is perfect for building dashboards, forms, admin panels, and more, without writing a single line of code.

Of course, as ever, you still have the option of writing your own CSS, JavaScript, and handlebars expressions in key locations throughout our builder.

You can even autogenerate CRUD apps, at the click of a button.

### 3. Add automations

Next, we can start to build out automated processes. Again, the idea behind Budibase is that you can achieve incredible results without writing code, but you still have the option to hard-code if you want to.

We offer a simple, step-based builder, for nesting built-in automation actions. All you need to do is decide how data is passed between each one.

Budibase also offers a huge amount of flexibility for how you trigger your automations, whether it be user actions, system events, or external factors.

You can also use external integrations for automation triggers and actions alike. Budibase makes it incredibly easy to build a web app that sits neatly alongside your existing software stack.

Check out our guide to [web application development ](https://budibase.com/blog/web-application-development/)to find out more.

### 4. Deploy your app

Finally, it’s time to deploy your tools. One option here is to use Budibase Cloud, our free, one-click hosting platform. That way, you can let us take care of everything.

Or, you might opt to self-host.

That is, deploying to your own infrastructure using Kubernetes, Docker, Docker Compose, and Digital Ocean.

Take a look at our deployment docs for more information.

## Start creating web apps today

Budibase is the fast, easy way to build incredible web apps. Whether you’re a complete beginner, or a professional developer, our low-code platform offers unrivaled speed, flexibility, and developer experiences.

But don’t just take our word for it.

We’ve also created 50+ free [app templates](https://budibase.com/templates) to show off just what Budibase can do. Use any one of them as a jumping-off point for your custom tools, or launch one today as a fully functional solution.