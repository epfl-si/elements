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
            <div>
              <h3>{variant.title}</h3>
              {variant.notes
                ?
                  <div className="tlbx-notes">
                    <ReactMarkdown source={variant.notes} />
                  </div>
                : ''
              }
              <Item key={key} component={this.state.component} variant={variant}>
                {variant.content || ''}
              </Item>
            </div>
          );
        })}
      </div>
    );

    return (
      <div>
        <h1 className="tlbx-h1">{this.state.component.title}</h1>
        {this.state.component.notes && (
          <div className="tlbx-notes">
            <ReactMarkdown source={this.state.component.notes} />
          </div>
        )}
        <Item component={this.state.component}>
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
