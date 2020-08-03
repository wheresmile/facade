import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

class ItemBox extends React.Component{
  render() {
    const {
      starCallBack,
      review,
    } = this.props;

    let starCountDom;
    if (review.has_stared) {
      starCountDom = (
        <div>{review.star_count || 0} 已点赞</div>
      );
    } else {
      starCountDom = (
        <div className={styles.starCount} onClick={()=>starCallBack(review.review_id)}>
          <i className={classnames("fa fa-thumbs-o-up", styles.fiveMargin)} aria-hidden="true"></i>
          {review.star_count || 0}
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <div className={classnames(styles.authorTitle)}>
          <span className={styles.fiveMargin}>{review.author.nickname}</span>
          <span className={styles.fiveMargin}>的打卡</span>
          <span className={styles.fiveMargin}>{review.created_at}</span>
        </div>
        <div className={classnames(styles.body)}>
          {review.review_mood}
        </div>
        <div className={classnames(styles.boxFooter)}>
          <div>
            <i className={classnames("fa fa-angle-double-right", styles.fiveMargin)} aria-hidden="true"></i>
            {review.checklist.description}
          </div>
          
          {starCountDom}
        </div>
      </div>
    )
  }
}

export default ItemBox;