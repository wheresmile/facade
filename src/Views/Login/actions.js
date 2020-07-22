import { UPDATE_LOGIN_EMAIL, UPDATE_LOGIN_PASSWORD, CHECKING_EMAIL_INVALID } from "./constants"

export const updateLoginEmail = (value) => {
  return {
    type: UPDATE_LOGIN_EMAIL,
    payload: value
  }
}


export const updateLoginPassword = (value) => {
  return {
    type: UPDATE_LOGIN_PASSWORD,
    payload: value
  }
}

export const postLogin = () => {
  return (dispatch, getState) => {
    const {
      email,
      password,
    } = getState().loginForm;

    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    if (!reg.test(email)) {
      return dispatch({
        type: CHECKING_EMAIL_INVALID,
        value: "邮箱格式错误",
      })
    }
    
  }
}