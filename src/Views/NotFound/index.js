import React from 'react';
import styles from './styles.module.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.NotFound}>
        Sorry，页面未找到 <span role="img" aria-label="cry">😭</span>
      </div>
    );
  }
}

export default NotFound;