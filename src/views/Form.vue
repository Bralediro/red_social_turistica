<template>

  <div class="container p-2">
      <form>
        <h1>Registro Usuarios</h1>
        <div class="form-group row mt-2" >
          <label for="nom" class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="nom" placeholder="Nombre">
                  
          </div>
          <label for="ape" class="col-sm-2 col-form-label">Apellidos</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="ape" placeholder="Apellidos">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label for="pass" class="col-sm-2 col-form-label">Contraseña</label>
          <div class="col-sm-4">
            <input type="pass" class="form-control" id="pass" placeholder="Contraseña">
          </div>
          <label for="pass" class="col-sm-2 col-form-label">Confirmar</label>
          <div class="col-sm-4">
            <input type="pass" class="form-control" id="pass" placeholder="Confirmar Contraseña">
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
            <button type="submit" class="btn btn-primary">Aceptar</button>
            <a class="btn btn-danger" href="./">Cancelar</a>
          </div>
        </div>
    </form>
  </div>  
</template>

<script>
  
</script>
<style>

</style>    