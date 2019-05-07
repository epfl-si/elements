import semver from 'semver';
import {
  SET_VERSIONS,
} from './alert-actions';

import initialState from './alert-initial-state';

export default function alertReducer(state = initialState, action) {
  switch (action.type) {

    case SET_VERSIONS:
      return {
        ...state,
        utils_remote_version: action.payload.utils,
        reader_remote_version: action.payload.reader,
        utils_diff: semver.gt(action.payload.utils, state.utils_local_version),
        reader_diff: semver.gt(action.payload.reader, state.reader_local_version),
      };

    default: return state;
  }
}
