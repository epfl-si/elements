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
    toggle.addClass('collapse-title collapse-title-desktop collapsed');
    target.attr('id', itemId);
    toggle.attr('data-target', `#${itemId}`);
    toggle.attr('data-toggle', 'collapse');

    // automatically add full width buttons at the end of the collapse
    const link = $('<a></a>');
    link.addClass('btn btn-block btn-sm btn-primary my-3');
    link.html("Voir le plan d'études");
    link.attr('href', toggle.attr('href'));
    target.append(link);
  });
};
