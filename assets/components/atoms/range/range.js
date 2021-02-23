/* global $ */

export default () => {
  // Create colored progress bar for damn webkit browsers >.<
  
  const rangeSlider = document.querySelector('input[type=range]');
  
  rangeSlider.style.setProperty('--val', + rangeSlider.value);
  rangeSlider.style.setProperty('--max', + rangeSlider.max);
  rangeSlider.style.setProperty('--min', + rangeSlider.min);
  
  rangeSlider.addEventListener('input', e => {
    rangeSlider.style.setProperty('--val', + rangeSlider.value);
  }, false);
};
