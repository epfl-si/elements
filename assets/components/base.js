/* globals jQuery, Tablesaw */

import upload from './atoms/upload/upload';
import datebpicker from './molecules/datepicker/datepicker';
import datepickerEvent from './molecules/datepicker-event/datepicker-event';
import socialShare from './organisms/social-share/social-share';
import footer from './organisms/footer/footer';
import svgIcons from '../icons/svg-icons';

svgIcons(); // Must run as soon as possible

const init = () => {
  upload();
  footer();
  datebpicker();
  datepickerEvent();
  socialShare();
  Tablesaw.init();
};

// Will init the scripts outside of Toolbox
if (undefined === window.sources) {
  (($) => { $(document).ready(() => init()); })(jQuery);
}

// Will init the scripts inside of Toolbox
document.addEventListener('ToolboxReady', () => init());
