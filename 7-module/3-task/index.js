import createElement from './../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
  }

  render() {
    const template = `
    <!--Корневой элемент слайдера-->
  <div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress"  style="width: 0%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
    </div>
  </div>
    `;
    const slider = createElement(template);
    const sliderSteps = slider.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i += 1) {
      const stepElem = document.createElement('span');
      sliderSteps.append(stepElem);
      if (i === this.value) {
        stepElem.classList.add('slider__step-active');
      }
    }
    this.changingStep(slider);
    return slider;
  }

  changingStep(elem) {
    const elements = elem.querySelectorAll('.slider__steps span');
    elem.addEventListener('click', (e) => {
      const steps = elements.length - 1;
      const offsetContainer = elem.getBoundingClientRect().left;
      const clickX = e.clientX - offsetContainer;
      const leftRelative = clickX / elem.offsetWidth;
      const value = Math.round(leftRelative * steps);
      const sliderValue = document.querySelector('.slider__value');
      const sliderThumb = document.querySelector('.slider__thumb');
      const sliderProgress = document.querySelector('.slider__progress');
      sliderValue.textContent = value;
      sliderThumb.style.left = `${value / steps * 100}%`;
      sliderProgress.style.width = `${value / steps * 100}%`;
      const sliderChange = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true,
      });
      elem.dispatchEvent(sliderChange);
    });
  }
}
