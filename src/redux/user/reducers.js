import { HOME_FETCHING_USER_INFO_SUCCESS, USER_FETCHING_INVITATION_ALL_SUCCESS } from "./constants";
import { USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from "redux/account/constants";

const initialUserState = {
  isLogged: false,
  info: null,
  invitations: [],
}
export const userReducer = (state = initialUserState, action) => {
  switch (action.type){
    case HOME_FETCHING_USER_INFO_SUCCESS:  // 获取首页的标签
      return Object.assign({}, state, {
        info: action.payload,
        isLogged: true,
      });
    
    case USER_LOGOUT_SUCCESS:
    case USER_LOGOUT_FAILURE:
      return initialUserState;
    
    case USER_FETCHING_INVITATION_ALL_SUCCESS: {
      return Object.assign({}, state, {
        invitations: action.payload,
      })
    }

    default:
      return state;
  }
}