import React, { Fragment } from 'react';

import appLayout from 'Shared/appLayout.module.css';
import styles from './styles.module.css';
import classnames from 'classnames';

import ListBox from 'Components/ChecklistScene/ListBox';
import { connect } from 'react-redux';
import { getChecklistScenes } from 'redux/checklistScene/actions';

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
          <ListBox scenes={scenes} url={url}></ListBox>
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