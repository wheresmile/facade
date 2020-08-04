import React, { Fragment } from "react";
import SimpleHeader from "Components/Header/SimpleHeader";
import classnames from 'classnames';
import styles from "../styles.module.css";
import appLayout from 'Shared/appLayout.module.css';
import Button from "Components/Buttons/Button";
import LinkButton from "Components/Buttons/LinkButton";
import { connect } from "react-redux";
import { 
  updateLoginEmail, updateLoginPassword, 
  postLogin, clearAccountForm 
} from "redux/account/actions";
import { Redirect } from "react-router";


class Login extends React.Component {

  componentWillUnmount(){
    const {
      clearAccountForm,
    } = this.props;
    clearAccountForm();
  }

  render() {
    const {
      accountForm,
      updateLoginEmail,
      updateLoginPassword,
      postLogin,
    } = this.props;

    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        {accountForm.hasLogged &&
          <Redirect to={{pathname: "/"}}></Redirect>
        }
        <div className={classnames(appLayout.constraintWidth,styles.contentArea)}>
          <div className={styles.nameHeader}>WhereSmile.com</div>
          <div className={styles.bodyContent}>
            <div className={styles.leftContent}>
              <p>WhereSmile(万思没)需要您的<a href="https://github.com/wheresmile" target="blank">参与</a>。</p>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.formTitle}>登录</div>
              
              <input key={'email'} type="text" placeholder={'邮箱'} value={accountForm.email} 
              className={styles.inputCell}
              onChange={(event) => {updateLoginEmail(event.target.value);}}
              />

              <form>
                <input key={'password'} type="password" placeholder={'密码'} autoComplete="off" value={accountForm.password}
                className={styles.inputCell}
                onChange={(event) => {updateLoginPassword(event.target.value);}}
                />
              </form>

              <div className={styles.Button}>
                <LinkButton link="/signup" description="没有账户，去注册"></LinkButton>
                <div></div>
                <Button type='outline' onClick={postLogin}>登录</Button>
              </div>

              {accountForm.error && <div className={styles.errorMsg}>{accountForm.error}</div>}
            </div>
          </div>
          
        </div>
      </Fragment>
    )
  }
}

export default connect(
  (state) => {
    return {
      accountForm: state.accountForm,
    };
  },
  (dispatch) => {
    return {
      updateLoginEmail: (value) => {dispatch(updateLoginEmail(value));},
      updateLoginPassword: (value) => {dispatch(updateLoginPassword(value));},
      postLogin: () => {dispatch(postLogin());},
      clearAccountForm: () => {dispatch(clearAccountForm());},
    }
  }
)(Login);