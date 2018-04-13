/* globals $ */

export default () => {
  // initialise booleans to enable or disable js mobile features, based on css breakpoints
  let isMobile = false;
  let showLastMonthWeek = false;
  let initialWeek = false;
  const now = new Date();
  const timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()) / 1;

  /*
  * define if all dates in a row are disabled
  */
  function isRowDisabled(weekNum, container) {
    const disabledCount = $('tbody tr:nth-child(' + weekNum + ') .picker__day--outfocus', container).length;
    if (disabledCount === 7) {
      return true;
    }
    return false;
  }

  /*
  * Custom managemet of prev / next on mobile
  */
  function handlePrevNext(container) {
    let weekNum = 1;
    if (initialWeek) {
      weekNum = initialWeek;
      initialWeek = false;
    }

    // only setup listeners when on mobile
    if (!isMobile) return container;

    if (showLastMonthWeek) {
      // handle display last week of the month after clicking prev
      showLastMonthWeek = false;
      weekNum = 6;
      if (isRowDisabled(6, container)) {
        weekNum = 5;
      }
    }

    // initialise data attibute
    $('tbody', container).attr('data-week', weekNum);

    $('.picker__nav--next', container).on('click', function (e) {
      if (weekNum < 6 && !isRowDisabled(weekNum + 1, container)) {
        // if we are not displaying the last row:
        // disable built-in behaviour and update data attribute
        e.stopPropagation();
        weekNum += 1;
        $('tbody', container).css('transition', 'left 0.4s');
        $('tbody', container).attr('data-week', weekNum);
      } else {
        // let plugin proceed to next month

        // reset week index
        weekNum = 1;
      }
    });

    $('.picker__nav--prev', container).on('click', function (e) {
      if (weekNum > 1) {
        // if we are not displaying the first row:
        // disable built-in behaviour and update visual to show previous week
        e.stopPropagation();
        weekNum -= 1;
        $('tbody', container).css('transition', 'left 0.4s');
        $('tbody', container).attr('data-week', weekNum);
      } else {
        // let plugin proceed to previous month

        // set flag to display last week of month at next render
        showLastMonthWeek = true;
      }
    });

    // enable transitions only when prev/next arrow are clicked
    $('.picker__day').each(function () {
      $(this).on('click', function () {
        $(this).parent().parent().parent()
        .css('transition', 'left 0s');
      });
    });
  }

  /*
  * Focus today
  */
  function selectToday(picker) {
    // select today's week on initialisation
    picker.set('select', [now.getFullYear(), now.getMonth(), now.getDate()]);
  }

  /*
  * Display correct month labels on the side of the desktop version
  */
  function handleMonthLabels(picker, months) {
    const alreadyHandled = $('.nextMonthLabel', picker.$holder).length > 0;
    if (alreadyHandled) {
      return true;
    }

    const wrapper = picker.component.$node.parent();
    const next = $('.nextMonthLabel', wrapper);
    const prev = $('.prevMonthLabel', wrapper);

    let nextMonthIndex = picker.component.item.view.month + 1;
    if (nextMonthIndex === months.length) nextMonthIndex = 0;

    let prevMonthIndex = picker.component.item.view.month - 1;
    if (prevMonthIndex < 0) prevMonthIndex = 11;

    next.html(months[nextMonthIndex]);
    prev.html(months[prevMonthIndex]);

    next.clone().appendTo('.picker__box', picker.$root);
    prev.clone().appendTo('.picker__box', picker.$root);
  }

  function displayHeroMonths(container) {
    $('.picker__wrap', container).append($('h2').html('fèv'));
  }

  /*
  * handle custom highlights
  */
  function setHighlights(container) {
    // we check all displayed dates, and highlight the ones we want to
    $('.picker__day--infocus', container).each(function () {
      const currentTimestamp = $(this).data('pick');
      const date = new Date(currentTimestamp);
      const dateString = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);

      // this is arbitrary. change this with personal logic when needed and add you own class
      if (dateString === '2018-03-28') {
        $(this).addClass('custom-highlight');
      }
    });
  }

  /*
  * INIT datepicket-event
  */
  $('.datepicker-event').each(function () {
    const monthsShort = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const container = $(this).parent();
    $(this).pickadate({
      monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthsShort,
      weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      labelMonthNext: 'Prochain mois',
      labelMonthPrev: 'Mois précédent',
      labelMonthSelect: 'Sélectionnez un mois',
      labelYearSelect: 'Sélectionnez une année',
      format: 'd mmmm yyyy',
      firstDay: 1,
      today: '',
      clear: '',
      close: '',
      onRender: function () {
        // stop default highlight
        $('div.picker__day--highlighted').each(function () {
          if ($(this).data('pick') !== timestamp) {
            $(this).removeClass('picker__day--highlighted');
          }
        });

        handleMonthLabels(this, monthsShort);

        if (isMobile) {
          // refresh listeners after render
          handlePrevNext(container);
        }
      },
      onStart: function () {
        selectToday(this);
        setHighlights(this);

        // focus on today's week on start
        const selected = $('tr:has(.picker__day--selected)', container);
        if (selected.length > 0) {
          initialWeek = $('tr', container).index(selected);
        }

        // enable mobile behaviour when needed
        isMobile = $('.datepicker-event+.picker table').css('display') === 'block';

        if (!isMobile) {
          displayHeroMonths(container);
        }
      },
    });
  });
};
