import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import SideBar from 'Components/Checklist/SideBar';
import LinkButton from 'Components/Buttons/LinkButton';
import { connect } from 'react-redux';
import { getHomeChecklists } from 'App/actions';
import ListBox from 'Components/Checklist/ListBox';
import Header from 'Containers/Header';

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
      <Fragment>
        <Header renderTabs={true} />
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={appLayout.primaryContent}>
            <ListBox></ListBox>
            <div className={classnames(appLayout.showOnMediumBP, styles.newDiscussionBtn)}>
              <LinkButton className={classnames(appLayout.showOnMediumBP, styles.newDiscussionBtn)} 
                description="今日已有 10 人打卡"
              />
            </div>
            
          </div>
          <div className={appLayout.secondaryContent}>
            <SideBar currentForum={currentForum} />
          </div>
        </div>
      </Fragment>
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
    getHomeChecklists: () => { dispatch(getHomeChecklists()); },
  };}
)(Checklist);