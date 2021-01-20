<template>
  <div class="caja">
    <h2><strong>{{Capitulo}}:</strong> {{tituloCap}}</h2>
    <p><strong>Cuenta: </strong>{{cuenta}}€</p>
    <div> <Strong>{{cuenta}}</Strong> {{cuenta >= 1000? "Es igual a 1000":"es menor a mil"}}</div>
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
  background-color: greenyellow;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 2',
      tituloCap: 'Renderizar datos de forma declarativa',
      cuenta: 500,
    }
  },
}
</script>