import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarDocs from '../SidebarDocs/SidebarDocs';

import './Sidebar.css';

const Sidebar = ({ atomic, location }) => (
  <div className="tlbx-sidebar">
    {window.theme && window.theme.title ? (
      <h1
        className="tlbx-sidebar-title"
        dangerouslySetInnerHTML={{ __html: window.theme.title }}
      />
    ) : (
      <h1 className="tlbx-sidebar-title">
        Toolbox <span>Design System</span>
      </h1>
    )}
    <h3 className="tlbx-sidebar-version">Version {window.version}</h3>

    <ul className="tlbx-sidebar-item-list">
      <li>
        <NavLink to={'/'} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/colors'}>Colors</NavLink>
      </li>
    </ul>

    <SidebarDocs location={location} />

    {(atomic.sourcesOrder || atomic.sources) &&
      Object.keys(atomic.sourcesOrder || atomic.sources).map(group => {
        if (atomic.sourcesOrder) {
          return (
            <SidebarItem
              key={atomic.sourcesOrder[group]}
              group={atomic.sourcesOrder[group]}
              location={location}
            />
          );
        }
        return <SidebarItem key={group} group={group} location={location} />;
      })}
  </div>
);

Sidebar.propTypes = {
  atomic: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapState = ({ atomic }) => ({
  atomic,
});

export default connect(mapState)(Sidebar);
