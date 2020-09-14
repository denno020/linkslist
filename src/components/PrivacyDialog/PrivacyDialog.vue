<!--
  -  Links List - Create a list of links, and then share it!
  -  Copyright (c) 2019 Luke Denton
  -
  -  This program is free software: you can redistribute it and/or modify
  -  it under the terms of the GNU General Public License as published by
  -  the Free Software Foundation; either version 3 of the License, or
  -  (at your option) any later version.
  -
  -  This program is distributed in the hope that it will be useful,
  -  but WITHOUT ANY WARRANTY; without even the implied warranty of
  -  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  -  GNU General Public License for more details.
  -
  -  You should have received a copy of the GNU General Public License
  -  along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -->

<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <a href="#" slot="activator" class="white--text privacy-policy-link">Privacy Policy</a>

    <v-card>
      <v-card-title
        class="headline"
        :class="theme"
        primary-title
      >
        Privacy Policy
      </v-card-title>

      <v-card-text>
          <p>
              Luke Denton built the Links List app as
              a Freemium app. This SERVICE is provided by
              Luke Denton at no cost and is intended for use as
              is.
          </p>
          <p>
              This page is used to inform visitors regarding my
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use my Service.
          </p>
          <p>
              If you choose to use my Service, then you agree to
              the collection and use of information in relation to this
              policy. The Personal Information that I collect is
              used for providing and improving the Service. I will not use or share your information with
              anyone except as described in this Privacy Policy.
          </p>
          <p>
              The terms used in this Privacy Policy have the same meanings
              as in our Terms and Conditions, which is accessible at
              Links List unless otherwise defined in this Privacy Policy.
          </p>
          <p><strong>Information Collection and Use</strong></p>
          <p>
              For a better experience, while using our Service, I
              may require you to provide us with certain personally
              identifiable information, including but not limited to email. The information that
              I request will be retained on your device and is not collected by me in any way.
          </p>
          <div><p>
              The app does use third party services that may collect
              information used to identify you.
          </p>
              <p>
                  Link to privacy policy of third party service providers used
                  by the app
              </p>
              <ul>
                  <li>
                      <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer">Google
                      Analytics for Firebase</a>
                      <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">Google
                      Analytics</a>
                      <a href="https://docs.bugsnag.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Bugsnag</a>

                  </li>
              </ul>
          </div>
          <p><strong>Log Data</strong></p>
          <p>
              I want to inform you that whenever you
              use my Service, in a case of an error in the app
              I collect data and information (through third party
              products) on your phone called Log Data. This Log Data may
              include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service,
              the time and date of your use of the Service, and other
              statistics.
          </p>
          <p><strong>Cookies</strong></p>
          <p>
              Cookies are files with a small amount of data that are
              commonly used as anonymous unique identifiers. These are sent
              to your browser from the websites that you visit and are
              stored on your device's internal memory.
          </p>
          <p>
              This Service does not use these “cookies” explicitly. However,
              the app may use third party code and libraries that use
              “cookies” to collect information and improve their services.
              You have the option to either accept or refuse these cookies
              and know when a cookie is being sent to your device. If you
              choose to refuse our cookies, you may not be able to use some
              portions of this Service.
          </p>
          <p><strong>Service Providers</strong></p>
          <p>
              I may employ third-party companies and
              individuals due to the following reasons:
          </p>
          <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
              I want to inform users of this Service
              that these third parties have access to your Personal
              Information. The reason is to perform the tasks assigned to
              them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.
          </p>
          <p><strong>Security</strong></p>
          <p>
              I value your trust in providing us your
              Personal Information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method
              of transmission over the internet, or method of electronic
              storage is 100% secure and reliable, and I cannot
              guarantee its absolute security.
          </p>
          <p><strong>Links to Other Sites</strong></p>
          <p>
              This Service may contain links to other sites. If you click on
              a third-party link, you will be directed to that site. Note
              that these external sites are not operated by me.
              Therefore, I strongly advise you to review the
              Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
          </p>
          <p><strong>Children’s Privacy</strong></p>
          <p>
              These Services do not address anyone under the age of 13.
              I do not knowingly collect personally
              identifiable information from children under 13. In the case
              I discover that a child under 13 has provided
              me with personal information, I immediately
              delete this from our servers. If you are a parent or guardian
              and you are aware that your child has provided us with
              personal information, please contact me so that
              I will be able to do necessary actions.
          </p>
          <p><strong>Changes to This Privacy Policy</strong></p>
          <p>
              I may update our Privacy Policy from
              time to time. Thus, you are advised to review this page
              periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page.
          </p>
          <p>This policy is effective as of 2020-09-13</p>
          <p><strong>Contact Us</strong></p>
          <p>
              If you have any questions or suggestions about my
              Privacy Policy, do not hesitate to contact me at luke@linkslist.app.
          </p>
          <p>
              This privacy policy page was created at
              <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net</a>
              and modified/generated by
              <a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank" rel="noopener noreferrer">App Privacy
                  Policy Generator</a></p>


          <p>
          Google analytics is attached to the site, tracking user visits in order to gauge user interest.
        </p>
        <p>
          Bugsnag is also installed on the site, tracking errors that occur. It doesn’t capture any personal
          information, only information regarding a specific error, if one occurs.
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="theme"
          flat
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./PrivacyDialog.js"></script>
<style scoped src="./PrivacyDialog.css"></style>
