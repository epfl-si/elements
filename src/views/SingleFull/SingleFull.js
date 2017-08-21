import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item';

import './SingleFull.css';

class SingleFull extends Component {
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
      url: '',
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
    const component = components.find(item => item.name === params.slug);
    const url = `/${params.type}/${params.slug}`;

    this.setState({ component, url, variants: [] });

    if (!params.variant || params.variant === 'default') {
      component.content.then(twig => {
        this.setState({ content: twig.render(window.data) });
      });
    } else if (component.variants && component.variants.length > 0) {
      component.variants.forEach((variant, key) => {
        if (variant.slug === params.variant) {
          variant.content.then(twig => {
            this.setState({
              content: twig.render(window.data),
              component: {
                title: `${this.state.component.title} – ${variant.title}`,
                slug: variant.slug,
                wrapper: this.state.component.wrapper,
                background: this.state.component.background,
              }
            });
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="tlbx-single-full">
        <div className="tlbx-single-full-intro">
          <h1>Full render of:&nbsp;
            <Link to={this.state.url} title={`Go back to ${this.state.component.title} component`}>
              {this.state.component.title}
            </Link>
          </h1>
        </div>

        <div
          style={this.state.component.background ? { backgroundColor: this.state.component.background } : {}}
          className={`tlbx-item-preview ${this.state.component.wrapper} ${this.state.component.slug}`}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
        ></div>
      </div>
    );
  }
}

SingleFull.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(SingleFull));
