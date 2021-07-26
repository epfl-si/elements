import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import './Doc.scss'

export default function Doc({ match }) {
  const { params, path } = match

  let doc
  let ext
  if (path === "/") {
    doc = require("../../../docs/index.html")
    ext = "html"
  } else {
    if (!params?.slug) return []
    const matched = params.slug.match(/^(.*)\.(md|html)$/)
    if (!matched) return []

    // eslint-disable-next-line prefer-destructuring
    ext = matched[2]
    const path = matched[1].replaceAll("--", "/")

    // Fragile Webpack sorcery below; do not break in refactoring
    if (ext === 'html') {
      // eslint-disable-next-line import/no-dynamic-require
      doc = require(`../../../docs/${path}.html`)
    } else {
      // eslint-disable-next-line import/no-dynamic-require
      doc = require(`../../../docs/${path}.md`)
    }
  }

  return (
    <div>
      {ext === 'md' ? (
        <div className="tlbx-doc-markdown-wrapper">
          <ReactMarkdown>{doc}</ReactMarkdown>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: doc }} />
      )}
    </div>
  )
}

Doc.propTypes = {
  match: PropTypes.object.isRequired
}
