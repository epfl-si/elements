import pkg from '../../../package.json';

const initialState = {
  utils_local_version: window.builder || null,
  reader_local_version: pkg.version,
  utils_diff: false,
  reader_diff: false,
};

export default initialState;
