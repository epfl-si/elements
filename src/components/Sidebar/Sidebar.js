import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons'

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const noComponents = (
      <li>
        <small>
          <span className="text-muted">No components yet.</span><br />
          Run <code>$ yo toolbox:generate</code>
        </small>
      </li>
    );

    return (
      <div className="tlbx-sidebar">
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/colors'}>Colors</NavLink>
          </li>
        </ul>

        {Object.keys(this.props.store.components).map((group, key) => {
          if (group === 'docs') return;

          return (
            <div key={key}>
              <strong>{group}</strong>
              <ul>
                {this.props.store.components[group].map((component, key) => {
                  const path = `/${group}/${component.name}`;

                  return (
                    <li key={key}>
                      <NavLink to={path}>
                        {component.title}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}

      </div>
    );
  }
}

Sidebar.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Sidebar));
