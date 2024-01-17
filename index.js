
  if (video.currentTime >= startTime && video.currentTime <= endTime) {
    overlayText.style.opacity = 1; // テキストを表示
  } else {
    overlayText.style.opacity = 0; // テキストを非表示
  }


// クリックしたときに別のページに遷移
function redirectToPage(pageURL) {
  window.location.href = pageURL;
}

// 画像が大きくなるアニメーションの関数
function zoomIn(image) {
  image.style.transform = 'scale(1.2)';
}

// 画像が元のサイズに戻るアニメーションの関数
function zoomOut(image) {
  image.style.transform = 'scale(1)';
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.Toggle');
  const body = document.querySelector('body');

  menu.classList.toggle('open');
  toggle.classList.toggle('active');
  body.classList.toggle('menu-open');

}

