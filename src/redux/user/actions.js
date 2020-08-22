import { fetchUserInfo, fetchUserInvitations } from "api";
import { HOME_FETCHING_USER_INFO_SUCCESS, 
  USER_FETCHING_INVITATION_ALL_SUCCESS } from "./constants";
import History from "App/history";

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

export const getUserAllInvitations = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.user.invatations) {
      return;
    }
    fetchUserInvitations().then(
      data => {
        if (data.code === 200){
          dispatch({ type: USER_FETCHING_INVITATION_ALL_SUCCESS, payload: data.data});
        } else if (data.code === 401) {
          History.push("/signin");
        }
      }
    )
  }
}