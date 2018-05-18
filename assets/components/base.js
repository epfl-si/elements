/* globals jQuery, Tablesaw */

import upload from './atoms/upload/upload';
import datebpicker from './molecules/datepicker/datepicker';
import datepickerEvent from './molecules/datepicker-event/datepicker-event';
import socialShare from './organisms/social/social-share';
import svgIcons from '../icons/svg-icons';
import nav from './molecules/nav/nav.js';

svgIcons(); // Must run as soon as possible

const init = () => {
  upload();
  datebpicker();
  datepickerEvent();
  socialShare();
  Tablesaw.init();
  nav();

  $('.tlbx-sidebar div:nth-child(5) .tlbx-sidebar-item strong').text('Content');
  $('.tlbx-sidebar div:nth-child(6) .tlbx-sidebar-item strong').text('Utilities');
  $('.tlbx-sidebar div:nth-child(7) .tlbx-sidebar-item strong').text('Components');
};

// Will init the scripts outside of Toolbox
if (undefined === window.sources) {
  (($) => { $(document).ready(() => init()); })(jQuery);
}

// Will init the scripts inside of Toolbox
document.addEventListener('ToolboxReady', () => init());
