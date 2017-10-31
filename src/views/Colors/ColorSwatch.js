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
      <div className="col-sm-4">
        <div className="card mb-4 tlbx-color-swatch">
          <div className="card-img-top py-5 px-3 tlbx-color-swatch-color" style={{backgroundColor: this.props.color.hex}}>
            <ClipboardButton
              data-clipboard-text={this.props.color.hex}
              className="btn btn-primary btn-copy mx-auto d-block"
              onSuccess={this.onCopySuccess}
            >
              {this.state.copied ? 'Copied!' : 'Copy HEX'}
            </ClipboardButton>
          </div>
          <div className="card-block">
            <h4 className="text-uppercase text-muted">Name</h4>
            {this.props.color.name}
            <h4 className="text-uppercase text-muted">Hex</h4>
            {this.props.color.hex}
            <h4 className="text-uppercase text-muted">Rgb</h4>
            rgb({this.props.color.values.rgb.join(',')})
          </div>
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
