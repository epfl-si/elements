import {
  BASE_URL_UPDATE,
  TOGGLE_CODE,
  TOGGLE_MENU,
} from "../actions/navigation";

const defaultState = {
  showMenu: false,
  showAllCode: true,
};

export default function navigationReducer(state = defaultState, action) {
  switch(action.type) {
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
    default: return state;
  }
}
