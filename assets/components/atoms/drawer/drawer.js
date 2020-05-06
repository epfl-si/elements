/* global $ */

const drawer = () => {
  $('.drawer-toggle').click(function () {
    const $drawer = $(this).parent('.drawer');
    const $drawerLink = $drawer.find('.drawer-link');
    const $drawerToggle = $(this);
    const breakpoint = 992;

    if ($drawer.hasClass('open')) {
      $drawer.removeClass('open');
      $drawer.css({ width: '' });
      $drawerLink.css({ width: $drawerToggle.width() });
    } else {
      let linkWidth = '100%';

      if ($(window).width() > breakpoint) {
        linkWidth = $drawerLink.find('.text').outerWidth();
        $drawer.css({ width: linkWidth });
      }
      $drawer.addClass('open');
      $drawerLink.css({ width: linkWidth });
    }
  });
};

export default drawer;
