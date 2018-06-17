/* global $ */

const drawer = () => {
  $('.drawer-toggle').click((e) => {
    e.preventDefault();
    const $drawer = $(e.currentTarget).parent('.drawer');
    const $drawerLink = $drawer.find('.drawer-link');
    const $drawerToggle = $drawer.find('.drawer-toggle');
    const breakpoint = 992;

    if ($drawer.hasClass('open')) {
      $drawer
        .removeClass('open');
      $drawerLink
        .css({ width: $drawerToggle.width() });
    } else {
      let linkWidth = '100%';

      if ($(window).width() > breakpoint) {
        linkWidth = $drawerLink.find('.text').outerWidth();
      }
      $drawer
        .addClass('open');
      $drawerLink
        .css({ width: linkWidth });
    }
  });
};

export default drawer;
