import { fetchAllChecklistReviews } from "api";
import { CHECKLIST_REVIEWS_FETCHING_SUCCESS, CHECKLIST_REVIEWS_FETCHING_FAILURE } from "./constants";

export const getAllChecklistReviews = () => {
  return (dispatch, getState) => {
    let lastReviewId = getState().lastReviewId;
    let params = {
      last_review_id: lastReviewId,
    }
    fetchAllChecklistReviews(params).then(
      data => {
        dispatch({ type: CHECKLIST_REVIEWS_FETCHING_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: CHECKLIST_REVIEWS_FETCHING_FAILURE })
    )
  }
}


export const startChecklistView = (review_id) => {
  return (dispatch, getState) => {
    let params = {
      review_id: review_id,
    }

  }
}