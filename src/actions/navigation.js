export const BASE_URL_UPDATE = 'BASE_URL_UPDATE';

export function setBaseURL(currentPath) {
  console.log(currentPath, window.location.href.replace(currentPath, ''));
  return {
    type: BASE_URL_UPDATE,
    payload:  window.location.href.replace(currentPath, ''),
  }
}
