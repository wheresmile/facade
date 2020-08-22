import { fetchChecklistScenes, fetchChecklistsOfScene } from "api"
import { CHECKLIST_SCENES_FETCHING_SUCCESS, CHECKLIST_SCENES_FETCHING_FAILURE, CHECKLIST_SCENES_FETCHING_CHECKLIST_SUCCESS, CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE } from "./constants";


export const getChecklistScenes = () => {
  return (dispatch, getState) => {
    let checklistScenes = getState().checklistScenes;
    let lastId = checklistScenes.lastID;
    let params = {
      last_id: lastId,
    }

    fetchChecklistScenes(params).then(
      data => {
        dispatch({ type: CHECKLIST_SCENES_FETCHING_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: CHECKLIST_SCENES_FETCHING_FAILURE })
    )
  }
}


export const getChecklistsOfScene = (sceneId) => {
  return (dispatch, getState) => {
    let params = {
      scene_id: sceneId,
    }

    fetchChecklistsOfScene(params).then(
      data => {
        dispatch({ type: CHECKLIST_SCENES_FETCHING_CHECKLIST_SUCCESS, payload: data.data })
      },

      error => dispatch({ type: CHECKLIST_SCENES_FETCHING_CHECKLIST_FAILURE })

    )
  }
}