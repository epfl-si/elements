import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
  ),
);

export default store;
