import React, { Component } from 'react';
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
    const component = components.find(item => item.slug === params.slug);

    this.setState({ component, variants: [] });

    component.content.then(twig => {
      this.setState({ content: twig.render(window.data) });
    });

    if (component.variants && component.variants.length > 0) {
      component.variants.forEach((variant, key) => {
        variant.twig.then(twig => {
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
              wrapper={this.state.component.config.wrapper || ''}
              background={this.state.component.config.background}
              key={key}
              title={variant.title}
              slug={`tlbx-${this.state.component.slug}-${variant.slug}`}
            >
                {variant.markup}
            </Item>
          );
        })}
      </div>
    );

    return (
      <div>
        <h1 className="tlbx-h1">{this.state.component.config.title}</h1>
        <div className="tlbx-notes">
          <ReactMarkdown source={this.state.component.config.notes} />
        </div>

        <Item
          wrapper={this.state.component.config.wrapper || ''}
          background={this.state.component.config.background}
          slug={`tlbx-${this.state.component.slug}`}
        >{this.state.content}</Item>

        {variants}
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));
