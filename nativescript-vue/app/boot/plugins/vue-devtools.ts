import VueDevtools from 'nativescript-vue-devtools';

import { PluginContext } from '../PluginContext';

export default async function({ Vue, config }: PluginContext) {
  if (config.environment === "development") {
    Vue.use(VueDevtools);
  }
}
