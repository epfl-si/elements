import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import './Page.css';

class Page extends Component {
  componentWillMount() {
    this.getContent(this.props);
    console.log(this.props);
  }

  getContent(props) {
    const params = props.match.params;
    const components = this.props.store.components.pages;
    const component = toJS(components).find(item => item.slug === params.slug);

    this.setState({ component, variants: [] });

    console.log(params);

    component.content.then(twig => {
      this.setState({ content: twig.render(window.data) });
    });
  }

  handlePageClick(e) {
    // Disable links default behavious
    e.preventDefault();

    const parentUrl = (child) => {
      if (child.tagName === 'A') return child;
      if (child.parentNode) {
        if (child.parentNode.tagName === 'A') {
          return child.parentNode;
        } else {
          return parentUrl(child.parentNode);
        }
      } else {
        return false;
      }
    }

    // If it's a link related event, redirect to page
    const linkParent = parentUrl(e.target);
    if (linkParent) {
      const slug = linkParent.href.split('/pages/').slice(-1)[0];
      this.getContent({ Store: this.props.store, match : { params: { slug } } });
      this.props.history.push('/pages/homepage');
    }

  }

  render() {
    return (
      <div onClick={this.handlePageClick.bind(this)} dangerouslySetInnerHTML={{ __html: this.state.content }} ></div>
    );
  }
}

Page.propTypes = {
  components: PropTypes.object,
};

export default inject('store')(observer(withRouter(Page)));
