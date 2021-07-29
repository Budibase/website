+++

date = "2021-07-25"
title = "July 2021 release - SSO, conditional UI, and more"
description = "The July release delivers on a number of popular requests from our community and contains four major updates, including; SSO, conditional UI, dark mode apps, SQL relationships."
author = "Joe Johnston"
images = ["/releases/2021/june/layout.png"]
draft = "false"

+++

 {{< youtube LJHA2K8loaw >}}

The July release delivers on a number of popular requests from our community and contains four major updates, including;

1. SSO - OIDC support
2. Conditional UI
3. Themeable apps
4. Create SQL relationships within the builder

---

### SSO - OIDC support

{{< figure src="https://res.cloudinary.com/daog6scxm/image/upload/v1626963732/July%20release/sso_dark_qbmhwl.webp" link="https://res.cloudinary.com/daog6scxm/image/upload/v1626963732/July%20release/sso_dark_qbmhwl.webp" alt="SSO" target="_blank" >}}

OIDC is an open standard and decentralized authentication protocol. As a user, you will have infinite possibilities for SSO, including:

- Active Directory! - popular request
- Auth0
- Azure
- Okta
- OneLogin
- It’s also possible to add your own authentication! 

I know many of you will understand the benefits of SSO, but here’s a quick recap:

- No more password management
- Auto-provisioning for users
- Minimize password security risks
- Quicker sign up/sign-in process for users
- Use your SSO provider to control who can access Budibase

The initial work for this feature was completed by community member, [Bernhard Hayden](https://github.com/burnoutberni). We’d like to publicly thank Bernhard for taking the time and effort to contribute to Budibase. The remaining work was completed by two new Budibase recruits; [Peter](https://github.com/PClmnt) and [Rory](https://github.com/Rory-Powell).

### Conditional UI

{{< figure src="https://res.cloudinary.com/daog6scxm/image/upload/v1627034993/July%20release/conditions_buayky.webp" alt="Conditional UI" link="https://res.cloudinary.com/daog6scxm/image/upload/v1627034993/July%20release/conditions_buayky.png" target="_blank">}}

When building apps with Budibase, you will now have the ability to change your UI depending on the state of the application. This new feature allows you to hide content from certain users, change the color of text depending on its value, and more.

### Dark mode apps 

{{< figure src="https://res.cloudinary.com/daog6scxm/image/upload/v1626964370/July%20release/app_themes_d2pope.webp" link="https://res.cloudinary.com/daog6scxm/image/upload/v1626964370/July%20release/app_themes_d2pope.png" target="_blank" alt="Dark mode apps" >}}

We strive to make it as easy as possible for you to build beautiful, user-friendly internal tools with Budibase. After this release, switch between 4 themes for your apps; lightest, light, dark, darkest, with just 2 clicks.

### SQL relationships

{{< figure src="https://res.cloudinary.com/daog6scxm/image/upload/v1626964845/July%20release/sql_relationships_udypsj.webp" alt="SQL relationships" link="https://res.cloudinary.com/daog6scxm/image/upload/v1626964845/July%20release/sql_relationships_udypsj.png" target="_blank">}}

Import tables from your SQL databases (with just 1 click), then map relationships between your tables within Budibase. This allows you to utilize the power of relationships within your Budibase applications. 

## Additional updates

- Unauthenticated SMTP
- Budibase drawer UI improvements
- [Layout update](https://github.com/Budibase/budibase/pull/1969)
- Lucene search improvements

## Coming up in the August release

- Dynamic forms and a Wizard component
- A better developer experience (JavaScript, transformers, and auto-complete)
