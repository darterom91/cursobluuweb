<template>
  <div class="caja">
    <h2><strong>{{Capitulo}}:</strong> {{tituloCap}}</h2>
    <div>
      <h2>{{res}}</h2>
      <ul class="lista">
        <li v-for="(item, index) in servicios" :key="index">{{index+1}} - {{item}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.lista{
  list-style: none;
}
.caja{
  border: 3px solid black;
  padding: 2px;
  transition:background-color 2s, color 3s, border 1.2s;
}
.caja:hover{
  border: 5px solid black;
  background-color: lime;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 5',
      tituloCap: 'v-for y bucles',
      cuenta: 500,
      res: 'Servicios disponibles: ',
      servicios: ['transferencias', 'pagos', 'giros', 'cheques']
    }
  },
}
</script>