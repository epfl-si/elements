/* global $ */
const nav = () => {
  // closeMobileMenu();

  const activeClass = 'current_page_parent';
  const parentClass = 'current_page_ancestor';

  const toggleMobileMenu = () => {
    $('.main-container').toggleClass('mobile-menu-open');
    $('.menu-toggle-mobile').toggleClass('menu-toggle-mobile-opened');
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
};

export default nav;
