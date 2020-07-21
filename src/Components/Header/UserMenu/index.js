import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

import Button from 'Components/Buttons/Button';
import { Link } from 'react-router-dom';

class UserMenu extends React.Component {
  render(){
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

export default UserMenu;
