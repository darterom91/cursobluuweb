<template>
  <div>
    Editar {{$route.params.id}} - {{tarea}}
    <form @submit.prevent="setUpdate(tarea)">
      <Input :tarea="tarea"/>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/crud/input'
export default {
  computed: {
    ...mapState(['tarea'])
  },
  components: {
    Input
  },
  methods: {
    ...mapActions(['setTarea','setUpdate'])
  },
  created() {
    this.setTarea(this.$route.params.id)
  },
}
</script>