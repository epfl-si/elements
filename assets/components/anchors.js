/* global $ */

export default () => {
  $('a').on('click', (e) => {
    const target_href = $(e.target).attr('href');
    if (target_href && target_href.length > 1 && target_href.match('^#')) {
      $(e.target)[0].scrollIntoView();
    }
  });
};
