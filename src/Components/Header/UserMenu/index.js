import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

import Button from 'Components/Buttons/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserMenu extends React.Component {
  render(){
    const {
      userInfo,
      isLogged,
    } = this.props;

    if (isLogged){
      return (
        <div>
          <div className={styles.container} onClick={this.toggleSubMenu}>
            <span className={styles.title}>{userInfo.nickname}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <Link to="/login">
            <Button alwaysActive className={classnames(styles.signInBtn, styles.title)}>
              注册/登录
            </Button>
          </Link>
        </div>
      );
    }
  }
}

export default connect(
  (state) => { 
    return {
      userInfo: state.user.info,
      isLogged: state.user.isLogged,
    }; 
  }
)(UserMenu);
