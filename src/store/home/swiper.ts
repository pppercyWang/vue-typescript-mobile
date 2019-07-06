import { Commit } from 'vuex';
// import { getSwiperImgs } from '@/api/home';
// import { Pagination } from '../interface';
const state: any = {
    swiperImgs: [],
};

const getters: any = {
    swiperImgs: () => state.swiperImgs,
};

const mutations: any = {
    saveSwiperImgs(states: any, data: any) {
        states.swiperImgs = data;
      }
};

const actions: any = {
    // 获取本地的数据
    async swiperImgs(context: { commit: Commit }) {
        console.log('通过action获取swiperImgs数据');
        const res: any = [
        {src: require("../../assets/20190705150329.jpg"), name: ''},
        {src: require("../../assets/20190705150336.jpg"), name: ''},
        {src: require("../../assets/20190705150320.jpg"), name: ''} ];
        context.commit('saveSwiperImgs', res);
    },
    // 调用api获取数据
    // async swiperImgs(context: { commit: Commit }, cate: string) {
    //     try {
    //     const a: Pagination = { // 如果我们需要获得一些列表数据，经常会用到page size,我们可以将其写成一个interface 传参的时候做类型检查
    //         size: 10,
    //         page: 1,
    //     };
    //     const res: any = await getSwiperImgs(a, null);
    //     context.commit('saveSwiperImgs', res);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
