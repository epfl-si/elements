export const GET_COMPONENTS = 'GET_COMPONENTS';
export const GET_COMPONENT_MARKUP = 'GET_COMPONENT_MARKUP';
export const SET_COMPONENTS = 'SET_COMPONENTS';
export const SET_COMPONENT_MARKUP = 'SET_COMPONENT_MARKUP';

export function getComponents() {
  return {
    type: GET_COMPONENTS,
    payload: window.sources || null,
  }
}

export function setComponents(components) {
  return {
    type: SET_COMPONENTS,
    payload: components,
  }
}

export function getComponentMarkup(type, component, path) {
  return {
    type: GET_COMPONENT_MARKUP,
    payload: {type, component, path},
  }
}


export function setComponentMarkup(component) {
  return {
    type: SET_COMPONENT_MARKUP,
    payload: component,
  }
}
