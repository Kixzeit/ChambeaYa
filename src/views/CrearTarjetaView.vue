<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <section class="p-4 p-md-5" style="" >
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-5">
      <div class="card rounded-3">
        <div class="card-body p-4">
          <div class="text-center mb-4">
            <h3>Configuracion de Tarjetas</h3>
            <h6>Pagos</h6>
          </div>
          <form action="">
            <p class="fw-bold mb-4 pb-2">Tarjetas Guardadas:</p>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="../assets/ico3.svg" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXc" class="form-control form-control-lg"
                    value="**** **** **** 3193" />
                  <label class="form-label" for="formControlLgXc">Numero de Tarjeta</label>
                </div>
              </div>
              <a href="#!">Eliminar Tarjeta</a>
            </div>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="../assets/ico4.svg" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXs" class="form-control form-control-lg"
                    value="**** **** **** 4296" />
                  <label class="form-label" for="formControlLgXs">Numero de Tarjeta</label>
                </div>
              </div>
              <a href="#!">Eliminar Tarjeta</a>
            </div>

            <p class="fw-bold mb-4">Agregar Nueva Tarjeta:</p>

            <div class="form-outline mb-4">
              <input type="text" id="formControlLgXsd" class="form-control form-control-lg"
                value="Josue Gonzalez" />
              <label class="form-label" for="formControlLgXsd">Nombre Completo</label>
            </div>

            <div class="row mb-4">
              <div class="col-7">
                <div class="form-outline">
                  <input type="text" id="formControlLgXM" class="form-control form-control-lg"
                    value="1234 5678 1234 5678" />
                  <label class="form-label" for="formControlLgXM">Numero De Tarjeta</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-outline">
                  <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
                    placeholder="MM/YYYY" />
                  <label class="form-label" for="formControlLgExpk">Expira</label>
                </div>
              </div>
              <div class="col-2">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
                    placeholder="CVV" />
                  <label class="form-label" for="formControlLgcvv">CVV</label>
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-lg btn-block">Agregar Tarjeta</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";

export default {
  components: {
    SideBarKixComponent,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

