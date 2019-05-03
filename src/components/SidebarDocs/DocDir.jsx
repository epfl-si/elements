import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const DocDir = ({ dir, fullpath }) => {
  const titlelize = string => {
    const title = string.split('.')[0].replace('-', ' ');
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <ul className="tlbx-sidebar-item-list">
      {dir.map((item, i) => {
        if (typeof item === 'string') {
          if (item !== 'index.md' && item !== 'index.html') {
            return (
              <li key={i}>
                <NavLink to={`/doc/${fullpath}${item}`}>
                  {titlelize(item)}
                </NavLink>
              </li>
            );
          }
          return null;
        }

        const slug = Object.keys(item)[0];
        const pages = item[slug];
        const hasIndexMd = pages.includes('index.md');
        const hasIndexHtml = pages.includes('index.html');
        const index = hasIndexMd
          ? '--index.md'
          : hasIndexHtml
          ? '--index.html'
          : '';

        return (
          <li key={i}>
            {hasIndexMd || hasIndexHtml ? (
              <NavLink to={`/doc/${slug}${index}`}>{titlelize(slug)}</NavLink>
            ) : (
              <em>{titlelize(slug)}</em>
            )}
            <DocDir dir={pages} fullpath={`${fullpath}${slug}--`} />
          </li>
        );
      })}
    </ul>
  );
};

DocDir.propTypes = {
  dir: PropTypes.array.isRequired,
  fullpath: PropTypes.string.isRequired,
};
DocDir.defaultProps = {};

export default DocDir;
