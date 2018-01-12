import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
// import Twig from 'twig';
import yaml from 'yamljs';

import {
  GET_COMPONENTS,
  GET_COMPONENT_MARKUP,
  // getComponentMarkup,
  setComponents,
  setComponentMarkup,
} from "../actions/atomic";

// function fixPath(path) {
//   const baseUrl = window.location.href.split('/#/')[0];
//   return `${baseUrl}/#/${path.replace('./', '')}`;
// }

export function getComponentsEpic(action$, store, deps) {
  return action$.ofType(GET_COMPONENTS)
    .filter(action => action.payload.sources !== null)
    .map(({ payload }) => {
      Object.keys(payload)
        .map((type) =>
          payload[type] = payload[type].map((component) => {
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
    .map(({ payload }) => payload)
    .switchMap((result) => {
      return Observable.of(setComponentMarkup(result));
    });
}
