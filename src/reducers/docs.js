import {
  GET_DOCS,
  SET_DOC_CONTENT,
  CLEAN_DOC_CONTENT,
} from '../actions/docs';

const defaultState = {
  current_doc: {
    content: ' ',
  },
};

export default function docsReducer(state = defaultState, action) {
  switch (action.type) {

    // Add the base doc collection
    case GET_DOCS:
      return {
        ...state,
        docs_list: action.payload,
      };

    // Set the current_doc object
    case SET_DOC_CONTENT:
      return {
        ...state,
        current_doc: action.payload,
      };

    // Reset the current_doc object to it default state
    case CLEAN_DOC_CONTENT:
      return {
        ...state,
        current_doc: defaultState.current_doc,
      };
    default: return state;
  }
}
