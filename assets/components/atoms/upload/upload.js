/* globals $ */

export default () => {
  $('.upload').find('input[type="file"]').each((index, element) => {
    const $input = $(element);
    const $preview = $input.next().next('.upload-preview');

    $input.on('change', () => {
      const { files } = $input[0];
      let previewContent = files[0].name;

      if (files.length > 1) {
        previewContent = `<ul>${Array.from(files).map((file) => `<li>${file.name}</li>`).join().replace(/,/g, '')}</ul>`;
      }

      $preview.html(previewContent);
    });
  });
};
