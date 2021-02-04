<template>
  <span><button :class="colorBoton" @click="accionBoton({estado : estado, numero : val})">{{textoBoton}}</button></span>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      val: 50
    }
  },
  props: {
    estado: Boolean
  },
  computed: {
    textoBoton(){
      return this.estado ? 'AUMENTAR' : 'DISMINUIR'
    },
    colorBoton(){
      return this.estado ? 'border border-2 border-dark bg-success rounded text-dark p-2 m-2' : 'border border-2 border-dark rounded bg-danger text-dark p-2 m-2'
    }
  },
  methods: {
    ...mapActions(['accionBoton'])
  },
}
</script>

<style scoped>

</style>