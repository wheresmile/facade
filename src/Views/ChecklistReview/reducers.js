import { CHECKLIST_REVIEWS_FETCHING_SUCCESS, CHECKLIST_REVIEWS_FETCHING_FAILURE } from "./constants";

const initialState = {
  lastReviewID: null,
  ReviewsList: [],
  error: '',
};


export const checklistReviewsReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHECKLIST_REVIEWS_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        lastReviewID: action.payload.last_review_id,
        ReviewsList: action.payload.reviews,
        error: ''
      });
    case CHECKLIST_REVIEWS_FETCHING_FAILURE:
      return Object.assign({}, state, {
        error: '拉取检查项阅评失败，麻烦稍后试试看~'
      });
    default:
      return state;
  };
}