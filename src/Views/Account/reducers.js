import { 
  USER_LOGIN_UPDATE_EMAIL, USER_LOGIN_UPDATE_PASSWORD, 
  USER_LOGIN_FAILURE, USER_LOGIN_CLEAR_FORM, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from "./constants";


const initialState = {
  email: '',
  password: '',
  error: '',
  hasLogged: false,
};

export const loginFormReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_UPDATE_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });

    case USER_LOGIN_UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload,
      });

    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        hasLogged: true,
      })

    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
      })

    case USER_LOGIN_CLEAR_FORM:
      return Object.assign({}, state, {
        password: '',
        error: '',
      })
    
    case USER_LOGOUT_SUCCESS:
      return initialState;

    case USER_LOGOUT_FAILURE:
      return initialState;

    default:
      return state;
  }
}