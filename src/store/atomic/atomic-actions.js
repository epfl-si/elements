import yaml from 'yamljs';
import Twig from 'twig';

export const GET_COMPONENTS = 'GET_COMPONENTS';
export const GET_MARKUP = 'GET_MARKUP';
export const SET_COMPONENTS = 'SET_COMPONENTS';
export const SET_COMPONENT_MARKUP = 'SET_COMPONENT_MARKUP';
export const SET_VARIANT_MARKUP = 'SET_VARIANT_MARKUP';

export const setComponents = components => {
  return {
    type: SET_COMPONENTS,
    payload: components,
  };
};

export const getComponents = () => {
  const payload = window.sources || null;

  return dispatch => {
    if (payload !== null) {
      // Loop over each components types
      Object.keys(payload).map(
        type =>
          // Loop over each components
          // eslint-disable-next-line no-param-reassign
          (payload[type] = payload[type].map((component, id) => {
            const isReady = typeof component === 'object';
            const path = `components/${type}/${component.name || component}/`;
            const config = isReady
              ? component
              : yaml.load(`${path}${component}.yml`);
            const markup = `${path}${config.name}.twig`;

            // format related variants collection
            const variants =
              config && config.variants
                ? config.variants.map((item, i) => {
                    let variant = {};
                    if (typeof item === 'string') {
                      variant.name = item;
                      variant.title = item;
                    } else {
                      variant = { ...item };
                    }

                    return {
                      ...variant,
                      id: i,
                      type,
                      parent_id: id,
                      parent: config.name,
                      markup: `${path}${`${config.name}-${
                        variant.name
                      }`.toLowerCase()}.twig`,
                    };
                  })
                : [];

            // Return the full components + variants object
            return {
              id,
              type,
              ...config,
              markup,
              variants,
            };
          })),
      );

      dispatch(setComponents(payload));
    }
  };
};

export const setComponentMarkup = component => {
  return {
    type: SET_COMPONENT_MARKUP,
    payload: component,
  };
};

export const setVariantMarkup = variant => {
  return {
    type: SET_VARIANT_MARKUP,
    payload: variant,
  };
};

// If too many in parallel, use some kind of `pending_markup` status
export const getMarkup = payload => {
  return dispatch => {
    const fixPath = path => path.replace('./', payload.basePath);
    const component = payload.component || payload.variant;

    // Create the Twig object, then render it and return the result
    // eslint-disable-next-line
    const result = new Promise(resolve => {
      Twig.twig({
        href: fixPath(component.markup),
        namespaces: payload.types.reduce((acc, value) => {
          acc[value] = `./components/${value}/`;
          return acc;
        }, {}),
        load: template => {
          resolve({
            ...component,
            content: template.render(window.data),
          });
        },
      });
    }).then(result => {
      const isVariant = result.parent_id !== undefined;
      if (isVariant) {
        dispatch(setVariantMarkup(result));
      } else {
        dispatch(setComponentMarkup(result));
      }
    });
  };
};

export const getComponentMarkup = (component, basePath, types) => {
  const payload = { component, basePath, types };

  return dispatch => {
    dispatch(getMarkup(payload));
  };
};

export const getVariantMarkup = (variant, basePath, types) => {
  const payload = { variant, basePath, types };

  return dispatch => {
    dispatch(getMarkup(payload));
  };
};
