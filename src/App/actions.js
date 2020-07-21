import {
  FETCHING_HOME_TAB_SUCCESS, 
  FETCHING_HOME_TAB_FAILURE, 
  FETCHING_HOME_CHECKLIST_FAILURE, 
  FETCHING_HOME_CHECKLIST_SUCCESS,
  FETCHING_MOTTO_FAILURE,
  FETCHING_MOTTO_SUCCESS
} from './constants';

import { 
  fetchHomeTabs,
  fetchChecklists,
  fetchMotto,
} from './api';

/**
 * get home tab list
 * @return {action}
 */
export const getHomeTabs = () => {
  return (dispatch, getState) => {

    fetchHomeTabs().then(
      data => {
        dispatch({ type: FETCHING_HOME_TAB_SUCCESS, payload: data.data.data });
      },
      error => dispatch({ type: FETCHING_HOME_TAB_FAILURE })
    );
  };
};

/**
 * get checklists
 */
export const getChecklists = () => {
  return (dispatch, getState) => {
    fetchChecklists().then(
      data => {
        dispatch({ type: FETCHING_HOME_CHECKLIST_SUCCESS, payload: data.data.data });
      },
      error => dispatch({ type: FETCHING_HOME_CHECKLIST_FAILURE })
    )
  }
}

export const getMotto = () => {
  return (dispatch, getState) => {
    let state = getState();
    // 如果已经拉取过一次，就不用再拉了
    if (state.app.motto) {
      return;
    }
    fetchMotto().then(
      data => {
        dispatch({ type: FETCHING_MOTTO_SUCCESS, payload: data.data.data });
      },
      error => dispatch({ type: FETCHING_MOTTO_FAILURE })
    )
  }
}