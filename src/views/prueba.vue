<template>
  <div class="container">
      <form action class="form">
      <h1 class="title">Iniciar Sesión</h1>
      <label class="form-label" for="#email">Correo:</label>
      <input class="form-input" type="email" id="email" placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" type="password" id="password" placeholder="Password">
      <input class="form-button" type="submit" value="Iniciar">
      <p>Olvidaste la contraseña: </p>
      <p>¿Eres nuevo en puturis? <a href="./views/Form.vue">Registrate</a>.</p>
      
    </form>
  </div>
</template>