/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) 2020 Luke Denton
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

import validator from 'email-validator';
import { subscribe } from "../../utils/NetworkCalls";

export default {
  name: "Subscribe",
  data() {
    return {
      subscribeEmail: '',
      isValidEmail: true,
      isSending: false
    };
  },
  methods: {
    async handleSubscribe(e) {
      this.isValidEmail = validator.validate(this.subscribeEmail);
      if (!this.isValidEmail) {
        return;
      }

      this.isSending = true;
      const form = e.target;
      const isInterestedInPremium = form.querySelector('[name="isInterestedInPremium"]');
      const isSuccessfullySubscribed = await subscribe(this.subscribeEmail, isInterestedInPremium);
      this.subscribeEmail = '';
      this.isSending = false;

      this.$emit('afterSubmit', isSuccessfullySubscribed);
    }
  }
};
