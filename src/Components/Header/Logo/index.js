import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render(){
    return (
      <div className={styles.logoContainer}>
        <Link to="" className={styles.logo}>
          <img className={styles.logo} src="/logo100.png" alt="logo"></img>
        </Link>
        <Link to="" className={styles.logoTitle}>万思没</Link>
      </div>
    );
  }
}

export default Logo;