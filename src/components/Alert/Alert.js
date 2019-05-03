import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getVersion } from '../../actions/alert';

import './Alert.css';

class Alert extends Component {
  constructor() {
    super();
    this.state = {
      closed: false,
    };
  }

  componentWillMount() {
    // this.props.getVersion();
  }

  handleClose() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    const alert = this.props.alert;
    const isVisible =
      alert.remote_version && alert.remote_version !== alert.local_version && !this.state.closed;

    return (
      <div className={`tlbx-alert${isVisible ? ' open' : ''}`}>
        <span>🚨</span>
        <p>
          Looks like you've built your styleguide using an <b>old version of toolbox-utils</b>{' '}
          (local <b>{alert.local_version || 'undefined'}</b>, current <b>{alert.remote_version}</b>).<br />See{' '}
          <a href="http://frontend.github.io/toolbox/updates.html">update doc</a>.
        </p>
        <button onClick={this.handleClose.bind(this)}>&times;</button>
      </div>
    );
  }
}

Alert.propTypes = {
  getVersion: PropTypes.func.isRequired,
  alert: PropTypes.object,
};

function mapState(state) {
  return {
    alert: state.alert,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      getVersion,
    },
    dispatch,
  );
}

export default connect(
  mapState,
  mapDispatch,
)(Alert);
