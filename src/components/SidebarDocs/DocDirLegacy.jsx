import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const DocDirLegacy = ({ dir, fullpath }) => {
  const titlelize = string => {
    const title = string.split('.')[0].replace('-', ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <ul className="tlbx-sidebar-item-list">
      {Object.keys(dir).map((item, i) => {
        if (item === 'f') {
          return (
            <span key={i}>
              {dir[item].map((file, j) => {
                if (file !== 'index.md' && file !== 'index.html') {
                  return (
                    <li key={j}>
                      <NavLink to={`/doc/${fullpath}${file}`}>
                        {titlelize(file)}
                      </NavLink>
                    </li>
                  );
                }

                return false;
              })}
            </span>
          );
        }

        const hasIndexMd = dir[item].f.includes('index.md');
        const hasIndexHtml = dir[item].f.includes('index.html');
        const index = hasIndexMd
          ? '--index.md'
          : hasIndexHtml
          ? '--index.html'
          : '';

        return (
          <li key={i}>
            {hasIndexMd || hasIndexHtml ? (
              <NavLink to={`/doc/${item}${index}`}>{titlelize(item)}</NavLink>
            ) : (
              <em>{titlelize(item)}</em>
            )}
            <DocDirLegacy dir={dir[item]} fullpath={`${fullpath}${item}--`} />
          </li>
        );
      })}
    </ul>
  );
};

DocDirLegacy.propTypes = {
  dir: PropTypes.string.isRequired,
  fullpath: PropTypes.string.isRequired,
};
DocDirLegacy.defaultProps = {};

export default DocDirLegacy;
