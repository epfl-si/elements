import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Store from './Store';

import App from './components/App/App';
import printIcons from './components/Icon/Icons';

const store = Store();

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

printIcons();

ReactDOM.render(
  router,
  document.getElementById('styleguide'),
);

