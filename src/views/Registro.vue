<template>
  <div class="container border border-dark p-2">
    {{bloquear}}
    <h2>Pagina de registro</h2>
    <form @submit.prevent="registrarUsuario({email: email, password: pass1})">
      <input 
        type="email"
        placeholder="email"
        class="form-control border border-dark my-2"
        v-model.trim="email"
      >
      <input 
        type="password"
        placeholder="pass1"
        class="form-control border border-dark my-2"
        v-model.trim="pass1"
      >
      <input 
        type="password"
        placeholder="pass2"
        class="form-control border border-dark my-2"
        v-model.trim="pass2"
      >
      <button type="submit" :disabled="bloquear" class="btn btn-primary">Registro</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: ''
    }
  },
  computed: {
    bloquear(){
      if (!this.email.includes('@')) {
        return true
      }
      if (this.pass1 === this.pass2 && this.pass1 != '' && this.pass1.length > 5) {
        return false
      }
      return true
    }
  },
  methods: {
    ...mapActions(['registrarUsuario'])
  },
}
</script>

<style>

</style>