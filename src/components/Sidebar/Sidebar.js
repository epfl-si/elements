import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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

        <strong>Atoms</strong>
        <ul>
          {this.props.store.components.atoms.map((atom, key) => {
            return (
              <li key={key}>
                <Link to={`/atoms/${atom.slug}`}>{atom.slug}</Link>
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
                <Link to={`/molecules/${molecule.slug}`}>{molecule.slug}</Link>
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
                <Link to={`/organisms/${organism.slug}`}>{organism.slug}</Link>
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
