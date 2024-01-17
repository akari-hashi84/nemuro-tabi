 function addHoverEffect(element) {
　element.classList.add('hovered');
}

function removeHoverEffect(element) {
 element.classList.remove('hovered');
}

// 既存のJavaScriptコードに追加する
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.Toggle');
  const body = document.querySelector('body');

  menu.classList.toggle('open');
  toggle.classList.toggle('active');
  body.classList.toggle('menu-open'); // 追加したクラスに対して適用するスタイルを定義する
}
