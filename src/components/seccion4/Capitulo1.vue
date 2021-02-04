<template>
  <div>
    <div class="caja p-2">
      <h2>El contador es: <span :class="[cambiarColor, vipColor]" class="bg-dark">{{contador}}</span></h2>
      <button class="btn rounded bg-success p-2 m-2" @click="accionIncrementar">Incrementar</button>
      <button class="btn rounded bg-danger p-2 m-2" @click="accionDisminuir">Disminuir</button>
      <span><Boton class="d-inline"/></span>
    </div>
  </div>
</template>m

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import Boton from './Boton'
import BtnAccion from './BotonAccion'
export default {
  computed: {
    ...mapState(['contador']),
    cambiarColor(){
      return this.contador > 50 ? 'text-success': 'text-danger'
    },
    vipColor(){
      return this.contador > 100 ? 'text-warning': ''
    }
  },
  methods: {
    ...mapMutations(['incrementar', 'disminuir']),
    ...mapActions(['accionIncrementar', 'accionDisminuir'])
  },
  components: {
    Boton,
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
  background-color: lightskyblue;
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