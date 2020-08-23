import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';
import ListBox from 'Components/Checklist/ListBox';
import { updateChecklistReviewChecklistID, updateChecklistReviewDetail, addChecklistReview } from 'redux/checklist/actions';
import { getChecklistsOfScene } from 'redux/checklistScene/actions';


class Item extends React.Component {
  componentDidMount() {
    const {
      sceneId,
    } = this.props.match.params;

    const {
      getChecklistOfScene,
    } = this.props;

    getChecklistOfScene(sceneId);
  }
  render() {
    const {
      sceneId,
    } = this.props.match.params;

    const {
      checklists,
      reviewFormID,
      reviewFormDetial,
      ScenesMap,

      updateChecklistReviewChecklistID,
      updateChecklistReviewDetail,
      addChecklistReview,
    } = this.props;
    let scene = ScenesMap[sceneId];

    return (
      <Fragment>
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={styles.sceneTitle}>
            {scene && scene.description}
          </div>
          <ListBox checklists={checklists}
            reviewFormID={reviewFormID}
            reviewFormDetial={reviewFormDetial}
            updateChecklistReviewChecklistID={updateChecklistReviewChecklistID}
            updateChecklistReviewDetail={updateChecklistReviewDetail}
            addChecklistReview={addChecklistReview}
          ></ListBox>
        </div>
      </Fragment>
    )
  }
}

export default connect(
  (state) => {return {
    ScenesMap: state.checklistScenes.ScenesMap,
    checklists: state.checklistScenes.checklists,
    reviewFormID: state.checklists.reviewFormID,
    reviewFormDetial: state.checklists.reviewFormDetial,
  }},
  (dispatch) => {return {
    getChecklistOfScene: (sceneId) => { dispatch(getChecklistsOfScene(sceneId)) },
    updateChecklistReviewChecklistID: (value) => { dispatch(updateChecklistReviewChecklistID(value)); },
    updateChecklistReviewDetail: (value) => { dispatch(updateChecklistReviewDetail(value)); },
    addChecklistReview: () => { dispatch(addChecklistReview()); }
  }}
)(withRouter(Item));