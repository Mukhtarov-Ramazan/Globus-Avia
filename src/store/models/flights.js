import axios from "axios"

export default{
   state: {
      flights: JSON.parse(localStorage.getItem('flights-search'))
   },
   mutations: {
      SET_FLIGHTS_TO_STATE(state, result) {
         localStorage.setItem('flights-search', JSON.stringify(result))
      }
   },
   actions: {
      async GET_FLIGHTS({commit}, searchForm) {
         const response = await fetch(
            `http://localhost/api/flight?from=${searchForm.from}&to=${searchForm.to}&date1=${searchForm.date1}&date2=${searchForm.date2}&passengers=${searchForm.passengers}`
         )
         const result = await response.json()
         
         localStorage.getItem('flights-search')

         commit('SET_FLIGHTS_TO_STATE', result)
      }
   },
   getters: {
      FLIGHTS (state) {
         return state.flights
      }
   }
}