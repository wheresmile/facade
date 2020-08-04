import { fetchUserInfo } from "api";
import { HOME_FETCHING_USER_INFO_SUCCESS } from "./constants";

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