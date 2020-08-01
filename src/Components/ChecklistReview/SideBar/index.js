import React from 'react';
import styles from  './styles.module.css';

class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.sidebarContainer}>
        <div>
          今天可以做点什么有意义的事情？
        </div>
      </div>
    );
  }
}

export default SideBar;