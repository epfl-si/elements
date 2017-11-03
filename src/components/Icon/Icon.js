import React, { Component } from 'react';

import './Icon.css';

class Icon extends Component {
  render() {
    const useTag = `<use xlink:href="#${this.props.name}" />`;

    return (
      <svg dangerouslySetInnerHTML={{__html: useTag }} className="tblx-icon" />
    );
  }
}

export default Icon;
