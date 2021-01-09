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

import Analytics, { PAYPALME_INTERACTION__DISMISS, PAYPALME_INTERACTION__SUPPORT } from "../../utils/Analytics";

export default {
  name: "PayPalMe",
  data () {
    return {
      y: 'bottom',
      x: 'right',
      mode: '',
      timeout: 0
    };
  },
  computed: {
    isVisible: {
      get() {
        return this.$store.getters['alerts/isPaypalMeVisible'];
      },
      set(isVisible) {
        this.$store.dispatch('alerts/setIsPaypalMeVisible', { isVisible });
      }
    },
    theme() {
      return this.$store.getters['ui/theme'];
    },
  },
  methods: {
    handleClickPaypalMeLink() {
      this.isVisible = false;
      Analytics.FirePaypalMeInteraction(PAYPALME_INTERACTION__SUPPORT);
    },
    handleDismissPaypalMeLink() {
      this.isVisible = false;
      Analytics.FirePaypalMeInteraction(PAYPALME_INTERACTION__DISMISS);
    }
  }
};
