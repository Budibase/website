+++
date = "2021-05-27"
title = "May 2021 release - Run Budibase in your browser"
categories = ["Pruduct"] 
description = "The May release transforms the development experience for every single Budibase user. It is also the beginning of a new and exciting journey that involves Budibase moving to the browser."
author = "Joe Johnston"
images = ["/img/img/portal.webp"]
draft = "false"

+++

 {{< youtube zI8TgTNNg04 >}}

The May release transforms the development experience for every single Budibase user. It is also the beginning of a new and exciting journey that involves Budibase moving to the browser.

**TL; DR**

- Run Budibase via the browser in your self-hosted cloud
- We will no longer actively develop on the Budibase desktop builder
- A new Admin UI
- Improved user management
- Built-in email support
- Google Auth - users can sign in with Google
- New, fresh, accessible UI
- New data provider component (with sorting/filtering/UX/perf enhancements)
- New table component (remove and add columns)
- New formula data type 
- Import Options as part of the CSV import
- Add code to automations
- CRON automation trigger

## Run Budibase in the cloud

From this release forward, you will run Budibase via the browser in your self-hosted cloud. We will cease development on our old friend, the Budibase desktop builder (Electron). Electron served us well, but the cloud is where our future lies for a number of reasons:

- Flexibility - users can now access their Budibase account on multiple devices.
- Collaboration - this is our first major step towards multi-user collaboration.
- Faster releases - developing on Electron brought with it additional work and effort that slowed us down. When developing in the cloud, we can ship new features quicker.

### Getting started with the new Budibase

To run Budibase in the cloud, you will need Docker or Digital Ocean. You can access the docs [here](http://docs.budibase.com/).

*We hope to add more cloud services over the upcoming months, and welcome help/contributions from the community.

### What is going to happen to old Budibase and my apps

The old Budibase will remain as it is today. We will no longer develop and enhance it. Old apps developed in the old Budibase (Electron) can be downloaded and uploaded to your new Budibase instance in your self-hosted cloud environment. If you have used the Repeater component in your old apps, you may need to replace these with the new Data Provider component.

\---

## New Admin UI

{{< figure src="/img/ui/admin-wide.webp" alt="New admin UI" >}}

Previous to this release, there was very little administrative functionality. This was not scalable, so we’ve created a new UI dedicated to administrative tasks such as end-user management, developer management, email/SMTP, and authentication. This UI is only available to the admin of your Budibase account.
More importantly, this admin interface defines our direction - a platform where companies build multiple apps that empower their workforce, automate processes, and accelerate digital transformation. 

\---

## Improved user management

The process of adding, updated and removing users is getting centralized. So, all you need to do is add a user to the platform once, then assign them to different apps. This is incredibly helpful for you and end-user - end-users only have to sign in once, to access multiple apps!
With this release, when adding a user, you have two options. If you have SMTP set-up, you can add them via email (more on that below), or add them manually. 

\---

## Built-in email and templates

Onboarding new users is always a tricky task and a pain to set up. Thankfully, with this version of Budibase, all you have to do is add your SMTP settings and Budibase will take care of the onboarding process for you. So, once you add a user, Budibase will know to send them a welcome email and ask them to set up a password. And, for users who forget their password, Budibase has an email workflow for that too.

The email templates, such as, forgot password, are editable templates that you can access in the new admin panel. 


\---

## Google Auth

You can now add Google Auth to your apps in minutes. This will allow your users to sign in to your apps with their Google credentials.
*We plan on adding additional auth options.* [*Please let us know if you have a particular requirement.*](https://github.com/Budibase/budibase/discussions/categories/ideas)

\----

## New, fresh, and accessible builder UI

With the 0.8 release, we added new form components to make it easier for users to build better, accessible forms. To do this, we used Adobe’s Spectrum CSS components. The project was a huge success, and we’ve decided to use Spectrum for our own components which are used to create the actual Budibase builder UI. Out of the box, users will have 4 themes to choose from; lightest, light, dark, darkest. All components are accessibility tested, and support RTL alignment (not launched yet). 
We believe the builder is looking better than ever and welcome all feedback.

\---

## New data provider component 

The data provider component makes it easier and faster to build data-rich UIs. It is similar to the repeater component but with some additional special features.

The new data provider component consolidates the fetching of data to one component. So, if you are creating a dashboard with 2 charts and a table (pulling data from the same source), you would only need to use one data provider component. Previously you would have to use 4 repeaters, which is a worse user experience and less performant.

With the new data provider component, you can also filter and sort the data you pull in from the data section. For example, if you have a list of holiday homes stored within your database, you can pull that data into your design section, and filter/sort that data by location, all using the data provider component. Additionally, the data provider component allows you to customize the amount of data rows you want to display and paginate your data with just one click. It’s immensely powerful.

\---

## New table component (remove and add columns)

The previous table component was powerful but lacked flexibility and was not performant. The new table is lightweight, flexible to use, and themeable. Most importantly, once you pull in data from your data sources, you can now add and remove table columns - yay! 
Additionally, you can now add additional components to your tables.

\---

## Formulas

You can now add a formula data type to Budibase’s internal database. This will allow you to make calculations based on data within your internal tables. You can also use the formula data type to ‘pluck’ data from another internal table and use that data in a calculation in your present table.

\---

## CSV import update - upload options!

Users can now upload a CSV to Budibase, and select whether that CSVs columns are the following data types: Text, Number, Date, and now, Options. For many users who are upgrading their Excel / Google sheets to Budibase, this is a huge time saver and we hope you enjoy it.

\---

## Add code to automations

To increase the utility of automations, we have added a new scripting block, allowing you to add JavaScript to your automations. This exponentially increases the extensibility of automations.
\---

## CRON automation trigger

You can now schedule your automations. For example - Run automation every 5 minutes. This is particularly good for sending reports.

\---

## Coming up in the June release

- Improved responsive design experience
- Improved components
- Conditional UI