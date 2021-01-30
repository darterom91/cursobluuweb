<template>
   <div>
     <div class="caja p-2">
      <h2 class="text-decoration-underline p-2">{{capitulo}}</h2>
      <h3 class="p-3">{{tituloCap}}</h3>
      <button class="btn p-2 border-5 border-primary " @click="consumirApi">Consumir API</button>
      <div class="position-relative border border-4 border-danger bg-dark m-2" v-if="bol === true">
        <button class="position-absolute top-0 start-0   bg-danger text-light px-4 py-3" @click="cambiarBolFalse"> X </button>
        <div class="border border-2 border-warning rounded bg-light m-3 p-3" v-for="(post, index) in arrayBlog" :key="index">
          <h2>ID:{{post.id}}</h2>
          <h2>Titulo: {{post.title}}</h2>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
export default {
data() {
  return {
    capitulo: 'Capitulo 2',
    tituloCap: 'Practica fetch (Consumiendo api)',
    arrayBlog: [],
    bol: false
  }
},
methods: {
   async consumirApi(){
     console.log("1 "+this.bol)
      try {
        console.log("2 "+this.bol)
         const data = await fetch('https://jsonplaceholder.typicode.com/posts')
         const array = await data.json()
         this.arrayBlog = array
         console.log('Consumier api\n')
         console.log(array)
         this.cambiarBol()
         console.log("3 "+this.bol)
      } catch (error) {
        console.log(error)
      }
    },
    cambiarBol(){
      this.bol=true
    },
    cambiarBolFalse(){
      this.bol=false
    }
  },
}
</script>

<style scoped>
.caja{
  border: 3px solid black;
  transition: border 1.2s, background-color 1.2s, color 1.2s;
}
.caja:hover{
  background-color: cadetblue;
  color: black;
  border: 5px solid black;
}
.btn{
  background-color: yellow;
  color: red;
  transition:background-color 1.2s, color 1.2s, font-size 1.2s, border 1s;
}
.btn:hover{
  background-color: black;
  color: white;
  font-size: 1.2em;
  border:10px solid white;
}
</style>