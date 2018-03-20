/* globals $ */

export default () => {
  $('.footer-title').each(
    function () {
      $(this).on('click', function () {
        if ($(this).parent().hasClass('active')) {
          $(this).parent().removeClass('active');
        } else {
          $('.footer-collapse').each(function () { $(this).removeClass('active'); });
          $(this).parent().addClass('active');
        }
      });
    },
  );
};
