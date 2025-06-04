import axios from 'axios';
import interceptors from './interceptors';

// 创建axios实例
const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 从环境变量获取
  timeout: 10000, // 请求超时时间
  withCredentials: true, // 跨域请求时是否需要使用凭证
});

// 绑定拦截器
interceptors(http);

export default http;