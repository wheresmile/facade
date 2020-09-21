import axios from 'axios';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  baseURL: document.location.protocol + "//" + document.location.host + "/api",
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})


// 请求
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 响应
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.reject(error);
  }
)

export default service;