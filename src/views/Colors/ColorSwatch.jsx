import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClipboardButton from 'react-clipboard.js';

const ColorSwatch = ({ color }) => {
  console.log(color);
  const [copied, setCopied] = useState(false);

  const copySuccess = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="tlbx-color-swatch">
      <div
        className="tlbx-color-swatch-color"
        style={{ backgroundColor: color.hex }}
      >
        <ClipboardButton
          data-clipboard-text={color.hex}
          className="tlbx-color-swatch-btn"
          onSuccess={() => copySuccess()}
        >
          {copied ? 'Copied!' : 'Copy HEX'}
        </ClipboardButton>
      </div>

      <div className="tlbx-color-swatch-infos">
        <h5>{color.name}</h5>
        <h6>Hex</h6>
        {color.hex}
        <h6>Rgb</h6>
        rgb({color.values.rgb.join(',')})
      </div>
    </div>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.object.isRequired,
};

export default ColorSwatch;
