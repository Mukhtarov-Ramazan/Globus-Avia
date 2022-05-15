import { createStore } from 'vuex'
import flights from './models/flights'
import bookingUser from './models/bookingUser'

export default createStore({
  modules: {
    flights,
    bookingUser
  }
})
