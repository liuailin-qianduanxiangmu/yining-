import axios from 'axios';
//封装axios库，主要为了防止以后axios库不维护或者出现了问题，这样就会出现好多问题不便于统一修改
//创建axios实例
var service = axios.create({
  baseURL: 'https://www.apifox.cn/apidoc/shared-21a47a84-4071-4873-956b-6d96bfea77a5',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'content-type': 'application/json'
  }
});
export default {
  service,

  //get请求
  get(url, data) {
    return service({
      url: url,
      method: 'get',
      query: data
    });
  },

  //post请求
  post(url, data) {
    return service({
      url: url,
      method: 'post',
      data: data
    });
  }
};
