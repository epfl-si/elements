/* global $ */
const nav = () => {
  // closeMobileMenu();

  const toggleMobileMenu = () => {
    $('.main-container').toggleClass('mobile-menu-open');
  };

  $('.nav .nav-back').on('click', function (e){
    e.preventDefault();
    $(this).parent().removeClass('active');
    $(this).parent().parent().parent().attr('class', 'active');
  });

  $('.nav .nav-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().attr('class', 'parent');
    $(this).parent().children('ul').attr('class', 'active');
  });

  $('.menu-toggle-mobile').on('click', function () {
    toggleMobileMenu();
  });

  $('#mobile-nav .toggle').on('click', function (e) {
    e.preventDefault();

    const link = $('#mobile-nav li.active');

    if (link.length > 0) {
      //activateMobileParents(link);
    } else {
      //toggleMobileMenu();
    }
  });

  $('.mobile-overlay').on('click', function () {
    //closeMobileMenu();
  });

  $('#mobile-nav .back').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().attr('style', '');

    if ($(this).parent().parent().parent().parent().parent().hasClass('navigation-container')) {
      $(this).parent().parent().parent().parent().css('left', '50%');
    } else {
      $(this).parent().parent().parent().parent().css('left', '100%');
    }
  });
};

export default nav;
