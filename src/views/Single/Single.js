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

  componentWillUnMount() {
    this.setState({
      component: {},
      content: '',
      variants: [],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);

    // reset variants for this component
    this.setState({
      variants: [],
    });
  }

  getContent(props) {
    const params = props.match.params;
    const components = props.store.components[params.type]; 
    const component = components.find(item => item.slug === params.slug);

    this.setState({ component });

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
        <hr/>
        <h3>Variants</h3>

        {this.state.variants.map((variant, key) => {
          return (
            <div className="t-item-preview" key={key}>
              <div dangerouslySetInnerHTML={{ __html: variant }} />
              <pre className="t-item-code"><code>{variant}</code></pre>
            </div>
          );
        })}
      </div>
    );

    return (
      <div>
        <h1>{this.state.component.config.title}</h1>
        <p>{this.state.component.config.notes}</p>
        <div className="t-item-preview">
          <div className="" dangerouslySetInnerHTML={{ __html: this.state.content }} />
          <pre className="t-item-code"><code>{this.state.content}</code></pre>
        </div>
        
        {variants}
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));