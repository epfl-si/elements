import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
