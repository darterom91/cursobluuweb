<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/seccion1">Seccion 1</router-link> |
      <router-link to="/seccion2">Seccion 2</router-link> |
      <router-link to="/blog">Blog(Seccion 3)</router-link> |
      <router-link to="/seccion4">Seccion 4</router-link> |
      <router-link to="/seccion5">Seccion 5</router-link> |
      <router-link to="/crud">CRUD(Seccion 6)</router-link> |
      <router-link to="/firebasecrud">Firebase CRUD(Seccion 7)</router-link>
    </div>
    <NavBar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/seccion5/Navbar'
import {mapActions} from 'vuex'
export default {
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['cargarLocalstorage'])
  },
  created() {
    this.cargarLocalstorage()
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
