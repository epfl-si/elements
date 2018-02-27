import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import atomic from './atomic';
import docs from './docs';
import navigation from './navigation';

const rootReducer = combineReducers({
  atomic,
  docs,
  navigation,
  router: routerReducer,
});

export default rootReducer;
