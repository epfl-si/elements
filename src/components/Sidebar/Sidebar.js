import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarDocs from '../SidebarDocs/SidebarDocs';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="tlbx-sidebar">
        {
          window.theme && window.theme.title
          ?
            <h1 className="tlbx-sidebar-title" dangerouslySetInnerHTML={{__html: window.theme.title }}/>
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

        <SidebarDocs location={this.props.location} />

        {Object.keys(this.props.atomic.sources).map((group, key) => {
          return <SidebarItem key={key} group={group} location={this.props.location} />
        })}
      </div>
    );
  }
}

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
