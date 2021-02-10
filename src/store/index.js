import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 100,
    tareas: [],
    tareasFir: [],
    tarea: {
        id: '',
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      },
    tareaFir: {
      id: '',
      nombre: '',
      categorias: [],
      radio: '',
      numero: 0
    }
  },
  mutations: {
    //mutation CRUD
    cargar(state, payload){
      state.tareas = payload
    },

    //otra seccion
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
    },

    // mutation CRUD
    addTarea(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      console.log(state.tareas);
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id!==payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    editarTarea(state, payload){
      if (!state.tareas.find(item => item.id===payload)) {
        router.push('/crud')
        return
      }
      state.tarea = state.tareas.find(item => item.id===payload)
    },
    Update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/crud')
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },

    // mutation Firebase Crud
    addTareaFir(state, payload){
      state.tareasFir.push(payload)
      console.log(state.tareasFir);
    },
    eliminarFir(state, payload){
      state.tareasFir = state.tareasFir.filter(item => item.id!==payload)
    },
    editarTareaFir(state, payload){
      if (!state.tareasFir.find(item => item.id===payload)) {
        router.push('/firebasecrud')
        return
      }
      state.tareaFir = state.tareasFir.find(item => item.id===payload)
    },
    UpdateFir(state, payload){
      state.tareasFir = state.tareasFir.map(item => item.id === payload.id ? payload : item)
      router.push('/firebasecrud')
    }
  },
  actions: {
    //acction CRUD
    cargarLocalstorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },

    //Otra seccion
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

    // action CRUD
    setTareas({commit}, tarea){
      commit('addTarea', tarea)
    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, id){
      commit('editarTarea', id)
    },
    setUpdate({commit}, tarea){
      commit('Update', tarea)
    },

    //action Firebase CRUD
    setTareasFire({commit}, tareaFir){
      try {
        commit('addTareaFir', tareaFir)
      } catch (error) {
        console.log(error);
      }
    },
    deleteTareasFire({commit}, id){
      try {
        commit('eliminarFir', id)
      } catch (error) {
        console.log(error);
      }
    },
    setTareaFire({commit}, id){
      try {
        commit('editarTareaFir', id)
      } catch (error) {
        console.log(error);
      }
    },
    setUpdateFire({commit}, tareaFir){
      try {
        commit('UpdateFir', tareaFir)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
