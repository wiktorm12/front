import Vue from 'vue';
import router from './router.js';
import App from './App.vue';
import store from "./store";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha, { siteKey: '6LfTrfQZAAAAAKp7IL2AcThZ5ixlxi2roLxGqk4_' })

import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
