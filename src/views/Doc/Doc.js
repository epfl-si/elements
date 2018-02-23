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
      default: '<h1>Default</h1><p>Upgrade <i>toolbox-utils</i> for custom homepage</p>'
    }
  }

  componentWillMount() {
    this.getContent(this.props);
  }

  componentWillUnmount() {
    this.props.cleanDocContent();
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  getContent(props) {
    const homeFile = props.docs.docs_list.f && props.docs.docs_list.f.includes('index.md') ? 'index.md' : 'index.html';
    const slug = props.match.params.slug || homeFile;

    this.setState({ homeFile });
    props.getDocContent(slug, props.navigation.base_url);
  }

  render() {
    const currentDoc = this.props.docs.current_doc;

    return (
      <div>
        {currentDoc.format === 'md'
        ?
          <ReactMarkdown source={currentDoc.content || this.state.default} />
        :
          <div dangerouslySetInnerHTML={{__html: currentDoc.content || this.state.default}} />
        }
      </div>
    );
  }
}

Doc.propTypes = {
  docs: PropTypes.object,
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
