/* globals jQuery, Tablesaw */

import objectFitImages from 'object-fit-images';
import upload from './atoms/upload/upload';
import datepicker from './molecules/datepicker/datepicker';
import datepickerEvent from './molecules/datepicker/datepicker-fancy';
import popover from './atoms/popover/popover';
import gallery from './molecules/gallery/gallery';
import share from './molecules/share/share';
import selectMultiple from './atoms/select/select-multiple';
import tagInput from './atoms/tag/tag-input';
import cardSlider from './organisms/card-slider/card-slider';
import svgIcons from '../icons/svg-icons';
import nav from './organisms/nav-main/nav-main.js';
import drawer from './atoms/drawer/drawer.js';

import guide from './guide.js';

svgIcons(); // Must run as soon as possible

const init = () => {
  upload();
  selectMultiple();
  tagInput();
  datepicker();
  datepickerEvent();
  popover();
  gallery();
  share();
  Tablesaw.init();
  nav();
  cardSlider();
  drawer();

  guide();

  // Init polyfill for Object Fit on IE11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (isIE11) {
    objectFitImages();
    jQuery('body').addClass('ie');
  }
};

// Will init the scripts outside of Toolbox
if (undefined === window.sources) {
  (($) => {
    $(document).ready(() => init());
  })(jQuery);
}

// Will init the scripts inside of Toolbox
document.addEventListener('ToolboxReady', () => {
  console.log('backstopjs_ready');
  init();
});
