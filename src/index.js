import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';

import Store from './Store';
import App from './components/App/App';

const router = (
  <Provider store={Store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('styleguide')
);
