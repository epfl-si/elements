import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom'
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
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/colors'}>Colors</Link>
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
                      <Link to={path}>
                        {component.title}
                      </Link>
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
