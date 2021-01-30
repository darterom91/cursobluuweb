<template>
  <div class="about">
    <div class="border border-dark rounded bg-dark p-2 m-2">
      <div class="bg-light p-2">
        <Capitulo1 texto="Esto es el Articulo"/>
        <div class="border border-3 border-dark my-1 p-3">
          <h2>Num. Articulo: {{$route.params.id}}</h2>
          <h2>{{articulo.title}}</h2>
          <p>{{articulo.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '../components/seccion3/Capitulo1'
export default {
  components: {
    Capitulo1
  },
  data() {
    return {
      articulo: {}
    }
  },
  methods: {
    async consumirApi(){
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        const artAux = await data.json()
        this.articulo = artAux
        console.log("artAux");
        console.log(artAux)
        console.log("this.articulo");
        console.log(this.articulo);
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.consumirApi()
  },
}
</script>

<style scoped>

</style>