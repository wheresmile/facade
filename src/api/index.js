import request from './request';

// 拉取首页 tab
export const fetchHomeTabs = (params) => {
  return request({
    url: '/v1/home/tabs',
    method: 'get',
    params
  });
}

// 拉取清单
export const fetchHomeChecklists = (params) => { 
  return request({
    url: '/v1/home/checklists',
    method: 'get',
    params
  });
}

// 拉取 motto
export const fetchMotto = (params) => {
  return request({
    url: '/v1/motto',
    method: 'get',
    params
  });
}

// 登录
export const postLoginForm = (data) => {
  return request({
    url: '/v1/auth/login',
    method: 'post',
    data,
  });
};

export const fetchUserInfo = (params) => {
  return request({
    url: '/v1/user/info',
    method: 'get',
    params,
  })
}