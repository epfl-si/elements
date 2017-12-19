import 'rxjs/add/operator/switchMap';

import {
  SEARCHED_BEERS_LOADING
} from "../actions/atomic";

export function searchBeersEpic(action$, store, deps) {
  return action$.ofType(SEARCHED_BEERS_LOADING)
    .switchMap(({ payload }) => {
      console.log('Do something epic !');
    })
}
