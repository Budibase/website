---
title: Design Beautiful Apps With the New 'Grid' Drag & Drop Layout
description: Introducing an easier way to build interfaces with Budibase with the new Grid layout. The Grid layout offers dynamic drag-and-drop functionality, letting you move and resize components across your screen with ease.
type: blog
layout: single
profilePic: https://res.cloudinary.com/daog6scxm/image/upload/v1704878154/Photos/headshot_aw4uce.png
image: 
images:
  - 
date: "2024-08-24"
author: Jamie Birss
draft: false
---
Introducing an easier way to build interfaces with Budibase with the new Grid layout. The Grid layout offers dynamic drag-and-drop functionality, letting you move and resize components across your screen with ease. Creating powerful and visually appealing applications in minutes has never been easier. 

You can now drag components around your screen and quickly resize them using the anchors on the corners and sides. 

{{< vimeo id="1003122129" title="Drag and Drop" >}}


As shown above, some components, such as tables, expand to fill the full container space. However, with components such as buttons, where we want the size to remain consistent and fixed, it doesn’t make sense for them to expand to all edges of the container. Components such as these are instead positioned inside the container and can be moved around and aligned as you see fit:

{{< vimeo id="1003122161" title="Button" >}}

All new screens and containers will use the new Grid layout by default. If you want to toggle between the old Flex Box layout, and the new Grid layout, you can do so in your settings. Depending on your preference, the layout can be applied at either the screen or container level. 

{{< vimeo id="1003122188" title="Select Grid" >}}

You can now also overlap components, without restrictions, opening up new opportunities for screen design in Budibase. 

### When should I use the new Grid layout vs the old Flex Box layout?
Both systems have pros and cons. The Grid layout gives you more control over how your screens are formatted and, put simply, is the easier and faster way to build interfaces in Budibase. However, it doesn’t come without its limitations. Most notably, its mobile support isn’t automatically responsive like it is for Flex Box. 

That isn’t to say you can’t make mobile screens with Grid - it just means you have to check and make adjustments manually, which now, thanks to the rest of the benefits from the Grid template, is extremely straightforward. 

{{< vimeo id="1003122176" title="Mobile" >}}

Our recommendation is to use the Grid layout by default. That said, if your application is heavily dependent on the mobile experience and has grown to the point where manually managing/designing all of the mobile and desktop screens is unrealistic, then Flex Box may be better suited to your needs.  

We hope you enjoy the flexibility offered by the new layout, and try it yourself. If you’d like more information about the Grid layout, with some more specifics into how it works technically, then please [refer to our documentation](https://github.com/Budibase/budibase/pull/14321).

 
 