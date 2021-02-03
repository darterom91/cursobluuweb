<template>
  <div class="m-2">
    <div class="border border-dark rounded bg-dark p-2 mx-2">
      <div class="text-light p-2 m-2">
        <h2>{{seccion}}</h2>
        <h3>{{tituloSeccion}}</h3>
      </div>
      <div class="bg-light text-dark">
        <Capitulo1/>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '@/components/seccion4/Capitulo1.vue'

export default {
  data() {
    return {
      seccion: 'Seccion 4',
      tituloSeccion: 'Iniciando en VUEX'
    }
  },
  components: {
    Capitulo1,
  }
}
</script>

<style>

</style>