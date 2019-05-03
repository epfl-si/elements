import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as alertActions } from '../../store/alert';

import './Alert.css';

const Alert = ({ alert, getVersion }) => {
  const [closed, setClosed] = useState(false);
  const [isVisible, setIsVisible] = useState(
    alert.remote_version &&
      alert.remote_version !== alert.local_version &&
      !closed,
  );

  useEffect(() => {
    getVersion();
  }, []);

  useEffect(() => {
    setIsVisible(
      alert.remote_version &&
        alert.remote_version !== alert.local_version &&
        !closed,
    );
  }, [closed]);

  return (
    <div className={`tlbx-alert${isVisible ? ' open' : ''}`}>
      <span role="img" aria-label="Alert">
        🚨
      </span>
      <p>
        Looks like you've built your styleguide using an{' '}
        <b>old version of toolbox-utils</b> (local{' '}
        <b>{alert.local_version || 'undefined'}</b>, current{' '}
        <b>{alert.remote_version}</b>).
        <br />
        See{' '}
        <a href="http://frontend.github.io/toolbox/updates.html">update doc</a>.
      </p>
      <button onClick={() => setClosed(!closed)}>&times;</button>
    </div>
  );
};

Alert.propTypes = {
  getVersion: PropTypes.func.isRequired,
  alert: PropTypes.object,
};

const mapState = ({ alert }) => ({
  alert,
});

const mapDispatch = dispatch => {
  const { getVersion } = alertActions;
  return bindActionCreators({ getVersion }, dispatch);
};

export default connect(
  mapState,
  mapDispatch,
)(Alert);
