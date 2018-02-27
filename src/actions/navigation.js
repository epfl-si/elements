export const BASE_URL_UPDATE = 'BASE_URL_UPDATE';
export const TOGGLE_CODE = 'TOGGLE_CODE';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function setBaseURL(currentPath) {
  return {
    type: BASE_URL_UPDATE,
    payload: window.location.href.replace(currentPath, ''),
  };
}

export function toggleCode() {
  return {
    type: TOGGLE_CODE,
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}
