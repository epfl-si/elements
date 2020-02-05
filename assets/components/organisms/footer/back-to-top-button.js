/* globals $ */


export default () => {
  
  const backToTopBtn = $('#back-to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      backToTopBtn.addClass('show');
    } else {
      backToTopBtn.removeClass('show');
    }
  });

  backToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
};