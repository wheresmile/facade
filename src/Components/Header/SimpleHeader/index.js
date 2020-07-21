import React from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";

class SimpleHeader extends React.Component {
  render() {
    return(
      <div className={styles.constraintWidth}>
        <div className={styles.headerTop}>
          <div></div>
          <Link to="" className={styles.logo}>
            <img className={styles.logo} src="./logo100.png" alt="logo"></img>
          </Link>
          <div></div>
        </div>
      </div>
    );
  }
}


export default SimpleHeader;