import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';


class DiscussionBox extends React.Component {
  render() {
    const {
      description,
      checked_count,
      last_review,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={classnames(styles.title)}>
          <Link to={""}>{description}</Link>
        </div>

        <div className={classnames(styles.title)}>
          {last_review && <div>
            <div>{last_review.author_nickname}</div>
            <div>{last_review.description}</div>
          </div>
          }
        </div>

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>{"ch"}</div>
          <div className={styles.postInfo}>
            <span className={styles.info}>{checked_count}赞·</span>
            <span className={styles.info}>{1}评</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscussionBox;