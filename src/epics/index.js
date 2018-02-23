import { combineEpics } from 'redux-observable';

import {
  getComponentsEpic,
  getMarkupEpic,
} from './atomic';

import {
  getDocContentEpic,
} from './docs';

export const rootEpic = combineEpics(
  getComponentsEpic,
  getMarkupEpic,
  getDocContentEpic,
);

export default rootEpic;

