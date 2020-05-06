import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ApiContainer from '../modules/api/views/api-container';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/:id',
    name: 'api.info',
    component: ApiContainer,
  },
  {
    path: '/api/new',
    name: 'api.new',
    component: ApiContainer,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
