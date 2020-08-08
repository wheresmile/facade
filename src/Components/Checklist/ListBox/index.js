import React from 'react';
import styles from './styles.module.css';

import ItemBox from '../ItemBox';

class ListBox extends React.Component {

  render() {
    const {
      checklists,
      reviewFormID,
      reviewFormDetial,
      updateChecklistReviewChecklistID,
      updateChecklistReviewDetail,
      addChecklistReview,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.discussions}>
          { checklists && checklists.map(checklist => {
            return (
              <ItemBox key={checklist.id} 
                checklist={checklist} 
                reviewFormID={reviewFormID}
                reviewFormDetial={reviewFormDetial}
                updateChecklistReviewChecklistID={updateChecklistReviewChecklistID}
                updateChecklistReviewDetail={updateChecklistReviewDetail}
                addChecklistReview={addChecklistReview}
              ></ItemBox>);
          })}
        </div>
      </div>
    );
  }
}

export default ListBox;