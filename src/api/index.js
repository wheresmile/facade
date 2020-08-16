import request from './request';

// 拉取首页 tab
export const fetchHomeTabs = (params) => {
  return request({ url: '/v1/home/tabs', method: 'get', params });
}

// 拉取清单
export const fetchHomeChecklists = (params) => { 
  return request({ url: '/v1/home/checklists', method: 'get', params });
}

// 添加阅评
export const postChecklistReviewApi = (data) => { 
  return request({ url: '/v1/checklists/review', method: 'post', data }) 
}

// 拉取清单阅评
export const fetchAllChecklistReviews = (params) => {
  return request({ url: '/v1/checklist_reviews', method: 'get', params })
}

// 点赞阅评
export const starChecklistReviewApi = (data) => {
  return request({ url: '/v1/checklist_reviews/star', method: 'post', data })
}

// 拉取 motto
export const fetchMotto = (params) => {
  return request({ url: '/v1/motto', method: 'get', params });
}

// 注册
export const postSignupForm = (data) => {
  return request({ url: '/v1/auth/register', method: 'post', data });
}

// 登录
export const postLoginForm = (data) => {
  return request({ url: '/v1/auth/login', method: 'post', data, });
}

// 退出
export const postLogoutApi = (data) => {
  return request({ url: '/v1/auth/logout', method: 'post', data, });
}

// 拉取用户信息
export const fetchUserInfo = (params) => {
  return request({ url: '/v1/user/info', method: 'get', params, })
}

// 拉取用户邀请码
export const fetchUserInvitations = (params) => {
  return request({ url: '/v1/user/invitation/all', method: 'get', params, })
}