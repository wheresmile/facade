import React, { Fragment } from 'react';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import SideBar from 'Components/ChecklistReview/SideBar';
import { connect } from 'react-redux';
import ListBox from 'Components/Checklist/ListBox';
import Header from 'Containers/Header';
import { getHomeChecklists, updateChecklistReviewChecklistID, 
  updateChecklistReviewDetail, addChecklistReview } from 'redux/checklist/actions';

class Checklist extends React.Component {
  componentDidMount() {
    const {
      getHomeChecklists
    } = this.props;
    getHomeChecklists();
  }

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
      <Fragment>
        <Header renderTabs={true} />
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={appLayout.primaryContent}>
            <ListBox checklists={checklists}
              reviewFormID={reviewFormID}
              reviewFormDetial={reviewFormDetial}
              updateChecklistReviewChecklistID={updateChecklistReviewChecklistID}
              updateChecklistReviewDetail={updateChecklistReviewDetail}
              addChecklistReview={addChecklistReview}
            ></ListBox>
          </div>
          <div className={appLayout.secondaryContent}>
            <SideBar />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  (state) => {return {
    checklists: state.checklists.listInHome,
    reviewFormID: state.checklists.reviewFormID,
    reviewFormDetial: state.checklists.reviewFormDetial,
  }; },
  (dispatch) => { return {
    getHomeChecklists: () => { dispatch(getHomeChecklists()); },
    updateChecklistReviewChecklistID: (value) => { dispatch(updateChecklistReviewChecklistID(value)); },
    updateChecklistReviewDetail: (value) => { dispatch(updateChecklistReviewDetail(value)); },
    addChecklistReview: () => { dispatch(addChecklistReview()); }
  };}
)(Checklist);