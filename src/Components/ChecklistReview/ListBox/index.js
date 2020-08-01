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
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.reviews}>
          {reviewsList && reviewsList.map(review => {
            return (<ItemBox key={review.review_id} review={review}
            ></ItemBox>)
          })}
        </div>
      </div>
    )
  }
}

export default ListBox;