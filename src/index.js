import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';

import configureStore from './configureStore';

import App from './components/App/App';
import printIcons from './components/Icon/Icons';

const store = configureStore();

console.log(store);

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
  document.getElementById('styleguide')
);

