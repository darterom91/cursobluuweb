<template>
  <div class="caja">
      <h2><strong>{{Capitulo}}:</strong> {{tituloCap}}</h2>
      <p>resultado: <strong>{{mostrar}}</strong></p>
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
  background-color: coral;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 1',
      tituloCap: 'Mostrar el hola mundo con vue 3.',
      mostrar: 'hola mundo con vue 3'
    }
  },
}
</script>
