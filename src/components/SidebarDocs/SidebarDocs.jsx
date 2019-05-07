import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Collapse from 'react-css-collapse';
import PropTypes from 'prop-types';

import DocDir from './DocDir';
import DocDirLegacy from './DocDirLegacy';

const SidebarDocs = ({ location, docs }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const regex = new RegExp('^/doc/');
    const isCurrent = location.pathname.match(regex);

    setActive(!!isCurrent);
  }, []);

  if (docs.docs_list === undefined || Object.keys(docs.docs_list).length <= 0)
    return false;

  return (
    <div className={active ? ' tlbx-open' : ''}>
      <button className="tlbx-sidebar-item" onClick={() => setActive(!active)}>
        <strong>Documentation</strong>
      </button>
      <Collapse className="tlbx-sidebar-collapse" isOpen={active}>
        {docs.docs_list.f !== undefined ? (
          // Using the first doc structure { f: [], dir: {...}}
          <DocDirLegacy dir={docs.docs_list} fullpath="" />
        ) : (
          // Using the new doc structure since toolbox-utils 1.4.4
          <DocDir dir={docs.docs_list} fullpath="" />
        )}
      </Collapse>
    </div>
  );
};

SidebarDocs.propTypes = {
  location: PropTypes.object.isRequired,
  docs: PropTypes.object.isRequired,
};

const mapState = ({ docs }) => ({ docs });

export default connect(mapState)(SidebarDocs);
