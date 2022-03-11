+++
author = "Michael Drury"
date = 2022-03-11T00:00:00Z
description = "In this example, we will build a simple dashboard, using Budibase and Grafana, that allows users to view sales data."
draft = true
images = ["https://res.cloudinary.com/daog6scxm/image/upload/v1647005709/cms/Untitled_design_8_bq5um4.png"]
profilePic = "https://res.cloudinary.com/daog6scxm/image/upload/v1646932017/cms/mikedrury_evnd4n.jpg"
title = "Building a dashboard with Budibase and Grafana "

+++
![](https://res.cloudinary.com/daog6scxm/image/upload/v1647005709/cms/Untitled_design_8_bq5um4.png)

In this example, we will build a simple dashboard that allows users to view sales records in Grafana using data from Budibase.

We will use the power of the Budibase backend and its public API to connect to a Postgres database and display sales records on a Grafana dashboard. Rather than defining your database connection, table queries, security, REST API in Grafana, we can instead utilize Budibase to simplify our backend. Using Budibase as our backend, we only need to build a few endpoints to make API calls.

## Pre-requisites

For this walkthrough, you will need to install

* [Docker](https://docs.budibase.com/docs/docker-compose)
* [Docker Compose](https://docs.budibase.com/docs/docker-compose)
* [Node](https://nodejs.org/en/)
* [Budibase (self-hosted install)](https://docs.budibase.com/docs/hosting-methods)

## Getting started

The first step is getting the example from [Github](https://github.com/Budibase/budibase/tree/examples/nextjs/examples/grafana-dashboard) . We will need this to set up our database and our Grafana dashboard. You can download the example by either; downloading the Budibase repository as a zip, or checking it out using Git. For the rest of this example, we will be working from the [examples/grafana-dashboard](https://github.com/Budibase/budibase/tree/examples/nextjs/examples/grafana-dashboard) directory.

For this example, we have provided an example database. This is run using Docker Compose and can be found in the “_db/_” directory - start the database using the command “_docker-compose up_”. Now that we have a Postgres database to work from we can jump into Budibase!

![](https://res.cloudinary.com/daog6scxm/image/upload/v1647003117/cms/1_pnkeuw.png)

## Budibase setup

Open up your Budibase builder - if running Budibase locally this will be accessible at: http://localhost:10000. You then need to create a new app, call the app “_sales_” - this is the app that we are going to use to configure a backend for our sales database.

Once the app has been created we will set up a new Postgres datasource - the configuration should look something like below.

![](https://res.cloudinary.com/daog6scxm/image/upload/v1647003143/cms/2_bitxgr.png)

All of the settings for our database should be the defaults assumed by Budibase, using the default :

database:

    Postgres 

user/password:

    root

port:

    5432

The only thing you will need to change is the host depending on where your Budibase installation is running. If it is running on your local machine, using Docker compose, you can use:

Windows/Mac:

    host.docker.internal 
    

Linux:

    172.17.0.1
    

f your Budibase installation is running remotely, or you are using the Budibase Cloud, you will need to make the database publicly available.

Once the database has been successfully imported to Budibase you’ll find that the two tables “_sales_” and “_sales_people_” have been imported to the app, as below.

![](https://res.cloudinary.com/daog6scxm/image/upload/v1647003172/cms/3_tnvyud.png)

The last thing that we need to do is set up a relationship between the two tables, there is a reference in each sale to the salesperson that made the sale and we want Budibase to be aware of this. To do this click the “_Define relationship_” button on the Postgres datasource screen, and fill out the form as follows.

![](https://res.cloudinary.com/daog6scxm/image/upload/v1647003194/cms/4_ldrxwh.png)

Be careful to fill out the form exactly as shown, making sure to change the “to table column” to “_sales_person_”.

Once this is set up we now have a backend for our Postgres database, the Postgres tables will be available through the Budibase API!

## Setting up the Grafana dashboard

The next step is to insert all of the relevant information about your Budibase system into the Grafana dashboard. You will need to retrieve your API key from Budibase, which can be found on the portal, amongst your user settings.

![](https://res.cloudinary.com/daog6scxm/image/upload/v1647003260/cms/5_dj9epp.png)

From here you can click “_View API key_” and copy the API key from within the menu that opens.