+++
author = "Joe Johnston"
date = 2022-04-20T23:00:00Z
description = "Public forms are popular mechanisms to collect data on the internet, and building them  is pretty straightforward process if you have the right tools."
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1651240249/cms/Start_building_with_Budibase_s_API_12_xepcey.png"
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1651240249/cms/Start_building_with_Budibase_s_API_12_xepcey.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1647258452/cms/20200113_Propel_Team_Shots_123_omblqt.png"
title = "Public forms - how to build a public form in minutes"

+++
## What is a public form

A public form is a digital form that is accessible to anyone on the internet. The difference between a public and private form is the access level. Private forms are only accessible to predefined users behind a secure log-in.

## Public form examples

There are many examples where a user may want to create a public form. I've listed a few of these scenarios below:

1. A public survey.

2. Login form.

3. Sign up form.

4. Contact form.

5. Application form.

6. Information request form.

7. A COVID test response form.

8. A registration form.

9. Online payments.

10. Order forms.

11. Social media marketing.

The internet is increasingly made up of forms. It's how we retrieve and update data, which is why there are different types of forms.

### Public forms software

Public forms allow organizations to collect data from customers, prospects, partners, and stakeholders. But creating the actual public form requires software or an app. This might be a dedicated online form creator, form maker, Google Workspace, or any other platform that allows you to create a form.

Given that this is a recurring need for businesses there are many options for public forms software. There are a few things to keep in mind when you are picking the right tool for your forms though.

Firstly, there’s the pricing point. There are free forms that are quite limited, Then there are very expensive solutions, along with a wide range of options in-between. So figuring out how much you want to spend on it is crucial.

Then, you need to consider your requirements. Some public forms are self-hosted, so you control the source code. Others aren’t, so you need to redirect users to a third-party website.

Also, there are laws regarding what kind of authorization you need to process this data, in particular, if it is stored with an external app. There's also what kind of data you can integrate your form with. For instance, Google Sheets, a database, or some other data source.

The most powerful forms can even save time by initiating automation actions based on form clicks.

And finally, there is the usability aspect of building a public form. You might find a free option, but if it’s too hard for users to interact with it, you might not be able to get the data you want.

In this article, we teach you how to build your public forms using Budibase, so that you can build forms for free with simple dra-ang-drop actions. You can use the cloud version, or host it yourself if you want. In addition, you can customize the forms in any way you want to, including complex components beyond just public forms.

## Form types

Broadly speaking forms can be pigeonholed into the following two categories; single-step and multi-step.

### Single-step forms

If you think of a form, this is probably what you picture. A simple, vertical flowing form that spans one screen, usually with a submit button. These types of forms are perfect when your form consists of a few simple inputs - as a rule of thumb, if you have more than 6 inputs, you should consider a multi-step form.

#### Examples of single-step forms

