import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';

import App from './components/App/App';
import printIcons from './components/Icon/Icons';

const router = (
  <Provider store={store}>
    <Router>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Router>
  </Provider>
);

$(function() {
  printIcons();

  ReactDOM.render(
    router,
    document.getElementById('styleguide')
  );
});
