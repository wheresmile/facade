import { CHECKLIST_SCENES_FETCHING_SUCCESS, CHECKLIST_SCENES_FETCHING_CHECKLIST_SUCCESS, CHECKLIST_SCENES_FETCHING_FAILURE, CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE } from "./constants";


const initialState = {
  lastID: null,
  HasMoreScenes: 1,
  ScenesList: [],
  checklists: [],
  error: '',
};

export const checklistScenesReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHECKLIST_SCENES_FETCHING_SUCCESS: {
      return Object.assign({}, state, {
        HasMoreScenes: action.payload.has_more,
        lastReviewID: action.payload.last_id,
        ScenesList: state.ScenesList.concat(action.payload.scenes),
        error: ''
      });
    }
    case CHECKLIST_SCENES_FETCHING_FAILURE: {
      return Object.assign({}, state, {
        error: "拉取场景列表错误",
      })
    }

    case CHECKLIST_SCENES_FETCHING_CHECKLIST_SUCCESS: {
      return Object.assign({}, state, {
        checklists: action.payload,
      })
    }
    case CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE: {
      return Object.assign({}, state, {
        error: "拉取清单错误",
      })
    }
    default:
      return state;
  }
}