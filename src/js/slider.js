class Slider {
  constructor() {
    this.slider = document.getElementById('js-slider')
    this.next = document.getElementById('js-section-next')
    this.prev = document.getElementById('js-section-prev')
    this.width = this.slider.querySelector('.section__item').clientWidth
    this.sectionsLength = this.slider.querySelectorAll('.section__item').length
    this.scroll = 0
    this.currentItem = 3
  }

  init() {
    this.next.addEventListener('click', () => {
      this.scroll += this.width
      this.currentItem++
      this.slider.style.transform = `translateX(-${this.scroll}px)`
      if (this.currentItem === this.sectionsLength) {
        this.next.classList.add('section__arrow_inactive')
      }

      if (this.currentItem > 3) {
        this.prev.classList.remove('section__arrow_inactive')
      }
    })

    this.prev.addEventListener('click', () => {
      this.scroll -= this.width
      this.currentItem--
      this.slider.style.transform = `translateX(-${this.scroll}px)`
      if (this.currentItem === 3) {
        this.prev.classList.add('section__arrow_inactive')
        this.next.classList.remove('section__arrow_inactive')
      }
    })
  }
}

export const slider = new Slider()
