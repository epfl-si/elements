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

        <strong>Atoms</strong>
        <ul>
          {this.props.store.components.atoms.map((atom, key) => {
            return (
              <li key={key}>
                <NavLink to={`/atoms/${atom.slug}`}>{atom.slug}</NavLink>
              </li>
            )
          })}
          {this.props.store.components.atoms.length === 0 && noComponents}
        </ul>

        <strong>Molecules</strong>
        <ul>
          {this.props.store.components.molecules.map((molecule, key) => {
            return (
              <li key={key}>
                <NavLink to={`/molecules/${molecule.slug}`}>{molecule.slug}</NavLink>
              </li>
            )
          })}
          {this.props.store.components.molecules.length === 0 && noComponents}
        </ul>

        <strong>Organisms</strong>
        <ul>
          {this.props.store.components.organisms.map((organism, key) => {
            return (
              <li key={key}>
                <NavLink to={`/organisms/${organism.slug}`}>{organism.slug}</NavLink>
              </li>
            )
          })}
          {this.props.store.components.organisms.length === 0 && noComponents}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Sidebar));
