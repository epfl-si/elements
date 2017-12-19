import {
  SEARCHED_BEERS_LOADING,
} from "../actions/atomic";

const defaultState = {};

export default function atomicReducer(state = defaultState, action) {
  switch(action.type) {
    case SEARCHED_BEERS_LOADING:
      return {
        ...state,
      };
    default: return state;
  }
}
