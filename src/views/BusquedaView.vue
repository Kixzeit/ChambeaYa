<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3 row">
      <div class="card card-body mb-5">
        <h1>¡Necesitas ayuda con algo?</h1>
        <h3>¡Encuentralo Aqui Mismo!</h3>
        <div>
          <form
            class="row g-3 d-flex justify-content-center m-5"
            v-on:submit.prevent="sendOficce"
          >
            <h3 for="inputPassword2" class="">Buscar Oficio</h3>
            <div class="col-auto">
              <div v-if="loadedImages < 1">

                <input
                
                type="text"
                class="form-control"
                id="inputsearch"
                placeholder="Mecanico"
                v-model="oficio.name"
                />
                <button type="submit" class="btn btn-primary m-3">Enviar</button>

              </div>
                
              <button v-else type="submit" class="btn btn-warning mb-3" @click="recarga">Hacer otra busqueda</button>
            </div>
            <div class="col-auto">
            </div>
          </form>
        </div>
        <div class="d-flex flex-wrap gap-4 justify-content-center" >
          
          <div class="col-sm-12 col-lg-3 " v-for="trabajo in oficios" v-bind:key="trabajo.id">
        <div class="card card-body">
            <h3 class="fw-bold">{{ trabajo.oficio }}</h3>
            <!-- <CarruselComponent2 /> -->
            <!-- <img src="https://picsum.photos/300/300" class="d-block  alto" alt="..." style="height: 100%; width: 100%;"> -->
            
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ trabajo.nombreNegocio }}</h5>
              <p class="card-text">
                {{ trabajo.descripcionPequeña }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-start">{{ trabajo.descripcionCompleta }}<p class="card-text">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </p>
              </li>
            </ul>

            <div class="card-body">
              <div v-if="idUser > 0">
                <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Datos De contacto</a>
                <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Datos de contacto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><span class="fw-bold text-success">Oficio: </span>{{trabajo.oficio }}</p>
        <p><span class="fw-bold">Negocio: </span>{{ trabajo.nombreNegocio }}</p>
        <p><span class="fw-bold">Correo Electronico: </span>{{ trabajo.correoNegocio }}</p>
        <p><span class="fw-bold">Numero de Telefono:</span> {{ trabajo.telefonoNegocio }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
              </div>
              <div v-else >
                <a href="/ui/login" class="btn btn-primary">Ver Datos De contacto</a>
              </div>
            </div>
          </div>
          
        </div>

        </div>
      </div>
    </div>
    <FooterComponent class="mt-5" />
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// import CarruselComponent2 from "@/components/CarruselComponent2.vue";
import store from "@/store";
import axios from "axios";

export default {
  components: {
    SideBarKixComponent,
    FooterComponent,
    // CarruselComponent2
  },
  data: function () {
    return {
      idUser: store.state.userData.idUser,
      oficio: {},
      oficios: [],
      maxImagesAllowed: 8,
      loadedImages: 0,
    };
  },
  methods: {
    sendOficce: function () {
      console.log(this.oficio);
      let trabajoEnviar = { trabajo: this.oficio.name };
      console.log("esta si es la buena " + trabajoEnviar.trabajo);
      const options = {
        method: "GET",
        url:
          "http://localhost:8080/api/get-allads-byoficce/" +
          trabajoEnviar.trabajo,
        headers: { Accept: "application/json;charset=utf-8" },
      };

      axios
        .request(options)
        .then((response) => {
          this.oficios=response.data
          this.loadedImages = this.oficios.length;
          console.log(this.oficios);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    recarga: function () {
      location.reload();
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
