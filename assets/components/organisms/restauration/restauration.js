/* globals $ */

export const nutrimenuScore = [
  'E', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+'];

export default () => {
  const slider = $('#nutrimenu-score');
  const output = $("output[for='nutrimenu-score']");

  if (slider.length > 0 && output.length > 0) {
    // eslint-disable-next-line radix
    output.val(nutrimenuScore[parseInt(slider.val()) - 1]);

    slider.on('input', function () {
      // eslint-disable-next-line radix
      output.val(nutrimenuScore[parseInt($(this).val()) - 1]);
    });
  }
};
