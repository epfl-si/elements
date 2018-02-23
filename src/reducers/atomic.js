import {
  SET_COMPONENTS,
  SET_COMPONENT_MARKUP,
  SET_VARIANT_MARKUP,
} from "../actions/atomic";

const defaultState = {};

export default function atomicReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_COMPONENTS:
      return {
        ...state,
        sources: action.payload,
      };
    case SET_COMPONENT_MARKUP:
      return {
        ...state,
        sources: {
          ...state.sources,
          [action.payload.type]: [
            ...state.sources[action.payload.type].slice(0, action.payload.id),
            action.payload,
            ...state.sources[action.payload.type].slice(action.payload.id + 1),
          ],
        },
      };
    case SET_VARIANT_MARKUP:
      return {
        ...state,
        sources: {
          ...state.sources,
          [action.payload.type]: [
            ...state.sources[action.payload.type].slice(0, action.payload.parent_id),
            {
              ...state.sources[action.payload.type][action.payload.parent_id],
              variants: [
                ...state.sources[action.payload.type][action.payload.parent_id].variants.slice(0, action.payload.id),
                action.payload,
                ...state.sources[action.payload.type][action.payload.parent_id].variants.slice(action.payload.id + 1),
              ],
            },
            ...state.sources[action.payload.type].slice(action.payload.parent_id + 1),
          ],
        },
      };
    default: return state;
  }
}
