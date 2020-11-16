<template>

  <div id="micarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#micarousel" data-slide-to="0" class="active"></li>
      <li data-target="#micarousel" data-slide-to="1" ></li>
      <li data-target="#micarousel" data-slide-to="2" ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active banner-altura-400">
        <img class="d-block w-100" src="../assets/salto.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5>Salto del indio</h5>
          <p>Villagarzon Putumayo</p>
        </div>
      </div>

      <div class="carousel-item banner-altura-400">
        <img class="d-block w-100" src="../assets/vides.jpg" alt="vides">
        <div class="carousel-caption d-none d-md-block">
          <h5>Rio vides</h5>
          <p>Villagarzon Putumayo</p>
        </div>
      </div>

      <div class="carousel-item banner-altura-400">
        <img class="d-block w-100" src="../assets/fondo.jpg" alt="fondo">
        <div class="carousel-caption d-none d-md-block">
          <h5>Fin del Mundo</h5>
          <p>Mocoa Putumayo</p>
        </div>
      </div>
    </div>
    <a class="left carousel-control" href="#micarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev icon"></span>
      </a>
      <a class="right carousel-control" href="#micarousel" role="button" data-slide="next">
      <span class="carousel-control-next icon"></span>
    </a>
    

  </div>

<br>

<div class="card-body" style="border: 1px solid rgb(4, 174, 253)" >      
  <form>
      <h1>Iniciar Sesión</h1>
  <div class="row">
        <div class="col-md-8">
          <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-6">
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
        </div>
          <div class="row">
            <div class="col-md-8">
              <div class="form-group row">
          <label for="password" class="col-sm-4 col-form-label">Contraseña</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="pass" placeholder="Contraseña"><br>
            <a class="btn btn-success" href="./Usuario">Iniciar Sesion</a>
            
              <p>¿Olvidaste Tu Contraseña?
      <a href="./Form" data-toggle="modal" data-target="#exampleModalCenter">Recuperala aquí</a>.
      </p>
      <p>¿Eres nuevo en puturis?
      <a href="./Form">Registrate</a>.
      </p>
          </div>
        </div>
            </div>
            
          </div>
        </div>
        <div class="col-md-4">
          <img src="../assets/putumayo.jpg"  alt="Eniun">

        </div>
      </div>

            
  </form>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Recuperar Contraseña</h5>
       
      </div>
      <div class="modal-body">
        <form>
          <h5>Le enviaremos un correo electronico para recuperar su Contraseña</h5>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Recuperar Contraseña</button>
      </div>
    </div>
  </div>
</div>
<div>
  <button type="button" @click="salir">
    Salir
  </button>
</div>
</template>

<script>
export default {
  methods:{
    salir(){
      localStorage.removeItem("token")
      this.$router.push('/login')
    }
  },
}
</script>

<style>
.banner-altura-400 {
  height: 400px;
  width: 100%;}
.src {
width: 100%;
height: auto;
}
.container {
  height: 400px;
  width: 100%;}
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
