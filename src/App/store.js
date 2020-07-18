import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// root reducer for app
const rootReducer = combineReducers({});


// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  /* preloaded state, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);