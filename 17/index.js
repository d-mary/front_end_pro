const currentImg = document.querySelector(".slider img.active");
const sliderImages = document.querySelectorAll(".slider-image img");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
let currentImgIndex = 0;

function showNextImg() {
  sliderImages[currentImgIndex].classList.remove("active");
  currentImgIndex++;
  if (currentImgIndex >= sliderImages.length) {
    currentImgIndex = 0;
  }
  sliderImages[currentImgIndex].classList.add("active");
  togglePrevNextBtnVisibility();
}

function showPrevImg() {
  sliderImages[currentImgIndex].classList.remove("active");
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = sliderImages.length - 1;
  }
  sliderImages[currentImgIndex].classList.add("active");
  togglePrevNextBtnVisibility();
}

function togglePrevNextBtnVisibility() {
  if (currentImgIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentImgIndex === sliderImages.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

nextBtn.addEventListener("click", showNextImg);
prevBtn.addEventListener("click", showPrevImg);

togglePrevNextBtnVisibility();
