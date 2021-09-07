import React from 'react'
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'

import Item from '../../components/Item/Item'
import { Element } from '../../asset-components.js'

/**
 * Displays a page element as “full-screen” page
 */
function SinglePage({ match }) {
  const history = useHistory()
  const element = Element.byTypeAndName('pages', match.params.slug)
  // Pages don't have variants

  if (element) {
    const onClickHyperlink = fixLinksToOtherPagesOtherwiseEatClick.bind({history})
    return (
      <Item
        element={element}
        onClickHyperlink={onClickHyperlink} />
    )
  }
  return <p>Page not found.</p>
}


SinglePage.propTypes = {
  match: PropTypes.object.isRequired
}

export default SinglePage

function fixLinksToOtherPagesOtherwiseEatClick (link, e) {
  e.preventDefault()
  if (link.href.includes('pages')) {
    const slug = link.href.split('pages/').slice(-1)[0]
    this.history.push(`/pages/${slug}`)
  }
}
