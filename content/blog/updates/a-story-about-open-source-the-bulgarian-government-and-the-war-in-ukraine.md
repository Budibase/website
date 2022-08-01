+++
author = "Joseph Johnston"
date = 2022-07-31T23:00:00Z
description = "The Bulgarian Government are using Budibase to re-home 120,000 Ukrainian refugees. At the heart of the story, is open-source."
draft = true
image = ""
images = []
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639747995/cms/joe_illustration_gray_bg_e97wdl.jpg"
title = "A story about open-source, the Bulgarian Government, and the war in Ukraine"

+++
It was a Sunday morning, and Budibase's Bulgarian QA engineer, Mihail, receives multiple LinkedIn messages from multiple employees of the Bulgarian Ministry Of Foreign Affairs (MoFA). He brushed it off, thinking it was a scam. But, suddenly, he gets a call from his cousin who works with the MoFA.

It turns out, that the Bulgarian Government had been using Budibase to build an app that would help them rehome 120,000 Ukrainian refugees. The app was a \[multi-step, logic-based questionnaire app\]([https://survey.ukraine.gov.bg/builder/auth/login](https://survey.ukraine.gov.bg/builder/auth/login "https://survey.ukraine.gov.bg/builder/auth/login")). Ukrainian refugees would log in and provide their information, and the Bulgarian Government would help them find a place to stay. 

***

How did they get his number?

The government of Bulgaria is a nation actively responding to the ongoing Russo-Ukraine conflict and the ensuing refugee crisis.

To manage the influx of refugees and provide them with the due care, accommodation, and help, the Bulgarian government needed to collect information from Ukrainian citizens entering Bulgaria.

A software project initiated by our prime minister and the cabinet would be the answer to this problem, allowing us to collect personal information from over 120,000 refugees in the form of a multi-step, logic-based questionnaire application. We were deeply constrained by time, so we decided to look for a low-code platform to help us deliver the solution faster.

When selecting a solution, it had to be open source - this helps us adopt the tool quicker and reduces procurement efforts. The solution also had to be simple to use, performant, scalable, and self-hostable. We have access to large data centers and infrastructure, so security and privacy are always top-of-mind when choosing a solution. We also wanted to use an internal MySQL database to store our data.

We researched the market, and Budibase was a clear winner and the perfect solution for our requirements. So, we set to work, deploying the platform via docker-compose and building a full-stack web application in a matter of hours.

We could then load 120,000 users (refugees) into Budibase via their built-in REST API and collect thousands of entries over the following days. Television broadcasts and media telling the refugees to fill out the form caused large spikes in submissions, but Budibase handled the usage with ease.

Budibase was mission-critical for us and went a long way in preventing what could have become a humanitarian crisis here in Bulgaria.

We have plans to use Budibase in the future for other governmental use cases here in Bulgaria, including data collection applications, forms, questionnaires, and workflow-based applications internally.

I’d like to thank the Budibase team for creating such a wonderful platform.