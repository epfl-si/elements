/* global $ */

const nav = () => {
  // declare classes used to identify current menu and it's parents (based on wordpress classes)
  const activeClass = 'current-menu-parent';
  const parentClass = 'current-menu-ancestor';

  // cleans the whole menu of active/parent classes
  const resetMenu = () => {
    $('.nav-main li').removeClass(activeClass).removeClass(parentClass);
  };

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

  // Open desktop navigation, displaying childs of the menu item clicked.
  // Is trigerred by clicking a link in the header.
  const openDesktopMenu = (id) => {
    resetMenu();
    $(`.nav-main .${id}`).addClass(activeClass);
    $('body').addClass('desktop-menu-open');
  };

  // Open or close desktop toggle navigation, keeping it's atual position.
  // Used for the hamburger desktop menu to display current position
  const toggleDesktopMenu = () => {
    $('body').toggleClass('desktop-menu-open');
  };

  // moves the navigation one level up when clicking a "back" link
  $('.nav-main .nav-back a').on('click', function (e) {
    e.preventDefault();

    const parents = $(this).parents();

    const parent = parents[2];
    $(parent).removeClass(parentClass).removeClass(activeClass);

    const ancestor = parents[4];
    $(ancestor).removeClass(parentClass).addClass(activeClass);
  });

  /*
    move the navigation one level down,
    when clicking the "show children" arrow on the right of a menu item
  */
  $('.nav-main .nav-arrow').on('click', function (e) {
    e.preventDefault();

    const parents = $(this).parents();

    const parent = parents[0];
    $(parent).addClass(activeClass);

    const ancestor = parents[2];
    $(ancestor).addClass(parentClass).removeClass(activeClass);
  });

  // bind action to mobile menu toggle
  $('.menu-toggle-mobile').on('click', () => {
    toggleMobileMenu();
  });

  /*
    when clicking a link on the header with the navigation already open,
    let time for the menu to close and re-open at the right spot
  */
  $('.nav-toggle .nav-header a').on('click', function (e) {
    const id = $(this).parent().attr('id');
    if ($(`.nav-main .${id} ul`).length > 0) {
      // only block link when the menu item clicked has children in the sidebar
      e.preventDefault();
      if ($('.desktop-menu-open').length > 0) {
        toggleDesktopMenu();
        setTimeout(() => openDesktopMenu(id), 300);
      } else {
        openDesktopMenu(id);
      }
    }
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
  $('#nav-burger').on('click', () => {
    toggleDesktopMenu();
  });
};

export default nav;
