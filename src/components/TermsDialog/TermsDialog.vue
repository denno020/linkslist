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
    <a href="#" slot="activator" class="white--text privacy-policy-link">Terms and Conditions</a>

    <v-card>
      <v-card-title
        class="headline"
        :class="theme"
        primary-title
      >
        Terms and Conditions
      </v-card-title>

      <v-card-text>
          <p>
              By downloading or using the app, these terms will
              automatically apply to you – you should make sure therefore
              that you read them carefully before using the app. You’re not
              allowed to copy, or modify the app, any part of the app, or
              our trademarks in any way. You’re not allowed to attempt to
              extract the source code of the app, and you also shouldn’t try
              to translate the app into other languages, or make derivative
              versions. The app itself, and all the trade marks, copyright,
              database rights and other intellectual property rights related
              to it, still belong to Luke Denton.
          </p>
          <p>
              Luke Denton is committed to ensuring that the app is
              as useful and efficient as possible. For that reason, we
              reserve the right to make changes to the app or to charge for
              its services, at any time and for any reason. We will never
              charge you for the app or its services without making it very
              clear to you exactly what you’re paying for.
          </p>
          <p>
              The Links List app stores and processes personal data that
              you have provided to us, in order to provide my
              Service. It’s your responsibility to keep your phone and
              access to the app secure. We therefore recommend that you do
              not jailbreak or root your phone, which is the process of
              removing software restrictions and limitations imposed by the
              official operating system of your device. It could make your
              phone vulnerable to malware/viruses/malicious programs,
              compromise your phone’s security features and it could mean
              that the Links List app won’t work properly or at all.
          </p>
          <div><p>
              The app does use third party services that declare their own
              Terms and Conditions.
          </p>
              <p>
                  Link to Terms and Conditions of third party service
                  providers used by the app
              </p>
              <ul>
                  <li>
                      <a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noopener noreferrer">Google Analytics
                      for Firebase</a>
                  </li>
                  <li>
                      <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer">Google Analytics</a>
                  </li>
                  <li>
                      <a href="https://docs.bugsnag.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer">Bugsnag</a>
                  </li>
              </ul>
          </div>
          <p>
              You should be aware that there are certain things that
              Luke Denton will not take responsibility for. Certain
              functions of the app will require the app to have an active
              internet connection. The connection can be Wi-Fi, or provided
              by your mobile network provider, but Luke Denton
              cannot take responsibility for the app not working at full
              functionality if you don’t have access to Wi-Fi, and you don’t
              have any of your data allowance left.
          </p>
          <p></p>
          <p>
              If you’re using the app outside of an area with Wi-Fi, you
              should remember that your terms of the agreement with your
              mobile network provider will still apply. As a result, you may
              be charged by your mobile provider for the cost of data for
              the duration of the connection while accessing the app, or
              other third party charges. In using the app, you’re accepting
              responsibility for any such charges, including roaming data
              charges if you use the app outside of your home territory
              (i.e. region or country) without turning off data roaming. If
              you are not the bill payer for the device on which you’re
              using the app, please be aware that we assume that you have
              received permission from the bill payer for using the app.
          </p>
          <p>
              Along the same lines, Luke Denton cannot always take
              responsibility for the way you use the app i.e. You need to
              make sure that your device stays charged – if it runs out of
              battery and you can’t turn it on to avail the Service,
              Luke Denton cannot accept responsibility.
          </p>
          <p>
              With respect to Luke Denton’s responsibility for your
              use of the app, when you’re using the app, it’s important to
              bear in mind that although we endeavour to ensure that it is
              updated and correct at all times, we do rely on third parties
              to provide information to us so that we can make it available
              to you. Luke Denton accepts no liability for any
              loss, direct or indirect, you experience as a result of
              relying wholly on this functionality of the app.
          </p>
          <p>
              At some point, we may wish to update the app. The app is
              currently available on – the requirements for
              system(and for any additional systems we
              decide to extend the availability of the app to) may change,
              and you’ll need to download the updates if you want to keep
              using the app. Luke Denton does not promise that it
              will always update the app so that it is relevant to you
              and/or works with the version that you have
              installed on your device. However, you promise to always
              accept updates to the application when offered to you, We may
              also wish to stop providing the app, and may terminate use of
              it at any time without giving notice of termination to you.
              Unless we tell you otherwise, upon any termination, (a) the
              rights and licenses granted to you in these terms will end;
              (b) you must stop using the app, and (if needed) delete it
              from your device.
          </p>
          <p><strong>Changes to This Terms and Conditions</strong></p>
          <p>
              I may update our Terms and Conditions
              from time to time. Thus, you are advised to review this page
              periodically for any changes. I will
              notify you of any changes by posting the new Terms and
              Conditions on this page.
          </p>
          <p>
              These terms and conditions are effective as of 2020-09-13
          </p>
          <p><strong>Contact Us</strong></p>
          <p>
              If you have any questions or suggestions about my
              Terms and Conditions, do not hesitate to contact me
              at luke@linkslist.app.
          </p>
          <p>
              This Terms and Conditions page was generated by
              <a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank" rel="noopener noreferrer">App Privacy
                  Policy Generator</a></p>
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

<script src="./TermsDialog.js"></script>
<style scoped src="./TermsDialog.css"></style>
