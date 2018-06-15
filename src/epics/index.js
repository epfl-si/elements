import { combineEpics } from 'redux-observable';

import {
  getComponentsEpic,
  getMarkupEpic,
} from './atomic';

import {
  getDocContentEpic,
} from './docs';

import {
  getPackageLatestVersion,
} from './alert';

export const rootEpic = combineEpics(
  getComponentsEpic,
  getMarkupEpic,
  getDocContentEpic,
  getPackageLatestVersion,
);

export default rootEpic;

