import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from 'Containers/Header';
import Motto from 'Views/Motto';
import Checklist from 'Views/Checklist';
import NotFound from 'Views/NotFound';
import { connect } from 'react-redux';

import { getHomeTabs } from './actions';
import Discussion from 'Views/Discussion';

class App extends React.Component {
  componentDidMount() {
    const {
      getHomeTabs,
    } = this.props;

    // get home tab list
    getHomeTabs();
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/"> <Discussion /> </Route>
            <Route path="/checklist"> <Checklist /> </Route>
            <Route path="/metto"> <Motto /> </Route>
            <Route path="/user"> <Motto /> </Route>
            <Route path=":forum/new_discussion"> <Motto /> </Route>
            <Route path="*"> <NotFound /> </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => {return {
      checklists: state.app.checklists,
      currentTab: state.app.currentTab,
    };},
  (dispatch) => { return {
    getHomeTabs: () => { dispatch(getHomeTabs()); },
  };}
)(App);
