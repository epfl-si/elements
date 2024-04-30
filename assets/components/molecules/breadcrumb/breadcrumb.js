/* globals $ */

export default () => {
  const expandBreadcrumb = $('.btn-expand-links');

  expandBreadcrumb.click(function(){
    $(".breadcrumb-wrapper .breadcrumb").addClass("has-expanded-links");
  });
};
