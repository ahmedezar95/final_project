var sliderImgs = document.querySelectorAll(".slider-container img");
var bullets = document.querySelectorAll(".bullet");
var index = 0;

function changeSlide() {
  if (index < 0) {
    index = sliderImgs.length - 1;
  } else if (index > sliderImgs.length - 1) {
    index = 0;
  }

  for (let i = 0; i < sliderImgs.length; i++) {
    sliderImgs[i].style.opacity = '0';
    bullets[i].classList.remove('active')
  }

  sliderImgs[index].style.opacity = '1';
  bullets[index].classList.add('active')
  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();