import {Search} from './search'
import {Modal} from './modal'

const locationSearch = new Search('.js-search-location')
locationSearch.init()

const justSearch = new Search('.js-search-just')
justSearch.init()

const loginModal = new Modal('.js-modal-login')

loginModal.init()
