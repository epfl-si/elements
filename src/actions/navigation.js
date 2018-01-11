export const BASE_URL_UPDATE = 'BASE_URL_UPDATE';

export function setBaseURL(currentPath) {
  return {
    type: BASE_URL_UPDATE,
    payload:  window.location.href.replace(currentPath, ''),
  }
}
