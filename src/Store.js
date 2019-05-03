import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/';
import rootEpic from './epics/'; // eslint-disable-line import/no-named-as-default

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

export function configureStore(deps = {}) {

  const routingMiddleware = routerMiddleware(history);

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
      applyMiddleware(routingMiddleware),
    ),
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore;
