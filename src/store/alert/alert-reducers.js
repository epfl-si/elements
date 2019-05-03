import {
  SET_VERSION,
} from './alert-actions';

import initialState from './alert-initial-state';

export default function alertReducer(state = initialState, action) {
  switch (action.type) {

    case SET_VERSION:
      return {
        ...state,
        remote_version: action.payload,
      };

    default: return state;
  }
}
