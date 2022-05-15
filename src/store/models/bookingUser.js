export default {
   state: {
      users: []
   },
   
   mutations: {
      ADD_PASS (state, newForm) {
         state.users.push(newForm)
      },

      REMOVE_PASS (state, index) {
         state.users.splice(index, 1)
      }
   },

   actions: {
      ADD_PASSENGERS ({commit}, form) {
         const newForm = JSON.parse(JSON.stringify(form))
         commit('ADD_PASS', newForm)
      }, 

      REMOVE_PASSENGERS ({commit}, index) {
         
         commit('REMOVE_PASS', index)
      }
   },

   getters: {
      USERS (state) {
         return state.users
      }
   },
}