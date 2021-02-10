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
    <tr v-for="(tarea, index) in tareas" :key="index">
      <td>{{tarea.id}}</td>
      <td>{{tarea.nombre}}</td>
      <td>
        <span v-for="(categoria, index) in tarea.categorias" :key="index">
          {{
            tarea.categorias.length === index + 1 ? categoria : categoria + ' | '
          }}
        </span>
      </td>
      <!-- <td>
        {{tarea.categorias.join('/ ')}}
      </td> -->
      <td>{{tarea.radio}}</td>
      <td>{{tarea.numero}}</td>
      <td>
        <button @click="deleteTareas(tarea.id)" class="btn btn-danger text-light p-2">eliminar</button>
        <router-link 
          class="btn btn-warning p-2"
          :to="{
            name: 'Editar',
            params:  {
              id: tarea.id
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
    ...mapState(['tareas'])
  }, methods: {
    ...mapActions(['deleteTareas'])
  },
}
</script>
