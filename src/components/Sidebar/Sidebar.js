import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink, withRouter } from 'react-router-dom'

import SidebarItem from '../SidebarItem/SidebarItem';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="tlbx-sidebar">
        <h1 className="tlbx-sidebar-title">Toolbox <span>Design System</span></h1>
        <h3 className="tlbx-sidebar-version">Version {window.version}</h3>

        <ul className="tlbx-sidebar-item-list">
          <li>
            <NavLink to={'/'} exact>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/colors'}>Colors</NavLink>
          </li>
        </ul>

        {Object.keys(this.props.store.components).map((group, key) => {
          if (group === 'docs') return null;

          return <SidebarItem key={key} group={group} />
        })}
      </div>
    );
  }
}

export default withRouter(inject('store')(observer(Sidebar)));
