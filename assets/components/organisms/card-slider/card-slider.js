/* globals $ */

import Flickity from 'flickity';
import Imagesloaded from 'imagesloaded';

export default () => {
  if ($('.card-slider').length > 0) {
    // Mobile width corresponds to SM breakpoint from Bootstrap.
    const isMobile = $(window).width() < 768;

    Imagesloaded('.card-slider', () => {
      const flkty = new Flickity('.card-slider', {
        cellAlign: 'left',
        setGallerySize: true,
        pageDots: isMobile,
        prevNextButtons: false,
        contain: true,
        groupCells: false,
      });

      $('.card-slider-cell').css('height', '100%');

      $('#card-slider-prev').on('click', () => {
        flkty.previous();
      });

      $('#card-slider-next').on('click', () => {
        flkty.next();
      });

      flkty.on('select', () => {
        $('.card-slider-btn').removeClass('disabled');

        if (flkty.selectedIndex === 0) {
          $('#card-slider-prev').addClass('disabled');
        }

        if (
          flkty.selectedIndex + 1 === flkty.slides.length ||
          flkty.selectedIndex + 2 === flkty.slides.length
        ) {
          $('#card-slider-next').addClass('disabled');
        }
      });
    });
  }
};
