<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 row mx-2 d-flex">
      <section class="gradient-custom-2 col-sm-12">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-sm-12 col-lg-10">
              <div class="card">
                <div
                  class="rounded-top text-white d-flex flex-row"
                  style="background-color: #000; height: 200px"
                >
                  <div
                    class="ms-4 mt-5 d-flex flex-column"
                    style="width: 150px"
                  >
                    <img
                      :src="une(imagen.fullHttpUploadUrl)"
                      alt="Generic placeholder image"
                      class="img-fluid img-thumbnail mt-4 mb-2"
                      style="width: 150px; z-index: 1"
                    />
                    <button
                    hre
                      type="button"
                      class="btn btn-dark btn-outline-white"
                      data-mdb-ripple-color="dark"
                      style="z-index: 1"
                    >
                      <a href="/ui/datos">Edit profile</a>
                    </button>
                  </div>
                  <div class="ms-3" style="margin-top: 130px">
                    <h5>
                      {{ perfil.nombre }} {{ perfil.apPaterno }}
                      {{ perfil.apMaterno }}
                    </h5>
                    <p>{{ nick }}</p>
                  </div>
                </div>
                <div class="p-4 text-black" style="background-color: #f8f9fa">
                  <div class="mt-4">
                    {{ email }}
                    <br />
                    {{ perfil.fechaNacimiento }}
                  </div>

                  <div class="d-flex justify-content-end text-center py-1">
                    <div>
                      <p class="small text-muted mb-0">Fotos</p>
                      <p class="mb-1 h5">{{ loadedImages }}</p>
                    </div>
                    <div class="px-3">
                      <p class="small text-muted mb-0">Documentos</p>
                      <p class="mb-1 h5">{{ loadedInes }}</p>
                    </div>
                    <div>
                      <p class="small text-muted mb-0">A pagar</p>
                      <p class="mb-1 h5">$320</p>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4 text-black">
                  <div class="mb-5">
                    <p class="lead fw-normal mb-1 fw-bold">Sobre mi</p>
                    <div class="p-4" style="background-color: #f8f9fa">
                      <p class="font-italic mb-1">
                        {{ perfil.estado }} {{ perfil.municipio }}
                        {{ perfil.colonia }}
                      </p>
                      <p class="font-italic mb-0">{{ perfil.telefono }}</p>
                      <p class="font-italic mb-0">{{ perfil.codigoPostal }}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-4">
                  </div>
                  <div class="row g-2">
                    <h2>Documentos: Oficiales</h2>
                    <div class="d-flex justify-content-center gap-4 mb-4" >
                      <img
                      v-for="ine in ines" v-bind:key="ine.id"
                        :src="une(ine.fullHttpUploadUrl)"
                        alt="image 1"
                        class="rounded-3 img-fluid w-25"
                      />
                    </div>
                    <h2 class="mb-4">Mis Imagenes:</h2>
                    <div class="d-flex flex-wrap justify-content-evenly mb-2 gap-5" >
                      <img
                      v-for="img in images" v-bind:key="img.id"
                        :src="une(img.fullHttpUploadUrl)"
                        alt="image 1"
                        class=" rounded-3 img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterComponent />
  </div>
</template>

<!-- <img :src="une(imagen.fullHttpUploadUrl)" class="img-fluid rounded-start 75" alt="..."> -->
<!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
<!-- <img src="https://picsum.photos/200/200" class="img-fluid rounded-start" alt="..."> -->
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
      email: store.state.userData.email,
      nick: store.state.userData.nick,
      loadedImages: 0,
      loadedInes: 0,
      imagen: {},
      images: [],
      ines:[],
      perfil: {},
    };
  },
  mounted() {
    this.carga();
    this.getProfileData();
    this.getAdsImg();
    this.getInes();
  },
  methods: {
    carga() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-pricipal-image/" +
            this.idUser
        )
        .then((response) => {
          console.log(response.data);
          this.imagen = response.data;
          
          console.log(this.imagen);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    une(Nombreimg) {
      return `https://media.visitanos.net/image${Nombreimg}`;
    },
    getProfileData() {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-persons-byid",
        params: { id: this.idUser },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.perfil = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getAdsImg() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-all-images/" + this.idUser
        )
        .then((response) => {
          this.images = response.data;
          this.loadedImages = this.images.length;
          console.log(this.images);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getInes() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-identification-images/" +
            this.idUser
        )
        .then((response) => {
          this.ines = response.data;
          this.loadedInes = this.ines.length;
          console.log(this.imagenes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
