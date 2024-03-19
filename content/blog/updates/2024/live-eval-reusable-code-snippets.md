---
title: Boosting developer productivity with Live Evaluation & Reusable Code Snippets
description: With today’s release, we’re pushing out two major updates to improve the developer experience in Budibase - Live Evaluation & Reusable Code Snippets.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1704878154/Photos/headshot_aw4uce.png
images:
  - https://res.cloudinary.com/daog6scxm/video/upload/v1709745251/product-marketing-images/formsScreenTemplate2_exoepi.gif
date: "2024-03-19"
author: Jamie Birss
---
With today’s release, we’re pushing out two major updates to improve the developer experience in Budibase: Live Evaluation & Reusable Code Snippets. 

Live Evaluation offers real-time insights into your code’s behavior, allowing for immediate feedback without the constant need to toggle between the app preview and code editor. Meanwhile, Reusable Code Snippets, allow you to write blocks of JavaScript, such as formulas, in a centralized location, which can then be reused across your whole application. Both of these features are aimed at making the development experience not only more efficient but also more enjoyable and intuitive. 

*Let’s dive into the details!*

## See code output in real-time with Live Evaluation

Going through the development process without real-time code visibility can often feel like navigating in the dark, relying on guesswork, and hoping for the best outcome. At Budibase, we want to empower you to build applications quickly. This means equipping you with the correct information at the right time, removing the guesswork, and enhancing your development process with actionable insights. 

Live Evaluation lets you see your code output as it happens. Keep an eye on the live, changing results of your code to check if your bindings are doing what they're supposed to, all right where you're working. This release works with both JavaScript and Text bindings - simply click ▶ to preview your output. 

![LiveEvalGIF](https://res.cloudinary.com/daog6scxm/video/upload/v1710841978/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/liveEvaluation_vrwobh.gif)

Let's dive into a demonstration to see this in action. In this example, we’re binding the user’s first name to the end of our sentence, using JavaScript. 

![LiveEvalWorking](https://res.cloudinary.com/daog6scxm/image/upload/v1710841909/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/liveEval_working_xgb3kg.png)

Budibase was able to correctly identify and pull the user information via the binding, and output the result next to the code in preview tab. This led to the correct output being shown - perfect! 

However, let’s say the binding wasn’t able to be called as intended. Instead, the Live Evaluation would display an error message, as well as the corresponding output:

![LiveEvalError](https://res.cloudinary.com/daog6scxm/image/upload/v1710841943/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/liveEvalError_rftjtq.png)

Live Evaluation now allows you to see exactly what’s broken and how to fix it. Say goodbye to the guesswork of writing your code in the dark and say hello to a smoother developer experience. 

## Simplify app development with Reusable Code Snippets (Premium feature 🔒)

For creators looking to take their applications to the next level, JavaScript can be an invaluable tool. It allows the creation of unique formulas and pushes the boundaries of what is possible in Budibase. However, we know that once applications hit a certain size and complexity, managing formulas can get out of hand quickly. 

Often, a single formula will be reused constantly throughout an application. Previously, there was no straightforward way to edit all snippets at once, leading to tedious update processes, and creating unnecessary risks of issues being introduced. With Reusable Code Snippets, we’ve built a centralized way to manage your JavaScript - allowing for easy standardization and replication across your application. Simply click the **</>** icon next to your JavaScript to access, manage, and update your snippets. This will be visible anywhere you can use JavaScript in Budibase. 

### Let’s look at a tangible example of this in action!

In Budibase, dates are output in a standard format: MM/DD/YY. But what if you want to consistently use a different date format throughout your application, such as DD/MM/YY? Previously, this would have involved adding custom JS to every mention of a date throughout your application (*boo!*). But now, with Reusable Code Snippets, you only have to write the formula once, and it’ll automatically update everywhere your formula is called. 

To do this, we first need to open our JavaScript pannel and add our Snippet. From here, we can name our snippet and write a formula to convert our date from MM/DD/YY to DD/MM/YY.

![ReusableFormula](https://res.cloudinary.com/daog6scxm/image/upload/v1710841838/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/reformattedDate_formula_coh8r7.png)

Then we simply apply the snippet to our date fields, like so: 

![ApplySnippet](https://res.cloudinary.com/daog6scxm/image/upload/v1710841802/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/return_reformattedDate_ll4e5r.png)

Voila! We now have a fully functioning, cohesive formula to manage date formatting across our entire application.

![FunctionalSnippet](https://res.cloudinary.com/daog6scxm/image/upload/v1710841757/product-marketing-images/Live%20Evaluation%20and%20Reusable%20Code%20Snippets/return_snippet_nbv8k9.png)

Both Live Evaluation and Reusable Code Snippets have been carefully designed to improve the developer experience in Budibase, offering a more efficient way to build apps. We hope you enjoy them and are excited to see you build more beautiful apps with Budibase.