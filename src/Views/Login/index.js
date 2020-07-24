import React, { Fragment } from "react";
import SimpleHeader from "Components/Header/SimpleHeader";
import classnames from 'classnames';
import styles from "./styles.module.css";
import appLayout from 'Shared/appLayout.module.css';
import Button from "Components/Buttons/Button";
import LinkButton from "Components/Buttons/LinkButton";
import { connect } from "react-redux";
import { updateLoginEmail, updateLoginPassword, postLogin, clearLoginForm } from "./actions";
import { Redirect } from "react-router"


class Login extends React.Component {

  componentWillUnmount(){
    const {
      clearLoginForm,
    } = this.props;
    clearLoginForm();
  }

  render() {
    const {
      loginForm,
      updateLoginEmail,
      updateLoginPassword,
      postLogin,
    } = this.props;

    return (
      <Fragment>
        { loginForm.hasLogin && <Redirect to="/"></Redirect> }
        <SimpleHeader></SimpleHeader>
        <div className={classnames(appLayout.constraintWidth,styles.contentArea)}>
          <div className={styles.nameHeader}>JianZhouBian.com</div>
          <div className={styles.bodyContent}>
            <div className={styles.leftContent}>
              <p>见周边需要您的<a href="https://github.com/jianzhoubian" target="blank">贡献</a>。</p>
            </div>
            <div className={styles.rightContent}>
              {loginForm.error && <div>{loginForm.error}</div>}
              <input key={'email'} type="text" placeholder={'邮箱'} value={loginForm.email} 
              className={styles.inputCell}
              onChange={(event) => {updateLoginEmail(event.target.value);}}
              />
              <form>
                <input key={'password'} type="password" placeholder={'密码'} autoComplete="off" value={loginForm.password}
                className={styles.inputCell}
                onChange={(event) => {updateLoginPassword(event.target.value);}}
                />
              </form>
              <div className={styles.Button}>
                <LinkButton link="/" description="取消"></LinkButton>
                <div></div>
                <Button type='outline' onClick={postLogin}>登录</Button>
              </div>
            </div>
          </div>
          
        </div>
      </Fragment>
    )
  }
}

Login.defaultProps = {
  loginForm: {email:""},
}

export default connect(
  (state) => {
    return {
      loginForm: state.loginForm,
    };
  },
  (dispatch) => {
    return {
      updateLoginEmail: (value) => {dispatch(updateLoginEmail(value));},
      updateLoginPassword: (value) => {dispatch(updateLoginPassword(value));},
      postLogin: () => {dispatch(postLogin());},
      clearLoginForm: () => {dispatch(clearLoginForm());},
    }
  }
)(Login);