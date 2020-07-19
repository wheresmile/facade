import React from 'react';
import styles from  './styles.module.css';
import LinkButton from 'Components/Buttons/LinkButton';

class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.sidebarContainer}>
        <LinkButton 
        link="/today"
        description="今日已有 10 人打卡"
        ></LinkButton>
      </div>
    );
  }
}

export default SideBar;