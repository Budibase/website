+++
author = "Martin McKeaveney"
date = 2022-07-31T23:00:00Z
description = "The Bulgarian Government are using Budibase to re-home 120,000 Ukrainian refugees. At the heart of the story, is open-source."
image = ""
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1659446099/cms/Customer_stories_5_cp8ktg.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1659450296/cms/martin_sjr9hh.jpg"
title = "A story about open-source, the Bulgarian Government, and the war in Ukraine"

+++
It was a Sunday morning, and Budibase's Bulgarian QA engineer, Mihail, receives multiple LinkedIn messages from multiple employees of the Bulgarian Ministry Of Foreign Affairs (MoFA). He brushed it off, thinking it was a scam. But, suddenly, he gets a call from his cousin who works with the MoFA.

It turns out that the Bulgarian Government had been using Budibase to build an app that would help them rehome thousands of Ukrainian refugees. Ukrainian refugees would log in and provide their information, and the Bulgarian Government would help them find a place to stay.  The app was a [multi-step, logic-based questionnaire app](https://survey.ukraine.gov.bg/builder/auth/login)) that stored its data in a SQL database. The app was self-hosted using Docker Compose.

They were attempting to contact us because they had built the Budibase app in advance, and it was working perfectly until they uploaded the 100,000+ users, and released it out into the wild. In hindsight, this load testing should probably have been performed in advance, but there was no time in this case.

At this point, the app started to choke under the load causing the server to crash. It is important to note that they were using our new [Public API](https://docs.budibase.com/docs/public-api "public api"), which was a couple of weeks old. We ran into some more performance issues and made some updates to make Budibase perform better:

* Cached calls to /checklist, and reduced the amount of rows being queried to make that call faster
* Added PM2 so that we could run worker/server on all cores on a single machine using node clustering

This improved performance significantly, and the app was performing like a dream. Ukranian refugees could log in, submit information, and the Bulgarian Government could get to work rehoming them. 

Here’s a video from the Bulgarian deputy prime minister announcing the app's release and telling Ukrainian refugees to fill out the form. See 0:08 for the budibase app:

[https://www.facebook.com/groups/ukraine.bg/posts/398022855670258/?comment_id=398863655586178](https://www.facebook.com/groups/ukraine.bg/posts/398022855670258/?comment_id=398863655586178 "https://www.facebook.com/groups/ukraine.bg/posts/398022855670258/?comment_id=398863655586178")

People who don't understand open source always question why we chose to build an open-source product. Well, this is exactly why Budibase had to be open source. There's no better feeling than knowing the product you spend every minute of every day working on is having a positive effect on the world.