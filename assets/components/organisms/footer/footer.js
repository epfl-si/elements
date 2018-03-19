/* globals $ */

export default () => {
  $('.footer-title').each(
    function () {
      $(this).on('click', function () {
        $(this).parent().toggleClass('active');
      });
    },
  );
};
