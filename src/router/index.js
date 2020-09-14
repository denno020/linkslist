import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/updates',
    name: 'Updates',
    component: () => import(/* webpackChunkName: "updates" */ '../views/Updates/Updates.vue')
  },
  {
    path: '/updates/:updateId',
    name: 'Update',
    component: () => import(/* webpackChunkName: "update" */ '../views/Update/Update.vue')
  },
  {
    path: '/app',
    name: 'App',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/App/App.vue')
  },
  {
    path: '/*',
    name: 'App',
    component: () => import(/* webpackChunkName: "about" */ '../views/App/App.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
