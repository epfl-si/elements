const svgIcons = () => {
  const ajax = new XMLHttpRequest();
  const svgPath = window.svgPath || 'icons/icons.svg';
  ajax.open('GET', svgPath, true);
  ajax.send();
  ajax.onload = function (e) {
    if (e.target.status === 200) {
      const div = document.createElement('div');
      div.innerHTML = ajax.responseText;
      document.body.insertBefore(div, document.body.childNodes[0]);
    }
  };

  const ajaxFeather = new XMLHttpRequest();
  const featherSvgPath = window.featherSvgPath || 'icons/feather-sprite.svg';
  ajaxFeather.open('GET', featherSvgPath, true);
  ajaxFeather.send();
  ajaxFeather.onload = function (e) {
    if (e.target.status === 200) {
      const div = document.createElement('div');
      div.innerHTML = ajaxFeather.responseText;
      div.style = 'display: none;';
      document.body.insertBefore(div, document.body.childNodes[0]);
    }
  };
};

export default svgIcons;
