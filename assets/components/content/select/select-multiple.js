/* globals $ */

export default () => {
  $('.select-multiple').each((index, element) => {
    $(element).multipleSelect({
      placeholder: $(element).attr('data-placeholder') || '',
      width: '100%',
    });
  });
};

