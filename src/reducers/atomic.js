import {
  SET_COMPONENTS,
} from "../actions/atomic";

const defaultState = {};

export default function atomicReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_COMPONENTS:
      return {
        ...state,
        sources: action.payload,
      };
    default: return state;
  }
}
