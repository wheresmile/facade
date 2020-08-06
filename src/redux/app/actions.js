import { HOME_FETCHING_TAB_SUCCESS, HOME_FETCHING_TAB_FAILURE, HOME_FETCHING_MOTTO_SUCCESS, HOME_FETCHING_MOTTO_FAILURE } from "./constants";
import { fetchHomeTabs, fetchMotto } from "api";

/**
 * get home tab list
 * @return {action}
 */
export const getHomeTabs = () => {
  return (dispatch, getState) => {
    fetchHomeTabs().then(
      data => {
        dispatch({ type: HOME_FETCHING_TAB_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: HOME_FETCHING_TAB_FAILURE })
    );
  };
};


export const getMotto = () => {
  return (dispatch, getState) => {
    let state = getState();
    // 如果已经拉取过一次，就不用再拉了
    console.log("moto", state.app.motto);
    if (state.app.motto) {
      return;
    }
    fetchMotto().then(
      data => {
        dispatch({ type: HOME_FETCHING_MOTTO_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: HOME_FETCHING_MOTTO_FAILURE })
    )
  }
}