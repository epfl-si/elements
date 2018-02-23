export const GET_COMPONENTS = 'GET_COMPONENTS';
export const GET_MARKUP = 'GET_MARKUP';
export const SET_COMPONENTS = 'SET_COMPONENTS';
export const SET_COMPONENT_MARKUP = 'SET_COMPONENT_MARKUP';
export const SET_VARIANT_MARKUP = 'SET_VARIANT_MARKUP';

export function getComponents() {
  return {
    type: GET_COMPONENTS,
    payload: window.sources || null,
  };
}

export function setComponents(components) {
  return {
    type: SET_COMPONENTS,
    payload: components,
  };
}

// If too many in parallel, use some kind of `pending_markup` status
export function getComponentMarkup(component, basePath) {
  return {
    type: GET_MARKUP,
    payload: { component, basePath },
  };
}

export function setComponentMarkup(component) {
  return {
    type: SET_COMPONENT_MARKUP,
    payload: component,
  };
}

export function getVariantMarkup(variant, basePath) {
  return {
    type: GET_MARKUP,
    payload: { variant, basePath },
  };
}

export function setVariantMarkup(variant) {
  return {
    type: SET_VARIANT_MARKUP,
    payload: variant,
  };
}
