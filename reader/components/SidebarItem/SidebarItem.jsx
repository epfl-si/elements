import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, NavLink } from 'react-router-dom'
import Collapse from 'react-css-collapse'
import PropTypes from 'prop-types'

import { Element } from '../../asset-components.js'

import './SidebarItem.scss'

function SidebarItem({ group, navigation }) {
  const location = useLocation()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const regex = new RegExp(`^/${group}/`)
    const isCurrent = location.pathname.match(regex)

    setActive(!!isCurrent)
  }, [])

  useEffect(() => {
    if (navigation.backFromPages) {
      setActive(group === 'pages')
    }
  }, [navigation])

  return (
    <div className={active ? ' tlbx-open' : ''}>
      <button className="tlbx-sidebar-item" onClick={() => setActive(!active)}>
        <strong>{group}</strong>
      </button>

      <Collapse className="tlbx-sidebar-collapse" isOpen={active}>
        <ul className="tlbx-sidebar-item-list">
          {Element.all().filter((e) => e.type === group).map((element, key) => {
            const path = `/${group}/${element.name}`

            return (
              <li key={key}>
                <NavLink to={path}>{element.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </Collapse>
    </div>
  )
}

SidebarItem.propTypes = {
  group: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default connect(({ navigation }) => ({ navigation }))(SidebarItem)
