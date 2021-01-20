<template>
  <div class="caja">
    <h2><strong>{{Capitulo}}: </strong>{{tituloCap}}</h2>
    <p>resultado: Picha <a v-bind:href="enlace">Aquí</a>!!!</p>
    <p>resultado: Picha <a :href="enlace">Aquí</a>!!!</p>
  </div>
</template>

<style scoped>
.caja{
  border: 3px solid black;
  padding: 2px;
  transition:background-color 2s, color 3s, border 1.2s;
}
.caja:hover{
  border: 5px solid black;
  background-color: palevioletred;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 3',
      tituloCap: 'El uso de enlaces y el atributo v-bind',
      enlace: 'https://damportafolio91.web.app/'
    }
  },
}
</script>