import ApiLayout from './views/api-layout';
import ApiInfo from './views/api-info';
import Welcome from './views/api-welcome';

export default {
  path: 'api',
  name: 'api',
  component: ApiLayout,
  children: [
    {
      path: '/',
      name: 'api.welcome',
      component: Welcome,
    },
    {
      path: '/:id',
      name: 'api.info',
      component: ApiInfo,
    },
    {
      path: '/new',
      name: 'api.new',
      component: ApiInfo,
    },
  ],
};
