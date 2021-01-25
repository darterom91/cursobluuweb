<template>
  <div>
    <div class="caja">
      <div class="">
        <h2>{{capitulo}}</h2>
        <h2>{{titulocap}}</h2>
      </div>
      <div class="border border-4 border-dark p-2 m-4">
        <h5>Tipo de cuenta:{{tipoCuenta}}</h5>
        <h5 :class="colorEstado2" v-if="sueldo< 500 && sueldo > 0">Saldo: {{sueldo}}</h5>
        <h5 v-else :class="colorEstado">Saldo: {{sueldo}}</h5>
        <h5>Estado de la cuenta:  <span :class="colorEstado">{{estado ? 'activada':'descativada'}}</span></h5>

        <h2 :class="colorEstado2" v-if="sueldo< 500 && sueldo > 0">Te queda poco saldo</h2>
        <h2 :class="colorEstado" v-if="sueldo == 0">No te queda Saldo</h2>
        <div v-if="sueldo >= 500" class="bg-dark text-light p-2">
          <h5 v-for="(serv, index) in servicios" :key="index">{{index +1}} - {{serv}}</h5>
        </div>
        <AccionSaldo texto="Aumentar Saldo" @accion="aumentar"/>
        <AccionSaldo texto="Disminuir Saldo" @accion="disminuir" :desactivar="desactivar"/>
      </div>
    </div>
  </div>
</template>

<script>
import AccionSaldo from './accionSaldo.vue'

export default {
  components: {
    AccionSaldo
  },
  data() {
    return {
      capitulo: 'Capitulo 2:',
      titulocap: 'Creando nuestro primer componente',
      sueldo: 1000,
      tipoCuenta: 'visa',
      estado: true,
      desactivar: false,
      servicios: ['giro', 'abono', 'transferencias']
    }
  },
  methods: {
    aumentar() {
      this.sueldo = this.sueldo + 100;
      if(this.sueldo > 0){
        this.desactivar = false;
        console.log("Desactivar: "+this.desactivar);
        this.comprobarSueldo();
      }
    },
    disminuir() {
      if(this.sueldo >= 0){
         this.sueldo = this.sueldo - 100;
        if(this.sueldo < 0){
          this.sueldo = 0;
          alert('no hay saldo!!!')
          this.desactivar = true;
          console.log("Desactivar: "+this.desactivar);
        }
          this.comprobarSueldo()
      }
    },
    comprobarSueldo() {
      if(this.sueldo >= 500){
        this.estado = true;
      }else if(this.sueldo < 500){
        this.estado = false;
      }
    }
  },
  computed: {
    colorEstado() {
      return this.estado == true ? 'text-success bg-dark' : 'text-danger bg-dark';
    },
    colorEstado2() {
      return this.sueldo <= 100 ? 'text-warning bg-dark' : 'text-warning bg-dark'
    }
  },
}
</script>

<style scoped>
.caja {
  border:3px solid black;
  transition: border 1.2s, color 1.2s,background-color 1.2s;
}
.caja:hover {
  color: black;
  background-color: magenta;
  border:5px solid black;
}
</style>