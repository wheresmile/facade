import { CHECKLIST_SCENES_FETCHING_SUCCESS, CHECKLIST_SCENES_FETCHING_CHECKLIST_SUCCESS, CHECKLIST_SCENES_FETCHING_FAILURE, CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE } from "./constants";
import { CHECKLIST_REVIEW_POST_SUCCESS } from "redux/checklist/constants";


const initialState = {
  lastID: null,
  HasMoreScenes: 1,
  ScenesList: [],
  ScenesMap: {},

  checklists: [],
  checklistsMap: {},
  error: '',
};

export const checklistScenesReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHECKLIST_SCENES_FETCHING_SUCCESS: {
      action.payload.scenes.forEach(element => {
        state.ScenesMap[element["id"]] = element;
      });
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
      action.payload.forEach(element => {
        state.checklistsMap[element["id"]] = element;
      });
      return Object.assign({}, state, {
        checklists: action.payload,
      })
    }
    case CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE: {
      return Object.assign({}, state, {
        error: "拉取清单错误",
      })
    }

    case CHECKLIST_REVIEW_POST_SUCCESS:{
      let checklist = state.checklistsMap[action.payload.checklist.id];
      if (checklist) {
        if (action.payload.is_new) {
          checklist.checked_count += 1;
        }
        checklist.checked=1;
        checklist.last_review={author_nickname:"我", description: action.payload.mood};
      }
      
      return Object.assign({}, state, {
        error: null,
      });
    }

    default:
      return state;
  }
}