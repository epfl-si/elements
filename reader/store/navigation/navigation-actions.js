export const BASE_URL_UPDATE = 'BASE_URL_UPDATE';
export const TOGGLE_CODE = 'TOGGLE_CODE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const BACK_FROM_PAGES = 'BACK_FROM_PAGES';

export const setBaseURL = (currentPath) => {
  return {
    type: BASE_URL_UPDATE,
    payload: window.location.href.replace(currentPath, ''),
  };
}

export const toggleCode = () => {
  return {
    type: TOGGLE_CODE,
  };
}

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
}

export const setBackFromPages = (payload) => {
  return {
    type: BACK_FROM_PAGES,
    payload
  };
}

export default {
  BASE_URL_UPDATE,
  TOGGLE_CODE,
  TOGGLE_MENU,
  BACK_FROM_PAGES,
  setBaseURL,
  toggleCode,
  toggleMenu,
  setBackFromPages,
};
