import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import yaml from 'yamljs';
import Twig from 'twig';

import {
  GET_COMPONENTS,
  GET_MARKUP,
  setComponents,
  setComponentMarkup,
  setVariantMarkup,
} from '../actions/atomic';

/**
 * Will loop over window.sources and format the components/variant store structure
 *
 * @returns setComponents()
 */
export function getComponentsEpic(action$) {
  return action$.ofType(GET_COMPONENTS)
    .filter(action => action.payload.sources !== null)
    .map(({ payload }) => {
      // Loop over each components types
      Object.keys(payload)
        .map(type =>

          // Loop over each components
          // eslint-disable-next-line no-param-reassign
          payload[type] = payload[type].map((component, id) => {
            const isReady = typeof component === 'object';
            const path = `components/${type}/${component.name || component}/`;
            const config = isReady ? component : yaml.load(`${path}${component}.yml`);
            const markup = `${path}${config.name}.twig`;

            // format related variants collection
            const variants = config && config.variants ? config.variants.map((item, i) => {
              let variant = {};
              if (typeof item === 'string') {
                variant.name = item;
                variant.title = item;
              } else { variant = { ...item }; }

              return {
                ...variant,
                id: i,
                type,
                parent_id: id,
                parent: config.name,
                markup: `${path}${(`${config.name}-${variant.name}`).toLowerCase()}.twig`,
              };
            }) : [];

            // Return the full components + variants object
            return {
              id,
              type,
              ...config,
              markup,
              variants,
            };
          }));

      return payload;
    })
    .switchMap((result) => {
      return Observable.of(setComponents(result));
    });
}

/**
 * Will render the component/variant template file
 *
 * @returns setComponentMarkup()
 */
export function getMarkupEpic(action$) {
  return action$
    .ofType(GET_MARKUP)
    .switchMap(({ payload }) => {
      const fixPath = path => path.replace('./', payload.basePath);

      const component = payload.component || payload.variant;

      // Create the Twig object, then render it and return the result
      return new Promise((resolve) => {
        Twig.twig({
          href: fixPath(component.markup),
          namespaces: payload.types.reduce((acc, value) => {
            acc[value] = `./components/${value}/`;
            return acc;
          }, {}),
          load: (template) => {
            resolve({
              ...component,
              content: template.render(window.data),
            });
          },
        });
      }).then((result) => {
        const isVariant = result.parent_id !== undefined;
        return isVariant ? setVariantMarkup(result) : setComponentMarkup(result);
      });
    });
}
