import {
  HOME_FETCHING_TAB_SUCCESS, HOME_FETCHING_TAB_FAILURE, 
  HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE, 
  HOME_FETCHING_MOTTO_SUCCESS, HOME_FETCHING_MOTTO_FAILURE, HOME_FETCHING_USER_INFO_SUCCESS,
} from './constants';

const initialAppState = {
  fetchingForums: false,
  forums: null,
  currentForum: '首页',
  error: false,
};


export const appReducer = (state = initialAppState, action) => {
  switch (action.type){
    case HOME_FETCHING_TAB_SUCCESS:  // 获取首页的标签
      return Object.assign({}, state, {
        tabs: action.payload,
        error: false,
      });

    case HOME_FETCHING_TAB_FAILURE:
      return Object.assign({}, state, {
        error: "拉取标签页失败",
      });

    case HOME_FETCHING_CHECKLIST_SUCCESS:  // 获取首页的检查项
      return Object.assign({}, state, {
        checklists: action.payload,
        error: false,
      })

    case HOME_FETCHING_CHECKLIST_FAILURE:
      return Object.assign({}, state, {
        error: "拉取清单失败",
      }); 
    
    case HOME_FETCHING_MOTTO_SUCCESS:  // 获取motto
      return Object.assign({}, state, {
        motto: action.payload,
        error: false,
      })

    case HOME_FETCHING_MOTTO_FAILURE: 
      return Object.assign({}, state, {
        error: "拉取 Motto 失败",
      })
    
    default:
      return state;
  }
}

const initialUserState = {
  isLogged: false,
  info: null,
}
export const userReducer = (state = initialUserState, action) => {
  switch (action.type){
    case HOME_FETCHING_USER_INFO_SUCCESS:  // 获取首页的标签
      return Object.assign({}, state, {
        info: action.payload,
        isLogged: true,
      });
    
    default:
      return state;
  }
}