+++
date = 2022-04-24T23:00:00Z
description = "We take your privacy serious at Budibase. To learn more, please visit our privacy policy page. You will find out everything we do with data - which isn't much."
layout = "single"
title = "Google OAuth Homepage"
type = "legal"

+++
## Accurately Represents the Apps Identity

Budibase is an open source low-code platform, and the easiest way to build business apps that empower teams and improve productivity.

It allows users to build applications with a visual builder and deploy them for use by members of their organisation. Budibase can be used in our cloud offering or completely self hosted with our docker and kubernetes offerings.

The budibase cloud platform (which is the app that makes use of the limited scopes) is accessible at [https://account.budibase.app/](https://account.budibase.app/ "https://account.budibase.app/") - from here, users can sign in to the budibase platform.

## What Budibase Does with Google User Data

When a user connects the google sheets integration, we will store their refresh token and use that to fetch new access tokens for interactions with the google sheets API. The refresh token is the only piece of information we store from the google sheets integration. We do not store the actual information from their google sheets spreadsheets in our database, and only display the results directly from the API on the screen.

The budibase google sheets integration allows users to:

* Create rows in their spreadsheets
* Delete rows in their spreadsheets
* Create new google spreadsheets
* Delete google spreadsheets

Every one of these operations goes directly through the google sheets API and the OAuth API. We do not save the access token, and fetch it directly from google by using the refresh token that we have stored in the database once the user authenticates their google sheets integration with google and passes the Oauth consent screen.

## How Budibase Enhances User Functionality

Budibase enhances user functionality by allowing people to create CRUD applications using their google sheets spreadsheets as a backend. They can create full visual experiences to manage data stored in a google sheet spreadsheet, as well as create automations that can read and write data from google sheets in response to time based or user executed events.

Users can also use the budibase RBAC system to enforce a layer of role based security over the top of every sheet in their google sheets spreadsheets, preventing particular users from reading or writing data in google sheets through budibase applications.

## Budibase Privacy Policy

[https://budibase.com/privacy/](https://budibase.com/privacy/ "https://budibase.com/privacy/")