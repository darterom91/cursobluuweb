<template>
  <div class="home">
    <img class="pb-5" alt="Vue logo" src="../assets/logo.png">
    <div class="border border-dark rounded bg-dark p-2 m-2">
      <h2 class="text-light">Blog</h2>
      <div class="bg-light">
        <Capitulo1 texto="Estamos en la vista Home"/>
      </div>
    </div>
  </div>
</template>

<script>

import Capitulo1 from '../components/seccion3/Capitulo1'

export default {
  name: 'Home',
  components: {
    Capitulo1
  }
}
</script>
