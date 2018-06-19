/* globals jQuery, Tablesaw */

import upload from './content/upload/upload';
import datepicker from './utilities/datepicker/datepicker';
import datepickerEvent from './utilities/datepicker-event/datepicker-event';
import popover from './utilities/popover/popover';
import gallery from './utilities/gallery/gallery';
import cardSlider from './utilities/card-slider/card-slider';
import socialShare from './components/social/social-share';
import tagInput from './content/tag/tag-input';
import svgIcons from '../icons/svg-icons';
import nav from './utilities/nav/nav.js';
import drawer from './content/drawer/drawer.js';

svgIcons(); // Must run as soon as possible

const init = () => {
  upload();
  tagInput();
  datepicker();
  datepickerEvent();
  popover();
  gallery();
  socialShare();
  Tablesaw.init();
  nav();
  cardSlider();
  drawer();
};

// Will init the scripts outside of Toolbox
if (undefined === window.sources) {
  (($) => { $(document).ready(() => init()); })(jQuery);
}

// Will init the scripts inside of Toolbox
document.addEventListener('ToolboxReady', () => init());
