<template>
  <div>
    <div class="border border-dark rounded bg-dark p-2 mx-2">
      <div class="text-light p-2 m-2">
        <h2>{{seccion}}:</h2>
        <h2>{{tituloSeccion}}</h2>
      </div>
      <div class="bg-light text-dark">
        <Capitulo1 texto="Estoy en el blog"/>
        <Capitulo2/>
        <Capitulo3/>
        <div class="border border-2 border-warning rounded bg-light text-dark m-3 p-3" v-for="post in arrayBlog" :key="post.id">
          <h2>ID:{{post.id}}</h2>
          <router-link :to="`/blog/${post.id}`"><h2>Titulo: {{post.title}}</h2></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Capitulo1 from '../components/seccion3/Capitulo1'
import Capitulo2 from '../components/seccion3/Capitulo2'
import Capitulo3 from '../components/seccion3/Capitulo3'

export default {
  components : {
    Capitulo1,
    Capitulo2,
    Capitulo3
  },
  data() {
    return {
      seccion: 'Seccion 3',
      tituloSeccion: 'Jugando con Vue-router',
      arrayBlog: [],
      bol: false
    }
  },
  methods: {
   async consumirApi(){
      try {
         const data = await fetch('https://jsonplaceholder.typicode.com/posts')
         const array = await data.json()
         this.arrayBlog = array
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.consumirApi()
  },
}
</script>

<style scoped>
.caja{
  border: 3px solid black;
  transition: border 1.2s, background-color 1.2s, color 1.2s;
}
.caja:hover{
  background-color: purple;
  color: white;
  border: 5px solid black;
}
</style>