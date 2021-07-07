import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import { html_beautify } from 'js-beautify';
import xml from 'react-syntax-highlighter/dist/languages/hljs/xml';
import atomOneDark from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark';

import Loader from './../Loader/Loader';
import ClipboardButton from '../ClipboardButton/ClipboardButton';

import parentUrl from '../../helpers/parentUrl';
import './Item.scss';

registerLanguage('html', xml);

const Item = ({ component, variant, children, navigation }) => {
  const [copied, setCopied] = useState(false);
  const beautify = str =>
    html_beautify(str, {
      indent_size: 2,
      space_in_empty_paren: true,
    });

  const copySuccess = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleItemClick = e => {
    // If it's a link related event, prevent default
    if (parentUrl(e.target)) e.preventDefault();
  };

  const isVariant = variant !== undefined;
  const fullPath = `/${component.type}/${component.name}${
    isVariant ? `/${variant.name}` : ''
  }/full`;
  const slugClass = isVariant
    ? `tlbx-component-${component.name}-${variant.name}`
    : `tlbx-component-${component.name}`;
  const wrapper =
    isVariant && variant.wrapper ? variant.wrapper : component.wrapper;
  const background =
    isVariant && variant.background ? variant.background : component.background;

  return (
    <div className="tlbx-item">
      {/* Item actions */}
      <div className="tlbx-actions">
        <Link className="tlbx-actions-link" to={fullPath}>
          View full render
        </Link>
        <ClipboardButton
          data-clipboard-text={beautify(children)}
          className="tlbx-actions-link"
          onSuccess={() => copySuccess()}
        >
          {copied ? 'Copied!' : 'Copy'}
        </ClipboardButton>
      </div>

      {/* Item's preview */}
      {children.length > 0 ? (
        <div
          className={`tlbx-item-preview ${wrapper} ${slugClass}`}
          style={background ? { backgroundColor: background } : {}}
          dangerouslySetInnerHTML={{ __html: children }}
          onClick={() => handleItemClick()}
        />
      ) : (
        <div
          className={`tlbx-item-preview ${wrapper} ${slugClass}`}
          style={background ? { backgroundColor: background } : {}}
          onClick={() => handleItemClick()}
        >
          <Loader />
        </div>
      )}

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
          {beautify(children)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

Item.propTypes = {
  component: PropTypes.object.isRequired,
  variant: PropTypes.object,
  children: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapState = ({ navigation }) => ({
  navigation,
});

export default connect(mapState)(Item);
