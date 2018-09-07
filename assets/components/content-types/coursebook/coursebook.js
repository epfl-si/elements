/* global $ */

export default () => {
  const id = new Date().getTime().toString(16);
  $('.coursebook-program .tree>li').each((i, collapse) => {
    // identify toggle and target
    const toggle = $('.underline a', collapse);
    const target = $('>ul', collapse);
    // generate page-unique id
    const itemId = `${id}-${i}`;
    // set correct attributes
    target.addClass('collapse collapse-item collapse-item-desktop');
    target.attr('id', itemId);
    toggle.attr('data-target', `#${itemId}`);
    toggle.attr('data-toggle', 'collapse');
  });
};
