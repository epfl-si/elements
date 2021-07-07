import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { reducers as atomic } from './atomic/index';
import { reducers as docs } from './docs/index';
import { reducers as navigation } from './navigation/index';

const rootReducer = (history) => combineReducers({
  atomic,
  docs,
  navigation,
  router: connectRouter(history),
});

export default rootReducer;
