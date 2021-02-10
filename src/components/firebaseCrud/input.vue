<template>
  <div>
    <input type="text" class="form-control my-2" placeholder="Escribe tu nombre" v-model.trim="tareaFir.nombre">
      <h2>checkbox</h2>
      <div class="form-check form-check-inline">
        <input 
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tareaFir.categorias"
        value="javascript"
        >
        <label for="check-1" class="form-check-label">javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input 
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tareaFir.categorias"
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
          v-model="tareaFir.radio"
          value="Urgente"
          >
          <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
          <input 
          type="radio"
          id="check-2"
          class="form-check-input"
          v-model="tareaFir.radio"
          value="Relax"
          >
          <label for="radio-2" class="form-check-label">Relax</label>
        </div>
      <h2>Input Numeros</h2>
      <input type="number"
      class="form-control"
      v-model.number="tareaFir.numero">
      <div class="d-grid gap-2">
        <button class="btn btn-dark p-2" type="submit" :disabled="bloquear">submit</button>
      </div>
  </div>
</template>

<script>
export default {
props: {
    tareaFir: Object
  },
  computed: {
    bloquear(){
      return this.tareaFir.nombre.trim() === "" ? true : false
    }
  }
}
</script>

<style>

</style>