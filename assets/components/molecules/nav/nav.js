/* global $ */
const nav = () => {
  // closeMobileMenu();

  const activeClass = 'current_page_parent';
  const parentClass = 'current_page_ancestor';

  const resetMenu = () => {
    $('.nav-main li').removeClass(activeClass);
    $('.nav-main li').removeClass(parentClass);
  };

  const toggleMobileMenu = () => {
    $('.main-container').toggleClass('mobile-menu-open');
    $('.menu-toggle-mobile').toggleClass('menu-toggle-mobile-open');
  };

  const openDesktopMenu = (id) => {
    resetMenu();
    $('.nav-main a[data-page-id="' + id + '"]').parent().addClass(activeClass);
    $('.main-container').addClass('desktop-menu-open');
  };

  const toggleDesktopMenu = () => {
    $('.main-container').toggleClass('desktop-menu-open');
  };

  $('.nav-main .nav-back a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().removeClass(activeClass);
    $(this).parent().parent().parent().parent().parent().removeClass(parentClass);
    $(this).parent().parent().parent().parent().parent().addClass(activeClass);
  });

  $('.nav-main .nav-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().addClass(parentClass);
    $(this).parent().parent().parent().removeClass(activeClass);
    $(this).parent().addClass(activeClass);
  });

  $('.menu-toggle-mobile').on('click', function () {
    toggleMobileMenu();
  });

  $('.header-nav-toggle a').on('click', function (e) {
    e.preventDefault();
    const id = $(this).data('page-id');
    if ($('.desktop-menu-open').length > 0) {
      toggleDesktopMenu();
      setTimeout(function() {
        openDesktopMenu(id);
      }, 300);
    } else {
      openDesktopMenu(id);
    }
  });

  $('.nav-close').on('click', function (e) {
    e.preventDefault();
    toggleDesktopMenu();
  });

  $('.overlay').on('click', function (e) {
    e.preventDefault();
    toggleDesktopMenu();
  });
};

export default nav;
