import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './A11y.css';

class A11y extends Component {
  render() {

    const contrast = this.props.store.contrast;

    return (
      <div>
        <table className="table tlbx-table">
          <thead>
            <tr>
              <th></th>
              {Object.keys(contrast).map(key => <th key={key}><span>{contrast[key].name}</span><span className="tlbx-contrast-text" style={{color: contrast[key].hex}}>Aa</span></th>)}
            </tr>
          </thead>
          <tbody>
            {Object.keys(contrast).map(key => {
              const baseColor = contrast[key]
              return (
                <tr key={key}>
                  <td>
                    <span className="tlbx-contrast-color-thumb" style={{background: baseColor.hex}}></span>
                    <span>{baseColor.name}</span>
                  </td>
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
                        <span className="tlbx-contrast-color-thumb" style={{background: baseColor.hex, color: otherColor.hex}}>Aa</span>
                      </td>
                    )

                  })}
                  <td></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default inject('store')(observer(A11y));
