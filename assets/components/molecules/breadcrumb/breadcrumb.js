/* globals $ */

export default () => {
  const expandBreadcrumb = $('.btn-expand-links');
  const breadcrumbDropToggle = $('.dropdown-toggle');

  // add class 'has-expanded-links'
  expandBreadcrumb.click(function(){
    $(".breadcrumb-wrapper .breadcrumb").addClass("has-expanded-links");
  });

  // improve dropdown position
  breadcrumbDropToggle.click(function(){
    var btnPos = $(this).offset().left;
    var documentWitdh = $(document).width();
    var dropdown = $(this).siblings(".dropdown-menu");
    var dropdownWidth = dropdown.width();
    var btnOffset = documentWitdh - btnPos;

    // remove class 'open-left' from all .dropdown-menu elements
    $(".dropdown-menu").removeClass("open-left");
    // add the class back if the dropdown is too close to the right side of the window
    if ( dropdownWidth > btnOffset ) {
      dropdown.addClass("open-left");
    }
  });
};
