import Vue from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

