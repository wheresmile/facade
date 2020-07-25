import axios from 'axios';

// 拉取首页 tab
export const fetchHomeTabs = () => {
  return axios.get('/api/v1/home/tabs');
};

// 拉取清单
export const fetchHomeChecklists = () => { 
  return axios.get('/api/v1/home/checklists');
}

// 拉取 motto
export const fetchMotto = () => {
  return axios.get('/api/v1/motto');
}

// 登录
export const postLoginForm = (loginForm) => {
  return axios.post('/api/v1/auth/login', loginForm);
};