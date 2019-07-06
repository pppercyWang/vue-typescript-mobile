import axios from 'axios';
import qs from 'qs';
import { Base64 } from 'js-base64';
import { HmacSHA256 } from "crypto-js";
const CryptoJS = require('crypto-js');
class Http {
    constructor (router) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.$axios = axios.create({
            baseURL: '/api/v1/',
            timeout: 5000000
        });
        this.$axios.interceptors.request.use(config => {
            if(config.wechat_id){
            config['headers']['Wechat-Id'] = config.wechat_id
            }
            config['headers']['Authorization'] = 'BEARER ' + sessionStorage.getItem('token');
            config['data'] = qs.stringify(config['data']);
            return config;
        }, error => Promise.reject(error));
        this.$axios.interceptors.response.use(response => {
            if(response.data.Code===512){
                router.push({ path: "/login" });
            }
            if(response.data.Code===510){
                router.push({ path: "/login" });
            }
            if(response.status === 200) {
                if(response.data) {
                    if(response.data.Code === 0) return Promise.resolve(response.data || true);
                    return Promise.reject(response.data || true);
                }
                return Promise.resolve(response || false);
            }
            return Promise.reject(response || false);
        }, (error) => {
            return Promise.reject(error);
        });
    }
    /**
     * 生成token。每次发送请求都会通过这个方法生成token
     * 
     */
    getToken(wechat_id) {
        let part1 = Base64.encode(
            JSON.stringify({ alg: "HS256", typ: "JWT" })
        );
        part1.trimRight("=");
        let part2;
        if(wechat_id){
                part2 = Base64.encode(
                    JSON.stringify({
                        timestamp:Date.parse(new Date()),
                        user_id: sessionStorage.getItem("id"),
                        wxid:wechat_id,
                    })
                ).trimRight("=");
        }else{
            part2 = Base64.encode(
                JSON.stringify({
                    timestamp:Date.parse(new Date()),
                    user_id: sessionStorage.getItem('userId'),
                    wxid:"",
                })
            ).trimRight("=");
        }
        let part3 =  this.base64url(HmacSHA256(part1 +'.'+ part2, 'secret'))
        let token = part1 + '.' + part2 + '.' + part3;
        return token
    };
    base64url(source) {
        let encodedSource
        encodedSource = CryptoJS.enc.Base64.stringify(source);
        encodedSource = encodedSource.replace(/=+$/, '');
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');
        return encodedSource;
      }
    /**
     * GET
     * 
     * @param {String}  [url]       - 链接
     * @param {Object}  [params]    - 参数
     */
    get (url, params = {}) {
        return this.$axios.get(`${url}`, {params})
    }
    /**
     * POST
     * 
     * @param {String}  [url]       - 链接
     * @param {Object}  [data]      - 数据
     * @param {Object}  [config]    - 配置
     */
    post (url, data = {}, config = {}) {
        return this.$axios.post(`${url}`, data, config);
    }
}

export default Http