<template>
  <div>
    <div class="caja p-2">
      <h2>{{capitulo}}</h2>
      <h3>{{titulocap}}</h3>
      <div ><p class="text-decoration-underline fw-bold">{{texto}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Capitulo1',
  props: {
    texto: String
  },
  data() {
    return {
      capitulo: 'Capitulo 1:',
      titulocap: 'Creando nuestro primer componente'
    }
  },
}
</script>

<style scoped>
.caja {
  border:3px solid black;
  transition: border 1.2s, color 1.2s,background-color 1.2s;
}
.caja:hover {
  color: black;
  background-color: coral;
  border:5px solid black;
}
</style>