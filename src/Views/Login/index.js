import React, { Fragment } from "react";
import SimpleHeader from "Components/Header/SimpleHeader";
import classnames from 'classnames';
import styles from "./styles.module.css";
import appLayout from 'Shared/appLayout.module.css';
import Button from "Components/Buttons/Button";
import LinkButton from "Components/Buttons/LinkButton";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    const {
      email,
    } = this.props.loginForm;
    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <div className={classnames(appLayout.constraintWidth,styles.contentArea)}>
          <div className={styles.nameHeader}>JianZhouBian.com</div>
          <div className={styles.bodyContent}>
            <div className={styles.leftContent}>
              <p>见周边需要您的贡献。</p>
            </div>
            <div className={styles.rightContent}>
              <input key={'email'} type="text" placeholder={'邮箱'} value={email} 
              className={styles.inputCell}
              onChange={(event) => {console.log(event.target.value);}}
              />
              <input key={'email'} type="password" placeholder={'密码'}
              className={styles.inputCell}
              onChange={(event) => {console.log(event.target.value);}}
              />
              <div className={styles.Button}>
                <LinkButton link="/" description="取消"></LinkButton>
                <div></div>
                <Button type='outline'>登录</Button>
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
    }
  }
);