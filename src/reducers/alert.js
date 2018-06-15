import {
  SET_VERSION,
} from '../actions/alert';

const defaultState = {
  local_version: window.builder || null,
};

export default function alertReducer(state = defaultState, action) {
  switch (action.type) {

    case SET_VERSION:
      return {
        ...state,
        remote_version: action.payload,
      };

    default: return state;
  }
}
