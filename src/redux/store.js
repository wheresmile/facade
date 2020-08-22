import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { checklistReviewsReducer } from 'redux/checklistReview/reducers';
import { appReducer } from './app/reducers';
import { userReducer } from './user/reducers';
import { checklistReducer } from './checklist/reducers';
import { accountFormReducer } from './account/reducers';
import { checklistScenesReducer } from './checklistScene/reducers';

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
  checklists: checklistReducer,
  user: userReducer,
  accountForm: accountFormReducer,
  checklistScenes: checklistScenesReducer,
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