* [Contact form](https://budibase.com/contact/)
* [MOT booking form](https://dva-bookings.nidirect.gov.uk/)

### Multi-step forms

Multi-step forms are forms that span across multiple screens. They are also known as stepper forms and generally consist of 1 or 2 questions per screen. Multi-step forms are great when you've got a lot of inputs within your form or when you need to add media/explanations to questions.

#### Examples of multi-step forms

* [UK Gov passport application](https://www.gov.uk/apply-renew-passport)
* [Which office character are you](https://brainfall.com/quizzes/which-office-character-are-you/)

***

## Building a public form

### How to build a single-step public form

Both Budibase and Google Forms are great options for building a public form (single-step). Google Forms is free, proprietary software. The data submitted within your form is hosted with Google. On the other hand, Budibase is free, open-source, and perfect for [building forms](https://budibase.com/forms/); therefore, it's possible to quickly build forms and store your data in the safety of your infrastructure. For this guide, we will use Budibase.

#### Step 1. Sign up for Budibase

If you've not signed up for Budibase, you can [register here](https://account.budibase.app/register "budibase registration"). Simply complete the sign-up process - it only takes a few seconds - and you'll be ready to take the next step.

#### Step 2. Create a new app

Click the 'Create new app' button, then click the 'Start from scratch' button. Name your app (only use letters, no spaces or special characters) - we'll name our app `Form`. Budibase will generate a URL for you. If you are happy with the URL, click 'Create app'.

![Public forms and how to build them](https://res.cloudinary.com/daog6scxm/image/upload/v1650880675/cms/CleanShot_2022-04-25_at_10.57.34_2x_ezlsea.webp "Public Forms and how to build them")

#### Step 3. Set up your database

For demonstration purposes, we will use the Budibase DB as our data source. This is the easiest and fastest way to build a public form with Budibase.

_You can also build forms using MySQL, Postgres, Airtable, MongoDB, Rest APIs, and more. We'll cover each of these data sources in a different tutorial._

Click Budibase DB, then click 'Continue'. Name your table: 'Public Form'. And finally, click the 'Create' button.

#### Step 4. Create your data structure

Now that we've set up our database, we need to build its structure by adding fields/columns.

* Click the 'Create column' button, and name it `Name`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Email`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Company`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Company size`. Click the Type dropdown and select 'Options'. In the options text box (bottom) add the following (one per line):
  * `1 - 10`
  * `11 - 100`
  * `101 - 1000`
  * `1001+`  
    Then click 'Save column'.
* The final step within our data section, and a very important one, is to change the access of our database. To do this, click the 'Manage access' button. **Then set both the Write and Read levels to 'Public'. Click 'Done'.**

![Build a table](https://res.cloudinary.com/daog6scxm/image/upload/v1650880617/cms/CleanShot_2022-04-25_at_10.56.04_2x_hcb0v4.webp "Build a table")

#### Step 5. Create your public screen

Navigate to the Design section of the Budibase builder. There are two ways to build a public form within Budibase; autogenerate screens (including a form), or build our form from scratch. In this demonstration, we will build our form from scratch.

Your first step is to change the access from Basic to Public (Filter by access dropdown under the Screens tab).

![Public forms](https://res.cloudinary.com/daog6scxm/image/upload/v1650618251/cms/CleanShot_2022-04-22_at_10.03.47_2x_kdyyzr.webp "Screen for public forms")

Now click the '+ Add screen' button. Select 'Blank' and click 'Add screens'. Name your screen `Form` and use `/` as the URL. Your screen will now look like this:

![Blank screen](https://res.cloudinary.com/daog6scxm/image/upload/v1650618476/cms/CleanShot_2022-04-22_at_10.07.38_2x_ntc6w3.webp "Blank screen")

#### Step 6. Build your public form

First, we will add a Form component. You will find this under the Form dropdown. In the settings panel (to the right of your screen), under the Schema label, select the dropdown and select Public Form.

![Build a public form](https://res.cloudinary.com/daog6scxm/image/upload/v1650621320/cms/CleanShot_2022-04-22_at_10.54.00_bebnuq.gif "Build a public form")

Now, add a Field Group component (under the Form dropdown). In the settings panel, click the 'Update form fields' button, then click 'Update'. Your screen should now look like this:

![Public forms](https://res.cloudinary.com/daog6scxm/image/upload/v1650628329/cms/CleanShot_2022-04-22_at_12.51.55_2x_qfpx38.webp "Public forms")

#### Step 7. Add and configure submit button

To complete the creation of our public form, we will add a submit button. To add a button, click the Elements dropdown, and select Button. In the settings panel, under the Text label, update the button's text to `Submit`

We now need to tell our button what to do when clicked. To do this, under the label On Click, click the Define actions button. Now click the \`Add Action' button, and select 'Save Row'. Change the Data source to 'New Form' (the name of your form component in the tree) and Table to 'Public Form' (the name of your table). Click 'Save'. Our form is now fully operational.

![Button action](https://res.cloudinary.com/daog6scxm/image/upload/v1650877529/cms/CleanShot_2022-04-25_at_10.05.09_2x_dzgloj.webp "Button action")

#### Step 8. Style our new form

Our form is looking a little lustreless. Let's bring it to live with some style updates. First, we'll remove our navigation by clicking Layouts, then in the settings panel, selecting 'None' under Navigation.

![Form design](https://res.cloudinary.com/daog6scxm/image/upload/v1650878126/cms/CleanShot_2022-04-25_at_10.10.11_hgahtt.gif "Form design")

After removing the Navigation, go back to the 'Screens' tab, and follow the instructions below:

##### Resize our form and update spacing

* Click on the 'Home' option in the component navigation tree. In the settings panel, under 'Horiz Align', choose 'Center'.
* Click on our New Form component, and in the settings panel, change the Size to 'Large'.
* Add a new container and drag it above your form component (in the component tree). Then nest your Form component under the new Container component. ![Components](https://res.cloudinary.com/daog6scxm/image/upload/v1650879355/cms/CleanShot_2022-04-25_at_10.34.58_j0wxaj.gif "Components")  
  Click the 'New Container' component, and in its settings panel:
* Under Horiz. Align, select 'Left'.
* Under PADDING, change:
  * Top to `64px`
  * Right to `16px`
  * Bottom to `128px`
  * Left to `16px`
* Under SIZE, change the width to `520px`

##### Update the theme

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1650879129/cms/CleanShot_2022-04-25_at_10.31.53_2x_ebsuwa.webp "Theme")

* Click the Theme button
* Beside the 'Theme' label, select Darkest

##### Add a logo, title and description

* Add an Image from the Elements dropdown
  * In the settings panel, under URL, link to your image. 

  * Under Size, change the width to `48px`.
* Add a Header from the Elements dropdown
  * In the settings panel, change the Text to `Contact sales`
  * Update the Size to 'Large'.
* Add a Paragraph component from the Elements dropdown
  * In the settings panel, under Text, add description text. We will add:

    `Please complete the form below and we will respond as soon as possible.`
  * Change the Color to a lighter grey (see screenshot below)

![Theme](https://res.cloudinary.com/daog6scxm/image/upload/v1650880901/cms/CleanShot_2022-04-25_at_11.01.21_2x_d7l7jv.webp "Theme")

Now structure your component navigation tree like the image below:

![Form components](https://res.cloudinary.com/daog6scxm/image/upload/v1650882004/cms/CleanShot_2022-04-25_at_11.19.52_2x_ppqozz.webp "Form components")

#### Step 9. Preview and test your app

Click the Preview icon (play icon, highlighted in blue below) to preview your app.

![Preview](https://res.cloudinary.com/daog6scxm/image/upload/v1650881029/cms/CleanShot_2022-04-25_at_11.03.17_2x_mdwvcq.webp "Preview")

Your new public form should look something like this:

![Public forms](https://res.cloudinary.com/daog6scxm/image/upload/v1650881575/cms/CleanShot_2022-04-25_at_11.12.38_2x_qtmh4q.webp "Public forms")

You can now test your form. Fill out your form with the following information and click the submit button.

* Name - `Joe Bloggs`
* Email - `joe@bloggs.com`
* Company - `Budibase`
* Company size - `1001+`

After submitting the form, if you navigate back to Budibase, and look at your Public Form table in the data section, you will see our test entry.

![Test entry](https://res.cloudinary.com/daog6scxm/image/upload/v1650881529/cms/CleanShot_2022-04-25_at_11.11.52_2x_kyywtn.webp "Test entry")

If you are happy with your form, you can now publish it.

#### Step 10. Publish your app

To publish your app, simply click the Publish button, beside the preview button.

_Currently, to view your app, you have to navigate back to the app section (click bb icon, top left), and click the more icon beside your app, then click 'View published app'. This will change in the near future, and when you click publish Budibase will provide you with the URL._

![Budibase](https://res.cloudinary.com/daog6scxm/image/upload/v1650881274/cms/CleanShot_2022-04-25_at_11.07.24_2x_p2kt7k.webp "Budibase")

Your new public form should look beautiful like the one below:

![Public form example](https://res.cloudinary.com/daog6scxm/image/upload/v1650881706/cms/CleanShot_2022-04-25_at_11.14.55_2x_rs3j7e.webp "Public form example ")

Check out our top tips for [form UI design](https://budibase.com/blog/app-building/form-ui-design/).

***

### How to build a multi-step public form

Building a multi-step form follows the same process as building a single-step form, but involves a few additional steps which I've detailed below:

#### Budibase form steps

You can use Budibase to create multi-steps forms. In general, you just need to add the form steps component. Then you use button components to navigate between steps and submit data.

You can navigate between steps with the onclick action “change form step”:

![Budibaes Form Steps](https://res.cloudinary.com/daog6scxm/image/upload/v1668418902/cms/Screenshot_2022-11-14_at_09.40.56_pm3dgm.webp "Budibase Forms Step")

In it, you can use buttons to navigate to the next step, to the previous step, to the first step, or to a specific step.

Therefore, you can have a simple sequential flow or a form with multiple iterations and a complex navigation system.

#### Step 11. Add Form Step components

To turn our single-step form into a multi-step form, we must use the Form Step component. Click on the `New Field Group` component in your navigation tree, then add 2 Form Step components (add one, then click on New field group component, then add another). After doing this, nest the Name and Email component under Step 1, and Company and Company size under step 2. See the image below for further direction:

![Steps](https://res.cloudinary.com/daog6scxm/image/upload/v1650882506/cms/CleanShot_2022-04-25_at_11.26.26_2x_sx1da2.webp "Steps")

#### Step 12. Change our button text depending on the step

For our first step, we don't want our button to say `Submit`, we want it to say `Next`. To do this, click the button, then click Configure conditions (at the bottom of settings).

What we want to do next, is tell Budibase to update our button text to say next if the current step is 1. To do this, we add the following values to our Conditions settings:

* Update setting
* Text
* Next
* Click the lightning bolt, and on the left hand side, select 'New Form.Current Step', and select Save.
* Equals
* Number
* 1

See the image below for guidance.

![Conditionality](https://res.cloudinary.com/daog6scxm/image/upload/v1650883255/cms/CleanShot_2022-04-25_at_11.40.40_2x_uzuvh4.webp "Conditionality")

Click Save, and the Button should be updated.

#### Step 13. Tell our button to move from one step to the next

Our button currently has an action to Save a row, but we don't want to save a row for the first step. So, we will tell Budibase, when the user is on step 1, don't save, and instead, move them to the next step when the button is clicked. To do this, we must go back into our button Conditions, and enter the following:

* Update setting
* On Click
* Click Define actions button, then click Add Action, select 'Change form step'. Then change Form to 'New Form' (should be selected), and Step to 'Next Step'. Click 'Save'.
* Click the lightning bolt, and on the left hand side, select 'New Form.Current Step', and select Save.
* Equals
* Number
* 1

![Form step button](https://res.cloudinary.com/daog6scxm/image/upload/v1650883850/cms/CleanShot_2022-04-25_at_11.50.36_2x_zl189i.webp "Form step button")

#### Step 14. Preview and test our new public multi-step form

Click the preview button. In our form, enter `Test` for the name, and `Test` for the email. Click Next.Then enter `Test` for the Company and 1 - 10 for Company size, and press Submit.

![Form preview](https://res.cloudinary.com/daog6scxm/image/upload/v1650884025/cms/CleanShot_2022-04-25_at_11.51.48_2x_vfqiyj.webp "Form preview")

After submitting the form, if you navigate back to Budibase, and look at your Public Form table in the data section, you will see our test entry.

![Test entry](https://res.cloudinary.com/daog6scxm/image/upload/v1650884054/cms/CleanShot_2022-04-25_at_11.53.59_2x_erulr7.webp "Test entry")

#### Step 15. Publish your app

To publish your app, simply click the Publish button, beside the preview button.

_Currently, to view your app, you have to navigate back to the app section (click bb icon, top left), and click the more icon beside your app, then click 'View published app'. This will change in the near future, and when you click publish Budibase will provide you with the URL._

![Form button](https://res.cloudinary.com/daog6scxm/image/upload/v1650884503/cms/CleanShot_2022-04-25_at_12.00.47_qsqupu.gif "Button")

## Public form template

You can explore over 50 templates, including [form templates](https://budibase.com/forms/templates/ "form templates"). If you would like to explore the app we created above, you can do, by downloading it from the link below, then uploading it to Budibase (from the Create app screen in Budibase).

[Example public form app](https://drive.google.com/file/d/1s1Sm13IXJFG0W-tZrghj4K6NaDE8G2a0/view?usp=sharing "Example public form app")

## What to do after setting up your Public Form

Personally, I would autogenerate CRUD screens (with basic access level). This way, I would have a UI to view, update, delete form submissions and create new ones too.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1650896538/cms/CleanShot_2022-04-25_at_15.22.00_pm2pqy.webp "Data")

I hope you found this guide helpful. If you have a need or desire to build web apps and internal tools quickly, [sign up to Budibase today](https://account.budibase.app/register?utm_source=website&utm_medium=cta&utm_campaign=navigation-cta). It's free and open-source, has over 13,000 Github stars, and is loved by employees at Google, Microsoft, SpaceX, and more.