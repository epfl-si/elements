import {
  SEARCHED_BEERS_LOADING,
} from "../actions/atomic";

export default function atomicReducer(state = {}, action) {
  switch(action.type) {
    case SEARCHED_BEERS_LOADING:
      return {
        ...state,
      };
    default: return state;
  }
}
