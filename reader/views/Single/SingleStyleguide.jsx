import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { connect } from 'react-redux'

import { html_beautify } from 'js-beautify'
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'

import Item from '../../components/Item/Item'
import ClipboardButton from '../../components/ClipboardButton/ClipboardButton'
import { Element, Variant } from '../../asset-components.js'

import './Single.scss'

SyntaxHighlighter.registerLanguage('html', xml)

/**
 * Displays one element, with its variants if any, inside the styleguide
 */
function SingleStyleguide({ match, navigation }) {
  const element = Element.byTypeAndName(match.params.type, match.params.slug)
  return (
    <div>
      <h1 className="tlbx-h1">{element?.title}</h1>
      {element?.notes && (
        <div className="tlbx-notes">
          <ReactMarkdown>{element.notes}</ReactMarkdown>
        </div>
        )}
      {element ? <SingleStyleguideItem {...{ element, navigation }} /> : "No element"}
      {element && element.variants && element.variants.length ? renderVariants(element, navigation) : []}
    </div>
  );
}

const navigationPropType = PropTypes.shape({ showAllCode: PropTypes.bool.isRequired })

SingleStyleguide.propTypes = {
  navigation: navigationPropType.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(({ navigation }) => ({ navigation }))(SingleStyleguide)

/**
 * Render one item (element or variant) along with navigation controls
 * to “zoom” into it, copy HTML code etc.
 */
function SingleStyleguideItem ({ element, variant, navigation }) {
  const beautify = (str) => html_beautify(str, {
    indent_size: 2,
    space_in_empty_paren: true,
  })

  const [copied, setCopied] = useState(false)

  const copySuccess = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const html = variant ? beautify(variant.html()) : beautify(element.html())

  const isVariant = variant !== undefined;
  const fullPath = `/${element.type}/${element.name}${
    isVariant ? `/${variant.name}` : ''
  }/full`

  return (
    <div className="tlbx-item">
      {/* Item actions */}
      <div className="tlbx-actions">
        <Link className="tlbx-actions-link" to={fullPath}>
          View full render
        </Link>
        <ClipboardButton
          data-clipboard-text={html}
          className="tlbx-actions-link"
          onSuccess={() => copySuccess()}
        >
          {copied ? 'Copied!' : 'Copy'}
        </ClipboardButton>
      </div>

      <Item {...{ element, variant }} />

      {/* Item's code display */}
      <div
        className={`tlbx-item-code${
          navigation.showAllCode ? '' : ' tlbx-hidden'
        }`}
      >
        <SyntaxHighlighter
          language="html"
          style={atomOneDark}
          wrapLines
          showLineNumbers
          lineNumberContainerStyle={{
            float: 'left',
            textAlign: 'right',
            marginRight: '10px',
            opacity: '0.5',
          }}
          customStyle={{
            padding: '1.3em 1em',
            fontSize: '16px',
            lineHeight: '1.4em',
          }}
        >
          {html}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

SingleStyleguideItem.propTypes = {
  element: PropTypes.instanceOf(Element).isRequired,
  variant: PropTypes.instanceOf(Variant),
  navigation: navigationPropType.isRequired
}

SingleStyleguideItem.defaultProps = { variant: undefined }

function renderVariants (element, navigation) {
  const { variants } = element
  return (
    <div>
      {variants.map((variant, key) => {
        return (
          <div key={key}>
            <h3 className="tlbx-variant-heading">{variant.title}</h3>
            {variant.notes ? (
              <div className="tlbx-notes">
                <ReactMarkdown>{variant.notes}</ReactMarkdown>
              </div>
            ) : (
              ''
            )}
            <SingleStyleguideItem {...{ element, variant, navigation }} />
          </div>
        );
      })}
    </div>
  )
}
