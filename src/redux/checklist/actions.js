import { 
  HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE, 
  CHECKLIST_REVIEW_UPDATE_DETAIL, 
  CHECKLIST_REVIEW_UPDATE_CHECKLIST_ID,
  CHECKLIST_REVIEW_POST_FAILURE
} from "./constants";
import { fetchHomeChecklists } from "api";


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
  return (dispatch, getState) => {
    let reviewID = getState().checklists.reviewFormID;
    let detail = getState().checklists.reviewFormDetial;
    if (!reviewID) {
      dispatch({ type: CHECKLIST_REVIEW_POST_FAILURE });
    }
    console.log(detail);
  }
}
