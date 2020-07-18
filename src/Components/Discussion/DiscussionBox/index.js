import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';


class DiscussionBox extends React.Component {
  render() {
    const {
      discussionTitle,
      voteCount,
      opinionCount,
      nickname,
      link,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={classnames(styles.title)}>
          <Link to={link}>{discussionTitle}</Link>
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>{nickname}</div>
          <div className={styles.postInfo}>
            <span className={styles.info}>{voteCount}赞·</span>
            <span className={styles.info}>{opinionCount}评</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscussionBox;