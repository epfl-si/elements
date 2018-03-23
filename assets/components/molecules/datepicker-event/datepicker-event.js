/* globals $ */

export default () => {
  function handlePrevNext() {
    if ($('.datepicker-event').length > 0) {
      $('.datepicker-event').parent().each(function() {
        let weekNum = 1;
        const container = this;

        // only setup listeners when on mobile
        const isMobile = $('table', container).css('display') === 'block';
        if (!isMobile) return container;

        // initialise data attibute

        const selected = $('tr:has(.picker__day--selected)', container);
        if (selected.length > 0) {
          weekNum = $('tr', container).index(selected);
        }

        $('tbody', container).attr('data-week', weekNum);

        $('.picker__nav--next', container).on('click', function(e) {
          if (weekNum < 6) {
            // if we are not displaying the last row:
            // disable built-in behaviour and update data attribute
            e.stopPropagation();
            weekNum += 1;
            $('tbody', container).attr('data-week', weekNum);
          } else {
            // let plugin proceed to next month, reset listeners
            handlePrevNext();
          }
        });

        $('.picker__nav--prev', container).on('click', function(e) {
          if (weekNum > 1) {
            // if we are not displaying the first row:
            // disable built-in behaviour and update visual to show previous week
            e.stopPropagation();
            weekNum -= 1;
            $('tbody', container).attr('data-week', weekNum);
          } else {
            // let plugin proceed to last month, reset listeners
            handlePrevNext();
          }
        });
      });
    }
  }

  $('.datepicker-event').pickadate({
    monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
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
    onRender: function() {
      handlePrevNext();
    },
  });
};
