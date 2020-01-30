+++
date = "2020-01-24"
title = "A beginners guide to web application development (2020)"
categories = ["Build"] 
tags = ["web application, deployment, database, architecture, processes, frameworks, backend, frontend"]
description = "Within Budibase's web application development guide you will learn processes, definitions, frameworks, platforms, and much more."
author = "Joe Johnston"
images = ["/web-application-development/guide-to-web-application-development.jpg"]
draft ="false"

+++



{{< figure src="/web-application-development/guide-to-web-application-development.jpg" alt="Guide to web application development" >}}

It was the year 2010, I had an idea for a web application which would allow my family and I to share images, organise shopping, populate a shared calendar, and store bills. My family was terribly disorganised. We needed this!

This idea was going to make me :moneybag::moneybag::moneybag:. 

There was a small complication with my vision - I didn't know how to build a web application. But thankfully, I could build a static site with HTML and CSS so it couldn't be that hard, right?

I was wrong, I spent 3 days attempting to learn how a database worked and how to connect the frontend to the backend. Those 3 days were tough and the end of my dream. I was defeated.

Thankfully, this did not deter me. Over the following 9 years I developed over 20 web applications. This guide is my gift to my 2010 self, and to other beginners.


## What is this guide and how will it help me? 

The web application development landscape is capricious in nature and often seen as a dark art to many 'non-coders'. The lexicon surrounding the 'dark art' makes it less approachable, and in many ways deterring to hopefuls. I promise you, this guide is not like that.

Within this guide, I hope to shine a light on web application development and provide the reader, you, with a level of understanding which should equip you with the skills and dialogue to stand comfortably amongst developers, and develop your own web application. 

This guide is designed for developers (beginner), entrepreneurs, technical product managers, students, engineers, technical marketers.

You'll learn what web application development is, how it works, and what you must do to build a web app.

In the upcoming sections, I am going to break the topic into its most basic and interesting parts and show you how to combine its elements to build a successful web app.


The sections within this guide, include:

