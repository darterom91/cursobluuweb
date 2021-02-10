<template>
  <div>
    Editar {{$route.params.id}} - {{tareaFir}}
    <form @submit.prevent="setUpdateFire(tareaFir)">
      <Input :tareaFir="tareaFir"/>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/firebaseCrud/input'
export default {
  computed: {
    ...mapState(['tarea', 'tareaFir'])
  },
  components: {
    Input
  },
  methods: {
    ...mapActions(['setTareaFire','setUpdateFire'])
  },
  created() {
    this.setTareaFire(this.$route.params.id)
  },
}
</script>