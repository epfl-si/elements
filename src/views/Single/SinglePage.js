import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getComponentMarkup } from '../../actions/atomic';

import Single from './Single';

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
    e.preventDefault();

    const parentUrl = (child) => {
      if (child.tagName === 'A') return child;
      if (child.parentNode) {
        if (child.parentNode.tagName === 'A') {
          return child.parentNode;
        }
        return parentUrl(child.parentNode);
      }
      return false;
    };

    // If it's a link related event, redirect to page
    const linkParent = parentUrl(e.target);
    if (linkParent) {
      const slug = linkParent.href.split('/pages/').slice(-1)[0];
      this.getContent({ Store: this.props.store, match: { params: { slug } } });
      this.props.history.push('/pages/homepage');
    }
  }

  render() {
    return (
      <div role="presentation" onClick={this.handlePageClick.bind(this)} dangerouslySetInnerHTML={{ __html: this.state.component.content }} />
    );
  }
}

SinglePage.propTypes = {
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
