import React from 'react';
import styles from  './styles.module.css';
import DiscussionNew from 'Components/Discussion/NewButton';

class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.sidebarContainer}>
        <DiscussionNew></DiscussionNew>
      </div>
    );
  }
}

export default SideBar;