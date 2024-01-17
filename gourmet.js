function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.Toggle');
    const body = document.querySelector('body');
  
    menu.classList.toggle('open');
    toggle.classList.toggle('active');
    body.classList.toggle('menu-open'); // 追加したクラスに対して適用するスタイルを定義する
}

$(window).on('load', function(){
    $("#splash").delay(1500).fadeOut('slow'); // ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow'); // ロゴを1.2秒（1200ms）待機してからフェードアウト
});
