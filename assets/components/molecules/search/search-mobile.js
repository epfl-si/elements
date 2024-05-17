/* global $ */

export default () => {

  $('#search-mobile-toggle').on('click', () => {

    const searchContainer = $('.search-mobile');
    const searchField = searchContainer.find('.form-control');

    searchContainer.toggleClass('show');
    $('body').toggleClass('search-open');

    if (searchContainer.hasClass('show')) {
      searchField.trigger('focus');
    }

  });

  $('#search-mobile-close').on('click', () => {

    const searchContainer = $('.search-mobile');

    searchContainer.removeClass('show');
    $('body').removeClass('search-open');

  });

};
