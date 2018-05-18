/* globals $ */

export default () => {
  $('.selectize').selectize({
    plugins: ['remove_button'],
    render: {
      item: function(data, escape) {
        console.log(data, escape);
        return '<div class="badge tag tag-primary">' + escape(data.text) + '</div>';
      }
    },
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
  });
};
