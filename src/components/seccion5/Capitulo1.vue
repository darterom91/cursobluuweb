<template>
  <div>

    <div class="caja p-2">
      <div>
        <h2>{{capitulo}}</h2>
        <h3>{{tituloCap}}</h3>
      </div>
      <div>
        <NavBar/>
        <div class="container">
          <h2>Formulario</h2>
          <form @submit.prevent="procesar">
            <input type="text" class="form-control my-2" placeholder="Escribe tu nombre" v-model.trim="tarea.nombre">
            <h2>checkbox</h2>
            <div class="form-check form-check-inline">
              <input 
              type="checkbox"
              id="check-1"
              class="form-check-input"
              v-model="tarea.categorias"
              value="javascript"
              >
              <label for="check-1" class="form-check-label">javascript</label>
            </div>
            <div class="form-check form-check-inline">
              <input 
              type="checkbox"
              id="check-2"
              class="form-check-input"
              v-model="tarea.categorias"
              value="Node.js"
              >
              <label for="check-2" class="form-check-label">Node.js</label>
            </div>
              <h2>Radio button</h2>
              <div class="form-check form-check-inline">
                <input 
                type="radio"
                id="radio-1"
                class="form-check-input"
                v-model="tarea.radio"
                value="Urgente"
                >
                <label for="radio-1" class="form-check-label">Urgente</label>
              </div>
              <div class="form-check form-check-inline">
                <input 
                type="radio"
                id="check-2"
                class="form-check-input"
                v-model="tarea.radio"
                value="Relax"
                >
                <label for="radio-2" class="form-check-label">Relax</label>
              </div>
            <h2>Input Numeros</h2>
            <input type="number"
            class="form-control"
            v-model.number="tarea.numero">
            <div class="d-grid gap-2">
              <button class="btn btn-dark p-2" type="submit" :disabled="bloquear">submit</button>
            </div>
          </form>
          <p>{{tarea}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from './Navbar'
export default {
  data() {
    return {
      capitulo: 'Capitulo 1',
      tituloCap: 'Inicio de proyecto Forms',
      tarea: {
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      },
    }
  },
  components: {
    NavBar
  },
  methods: {
    procesar() {
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }
      console.log(this.tarea)
      //enviar datos

      //borrar datos
      this.tarea = {
        nombre: '',
        categorias: [],
        radio: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true : false
    }
  }
}
</script>

<style scoped>
.caja {
  border:3px solid black;
  transition: border 1.2s, color 1.2s,background-color 1.2s;
}
.caja:hover {
  color: black;
  background-color: lightgreen;
  border:5px solid black;
}
</style>