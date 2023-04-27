<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <div class="card card-body">
        <h2>
          <i class="fa-solid fa-rectangle-ad" style="color: #1d4cf2"></i>Crea tu
          Anuncio!
        </h2>
        <form action="">
          <div class="row">
            <div class="col-12-sm mb-4 col-lg-6">
              <label for="formGroupExampleInput" class="form-label"
                >Nombre Del Negocio:</label
              >
              <input
                type="text"
                class="form-control mb-4"
                id="formGroupExampleInput"
                placeholder="Plomeros Don Roque"
                v-model="nombreNegocio"
              />
            </div>
            <div class="col-12-sm mb-4 col-lg-6">
              <label for="formGroupExampleInput" class="form-label"
                >descripcion Pequeña:</label
              >
              <input
                type="text"
                class="form-control mb-4"
                id="formGroupExampleInput"
                placeholder="Hacemos los mejores trabajos y cobramos barato"
                v-model="descripcionPequeña"
              />
            </div>
            <div class="col-12-sm mb-4 col-6-lg">
              <label for="formGroupExampleInput" class="form-label"
                >descripcion Completa:</label
              >
              <div class="form-floating">
                <textarea
                  class="form-control mt-4"
                  placeholder="Descripcion Completa"
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="descripcionCompleta"
                ></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            </div>
            <!-- 1er -->
            <div class="col-sm-12 col-lg-6 mb-4">
              <label for="inputEmail4" class="form-label"
                >Codigo Postal
                <i class="fa-solid fa-map-pin" style="color: #1d43f2"></i
              ></label>
              <input
                type="email"
                class="form-control mb-3"
                id="inputEmail4"
                v-model="codigoPostal"
              />
            </div>

            <div class="col-sm-12 col-lg-6">
              <label for="inputText" class="form-label"
                >Oficio <i class="fa-solid fa-hammer" style="color: #1d43f2"></i
              ></label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="oficio"
              >
                <option v-for="oficioc in oficios" v-bind:key="oficioc.id">
                  {{ oficioc.nombre }}
                </option>
              </select>
            </div>

            <div
              v-if="loadedImages < maxImagesAllowed"
              class="row mt-4 mb-4 justify-content-around"
            >
              <div class="mb-4">
                <a href="/ui/upload/" class="btn btn-primary"
                  >Insertar Imagen
                  <i class="fa-solid fa-file-image" style="color: #ffffff"></i
                ></a>
              </div>
            </div>
            <h2 v-else class="text-danger">Limite de Imagenes Alcanzado</h2>

            <h2 class="my-4">imagenes</h2>
            <div class="d-flex gap-4 flex-wrap justify-content-center">
              <div
                v-for="imagen in imagenes"
                v-bind:key="imagen.id"
                id="contenedor"
              >
                <div class="elemento position-relative">
                  <img
                    :src="une(imagen.fullHttpUploadUrl)"
                    alt=""
                    class="rounded img"
                  />
                
                    <i
                    class="fa-solid fa-circle-xmark fa-bounce fa-2xl position-absolute top-0 end-0 border border-light"
                    style="color: #ec091f"
                    @click="elimina(imagen)"
                  ></i>
                  
                </div>
              </div>
            </div>
            <h2 class="my-4">Videos</h2>
            <div class="row mt-4 mb-4 justify-content-around">
              <div class="mb-4">
                <a href="/ui/upload/" class=""
                  >
                  <!-- <i class="fa-solid fa-file-image" style="color: #ffffff"></i> -->
                  </a>
              </div>
            </div>
            <h4 class="my-5">
              Datos del negocio
              <i class="fa-solid fa-house" style="color: #1d43f2"></i>
            </h4>

            <div class="row d-flex justify-content-around">
              <div class="col-sm-12 col-lg-4">
                <label for="inputEmail4" class="form-label"
                  >Telefono del Negocio
                  <i class="fa-solid fa-map-pin" style="color: #1d43f2"></i
                ></label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="inputEmail4"
                  placeholder="16541651651"
                  v-model="telefonoNegocio"
                />
              </div>

              <div class="col-sm-12 col-lg-4">
                <label for="inputCity" class="form-label"
                  >Correo Electronico del negocio</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="inputCity"
                  placeholder="mi_negocio@example.com"
                  v-model="correoNegocio"
                />
              </div>
            </div>

            <div class="row d-flex justify-content-around mt-4 mb-4">
              <div class="col-sm-6 col-lg-3 mb-4">
                <a href="/ui/ine" class="btn btn-primary"
                  ><span
                    ><i
                      class="fa-solid fa-address-card mx-2"
                      style="color: #ffffff"
                    ></i
                  ></span>
                  Ine</a
                >
              </div>
              <div class="col-sm-6 col-lg-3 mb-4">
                <a href="/ui/pago" class="btn btn-primary"
                  ><span
                    ><i
                      class="fa-solid fa-credit-card mx-2"
                      style="color: #ffffff"
                    ></i
                  ></span>
                  Card</a
                >
              </div>
            </div>
            <div class="col-sm-12">
              <a class="btn btn-primary my-4" @click="sendAds">
                Enviar Datos y Crear Anuncio
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";
import axios from "axios";
import store from "@/store";

