import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

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

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  getContent(props) {
    const params = props.match.params;
    const components = props.store.components[params.type]; 
    const component = components.find(item => item.slug === params.slug);

    this.setState({ component });

    component.content.then(twig => {
      this.setState({ content: twig.render(this.props.store.data) });
    });

    component.variants.forEach((variant) => {
      variant.then(twig => {
        this.setState({ variants: [...this.state.variants, twig.render(this.props.store.data)] });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.component.config.title}</h1>
        <p>{this.state.component.config.notes}</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <pre><code>{this.state.content}</code></pre>

        {this.state.variants.map((variant, key) => {
          return (
            <div key={key}>
              <div dangerouslySetInnerHTML={{ __html: variant }} />
              <pre><code>{variant}</code></pre>
            </div>
          );
        })}
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));