/* globals $ */

export default () => {
  const expandBreadcrumb = $('.btn-expand-links');
  const breadcrumbDropToggle = $('.dropdown-toggle');

  // add class 'has-expanded-links'
  expandBreadcrumb.on('click', () => {
    $('.breadcrumb-wrapper .breadcrumb').addClass('has-expanded-links');
  });

  // improve dropdown position
  breadcrumbDropToggle.on('click', (e) => {
    const btnPos = $(e.currentTarget).offset().left;
    const documentWitdh = $(document).width();
    const dropdown = $(e.currentTarget).siblings('.dropdown-menu');
    const dropdownWidth = dropdown.width();
    const btnOffset = documentWitdh - btnPos;

    // remove class 'open-left' from all .dropdown-menu elements
    $('.dropdown-menu').removeClass('open-left');
    // add the class back if the dropdown is too close to the right side of the window
    if (dropdownWidth > btnOffset) {
      dropdown.addClass('open-left');
    }
  });
};
