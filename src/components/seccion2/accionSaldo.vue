<template>
  <div>
    <button @click="accion" :disabled="desactivar">{{texto}}</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: String,
    desactivar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    accion() {
      this.$emit('accion')
    },
    desacs() {
      this.$$emit('desacs')
    }
  },
}
</script>

<style scoped>
  button:disabled{
    background-color: lightcoral;
    color: red;
  }
</style>