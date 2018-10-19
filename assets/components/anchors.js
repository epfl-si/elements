/* global $ */

export default () => {
  $('a').on('click', (e) => {
    const target = $(e.target).attr('href');
    if (target && target.match('^#')) {
      $(target)[0].scrollIntoView();
    }
  });
};
