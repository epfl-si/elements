import nanoid from 'nanoid';

import {
  GET_DOCS,
  SET_DOC_CONTENT,
  CLEAN_DOC_CONTENT,
} from './docs-actions';

import initialState from './docs-initial-state';

export default function docsReducer(state = initialState, action) {
  switch (action.type) {

    // Add the base doc collection
    case GET_DOCS:
      return {
        ...state,
        docs_list: action.payload,
        updated: nanoid(),
      };

    // Set the current_doc object
    case SET_DOC_CONTENT:
      return {
        ...state,
        current_doc: action.payload,
        updated: nanoid(),
      };

    // Reset the current_doc object to it default state
    case CLEAN_DOC_CONTENT:
      return {
        ...state,
        current_doc: initialState.current_doc,
        updated: nanoid(),
      };
    default: return state;
  }
}
