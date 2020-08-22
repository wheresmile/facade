import React, { Fragment } from 'react';
import Header from 'Containers/Header';

import { connect } from 'react-redux';
import { getChecklistScenes } from 'redux/checklistScene/actions';
import { Switch, Route, withRouter } from 'react-router';
import All from './All';
import Item from './Item';

class ChecklistScene extends React.Component {
  render() {
    const {
      path,
      url,
    } = this.props.match;

    return (
      <Fragment>
        <Header renderTabs={true} />
        <Switch>
          <Route exact path={path}> <All url={url}></All> </Route>
          <Route path={`${path}/:sceneId`}> <Item></Item> </Route>
        </Switch>
        
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
)(withRouter(ChecklistScene));