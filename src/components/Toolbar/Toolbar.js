import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from '../Icon/Icon';

import './Toolbar.css';

class Toolbar extends Component {
  constructor() {
    super();

    this.toggleAllCode = this.toggleAllCode.bind(this);
  }

  toggleAllCode() {
    this.props.store.toggleAllCode();
  }

  toggleMenu() {
    this.props.store.toggleMenu();
  }

  render() {
    return (
      <div className="tlbx-toolbar">
        <button className="tlbx-toolbar-btn tlbx-brand" onClick={() => alert('Toolbox is amazing !')}>
          <Icon name="icon-toolbox" />
        </button>

        <button className={`tlbx-toolbar-btn${this.props.navigation.showAllCode ? ' tlbx-active' : ''}`} onClick={() => this.toggleAllCode()}>
          <Icon name="icon-code" />
        </button>

        <button className="tlbx-toolbar-btn tlbx-toolbar-toggle-menu" onClick={() => this.toggleMenu()}>
          <Icon name="icon-menu" />
        </button>
      </div>
    );
  }
}

function mapState(state) {
  return {
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapState, mapDispatch)(Toolbar);
