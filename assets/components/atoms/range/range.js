/* global $ */

export default () => {
  
  // Create colored progress bar for damn webkit browsers >.<
  
  const rangeSlider = document.querySelector('[type="range"]');
  rangeSlider.style.setProperty('--val', + rangeSlider.value);
  rangeSlider.style.setProperty('--max', + rangeSlider.max);
  rangeSlider.style.setProperty('--min', + rangeSlider.min);

  document.documentElement.classList.add('js');

  rangeSlider.addEventListener('input', e => {
    rangeSlider.style.setProperty('--val', + rangeSlider.value);
  }, false);
  
};
