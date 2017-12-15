import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import {
  SEARCHED_BEERS_LOADING,
  searchBeersError
} from "../actions/atomic";

export function searchBeersEpic(action$, store, deps) {
  return action$.ofType(SEARCHED_BEERS_LOADING)
    .switchMap(({ payload }) => {

    })
}
