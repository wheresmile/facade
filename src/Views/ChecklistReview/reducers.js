import { CHECKLIST_REVIEWS_FETCHING_SUCCESS, CHECKLIST_REVIEWS_FETCHING_FAILURE, CHECKLIST_REVIEWS_THUMBON_SUCCESS, CHECKLIST_REVIEWS_THUMBON_FAILURE } from "./constants";

const initialState = {
  lastReviewID: null,
  ReviewsList: [],
  ReviewsMap: {},
  error: '',
};


export const checklistReviewsReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHECKLIST_REVIEWS_FETCHING_SUCCESS: {
      let reviewsMap = state.ReviewsMap;
      action.payload.reviews.forEach(element => {
        reviewsMap[element["review_id"]] = element;
      });
      return Object.assign({}, state, {
        lastReviewID: action.payload.last_review_id,
        ReviewsList: state.ReviewsList.concat(action.payload.reviews),
        ReviewsMap: reviewsMap,
        error: ''
      });
    }

    case CHECKLIST_REVIEWS_FETCHING_FAILURE:
      return Object.assign({}, state, {
        error: '拉取检查项阅评失败，麻烦稍后试试看~',
      });
    
    case CHECKLIST_REVIEWS_THUMBON_SUCCESS:{
      let reviewID = action.payload.review_id;
      let starCount = action.payload.star_count;
      state.ReviewsMap[reviewID].star_count = starCount;
      return Object.assign({}, state, {
        ReviewsList: [...state.ReviewsList],
      })
    }

    case CHECKLIST_REVIEWS_THUMBON_FAILURE: {
      return Object.assign({}, state, {
        error: '点赞失败，请稍后再试',
      })
    }
      
    default:
      return state;
  };
}