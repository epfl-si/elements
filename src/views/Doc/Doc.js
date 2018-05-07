import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { getDocContent, cleanDocContent } from '../../actions/docs';

import './Doc.css';

class Doc extends Component {
  constructor() {
    super();

    this.state = {
      homeFile: '',
    };
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  componentWillUnmount() {
    this.props.cleanDocContent();
  }

  getContent(props) {
    if (props.docs.current_doc.content.length <= 1) {
      const homeFile = props.docs.docs_list.f && props.docs.docs_list.f.includes('index.md') ? 'index.md' : 'index.html';
      const slug = props.match.params.slug || homeFile;

      this.setState({ homeFile });
      props.getDocContent(slug, props.navigation.base_url);
    }
  }

  render() {
    const currentDoc = this.props.docs.current_doc;

    return (
      <div>
        {currentDoc.format === 'md'
        ?
          <ReactMarkdown source={currentDoc.content || this.state.default} />
        :
          <div dangerouslySetInnerHTML={{ __html: currentDoc.content }} />
        }
      </div>
    );
  }
}

Doc.propTypes = {
  docs: PropTypes.object.isRequired,
  cleanDocContent: PropTypes.func.isRequired,
};

function mapState(state) {
  return {
    docs: state.docs,
    navigation: state.navigation,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({
    getDocContent,
    cleanDocContent,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(Doc);
