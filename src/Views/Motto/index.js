import React, { Fragment } from 'react';
import styles from './styles.module.css';
import SimpleHeader from 'Components/Header/SimpleHeader';

class Motto extends React.Component {
  render() {
    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <header className={styles.MottoHeader}>
          <div className={styles.MottoSentence}>今天可以做点什么有意义的事情？</div>
        </header>
      </Fragment>
    );
  }
}

export default Motto;