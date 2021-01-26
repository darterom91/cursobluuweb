<template>
  <div>
    <div class="caja p-2">
      <h2 class="text-decoration-underline">{{capitulo}}</h2>
      <h2 class="p-2">{{tituloCap}}</h2>
      <h3 class="p-2">{{texto}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texto: String
  },
  data() {
    return {
      capitulo: 'Capitulo 1',
      tituloCap: 'Components vs views'    }
  },
}
</script>

<style>
  .caja{
    border: 3px solid black;
    transition: border 1.2s, background-color 1.2s, color 1.2s;
  }
  .caja:hover{
    background-color: crimson;
    color: black;
    border: 5px solid black;
  }
</style>