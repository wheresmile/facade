import {
  FETCHING_HOME_TAB_SUCCESS, FETCHING_HOME_TAB_FAILURE
} from './constants';

import { fetchHomeTabs } from './api';

/**
 * get home tab list
 * @return {action}
 */
export const getHomeTabs = () => {
  return (dispatch, getState) => {

    fetchHomeTabs().then(
      data => dispatch({ type: FETCHING_HOME_TAB_SUCCESS, payload: data.data.data }),
      error => dispatch({ type: FETCHING_HOME_TAB_FAILURE })
    );
  };
};