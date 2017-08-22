import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Toolbar.css';

class Toolbar extends Component {
  constructor() {
    super();

    this.toggleAllCode = this.toggleAllCode.bind(this);
  }

  toggleAllCode() {
    this.props.store.toggleAllCode();
  }

  render() {
    return (
      <button className={`tlbx-toolbar-btn${this.props.store.showAllCode ? ' tlbx-active' : ''}`} onClick={() => this.toggleAllCode()}>
        <pre><code>&lt;/&gt;</code></pre>
      </button>
    );
  }
}

export default inject('store')(observer(Toolbar));
