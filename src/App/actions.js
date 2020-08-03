import {
  HOME_FETCHING_TAB_SUCCESS, 
  HOME_FETCHING_TAB_FAILURE, 
  HOME_FETCHING_CHECKLIST_FAILURE, 
  HOME_FETCHING_CHECKLIST_SUCCESS,
  HOME_FETCHING_MOTTO_SUCCESS,
  HOME_FETCHING_MOTTO_FAILURE,
  HOME_FETCHING_USER_INFO_SUCCESS,
} from './constants';

import { 
  fetchHomeTabs,
  fetchHomeChecklists,
  fetchMotto,
  fetchUserInfo,
} from '../api';

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

/**
 * get checklists
 */
export const getHomeChecklists = () => {
  return (dispatch, getState) => {
    if (getState().app.checklists.length > 0) {
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

export const getMotto = () => {
  return (dispatch, getState) => {
    let state = getState();
    // 如果已经拉取过一次，就不用再拉了
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

export const getUserInfo = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.user.isLogged) {
      return;
    }
    fetchUserInfo().then(
      data => {
        if (data.code === 200){
          dispatch({ type: HOME_FETCHING_USER_INFO_SUCCESS, payload: data.data});
        }
      }
    )
  }
}