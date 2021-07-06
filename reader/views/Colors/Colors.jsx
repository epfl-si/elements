import React, { useState } from 'react';
import colorable from 'colorable';

import ColorSwatch from './ColorSwatch';
import ColorTable from './../../components/ColorTable/ColorTable';
import './Colors.css';

const Colors = () => {
  const contrast = colorable(window.colors);

  return (
    <div className="container-fluid">
      <div>
        <h1>Brand Colors</h1>
        <div className="tlbx-color-swatch-wrapper">
          {Object.keys(contrast).map(key => (
            <ColorSwatch key={key} color={contrast[key]} />
          ))}
        </div>
      </div>
      <ColorTable />
    </div>
  );
};

export default Colors;
