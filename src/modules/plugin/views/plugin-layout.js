import layout from '@/components/layout';

export default {
  mixins: [layout],

  data() {
    return {
      title: 'Plugin',
      navs: [
        {
          name: 'plugin.info',
          label: 'Login',
          id: 'login',
        },
      ],
    };
  },
}
