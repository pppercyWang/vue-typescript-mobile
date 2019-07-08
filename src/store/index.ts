import Vue from 'vue';
import Vuex from 'vuex';
import home from './home/another';
import swiper from './home/swiper';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home,
        swiper,
    },
});
