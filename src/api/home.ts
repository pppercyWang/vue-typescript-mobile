import request from '@/utils/request';

export const getSwiperImgs = (param: string) => {
    return request({
        url: '/api/swiper/' + param,
        method: 'GET',
    });
};
