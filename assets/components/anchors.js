/* global $ */

export default () => {
  $('a').on('click', (e) => {
    const target = $(e.target).attr('href');
    if (target && target.length > 1 && target.match('^#')) {
      $(target)[0].scrollIntoView();
    }
  });
};
