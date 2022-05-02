"use strict";

class SliderCarousel {
  constructor({ main, wrap, next, prev, position = 0 }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.options = {
      position,
    };
  }

  init() {
    this.addGloClass();
    this.addStyle();
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
        .glo-slider {
        // overflow: hidden;
    }
    .glo-slider_wrap {
        display: flex;
        transition: transform 0.5s;
        will-change: transform;
    }
    .glo-sider_item {
        flex: 0 0 25%;
        margin: auto 0;
     }`;
    document.head.appendChild(style);
  }
}
