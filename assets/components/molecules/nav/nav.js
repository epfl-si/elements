/* global $ */

const nav = () => {
  // closeMobileMenu();

  const activeClass = 'current-menu-parent';
  const parentClass = 'current-menu-ancestor';

  const resetMenu = () => {
    $('.nav-main li').removeClass(activeClass);
    $('.nav-main li').removeClass(parentClass);
  };

  const toggleMobileMenu = () => {
    $('body').toggleClass('mobile-menu-open');
  };

  const openDesktopMenu = (id) => {
    resetMenu();
    $(`.nav-main .${id}`).addClass(activeClass);
    $('body').addClass('desktop-menu-open');
  };

  const toggleDesktopMenu = () => {
    $('body').toggleClass('desktop-menu-open');
  };

  $('.nav-main .nav-back a').on('click', function (e) {
    e.preventDefault();

    const $parent = $(this).closest(`.${activeClass}`);
    $parent.removeClass(activeClass);

    const $ancestor = $(this).closest(`.${parentClass}`);
    $ancestor.removeClass(parentClass).addClass(activeClass);
  });

  $('.nav-main .nav-arrow').on('click', function (e) {
    e.preventDefault();

    const $parent = $(this).closest(`.${activeClass}`);
    $parent.addClass(parentClass).removeClass(activeClass);

    $(this).parent().addClass(activeClass);
  });

  $('.menu-toggle-mobile').on('click', () => {
    toggleMobileMenu();
  });

  $('.nav-toggle .nav-header a').on('click', function (e) {
    e.preventDefault();
    const id = $(this).parent().attr('id');
    if ($('.desktop-menu-open').length > 0) {
      toggleDesktopMenu();
      setTimeout(() => openDesktopMenu(id), 300);
    } else {
      openDesktopMenu(id);
    }
  });

  $('.nav-close').on('click', (e) => {
    e.preventDefault();
    toggleDesktopMenu();
  });

  $('.overlay').on('click', (e) => {
    e.preventDefault();
    toggleDesktopMenu();
  });

  $('#nav-burger').on('click', () => {
    toggleDesktopMenu();
  });
};

export default nav;
