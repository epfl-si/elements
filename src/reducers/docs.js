import {
  GET_DOCS,
  SET_DOC_CONTENT,
} from "../actions/docs";

const defaultState = {
  current_doc: {},
};

export default function docsReducer(state = defaultState, action) {
  switch(action.type) {
    case GET_DOCS:
      return {
        ...state,
        docs_list: action.payload,
      };
    case SET_DOC_CONTENT:
      return {
        ...state,
        current_doc: action.payload,
      };
    default: return state;
  }
}
