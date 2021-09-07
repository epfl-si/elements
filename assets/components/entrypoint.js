/* globals jQuery, Tablesaw */

import objectFitImages from 'object-fit-images';
import upload from './atoms/upload/upload';
import breadcrumb from './molecules/breadcrumb/breadcrumb';
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
import search from './molecules/search/search.js';
import searchMobile from './molecules/search/search-mobile.js';
import coursebook from './content-types/coursebook/coursebook.js';
import studyplan from './content-types/study-plan/study-plan.js';
import cookieconsent from './organisms/cookie-consent/cookie-consent.js';
import backToTopBtn from './organisms/footer/back-to-top-button.js';
import anchors from './anchors';
import rangeSlider from './atoms/range/range.js';
import restauration from './organisms/restauration/restauration';

import guide from './guide.js';

jQuery.fn.extend({
  epflElements () {
    upload();
    selectMultiple();
    tagInput();
    datepicker();
    datepickerEvent();
    popover();
    gallery();
    search();
    searchMobile();
    share();
    coursebook();
    Tablesaw.init();
    cardSlider();
    svgIcons();
    nav();
    drawer();
    breadcrumb();
    cookieconsent();
    backToTopBtn();
    rangeSlider();
    restauration();
    studyplan();

    guide();
    anchors();

    // Init polyfill for Object Fit on IE11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
      objectFitImages();
      jQuery('body').addClass('ie');
    }

  }
});

// Run that once the page is done loading:
jQuery(jQuery.fn.epflElements);
