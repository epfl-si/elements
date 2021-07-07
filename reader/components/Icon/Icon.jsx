import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

const Icon = ({ name }) => {
  const useTag = `<use xlink:href="#${name}" />`;

  return (
    <svg dangerouslySetInnerHTML={{ __html: useTag }} className="tblx-icon" />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
