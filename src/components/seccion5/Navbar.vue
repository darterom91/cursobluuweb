<template>
    <div class="navbar navbar-dark bg-dark px-3">
      <router-link to="/" class="navbar-brand">
      Formulario
      </router-link>
      <div class="d-flex">
        <router-link class="btn btn-success" to="/" v-if="userAutenticado">
        Tareas
        </router-link>
        <button class="btn btn-danger" v-if="userAutenticado" @click="cerrarSesion">Cerrar Sesión</button>
        <router-link class="btn btn-primary" to="/registro" v-if="!userAutenticado"
        >Registro</router-link>
        <router-link class="btn btn-primary" to="/Login" v-if="!userAutenticado"
          >Login</router-link>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['userAutenticado'])
  },
  methods: {
    ...mapActions(['cerrarSesion'])
  },
}
</script>

<style>

</style>