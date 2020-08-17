export class Search {
  constructor(name) {
    this.search = document.querySelector(name)
    this.label = this.search.querySelector('.js-search-label')
    this.close = this.search.querySelector('.js-search-close')
  }

  init() {
    this.label.addEventListener('click', () => {
      this.search.classList.add('active')
    })

    this.close.addEventListener('click', () => {
      this.search.classList.remove('active')
    })
  }
}
