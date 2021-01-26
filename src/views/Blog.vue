<template>
  <div>
    <div class="border border-dark rounded bg-dark p-2 mx-2">
      <div class="text-light p-2 m-2">
        <h2>{{seccion}}:</h2>
        <h2>{{tituloSeccion}}</h2>
      </div>
      <div class="bg-light text-dark">
        <Capitulo1 texto="Estoy en el blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '../components/seccion3/Capitulo1'

export default {
  components : {
    Capitulo1,
  },
  data() {
    return {
      seccion: 'Seccion3',
      tituloSeccion: 'Jugando con Vue-router'
    }
  },
}
</script>

<style>

</style>