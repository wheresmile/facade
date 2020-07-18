import React from 'react';
import styles from './styles.module.css';

class Motto extends React.Component {
  render() {
    return (
      <header className={styles.MottoHeader}>
        <div className={styles.MottoSentence}>今天可以做点什么有意义的事情？</div>
      </header>
    );
  }
}

export default Motto;