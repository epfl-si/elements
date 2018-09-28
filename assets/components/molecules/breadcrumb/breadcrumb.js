/* globals $ */

export default () => {
  const breadcrumb = $('#breadcrumb-wrapper');

  if ($(breadcrumb).length > 0) {  // don't expect to have the breadcrumb on every case
    const breadcrumbNode = breadcrumb[0];
    const breadcrumbComponent = breadcrumb.find('.breadcrumb');

    if ($(window).width() > 1199 && breadcrumb.width() < breadcrumbComponent[0].scrollWidth) {
      let isDown = false;
      let startX;
      let scrollLeft;

      breadcrumb.on('mousedown', (e) => {
        isDown = true;
        breadcrumb.addClass('moving');
        startX = e.pageX - breadcrumbNode.offsetLeft;
        // eslint-disable-next-line
        scrollLeft = breadcrumbNode.scrollLeft;
      });

      breadcrumb.on('mouseleave', () => {
        isDown = false;
        breadcrumb.removeClass('moving');
      });

      breadcrumb.on('mouseup', () => {
        isDown = false;
        breadcrumb.removeClass('moving');
      });

      breadcrumb.on('mousemove', (e) => {
        if (!isDown) return; // stop the fn from running
        e.preventDefault();
        const x = e.pageX - breadcrumbNode.offsetLeft;
        const walk = (x - startX) * 3;
        breadcrumbNode.scrollLeft = scrollLeft - walk;
      });

      breadcrumb.mousewheel((e, delta) => {
        e.preventDefault();
        breadcrumbNode.scrollLeft -= delta * 40;
      });

      breadcrumb.find('*').on('dragstart', () => false);
    }
  }
};
