import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import atomic from './atomic';
import navigation from './navigation';

const rootReducer = combineReducers({
  atomic,
  navigation,
  routing: routerReducer,
});

export default rootReducer;
