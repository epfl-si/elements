import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Theme } from './Theme';

import { actions as atomicActions } from '../../store/atomic';
import { actions as docsActions } from '../../store/docs';
import { actions as navigationActions } from '../../store/navigation';

import Sidebar from '../Sidebar/Sidebar';
import Toolbar from '../Toolbar/Toolbar';
import Alert from '../Alert/Alert';
import SingleStyleguide from '../../views/Single/SingleStyleguide';
import SingleFull from '../../views/Single/SingleFull';
import SinglePage from '../../views/Single/SinglePage';
import Doc from '../../views/Doc/Doc';
import Colors from '../../views/Colors/Colors';

import './App.css';

const App = ({
  getComponents,
  getDocs,
  history,
  location,
  navigation,
  setBaseURL,
}) => {
  const updateHook = () => {
    setTimeout(() => {
      document.dispatchEvent(new Event('ToolboxReady'));
    }, 500);
  };

  useEffect(() => {
    // Start init actions
    setBaseURL(location.pathname);
    getComponents();
    getDocs();
    updateHook();
    history.listen(() => updateHook());
  }, [getComponents, getDocs, history, location.pathname, setBaseURL]);

  // useEffect(() => {
  //   updateHook();
  // }, [history]);

  // Remove styleguide shell from pages and full render of components
  const hasStyleguideShell =
    !location.pathname.includes('/pages/') &&
    !location.pathname.match(/\/full\/?$/);
  const fullHome = window.fullhome || false;
  const hasHomeStyleguideShell = !(fullHome && location.pathname === '/');

  if (hasStyleguideShell && hasHomeStyleguideShell) {
    return (
      <Theme className="styleguide">
        <div className="tlbx-toolbar-wrapper">
          <Toolbar />
        </div>
        <div
          className={`tlbx-sidebar-wrapper${
            navigation.showMenu ? ' tlbx-sidebar-open' : ''
          }`}
        >
          <Sidebar location={location} />
        </div>
        <div className="tlbx-content-wrapper">
          <Alert />
          <div className="tlbx-content">
            <Switch>
              {fullHome ? '' : <Route path="/" exact component={Doc} />}
              <Route path="/doc/:slug" component={Doc} />
              <Route path="/colors" component={Colors} />
              <Route path="/:type/:slug" component={SingleStyleguide} />
            </Switch>
          </div>
        </div>
      </Theme>
    );
  }

  return (
    <div>
      {fullHome ? <Route path="/" exact component={Doc} /> : ''}
      <Route path="/pages/:slug" exact component={SinglePage} />
      <Route path="/:type/:slug/:variant?/full" exact component={SingleFull} />
    </div>
  );
};

App.propTypes = {
  getComponents: PropTypes.func.isRequired,
  getDocs: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setBaseURL: PropTypes.func.isRequired,
};

const mapState = ({ atomic, docs, navigation }) => ({
  atomic,
  docs,
  navigation,
});

const mapDispatch = dispatch => {
  const { getComponents } = atomicActions;
  const { getDocs } = docsActions;
  const { setBaseURL } = navigationActions;
  return bindActionCreators(
    {
      getComponents,
      getDocs,
      setBaseURL,
    },
    dispatch,
  );
};

export default connect(
  mapState,
  mapDispatch,
)(App);
