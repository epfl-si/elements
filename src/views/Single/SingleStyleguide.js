import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { getComponentMarkup, getVariantMarkup } from '../../actions/atomic';

import Single from './Single';
import Item from '../../components/Item/Item';

class SingleStyleguide extends Single {
  constructor() {
    super();

    this.state = {
      component: {},
    }
  }

  render() {
    const variants = this.state.component.variants.length > 0 && (
      <div>
        {this.state.component.variants.map((variant, key) => {
          return (
            <Item
              wrapper={this.state.component.wrapper || ''}
              background={this.state.component.background}
              key={key}
              title={variant.title}
              slug={`tlbx-${this.props.match.params.slug}-${variant.name}`}
              fullUrl={`/${this.props.location.pathname.split('/')[1]}/${this.props.match.params.slug}/${variant.name}/full`}
            >
              {variant.content || ''}
            </Item>
          );
        })}
      </div>
    );

    return (
      <div>
        <h1 className="tlbx-h1">{this.state.component.title}</h1>
        {/* {this.state.component.notes && (
          <div className="tlbx-notes">
            <ReactMarkdown source={this.state.component.notes} />
          </div>
        )} */}

        <Item
          wrapper={this.state.component.wrapper || ''}
          background={this.state.component.background}
          slug={`tlbx-${this.state.component.slug}`}
          fullUrl={`/${this.props.location.pathname.split('/')[1]}/${this.props.match.params.slug}/full`}
        >
          {this.state.component.content || ''}
        </Item>

        {variants}
      </div>
    );
  }
}

SingleStyleguide.propTypes = {
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

export default connect(mapState, mapDispatch)(SingleStyleguide);
