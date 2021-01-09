/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) Luke Denton
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/** Update post template
 {
    release: '',
    title: '',
    slug: 'release-',
    displayDate: '',
    dateStamp: '',
    author: 'Luke Denton',
    html: `

`
  }
 */

const updates = [
  {
    release: '1.6.0',
    title: 'New Year, New Improvements',
    slug: 'new-year-new-improvements-1-6-0',
    displayDate: '9th January 2021',
    dateStamp: '2021-01-09',
    author: 'Luke Denton',
    html: `
      <h4>Features</h4>
      <ul>
        <li>
          <strong>Title and description now save when field is blurred</strong><br>
          Previously you had to press the enter key to save the custom title or description. This wasn't the most obvious UX, so it's now been updated so that all you have to do it click/tab out of the editing field, and it will save
        </li>
        <li>
          <strong>Duplicate URL detection</strong><br>
          Do you have a lot of URL's in your list and aren't sure if you've saved one? Now when you try to add a link, the app will check to make sure it's not already in the list.
          </li>
      </ul>
      <h4>Under the hood</h4>
      <ul>
        <li>Fixed the alignment of the loading UI to be at the top of the container, not center</li>
        <li>Improved the responsive design of the app. It isn't perfect, but it works</li>
        <li>Removed an odd white bar that was displayed at the bottom of each list item</li>
        <li>Added cookies acceptance and updated privacy policy</li>
        <li>Fixed a bug that would show "Links restored from local cache" even when there was nothing actually restored</li>
      </ul>
`
  },
  {
    release: '1.5.0',
    title: 'User Accounts',
    slug: 'user-accounts-1-5-0',
    displayDate: '14th September 2020',
    dateStamp: '2020-09-14',
    author: 'Luke Denton',
    html: `
      <h4>Features</h4>
      <ul>
        <li>
          <strong>User Accounts</strong><br>
          You can now create an account on Links List! With this account, you'll be able to subscribe to lists (which will
          store a link to that list within your List Subscriptions), and any list that is created while you're logged in
          will be associated with your account. Lists associated with your account will be eligible for premium features.<br>
          Some premium features that I'm working on are; lockable lists, private lists, custom list ID's, customization of links'
          names/urls, and more!
        </li>
      </ul>
`
  },
  {
    release: '1.4.0',
    title: 'Landing page, and a couple of features',
    slug: 'release-1-4-0',
    displayDate: '13th April 2020',
    dateStamp: '2020-04-13',
    author: 'Luke Denton',
    html: `
      <h4>Features</h4>
      <ul>
        <li>
          <strong>Display loading state while fetching list details</strong><br>
          Previously, when loading a list, the UI would just display a new list before all your list items loaded in. We
          though we could do better than that, so now the UI will display a temporary loading state whilst your list items
          are being fetched from the database
        </li>
        <li>
          <strong>Tab title matches list title</strong><br>
          Do you have multiple Links Lists open in multiple tabs? Bet you found it hard to move between tabs without having to remember
          exactly which position each list was in. That is now a problem of the past, as the tab title will display the title of your list
          </li>
      </ul>
      <h4>Under the hood</h4>
      <ul>
        <li>
          <strong>Updated to the latest version of underlying packages</strong><br>
          This hopefully won't affect the working application, but it makes developing it a little bit easier.
        </li>
      </ul>
`
  },
  {
    release: '1.3.1',
    title: 'Bug Fix',
    slug: 'release-1-3-1',
    displayDate: '28th October 2019',
    dateStamp: '2019-10-28',
    author: 'Luke Denton',
    html: `
      <h4>Bugs</h4>
      <ul>
        <li><strong>FAQ Header Colour</strong><br>Fixed the header colour so the text can actually be read!</li>
      </ul>
`
  },

  {
    release: '1.3.0',
    title: 'Customization!',
    slug: 'release-1-3-0',
    displayDate: '20th October 2019',
    dateStamp: '2019-10-20',
    author: 'Luke Denton',
    html: `
      <h4>Features</h4>
      <ul>
      <li><strong>Colour code lists</strong><br>Each list can now be given its own colour. Use that to help identify lists, or just pick your favourite colour</li>
      <li>
        <strong>Change name and description</strong><br>
        Along with changing the colour, the name and description of a list can be edited to further identify a list<br>
        To do this, hover your mouse over the "List List" title or the description, and then click on the pencil button that appears. Hit enter when finished to save your new title/description
      </li>
      <li>
        <strong>Sync data to local storage</strong><br>
        Some people had issues with their list being "forgotten" after the refreshed. To avoid these situations in the 
        future, all changes to a list will be saved to local storage until a URL is generated, at which point it will be persisted in the database.
      </li>
      </ul>
`
  },

  {
    release: '1.2.1',
    title: 'Performance Monitoring and UI Feedback',
    slug: 'release-1-2-1',
    displayDate: '10th August 2019',
    dateStamp: '2019-08-10',
    author: 'Luke Denton',
    html: `
      <h4>Features</h4>
      <ul>
        <li>
          <strong>Add a loading indicator while a link is being generated</strong><br>
          Feedback is always nice when network requests are happening, so now the Get Link button will display a loading graphic while the application is generating an ID
        </li>
        <li>
          <strong>Add a FAQ</strong><br>
          Along with a single, lonesome question & answer
        </li>
      </ul>
      <h4>Under the hood</h4>
      <ul>
        <li>
          <strong>Performance monitoring</strong><br>
          One for us really; we will now be able to keep track of how long it takes to generate URL ID's
        </li>
      </ul>
`
  },

  {
    release: '1.2.0',
    title: 'Bug Fixes',
    slug: 'release-1-2-0',
    displayDate: '1st June, 2019',
    dateStamp: '2019-06-01',
    author: 'Luke Denton',
    html: `
    <h4>Bugs</h4>
    <ul>
      <li>Fixed issue with the height of the footer on mobile</li>
    </ul>
`
  },

  {
    release: '1.1.0',
    title: 'Usability improvements',
    slug: 'release-1-1-0',
    displayDate: '18th May 2019',
    dateStamp: '2019-05-18',
    author: 'Luke Denton',
    html: `
    <ul>
      <li>
        <strong>Automatically update the browser URL after a URL has been generated for a list</strong><br>
        This will ensure that once a list has been saved, the user won't be able to accidentally lose that list by navigating away from the page. It will still be in their browser history.
      </li>
    </ul>
`
  },

  {
    release: '1.0.0',
    title: 'The first release of Links List!',
    slug: 'release-1-0-0',
    displayDate: '1st May 2019',
    dateStamp: '2019-05-01',
    author: 'Luke Denton',
    html: `
    <h4>Features</h4>
    <ul>
      <li>
        Scrape information of links added
      </li>
      <li>
        Paste in multiple links at a time
      </li>
      <li>
        Change display density of the list
      </li>
    </ul>
`
  }
];

module.exports = updates;
