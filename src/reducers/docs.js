import {
  GET_DOC,
} from "../actions/docs";

const defaultState = {};

export default function docsReducer(state = defaultState, action) {
  switch(action.type) {
    case GET_DOC:
      return {
        ...state,
        docs_list: action.payload,
      };
    default: return state;
  }
}
