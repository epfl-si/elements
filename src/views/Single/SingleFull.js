import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getComponentMarkup, getVariantMarkup } from '../../actions/atomic';

import Single from './Single';
import Item from '../../components/Item/Item';

class SingleFull extends Single {
  constructor() {
    super();

    this.state = {
      component: {},
    }
  }

  render() {
    const params = this.props.match.params;
    const isVariant = params.variant !== undefined;
    let content = this.state.component.content;

    if (isVariant) {
      content = this.state.component.variants.find(item => item.name === params.variant).content;
    }

    return (
      <div className="tlbx-single-full">
        <div className="tlbx-single-full-intro">
          <h1>Full render of:&nbsp;
            <Link
              to={`/${this.state.component.type}/${this.state.component.parent || this.state.component.name}`}
              title={`Go back to ${this.state.component.title} component`}
            >
              {this.state.component.title}
            </Link>
          </h1>
        </div>

        <div
          style={this.state.component.background ? { backgroundColor: this.state.component.background } : {}}
          className={`tlbx-item-preview tlbx-${this.state.component.slug}`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    );
  }
}

SingleFull.propTypes = {
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
    getVariantMarkup,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(SingleFull);
