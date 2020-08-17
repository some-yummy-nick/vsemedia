export class Modal {
  constructor(name) {
    this.body = document.getElementById('js-body')
    this.openButton = document.querySelector(`[data-modal='${name}']`)
    this.modal = document.querySelector(name)
    this.overlay = document.getElementById('js-overlay')
    this.close = this.modal.querySelector('.js-close-modal')
  }

  init() {
    this.openButton.addEventListener('click', () => {
      this.modal.classList.add('active')
      this.overlay.classList.add('active')
      this.body.classList.add('modal-open')
    })

    this.overlay.addEventListener('click', this.closePopup.bind(this))
    this.close.addEventListener('click', this.closePopup.bind(this))
  }

  closePopup() {
    this.modal.classList.remove('active')
    this.overlay.classList.remove('active')
    this.body.classList.remove('modal-open')
  }
}
