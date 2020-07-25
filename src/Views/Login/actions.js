import { 
  USER_LOGIN_UPDATE_EMAIL, USER_LOGIN_UPDATE_PASSWORD, 
  USER_LOGIN_FAILURE, USER_LOGIN_CLEAR_FORM, USER_LOGIN_SUCCESS } from "./constants"
import { postLoginForm } from "api"


export const updateLoginEmail = (value) => {
  return {
    type: USER_LOGIN_UPDATE_EMAIL,
    payload: value
  }
}


export const updateLoginPassword = (value) => {
  return {
    type: USER_LOGIN_UPDATE_PASSWORD,
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
        type: USER_LOGIN_FAILURE,
        payload: "邮箱格式错误",
      })
    }
    postLoginForm({
      email: email,
      password: password,
    }).then(
      (data) => {
        if (data.data.code === 200) {
          return dispatch({
            type: USER_LOGIN_SUCCESS,
          })
        } else {
          return dispatch({
            type: USER_LOGIN_FAILURE,
            payload: data.msg,
          });
        }},
      (error) => {
        return dispatch({
            type: USER_LOGIN_FAILURE,
            payload: "后端接口错误，请稍后重试",
          });
      }
    )
  }
}

export const clearLoginForm = () => {
  return {
    type: USER_LOGIN_CLEAR_FORM,
  }
}