<template>
  <div class="caja p-3">
    <h2>{{capitulo}}</h2>
    <h2>{{tituloCap}}</h2>
    <div class="border border-1 border-danger rounded bg-dark p-3 mt-2">
        <BtnAccion :estado="true"/>
        <BtnAccion :estado="false"/>
      </div>
  </div>
</template>

<script>
import BtnAccion from './BotonAccion'
export default {
  data() {
    return {
      capitulo: 'Capitulo 2',
      tituloCap: 'Pasar parametros desde mapActions metodo(objeto)'
    }
  },
  components: {
      BtnAccion
    }
}
</script>

<style scoped>
.caja {
  border:3px solid black;
  transition: border 1.2s, color 1.2s,background-color 1.2s;
}
.caja:hover {
  color: black;
  background-color: magenta;
  border:5px solid black;
}
</style>