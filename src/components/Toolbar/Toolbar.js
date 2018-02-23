import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleCode, toggleMenu } from '../../actions/navigation';

import Icon from '../Icon/Icon';

import './Toolbar.css';

class Toolbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tlbx-toolbar">
        {/* Brand button */}
        <button className="tlbx-toolbar-btn tlbx-brand" onClick={() => alert('Toolbox is amazing !')}>
          <Icon name="icon-toolbox" />
        </button>

        {/* Code toggle button */}
        <button className={`tlbx-toolbar-btn${this.props.navigation.showAllCode ? '' : ' tlbx-active'}`} onClick={() => this.props.toggleCode()}>
          <Icon name="icon-code" />
        </button>

        {/* Menu toggle button */}
        <button className="tlbx-toolbar-btn tlbx-toolbar-toggle-menu" onClick={() => this.props.toggleMenu()}>
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
    toggleCode,
    toggleMenu,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(Toolbar);
