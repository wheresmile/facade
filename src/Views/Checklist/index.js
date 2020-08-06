import React, { Fragment } from 'react';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import SideBar from 'Components/ChecklistReview/SideBar';
import { connect } from 'react-redux';
import ListBox from 'Components/Checklist/ListBox';
import Header from 'Containers/Header';
import { getHomeChecklists, updateChecklistReviewChecklistID, updateChecklistReviewDetail } from 'redux/checklist/actions';

class Checklist extends React.Component {
  componentDidMount() {
    const {
      getHomeChecklists
    } = this.props;
    getHomeChecklists();
  }

  render() {
    const { checklists } = this.props;
    return (
      <Fragment>
        <Header renderTabs={true} />
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={appLayout.primaryContent}>
            <ListBox checklists={checklists}></ListBox>
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
  }; },
  (dispatch) => { return {
    getHomeChecklists: () => { dispatch(getHomeChecklists()); },
    updateChecklistReviewChecklistID: (value) => { updateChecklistReviewChecklistID(value); },
    updateChecklistReviewDetail: (value) => { updateChecklistReviewDetail(value); },
  };}
)(Checklist);