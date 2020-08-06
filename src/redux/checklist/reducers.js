import { 
  HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE, CHECKLIST_REVIEW_UPDATE_DETAIL, CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID, CHECKLIST_REVIEW_POST_SUCCESS, CHECKLIST_REVIEW_POST_FAILURE, CHECKLIST_REVIEW_POST_CANCEL,  
} from "./constants";


const initialChecklistState = {
  listInHome: [],
  reviewFormID: null,
  reviewFormDetial: "",
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

    case CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID:
      return Object.assign({}, state, {
        reviewFormID: action.payload,
      });

    case CHECKLIST_REVIEW_UPDATE_DETAIL:
      return Object.assign({}, state, {
        reviewFormDetial: action.payload,
      });
    
    case CHECKLIST_REVIEW_POST_FAILURE:
      return Object.assign({}, state, {
        error: "更新失败😭",
      });

    case CHECKLIST_REVIEW_POST_CANCEL:
    case CHECKLIST_REVIEW_POST_SUCCESS:
      return Object.assign({}, state, {
        reviewFormID: null,
        reviewFormDetial: "",
      });

    default:
      return state;
    }
  }