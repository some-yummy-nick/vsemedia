import {Search} from './search'
import {Modal} from './modal'
import {form} from './form'
import {slider} from './slider'

const locationSearch = new Search('.js-search-location')
locationSearch.init()
locationSearch.getLocations()

const justSearch = new Search('.js-search-just')
justSearch.init()
justSearch.initSave()
justSearch.getPlaces()

const loginModal = new Modal('.js-modal-login')

loginModal.init()

form.init()

const profileButton = document.getElementById('js-profile-button')
const profileMenu = document.getElementById('js-profile-menu')
const logout = document.getElementById('js-logout')

profileButton.addEventListener('click', () => {
  profileMenu.classList.toggle('active')
})

logout.addEventListener('click', () => {
  sessionStorage.removeItem('login')
  window.location.reload()
})

slider.init()
