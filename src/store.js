import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = "http://localhost:8081/expresspackage";
export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    init: function (state, data) {
      state.data = data;
    }
  },
  actions: {
    submit(context, content) {
      const url = ''
      axios.post(url, content).then(function (reponse) {
        context.dispatch('fetchTodos')
      }).catch(function (error) {
        alert(error)
      })
    },
    getPackage(context) {
      axios.get(url).then(function (response) {
        context.commit("init", response.data);
      })
    },
    addPackage(context, data) {
      axios.post(url, data).then(
        function (response) {
          context("addPackage");
        }
      )
    },
    signPackage(context, data) {
      axios.patch(url, data).then(function () {
        context.dispatch("signPackage");
      });
    }
  }
})
