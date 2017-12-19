import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import './Doc.css';

class Doc extends Component {
  constructor() {
    super();

    this.state = {
      homeFile: '',
      content: '',
      default: '<h1>Default</h1><p>Upgrade <i>toolbox-utils</i> for custom homepage</p>'
    }
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  componentWillUnmount() {
    this.setState({ content: '' });
  }

  getContent(props) {
    const homeFile = props.store.docs.f && props.store.docs.f.includes('index.md') ? 'index.md' : 'index.html';
    const slug = props.match.params.slug || homeFile;
    const path = `${props.store.base_path}docs/${slug.replace(/--/g, '/')}`;

    this.setState({ homeFile });

    axios
      .get(path)
      .then((res) => {
        this.setState({ content: res.data });
      });
  }

  render() {
    const slug = this.props.match.params.slug || this.state.homeFile;
    const slugSplited = slug.split('.');
    const ext = slugSplited[slugSplited.length - 1];

    return (
      <div>
        {ext === 'md'
        ?
          <ReactMarkdown source={this.state.content || this.state.default} />
        :
          <div dangerouslySetInnerHTML={{__html: this.state.content || this.state.default}} />
        }
      </div>
    );
  }
}

Doc.propTypes = {
  docs: PropTypes.object,
};

export default Doc;
