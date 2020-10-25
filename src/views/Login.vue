<template>
  <h1>Iniciar Sesión</h1>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="email" id="email">
    </div>
    <div>
      <label for="password">Contraseña</label>
      <input type="password" v-model="password" id="password">
    </div>
    <div style="color: red" v-if="error">
      Las credenciales no son validas
    </div>
    <button type="submit">Iniciar Sesión</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      email:"",
      password: "",
      error: false,
    };
  },
  methods:{
    login(){
      this.error = false;
      fetch("http://localhost:8000/api-auth/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      })
        .then(async(response) => {
          if(!response.ok) throw await response.json();
          return response.json();
        })
        .then((data) => {
          localStorage.setItem('token', data.token)
          this.$router.push('/')
        }).catch((err) => {
          this.error = true
        });
    },
  },
};
</script>