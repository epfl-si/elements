import { combineEpics } from 'redux-observable';

import {
  getComponentsEpic,
  getMarkupEpic,
} from './atomic';

export const rootEpic = combineEpics(
  getComponentsEpic,
  getMarkupEpic,
);

export default rootEpic;

