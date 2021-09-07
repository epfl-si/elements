/* globals $ */

import Flickity from 'flickity';
import Imagesloaded from 'imagesloaded';

export default () => {
  if ($('.card-slider-wrapper').length > 0) {
    // Mobile width corresponds to SM breakpoint from Bootstrap.
    const isMobile = $(window).width() < 768;

    $( ".card-slider-wrapper" ).each( ( index, cardSliderWrapper ) => {
      let flkty;
      let cardSlider = $(cardSliderWrapper).find('.card-slider')[0];

      Imagesloaded(cardSlider, () => {
         flkty = new Flickity(cardSlider, {
          cellAlign: 'left',
          setGallerySize: true,
          pageDots: isMobile,
          prevNextButtons: false,
          contain: true,
          groupCells: false,
        });

        $(cardSliderWrapper).find('#card-slider-prev').on('click', () => {
          flkty.previous();
        });

        $(cardSliderWrapper).find('#card-slider-next').on('click', () => {
          flkty.next();
        });

        $(cardSliderWrapper).find('.card-slider-cell').css('height', '100%');

        flkty.on('select', () => {
          $(cardSliderWrapper).find('.card-slider-btn').removeClass('disabled');

          if (flkty.selectedIndex === 0) {
            $(cardSliderWrapper).find('#card-slider-prev').addClass('disabled');
          }

          if (
            flkty.selectedIndex + 1 === flkty.slides.length ||
            flkty.selectedIndex + 2 === flkty.slides.length
          ) {
            $(cardSliderWrapper).find('#card-slider-next').addClass('disabled');
          }
        });

      });
    });
  }
};
