import http from '@/utils/http';

export const getSwiperImgs = (data: any, config: any) => {
    return http.post('book/list', data, config);
};
