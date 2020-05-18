import PluginLayout from './views/plugin-layout';
import PluginWelcome from './views/plugin-welcome';
import PluginInfo from './views/plugin-info';

export default {
  path: '/plugin/',
  component: PluginLayout,
  children: [
    {
      path: '',
      name: 'plugin',
      component: PluginWelcome,
    },
    {
      path: ':id',
      name: 'plugin.info',
      component: PluginInfo,
    },
  ],
};
