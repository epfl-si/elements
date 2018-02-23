import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import axios from 'axios';

import {
  GET_DOC_CONTENT,
  setDocContent,
} from '../actions/docs';

export function getDocContentEpic(action$, store, deps) {
  return action$
    .ofType(GET_DOC_CONTENT)
    .switchMap(({ payload }) => {
      const path = `./docs/${payload.slug.replace(/--/g, '/')}`;
      const format = payload.slug.split('.')[payload.slug.split('.').length - 1];

      return axios
        .get(path)
        .then(res => setDocContent({
          format,
          content: res.data,
        }));
    });
}
