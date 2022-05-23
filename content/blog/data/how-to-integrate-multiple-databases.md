+++
author = "Ronan McQuillan"
date = 2022-05-22T23:00:00Z
description = "Check out our in-depth guide to learn how to integrate multiple databases, for all kinds of app projects."
draft = true
image = "https://res.cloudinary.com/daog6scxm/image/upload/v1653320833/cms/How_to_Integrate_Multiple_Databases_header_d3qyyj.png"
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title = "How to Integrate Multiple Databases in a Web App"

+++
There are countless situations where you might need to integrate multiple databases. This might be necessary for a particular app project. Providing more centralized and efficient access to information could also be a goal in itself.

However, accomplishing this can be a challenge, especially for inexperienced developers.

Today we’re going to look at two methods key methods for integrating databases, as well as how Budibase can make life easier along the way.

First though, we’ll start with the basics.

## What is database integration?

Database integration means taking data from multiple, disparate sources, and creating a single authoritative version, that can be shared and managed across your organization. This can include existing databases, as well as other sources, like web services, or other inputs.

Often, this means taking several existing databases and merging them into a single, unitary resource. Other times, it can mean retaining separate databases and creating a single platform to view, access, and manage information.

We’ll look into each of these in a little bit more detail later.

In either case, the goal is to improve information sharing, efficiency, and decision-making across your organization. Integration also helps to safeguard your data’s validity, integrity, and security, as well as the performance of any tools that are based around it.

## Why integrate multiple databases?

Modern businesses collect and store huge volumes of data. Integration plays a crucial role in helping you use this information, rather than getting overwhelmed by it.

When you create a single source of truth, you empower your team to make faster, better decisions. This also eliminates the need to store similar information in multiple places, which in turn prevents duplication and inconsistency issues.

Additionally, integration can be used to provide more convenient data management processes. For instance, by enabling your team to carry out admin tasks on several databases, from a single tool.

Consolidating databases can also offer performance benefits. For example, by allowing you to access the same information by querying a single, centralized database.

Besides this, there are some situations where integrating multiple databases is simply unavoidable. That is, this might be a requirement for your app to meet its functional requirements.

With that in mind, let’s look at some of the different ways you can go about integrating databases in practice.

