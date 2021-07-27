import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import SidebarItem from '../SidebarItem/SidebarItem'
import SidebarDocs from '../SidebarDocs/SidebarDocs'

import './Sidebar.scss'
import { Element } from '../../asset-components.js'
import theme from '../../../assets/config/theme.json'
import packageJSON from '../../../package.json'

export default function Sidebar({ location }) {
  const groups = []
  for (const e of Element.all()) {
    if (groups[groups.length - 1] !== e.type) groups.push(e.type)
  }
  return (
    <div className="tlbx-sidebar">
      {theme && theme.title ? (
        <h1
          className="tlbx-sidebar-title"
          dangerouslySetInnerHTML={{ __html: theme.title }}
        />
      ) : (
        <h1 className="tlbx-sidebar-title">
          Toolbox <span>Design System</span>
        </h1>
      )}
      <h3 className="tlbx-sidebar-version">Version {packageJSON.version}</h3>

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

      {groups.map(group => (
        <SidebarItem
          key={group}
          group={group}
          location={location}
        />
      ))}
    </div>
  )
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
}

