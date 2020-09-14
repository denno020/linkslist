# 1.5.0

**User Accounts!**

Links List now has the ability to create a user account.

Having a user account will allow you to subscribe to lists, which will stop a reference to a list in your account page.

It will also allow you to enable premium features that will be coming out very shortly!

# 1.4.0

### Features

**Set tab title to match title of list**

Navigating through multiple Links Lists across multiple tabs is now much easier, as the tab title will display the title of the list, rather than the generic "Links List"

**Updated Loading State**

There was always that second or so of default UI being display whilst a saved list was being loaded. That's no longer the case, as the UI will display to indicate that your list is loading! Much better

### Under the hood

**Change underlying package versions**

This hopefully won't affect the working application, but it makes developing it a little bit easier.

# 1.3.2

**Google Adsense**

# 1.3.1

### Bug Fix

**Fixed the Frequently Asked Questions modal header colour**

Now the title can actually be read!

# 1.3.0

### Features

**Ability to colour code lists**

Each list can now be given its own colour, to better help identify them

**Ability to give the list a name and a description**

Not only can the list's colour be changed for easy identification, its name *and* description can also be updated.

To do this, hover your mouse over the "Links List" title, and then click on the pencil button that appears

**Sync data to local storage**

Some people had issues with their list being "forgotten" after they refreshed. To avoid those issues in the future, all changes to a list will be saved to local storage until a URL is generated, at which point it will be persisted in the database.

# 1.2.1

**Added a loading indicator while the app generates an ID**

Feedback is always nice when network requests are happening, so now the Get Link button will display a loading graphic while the application is generating an ID

**Added a FAQ**

Along with a single, lonesome question/answer

**Added performance monitoring**

One for me really, I will now be able to keep track of how long it takes to generate URL ID's

# 1.2.0

# 1.1.0

### Feature

**Automatically update the browser URL after a URL has been generated for a link**

This will ensure that once a list has been saved, the user won't be able to accidentally lose that list
by navigating away from the page. It will still be in their browser history.

# 1.0.0

**Initial Release**
