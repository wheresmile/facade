import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

class ItemBox extends React.Component{
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (id, event) => {
    event.target.checked=true;
  }

  /**
   * 渲染最后一个用户的打卡信息
   * @param {*} lastReview 
   */
  lastReviewRender(lastReview) {
    let lastReviewDom;
    if (lastReview) {
      let descriptionDom;
      if (lastReview.description.length > 40){
        descriptionDom = lastReview.description.substr(0, 40) + "..."
      } else {
        descriptionDom = lastReview.description
      }
      lastReviewDom = (<div>{lastReview.author_nickname}: {descriptionDom}</div>);
    } else {
      lastReviewDom = (<div></div>);
    }
    return lastReviewDom;
  }

  render(){
    const {
      // id,
      description,
      checked_count,
      last_review,
      checked,
    } = this.props.checklist;

    // 渲染最后一个review的内容
    let last_review_dom = this.lastReviewRender(last_review)
    
    return (
      <div className={styles.container} onClick={this.props.onClick}>
        <div className={classnames(styles.title)}>
          {checked ? 
            <i className="fa fa-check-square-o" aria-hidden="true"></i> 
            : <i className="fa fa-square-o" aria-hidden="true"></i> }
          <span className={styles.titleDesp}>{description}</span>
        </div>
        <div className={styles.boxFooter}>
          {last_review_dom}
          <div className={styles.todayPunch}>今日 {checked_count} 人打卡</div>
        </div>
      </div>
    )
  }
}

ItemBox.defaultProps = {
  description: "描述",
  checked_count: 1,
}

export default ItemBox;