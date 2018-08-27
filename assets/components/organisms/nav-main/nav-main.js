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

  // display the parent menu level
  const displayParentLevel = (node = false) => {
    if (!node) return false;
    const parents = $(node).parents();

    const parent = parents[2];
    $(parent)
      .removeClass(parentClass)
      .removeClass(activeClass);

    const ancestor = parents[4];
    $(ancestor)
      .removeClass(parentClass)
      .addClass(activeClass);
  };

  // display the parent menu level
  const displayChildLevel = (node = false) => {
    if (!node) return false;
    const parents = $(node).parents();

    const parent = parents[0];
    $(parent).addClass(activeClass);

    const ancestor = parents[2];
    $(ancestor)
      .addClass(parentClass)
      .removeClass(activeClass);
  };

  // define if the menu is asynchronous
  const isAsync = (node = false) => {
    if (!node) return false;
    const currentNav = $(node).closest('.nav-main').first();
    return currentNav.hasClass('nav-async');
  };

  // moves the navigation one level up when clicking a "back" link
  $('.nav-main .nav-back a').on('click', (e) => {
    const $this = $(e.currentTarget);
    e.preventDefault();
    const async = isAsync($this);
    if (async) {
      // Async nav behaviour
      const currentNav = $($this).closest('.nav-main').first();
      currentNav.trigger('loadstart');

      // demo code for actions to trigger after completion
      const currentNode = $this;
      setTimeout(() => {
        currentNav.trigger('loadend', [displayParentLevel, currentNode]);
      }, 2000, currentNode);

      $('#nav-toggle').addClass('is-loading');
    } else {
      // Synchronous nav behaviour, when parent DOM is ready before the click
      displayParentLevel($this);
    }
  });

  /*
    move the navigation one level down,
    when clicking the "show children" arrow on the right of a menu item
  */
  // eslint-disable-next-line
  $('.nav-main .nav-arrow').on('click', (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const $async = isAsync($this);
    if ($async) {
      // Async nav behaviour
      const currentNav = $($this).closest('.nav-main').first();
      currentNav.trigger('loadstart');

      // demo code for actions to trigger after completion
      const currentNode = $this;
      setTimeout(() => {
        currentNav.trigger('loadend', [displayChildLevel, currentNode]);
      }, 2000, currentNode);
    } else {
      // Normal nav behaviour, when parent DOM is ready before the click
      displayChildLevel($this);
    }
  });

  /**
   * Bind custom events for async nav loading state
   */
  $('.nav-main').on('loadstart', () => {
    $('#nav-toggle').addClass('is-loading');
  });

  /**
   * Bind custom events for async nav loading state
   */
  $('.nav-main').on('loadend', (event, action, node) => {
    $('#nav-toggle').removeClass('is-loading');
    action(node);
  });

  // bind action to mobile menu toggle
  $('.nav-toggle-mobile').on('click', () => {
    toggleMobileMenu();
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
