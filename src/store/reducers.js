import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducers as alert } from './alert/index';
import { reducers as atomic } from './atomic/index';
import { reducers as docs } from './docs/index';
import { reducers as navigation } from './navigation/index';

const rootReducer = combineReducers({
  alert,
  atomic,
  docs,
  navigation,
  router: routerReducer,
});

export default rootReducer;
