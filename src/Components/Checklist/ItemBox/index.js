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

  render(){
    const {
      id,
      description,
      checked_count,
      last_review,
      checked,
    } = this.props;

    let description_dom;
    if (checked) {
      description_dom = <s>{description}</s>;
    } else {
      description_dom = description;
    }

    // 渲染最后一个review的内容
    let last_review_dom;
    if (last_review) {
      let description_dom;
      if (last_review.description.length > 40){
        description_dom = last_review.description.substr(0, 40) + "..."
      } else {
        description_dom = last_review.description
      }
      last_review_dom = (<div>{last_review.author_nickname}: {description_dom}</div>);
    } else {
      last_review_dom = (<div></div>);
    }
    return (
      <div className={styles.container}>
        <div className={classnames(styles.title)}>
          <input type="checkbox" className={styles.checkbox} defaultChecked={checked}
          onChange={(event) => this.handleInputChange(id, event)}
          ></input>
          {description_dom}
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