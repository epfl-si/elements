/* globals jQuery */

import upload from './atoms/upload/upload'
import svgIcons from '../icons/svg-icons';

svgIcons(); // Must run as soon as possible

(function ($) {
  $(document).ready(() => {
    upload();
  });
})(jQuery);
