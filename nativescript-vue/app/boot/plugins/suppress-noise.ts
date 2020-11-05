import { PluginContext } from '../PluginContext';

export default async function({ Vue, config }: PluginContext) {
  // Prints Vue logs when --env.production is *NOT* set while building
  Vue.config.silent = (config.environment === "production");
  // @ts-ignore
  Vue.config.suppressRenderLogs = true;
  // Set the following to `false` to not colorize the logs created by nativescript-vue
  // disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
  // Vue.config.debug = true;
}
