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

/* global gtag */

export const CATEGORY_FEATURE = 'features';
export const CATEGORY_PAYPALME = 'paypal_me';
export const CATEGORY_AUTHENTICATION = 'authentication';

export const PAYPALME_INTERACTION__DISMISS = 'dismiss'; // User chooses to dismiss the snackbar
export const PAYPALME_INTERACTION__SUPPORT = 'support'; // User clicks on the PayPal.me link
export const PAYPALME_INTERACTION__CHANGE_MIND = 'change_mind'; // User (presumably having hidden the snackbar) is deciding to view it again

export const AUTHENTICATION_SIGNUP = 'signup';
export const AUTHENTICATION_LOGIN = 'login';
export const AUTHENTICATION_LOGOUT = 'logout';
export const AUTHENTICATION_SHOWN = 'shown';

export default class Analytics {
    /**
     * Fire the user timing request to GA
     *
     * @param {string} name     The name of the timing event
     * @param {number} time     The timing value
     * @param {string} category The category of the timing event
     *
     * @returns {null}
     */
    static FireTiming(name, time, category = 'Performance') {
        if (window.location.hostname === 'localhost') {
            console.log(name, time, category);
            return;
        }

        gtag('event', 'timing_complete', {
            'name' : name,
            'value' : time,
            'event_category' : category
        });
    }

    /**
     * Track when users add a custom font to the app
     * This doesn't track what the custom font is, just that one was added
     *
     * @param {string} feature The name of the feature that was used. Title case, with spaces
     * @param {string|Boolean} value   The value the feature is set to
     *
     * @returns {null}
     */
    static FireFeatureUsed(feature, value) {
        Analytics.FireEvent(value, {
            'event_category': CATEGORY_FEATURE,
            'event_label': feature
        });
    }

    /**
     * Send event to GA to track if people are dismissing the paypal.me support link, or if they're showing it
     *
     * @param {Boolean} isDismissed True = notice was dismissed. False = PayPal.me link was clicked
     *
     * @returns {null}
     */
    static FirePaypalMeInteraction(interaction) {
        Analytics.FireEvent(interaction, {
            'event_category': CATEGORY_PAYPALME
        });
    }

    static FireAuthentication(type) {
        Analytics.FireEvent(type, {
            'event_category': CATEGORY_AUTHENTICATION
        });
    }

    /**
     * Fire an event on Google Analytics
     *
     * @param {string|Boolean} eventAction  The 'action' of the event to creation
     * @param {Object} eventOptions Extra options to send with the event action
     *
     * @returns {null}
     */
    static FireEvent(eventAction, eventOptions) {
        if (window.location.hostname === 'localhost') {
            console.log(eventAction, eventOptions);
            return;
        }

        gtag('event', eventAction, eventOptions);
    }
}
