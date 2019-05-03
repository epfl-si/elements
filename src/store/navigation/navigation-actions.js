export const BASE_URL_UPDATE = 'BASE_URL_UPDATE';
export const TOGGLE_CODE = 'TOGGLE_CODE';
export const TOGGLE_MENU = 'TOGGLE_MENU';

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

export default {
  BASE_URL_UPDATE,
  TOGGLE_CODE,
  TOGGLE_MENU,
  setBaseURL,
  toggleCode,
  toggleMenu,
};
