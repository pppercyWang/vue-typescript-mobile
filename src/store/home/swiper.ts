import { Commit } from 'vuex';
// import { getSwiperImgs } from '@/api/home';
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
    // 获取本地的轮播图数据
    async swiperImgs(context: { commit: Commit }) {
        console.log('通过action获取swiperImgs数据');
        const res: any = [
        {src: require("../../assets/20190705150329.jpg"), name: ''},
        {src: require("../../assets/20190705150336.jpg"), name: ''},
        {src: require("../../assets/20190705150320.jpg"), name: ''} ];
        context.commit('saveSwiperImgs', res);
    },
    // 调用api获取轮播图数据
    // async swiperImgs(context: { commit: Commit }, cate: string) {
    //     const res: any = await getSwiperImgs(cate)
    //                         .then( (response: any ) => response)
    //                         // tslint:disable-next-line:no-console
    //                         .catch((e: string) => console.error(e));
    //     context.commit('saveSwiperImgs', res);
    // },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
