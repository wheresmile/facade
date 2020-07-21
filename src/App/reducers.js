import {
  FETCHING_HOME_TAB_SUCCESS, FETCHING_HOME_TAB_FAILURE, 
  FETCHING_HOME_CHECKLIST_SUCCESS, FETCHING_HOME_CHECKLIST_FAILURE, FETCHING_MOTTO_SUCCESS, FETCHING_MOTTO_FAILURE
} from './constants';

const initialState = {
  fetchingForums: false,
  forums: null,
  currentForum: '首页',
  error: false,
};


export const appReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_HOME_TAB_SUCCESS:  // 获取首页的标签
      return Object.assign({}, state, {
        tabs: action.payload,
        error: false,
      });

    case FETCHING_HOME_TAB_FAILURE:
      return Object.assign({}, state, {
        error: "拉取标签页失败",
      });

    case FETCHING_HOME_CHECKLIST_SUCCESS:  // 获取首页的检查项
      return Object.assign({}, state, {
        checklists: action.payload,
        error: false,
      })

    case FETCHING_HOME_CHECKLIST_FAILURE:
      return Object.assign({}, state, {
        error: "拉取清单失败",
      }); 
    
    case FETCHING_MOTTO_SUCCESS:  // 获取motto
      return Object.assign({}, state, {
        motto: action.payload,
        error: false,
      })

    case FETCHING_MOTTO_FAILURE: 
      return Object.assign({}, state, {
        error: "拉取 Motto 失败",
      })

    default:
      return state;
  }
}