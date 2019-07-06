import http from '@/utils/http';

export const getSwiperImgs = (data: any, config: any) => {
    return http.post('swiperimgs/list', data, config);
};
