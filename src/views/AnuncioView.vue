<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <div class="card card-body">
        <h2>
          <i class="fa-solid fa-rectangle-ad" style="color: #1d4cf2"></i>Crea tu
          Anuncio!
        </h2>
        <form action=""  v-on:submit.prevent="sendAds">
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
                v-model="anuncio.nombreNegocio"
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
                v-model="anuncio.descripcionPequeña"
              />
            </div>
            <div class="col-12-sm mb-4 col-6-lg">
              <label for="formGroupExampleInput" class="form-label"
                >descripcion Completa:</label
              >
              <div class="form-floating">
                <textarea
                  class="form-control mt-4"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="anuncio.descripcionCompleta"
                ></textarea>
                <label for="floatingTextarea2">Descripcion completa:</label>
              </div>
            </div>
            <!-- 1er -->
            <div class="col-sm-12 col-lg-6 mb-4">
              <label for="inputEmail4" class="form-label"
                >Codigo Postal
                <i class="fa-solid fa-map-pin" style="color: #1d43f2"></i
              ></label>
              <input type="email" class="form-control mb-3" id="inputEmail4" v-model="anuncio.correoNegocio" />
            </div>
            <div class="col-sm-12 col-lg-6">
              <label for="inputText" class="form-label"
                >Oficio <i class="fa-solid fa-hammer" style="color: #1d43f2"></i
              ></label>
              <select class="form-select" aria-label="Default select example" v-model="anuncio.oficio" >
                <option  v-for="oficio in oficios" 
                  v-bind:key="oficio.id">{{ oficio.nombre }}</option>
              </select>
            </div>
            <div class="row mt-4 mb-4 justify-content-around">
              <div class="col-sm-12 col-lg-2 mb-4">
                <a href="/ui/upload/" class="btn btn-primary"
                  >Insertar Imagen
                  <i class="fa-solid fa-file-image" style="color: #ffffff"></i
                ></a>
              </div>
              <div class="col-sm-12 col-lg-2">
                <button class="btn btn-primary">
                  Insertar Video
                  <i
                    class="fa-regular fa-file-video"
                    style="color: #ffffff"
                  ></i>
                </button>
              </div>
            </div>
            <h2 class="my-4">imagenes</h2>
            <div class="d-flex gap-3 flex-wrap justify-content-around divi">
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
            <div>
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
              <img src="https://picsum.photos/125/125" alt="" class="m-1" />
            </div>
            <h4 class="my-5">
              Datos del negocio
              <i class="fa-solid fa-house" style="color: #1d43f2"></i>
            </h4>
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
                v-model="anuncio.telefonoNegocio"
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
                v-model="anuncio.correoNegocio"
              />
            </div>
            <div class="row d-flex justify-content-around mt-4 mb-4">
              <div class="col-sm-12 col-lg-3 mb-4">
                <a href="http://localhost:8080/ui/ine" class="btn btn-primary"><span
                    ><i
                      class="fa-solid fa-address-card mx-2"
                      style="color: #ffffff"
                    ></i
                  ></span>
                  Credencial INE</a
                >
              </div>
              <div class="col-sm-12 col-lg-3 mb-4">
                <a href="http://localhost:8080/ui/pago" class="btn btn-primary"
                  ><span
                    ><i
                      class="fa-solid fa-credit-card mx-2"
                      style="color: #ffffff"
                    ></i
                  ></span>
                  Agregar forma de pago</a
                >
              </div>
            </div>
            <div class="col-sm-12">
              <button type="submit" class="btn btn-primary my-4">
                Enviar Datos y Crear Anuncio
              </button>
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
      maxImagesAllowed: 1,
      loadedImages: 0,
      anuncio:{}
    };
  },
  mounted() {
    this.carga();
    this.getOficces();
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
          this.loader = "none";
          console.log(response.data);
          this.delete = response.data;
          location.reload();
        })
        .catch(function (error) {
          this.loader = "none";
          console.error(error);
        });
    },
    une(Nombreimg) {
      return `https://media.visitanos.net/image${Nombreimg}`;
    },
    sendAds: function () {
      console.log(this.anuncio);
      let anuncioEnviar = {
        id: store.state.userData.idUser,
        nombreNegocio: this.anuncio.nombreNegocio,
        descripcionPequeña: this.anuncio.descripcionPequeña,
        descripcionCompleta:this.anuncio.descripcionCompleta,
        codigoPostal:this.anuncio.codigoPostal,
        oficio:this.anuncio.oficio,
        telefonoNegocio: this.anuncio.telefonoNegocio,
        correoNegocio: this.correoNegocio,
    
      };
      console.log(anuncioEnviar);
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/update-persons",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json;charset=utf-8",
        },
        data: {
          id: store.state.userData.idUser,
        nombreNegocio:anuncioEnviar.nombreNegocio,
        descripcionPequeña:anuncioEnviar.descripcionPequeña,
        descripcionCompleta:anuncioEnviar.descripcionCompleta,
        codigoPostal:anuncioEnviar.codigoPostal,
        oficio:anuncioEnviar.oficio,
        telefonoNegocio:anuncioEnviar.telefonoNegocio,
        correoNegocio:anuncioEnviar.correoNegocio,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          console.log("datos enviados correctamente")
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
