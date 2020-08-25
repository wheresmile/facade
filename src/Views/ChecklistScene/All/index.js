import React, { Fragment } from 'react';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import ListBox from 'Components/ChecklistScene/ListBox';
import { connect } from 'react-redux';
import { getChecklistScenes } from 'redux/checklistScene/actions';
import SideBar from './sidebar';

class All extends React.Component {
  componentDidMount() {
    const {
      getChecklistScenes,
      scenes,
    } = this.props;

    if (scenes.length === 0){
      getChecklistScenes();
    }
  }
  render() {
    const {
      scenes,
      url,
    } = this.props;
    return (
      <Fragment>
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <div className={appLayout.primaryContent}>
            <ListBox scenes={scenes} url={url}></ListBox>
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
    scenes: state.checklistScenes.ScenesList,
  }},
  (dispatch) => {return {
    getChecklistScenes: () => { dispatch(getChecklistScenes())} 
  }}
)(All);