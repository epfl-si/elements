import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import Collapse from 'react-css-collapse'

import DocDir from './DocDir'

import docs from '../../../docs/summary.yml'

export default function SidebarDocs() {
  const location = useLocation()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const regex = new RegExp('^/doc/')
    const isCurrent = location.pathname.match(regex)

    setActive(!!isCurrent)
  }, [])

  return (
    <div className={active ? ' tlbx-open' : ''}>
      <button className="tlbx-sidebar-item" onClick={() => setActive(!active)}>
        <strong>Documentation</strong>
      </button>
      <Collapse className="tlbx-sidebar-collapse" isOpen={active}>
          <DocDir dir={docs} fullpath="" />
      </Collapse>
    </div>
  )
}
