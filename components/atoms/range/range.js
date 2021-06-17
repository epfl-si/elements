export default () => {
  // Create colored progress bar for damn webkit browsers >.<

  const rangeSlider = document.querySelector('input[type=range]');

  if (rangeSlider) {
    rangeSlider.style.setProperty('--val', +rangeSlider.value);
    rangeSlider.style.setProperty('--max', +rangeSlider.max);
    rangeSlider.style.setProperty('--min', +rangeSlider.min);

    rangeSlider.addEventListener('input', () => {
      rangeSlider.style.setProperty('--val', +rangeSlider.value);
    }, false);
  }
};
