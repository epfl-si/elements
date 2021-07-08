import axios from 'axios';

export const GET_DOCS = 'GET_DOCS';
export const GET_DOC_CONTENT = 'GET_DOC_CONTENT';
export const SET_DOC_CONTENT = 'SET_DOC_CONTENT';
export const CLEAN_DOC_CONTENT = 'CLEAN_DOC_CONTENT';

export const getDocs = () => {
  return {
    type: GET_DOCS,
    payload: window.docs || null,
  };
}

export const setDocContent = (doc) => {
  return {
    type: SET_DOC_CONTENT,
    payload: doc,
  };
}

export const getDocContent = (slug) => {
  return dispatch => {
    const path = `./docs/${slug.replace(/--/g, '/')}`;
    const format = slug.split('.')[slug.split('.').length - 1];

    axios
      .get(path)
      .then(res => {
        dispatch(setDocContent({
          format,
          content: res.data,
        }));
      });
  };
}

export const cleanDocContent = () => {
  return {
    type: CLEAN_DOC_CONTENT,
  };
}

export default {
  GET_DOCS,
  GET_DOC_CONTENT,
  SET_DOC_CONTENT,
  CLEAN_DOC_CONTENT,
  getDocs,
  setDocContent,
  getDocContent,
  cleanDocContent,
};
