import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom'

import SidebarItem from '../SidebarItem/SidebarItem';

import './Sidebar.css';

class Sidebar extends Component {

  toggleComponentsList() {

  }

  render() {
    return (
      <div className="tlbx-sidebar">
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
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

export default inject('store')(observer(Sidebar));
