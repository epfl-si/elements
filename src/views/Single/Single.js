import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Item from '../../components/Item/Item';

import { getComponentMarkup } from '../../actions/atomic';

import './Single.css';

class Single extends Component {
  constructor() {
    super();

    this.state = {
      component: {},
    }
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  getContent(props) {
    const params = props.match.params;
    const type = props.location.pathname.split('/')[1];
    const components = props.atomic.sources[type];
    const component = components.find(item => item.name === params.slug);

    if (undefined === component.content) {
      props.getComponentMarkup(component, props.navigation.base_url);
    }
    this.setState({ component });
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
              slug={`tlbx-${this.state.component.slug}-${variant.slug}`}
              fullUrl={`/${this.props.location.pathname.split('/')[1]}/${this.props.match.params.slug}/${variant.slug}/full`}
            >
              {variant.markup}
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

Single.propTypes = {
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
    getComponentMarkup
  }, dispatch);
}

export default connect(mapState, mapDispatch)(Single);
