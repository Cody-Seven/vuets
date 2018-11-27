import Vue from 'vue';
import Router from 'vue-router';
import Cody from './views/Cody/index.vue';
import ArticleDetail from './views/articlesDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cody',
      component: Cody,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Gunnar/index.vue'),
    },
    {
      path: '/articlesdetail',
      name: 'articlesdetail',
      component: ArticleDetail,
    },
  ],
});