[1. What is web application development](#what)

[2. Examples of web application development](#examples)

[3. Web application development process](#process)

[4. Web application development frameworks](#frameworks)

[5. Web application development platforms](#platforms)

[6. Courses for additional learning](#courses)



## What is web application development {#what}

{{< figure src="/web-app-ideas/dashboard-web-app.jpg" alt="The CEO Dashboard Web App" >}}

Web application development is the process involved with building a web application. It is more focused on interacting with the browser than standard engineering processes. Most cases of web application development will involve defining the problem, mocking-up the solution, engaging with users, adopting a framework/choosing a tool, and finally, building and testing the web application - in most cases, interatively with users.

### What is a web application

For those of you who do not know what a web application is, I have included a definition below:

> A web application, often referred to as a web app, is an interactive computer program built with web technologies (HTML, CSS, JS), which stores (Database, Files) and manipulates data (CRUD), and is used by a team or single user to perform tasks over the internet. CRUD is a popular acronym and is at the heart of web app development. It stands for Create, Read, Update, and Delete. Web apps are accessed via a web browser such as Google Chrome, and often involve a login/signup mechanism.

### Web applications vs website

The key difference is how we interact with each. Web applications are defined by their **input** - we create, read, update and delete data within a web application. Websites are defined by their **output** - we read the news, marketing information, FAQs on websites. 

### Progressive web applications 

Progressive web applications are a newer type of web application which behaves like and often outperforms native applications. They are web applications which follow a slightly different methodology, and involve an additional set of technologies such as service workers, manifests, push notifications. Progressive web applications can be downloaded to your device, and stored on your homescreen which makes them accessible, and 'native-like', and unlike web applications they can be accessed and used offline. 



## 6 examples of web applications {#examples}

### 1. Mailchimp

   Mailchimp is a marketing automation platform specialising in email marketing. They have been around since 2001 and their plaltform is a highly complex web application with a beautiful UI making the platform feel simple to use.

   {{< figure src="/web-app-design/mailchimp.PNG" alt="Mailchimp UI" >}}

### 2. Google Docs

   Google Docs, believe it or not, is a web application. It is also available as a mobile application. Created in 2012, Google Docs was born from the acquisition of a number of other web applications, and is great for **creating, reading, updated,** and **deleting** documents 😉

   {{< figure src="/web-application-development/google-docs.png" alt="Google Docs UI" >}}

### 3. Notion

   Notion is an all-in-one, note-taking and collaboration web application with markdown support. The product was released in 2016 and is fast becoming a staple in many small businesses. 

   {{< figure src="/web-app-design/notion.png" alt="Notion UI" >}}


### 4. Airtable

   Many refer to Airtable as the 'Online Excel'. It is similar to Excel in UI but adds additional layers of functionality making it a powerful database solution for businesses. Airtable is a complex web application with thousands of users. 

   {{< figure src="/web-application-development/airtable.png" alt="Airtable" >}}


### 5. Xero

   Xero is an accountancy web application. With a focus on data, Xero highlights how a web application can deal with difficult computations and present it to users in a simple interface.

   {{< figure src="/web-application-development/xero.png" alt="Xero">}}

### 6. Salesforce

   Salesforce is the number 1 SaaS product in the world from a revenue perspective. As a CRM, it is complex in nature making it a great example of a web application with multiple facets including dashboards, reports, tables, etc.

   {{< figure src="/web-application-development/salesforce.png" alt="Salesforce" >}}



## Web application development process {#process}

{{< figure src="/web-app-ideas/orientation.jpg" alt="Employee Orientation Software" >}}

There are many different processes involved with building a web application. Below, I have summaried the different steps involved with the web application development process. 

If you are keen to learn how to build a web application in more detail, I would advise you to check out this incredibly informative post - [How to build a web app](https://www.budibase.com/blog/how-to-make-a-web-app/). 

Here we go, the 8 steps for creating a web application.

### 1. Define the problem you are solving

   Defining the problem is critical. It is your North Star and provides direction. Your solution is born from your problem.

### 2. Plan the workflow of your web application

   Once you know your solution, map out the workflow of how it will work. What needs to happen within your web application for it to solve the problem? 

### 3. Wireframe/prototype your web application

   Transform your workflow into a wireframe. Your wireframe is simply a tool for communicating your solution to your target user.

### 4. Receive Validation

   Present your wireframe to potential users of your new web application. Record feedback and iterate on the design until you, and your potential users are happy.

### 5. Choose your firepower

   You will use different tools/platforms/frameworks to build your web application. It's important to choose a tool that fits the job (in this case your web application) and not to go with what is popular. Example - for a simple to-do app, Django combined with React might be overkill.

### 6. Build your web application

   1. **Database**

      Determine what data you need to store in your database and also your data types. Then build your database.
   
   2. **Frontend**
      
      You will likely build your frontend and backend at the same time. Your frontend will loosely mirror your wireframe/prototype you validated earlier. The frontend consists of HTML, CSS, and JS - like one of our frontend frameworks below. 
      
   3. **Backend**
      
      Building your backend is one of the toughest parts of the web application development process. The primary functions of the backend is to provide HTTP endpoints for your frontend (remember CRUD!), authenticate users, athorization, and to serve the frontend.

### 7. Test your web application

   Testing your web application is an ongoing process and usually happens during and after the building phase. You can automate testing or do it manually. During the testing phase you should try to cover functionality, usability, compatibility, security and performance testing.

### 8. Host and deploy your web application

   Hosting involves running your web application on a server. You will need to buy a domain and choose a cloud hosting provider. To get your web application from your local machine to your cloud provider and deploy it, you will need to use a CI tool.

And in a nut shell, that's the web application development process. Once again, if you require more information on how to build a web application, visit [How to build a web app](https://www.budibase.com/blog/how-to-make-a-web-app/)



## Web application development frameworks {#frameworks}

{{< figure src="/web-application-development/framework.jpg" alt="React framework" >}}

The purpose of frameworks is to make web application development easier and faster than coding a web app from scratch.

Web application frameworks are opinionated and each has its own philosophy and benefits. They come in two types; backend and frontend. Truth be told, the frontend frameworks below are not really frameworks at all; they only represent the view layer of a web application. But for the sake of simplicitiy we'll refer to them as frameworks.


### Backend frameworks

#### [1. Rails *written in Ruby*](https://guides.rubyonrails.org/getting_started.html)

   Rails describes itself as 'a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern'. Rails is a great framework for metaprogramming (where a computer program can treat other programs as their data) and database orientated web programming. In my opinion, Rails is the perfect framework for small projects.

#### [2. Django *written in Python*](https://www.djangoproject.com/)

   Django describes itself as a 'high-level Python Web framework that encourages rapid development and clean, pragmatic design'. In my opinion, I would advise anyone who is working scientific programming or data minipulation to choose Django.


#### [3. Laravel *written in PHP*](https://laravel.com/)

   Laravel describe itself as 'a web application framework with expressive, elegant syntax. Laravel is written in PHP - a programming language. Laravel follows the model-view-controller architectural pattern'. Laravel has a lot of tools making it accessible and simple to use. It is well suit for multiple types of applications.

   

### Frontend frameworks/libraries

The following frontend frameworks are all written in JavaScript. 

#### 1. [React](https://reactjs.org/)

   React simply describes itself as 'a javascript library for building user interface'. This is a very simple and humble description of React. It is a powerful frontend library created and maintained by Facebook. Of all the frontend frameworks listed, React is the most popular and powerful. It is well suited for large-scale web projects. Choosing it for small to medium sized projects is a little overkill - once again, in my opinion.

   
#### 2. [Vue](https://vuejs.org/)

   Vue describes itself as 'the progressive JavaScript framework'. Vue is smaller in size and easier to learn than React, and is good for most sizes of projects. It's also easy to implement into a project which is helpful.


#### 3. [Svelte](https://svelte.dev/)

   Svelte describes itself as 'cybernativally enhanced web apps'. Svelte is the new kid on the block and is a compiler rather than a framework. This means no virtual DOM, no frameworks on top of frameworks, and **no framework to load at runtime**, resulting in incredibly performant web applications. Svelte's syntax makes the framework the easiet to learn from the frontend frameworks mentioned, and perfect for small to medium sized web applications. It is unproven with large web applications. The community and ecosystem is smaller than React and Vue, but it's growing. Budibase uses Svelte, and we truly love it.

   



## Web application development platforms {#platforms}

{{< figure src="/web-application-development/budibase.jpg" alt="Budibase platform" >}}

Web application development platforms are a super-fast and easier way to build web applications. They remove many of the complexities experienced with coding, and replaces them with a simple to use user interface. This is a pretty new category and the tools can also be described as low-code platforms.

#### [Budibase](https://www.budibase.com)  

   Budibase is a low-code platform for building web applications super-quickly. With Budibase, coding is optional. Users can build a web application in days, rather than months. Budibase is low-code, so we do advise users to know/learn some code to get the most out of the platform. Budibase is open source which provides long term viability, assurances around data, and flexibility to change the code base to suit your project. It also won't cost you a dime to develop your web application. Budibase takes care of the backend, frontend, and hosting processes involved with building a web application. Request early access by submitting your email address at the bottom of the page.

   [**Learn more about Budibase**](https://www.budibase.com)



## Web application development courses {#courses}

{{< figure src="/web-application-development/udemy.jpg" alt="Udemy courses" >}}

If you would like to learn how to build a web application, courses are a great option. Everyone learns differently. I learn best by doing; simply jumping in at the deepend and learn as I progress. I have listed the courses I feel will provide you with further context and learning when it comes to web application development. The courses I have listed below are for beginners.

1. [The web development bootcamp - Udemy](https://www.udemy.com/course/the-web-developer-bootcamp/?LSNPUBID=QqcN8lE0l0I&ranEAID=QqcN8lE0l0I&ranMID=39197&ranSiteID=QqcN8lE0l0I-9_jY69Jyw0MpAjhwSEUahg)
   
   Colt is a wonderful instructor and has a lot of experience, and helped thousands, if not millions of people. This course is rated a 4.6 from 151,568 ratings. Over 500,000 students have enrolled in the course. It only costs £29.99 too!

2. [Become a web developer - Codecademy](https://www.codecademy.com/learn/paths/web-development)

   Learn frontend and backend development, and how to build a complete web application. Within this course you will master HTML, React, NodeJS. Codecademy charge a subscription to users. They have a free tier and offer a 7 day free trial - enough to complete the course if you cram it.



## Finishing notes

Ultimately, when building a web application you have choices to make. If you follow the process above, once you get to the development stage you will have to decide whether to code your web application from scratch, use a framework, or use a web development platlform. Each has their own benefits. Coding from scratch is more flexible than using a web development platform, but slower and harder. A web development platform is easier and faster to use than a framework, but less scalable. Think carefully, and choose what's right for the job at hand.

If you are considering using a web development platform, I, biasedly, would welcome you to try Budibase  when it is released within the next couple of months. Request access at the bottom of the page.

Whatever decisions you make, Budibase wishes you well 🙏. The important thing is, you try 👊. Building a web application, and in some cases a business, is hard work and we are routing for you on the sidelines 👏. 

If you are stuck for ideas, check out the following post: 

[8 Web App Ideas You'll Want To Steal](https://budibase.com/blog/web-app-ideas/). 

And If you need any support, reach out to me at: 

joe at budibase dot com 

✌️







