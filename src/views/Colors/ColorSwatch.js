import React, {Component} from 'react';
import ClipboardButton from 'react-clipboard.js';

class ColorSwatch extends Component {
  constructor() {
    super();

    this.onCopySuccess = this.onCopySuccess.bind(this);

    this.state = {
      copied: false
    }

  }

  onCopySuccess() {
    this.setState({copied: true});

    setTimeout(() => {
      this.setState({copied: false});
    }, 1000);
  }

  render() {
    return (
      <div className="tlbx-color-swatch">
        <div className="tlbx-color-swatch-color" style={{backgroundColor: this.props.color.hex}}>
          <ClipboardButton
            data-clipboard-text={this.props.color.hex}
            className="tlbx-color-swatch-btn"
            onSuccess={this.onCopySuccess}
          >
            {this.state.copied ? 'Copied!' : 'Copy HEX'}
          </ClipboardButton>
        </div>
        <div className="tlbx-color-swatch-infos">
          <h4>Name</h4>
          {this.props.color.name}
          <h4>Hex</h4>
          {this.props.color.hex}
          <h4>Rgb</h4>
          rgb({this.props.color.values.rgb.join(',')})
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
