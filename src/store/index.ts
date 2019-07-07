import Vue from 'vue';
import Vuex from 'vuex';
import home from './home/index';
import swiper from './home/swiper';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home,
        swiper,
    },
});
