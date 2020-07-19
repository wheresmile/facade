import {
  FETCHING_HOME_TAB_SUCCESS, 
  FETCHING_HOME_TAB_FAILURE, 
  FETCHING_HOME_CHECKLIST_FAILURE, 
  FETCHING_HOME_CHECKLIST_SUCCESS
} from './constants';

import { 
  fetchHomeTabs,
  fetchChecklists,
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