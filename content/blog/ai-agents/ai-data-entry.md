+++

author = "Ronan McQuillan"
date = 2025-07-16
description = "Take a look at our comprehensive guide to common AI ITSM use cases."
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "AI for ITSM | 5 Use Cases and Examples"

+++

Data entry is one of the areas where the impact of AI is most apparent. As a highly repetitive, time-consuming task, AI-powered automations have the potential to be completely transformative here.

However, this is also quite a broad term. That is, there are a huge number of workflows and tasks that we could describe as requiring some element of data entry.

At the same time, there are several key ways that we can leverage LLMs and other AI tools to enhance these workflows.

With that in mind, we’re diving deep into AI data entry forms.

Specifically, we’ll be covering:

- [What is AI data entry](#what-is-ai-data-entry)
- [Why leverage AI in your data entry workflows](#why-leverage-ai-in-your-data-entry-workflows)
- [How to build AI data entry forms with Budibase](#how-to-build-ai-data-entry-forms-with-budibase)

Let’s start with the basics.

## What is AI data entry?

As the name suggests, AI data entry involves any situation where we utilize AI tools to enhance or even fully replace data entry tasks.

So, the most obvious example of this would be using AI tools to remove the need for users to populate some or all of the required fields within a data entry task. 

This can come in a few forms, including document parsing, automatically populating fields using context, or enrichment from other data sources.

However, this isn’t the only type of AI data entry. Another key set of tasks here surrounds applying rules and logic to user-submitted values within data entry workflows. For example, for validation, approval workflows, or other downstream processing.

These kinds of AI operations are particularly useful in data entry workflows that are heavy on qualitative information. We can enable users to submit the required information in their own words before using natural language processing to extract the values we need for processing.

Alternatively, we might utilize AI in a more user-facing way within our data entry workflows. For instance, in the form of tool tips or copilot-style tools that help to guide users through the process of submitting the correct information.

We can also briefly consider how AI data entry works at a more technical level.

Typically, this is centered around a form UI that’s configured to trigger defined AI-based automation rules, either on submission for field-change, populating and sending user-submitted values, or other resources within a pre-built LLM prompt.

To learn more about this, check out our in-depth guide to [AI forms](https://budibase.com/blog/ai-forms/).

## Why leverage AI in your data entry workflows?

Understanding what AI data entry means in practical terms, we can begin to think about why it has become so prevalent. In other words, how does utilizing AI add value within data entry workflows?

There are a couple of overlapping angles to this.

The first, and arguably the most important, is the impact AI can have in terms of the cost of data entry workflows. That is, by reducing the need for colleagues to manually enter data, we can potentially make huge savings on labor hours.

However, there are also less obvious benefits to this, which can be just as important.

One is related to the quality and accuracy of the data we can collect. For instance, if we leverage AI-powered enrichment at the point of submission, we can often collect much more in-depth information than would be viable with strictly manual data entry.

For example, if it wouldn’t be financially feasible to conduct this kind of additional research within high-volume data entry workflows.

Similarly, utilizing AI can massively enhance user experiences in situations where we still retain some requirement for human input.

In particular, we can greatly improve efficiency by reducing the cognitive load we place on users. By reducing the number and complexity of fields that users have to populate manually, AI tools can hugely streamline data entry processes.

## Key use cases

In the next section, we’re going to look at exactly how we can build AI-driven data entry workflows using Budibase. First, though, it’s worth fleshing out our understanding of the key use cases here.

In terms of specific workflows, it’s obviously hard to generalize, with data entry being a basic part of almost all administrative tasks.

So, it’s more helpful to consider the tasks that AI is most effective at performing within these. We’ve hinted at some of these already.

Some of the key use cases for AI data entry include tasks such as:

- **Data validation and normalization** - automatically checking, correcting, and standardizing form entries.
- **Field auto-completion** - predicting missing or incomplete values based on historical data or context within the same record.
- **Entity extraction and structuring** - identifying and categorizing key entities (e.g., company names, product codes) from free-text fields.
- **Intelligent form routing** - directing submitted forms to the right workflow, team, or system based on content interpretation.
- **Context-aware enrichment** - augmenting form data with external or internal reference data.
- **Duplicate detection and merging** - identifying redundant submissions or overlapping entries and consolidating them intelligently.
- **AI-assisted review** - prioritizing or flagging entries that require human verification based on anomaly detection or confidence scores.
- **Automated summaries** - generating concise textual overviews of multi-field submissions for faster human review.

Of course, this isn’t an all-encompassing list. Rather, these outline the broad types of tasks that are most commonly performed by AI, although there is still a huge scope for variation across these.

Therefore, what’s most important is having the right tools in place to enable us to build AI-powered data entry forms for our own distinct use cases.

## How to build AI data entry forms with Budibase

Having extensively looked at what AI data entry is, where it’s used, and the benefits we can achieve, we can check out some real-world examples, along with how we can build these in Budibase.

If you haven’t already, sign up for a free Budibase account.

{{< cta >}}

We’re going to explore four of the most common use cases for AI within data entry workflows. Let’s dive right in.

### Summarization

Summarizing long, complex form submissions is one of the most useful tasks that we can perform with NLP. This is especially helpful in situations where our form schema includes open, qualitative fields, such as long-form descriptions or notes.

The idea is to provide a digestible, easy-to-read overview of what the wider submission contains.

For our example, we’ve built a form for recording details from a technical support call.

![AI Data Entry](https://res.cloudinary.com/daog6scxm/image/upload/v1762446226/cms/ai-data-entry/AI_Data_Entry_1_okiexs.webp "AI Data Entry")

This is built on top of a table in BudibaseDB, which contains a series of `Text`, `Long-Form Text`, and `Single Select` columns.

![Database](https://res.cloudinary.com/daog6scxm/image/upload/v1762446225/cms/ai-data-entry/AI_Data_Entry_2_eiraih.webp "Database")
There’s also a date column to record a timestamp for each form submission. This is populated automatically using Budibase’s default values, so we haven’t included a field on our form.

We’re going to perform AI-powered summarization on our `Subject`, `Description`, `Caller Name`, `Actions Taken`, and `Actions Pending` attributes. The goal is to provide a concise overview of what the call covered, including any related actions.

We can achieve this within the Data section of our Budibase Workspace, using the AI Data column.

We’ll start by hitting the plus icon to add a new column. Here, we’ll call our new column `Summary` and select `AI` as our `Type`.

![AI Column](https://res.cloudinary.com/daog6scxm/image/upload/v1762446225/cms/ai-data-entry/AI_Data_Entry_3_duvguf.webp "AI Column")
We’ll then set our `Operation` to `Summarise Text` and select the attributes we listed a second ago under `Columns`.
![Columns](https://res.cloudinary.com/daog6scxm/image/upload/v1762446225/cms/ai-data-entry/AI_Data_Entry_4_hbief9.webp "Summarize Text")

Hit save, and we can test this out by heading back to our form and submitting some dummy data.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1762446223/cms/ai-data-entry/AI_Date_Entry_5_ak5jdh.webp "Test")
Back in the Data section, we can see that our AI data entry flow has successfully summarized this submission.

![Summarry](https://res.cloudinary.com/daog6scxm/image/upload/v1762446222/cms/ai-data-entry/AI_Data_Entry_6_otoqj8.webp "Test)
### Categorization

Next up, we’re going to add some AI data entry logic to categorize our support calls. Like before, we have the option of doing this using the AI Column in Budibase’s data section.

However, in this particular case, we’re going to use an Automation instead. Our data table already has a `Category` column, with the possible options configured. 

Performing categorization in the Automation section will allow us to retain this, along with the ability to overwrite the AI-generated value.

We’ve started by creating an Automation rule with a `Row Created` trigger, pointed at our `Support Calls` table. This will be executed each time a new row is added to our table, whether via our form or some other method.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1762446222/cms/ai-data-entry/AI_Date_Entry_7_a1yyo3.webp "Test")
We’ll hit the `+` to add a follow-on action. Here, we can scroll down to the `AI` category and choose the `Classify Text` operation.

![Classify Text](https://res.cloudinary.com/daog6scxm/image/upload/v1762446222/cms/ai-data-entry/AI_Data_Entry_8_tw5w8r.webp "Classify Text)
This accepts two arguments:

1. `Text` - the specific text we’d like to categorize.
2. `Categories` - a list of possible options.

The first thing we need to do is populate the `Text` field with the relevant data from our form submission. To do this, we’ll hit the lightning bolt icon to open our bindings menu.

Here, we can access all of the individual field values from our trigger row, under `Trigger Outputs`. These can be used within either JavaScript or Handlebars expressions.

![AI Data Entry](https://res.cloudinary.com/daog6scxm/image/upload/v1762446221/cms/ai-data-entry/AI_Data_Entry_9_uzmzw5.webp "AI Data Entry")
The specific expression we’re going to use is:

{{< highlight javascript "linenos=inline" >}}

Subject:

{{ trigger.row.Subject }}

Description:

{{ trigger.row.Description }}

{{< /highlight >}}

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1762446221/cms/ai-data-entry/AI_Data_Entry_10_jpq42y.webp "Bindings")
We’ll then add our possible categories to match the options from our data table. These are ‘Software’, ‘Hardware’, ‘Network’, ‘Account’, and ‘Other’.

![Categories](https://res.cloudinary.com/daog6scxm/image/upload/v1762446220/cms/ai-data-entry/AI_Data_Entry_11_miq9rh.webp "Categories")
Lastly, we need to add this value to our original row. To do this, we’ll add an `Update Row` action, pointed at our `Support Calls` table. We’ll set the `Row ID` to `{{ trigger.id }}` and `Category` to `{{ steps.Classify Text.category }}`.

![Update Row](https://res.cloudinary.com/daog6scxm/image/upload/v1762446219/cms/ai-data-entry/AI_Data_Entry_12_btgfvd.webp "Update Row")
We can use our existing row as test data to confirm that this works.

![Test Form](https://res.cloudinary.com/daog6scxm/image/upload/v1762446218/cms/ai-data-entry/AI_Data_Entry_13_r2gx2w.webp "Test Form")
Under the `Data Out` section for our `Update Row` step, we can see that our test row has successfully been given the `Network` category.

![Data Out](https://res.cloudinary.com/daog6scxm/image/upload/v1762446218/cms/ai-data-entry/AI_Data_Entry_14_tvthjb.webp "Data Out")
### Sentiment analysis

Another key use case for AI data entry is sentiment analysis. This means using natural language processing to determine the overall emotional weight behind qualitative entries. Specifically, denoting them as `Positive`, `Negative`, or `Neutral`.

For our example, we’ve built a data entry form for recording feedback from an in-person focus group session. This simply records the `Names`, `Emails`, and `Comments` of participants.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1762446218/cms/ai-data-entry/AI_Data_Entry_15_nceubx.webp "Form")
The underlying data table contains the same fields, as well as a `Date` attribute which will be autopopulated, just like before.

![Date](https://res.cloudinary.com/daog6scxm/image/upload/v1762446218/cms/ai-data-entry/AI_Data_Entry_16_tiaole.webp "Date")
We’re going to add an `AI Column` choosing `Sentiment Analysis` as our `Operation` and `Comments` as our `Column`.

![AI Column](https://res.cloudinary.com/daog6scxm/image/upload/v1762446218/cms/ai-data-entry/AI_Data_Entry_17_ut0pzm.webp "AI Column")
Once again, we’ll test this out by submitting an entry via our form.

![Form](https://res.cloudinary.com/daog6scxm/image/upload/v1762446192/cms/ai-data-entry/AI_Data_Entry_18_b3xv04.webp "Form")
Back in the data section, we can see that our sentiment analysis has successfully categorized this as `Negative`.

![Negative](https://res.cloudinary.com/daog6scxm/image/upload/v1762446191/cms/ai-data-entry/AI_Data_Entry_19_t8ajte.webp "Negative")
### Data extraction

Lastly, one of the most useful NLP tasks we can perform on form data is extracting key variables from qualitative information. This enables natural language interactions by allowing users to submit information in their own words.

We then use AI on top of this to extract the structured data that we need for downstream processing.

For our example, we have a simple maintenance request form.

![Maintenance Request Form](https://res.cloudinary.com/daog6scxm/image/upload/v1762446191/cms/ai-data-entry/AI_Data_Entry_20_wsdubq.webp "Maintenance Request Form")
The idea here is that users can submit the details of their request in the description field, allowing them to use their own words, where a tight data schema might expect too much in terms of the user’s technical knowledge.

Once again, we’re adding an AI Column to our underlying data table. However, this time, we’re selecting `Prompt` as our operation.

![AI Data Entry](https://res.cloudinary.com/daog6scxm/image/upload/v1762446191/cms/ai-data-entry/AI_Data_Entry_21_iczlwj.webp "AI Data Entry")
This will allow us to send more in-depth instructions to the model than we could with Budibase’s pre-configured LLM operations. We’ll hit the lightning bolt icon to open the bindings drawer for this.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1762446190/cms/ai-data-entry/AI_Data_Entry_22_qrxymd.webp "Bindings")
Our prompt is:

{{< highlight javascript "linenos=inline" >}}

You are an IT maintenance triage assistant.

{{ Description }} is a maintenance request submitted by a user.

Based on this description, assign the following variables.

Category – One of:

Hardware (device damage, component failure, physical issue)

Software (application malfunction, crashes, errors)

Network (connectivity, cabling, VPN, or Wi-Fi issues)

Power (outages, battery, electrical supply)

Environmental (temperature, noise, physical conditions)

Request (installation, setup, replacement, or improvement)

Other

Priority – One of:

Low: Non-urgent, minimal impact, informational or cosmetic

Medium: Noticeable impact on one user or small group, workaround available

High: Significant impact on productivity or asset functionality, no workaround

Critical: Urgent issue affecting multiple users or essential systems

Justification – A short rationale explaining the category and priority chosen.

Return only a valid JSON object in this format — no extra text, explanations, or wrapping:

{

"Category": "Hardware",

"Priority": "High",

"Justification": "User reports workstation will not power on, preventing any work."

}

If the input is unclear, still return a valid JSON object with "Category": "Other", "Priority": "Low", and a brief justification.

{{< /highlight >}}

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1762446190/cms/ai-data-entry/AI_Data_Entry_23_tsygdc.webp "Prompts")
One last time, we’ll add a test submission to our form.

![Test](https://res.cloudinary.com/daog6scxm/image/upload/v1762446190/cms/ai-data-entry/AI_Data_Entry_24_jvvxlh.webp "Test")
And back in the data section, we can see that the values we need have been extracted and formatted correctly.

![AI Data Entry](https://res.cloudinary.com/daog6scxm/image/upload/v1762446190/cms/ai-data-entry/AI_Data_Entry_25_c9hzzk.webp "AI Data Entry")
## Turn data into action with Budibase

Budibase is the open-source, low-code platform that empowers IT teams to turn data into action. 

With extensive external data connectors, autogenerated UIs, powerful AI-driven automations, custom RBAC, optional self-hosting, and more, there’s never been a better way to build modern, secure internal tools.

Check out our [features overview](https://budibase.com/product/) to learn more.
