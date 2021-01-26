<template>
  <div class="about">
    <h1 class="pb-5">This is an about page</h1>
    <div class="border border-dark rounded bg-dark p-2 m-2">
      <h2 class="text-light">blog</h2>
      <div class="bg-light">
        <Capitulo1 texto="Estoy en la vista About"/>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '../components/seccion3/Capitulo1'
export default {
  components: {
    Capitulo1
  }
}
</script>

<style scoped>

</style>