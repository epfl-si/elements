import React, { Component } from 'react';
import colorable from 'colorable';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.scss';

import './ColorTable.scss';

class ColorTable extends Component {
  constructor() {
    super();

    this.state = {
      threshold: 4.5,
      colors: window.colors,
    };

    this.state.colorable = colorable(
      this.state.colors,
      { compact: true, threshold: this.state.threshold },
    );

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ threshold: e.target.value });
    this.setState({ colorable: colorable(this.state.colors, {
      compact: true,
      threshold: e.target.value,
    }) });
  }

  renderA11yTable() {
    const contrast = this.state.colorable;

    return (
      <div>
        <h2>Accessibility Table</h2>
        <div className="tlbx-table-wrapper">
          <table className="tlbx-table">
            <thead>
              <tr>
                <th />
                {Object.keys(contrast).map((key) => {
                  return (
                    <th scope="col" key={key}>
                      <small className="tblx-muted">{contrast[key].name}</small>
                      <small className="tblx-muted">{contrast[key].hex}</small>
                      <span className="tlbx-contrast-text" style={{ color: contrast[key].hex }}>Aa</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Object.keys(contrast).map((key) => {
                const baseColor = contrast[key];

                return (
                  <tr key={key}>
                    <th scope="row" className="text-left">
                      <div className="tlbx-contrast-color">
                        <span className="tlbx-contrast-color-thumb" style={{ background: baseColor.hex }} />
                        <span>{baseColor.name} background<br /><small className="tblx-muted">{baseColor.hex}</small></span>
                      </div>
                    </th>
                    {Object.keys(contrast).map((key2) => {
                      const otherColor = contrast[key2];

                      const combination = baseColor.combinations.find((item) => {
                        return item.name === otherColor.name;
                      });

                      if (!combination) {
                        return <td key={key2}><span className="tlbx-contrast-none" /></td>;
                      }

                      return (
                        <td key={key2}>
                          <Tooltip
                            destroyTooltipOnHide
                            placement="top"
                            overlay={() => {
                              return (
                                <div>
                                  {Object.keys(combination.accessibility).map((color) => {
                                    return (
                                      <div className={combination.accessibility[color] ? 'text-success' : 'text-danger'} key={color}>
                                        {`${color}: ${combination.accessibility[color] ? '✔︎' : '✘'}`}
                                      </div>
                                    );
                                  })}
                                  Contrast: {Math.round(combination.contrast * 10) / 10}:1
                                </div>
                              );
                            }}
                          >
                            <span
                              className="tlbx-contrast-color-thumb"
                              style={{ background: baseColor.hex, color: otherColor.hex }}
                              data-tip=""
                              data-for={`tooltip${key}${key2}`}
                              data-multiline
                              data-border
                              data-class="text-left"
                            >
                              Aa
                            </span>
                          </Tooltip>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="custom-controls-stacked" onChange={this.onChange}>
          <label htmlFor="radioStacked1" className="custom-control custom-radio">
            <input id="radioStacked1" name="threshold" type="radio" className="custom-control-input" value="0" />
            <span className="custom-control-indicator" />
            <span className="custom-control-description"><strong>any</strong> - any contrast</span>
          </label>
          <label htmlFor="radioStacked2" className="custom-control custom-radio">
            <input defaultChecked id="radioStacked2" name="threshold" type="radio" className="custom-control-input" value="4.5" />
            <span className="custom-control-indicator" />
            <span className="custom-control-description"><strong>aa</strong> - contrast greater than 4.5 (for normal sized text)</span>
          </label>
          <label htmlFor="radioStacked3" className="custom-control custom-radio">
            <input id="radioStacked3" name="threshold" type="radio" className="custom-control-input" value="3" />
            <span className="custom-control-indicator" />
            <span className="custom-control-description"><strong>aaLarge</strong> - contrast greater than 3 (for bold text or text larger than 24px)</span>
          </label>
          <label htmlFor="radioStacked4" className="custom-control custom-radio">
            <input id="radioStacked4" name="threshold" type="radio" className="custom-control-input" value="7" />
            <span className="custom-control-indicator" />
            <span className="custom-control-description"><strong>aaa</strong> - contrast greater than 7</span>
          </label>
          <label htmlFor="radioStacked5" className="custom-control custom-radio">
            <input id="radioStacked5" name="threshold" type="radio" className="custom-control-input" value="4.5" />
            <span className="custom-control-indicator" />
            <span className="custom-control-description"><strong>aaaLarge</strong> - contrast greater than 4.5 (for bold text or text larger than 24px)</span>
          </label>
        </div>
        <p>For more info, please visit <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast">WCAG 2.0 Guidelines</a>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        {this.renderA11yTable()}
      </div>
    );
  }
}

export default ColorTable;
