import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Motto from 'Views/Motto';
import Checklist from 'Views/Checklist';
import NotFound from 'Views/NotFound';
import { connect } from 'react-redux';

import { getHomeTabs, getUserInfo } from './actions';
import SignIn from 'Views/Account/SignIn';
import SignUp from 'Views/Account/SignUp';
import ChecklistReview from 'Views/ChecklistReview';

class App extends React.Component {
  componentDidMount() {
    const {
      getHomeTabs,
      getUserInfo,
    } = this.props;

    // get home tab list
    getHomeTabs();
    getUserInfo();
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/"> <ChecklistReview /> </Route>
            <Route path="/signin"> <SignIn /> </Route>
            <Route path="/signup"> <SignUp /> </Route>
            <Route path="/checklist"> <Checklist /> </Route>
            <Route path="/motto"> <Motto /> </Route>
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
  (state) => {
    return {
      checklists: state.app.checklists,
      currentTab: state.app.currentTab,
    };},
  (dispatch) => { return {
    getHomeTabs: () => { dispatch(getHomeTabs()); },
    getUserInfo: () => { dispatch(getUserInfo()); },
  };}
)(App);
