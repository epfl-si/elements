import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleCode, toggleMenu } from '../../actions/navigation';

import Icon from '../Icon/Icon';

import './Toolbar.css';

const Toolbar = (props) => {
  return (
    <div className="tlbx-toolbar">
      {/* Brand button */}
      <button className="tlbx-toolbar-btn tlbx-brand" onClick={() => alert('Toolbox is amazing !')}>
        <Icon name="icon-toolbox" />
      </button>

      {/* Code toggle button */}
      <button className={`tlbx-toolbar-btn${props.navigation.showAllCode ? '' : ' tlbx-active'}`} onClick={() => props.toggleCode()}>
        <Icon name="icon-code" />
      </button>

      {/* Menu toggle button */}
      <button className="tlbx-toolbar-btn tlbx-toolbar-toggle-menu" onClick={() => props.toggleMenu()}>
        <Icon name="icon-menu" />
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  toggleCode: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};


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
