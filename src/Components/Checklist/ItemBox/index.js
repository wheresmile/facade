import React from 'react';
import classnames from 'classnames';
import Button from 'Components/Buttons/Button';


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
      id,
      description,
      checked_count,
      last_review,
      checked,
    } = this.props.checklist;

    const {
      reviewFormID,
      reviewFormDetial,
      updateChecklistReviewChecklistID,
      updateChecklistReviewDetail,
      addChecklistReview,
    } = this.props;

    // 渲染最后一个review的内容
    let last_review_dom = this.lastReviewRender(last_review)
    
    return (
      <div className={styles.container}>
        <div className={classnames(styles.title)} onClick={()=>updateChecklistReviewChecklistID(id)}>
          {checked ? 
            <i className="fa fa-check-square-o" aria-hidden="true"></i> 
            : <i className="fa fa-square-o" aria-hidden="true"></i> }
          <span className={styles.titleDesp}>{description}</span>
        </div>
        <div className={styles.boxFooter}>
          {last_review_dom}
          <div className={styles.todayPunch}>
            <span style={{'font-size': '1px'}}>近30天</span> 共 {checked_count} 次打卡
          </div>
        </div>
        { id === reviewFormID &&
          <div className={styles.reviewForm}>
            <Button type='default' className={styles.reviewFormButton} onClick={addChecklistReview}>提交</Button>
            <input key={'detail'} type="text" 
              className={styles.reviewFormDetail}
              placeholder={'打卡'} 
              value={reviewFormDetial}
              onChange={(event) => {updateChecklistReviewDetail(event.target.value);}}
              />
          </div>
        }
      </div>
    )
  }
}

export default ItemBox;