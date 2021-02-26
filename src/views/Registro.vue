<template>
  <div class="container border border-dark p-2">
    {{bloquear}}
    <div class="alert alert-danger" v-if="error.tipo!==null">tpo de error: [{{error.tipo}}] - [{{error.mensaje}}]</div>
    <h2>Pagina de registro</h2>
    <form @submit.prevent="procesarFormulario">
      <input 
        type="email"
        placeholder="email"
        class="form-control border border-dark my-2"
        v-model.trim="email"
        :class="[error.tipo === 'email' ? 'is-invalid':'']"

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
import { mapActions, mapState } from 'vuex'
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
    },
    ...mapState(['error'])
  },
  methods: {
    ...mapActions(['registrarUsuario']),
    async procesarFormulario(){
     await this.registrarUsuario({email: this.email, password:this.pass1})
      if (this.error.tipo !== null) {
        return
      }
      this.email = ''
      this.pass1 = ''
      this.pass2 = ''
    }
  },
}
</script>

<style>

</style>