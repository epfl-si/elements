import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getComponentMarkup } from '../../actions/atomic';
import parentUrl from '../../helpers/parentUrl';

import Single from './Single';
import Loader from './../../components/Loader/Loader';

/**
 * Will display the component as a raw page
 *
 * @class SinglePage
 * @extends {Single}
 */
class SinglePage extends Single {
  constructor() {
    super();

    this.state = {
      component: {},
    };
  }

  /**
   * Disable links default behavious inside the page
   *
   * @param {Event} e
   * @memberof SinglePage
   */
  handlePageClick(e) {
    // If it's a link related event, redirect to page
    const linkParent = parentUrl(e.target);
    if (linkParent) {
      e.preventDefault();
      if (linkParent.href.includes('pages')) {
        const slug = linkParent.href.split('pages/').slice(-1)[0];
        this.props.history.push(`/pages/${slug}`);
      }
    }
  }

  render() {
    return (
      <div>
        { undefined === this.state.component.content ? <Loader /> : '' }
        <div role="presentation" onClick={this.handlePageClick.bind(this)} dangerouslySetInnerHTML={{ __html: this.state.component.content }} />
      </div>
    );
  }
}

SinglePage.propTypes = {
  history: PropTypes.object.isRequired,
  components: PropTypes.object,
};

function mapState(state) {
  return {
    atomic: state.atomic,
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({
    getComponentMarkup,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(SinglePage);
