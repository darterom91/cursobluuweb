<template>
  <div class="Seccion1">
    <h1>{{titulo}} {{numSec}}</h1>
    <Capitulo1/>
    <Capitulo2/>
    <Capitulo3/>
    <Capitulo4/>
    <Capitulo5/>
    <Capitulo6/>
    <Capitulo7/>
  </div>
</template>

 <style  scoped>

 </style>

 <script>
 import Capitulo1 from '@/components/seccion1/capitulo1.vue'
 import Capitulo2 from '@/components/seccion1/capitulo2.vue'
  import Capitulo3 from '@/components/seccion1/capitulo3.vue'
  import Capitulo4 from '@/components/seccion1/capitulo4.vue'
  import Capitulo5 from '@/components/seccion1/capitulo5.vue'
  import Capitulo6 from '@/components/seccion1/capitulo6.vue'
  import Capitulo7 from '@/components/seccion1/capitulo7.vue'

 export default {
   data() {
     return {
       titulo: 'Seccion',
       numSec: 1,
     }
   },
   components:{
      Capitulo1,
      Capitulo2,
      Capitulo3,
      Capitulo4,
      Capitulo5,
      Capitulo6,
      Capitulo7
   }
 }
 </script>
