import {
  BASE_URL_UPDATE,
} from "../actions/navigation";

const defaultState = {
  showMenu: true,
  showAllCode: true,
};

export default function navigationReducer(state = defaultState, action) {
  switch(action.type) {
    case BASE_URL_UPDATE:
      return {
        ...state,
        base_url: action.payload,
      };
    default: return state;
  }
}
