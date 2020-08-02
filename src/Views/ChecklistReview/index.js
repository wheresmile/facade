import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllChecklistReviews, starChecklistView } from './actions';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import Header from 'Containers/Header';
import ListBox from 'Components/ChecklistReview/ListBox';
import SideBar from 'Components/ChecklistReview/SideBar';

class ChecklistReview extends React.Component {
  componentDidMount() {
    const {
      getAllChecklistReviews,
      ReviewsList,
    } = this.props;
    // 如果还没有拉取过，就拉取一次
    if (ReviewsList.length === 0) {
      getAllChecklistReviews();
    }
  }
  render() {
    const {
      starChecklistViewCB,
      ReviewsList,
    } = this.props;

    return (
      <Fragment>
        <Header renderTabs={true} />
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={appLayout.primaryContent}>
            <ListBox reviewsList={ReviewsList} 
              starCallBack={starChecklistViewCB}
            />
          </div>
          <div className={appLayout.secondaryContent}>
            <SideBar></SideBar>
          </div>
        </div>
        
      </Fragment>
    )
  }
}


export default connect(
  (state) => {return {
    ReviewsList: state.checklistReviews.ReviewsList,
  }; },
  (dispatch) => { return {
    getAllChecklistReviews: () => { dispatch(getAllChecklistReviews()); },
    starChecklistViewCB: (reviewID) => {dispatch(starChecklistView(reviewID))}
  };}
)(ChecklistReview);