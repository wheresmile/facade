import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appReducer, userReducer } from "./reducers";
import { loginFormReducer } from 'Views/Account/reducers';
import { checklistReviewsReducer } from 'Views/ChecklistReview/reducers';

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  loginForm: loginFormReducer,
  checklistReviews: checklistReviewsReducer,
});


// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  /* preloaded state, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);