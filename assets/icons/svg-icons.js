const svgIcons = () => {
  loadIcons(window.svgPath || 'icons/icons.svg');
  loadIcons(window.featherSvgPath || 'icons/feather-sprite.svg');
};

export default svgIcons;

function loadIcons (svgPath) {
  const ajax = new XMLHttpRequest();
  ajax.open('GET', svgPath, true);
  ajax.send();
  ajax.onload = function (e) {
    if (e.target.status === 200) {
      const div = document.createElement('div');
      div.setAttribute('style', 'display: none');
      div.innerHTML = ajax.responseText;
      document.body.insertAdjacentElement('beforeend', div);
    }
  };
}
