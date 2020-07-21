import axios from 'axios';

// 拉取首页 tab
export const fetchHomeTabs = () => {
  return axios.get('/api/v1/tab/home');
};

// 拉取清单
export const fetchChecklists = () => { 
  return axios.get('/api/v1/checklist/home');
}

// 拉取 motto
export const fetchMotto = () => {
  return axios.get('/api/v1/motto');
}

// 发布讨论
export const postDiscussion = (discussion) => {
  return axios.post('/api/v1/discussion/newDiscussion', discussion);
};