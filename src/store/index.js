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

    cargarFir(state, payload){
      state.tareasFir = payload
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

    async cargarFire({commit}){
      try {
        const res = await fetch('https://cursovue-6c2ec-default-rtdb.firebaseio.com/tareas-api.json')
        const dataDB = await res.json()
        const arrayTareas=[]
        for(let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        console.log(arrayTareas);
        commit('cargarFir', arrayTareas)
      } catch (error) {
        console.log(error);
      }
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
    async setTareasFire({commit}, tareaFir){
      try {
        const res = await fetch(`https://cursovue-6c2ec-default-rtdb.firebaseio.com/tareas-api/${tareaFir.id}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tareaFir)
        })
        const db = await res.json()
        console.log('culo');
        console.log(db)
        commit('addTareaFir', tareaFir)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTareasFire({commit}, id){
      try {
        await fetch(`https://cursovue-6c2ec-default-rtdb.firebaseio.com/tareas-api/${id}.json`, {
          method: 'DELETE',
        })
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
    async setUpdateFire({commit}, tareaFir){
      try {
        const res= await fetch(`https://cursovue-6c2ec-default-rtdb.firebaseio.com/tareas-api/${tareaFir.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tareaFir)
        })
        const dataDB = await res.json()
        console.log(dataDB );
        commit('UpdateFir', dataDB)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
