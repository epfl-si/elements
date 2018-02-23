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
} from "../actions/atomic";

export function getComponentsEpic(action$, store, deps) {
  return action$.ofType(GET_COMPONENTS)
    .filter(action => action.payload.sources !== null)
    .map(({ payload }) => {
      Object.keys(payload)
        .map((type) =>
          payload[type] = payload[type].map((component, id) => {
            const path = `components/${type}/${component}/`;
            const config = yaml.load(`${path}/${component}.yml`);
            const markup = `${path}${component}.twig`;

            const variants = config && config.variants ? config.variants.map((item, i) => {
              const variant = typeof item === 'string' ? item : Object.keys(item)[0];
              return {
                id: i,
                type,
                parent_id: id,
                parent: config.name,
                name: variant,
                title: item[variant] || variant,
                markup: `${path}${(`${component}-${variant}`).toLowerCase()}.twig`,
              };
            }) : [];

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

export function getComponentMarkupEpic(action$, store, deps) {
  return action$
    .ofType(GET_MARKUP)
    .switchMap(({ payload }) => {
      const fixPath = path => path.replace('./', payload.basePath);

      const component = payload.component || payload.variant;
      const isVariant = payload.variant !== undefined;

      return new Promise((resolve, reject) => {
        Twig.twig({
          href: fixPath(component.markup),
          namespaces: {
            'atoms': './components/atoms/',
            'molecules': './components/molecules/',
            'organisms': './components/organisms/',
            'pages': './components/pages/',
          },
          load: function(template) {
            component.content = template.render(window.data);
            resolve(component);
          }
        });
      }).then((component) => {
        const isVariant = component.parent_id !== undefined;
        return isVariant ? setVariantMarkup(component) : setComponentMarkup(component);
      });
    });
}
