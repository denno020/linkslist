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

import { auth } from "@/utils/FirebaseListeners";
import { Fragment } from 'vue-fragment';
import Analytics, { AUTHENTICATION_LOGIN, AUTHENTICATION_SIGNUP, AUTHENTICATION_SHOWN } from "@/utils/Analytics";
import { createUserRecord } from '@/utils/NetworkCalls';

const initialErrorObject = {
  general: false,
  emailInvalid: false,
  passwordEmpty: false,
  passwordMismatch: false,
  message: ''
};

export default {
  name: "Authentication",
  components: {
    Fragment
  },
  data() {
    return {
      dialog: false,
      displayLogin: true, // Clicking the Login/Sign Up button will always display the Login form first, by default
      displayCreate: false,
      isAuthenticating: false,
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        ...initialErrorObject
      }
    };
  },

  watch: {
    // When the dialog property changes, if the value is now false, we're assuming the modal has been closed.
    // In that case, reset the form values
    dialog(value) {
      if (value === false) {
        this.resetForm();
      }

      if (value === true) {
        Analytics.FireAuthentication(AUTHENTICATION_SHOWN);
      }
    }
  },

  methods: {
    resetErrors() {
      this.error = {
        ...initialErrorObject
      };
    },

    validateInputs() {
      this.resetErrors();

      if (this.email === '') {
        this.error.emailInvalid = true;
      }

      if (this.password === '') {
        this.error.passwordEmpty = true;
      }
    },

    handleSignIn() {
      this.validateInputs();
      // Allow at least both sign up fields to be checked before reporting an error, so a user isn't shown
      // one error at a time, but as many as possible, so they can rectify those at once
      if (this.error.emailInvalid || this.error.passwordEmpty) {
        return;
      }

      this.isAuthenticating = true;
      Analytics.FireAuthentication(AUTHENTICATION_LOGIN);
      auth.signInWithEmailAndPassword(this.email, this.password).then((cred) => {
        const { user } = cred;
        this.$store.dispatch('user', { user });

        this.isAuthenticating = false;
        this.dialog = false;
      }).catch((err) => {
        this.isAuthenticating = false;
        this.error.general = true;
        this.error.message = err.message;
      });

    },

    handleCreateAccount() {
      this.validateInputs();

      // Allow at least both sign up fields to be checked before reporting an error, so a user isn't shown
      // one error at a time, but as many as possible, so they can rectify those at once
      if (this.error.emailInvalid || this.error.passwordEmpty) {
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.isAuthenticating = false;
        this.error.passwordMismatch = true;
        return;
      }

      this.isAuthenticating = true;
      Analytics.FireAuthentication(AUTHENTICATION_SIGNUP);

      auth.createUserWithEmailAndPassword(this.email, this.password).then((cred) => {
        const { user } = cred;
        this.$store.dispatch('user', { user });
        createUserRecord(user.uid).then(() => {
          this.isAuthenticating = false;
        });
      }).catch((err) => {
        this.isAuthenticating = false;
        this.error.general = true;
        this.error.message = err.message;
      });
    },

    resetForm() {
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
};
