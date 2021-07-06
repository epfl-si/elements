import p from 'immer';
import nanoid from 'nanoid';

import {
  SET_COMPONENTS,
  SET_COMPONENT_MARKUP,
  SET_VARIANT_MARKUP,
} from './atomic-actions';

import initialState from './atomic-initial-state';

const atomicReducer = p((state = initialState, action) => {
  switch (action.type) {

    // Add the base components collection
    case SET_COMPONENTS:
      state.sources = action.payload;
      state.types = Object.keys(action.payload);
      state.sourcesOrder = window.sourcesOrder || null;
      state.updated = nanoid();
      break;

    // Update a specific component
    case SET_COMPONENT_MARKUP:
      state.sources[action.payload.type][action.payload.id].content = action.payload.content;
      state.updated = nanoid();
      break;

    // Update a specific variant inside it parent component
    case SET_VARIANT_MARKUP:
      state.sources[action.payload.type][action.payload.parent_id].variants[[action.payload.id]].content = action.payload.content;
      state.updated = nanoid();
      break;

    default: return state;
  }
});

export default atomicReducer;
