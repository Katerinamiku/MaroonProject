"use strict";

class SliderCarousel {
  constructor({ main, wrap, next, prev, position = 0, slidesToShow = 3 }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
    };
  }

  init() {
    // добавляем классы
    this.addGloClass();
    // добавляем стили
    this.addStyle();
    // кнопки (по умолчанию или создаем)
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    console.log();
  }

  addGloClass() {
    this.main.classList.add("glo-slider");
    this.wrap.classList.add("glo-slider_wrap");
    for (let item of this.slides) {
      item.classList.add("glo-slider_item");
    }
  }
  addStyle() {
    const style = document.createElement("style");
    style.id = "sliderCarousel_style";
    style.textContent = `
        // .glo-slider {
        // overflow: hidden;
    }
    .glo-slider_wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
    }
    .glo-sider_item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        // margin: auto 0 !important;
     }`;
    document.head.appendChild(style);
  }
  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }
  prevSlider() {
    if (this.options.position > 0) {
      --this.options.position;
      console.log(this.options.position);
      this.wrap.style.transform = `translateX-(${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }
  nextSlider() {
    if (this.options.position < this.slides.length - this.slideToShow) {
      ++this.options.position;
      console.log(this.options.position);
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  addArrow() {}
}
