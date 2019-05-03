import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(routingMiddleware),
  ),
);

export default store;
