import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClipboardButton from 'react-clipboard.js';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import xml from 'react-syntax-highlighter/dist/languages/xml';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

import './Item.css';

registerLanguage('html', xml);

class Item extends Component {
  constructor() {
    super();

    this.state = {
      copied: false
    }
  }

  onCopySuccess() {
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({ copied: false });
    }, 1000);
  }

  handleItemClick(e) {
    // Disable all inner links
    e.preventDefault();
  }

  render() {
    const component = this.props.component;
    const isVariant = this.props.variant !== undefined;
    const variant = this.props.variant;

    const fullPath = `/${component.type}/${component.name}${isVariant ? `/${variant.name}` : ''}/full`;
    const slugClass = isVariant ? `tlbx-${component.name}-${variant.name}` : `tlbx-${component.name}`;
    const wrapper = isVariant && variant.wrapper ? variant.wrapper : component.wrapper;
    const background = isVariant && variant.background ? variant.background : component.background;

    return (
      <div className="tlbx-item">
        <div className="tlbx-actions">
          <Link className="tlbx-actions-link" to={fullPath}>
            View full render
          </Link>
          <ClipboardButton
            data-clipboard-text={this.props.children}
            className="tlbx-actions-link"
            onSuccess={this.onCopySuccess.bind(this)}
          >
            {this.state.copied ? 'Copied!' : 'Copy'}
          </ClipboardButton>
        </div>
        <div
          className={`tlbx-item-preview ${wrapper} ${slugClass}`}
          style={background ? {backgroundColor: background} : {}}
          dangerouslySetInnerHTML={{ __html: this.props.children }}
          onClick={this.handleItemClick.bind(this)}
        />
        {/* <div className={`tlbx-item-code${this.props.navigation.showAllCode ? ' tlbx-hidden' : ''}`}> */}
        <div className="tlbx-item-code">
          <SyntaxHighlighter
            language='html'
            style={atomOneDark}
            wrapLines={true}
            showLineNumbers={true}
            lineNumberContainerStyle={{
              float: 'left',
              textAlign: 'right',
              marginRight: '10px',
              opacity: '0.5'
            }}
            customStyle={{
              padding: '1.3em 1em',
              fontSize: '16px',
              lineHeight: '1.4em',
            }}
          >
            {this.props.children}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  component: PropTypes.object.isRequired,
  variant: PropTypes.object,
  children: PropTypes.string.isRequired,
}

function mapState(state) {
  return {
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapState, mapDispatch)(Item);
