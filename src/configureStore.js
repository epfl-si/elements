import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from "./epics/index";

const defaultState = {};

export function configureStore(deps = {}) {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
      ...deps
    }
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    defaultState,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
}
