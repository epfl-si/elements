/* globals $, ClipboardJS */

export default () => {
  $('.social-share-copy').each(function () {
    const copyBtn = $(this);
    const baseText = copyBtn.text();
    const successText = copyBtn.data('success');
    const clipboard = new ClipboardJS(copyBtn[0], {
      target: (trigger) => {
        return $(trigger).prev("input")[0];
      },
    });

    clipboard.on('success', (e) => {
      $(e.trigger).text(successText);
      setTimeout(() => $(e.trigger).text(baseText), 3000);

      e.clearSelection();
    });
  });
};
