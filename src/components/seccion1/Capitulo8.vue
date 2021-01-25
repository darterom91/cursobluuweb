<template>
  <div class="caja">
    <h2 class=""><strong>{{Capitulo}}:</strong> {{tituloCap}}</h2>
    <div>
      <h2 class="bg-dark text-light p-2">Cuentas: <span :class="cantidadCuenta">{{cuenta}}</span>€</h2>
      <h2 v-if="bol==false && cuenta==0"><span>{{res7}}</span></h2>
      <h2 v-if="cuenta<=400 && cuenta > 0"><span>{{res8}}</span></h2>
      <div v-if="cuenta >= 500">
        <h2>{{res}}</h2>
        <h2 :class="cantidadCuenta">cuenta: {{cuenta}}</h2>
      </div>
      <div v-else-if="cuenta <=100 && cuenta > 0">
        <h2>{{res2}}</h2>
        <h2>cuenta: <span>{{cuenta}}</span></h2>
      </div>
      <div v-else>
        <h2>{{res2}}</h2>
        <h2>cuenta: <span>{{cuenta}}</span></h2>
      </div>
    </div>
    <button v-on:click="agregarSaldo">{{res4}}</button>
    <button @click="agregarSaldo">{{res5}}</button>
    <button @click="disminuirSaldo" :disabled="dessactivar">{{res6}}</button>
    <div class="centrarListas">
      <ul class="lista" v-if="bol==true">
        <h3>{{res3}}</h3>
        <li v-for="(item, index) in servicios" :key="index">{{index+1}} - {{item}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.centrarListas{
  text-align: center;
}
.centrarListas .lista{
  text-align: left;
	display: inline-block;
}
.lista li{
  list-style: none;
}
button{
  padding: 10px;
  text-align: center;
  color:white;
  background-color: black;
}
button:disabled{
  padding: 10px;
  text-align: center;
  color: whitesmoke;
  background-color: grey;
}
span{
  color: red;
}
.caja{
  border: 3px solid black;
  padding: 2px;
  transition:background-color 2s, color 3s, border 1.2s;
}
.caja:hover{
  border: 5px solid black;
  background-color: slateblue;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      Capitulo: 'Capitulo 8',
      tituloCap: 'Desactivar Boton',
      cuenta: 1000,
      res: 'La cuenta esta activada',
      res2: 'la cuenta no esta activada...',
      res3: 'Servicios disponibles: ',
      res4: 'Agregar a la cuenta',
      res5: '@gregar a la cuenta',
      res6: 'Disminuir saldo',
      res7: 'No hay saldo!!',
      res8: 'Queda poco saldo!!!',
      bol: false,
      dessactivar: false,
      servicios: ['transferencias', 'pagos', 'giros', 'cheques']
    }
  },
  methods: {
    agregarSaldo() {
      this.cuenta = this.cuenta + 100;
      if(this.cuenta >=500){
        this.cambiarBol();
      }
      if (this.cuenta > 0) {
        this.dessactivar = false;
      }
    },
    disminuirSaldo(){
      if(this.cuenta >= 0){
        this.cuenta = this.cuenta - 100;
        if(this.cuenta <= 0){
          this.cuenta = 0;
          alert('no hay saldo!!!')
          this.dessactivar = true;
        }
      }
      if (this.cuenta < 500 && this.cuenta >0){
        this.cambiarBolFalse();
      }
    },
    cambiarBol() {
      this.bol = true;
    },
    cambiarBolFalse(){
      this.bol = false;
    }
  },
  computed: {
    cantidadCuenta(){
      return this.cuenta >= 500 ? 'text-success' : 'text-danger'
    }
  },
}
</script>