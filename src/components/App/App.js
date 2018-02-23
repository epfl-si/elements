import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Theme } from './Theme';

import { getComponents } from '../../actions/atomic';
import { getDocs } from '../../actions/docs';
import { setBaseURL } from '../../actions/navigation';

import Sidebar from '../Sidebar/Sidebar';
import Toolbar from '../Toolbar/Toolbar';
import SingleStyleguide from '../../views/Single/SingleStyleguide';
import SingleFull from '../../views/Single/SingleFull';
import Doc from '../../views/Doc/Doc';
import Page from '../../views/Page/Page';
import Colors from '../../views/Colors/Colors';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      components: {
        atoms: [],
        molecules: [],
        organisms: [],
        pages: [],
      },
      docs: {},
    };
  }

  componentWillMount() {
    this.props.setBaseURL(this.props.location.pathname);
    this.props.getComponents();
    this.props.getDocs();
  }

  render() {
    // Remove styleguide shell from pages and full render of components
    const hasStyleguideShell = !this.props.location.pathname.includes('/pages/') && !this.props.location.pathname.match(/\/full\/?$/);

    if (hasStyleguideShell) {
      return (
        <Theme className="styleguide">
          <div className="tlbx-toolbar-wrapper">
            <Toolbar />
          </div>
          <div className={`tlbx-sidebar-wrapper${this.props.navigation.showMenu ? ' tlbx-sidebar-open' : ''}`}>
            <Sidebar location={this.props.location} />
          </div>
          <div className="tlbx-content-wrapper">
            {/* <Route path="/" exact component={Doc} /> */}
            <Route path="/atoms/:slug"  component={SingleStyleguide} />
            <Route path="/molecules/:slug"  component={SingleStyleguide} />
            <Route path="/organisms/:slug"  component={SingleStyleguide} />
            <Route path="/doc/:slug"  component={Doc} />
            <Route path="/colors"  component={Colors} />
          </div>
        </Theme>
      );
    } else {
      return (
        <div>
          <Route path="/pages/:slug" exact component={Page} />
          <Route path="/:type/:slug/:variant?/full" exact component={SingleFull} />
        </div>
      );
    }
  }
}

function mapState(state) {
  return {
    atomic: state.atomic,
    docs: state.docs,
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({
    getComponents,
    getDocs,
    setBaseURL,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(App);
