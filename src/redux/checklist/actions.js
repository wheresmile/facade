import { HOME_FETCHING_CHECKLIST_SUCCESS, HOME_FETCHING_CHECKLIST_FAILURE } from "./constants";
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