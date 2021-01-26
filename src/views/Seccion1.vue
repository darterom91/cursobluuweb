<template>
  <div class="Seccion1 m-2">
    <div class="border border-dark rounded bg-dark p-2 mx-2">
      <div class="text-light p-2 m-2">
        <h2>{{seccion}}:</h2>
        <h3>{{tituloSeccion}}</h3>
      </div>
      <div class="bg-light text-dark">
        <Capitulo1/>
        <Capitulo2/>
        <Capitulo3/>
        <Capitulo4/>
        <Capitulo5/>
        <Capitulo6/>
        <Capitulo7/>
        <Capitulo8/>
      </div>
    </div>
  </div>
</template>

 <style  scoped>

 </style>

 <script>
  import Capitulo1 from '@/components/seccion1/Capitulo1.vue'
  import Capitulo2 from '@/components/seccion1/Capitulo2.vue'
  import Capitulo3 from '@/components/seccion1/Capitulo3.vue'
  import Capitulo4 from '@/components/seccion1/Capitulo4.vue'
  import Capitulo5 from '@/components/seccion1/Capitulo5.vue'
  import Capitulo6 from '@/components/seccion1/Capitulo6.vue'
  import Capitulo7 from '@/components/seccion1/Capitulo7.vue'
  import Capitulo8 from '@/components/seccion1/Capitulo8.vue'

 export default {
   data() {
     return {
      seccion: 'Seccion 1',
      tituloSeccion: 'Fundamentos'
     }
   },
   components:{
      Capitulo1,
      Capitulo2,
      Capitulo3,
      Capitulo4,
      Capitulo5,
      Capitulo6,
      Capitulo7,
      Capitulo8
   }
 }
 </script>
