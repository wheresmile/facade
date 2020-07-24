import { UPDATE_LOGIN_EMAIL, UPDATE_LOGIN_PASSWORD, LOGIN_FAILURE, CLEAR_LOGIN_FORM, LOGIN_SUCCESS } from "./constants";


const initialState = {
  email: '',
  password: '',
  error: '',
};

export const loginFormReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });

    case UPDATE_LOGIN_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        hasLogin: true,
      })

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
      })

    case CLEAR_LOGIN_FORM:
      return Object.assign({}, state, {
        password: '',
        error: '',
      })
    default:
      return state;
  }
}