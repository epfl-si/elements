import {
  BASE_URL_UPDATE,
  TOGGLE_CODE,
  TOGGLE_MENU,
  BACK_FROM_PAGES,
} from './navigation-actions';

import initialState from './navigation-initial-state'

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    // Set the current app url
    case BASE_URL_UPDATE:
      return {
        ...state,
        base_url: action.payload,
      };

    // Toggle component's code display
    case TOGGLE_CODE:
      return {
        ...state,
        showAllCode: !state.showAllCode,
      };

    // Toggle mobile navigation (sidebar)
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    // Set if last page was a “page”
    case BACK_FROM_PAGES:
      return {
        ...state,
        backFromPages: action.payload,
      };
    default: return state;
  }
}
