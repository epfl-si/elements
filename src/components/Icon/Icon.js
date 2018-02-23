import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = (props) => {
  const useTag = `<use xlink:href="#${props.name}" />`;

  return (
    <svg dangerouslySetInnerHTML={{ __html: useTag }} className="tblx-icon" />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
