import { combineEpics } from 'redux-observable';

import {
  getComponentsEpic,
  getComponentMarkupEpic,
} from './atomic';

export const rootEpic = combineEpics(
  getComponentsEpic,
  getComponentMarkupEpic,
);

export default rootEpic;

