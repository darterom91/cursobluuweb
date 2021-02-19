<template>
  <div>
    <div>
      <h2>{{Seccion}}</h2>
      <h3>{{tituloSec}}</h3>
    </div>
    <form @submit.prevent="procesar">
      <Input :tareaFir="tareaFir"/>
    </form>
    <p>{{tareaFir}}</p>
    <ListarTareas/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Input from '../components/firebaseCrud/input'
import ListarTareas from '../components/firebaseCrud/ListarTareas'
const shortid = require('shortid')

export default {
  data() {
    return {
      Seccion: 'Seccion 7',
      tituloSec: 'CRUD con Firebase',
      tareaFir: {
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
     ...mapActions(['setTareasFire', 'cargarFire']),
    procesar() {
      if (this.tareaFir.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }
      //generar id
      this.tareaFir.id = shortid.generate()
      console.log(this.tareaFir.id);
      console.log(this.tareaFir)
      
      //enviar datos
      this.setTareasFire(this.tareaFir)
      //limpiar datos
      this.tareaFir = {
        id: '',
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      }
    }
  },
  created() {
    this.cargarFire()
  },
}
</script>

<style>

</style>