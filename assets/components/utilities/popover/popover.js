/* globals $ */

export default () => {
  $(function () {
    $('[data-toggle="popover"]').popover({
      placement: 'top',
      html: true,
      offset: -135,
      template: '<div class="popover" role="tooltip"><div class="popover-body"></div></div>',
    });
  });
};

