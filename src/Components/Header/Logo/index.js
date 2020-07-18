import React from 'react';
import styles from './styles.module.css';

class Logo extends React.Component {
  render(){
    return (
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="./logo100.png" alt="logo"></img>
        <div className={styles.logoTitle}>见周边</div>
      </div>
    );
  }
}

export default Logo;