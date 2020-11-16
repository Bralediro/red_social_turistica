<template>

  <div class="container p-2">
      <form @submit.prevent="guardar">
        <h1>Registro Usuarios</h1>
        <div class="form-group row mt-2" >
          <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="nombre" id="nombre" placeholder="Nombre">
                  
          </div>
          <label for="apellido" class="col-sm-2 col-form-label">Apellidos</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="apellido" id="apellido" placeholder="Apellidos">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-2 col-form-label">Contraseña</label>
          <div class="col-sm-4">
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Contraseña">
          </div>
          
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
            <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Aceptar Terminos y Condiciones
          </label>
            </div>
          </div>
        </div>
        <div class="form-group row p-2">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <a class="btn btn-danger" href="./">Cancelar</a>
          </div>
        </div>
    </form>
  </div>  
</template>

<script>

import axios from 'axios';

export default{
  name: "CrearUsuario",
  data(){
    return{
      nombre: '',
      apellido: '',
      email: '',
      password: '',

    }
  },
  methods:{
    guardar(){
      axios.post('http://localhost:8000/api/usuarios/',{
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        password: this.password,
      }, 
      {
        headers: {
         "Content-Type": "application/json",
         Authorization:"USU" + this.token
        },
      })
      .then(response => {
        this.$router.push("/Login");
      });
    },
  },
};
</script>
<style>

</style>    