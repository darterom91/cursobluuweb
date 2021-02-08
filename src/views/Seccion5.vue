<template>
  <div class="border border-dark rounded bg-dark p-2 mx-2">
    <div class="text-light p-2 m-2">
      <h2>{{seccion}}</h2>
      <h2>{{tituloSeccion}}</h2>
    </div>
    <div class="bg-light text-dark">
      <Capitulo1/>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '../components/seccion5/Capitulo1'
export default {
  data() {
    return {
      seccion: 'Seccion 5',
      tituloSeccion: 'Formulario V-Model'
    }
  },
  components: {
    Capitulo1
  }
}
</script>

<style>

</style>