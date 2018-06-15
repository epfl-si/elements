export const GET_VERSION = 'GET_VERSION';
export const SET_VERSION = 'SET_VERSION';

export function getVersion() {
  return {
    type: GET_VERSION,
  };
}

export function setVersion(version) {
  return {
    type: SET_VERSION,
    payload: version,
  };
}
