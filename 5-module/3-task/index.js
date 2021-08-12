function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const containerSlides = document.querySelector('.carousel__inner');
  const slides = document.querySelectorAll('.carousel__slide');
  const btnLeft = document.querySelector('.carousel__arrow_left');
  const btnRight = document.querySelector('.carousel__arrow_right');
  btnLeft.style.display = 'none';

  const slideWidth = containerSlides.offsetWidth;
  let currentSlideCount = 1;
  let currentOffset = 0;

  carousel.addEventListener('click', (e) => {
    if (e.target.closest('.carousel__arrow_right')) {
      currentSlideCount += 1;
      currentOffset += slideWidth;
      containerSlides.style.transform = `translateX(-${currentOffset}px)`;
    } else if (e.target.closest('.carousel__arrow_left')) {
      currentOffset = currentOffset - slideWidth;
      containerSlides.style.transform = `translateX(-${currentOffset}px)`;
      currentSlideCount -= 1;
    }
    if (currentSlideCount > 1) {
      btnLeft.style.display = 'flex';
    } else {
      btnLeft.style.display = 'none';
    } if (currentSlideCount === slides.length) {
      btnRight.style.display = 'none';
    } else {
      btnRight.style.display = 'flex';
    }
  });
}
