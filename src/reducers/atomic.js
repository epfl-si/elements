import p from 'immer';

import {
  SET_COMPONENTS,
  SET_COMPONENT_MARKUP,
  SET_VARIANT_MARKUP,
} from '../actions/atomic';

const defaultState = {};

const atomicReducer = p((state = defaultState, action) => {
  switch (action.type) {

    // Add the base components collection
    case SET_COMPONENTS:
      state.sources = action.payload;
      state.types = Object.keys(action.payload);
      state.sourcesOrder = window.sourcesOrder || null;
      break;

    // Update a specific component
    case SET_COMPONENT_MARKUP:
      state.sources[action.payload.type][action.payload.id].content = action.payload.content;
      break;

    // Update a specific variant inside it parent component
    case SET_VARIANT_MARKUP:
      state.sources[action.payload.type][action.payload.parent_id].variants[[action.payload.id]].content = action.payload.content;
      break;

    default: return state;
  }
});

export default atomicReducer;
