import { HOME_FETCHING_USER_INFO_SUCCESS, USER_FETCHING_INVITATION_ALL_SUCCESS, USER_ADD_INVITATION_CODE_SUCCESS, USER_ADD_INVITATION_CODE_FAILURE } from "./constants";
import { USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from "redux/account/constants";

const initialUserState = {
  isLogged: false,
  info: null,
  invitations: [],
  error: "",
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

    case USER_ADD_INVITATION_CODE_SUCCESS: {
      return Object.assign({}, state, {
        invitations: state.invitations.concat(action.payload)
      })
    }
    case USER_ADD_INVITATION_CODE_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload,
      })
    }

    default:
      return state;
  }
}