import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom';
import './index.css';

import configureStore, { history } from './configureStore';

import App from './components/App/App';
import printIcons from './components/Icon/Icons';

const store = configureStore();

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

printIcons();

ReactDOM.render(
  router,
  document.getElementById('styleguide')
);

