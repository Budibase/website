---
date: "2023-01-01"
title: Environments
description: Budibase's API integration platform helps you integrate with your APIs and build internal apps, forms, admin panels, and more in minutes.
draft: "false"
type: platform/changelog
layout: single
image: "/v1660060867/ui/CleanShot_2022-08-09_at_17.00.24_2x_rfvxhq.png"
image_alt: Environments UI
---


hello 
Collapsible sidebar
You can now fully collapse Linear's sidebar to focus on a specific issue, project, or view.

To experience this zen, press the [ keyboard shortcut, click on the sidebar border, or search "Collapse" in the command menu.

To expand a collapsed sidebar, use the [ shortcut again, click on the top-left sidebar icon, or search "Expand" in the command menu.

Polishing Season wrap
The end of 2022 also marked the end of our first Polishing Season. In total, we polished 228 different aspects of the app, ranging from UI inconsistencies and bugs to improved animations and new keyboard shortcuts. Many of these fixes were flaws and points of friction that you reported. Thank you!

You can find a full list with all fixes and improvements on the Polishing Season website.

Improvements & Fixes

[API] Added scope to projects in the API

Added a feature to collapse link attachments on issues. Collapsing and uncollapsing can be accomplished by clicking the toggle icon or using Ctrl Shift L

Improved the behavior of nested checkboxes. Nested checkboxes can now be checked and unchecked independently from their parent. Checking a parent checkbox will no longer automatically check all of its children

Improved select and filter functionality in workspace members settings page

Added the ability to use Set due date and Set parent issue shortcuts in the fast issue creation modal
When marking an issue as a duplicate of another, any related issues will now reference the canonical issue
We now support the Intercom integration for users on the app.eu.intercom.com and app.au.intercom.com domains in addition to the default app.intercom.com domain
Revised our DPA (data processing agreement) and made it available through the command menu
Issue creation can now be undone with Cmd/Ctrl Z, as can editing an issue title and description
Label filters now show the label group and are sorted based on the group
Adding links to issues now counts as updating the issue and will reset the auto-archive clock
Labels in label groups can now be selected by using and Shift Enter
You can now navigate directly to team setting pages from the command menu
Archived issue dependencies will now correctly load
Fixed a bug where we didn’t always show an accurate timestamp for when a GitHub pull request attached to an issue was closed
Fixed a bug in the Front integration where we would post internal notes multiple times per conversation if the linked issue was attached to multiple conversations
Fixed a bug where incorrect issue statuses would be shown in command menu search results
Fixed a regression where long lines of text without whitespace would not wrap properly in comments without closing the contextual menu
The text toolbar is now better positioned and does not appear beneath scrollbars on Windows
Adding a label to a group is now undoable
Fixed a problem with workspace issue templates showing incorrect available labels
Improved filtering by Height attachments to match more issues
Filtering context menus now also works when a sub-menu is open
Fixed some links incorrectly opening a new desktop app window
Removed a duplicate header for some project notifications
Fixed a redirect path after a document is deleted to now redirect back to the corresponding project
Minor changes to copy icons for consistency throughout the app. The same icons are now used for the same copy action
Esc now correctly un-zooms an image in the issue creation modal
Opening the emoji picker will now always focus the search input
Added preview tooltips for project and document mentions in the description and comments
Command and contextual menus now always have selected items sorted at the top of the list
When selecting a sub-action in the command menu, we now correctly set the selection to the first element in the list
Fixed a bug preventing configuring Slack project notifications when only the channel for project updates was set
Added notifications for when you are added to a project as member or lead
Multi-select contextual menus now have checkboxes that can be used to toggle the entries without closing the menu. Shift Enter can also be used to toggle the entry
The open project command (O P) now shows the current issue’s project and makes it easier to navigate to issue’s project using keyboard shortcut
When changing the labels of an issue, the contextual menu no longer re-orders instantly, but waits until the contextual menu is re-opened
Improved auto-linking of issue identifiers in comments and descriptions
Added tooltips to clarify numbers appearing in Roadmap Details
Fixed a problem where backgrounded Chrome tabs could stall loading of the client
Removed a separate Edit button on issue view. The Edit action is still available in the … menu or using the E shortcut
Fixed a bug where creating issues from a view filtered by a label group would cause an error
[Desktop] Windows application now automatically hides the menu bar. It can be toggled on using Alt.
Active cycle has been renamed to current cycle to prevent confusion with active issues in the sidebar
We now return a more informative message to users on GitHub connect errors
Fixed an error with the Zendesk integration causing it not to load when the viewed ticket only had attachments and no content

<!--more--> 