import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { actions as docsActions } from '../../store/docs';

import './Doc.scss';

class Doc extends Component {
  constructor() {
    super();

    this.state = {
      homeFile: '',
      hasFetched: false,
    };
  }

  componentDidMount() {
    this.getContent(this.props);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.docs.updated !== prevProps.docs.updated ||
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.setState({ hasFetched: false });
      this.getContent(this.props);
    }
  }

  componentWillUnmount() {
    this.props.cleanDocContent();
  }

  getContent(props) {
    if (!this.state.hasFetched) {
      let homeFile = 'index.html';

      // legacy test
      if (props.docs.docs_list && props.docs.docs_list.f) {
        homeFile = props.docs.docs_list.f.includes('index.md')
          ? 'index.md'
          : homeFile;
      } else {
        homeFile =
          props.docs.docs_list && props.docs.docs_list.includes('index.md')
            ? 'index.md'
            : homeFile;
      }
      const slug = props.match.params.slug || homeFile;

      this.setState({ homeFile });
      props.getDocContent(slug, props.navigation.base_url);
      this.setState({ hasFetched: true });
    }
  }

  render() {
    const currentDoc = this.props.docs.current_doc;

    return (
      <div>
        {currentDoc.format === 'md' ? (
          <div className="tlbx-doc-markdown-wrapper">
            <ReactMarkdown source={currentDoc.content || this.state.default} />
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: currentDoc.content }} />
        )}
      </div>
    );
  }
}

Doc.propTypes = {
  docs: PropTypes.object.isRequired,
  cleanDocContent: PropTypes.func.isRequired,
};

const mapState = ({ docs, navigation }) => ({
  docs,
  navigation,
});

const mapDispatch = dispatch => {
  const { getDocContent, cleanDocContent } = docsActions;
  return bindActionCreators({ getDocContent, cleanDocContent }, dispatch);
};

export default connect(
  mapState,
  mapDispatch,
)(Doc);
