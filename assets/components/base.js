/* globals jQuery, Tablesaw */

import upload from './atoms/upload/upload';
import datebpicker from './molecules/datepicker/datepicker';
import svgIcons from '../icons/svg-icons';

svgIcons(); // Must run as soon as possible

const init = () => {
  upload();
  datebpicker();
  Tablesaw.init();
};

(function ($) {
  $(document).ready(() => init());
})(jQuery);
document.addEventListener('ToolboxReady', () => init());
