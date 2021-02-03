<template>
  <div>
    <div class="caja p-2">
      <h2>El contador es: <span :class="cambiarColor">{{contador}}</span></h2>
      <button class="btn rounded bg-success p-2 m-2" @click="incrementar">Incrementar</button>
      <button class="btn rounded bg-danger p-2 m-2" @click="disminuir">Disminuir</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['contador']),
    cambiarColor(){
      return this.contador > 50 ? 'text-success': 'text-danger'
    }
  },
  methods: {
    ...mapMutations(['incrementar', 'disminuir'])
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