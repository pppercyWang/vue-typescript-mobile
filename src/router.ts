import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Another from '@/views/another/Another.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/another',
      name: 'another',
      component: Another,
      meta: {
        title: 'vuex测试页面',
      },
    },
  ],
});
