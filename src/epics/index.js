import { combineEpics } from 'redux-observable';

import { searchBeersEpic } from './atomic';

export const rootEpic = combineEpics(
  searchBeersEpic,
);

export default rootEpic;

