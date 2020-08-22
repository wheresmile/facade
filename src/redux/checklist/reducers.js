import { 
  HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE, 
  CHECKLIST_REVIEW_UPDATE_DETAIL, CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID, 
  CHECKLIST_REVIEW_POST_SUCCESS, CHECKLIST_REVIEW_POST_FAILURE,  
} from "./constants";


const initialChecklistState = {
  listInHome: [],
  mapInHome: {},
  reviewFormID: null,
  reviewFormDetial: "",
  error: null,
};


export const checklistReducer = (state = initialChecklistState, action) => {
  switch (action.type){
    // 获取首页的检查项
    case HOME_FETCHING_CHECKLIST_SUCCESS: { 
      action.payload.forEach(element => {
        state.mapInHome[element["id"]] = element;
      });
      return Object.assign({}, state, {
        listInHome: action.payload,
        error: false,
      })
    }

    case HOME_FETCHING_CHECKLIST_FAILURE:
      return Object.assign({}, state, {
        error: "拉取清单失败",
      }); 

    case CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID:{
      let payload = action.payload;
      let detail = state.reviewFormDetial;
      if (state.reviewFormID === payload) {
        payload = null;
        detail = "";
      }
      return Object.assign({}, state, {
        reviewFormID: payload,
        reviewFormDetial: detail,
      });
    }
      

    case CHECKLIST_REVIEW_UPDATE_DETAIL:
      return Object.assign({}, state, {
        reviewFormDetial: action.payload,
      });
    
    case CHECKLIST_REVIEW_POST_FAILURE:
      return Object.assign({}, state, {
        error: action.payload || "更新失败😭",
      });

    case CHECKLIST_REVIEW_POST_SUCCESS:{
      let checklist = state.mapInHome[action.payload.checklist.id];
      if (action.payload.is_new) {
        checklist.checked_count += 1;
      }
      checklist.checked=1;
      checklist.last_review={author_nickname:"我", description: action.payload.mood};
      return Object.assign({}, state, {
        reviewFormID: null,
        reviewFormDetial: "",
      });
    }
      

    default:
      return state;
    }
  }