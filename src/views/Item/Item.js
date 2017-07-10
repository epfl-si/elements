import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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
        <div 
          className={`tlbx-item-preview ${this.props.wrapper} ${this.props.slug}`} 
          style={{background: this.props.background}} 
          dangerouslySetInnerHTML={{ __html: this.props.children }} 
        />
        <div className="tlbx-item-code">
          <SyntaxHighlighter
            language='html'
            style={atomOneDark}
          >
            {this.props.children}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(Item));
