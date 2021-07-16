import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Theme } from './Theme'

import Colors from '../../views/Colors/Colors'
import Doc from '../../views/Doc/Doc'
import Sidebar from '../Sidebar/Sidebar'
import SingleFull from '../../views/Single/SingleFull'
import SinglePage from '../../views/Single/SinglePage'
import SingleStyleguide from '../../views/Single/SingleStyleguide'
import Toolbar from '../Toolbar/Toolbar'

import './App.scss'

function App({ navigation }) {
  const history = useHistory()
  const [prevLocationPathname, updatePrevLocationPathname] = useState(undefined);
  useEffect(() => {
    if (location.pathname !== prevLocationPathname) {
      updatePrevLocationPathname(location.pathname)
      document.dispatchEvent(new Event('ToolboxReady'))
    }
  })

  const location = useLocation()

  // Remove styleguide shell from pages and full render of components
  const hasStyleguideShell = (
    !location.pathname.includes('/pages/') &&
    !location.pathname.match(/\/full\/?$/)
  )
  const fullHome = window.fullhome || false
  const hasHomeStyleguideShell = !(
    fullHome && location.pathname === '/'
  )

  if (hasStyleguideShell && hasHomeStyleguideShell) {
    return (
      <div>
        <Theme className="styleguide">
          <div className="tlbx-toolbar-wrapper">
            <Toolbar />
          </div>
          <div
            className={`tlbx-sidebar-wrapper${
                navigation.showMenu ? ' tlbx-sidebar-open' : ''
              }`}
          >
            <Sidebar location={location} />
          </div>
          <div className="tlbx-content-wrapper">
            <div className="tlbx-content">
              <Switch>
                {fullHome ? '' : <Route path="/" exact component={Doc} />}
                <Route path="/doc/:slug" component={Doc} />
                <Route path="/colors" component={Colors} />
                <Route path="/:type/:slug" component={SingleStyleguide} />
              </Switch>
            </div>
          </div>
        </Theme>
      </div>
    )
  }

  return (
    <div>
      {fullHome ? <Route path="/" exact component={Doc} /> : ''}
      <Route path="/pages/:slug" exact component={SinglePage} />
      <Route
        path="/:type/:slug/:variant?/full"
        exact
        component={SingleFull}
      />
    </div>
  )
}

App.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default connect(({ navigation }) => ({ navigation }))(App)
