import React from 'react';
import styles from  './styles.module.css';
import LinkButton from 'Components/Buttons/LinkButton';

class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.sidebarContainer}>
        <LinkButton 
        link="new_discussion"
        description="新建"
        ></LinkButton>
      </div>
    );
  }
}

export default SideBar;