class Form {
  constructor() {
    this.form = document.getElementById('js-login-form')
    this.header = document.getElementById('js-header')
    this.inputs = this.form.querySelectorAll('.js-input')
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      let hasErrors = false
      this.inputs.forEach((item, index) => {
        if (item.value === '') {
          hasErrors = true
          item.parentNode.classList.add('has-error')
          item.nextElementSibling.textContent = 'Необходимо заполнить поле'
        }
      })

      if (!hasErrors) {
        sessionStorage.setItem('login', 'true')
        window.location.reload()
      }
    })

    this.inputs.forEach((item, index) => {
      item.addEventListener('input', () => {
        item.parentNode.classList.remove('has-error')
        item.nextElementSibling.textContent = ''
      })
    })

    if (sessionStorage.getItem('login')) {
      this.header.classList.add('logged')
    }
  }
}

export const form = new Form()
