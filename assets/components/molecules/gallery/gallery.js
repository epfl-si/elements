/* globals $ */

import Flickity from 'flickity';
import FlickityFullscreen from 'flickity-fullscreen'; // eslint-disable-line
import FlickityNav from 'flickity-as-nav-for'; // eslint-disable-line
import Imagesloaded from 'imagesloaded';

export default () => {
  const $galleries = $('.gallery');
  const $galleryNavs = $('.gallery-nav');

  // Base gallery logic
  if ($galleries.length > 0) {
    $galleries.each(function () {
      Imagesloaded(this, () => {
        const $items = $(this).find('.gallery-item');

        // Toggle opacity to avoid load blink
        $(this).addClass('ready');

        // Add counter
        $items.each(function (i) {
          $(this).append(`
            <span class="gallery-counter">${i + 1}/${$items.length}</span>
          `);
        });

        const flkty = new Flickity(this, {
          pageDots: false,
          fullscreen: true,
        });
      });
    });
  }

  // Nav gallery logic
  if ($galleryNavs.length > 0) {
    $galleryNavs.each(function () {
      Imagesloaded(this, () => {
        const target = $(this).data('gallery');

        // Toggle opacity to avoid load blink
        $(this).addClass('ready');

        const flkty = new Flickity(this, {
          asNavFor: `#${target}`,
          cellAlign: 'left',
          pageDots: false,
          prevNextButtons: false,
          contain: true,
        });
      });
    });
  }
};
