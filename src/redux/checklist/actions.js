import { 
  HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE, 
  CHECKLIST_REVIEW_UPDATE_DETAIL, 
  CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID,
  CHECKLIST_REVIEW_POST_FAILURE,
  CHECKLIST_REVIEW_POST_SUCCESS
} from "./constants";
import { postChecklistReviewApi, fetchHomeChecklists } from "api";


/**
 * get checklists
 */
export const getHomeChecklists = () => {
  return (dispatch, getState) => {
    if (getState().checklists.listInHome.length > 0) {
      return;
    }
    fetchHomeChecklists().then(
      data => {
        dispatch({ type: HOME_FETCHING_CHECKLIST_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: HOME_FETCHING_CHECKLIST_FAILURE })
    )
  }
}


/**
 * 更新表单中的详细值和checklistID
 */

export const updateChecklistReviewChecklistID = (value) => {
  return {
    type: CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID,
    payload: value
  };
}

export const updateChecklistReviewDetail = (value) => {
  return {
    type: CHECKLIST_REVIEW_UPDATE_DETAIL,
    payload: value
  };
}

export const addChecklistReview = () => {
  console.log("jj")
  return (dispatch, getState) => {
    let ChecklistID = getState().checklists.reviewFormID;
    let detail = getState().checklists.reviewFormDetial;
    if (!ChecklistID) {
      dispatch({ type: CHECKLIST_REVIEW_POST_FAILURE });
    }
    postChecklistReviewApi({
      checklist_id:ChecklistID,
      mood:detail,
    }).then(
      (data) => {
        if (data.code === 200) {
          dispatch( {type: CHECKLIST_REVIEW_POST_SUCCESS, payload: data.data} )
        } else {
          dispatch( {type: CHECKLIST_REVIEW_POST_FAILURE} )
        }
      },
      (error) => {
        dispatch( {type: CHECKLIST_REVIEW_POST_FAILURE} )
      }
    )
    console.log("cj", detail)
  }
}
