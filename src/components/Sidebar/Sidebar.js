import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="tlbx-sidebar">
        <strong>Atoms</strong>
        <ul>
          {this.props.store.components.atoms.map((atom, key) => {
            return (
              <li key={key}>
                <Link to={`/atoms/${atom.slug}`}>{atom.slug}</Link>
              </li>
            )
          })}
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
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Sidebar));
