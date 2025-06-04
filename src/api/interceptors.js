import store from '@/store'; // 如果使用Redux等状态管理
import { getToken, removeToken } from '@/utils/auth'; // 认证工具函数

export default function (http) {
  // 请求拦截器
  http.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  http.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      const res = response.data;
      
      // 根据业务状态码处理
      if (res.code !== 200) {
        message.error(res.message || 'Error');
        
        // 特殊状态码处理
        if (res.code === 401) {
          // 未授权，跳转登录
          removeToken();
          window.location.href = '/login';
        }
        
        return Promise.reject(new Error(res.message || 'Error'));
      }
      
      return res;
    },
    (error) => {
      // 对响应错误做点什么
      if (error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误';
            break;
          case 401:
            error.message = '未授权，请重新登录';
            removeToken();
            window.location.href = '/login';
            break;
          case 403:
            error.message = '拒绝访问';
            break;
          case 404:
            error.message = `请求地址出错: ${error.response.config.url}`;
            break;
          case 500:
            error.message = '服务器内部错误';
            break;
          default:
            error.message = `连接错误 ${error.response.status}`;
        }
      } else {
        error.message = '连接到服务器失败';
      }
      
      message.error(error.message);
      return Promise.reject(error);
    }
  );
}