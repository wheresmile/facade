import { fetchAllChecklistReviews, starChecklistReviewApi } from "api";
import { 
  CHECKLIST_REVIEWS_FETCHING_SUCCESS, CHECKLIST_REVIEWS_FETCHING_FAILURE, 
  CHECKLIST_REVIEWS_THUMBON_FAILURE, CHECKLIST_REVIEWS_THUMBON_SUCCESS 
} from "./constants";
import History from "App/history";

export const getAllChecklistReviews = () => {
  return (dispatch, getState) => {
    let checklistReviews = getState().checklistReviews;
    let lastReviewId = checklistReviews.lastReviewID;
    let params = {
      last_review_id: lastReviewId,
    }
    const documentScrollTop = document.documentElement.scrollTop;
    fetchAllChecklistReviews(params).then(
      data => {
        dispatch({ type: CHECKLIST_REVIEWS_FETCHING_SUCCESS, payload: data.data });
        document.documentElement.scrollTop = documentScrollTop;
      },
      error => dispatch({ type: CHECKLIST_REVIEWS_FETCHING_FAILURE })
    )
  }
}


export const starChecklistView = (review_id) => {
  return (dispatch, getState) => {
    let state = getState();
    let review = state.checklistReviews.ReviewsMap[review_id];
    if (review.has_stared){
      return;
    }

    if (!state.user.isLogged) {
      History.push("/signin");
      return;
    }

    let data = {
      review_id: review_id,
    }

    starChecklistReviewApi(data).then(
      data => {
        if (data["code"] === 200) {
          dispatch({ type: CHECKLIST_REVIEWS_THUMBON_SUCCESS, payload: data.data});
        } else if (data["code"] === 401) {
          History.push("/signin");
          dispatch({ type: CHECKLIST_REVIEWS_THUMBON_FAILURE });
        }
      },
      error => dispatch({ type: CHECKLIST_REVIEWS_THUMBON_FAILURE })
    )

  }
}