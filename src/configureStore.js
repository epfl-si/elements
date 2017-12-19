import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/';
import rootEpic from './epics/';

export function configureStore(deps = {}) {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
      ...deps
    }
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );
}

export default configureStore;
