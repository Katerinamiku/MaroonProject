"use strict";
// Конструктор
class SliderCarousel {
  constructor({ main, wrap, next, prev, item, position = 0, firstOrder = 0 }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.itemCard = document.querySelectorAll(item);
    this.options = {
      position,
      firstOrder,
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
  }

  addGloClass() {
    this.main.classList.add("glo-slider");
    this.wrap.classList.add("glo-slider_wrap");
    for (let item of this.slides) {
      item.classList.add("glo-slider_item");
    }
    for (let i = 0; i < this.itemCard.length; i++) {
      this.itemCard[i].dataset.order = i;
    }
  }
  addStyle() {
    const style = document.createElement("style");
    style.id = "sliderCarousel_style";
    style.textContent = `
        .glo-slider {
         overflow: hidden;
       }
    .glo-slider_wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
            }
    .glo-slider_item {
        flex: 0 0 26.5% !important;
    }`;
    document.head.appendChild(style);
  }
  // Добавляем слушатель событий для кнопок
  controlSlider() {
    this.prev.addEventListener(
      "click",
      this.prevSlider.bind(this),
      this.clickHandler.bind(this)
    );
    this.next.addEventListener(
      "click",
      this.nextSlider.bind(this),
      this.clickHandler.bind(this)
    );
  }
  prevSlider() {
    ++this.options.position;
    this.wrap.style.transform = `translateX(${this.options.position * 260}px)`;
    this.options.firstOrder = Math.max(0, this.options.firstOrder - 1);
    console.log(this.options.firstOrder);
  }

  nextSlider() {
    --this.options.position;
    this.wrap.style.transform = `translateX(${this.options.position * 260}px)`;
    this.options.firstOrder = Math.min(
      this.slides.length - 1,
      this.options.firstOrder + 1
    );

    console.log(this.options.firstOrder);
  }

  clickHandler() {
    const order = parseInt(this.dataset.order, 10);
    this.options.firstOrder = order;
  }

  addArrow() {}
}
