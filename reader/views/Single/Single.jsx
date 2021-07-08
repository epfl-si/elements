import { Component } from 'react';

import './Single.scss';

/**
 * Single higher component
 * mainly use to share the getContent method
 *
 * @class Single
 * @extends {Component}
 */
class Single extends Component {
  componentDidMount() {
    if (this.props.atomic.sources) this.getContent(this.props);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.atomic.updated !== prevProps.atomic.updated ||
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.getContent(this.props);
    }
  }

  /**
   * Will operate all the request to get the component/variant markups
   *
   * @param {any} props
   * @memberof Single
   */
  getContent(props) {
    const params = props.match.params;
    const type = props.location.pathname.split('/')[1];
    const components = props.atomic.sources[type];
    const component = components.find(item => item.name === params.slug);

    if (undefined === component.content) {
      props.getComponentMarkup(component, props.atomic.types);
    }

    component.variants.forEach(variant => {
      if (undefined === variant.content)
        props.getVariantMarkup(variant, props.atomic.types);
    });

    this.setState({ component });
  }
}

export default Single;
