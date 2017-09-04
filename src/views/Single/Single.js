import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Item from '../../components/Item/Item';

import './Single.css';

class Single extends Component {
  constructor() {
    super();

    this.state = {
      component: {},
      content: '',
      variants: [],
    }
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  componentWillUnMount() {
    this.setState({
      component: {},
      content: '',
      variants: [],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  getContent(props) {
    const params = props.match.params;
    const components = props.store.components[params.type];
    const component = toJS(components).find(item => item.slug === params.slug);

    this.setState({ component, variants: [] });

    component.content.then(twig => {
      this.setState({ content: twig.render(window.data) });
    });

    if (component.variants && component.variants.length > 0) {
      component.variants.forEach((variant, key) => {
        variant.content.then(twig => {
          this.setState({ variants: [
            ...this.state.variants,
            {
              title: variant.title,
              slug: variant.slug,
              markup: twig.render(window.data)
            }
          ]});
        });
      });
    }
  }

  render() {
    const variants = this.state.variants.length > 0 && (
      <div>
        {this.state.variants.map((variant, key) => {
          return (
            <Item
              wrapper={this.state.component.wrapper || ''}
              background={this.state.component.background}
              key={key}
              title={variant.title}
              slug={`tlbx-${this.state.component.slug}-${variant.slug}`}
              fullUrl={`/${this.props.match.params.type}/${this.props.match.params.slug}/${variant.slug}/full`}
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
        {this.state.component.notes && (
          <div className="tlbx-notes">
            <ReactMarkdown source={this.state.component.notes} />
          </div>
        )}

        <Item
          wrapper={this.state.component.wrapper || ''}
          background={this.state.component.background}
          slug={`tlbx-${this.state.component.slug}`}
          fullUrl={`/${this.props.match.params.type}/${this.props.match.params.slug}/full`}
        >
          {this.state.content}
        </Item>

        {variants}
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));
