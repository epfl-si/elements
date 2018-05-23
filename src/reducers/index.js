import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import alert from './alert';
import atomic from './atomic';
import docs from './docs';
import navigation from './navigation';

const rootReducer = combineReducers({
  alert,
  atomic,
  docs,
  navigation,
  router: routerReducer,
});

export default rootReducer;
