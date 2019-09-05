import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    submit(context, content) {
      const url = ''
      axios.post(url, content).then(function (reponse) {
        context.dispatch('fetchTodos')
      }).catch(function (error) {
        alert(error)
      })
    }
  }
})
