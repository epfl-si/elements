/* global $ */
const nav = () => {
  // closeMobileMenu();

  const activeClass = 'current_page_parent';
  const parentClass = 'current_page_ancestor';

  const toggleMobileMenu = () => {
    $('.main-container').toggleClass('mobile-menu-open');
  };

  $('.nav .nav-back a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().removeClass(activeClass);
    $(this).parent().parent().parent().parent().parent().removeClass(parentClass);
    $(this).parent().parent().parent().parent().parent().addClass(activeClass);
  });

  $('.nav .nav-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().addClass(parentClass);
    $(this).parent().parent().parent().removeClass(activeClass);
    $(this).parent().addClass(activeClass);
  });

  $('.menu-toggle-mobile').on('click', function () {
    toggleMobileMenu();
  });

 /*  $('#mobile-nav .toggle').on('click', function (e) {
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
  }); */
};

export default nav;
