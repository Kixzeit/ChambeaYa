<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <div class="card card-body">
        <h2>Sube tu Documento Oficial</h2>
        <div v-if="loadedImages < maxImagesAllowed" class="">
          <a class="btn btn-primary mb-4" href="/ui/upload/ine">Subir archivos</a>
        </div>

        <div v-else class="maximo">
          <h2 class="text-danger">El máximo de imágenes permitido ha sido alcanzado!</h2>
        </div>

          <div
            v-for="imagen in imagenes"
            v-bind:key="imagen.id"
            id="contenedor"
            class="d-flex flex-wrap justify-content-center ines bg-dark"
          >
            <div class="elemento">
                <div class="">
                  <img
                :src="une(imagen.fullHttpUploadUrl)"
                alt=""
                class="mt-5 rounded"
                style="width: 280px; height: 200px"
              />
                </div>
              
              <button class="btn btn-primary my-3"><i
                class="fa-solid fa-trash  fa-2xl my-4"
                style="color: #ec091f"
                @click="elimina(imagen)"
              ></i></button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";

export default {
  components: {
    SideBarKixComponent,
  },
  data() {
    return {
      imagenes: [],
      idUser: store.state.userData.idUser,
      maxImagesAllowed: 2,
      loadedImages: 0,
    };
  },
  mounted() {
    this.carga();
  },
  methods: {
    carga() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-identification-images/" +
            this.idUser
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
          actualiza.loadedImages = actualiza.imagenes.length;
          console.log(response.data);
          actualiza.delete = response.data;
          let maximo = document.querySelector("maximo");
          maximo.textContent = "";
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
  },
};
</script>

<style>

</style>