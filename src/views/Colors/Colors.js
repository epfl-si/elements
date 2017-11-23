import React, { Component } from 'react';
import colorable from 'colorable';

import ColorSwatch from './ColorSwatch';
import ColorTable from './../../components/ColorTable/ColorTable';
import './Colors.css';

class Colors extends Component {
  constructor() {
    super();

    this.state = {};

    this.state.contrast = colorable(window.colors);
  }

  renderSwatches() {
    return (
      <div>
        <h2>Brand Colors</h2>
        <div className="tlbx-color-swatch-wrapper">
          {Object.keys(this.state.contrast).map(key => (
            <ColorSwatch key={key} color={this.state.contrast[key]} />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">

        {this.renderSwatches()}
        <ColorTable />

      </div>
    )
  }
}

export default Colors;
