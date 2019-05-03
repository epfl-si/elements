import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarDocs from '../SidebarDocs/SidebarDocs';

import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="tlbx-sidebar">
      {
        window.theme && window.theme.title
        ?
          <h1 className="tlbx-sidebar-title" dangerouslySetInnerHTML={{ __html: window.theme.title }} />
        :
          <h1 className="tlbx-sidebar-title">Toolbox <span>Design System</span></h1>
      }
      <h3 className="tlbx-sidebar-version">Version {window.version}</h3>

      <ul className="tlbx-sidebar-item-list">
        <li>
          <NavLink to={'/'} exact>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/colors'}>Colors</NavLink>
        </li>
      </ul>

      <SidebarDocs location={props.location} />

      {Object.keys(props.atomic.sourcesOrder || props.atomic.sources).map((group) => {
        if (props.atomic.sourcesOrder) {
          return (
            <SidebarItem
              key={props.atomic.sourcesOrder[group]}
              group={props.atomic.sourcesOrder[group]}
              location={props.location}
            />
          );
        }
        return <SidebarItem key={group} group={group} location={props.location} />;
      })}
    </div>
  );
};

Sidebar.propTypes = {
  atomic: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

function mapState(state) {
  return {
    atomic: state.atomic,
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapState, mapDispatch)(Sidebar);
