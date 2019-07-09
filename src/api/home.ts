import http from '@/utils/http';

export const apiGetSwiperImgs = (data: any, config: any) => {
    return http.post('swiperimgs/list', data, config);
};
