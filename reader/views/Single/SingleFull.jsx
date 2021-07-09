import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Item from '../../components/Item/Item'
import { Element } from '../../asset-components.js'

/**
 * Displays an element or variant alone, in “full screen”
 */
function SingleFull({ match }) {
  const element = Element.byTypeAndName(match.params.type, match.params.slug)
  if (!element) {
    // eslint-disable-next-line no-console
    console.log(`No element at ${match.path}`)  // Visible in `yarn test` output
    return []
  }
  const variant = match.params.variant ? element.variant(match.params.variant) : undefined

  return (
    <div className="tlbx-single-full">
      <div className="tlbx-single-full-intro">
        <h1>
          Full render of:&nbsp;
          <Link
            to={`/${element.type}/${element.parent || element.name}`}
            title={`Go back to ${element.title} component`}
          >
            {element.title}
          </Link>
        </h1>
      </div>

      <Item {...{ element, variant }} />
    </div>
  )
}

SingleFull.propTypes = {
  match: PropTypes.object
}

export default connect(({ navigation }) => ({ navigation }))(SingleFull)
