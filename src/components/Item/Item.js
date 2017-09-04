import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import xml from 'react-syntax-highlighter/dist/languages/xml';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

import './Item.css';

registerLanguage('html', xml);

class Item extends Component {
  render() {
    const title = this.props.title && <h3 className="tlbx-item-title">{this.props.title}</h3>;

    return (
      <div className="tlbx-item">
        {title}
        <div className="tlbx-actions">
          <Link className="tlbx-actions-link" to={this.props.fullUrl}>View full render</Link>
        </div>
        <div
          className={`tlbx-item-preview ${this.props.wrapper} ${this.props.slug}`}
          style={this.props.background ? {backgroundColor: this.props.background} : {}}
          dangerouslySetInnerHTML={{ __html: this.props.children }}
        />
        <div className="tlbx-item-code">
          <SyntaxHighlighter
            language='html'
            style={atomOneDark}
            wrapLines={true}
            showLineNumbers={true}
            lineNumberContainerStyle={{
              padding: '0.5em 0.5em 1em 0.5em',
              float: 'left',
              margin: '-0.5em 0 -0.5em -0.5em',
              textAlign: 'right',
              backgroundColor: 'rgba(255,255,255,0.1)',
              marginRight: '0.5em'
            }}
          >
            {this.props.children}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

Item.PropTypes = {
  title: PropTypes.string,
  fullUrl: PropTypes.string.isRequired,
  wrapper: PropTypes.string,
  slug: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default inject('store')(observer(Item));
