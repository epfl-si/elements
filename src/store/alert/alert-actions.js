import axios from 'axios';

export const GET_VERSION = 'GET_VERSION';
export const SET_VERSION = 'SET_VERSION';

export const setVersion = (version) => {
  return {
    type: SET_VERSION,
    payload: version,
  };
}

export const getVersion = () => {
  return dispatch => {
    axios
      .get('https://cdn.jsdelivr.net/gh/frontend/toolbox-reader/package.json')
      .then(res => {
        dispatch(setVersion(res.data.version));
      })
      .catch(err => console.error(err));
  }
}

export default {
  GET_VERSION,
  SET_VERSION,
  setVersion,
  getVersion,
};
