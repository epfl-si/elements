import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

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
      this.setState({ content: twig.render(this.props.store.data) });
    });

    if (component.variants) {
      component.variants.forEach((variant) => {
        variant.then(twig => {
          this.setState({ variants: [...this.state.variants, twig.render(this.props.store.data)] });
        });
      });
    }
  }

  render() {
    const variants = this.state.variants.length > 0 && (
      <div>
        <h2 className="tlbx-h2">Variants</h2>

        {this.state.variants.map((variant, key) => {
          return <Item key={key}>{variant}</Item>;
        })}
      </div>
    );

    return (
      <div>
        <h1 className="tlbx-h1">{this.state.component.config.title}</h1>
        <p className="tlbx-notes">{this.state.component.config.notes}</p>
        
        <Item>{this.state.content}</Item>

        {variants}
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));