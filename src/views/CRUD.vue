<template>
  <div>
    <div>
      <h2>{{Seccion}}</h2>
      <h3>{{tituloSec}}</h3>
    </div>
    <form @submit.prevent="procesar">
      <Input :tarea="tarea"/>
    </form>
    <p>{{tarea}}</p>
    <ListarTareas/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Input from '../components/crud/input'
import ListarTareas from '../components/crud/ListarTareas'
const shortid = require('shortid')
export default {
  data() {
    return {
      Seccion: 'Seccion 6',
      tituloSec: 'CRUD LocalStorage',
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      },
    }
  },
  components: {
    Input,
    ListarTareas
  },
   methods: {
     ...mapActions(['setTareas']),
    procesar() {
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }
      console.log(this.tarea)
      //enviar datos
      this.setTareas(this.tarea)
      //generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id);
      //limpiar datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      }
    }
  }
}
</script>

<style>

</style>