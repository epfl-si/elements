import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as navigationActions } from '../../store/navigation';

import Icon from '../Icon/Icon';

import './Toolbar.css';

const Toolbar = ({ navigation, toggleCode, toggleMenu }) => {
  return (
    <div className="tlbx-toolbar">
      {/* Brand button */}
      <button
        className="tlbx-toolbar-btn tlbx-brand"
        onClick={() => alert('Toolbox is amazing !')}
      >
        <Icon name="tlbx-icon-toolbox" />
      </button>

      {/* Code toggle button */}
      <button
        className={`tlbx-toolbar-btn${
          navigation.showAllCode ? '' : ' tlbx-active'
        }`}
        onClick={() => toggleCode()}
      >
        <Icon name="tlbx-icon-code" />
      </button>

      {/* Menu toggle button */}
      <button
        className="tlbx-toolbar-btn tlbx-toolbar-toggle-menu"
        onClick={() => toggleMenu()}
      >
        <Icon name="tlbx-icon-menu" />
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  toggleCode: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapState = ({ navigation }) => ({
  navigation,
});

const mapDispatch = dispatch => {
  const { toggleCode, toggleMenu } = navigationActions;
  return bindActionCreators({ toggleCode, toggleMenu }, dispatch);
};

export default connect(
  mapState,
  mapDispatch,
)(Toolbar);
