import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state){
      state.contador= state.contador + 1
    },
    disminuir(state){
      state.contador= state.contador - 1
      if (state.contador <= 0) {
        state.contador = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
