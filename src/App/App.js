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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"> <Checklist /> </Route>
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

export default App;
