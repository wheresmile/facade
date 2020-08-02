import React from 'react';
import styles from './styles.module.css';
import ItemBox from '../ItemBox';

class ListBox extends React.Component {
  constructor(props){
    super(props);
    this.handleInputChange.bind(this);
  }
  handleInputChange = (id, event) => {
    event.target.checked=true;
  }
  render() {
    const {
      reviewsList,
      starCallBack,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.reviews}>
          {reviewsList && reviewsList.map(review => {
            return (
              <ItemBox key={review.review_id} 
              review={review} 
              starCallBack={starCallBack}
              />)
          })}
        </div>
      </div>
    )
  }
}

export default ListBox;