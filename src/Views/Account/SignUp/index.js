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
  clearAccountForm, updateSignUpInvitation, 
  updateSignUpNickname, postSignup 
} from "redux/account/actions";


class SignUp extends React.Component {

  componentWillUnmount(){
    const {
      clearAccountForm,
    } = this.props;
    clearAccountForm();
  }

  render() {
    const {
      accountForm,
      updateSignUpNickname,
      updateLoginEmail,
      updateLoginPassword,
      updateSignUpInvitation,
      postSignup,
    } = this.props;

    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <div className={classnames(appLayout.constraintWidth,styles.contentArea)}>
          <div className={styles.nameHeader}>WhereSmile.com</div>
          <div className={styles.bodyContent}>
            <div className={styles.leftContent}>
              <p>WhereSmile(万思没)需要您的<a href="https://github.com/wheresmile" target="blank">参与</a>。</p>
            </div>
            <div className={styles.rightContent}>

              <div className={styles.formTitle}>注册</div>

              <input key={'nickname'} type="text" placeholder={'昵称'} value={accountForm.nickname || ''} 
              className={styles.inputCell}
              onChange={(event) => {updateSignUpNickname(event.target.value);}}
              />

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

              <input key={'invitation'} type="text" placeholder={'邀请码（向已注册好友索取）'} value={accountForm.invitation || ""} 
              className={styles.inputCell}
              onChange={(event) => {updateSignUpInvitation(event.target.value);}}
              />

              <div className={styles.Button}>
                <LinkButton link="/signin" description="已有账户，去登录"></LinkButton>
                <div></div>
                <Button type='outline' onClick={postSignup}>注册</Button>
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
      updateSignUpNickname: (value) => {dispatch(updateSignUpNickname(value));},
      updateLoginEmail: (value) => {dispatch(updateLoginEmail(value));},
      updateLoginPassword: (value) => {dispatch(updateLoginPassword(value));},
      updateSignUpInvitation: (value) => {dispatch(updateSignUpInvitation(value))},
      postSignup: () => {dispatch(postSignup());},
      clearAccountForm: () => {dispatch(clearAccountForm());},
    }
  }
)(SignUp);