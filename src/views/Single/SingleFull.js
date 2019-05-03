import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getComponentMarkup, getVariantMarkup } from '../../actions/atomic';

import Single from './Single';
import Loader from './../../components/Loader/Loader';

/**
 * Will display the component in a full window
 *
 * @class SingleFull
 * @extends {Single}
 */
class SingleFull extends Single {
  constructor() {
    super();

    this.state = {
      component: {},
    };
  }

  render() {
    const params = this.props.match.params;
    const isVariant = params.variant !== undefined;
    const component = this.state.component;

    let content = component.content;
    let background = component.background;
    let wrapper = component.wrapper;
    let slugClass = `tlbx-component-${component.name}`;

    if (isVariant) {
      const variant = component.variants.find(item => item.name === params.variant);
      content = variant.content;
      background = variant.background || component.background;
      wrapper = variant.wrapper || component.wrapper;
      slugClass = `tlbx-component-${component.name}-${variant.name}`;
    }

    return (
      <div className="tlbx-single-full">
        <div className="tlbx-single-full-intro">
          <h1>Full render of:&nbsp;
            <Link
              to={`/${component.type}/${component.parent || component.name}`}
              title={`Go back to ${component.title} component`}
            >
              {component.title}
            </Link>
          </h1>
        </div>

        { undefined === content
          ?
            <div
              style={background ? { backgroundColor: background } : {}}
              className={`tlbx-item-preview ${slugClass} ${wrapper}`}
            ><Loader /></div>
          :
            <div
              style={background ? { backgroundColor: background } : {}}
              className={`tlbx-item-preview ${slugClass} ${wrapper}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
        }
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
