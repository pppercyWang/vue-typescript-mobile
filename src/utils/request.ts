import * as axios from 'axios';
import store from '@/store';
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.default.create({
    timeout: 0,
    maxContentLength: 4000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error: any) => {
    Promise.reject(error);
});

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status !== 200) {
            Toast.fail('请求错误！');
        } else {
            return response.data;
        }
    },
    (error: any) => {
        return Promise.reject(error);
    });

export default service;
