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
    },
    incrementar2(state, payload){
      state.contador= state.contador + payload
    },
    disminuir2(state, payload){
      state.contador= state.contador - payload
      if (state.contador <= 0) {
        state.contador = 0
      }
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}){
      commit('disminuir')
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar2', objeto.numero)
      }else{
        commit('disminuir2', objeto.numero)
      }
    },
  },
  modules: {
  }
})
