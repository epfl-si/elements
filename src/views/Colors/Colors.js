import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import colorable from 'colorable';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import ColorSwatch from './ColorSwatch';
import './Colors.css';

class Colors extends Component {
  constructor() {
    super();

    this.state = {
      threshold: 4.5
    }

    this.onChange = this.onChange.bind(this);
  }

  renderSwatches() {
    const colors = window.colors;
    const contrast = colorable(colors);

    return (
      <div>
        <h2>Brand Colors</h2>
        <div className="row">
          {Object.keys(contrast).map(key => (
            <ColorSwatch key={key} color={contrast[key]} />
          ))}
        </div>
      </div>
    )
  }

  onChange(e) {
    this.setState({threshold: e.target.value});
  }

  renderA11yTable() {
    const colors = window.colors;
    const contrast = colorable(colors, {compact: true, threshold: this.state.threshold});

    return (
      <div>
        <h2>Accessibility Table</h2>
        <table className="table tlbx-table">
          <thead>
            <tr>
              <th></th>
              {Object.keys(contrast).map(key => <th scope="col" key={key}><span className="tlbx-contrast-text" style={{color: contrast[key].hex}}>Aa</span></th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(contrast).map(key => {
              const baseColor = contrast[key]

              return (
                <tr key={key}>
                  <th scope="row" className="text-left">
                    <div className="tlbx-contrast-color">
                      <span className="tlbx-contrast-color-thumb" style={{background: baseColor.hex}}></span>
                      <span>{baseColor.name} background<br /><small className="text-muted">{baseColor.hex}</small></span>
                    </div>
                  </th>
                  {Object.keys(contrast).map(key2 => {
                    const otherColor = contrast[key2];

                    const combination = baseColor.combinations.find(item => {
                      return item.name === otherColor.name;
                    });

                    if (!combination) {
                      return <td key={key2}><span className="tlbx-contrast-none"></span></td>;
                    }

                    return (
                      <td key={key2}>
                        <Tooltip
                          destroyTooltipOnHide={true}
                          placement="top"
                          overlay={() => {
                            return (
                              <div>
                                {Object.keys(combination.accessibility).map(color => {
                                  return (
                                    <div className={combination.accessibility[color] ? 'text-success' : 'text-danger'} key={color}>
                                      {`${color}: ${combination.accessibility[color] ? '✔︎' : '✘'}`}
                                    </div>
                                )})}
                                Contrast: {Math.round(combination.contrast * 10) / 10}:1
                              </div>
                            )
                          }}
                        >
                          <span
                            className="tlbx-contrast-color-thumb"
                            style={{background: baseColor.hex, color: otherColor.hex}}
                            data-tip=''
                            data-for={`tooltip${key}${key2}`}
                            data-multiline={true}
                            data-border={true}
                            data-class="text-left"
                          >
                            Aa
                          </span>
                        </Tooltip>
                      </td>
                    )

                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="custom-controls-stacked" onChange={this.onChange}>
          <label className="custom-control custom-radio">
            <input id="radioStacked1" name="threshold" type="radio" className="custom-control-input" value="0"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"><strong>any</strong> - any contrast</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radioStacked1" name="threshold" type="radio" className="custom-control-input" value="4.5"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"><strong>aa</strong> - contrast greater than 4.5 (for normal sized text)</span>
          </label>
          <label className="custom-control custom-radio">
            <input defaultChecked id="radioStacked2" name="threshold" type="radio" className="custom-control-input" value="3"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"><strong>aaLarge</strong> - contrast greater than 3 (for bold text or text larger than 24px)</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radioStacked2" name="threshold" type="radio" className="custom-control-input" value="7"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"><strong>aaa</strong> - contrast greater than 7</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radioStacked2" name="threshold" type="radio" className="custom-control-input" value="4.5"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"><strong>aaaLarge</strong> - contrast greater than 4.5 (for bold text or text larger than 24px)</span>
          </label>
        </div>
        <p>For more info, please visit <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast">WCAG 2.0 Guidelines</a>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">

        {this.renderSwatches()}
        {this.renderA11yTable()}

      </div>
    )
  }
}

export default inject('store')(observer(Colors));
