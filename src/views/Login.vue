<template>
  <div class="container border border-dark p-2">
     <div class="alert alert-danger" v-if="error.tipo!==null">tpo de error: [{{error.tipo}}] - [{{error.mensaje}}]</div>
    <h2>Pagina de Login</h2>
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
        :class="[error.tipo === 'password' ? 'is-invalid':'']"
      >
      <button type="submit" :disabled="bloquear" class="btn btn-primary">Entra</button>
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
    }
  },
  computed: {
    bloquear(){
      if (!this.email.includes('@')) {
        return true
      }
      if (this.pass1.length > 5) {
        return false
      }
      return true
    },
    ...mapState(['error'])
  },
  methods: {
    ...mapActions(['ingresoUsuario']),
    async procesarFormulario(){
     await this.ingresoUsuario({email: this.email, password:this.pass1})
      if (this.error.tipo !== null) {
        return
      }
      this.email = ''
      this.pass1 = ''
    }
  },
}
</script>