export class Search {
  constructor(name) {
    this.search = document.querySelector(name)
    this.input = this.search.querySelector('.js-search-input')
    this.label = this.search.querySelector('.js-search-label')
    this.close = this.search.querySelector('.js-search-close')
    this.menu = this.search.querySelector('.js-search-menu')
    this.locationInput = null
    this.searchInput = null
  }

  init() {
    this.label.addEventListener('click', () => {
      document
        .querySelectorAll('.search')
        .forEach(item => item.classList.remove('active'))
      this.search.classList.add('active')
    })

    this.close.addEventListener('click', () => {
      this.search.classList.remove('active')
      this.menu.classList.remove('active')
      this.input.value = ''
    })
  }

  getLocations() {
    this.locationInput = this.search.querySelector('#js-location-search')
    this.locationInput.addEventListener('input', () => {
      if (this.locationInput.value.length >= 3) {
        this.menu.classList.add('active')
      }
    })
  }

  initSave() {
    this.searchInput = this.search.querySelector('#js-search-input')
    this.searchInput.addEventListener('keydown', e => {
      if (
        e.code === 'ArrowRight' ||
        e.code === 'Enter' ||
        e.code === 'NumpadEnter'
      ) {
        const value = this.searchInput.value

        if (localStorage.getItem('search')) {
          const arr = JSON.parse(localStorage.getItem('search'))
          if (arr.length < 3) {
            arr.push(value)
          } else {
            arr.shift()
            arr.push(value)
          }
          localStorage.setItem('search', JSON.stringify(arr))
          this.drawPlaces(arr)
        } else {
          const arr = []
          arr.push(value)
          localStorage.setItem('search', JSON.stringify(arr))
        }
      }
    })
  }

  getPlaces() {
    this.searchInput.addEventListener('input', () => {
      if (this.searchInput.value.length >= 3) {
        if (localStorage.getItem('search')) {
          const arr = JSON.parse(localStorage.getItem('search'))
          this.drawPlaces(arr)
        }

        this.menu.classList.add('active')
      }
    })
  }

  drawPlaces(places) {
    this.menu.innerHTML = ''
    places.map(item => {
      this.menu.insertAdjacentHTML(
        'afterbegin',
        `<button type="button" class="search__result">${item}</button>`
      )
    })
  }
}
