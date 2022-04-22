+++
author = "Joe Johnston"
date = 2022-04-20T23:00:00Z
description = "Public forms are popular mechanisms to collect data on the internet, and building them  is pretty straightforward process if you have the right tools."
draft = true
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1642502300/cms/Maintenance_Request_Form_Template_Thumbnail_New_lk5y2w.png", "https://res.cloudinary.com/daog6scxm/image/upload/v1642525391/cms/Maintenance_Request_Form_Thumbnail_New_hrdudd.png", "https://res.cloudinary.com/daog6scxm/image/upload/v1646391876/cms/Hospital_Discharge_Form_1_zrjihp.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1647258452/cms/20200113_Propel_Team_Shots_123_omblqt.jpg"
title = "Public forms - how to build them in minutes"

+++
# What is a public form

A public form is a digital form that is accessible to anyone on the internet.

## Public form examples

There are many examples where a user may want to create a public form. I've listed a few of these scenarios below:

1\. A public survey

2\. Login form

3\. Sign up form

4\. Contact form

5\. Application form

6\. Information request form

7\. A COVID test response form

## Public vs. Private form

The only difference between a public and private form is the access level. Public forms are accessible to anyone across the internet. Private forms are accessible to predefined users behind a log-in.

\---

# Form types

There are many styles of forms, but broadly speaking, they can be pigeonholed into the following two categories:

## Single-step forms

If you think of a form, this is probably what you picture. A simple, vertical flowing form that spans one screen, usually with a submit button. These types of forms are perfect, when your form consists of a few simple inputs - as a rule of thumb, if you have more than 6 inputs, you should consider a multi-step form.

### Examples of single-step forms

\- [Contact form](https://budibase.com/contact/)

\- [Job application form](https://bb.budibase.app/app_bb_afdf15d335df499da0932ed736edf7e3#/application/new/row/ro_ta_d0eaf94963834567ba4fc083d7072118_09f124bc805b4a2580898805aa42ba9a)

\- [MOT booking form](https://dva-bookings.nidirect.gov.uk/)

### How to build a single-step public form

Both Budibase and Google Forms are great options for building a public form (single-step). Google Forms is free, proprietary software. The data submitted within your form is hosted with Google. On the other hand, Budibase is free and open-source; therefore, it's possible to self-host Budibase and keeps the data in the safety of your infrastructure. For this guide, we will use Budibase.

#### Step 1. Sign up to Budibase

If you've not signed up to Budibase, you can [register here.](https://account.budibase.app/register "budibase registration") Simply follow complete process - it only takes a few seconds - and you'll be ready to take the next step.

#### Step 2. Create a new app

Click the 'Create new app' button, then click the 'Start from scratch' button. Name your app (only use letters, no spaces or special characters). Budibase will generate a URL for you. If you are happy with the URL, click 'Create app'.

#### Step 3. Set up your database

For demonstration purposes, we will use the Budibase DB as our data source. This is the easiest fastest way to build a public form with Budibase.   
  
_You can also build forms using MySQL, Postgres, Airtable, MongoDB, Rest, and more. We'll cover each of these data sources in a different tutorial._

Click Budibase DB, then click 'Continue'. Name your table: 'Public Form'. And finally, click the 'Create' button.

#### Step 4. Create your data structure

Now that we've set up our database, we need to build it's structure by adding fields/columns.

* Click the 'Create column' button, and name it 'Name'. Then click 'Save column'.
* Click the 'Create column' button, and name it 'Email'. Then click 'Save column'.
* Click the 'Create column' button, and name it 'Company'. Then click 'Save column'.
* Click the 'Create column' button, and name it 'Company size'. Click the Type dropdown and select 'Options'. In the options text box (bottom) add the following (one per line):
  * 1 - 10
  * 11 - 100
  * 101 - 1000
  * 1001+.  
    Then click 'Save column'.

## Multi-step forms

Multi-step forms are forms that span across multiple screens. They are also known as stepper forms and generally consist of 1 or 2 questions per screen. Multi-step forms are great when you've got a lot of inputs within your form or when you need to add media/explanations to questions.

### Examples of multi-step forms

### How to build a multi-step public form

\---