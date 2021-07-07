import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { actions as atomicActions } from '../../store/atomic';

import Single from './Single';
import Item from '../../components/Item/Item';

/**
 * Will display the component inside the styleguide
 *
 * @class SingleStyleguide
 * @extends {Single}
 */
class SingleStyleguide extends Single {
  constructor() {
    super();

    this.state = {
      component: {},
    };
  }

  renderVariants() {
    return (
      this.state.component.variants &&
      this.state.component.variants.length > 0 && (
        <div>
          {this.state.component.variants.map((variant, key) => {
            return (
              <div key={key}>
                <h3 className="tlbx-variant-heading">{variant.title}</h3>
                {variant.notes ? (
                  <div className="tlbx-notes">
                    <ReactMarkdown>{variant.notes}</ReactMarkdown>
                  </div>
                ) : (
                  ''
                )}
                <Item component={this.state.component} variant={variant}>
                  {variant.content || ''}
                </Item>
              </div>
            );
          })}
        </div>
      )
    );
  }

  render() {
    return (
      <div>
        <h1 className="tlbx-h1">{this.state.component.title}</h1>
        {this.state.component.notes && (
          <div className="tlbx-notes">
            <ReactMarkdown>{this.state.component.notes}</ReactMarkdown>
          </div>
        )}
        <Item component={this.state.component}>
          {this.state.component.content || ''}
        </Item>
        {this.renderVariants()}
      </div>
    );
  }
}

SingleStyleguide.propTypes = {
  components: PropTypes.object,
};

const mapState = ({ atomic, navigation }) => ({
  atomic,
  navigation,
});

const mapDispatch = dispatch => {
  const { getComponentMarkup, getVariantMarkup } = atomicActions;
  return bindActionCreators({ getComponentMarkup, getVariantMarkup }, dispatch);
};

export default connect(
  mapState,
  mapDispatch,
)(SingleStyleguide);
