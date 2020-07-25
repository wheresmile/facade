import { 
  USER_LOGIN_UPDATE_EMAIL, USER_LOGIN_UPDATE_PASSWORD, 
  USER_LOGIN_FAILURE, USER_LOGIN_CLEAR_FORM, USER_LOGIN_SUCCESS } from "./constants";


const initialState = {
  email: '',
  password: '',
  error: '',
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
        hasLogin: true,
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
    default:
      return state;
  }
}