import { Config } from './Config';
import { PluginContext } from './PluginContext';

export async function attachPlugins(Vue: any, config: Config) {
  const context: PluginContext = {
    Vue,
    config
  };

  for (const plugin of config.plugins) {
    let pluginFunction = require(`./plugins/${plugin}.ts`);

    pluginFunction = pluginFunction.default || pluginFunction;

    const response = await pluginFunction(context);

    Object.assign(context, response);
  }

  return context;
}
