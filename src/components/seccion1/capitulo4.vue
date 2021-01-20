<template>
  <div class="caja">
    <h2><strong>{{Capitulo}}: </strong>{{tituloCap}}</h2>
    <div v-if="cuenta >= 500">
      <h2>{{res}}</h2>
      <h2>cuenta: {{cuenta}}</h2>
    </div>
    <div v-else-if="cuenta <=100 && cuenta > 0">
      <h2>{{res2}}</h2>
      <h2>cuente: <span>{{cuenta}}</span></h2>
    </div>
    <div v-else>
      <h2>{{res2}}</h2>
      <h2>cuenta: <span>{{cuenta}}</span></h2>
    </div>

  </div>
</template>

<style scoped>
span{
  color: red;
}
.caja{
  border: 3px solid black;
  padding: 2px;
  transition:background-color 2s, color 3s, border 1.2s;
}
.caja:hover{
  border: 5px solid black;
  background-color: lightseagreen;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 4',
      tituloCap: 'V-if y las variables booleanas',
      res: 'La cuenta esta activada',
      res2: 'la cuenta no esta activada...',
      bol: true,
      cuenta: 500
    }
  },
}
</script>