export default {
  components: {
    SideBarKixComponent,
  },
  data() {
    return {
      imagenes: [],
      oficios: [],
      idUser: store.state.userData.idUser,
      maxImagesAllowed: 4,
      loadedImages: 0,

      id: "",
      nombreNegocio: "",
      descripcionCompleta: "",
      descripcionPequeña: "",
      codigoPostal: "",
      oficio: "",
      telefonoNegocio: "",
      correoNegocio: "",
    };
  },
  mounted() {
    this.carga();
    this.getOficces();
    this.getAds();
  },
  methods: {
    getOficces() {
      axios
        .get("http://localhost:8080/api/get-oficces")
        .then((response) => {
          console.log(response.data);
          this.oficios = response.data;
          console.log(this.oficios);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    carga() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-all-images/" + this.idUser
        )
        .then((response) => {
          this.imagenes = response.data;
          this.loadedImages = this.imagenes.length;
          console.log(this.imagenes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAds: function () {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-ads-byid/" + this.idUser,
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.nombreNegocio = response.data.nombreNegocio;
          this.descripcionPequeña = response.data.descripcionPequeña;
          this.descripcionCompleta = response.data.descripcionCompleta;
          this.codigoPostal = response.data.codigoPostal;
          this.oficio = response.data.oficio;
          this.telefonoNegocio = response.data.telefonoNegocio;
          this.correoNegocio = response.data.correoNegocio;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    elimina: function (imagen) {
      this.loader = "loader";
      let tarjeta = document.querySelectorAll(".elemento");
      console.log("La imagen se ha eliminado correctamente");
      // Eliminar la imagen de la matriz de imágenes
      const index = this.imagenes.indexOf(imagen);
      //this.imagenes.splice(index,1);
      console.log(index);
      tarjeta[index].textContent = "";
      console.log(imagen.id);
      console.log("estoy llegando");
      const actualiza = this;
      const options = {
        method: "DELETE",
        url: `https://upload.qbits.mx/api/up/delete-media/${imagen.id}`,
        headers: {
          idMedia: imagen.id,
          IdUser: store.state.userData.idUser,
          jwt: store.state.userData.jwt,
        },
      };
      console.log("estoy llegando");
      axios
        .request(options)
        .then(function (response) {
          actualiza.loader = "none";
          console.log(response.data);
          actualiza.delete = response.data;
          location.reload();
        })
        .catch(function (error) {
          actualiza.loader = "none";
          console.error(error);
        });
    },
    une(Nombreimg) {
      return `https://media.visitanos.net/image${Nombreimg}`;
    },
    sendAds: function () {
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/update-ads",
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json",
          idUser: store.state.userData.idUser,
          jwt: store.state.userData.jwt,
        },
        data: {
          codigoPostal: this.codigoPostal,
          correoNegocio: this.correoNegocio,
          descripcionCompleta: this.descripcionCompleta,
          descripcionPequeña: this.descripcionPequeña,
          id: this.idUser,
          nombreNegocio: this.nombreNegocio,
          oficio: this.oficio,
          telefonoNegocio: this.telefonoNegocio,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<style>
img {
  width: 125px;
  height: 125px;
}
</style>
