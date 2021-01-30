<template>
   <div>
     <div class="caja p-2">
      <h2 class="text-decoration-underline p-2">{{capitulo}}</h2>
      <h3 class="p-3">{{tituloCap}}</h3>
      <div class="position-relative border border-4 border-danger bg-dark m-2">
        <div class="border border-2 border-warning rounded bg-light text-dark m-3 p-3" v-for="post in arrayBlog" :key="post.id">
          <h2>ID:{{post.id}}</h2>
          <router-link :to="`/blog/${post.id}`"><h2>Titulo: {{post.title}}</h2></router-link>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
export default {
data() {
  return {
    capitulo: 'Capitulo 3',
    tituloCap: 'Usando created()',
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