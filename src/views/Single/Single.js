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
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.slug}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <pre><code>{this.state.content}</code></pre>
      </div>
    );
  }
}

Single.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(Single));