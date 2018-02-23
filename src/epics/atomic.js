import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import yaml from 'yamljs';
import Twig from 'twig';

import {
  GET_COMPONENTS,
  GET_COMPONENT_MARKUP,
  setComponents,
  setComponentMarkup,
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

            const variants = config && config.variants ? config.variants.map(key => {
              const variant = Object.keys(key)[0];
              return {
                title: key[variant],
                markup: `${path}${(`${component}-${variant}`).toLowerCase()}.twig`,
              };
            }) : null;

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
  return action$.ofType(GET_COMPONENT_MARKUP)
    .switchMap(({ payload }) => {
      const fixPath = path => path.replace('./', payload.basePath);

      console.log(payload.component.markup);

      return new Promise((resolve, reject) => {
        Twig.twig({
          id: payload.component.name,
          href: fixPath(payload.component.markup),
          namespaces: {
            'atoms': './components/atoms/',
            'molecules': './components/molecules/',
            'organisms': './components/organisms/',
            'pages': './components/pages/',
          },
          load: function(template) {
            payload.component.content = template.render(window.data);
            resolve(payload.component);
          }
        });
      }).then(component => setComponentMarkup(component));
    });
}
