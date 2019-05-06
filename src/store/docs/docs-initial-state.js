import nanoid from 'nanoid';

const initialState = {
  updated: nanoid(),
  current_doc: {
    content: ' ',
  },
};

export default initialState;
