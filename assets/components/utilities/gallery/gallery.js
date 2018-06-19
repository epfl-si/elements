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
          $(this).find('figcaption').append(`
            <span class="gallery-counter">${i + 1}/${$items.length}</span>
          `);
        });

        // Instantiate Flickity gallery
        const flkty = new Flickity(this, {
          pageDots: false,
          fullscreen: true,
          setGallerySize: true,
          arrowShape: 'M14.2,45.8L53,7.1c1.6-1.6,1.6-4.3,0-5.9s-4.3-1.6-5.9,0L1.2,47c-1.6,1.6-1.6,4.3,0,5.9c0,0,0,0,0,0l45.8,45.8c1.6,1.6,4.3,1.6,5.9,0s1.6-4.3,0-5.9L14.2,54.1h81.6c2.3,0,4.2-1.9,4.2-4.2s-1.9-4.2-4.2-4.2H14.2z',
        });

        // Replace fullscreen icons
        $('.flickity-fullscreen-button-view svg path').attr(
          'd',
          'M32,11.9h-2.7V6.5H24V3.8h8V11.9z M24,28.2v-2.7h5.3v-5.4H32v8.2H24z M0,20.1h2.7v5.4H8v2.7H0V20.1z M8,3.8v2.7H2.7v5.4H0V3.8H8z',
        );
        $('.flickity-fullscreen-button-exit svg path').attr(
          'd',
          'M18.1,16l13.4,13.4c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0L16,18.1L2.6,31.6c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1l0,0L13.9,16L0.4,2.6C-0.1,2-0.1,1,0.4,0.4s1.5-0.6,2.1,0L16,13.9L29.4,0.4c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1L18.1,16z',
        );

        // Improve prev/next buttons position
        const height = $(this).find('.gallery-item.is-selected img').height();
        $(this).find('.flickity-prev-next-button').css('top', `${height / 2}px`);
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

        // Instantiate Flickity nav
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
