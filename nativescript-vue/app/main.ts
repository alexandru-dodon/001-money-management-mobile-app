import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

import App from './App.vue'

if (TNS_ENV === "development") {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
// @ts-ignore
Vue.config.suppressRenderLogs = true;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;

new Vue({
  render: h => h("frame", [h(App)])
}).$start();
