import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';

import Store from './Store';
import App from './components/App/App';
import printIcons from './components/Icon/Icons';

const router = (
  <Provider store={Store}>
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

