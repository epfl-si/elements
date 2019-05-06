import axios from 'axios';

export const GET_VERSIONS = 'GET_VERSION';
export const SET_VERSIONS = 'SET_VERSION';

export const setVersions = (versions) => {
  return {
    type: SET_VERSIONS,
    payload: versions,
  };
}

export const getVersions = () => {
  return dispatch => {
    const utils = axios
      .get('https://cdn.jsdelivr.net/gh/frontend/toolbox-utils/package.json')
      .then(res => res.data.version)
      .catch(err => console.error(err));

    const reader = axios
      .get('https://cdn.jsdelivr.net/gh/frontend/toolbox-reader/package.json')
      .then(res => res.data.version)
      .catch(err => console.error(err));

    Promise.all([utils, reader]).then(values => {
      dispatch(setVersions({
        utils: values[0],
        reader: values[1],
      }));
    });
  }
}

export default {
  GET_VERSIONS,
  SET_VERSIONS,
  setVersions,
  getVersions,
};
