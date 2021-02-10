<template>
  <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">nombre</th>
      <th scope="col">categorias</th>
      <th scope="col">radio</th>
      <th scope="col">numero</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(tareaFir, index) in tareasFir" :key="index">
      <td>{{tareaFir.id}}</td>
      <td>{{tareaFir.nombre}}</td>
      <td>
        <span v-for="(categoria, index) in tareaFir.categorias" :key="index">
          {{
            tareaFir.categorias.length === index + 1 ? categoria : categoria + ' | '
          }}
        </span>
      </td>
      <!-- <td>
        {{tarea.categorias.join('/ ')}}
      </td> -->
      <td>{{tareaFir.radio}}</td>
      <td>{{tareaFir.numero}}</td>
      <td>
        <button @click="deleteTareasFire(tareaFir.id)" class="btn btn-danger text-light p-2">eliminar</button>
        <router-link 
          class="btn btn-warning p-2"
          :to="{
            name: 'EditarFir',
            params:  {
              id: tareaFir.id
            }
          }">
        Update
        </router-link>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['tareasFir'])
  }, methods: {
    ...mapActions(['deleteTareasFire'])
  },
}
</script>
