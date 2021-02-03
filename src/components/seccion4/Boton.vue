<template>
  <div>
    <div class="caja p-2">
      <h2 class="text-decoration-underline">{{capitulo}}</h2>
      <h3>{{tituloCap}}</h3>
      <button class="btn bg-warning rounded p-2" @click="accionDisminuir">Disminuir BTN(componente)</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
      capitulo: 'capitulo 2',
      tituloCap: 'BTN component (VUEX)'
    }
  },
  computed: {
    ...mapState(['contador']),
  },
  methods: {
    ...mapActions(['accionDisminuir'])
  },
}
</script>

<style>
.caja {
  border:3px solid black;
  transition: border 1.2s, color 1.2s,background-color 1.2s;
}
.caja:hover {
  color: black;
  background-color: lightcoral;
  border:5px solid black;
}
.btn {
  transition: color 1.2s, border 0.5s;
}
.btn:hover {
  color: black;
  border:5px solid black;
}
</style>