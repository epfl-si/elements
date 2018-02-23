export const GET_DOCS = 'GET_DOCS';
export const GET_DOC_CONTENT = 'GET_DOC_CONTENT';
export const SET_DOC_CONTENT = 'SET_DOC_CONTENT';
export const CLEAN_DOC_CONTENT = 'CLEAN_DOC_CONTENT';

export function getDocs() {
  return {
    type: GET_DOCS,
    payload: window.docs || null,
  };
}

export function getDocContent(slug, basePath) {
  return {
    type: GET_DOC_CONTENT,
    payload: { slug, basePath },
  };
}

export function setDocContent(doc) {
  return {
    type: SET_DOC_CONTENT,
    payload: doc,
  };
}

export function cleanDocContent() {
  return {
    type: CLEAN_DOC_CONTENT,
  };
}
