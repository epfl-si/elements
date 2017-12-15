import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import error from './atomic';

const rootReducer = combineReducers({
  atomic,
  routing: routerReducer,
});

export default rootReducer;
