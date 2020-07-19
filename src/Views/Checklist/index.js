import React from 'react';
import PropTypes from 'prop-types';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import SideBar from 'Components/SideBar';
import DiscussionNew from 'Components/Discussion/NewButton';
import { connect } from 'react-redux';
import { getChecklists } from 'App/actions';
import ListBox from 'Components/Checklist/ListBox';

class Checklist extends React.Component {
  componentDidMount() {
    const {
      getHomeChecklists
    } = this.props;
    getHomeChecklists();
  }

  render() {
    const { currentForum } = this.props;
    return (
      <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
        <div className={appLayout.primaryContent}>
          <ListBox></ListBox>
          <div className={classnames(appLayout.showOnMediumBP, styles.newDiscussionBtn)}>
            <DiscussionNew className={classnames(appLayout.showOnMediumBP, styles.newDiscussionBtn)} />
          </div>
          
        </div>
        <div className={appLayout.secondaryContent}>
          <SideBar currentForum={currentForum} />
        </div>
      </div>
    );
  }
}


ListBox.propTypes = {
  type: PropTypes.oneOf(['general', 'pinned']),
  loading: PropTypes.bool,
  discussions: PropTypes.array,
  currentForum: PropTypes.string,
  activeSortingMethod: PropTypes.string,
  onChangeSortingMethod: PropTypes.func,
  userProfile: PropTypes.bool,
};

export default connect(
  (state) => {return {
    checklists: state.app.checklists,
  }; },
  (dispatch) => { return {
    getHomeChecklists: () => { dispatch(getChecklists()); },
  };}
)(Checklist);