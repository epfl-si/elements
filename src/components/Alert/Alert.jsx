import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as alertActions } from '../../store/alert';

import './Alert.css';

const Alert = ({ alert, getVersions }) => {
  const hasDiff = alert.utils_diff || alert.reader_diff;
  const [closed, setClosed] = useState(false);
  const [isVisible, setIsVisible] = useState(hasDiff && !closed);

  useEffect(() => {
    getVersions();
  }, []);

  useEffect(() => {
    const hasNewDiff = alert.utils_diff || alert.reader_diff;
    setIsVisible(hasNewDiff && !closed);
  }, [alert, closed]);

  return (
    <div className={`tlbx-alert${isVisible ? ' open' : ''}`}>
      <span role="img" aria-label="Alert">
        🚨
      </span>
      <div>
        <ul>
          {alert.utils_diff && (
            <li>
              <b>toolbox-utils</b>: looks like you've built your styleguide
              using an old version (local{' '}
              <b>{alert.utils_local_version || 'undefined'}</b>, current{' '}
              <b>{alert.utils_remote_version}</b>).
            </li>
          )}
          {alert.reader_diff && (
            <li>
              <b>toolbox-reader</b>: a new version is available! (local{' '}
              <b>{alert.reader_local_version || 'undefined'}</b>, current{' '}
              <b>{alert.reader_remote_version}</b>).
            </li>
          )}
        </ul>
        <p>
          See{' '}
          <a
            href="http://frontend.github.io/toolbox/updates.html"
            target="_blank"
          >
            <u>update doc</u>
          </a>
          .
        </p>
      </div>
      <button onClick={() => setClosed(!closed)}>&times;</button>
    </div>
  );
};

Alert.propTypes = {
  getVersions: PropTypes.func.isRequired,
  alert: PropTypes.object,
};

const mapState = ({ alert }) => ({
  alert,
});

const mapDispatch = dispatch => {
  const { getVersions } = alertActions;
  return bindActionCreators({ getVersions }, dispatch);
};

export default connect(
  mapState,
  mapDispatch,
)(Alert);
