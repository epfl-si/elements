import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Icon from '../Icon/Icon';

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
      <div>
        <button className="tlbx-toolbar-btn" onClick={() => alert('Toolbox is amazing !')}>
          <Icon name="icon-toolbox" />
        </button>

        <button className={`tlbx-toolbar-btn${this.props.store.showAllCode ? ' tlbx-active' : ''}`} onClick={() => this.toggleAllCode()}>
          <Icon name="icon-code" />
        </button>
      </div>
    );
  }
}

export default inject('store')(observer(Toolbar));
