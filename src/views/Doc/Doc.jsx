import React, { useState, useEffect, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { actions as docsActions } from '../../store/docs';

import './Doc.css';

const Doc = props => {
  const [homeFile, setHomeFile] = useState('');
  const [hasFetched, setHasFetched] = useState(false);

  const getContent = useCallback(props => {
    if (!hasFetched) {
      let newHomeFile = 'index.html';

      // legacy test
      if (props.docs.docs_list.f) {
        newHomeFile = props.docs.docs_list.f.includes('index.md')
          ? 'index.md'
          : newHomeFile;
      } else {
        newHomeFile =
          props.docs.docs_list && props.docs.docs_list.includes('index.md')
            ? 'index.md'
            : newHomeFile;
      }
      const slug = props.match.params.slug || homeFile;

      setHomeFile(newHomeFile);
      props.getDocContent(slug, props.navigation.base_url);
      setHasFetched(true);
    }
  });

  useEffect(() => {
    getContent(props);

    return () => {
      props.cleanDocContent();
    };
  }, [getContent, props]);

  useEffect(() => {
    setHasFetched(true);
    getContent(props);
  }, [getContent, props]);

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
};

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
