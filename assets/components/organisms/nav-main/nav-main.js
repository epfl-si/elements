/* global $ */

const nav = () => {
  // declare classes used to identify current menu and it's parents (based on wordpress classes)
  const activeClass = 'current-menu-parent';
  const parentClass = 'current-menu-ancestor';

  // toggle mobile navigation
  const toggleMobileMenu = () => {
    // handle correct menu display when on level 0 page on mobile
    const firstLeveItem = $('.nav-main .nav-menu>.current-menu-item');
    if (firstLeveItem.length > 0) {
      const parent = firstLeveItem.parents()[1];
      $(parent).addClass(activeClass);
    }

    $('body').toggleClass('mobile-menu-open');
  };

  // Open or close desktop toggle navigation, keeping it's atual position.
  // Used for the hamburger desktop menu to display current position
  const toggleDesktopMenu = (offset = 0) => {
    $('body').toggleClass('desktop-menu-open');
    if (offset > 0 && $('body').hasClass('desktop-menu-open')) {
      $('.nav-main').css('left', offset);
    } else {
      $('.nav-main').css('left', '');
    }
  };

  // moves the navigation one level up when clicking a "back" link
  // eslint-disable-next-line
  $('.nav-main .nav-back a').on('click', function(e) {
    e.preventDefault();

    const parents = $(this).parents();

    const parent = parents[2];
    $(parent)
      .removeClass(parentClass)
      .removeClass(activeClass);

    const ancestor = parents[4];
    $(ancestor)
      .removeClass(parentClass)
      .addClass(activeClass);
  });

  /*
    move the navigation one level down,
    when clicking the "show children" arrow on the right of a menu item
  */
  // eslint-disable-next-line
  $('.nav-main .nav-arrow').on('click', function(e) {
    e.preventDefault();

    const parents = $(this).parents();

    const parent = parents[0];
    $(parent).addClass(activeClass);

    const ancestor = parents[2];
    $(ancestor)
      .addClass(parentClass)
      .removeClass(activeClass);
  });

  // bind action to mobile menu toggle
  $('.nav-toggle-mobile').on('click', () => {
    toggleMobileMenu();
  });

  // close toggle navigation
  $('.nav-close').on('click', (e) => {
    e.preventDefault();
    toggleDesktopMenu();
  });

  // Bind aciton to close toggle navigation, when clicking the white overlay
  $('.overlay').on('click', (e) => {
    e.preventDefault();
    toggleDesktopMenu();
  });

  // Bind action to the desktop hamburger (next to breadcrumbs)
  // eslint-disable-next-line
  $('#nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    const offsetX = $(this).offset().left + $(this).outerWidth(true);
    const offsetY = $(this).offset().top - $(window).scrollTop();
    $('.nav-main').css('top', offsetY);
    toggleDesktopMenu(offsetX);
  });
};

export default nav;
