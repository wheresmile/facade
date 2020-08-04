import { 
  HOME_FETCHING_TAB_SUCCESS, HOME_FETCHING_TAB_FAILURE, 
  HOME_FETCHING_MOTTO_SUCCESS, HOME_FETCHING_MOTTO_FAILURE 
} from "./constants";

const initialAppState = {
  fetchingForums: false,
  forums: null,
  tabs: [],
  motto: null,
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