/* globals $ */

export default () => {
  new TomSelect('.tag-input', {
    plugins: ['remove_button'],
    render: {
      item: (data, escape) => `<div class="tag tag-primary">${escape(data.text)}</div>`,
    },
    create: input => ({
      value: input,
      text: input,
    }),
  });
};
