<template>
  <div class="Seccion2 m-2">
    <div class="border border-dark rounded">
      <div class="bg-dark text-light p-2">
        <h2>{{seccion}}</h2>
        <h3>{{tituloSeccion}}</h3>
      </div>
      <div class="bg-light p-2">
        <Capitulo1 texto="Banco version dinamica 2.0"/>
        <Capitulo2/>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '@/components/seccion2/Capitulo1.vue'
import Capitulo2 from '@/components/seccion2/Capitulo2.vue'
export default {
  data() {
    return {
      seccion: 'Seccion 2',
      tituloSeccion: 'Acelerando el desarrollo web'
    }
  },
  components: {
    Capitulo1,
    Capitulo2
  }
}
</script>

<style>

</style>