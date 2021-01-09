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

import Analytics, { PAYPALME_INTERACTION__CHANGE_MIND } from "../../utils/Analytics";
import PrivacyDialog from '@/components/PrivacyDialog';
import TermsDialog from '@/components/TermsDialog';
import appConfig from '../../../application-configuration';

export default {
  name: "Footer",
  components: {
    PrivacyDialog,
    TermsDialog
  },
  computed: {
    theme() {
      return this.$store.getters['ui/theme'];
    },
    applicationVersion() {
      return appConfig.version;
    }
  },
  methods: {
    showPaypalMeSnackbar() {
      this.$store.dispatch('alerts/setIsPaypalMeVisible', { isVisible: true });
      Analytics.FirePaypalMeInteraction(PAYPALME_INTERACTION__CHANGE_MIND);
    }
  }
};
