import { HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE } from "./constants";


const initialChecklistState = {
  listInHome: [],
  error: null,
};


export const checklistReducer = (state = initialChecklistState, action) => {
  switch (action.type){
    case HOME_FETCHING_CHECKLIST_SUCCESS:  // 获取首页的检查项
      return Object.assign({}, state, {
        listInHome: action.payload,
        error: false,
      })

    case HOME_FETCHING_CHECKLIST_FAILURE:
      return Object.assign({}, state, {
        error: "拉取清单失败",
      }); 

    default:
      return state;
    }
  }