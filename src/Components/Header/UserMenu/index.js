import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

import Button from 'Components/Buttons/Button';

class UserMenu extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <Button
          alwaysActive
          className={classnames(styles.signInBtn, styles.title)}
        >
          注册/登录
        </Button>
      </div>
    );
  }
}

export default UserMenu;
