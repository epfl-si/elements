import { switchMap } from 'rxjs/Operator';
import { ofType } from 'redux-observable';
import axios from 'axios';

import {
  GET_DOC_CONTENT,
  setDocContent,
} from '../actions/docs';

/**
 * Will get the doc file and return the content + format to the store
 *
 * @returns setDocContent()
 */
export function getDocContentEpic(action$) {
  console.log('run doc epix');
  return action$.pipe(
    ofType(GET_DOC_CONTENT),
    switchMap(({ payload }) => {
      const path = `./docs/${payload.slug.replace(/--/g, '/')}`;
      const format = payload.slug.split('.')[payload.slug.split('.').length - 1];

      return axios
        .get(path)
        .then(res => setDocContent({
          format,
          content: res.data,
        }));
    }),
  );
}

export default getDocContentEpic;