![](https://lh3.googleusercontent.com/5m6wsGSoaFCdt7YBh64U4yFgEWK8NPcv354tXdXxFr6B6Gjflk09qgqtPz7BNKmyaAf52UhBbzOOxVb6YNdkybW7LQaYaM6okMUbE97e_MnruR8CxCOQymuWx3x5PAsfb0ZFzt8fexlznnB9yA =624x351)

## Consolidating data vs connecting to multiple databases

As we touched on earlier, we’re going to look at two distinct ways to integrate databases. Each offers its own advantages and disadvantages. Some app projects will be more suitable for one or the other.

The first option is to consolidate your databases into a single source. That is, to take your existing data, and migrate it to a single new database. There are countless reasons why you might need to do this, for example when moving data sets to the cloud.

In fact, this kind of migration is what is often meant by database integration, although it is not the only method.

Naturally, there are downsides here too.

For one thing, migration always carries risks, including service interruptions, data loss, or corruption. Mitigating these is a large undertaking, to say the least. In certain cases, this simply isn’t worthwhile, especially for small internal tools.

In other cases, migration simply won’t be feasible.

You’re often constrained by the needs of other platforms in your software stack.

For example, you might need to integrate data from a CRM tool that uses its own internal database. There’s no sense in migrating data to build one tool if it’s going to break other platforms that you need.

So how do you integrate multiple data sources, without wholesale migration?

The solution is to create dedicated tools for managing data from different sources. In other words, creating interfaces, defining business processes, or creating virtual tables that enable seamless data integration.

The goal here is to be able to seamlessly query different databases, as though they were one. One element of this is retaining consistency across similar attributes stored in multiple databases.

For instance, a CRM and invoicing platform that both store clients’ contact details.

You can think of this as a kind of _de-facto integration_, as the actual databases remain separate and distinct from each other.

With that in mind, let’s dive into the practicalities of each of our integration methods.

## Consolidating multiple databases

As noted already, integration often refers to the practice of consolidating multiple databases into a single source.

However, this can mean many different things in practice. This largely relates to how different the databases in question are, to begin with.

Let’s look at a couple of different scenarios, and how they differ.

### Integrating databases with a single schema

If you have several databases in different locations, but which share a single schema, consolidation is relatively straightforward. For instance, if different users all have local versions of the same data set.

Essentially, all we need to do in this case is create a master database that matches the existing schema, and import all of the values from the local versions.

Depending on the DBMS you use for your new database, this can be done with direct file uploads, automated queries, or even manual data entry. Which of these methods you choose will depend largely on the scale and complexity of the datasets you’re working with.

For example, if you have multiple databases made up of one or two tables, manually uploading data might be the easiest option. With Budibase, you can use CSV files to bulk import data, either into our internal database or to any other connected sources.

For a simple example, say each of your sales team stores their leads locally in separate Postgres databases. Each only has a single table. You decide to integrate these into a new master list, in the form of a MySQL table.

Your goal here is to build an app that will help sales colleagues to share information and avoid contacting the same colleagues over and over again.

We can add each Postgres database as a separate data source in Budibase, automatically fetch tables, and export all of our values to CSV files, without needing to write a single query. We can then connect to our new MySQL table, and import the values in the Budibase builder.

This moves all existing values to our master list. We can then create a simple automation, so that any time a new lead is added by an individual sales colleague, it’s also added to the master list.

![](https://lh4.googleusercontent.com/nL9LM2KEJHhZBEMgWdhAo7CUQQCueQlDT0dK_S2Q3eo_W-gO2afiy_QmtJDWAVGtuRZ5bF9Rvup1O1uXXOeOwV-nAj54om4Ow4ZX-hP28PIAur_kqmAyx5_Y7gEko02DDpRCaUjeDT5QxvPV8Q =624x351)

### Integrating data from distinct database schemas

Naturally, things get more complicated when you’re working with multiple databases, that don't share a common schema. For example, if you want to move several entirely different data sets into a single master source.

On a large scale, this is sometimes also referred to as a _data warehouse_.

In fact, this is a highly specialized discipline in itself, so it would be misleading to suggest we could give a comprehensive overview of how to go about it within this guide.

Instead, let’s explore some of the key considerations you’ll have to keep in mind when undertaking this kind of integration.

#### Assessing your requirements for your new database

Many of the decisions you’ll make here will depend on the degree of similarity or difference between stored entities. This will be particularly important when it comes to creating your new database schema.

So, you might have multiple databases that store different kinds of information about the same entities. Or, you might have several databases that deal with entirely different sets of entities.

For example, integrating two sets of data relating to your customers will likely be a much smaller undertaking than integrating two entirely distinct datasets.

In the first scenario, we’d need to do little more than querying each of the existing databases from our DBMS and creating new master versions of each of the entities we need.

As we’ll see a little later, this can be a little more complicated in practice though.

The key thing, in either case, is to define a schema for your master database that meets your information needs, while retaining the content of your original sources.

#### Maintaining consistency and integrity

Maintaining consistency and integrity when integrating databases can be a major challenge. One part of this relates to the _type_ and _format_ of existing data. This is a particular concern when different databases already store similar attributes differently.

This could stem from decisions made by the original database owner, or from the conventions of the underlying DBMS.

For example, different databases might handle strings or numerical data differently. This will cause difficulty when trying to manipulate values.

The key here is effectively transforming existing data to meet your new database schema. The specifics here will vary largely from project to project. Check out our ultimate guide to application data sources to find out more about transformations.

#### Dealing with duplication and discrepancies

Duplicate values and discrepancies between databases are another major pain point during integration. Here, duplication means the same value is stored twice. Discrepancies occur when the same attribute is stored twice for a given object, but with different values.

Say you were integrating two databases, which each stored values for your customers’ phone numbers. Duplication would occur if you retained this attribute on different tables within your multiple databases.

A discrepancy would be if you had different phone numbers stored for the same customer. This can be at the level of the value itself, or how it is formatted.

There are, of course, some cases where you might want to build redundancy into your data model, but it’s less common to want to do this within a single database.

During an integration project, this means that you’ll need to decide which source to prioritize for any duplicated attributes.

#### Managing relationships

When you develop a schema for your new master database, you might have to completely rethink the relationships between your different entities. This can apply equally, whether your original databases deal with similar entities or not.

In other cases, things can be a little bit more straightforward. Some integration projects might mean appending a single additional table to a larger database and storing these in a new model and schema.

This would be relatively simple, as you might not need to substantially change the relationships for the majority of your entities.

In other cases, defining relationships between entities will be more complex. We’ve created a dedicated guide to how to create a data model, which you can check out to find out more.

#### Storage, hosting, and access

There’s also the matter of how you’ll physically store and host your new database. For example, choosing between a cloud-host, or on-premises storage.

You’ll also need to consider the actual DMBS you’ll use to manage your migrated data.

For example, we touched on a scenario earlier where we could integrate two Postgres databases into a single MySQL instance.

Obviously, the specific choice you’ll make here is highly dependent on the requirements of your particular project. For example, you might opt for Postgres, MySQL, MSSQL, SQL Server, Airtable, CouchDB, MongoDB, Oracle, S3, or a huge range of other database tools.

#### Migration risks

For major database consolidation projects, it’s also crucial to mitigate against different migration risks.

In fact, there are countless huge risks associated with any kind of data migration.

The most obvious among these are data loss, corruption, and extended periods of service interruption. As such, it’s important to thoroughly vet any integration tools and partners you use during migration.

Besides this, there’s the impact that a large-scale integration project can have on your wider software stack. More specifically, different tools might encounter problems when querying data after it has moved. They might also not support your new data storage or DBMS.

For example, semantics issues can arise, when attributes’ names change, but automated queries aren’t updated to reflect this.

## How to integrate data from different sources within a web app

As noted earlier, there are alternatives to wholesale consolidation. These involve querying multiple data sources from a single tool, achieving many of the benefits of integration, without the need to migrate data.

This is an effective way to create a single, accessible source of truth across different datasets. We can also use simple web apps to improve efficiency and ease the admin burdens of managing multiple databases, through defined workflows.

This also eliminates some of the risks associated with other kinds of integration.

However, working with multiple databases in a single app also involves serious challenges. For example, querying errors, inconsistency between sources, and compounding all of the usual challenges of working with a single data source.

As such, this strategy is normally more suited to relatively simple tools and datasets.

Essentially, such a web app must achieve two things:

* Provide the same experience for users as if they were querying a single master database.
* Maintain consistency between connected databases when changes are made via other existing tools.

For example, you might have separate platforms with internal databases that store different kinds of customer information. You might build a tool to provide a single source of truth for your service team, as well as make it easier to manage and maintain customer details.

Let’s take a look at how you could go about building this in Budibase.

### 1. Connect your data

The first step is to connect your databases to the Budibase builder. Of course, you might have several data sources, but for simplicity’s sake, we’ll use two in our example. Let’s say we have one MySQL database from our CRM, and one Postgres database from our invoicing tool.

Each has multiple tables, including one for customer details. These common tables store a range of different attributes, but each database contains fields for each customer’s contact details.

We want to build a tool where internal users and customers themselves can update their contact details in both databases, with a single interface.

Budibase offers a range of intuitive connectors for external data. In the builder, head over to the _Data_ tab, and select the plus icon to add a new source:

![](https://lh6.googleusercontent.com/ostH2XN-fkAwFacTPm1UvDEC2w4qwD0Ulr81Z03ZKU3n3Qcc_mV37KM7DshQKpNDOD00grVm0hc0jLbKBuPmSAjSxIeYrxwlyrvMUB7oofGjUYeaQpVFPZhtCgN29hRf46NsczfE8hCfkKl6VA =624x391)

First, we’ll connect to our invoice platform’s database, by selecting Postgres, and inputting our credentials:

![](https://lh5.googleusercontent.com/Qv1NXg1N0cT0fQ65Tfec_cm3ewulYTyokSI-Y4ldZGjXFZl6apHggchynKB1oX67Vz2o-UaT7umg_34HVQfSSo-LlftEJgElDiEDZDexuXqeqlar0qkurFORj4MnWhpaxe2wisFlzEstwYc0xA =624x531)

Then, we can do the same for our CRM’s MySQL database:

![](https://lh5.googleusercontent.com/jor9zIDGch9pA4swqB0hqu3U0rtP0KezjfZRfvPqJfmYnbA9LMevexobATN0w8wx_6ntakrgflSldqGEyGrPBjGWM3jKLtWKRcKjAPCY-5nkIucxJ2_p3KpbaA6xHETNYREsdh3Zh4AefrMDhA =624x509)

When we save each of these and fetch the tables, we’ll have full connectivity to perform CRUD queries on both databases.

Each database has two tables. Our CRM stores entities for customers and users:

![](https://lh3.googleusercontent.com/stAFNQeOi0zRBdSRED3EZ7i8gc4QQ0vU3cg3ECH4I-iJ3IpqOFxL_-esVmmJ5j6pUOJsykovFPNkHVzutDRHFuWvraw29JtzTp6uvj8XZ2ajkvyK7vlZYRjbmxm_vX-kj809aXo0qRlTAYmxlA =624x288)

The invoicing tool has separate tables for customers and invoices:

![](https://lh3.googleusercontent.com/FIRYY-mK3q-dubRA5Awr7SYucDGUjyCOzvlk6YFNDmzPoBFHMmEZZWJJRhBLwVTz_WXKS-uq3sX9cmI6MkQHp6-A3_jtLX-m9yZUqwvIbBy2nW7KfRsm_eQORBxwl63xNKKQ1U2vDtgdl_XJ9g =624x276)

For the purposes of our example, we’re only concerned with the _customers_ table in each database. We can leave the relationships between these and the other internal tables alone.

### 2. Create combined data tables

Remember, our databases share certain attributes for each customer, but they also each store some unique information. Specifically, each stores contact details, along with additional unique attributes.

Our next task is to give our users a single resource, where they can see all stored details for each customer.

In other words, we need to create a table that contains all of the attributes from both databases’ customer records. We could go about this in a few different ways, for instance creating a virtual table.

For our purposes, we’ll create a new physical table. We could do this within one of our existing databases, using BudibaseDB, or in an entirely new database. For simplicity’s sake, we’ll just create a new table within our CRM’s existing MySQL host.

We’ll start by writing a query to duplicate our CRM’s customer table:

![](https://lh3.googleusercontent.com/SVxW1ydL6lIs0mprZV9HaqxTUKEhnwuXFHVylW3C1sp7tdh8O7UUJm_lStRaHzHAn7n-CWv6X8Py3gOgDYUvGqJCozK_T0BZa5CkLKm1fkfoGjscNvIHQlVmlNOhlqlfXIHVY8cMVvt2OPWeYA =624x287)

You can do this in your DMBS, or as a custom query in Budibase, as shown above.

We can then use Budibase to add any additional attributes we need from our invoicing tool to our new combined table. In our case, we just have one - the customer’s billing cycle.

We’ll then build a simple automation to add the relevant billing cycle values to our new table. There are a number of different ways we could trigger this, including user actions, or set periods of time.

However, since we only have a relatively small number of entries in the invoice customers dataset, we’re going to use an _updated row_ trigger, so we can carry across each value one by one.

We’ll cover more automations later. For now, all we need to do is get our initial values in place. First, we’ll set a trigger as any time a row in our _crm_business_information_ table is updated.

Next, we need to query our _invoice_customers_table_, and use filters to find the row with the same business name as our trigger.

![](https://lh5.googleusercontent.com/b8JEPN9OwA3-gYuvmTDFqo-jOBnkH09pD704KgofNUlYlIWXpBdeDY5iGqlmEX27Dh6DV8On3c2askyFsyrUG7_38DDdyotdMWGxFfgHfiiECOcGWdw_CIPpTKTolpy0Rd_eyHE53g19Z1lBlQ =624x299)

Finally, we’ll update the relevant row in our _combined_customers_table_, using a combination of values from our trigger row and our _invoice_customers_ table.

![](https://lh3.googleusercontent.com/OfDvShEPJAUN6VdoHgI3MEwEBwU1lbrdW8sTLpJ9mBwqlB09kQK_uKqtroi6jOJO_E2oyu_j5HRDR0qoSyOti6Vm9e2odczKgysbrSxiNbZrFo-XB-hJIw6R7crdZbfR8u8F-P1YIhJhS3MR0w =624x401)

With this in place, we can manually update any row in our _crm_business_infromation_ table, to carry across the billing cycle value from our invoices database.

If we wanted to do this in bulk, we could use a different trigger, like a user action, and change our automation to iterate through each row in both tables and add the new values to the correct row.

### 3. Build CRUD screens

Now we that have a combined table, we can start building CRUD screens to query our two databases. Remember, our goal is to have a single interface for managing the two databases’ shared attributes.

So basically, we need to create a form where we can edit a customer’s contact details, and pass this new information to both our CRM and our invoice platform.

Obviously, the best UX would be to allow users to do this through a single form.

We want this to update customers’ contact details while leaving any unique attributes in either database alone.

We’ll start by automatically generating CRUD screens for our _combined_customers___table_.

![](https://lh3.googleusercontent.com/xLnknLTP4h3qrEj_qx7CqeuDtipAIlD7FFv0-VzDqRtVjPmS1r4g6HhP5rRH4RACOcf1Mbd9-cY_4BTQJA3BFyp7Z17NctKJqMSWB2nfAbXKcVaQL6XZWs3x31V7I8Stv6qDxsnvT05tG7ehTg =624x391)

For simplicity’s sake, we’ll make this a single screen app, by setting our edit form UIs to open as modals. When you autogenerate CRUD screens in Budibase, you’ll also get _create row_ forms, but we don’t need these for our purposes.

For now, we’ll begin working on our _edit form_.

![](https://lh5.googleusercontent.com/bQD8Q1n6INR6oz-Gh-k83ltnodwrGvPxRKKzce3oRHNEF6dAf3UQZtBnG3SDQgHKIn1JCAii_pet8_JffAqeHyZJCo7AOcPLOSQOL0G2MaMds2rjPwmg_JtsGDAhR69bfoxmUF22zqJt_v5AYw =624x391)

The first thing we need to do is remove any fields for attributes that we don’t want users to edit through our form. So in this example, the non-contact details are _ID, category, description,_ and _billing_cycle._

![](https://lh3.googleusercontent.com/iYq6Jl0GqoXdCVBVrsuPqLaGEU03xRMSTFaHy5hwsz7dgTZJgFTO_92Rt8Ce7spV7F9HfSlQLHEaZP2F0O_7pYFmsRDVZ4aAVFuTYL3ZEusdS4zPZ36iADekQY4WyqyPnvTGtb9tnI_3OW8qaQ =624x391)

We now have a working form. However, if a user completes this, it will only alter an entry’s details in the combined table, not the two source tables.

Next, we need to create automations to update our source databases when a row changes in our combined table.

### 4. Automate queries

Recall that earlier we created an automation, so that when a row is updated in the _crm_business_information_ table, the relevant customer is queried in _invoice_customers_, and their details are updated in our _combined_customers_table._

Our app’s requirements are:

* Users can update customers’ contact information in both source databases using a single form interface.
* When one of the source databases is updated manually, the contact details in the other should be kept up to date.

So, we effectively need three similar automations:

* When a form is completed, both source databases are updated with the new contact details.
* When the _crm_business_information_ table is updated externally, the combined list and the _invoice_customers_ table should be updated to reflect this.
* If the _invoice_customers_ table is updated, the same should occur for the combined list, and _crm_business_information_.

First, we’ll deal with updating the source databases when a user completes our form. So, once again we’ll use an _updated row_ trigger. We then want to follow the same steps as earlier. So, for each source database, we’ll do the following:

1. Add a _query rows_ block, with a filter set to isolate the row with the same business name as our trigger.
2. Add an _update row_ block, to update the contact details, using our form data.

![](https://lh4.googleusercontent.com/JPDxUrNqh9AJnrcfe3umQcKL8XmV1tzwuTIOagpbBNqNZqNqrXTwk8uznM-CTe3jcacsG4hjPHckRcIUW7H596t0Tzyo6wkpUl0Ruq-FPF0mD-fUWPMyhncdvAnjvFJ2SAY4zvs0D0PbMnUIWA =624x403)

We use the ID from the output of the _query rows_ block, and the information provided from our original form trigger to update the relevant row:

![](https://lh4.googleusercontent.com/N32yMrYnkRKE0zr3YHRmgTdkUHg_KL3mzRR08tIZ5Xpkr-pAzOpyUEFqBxlEdRJkpZqislwly1whrtR-sTkj71p7vy0W_i14dv3qvIyMy18Ca2t_pafXarIzS8v1c6E0Y3wZ8rda1Sm4UJw6lA =624x405)

We’ve used JavaScript bindings to pass each individual attribute to our automation:

![](https://lh3.googleusercontent.com/lqNz8Lxc6I_aGNf_51IF6yVS1MuFSrg_4bILDg2RF3nUVt3jUxNInHnjkqUs82zAvw-G6OxDk8Z_FbsYbzX38kZbxGFFuZu83t2Fq0GshrQR5dlO9GXqMEdUoTaDbPKGjelpgRyMYH1VDGcsOQ =624x195)

Now, we can repeat the process by adding the same blocks for our _invoice_customers_ table.

![](https://lh5.googleusercontent.com/bbojjq13u6fgpS1230j_55qWEn4hHZwg9m1n9vHfkuWQI1e_vHJtHGBFXjdEzjbsSackid6US2mM14LmK0BpPCh9eujGy47oybJSzjpo-v4H3FNYLli3gaS1IBUTU8qDl1fy2_AVqJyaJuULRw =624x512)

We can test our automation to make sure that it works in real life. We’ll use our form to update one of our customers’ phone numbers, to _000-000-000_:

![](https://lh5.googleusercontent.com/WkCUo62fAN8FZYUTYHdSZRWhZ_abq0HJEJfG7LO1IHuB2yrJ1kMkbdh05MoThN0EGvgSSF8hoh0ufpILb50uaPNG5aOqhG70_tp82TP5XX9QwbhIotvRm9w913CxKdJ5KzaxzH_jx73coVZbdA =624x605)

Then, we’ll run queries in our source DMBSs to make sure it’s worked. First in our MySQL database

![](https://lh5.googleusercontent.com/1o3xCNLDxfKkX7wmDmWUyKSrj6gEVpbCxFMm6vRF2U2qKM5ef3K3GCZlA7qFxfBoW3L7Sgoo_D94cx5UX-jobRVwFGv6BsheQh3yDct7FHE6gxADLjTtyEpaOHQCGMrVjSKAv2Uov7xG8NXF7Q =624x201)

And then in our Postgres table too:

![](https://lh6.googleusercontent.com/uUR2XLeRf2TTG2P4T01o0ePIAe3b893lQjmSQmdBZMFZCFOxK5Uteyb6oIZcx4SJl7LznNyKtdcfKR9311HnHcTIDJqHNpEUctbaHmrkvUq2bMXxCBVmHTiQlmUC9Q9qSrEuXMAhQQJSklR0eg =624x233)

Now we can update our customers’ contact details in multiple databases, with a single form UI.

The final step is to create automation flows so that any time one of the databases is updated in their respective external platform, this change is reflected in the other.

For the bulk of the automation, we can use the exact same steps as above. We’d only have to modify it for each combination of tables.

There are a few different ways we can go about triggering this.

One option would be to decide which of our tables takes priority when there’s a discrepancy. We could then use a chronological trigger to periodically iterate through each row in both tables and update them accordingly.

Alternatively, we could use update row triggers to automatically update all relevant entries, when a change is made in any of our databases, in much the same way as we did using a trigger from our _combined_customers_table_.

## How can you ensure data from multiple sources is compatible?

Finally, a note on keeping things consistent when you integrate multiple databases. In all of our examples so far, we’ve been using small datasets, with relatively basic schemas. This won’t always be the case, of course.

Indeed, there will be many situations where values for similar attributes across different databases are not compatible.

In these cases, you’ll need to use _transformation_ to ensure the data is compatible.

For example, we’d need to do this if one of our existing data sources stored a particular attribute as a string and the other stored numerical values for the same variable. This could happen with customers’ phone numbers across different platforms.

We don’t necessarily want to alter the schema of our existing databases. After all, we may have other tools that rely on this data, and we don’t want to break these. Instead, we can use JavaScipt expressions to transform our values, any time they’re passed between databases.

In Budibase, you can create custom queries to perform transformations, or you can use custom JavaScript when binding any value while creating your automations.

Check out our ultimate guide to web app data sources for more information on transformations, and how they can be used when working with multiple databases.