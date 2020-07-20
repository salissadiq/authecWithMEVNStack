import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistedState()],
  state: {
    loggedIn: false,
    user: ''
  },
  mutations: {
    setAuth(state, payload) {
      state.loggedIn = true
      state.user = payload
    },
    unsetAuth(state) {
      state.loggedIn = false
      state.user = ''
    }
    },
  actions: {

  },
  getters:{
    userData: state => {
      return state.user
    },
    loggedIn: state => {
      return state.loggedIn
    }
  },
  modules: {
  }
})
