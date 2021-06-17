/* global $ */

export default () => {
  $('.search').on('shown.bs.dropdown', () => {
    $('.search input[type="text"]').focus();
  });
};
