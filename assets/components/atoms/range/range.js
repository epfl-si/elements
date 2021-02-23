/* global $ */

export default () => {
  // Create colored progress bar for damn webkit browsers >.<
  const rangeSlider = $('input[type="range"]');

  if (rangeSlider.length > 0) {
    rangeSlider.css('--val', +rangeSlider.value);
    rangeSlider.css('--max', +rangeSlider.max);
    rangeSlider.css('--min', +rangeSlider.min);

    rangeSlider.on('input', () => {
      $(this).css('--val', +rangeSlider.value);
    }, false);
  }
};
