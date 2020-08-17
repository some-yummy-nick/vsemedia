import {Search} from './search'
import {Modal} from './modal'
import {form} from './form'

const locationSearch = new Search('.js-search-location')
locationSearch.init()

const justSearch = new Search('.js-search-just')
justSearch.init()

const loginModal = new Modal('.js-modal-login')

loginModal.init()

form.init()
