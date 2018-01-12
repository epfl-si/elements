export const GET_DOC = 'GET_DOC';

export function getDocs() {
  return {
    type: GET_DOC,
    payload:  window.docs || null,
  }
}
