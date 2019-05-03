import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Theme } from './Theme';

import { actions as atomicActions } from '../../store/atomic';
import { actions as docsActions } from '../../store/docs';
import { actions as navigationActions } from '../../store/navigation';

import Alert from '../Alert/Alert';
import Colors from '../../views/Colors/Colors';
import Doc from '../../views/Doc/Doc';
import Sidebar from '../Sidebar/Sidebar';
import SingleFull from '../../views/Single/SingleFull';
import SinglePage from '../../views/Single/SinglePage';
import SingleStyleguide from '../../views/Single/SingleStyleguide';
import Toolbar from '../Toolbar/Toolbar';

import './App.css';

class App extends Component {
  componentWillMount() {
    // Start init actions
    this.props.setBaseURL(this.props.location.pathname);
    this.props.getComponents();
    this.props.getDocs();
  }

  componentDidMount() {
    // Send a ToolboxReady event when App is mounted and on each page change
    this.updateHook();
    this.props.history.listen(() => this.updateHook());
  }

  updateHook() {
    setTimeout(() => {
      document.dispatchEvent(new Event('ToolboxReady'));
    }, 500);
  }

  render() {
    // Remove styleguide shell from pages and full render of components
    const hasStyleguideShell =
      !this.props.location.pathname.includes('/pages/') &&
      !this.props.location.pathname.match(/\/full\/?$/);
    const fullHome = window.fullhome || false;
    const hasHomeStyleguideShell = !(
      fullHome && this.props.location.pathname === '/'
    );

    if (hasStyleguideShell && hasHomeStyleguideShell) {
      return (
        <div>
          <Alert />
          <Theme className="styleguide">
            <div className="tlbx-toolbar-wrapper">
              <Toolbar />
            </div>
            <div
              className={`tlbx-sidebar-wrapper${
                this.props.navigation.showMenu ? ' tlbx-sidebar-open' : ''
              }`}
            >
              <Sidebar location={this.props.location} />
            </div>
            <div className="tlbx-content-wrapper">
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
        </div>
      );
    }

    return (
      <div>
        {fullHome ? <Route path="/" exact component={Doc} /> : ''}
        <Route path="/pages/:slug" exact component={SinglePage} />
        <Route
          path="/:type/:slug/:variant?/full"
          exact
          component={SingleFull}
        />
      </div>
    );
  }
}

App.propTypes = {
  getComponents: PropTypes.func.isRequired,
  getDocs: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  atomic: PropTypes.object.isRequired,
  docs: PropTypes.object.isRequired,
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
