import axios from 'axios';


export const getHomeTabs = () => {
  return axios.get('/api/v1/tab/home');
};

// 发布讨论
export const postDiscussion = (discussion) => {
  return axios.post('/api/v1/discussion/newDiscussion', discussion);
};