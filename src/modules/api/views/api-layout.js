import layout from '@/components/layout';

export default {
  mixins: [layout],

  data() {
    return {
      title: 'API',
      newItemRoute: 'api.new',
    };
  },
};
