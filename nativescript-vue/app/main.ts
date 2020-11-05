import Vue from 'nativescript-vue'

import App from './App.vue'
import { Config } from './boot/Config';
import { attachPlugins } from './boot/attachPlugins';

async function main(config: Config) {
  await attachPlugins(Vue, config);
  
  new Vue({
    render: h => h("frame", [h(App)])
  }).$start();
}

main({
  environment: TNS_ENV || "development",
  plugins: [
    "vue-devtools",
    "suppress-noise",
    "design-system"
  ]
});
