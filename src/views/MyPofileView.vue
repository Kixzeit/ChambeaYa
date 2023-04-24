<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-5 row mx-3">
      <div class="card card-body col-lg-6 m-auto">
        <h2 class="text-primary">Mi perfil</h2>
        <div class="">
          <img
            :src="une(imagen.fullHttpUploadUrl)"
            class="image-fluid"
            alt="..."
          />
        </div>
        <div class="card-body col-sm-12">
          <h4 class="card-text">
            Nombre: {{ perfil.nombre }}
          </h4>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
          <p class="card-text"></p>
        </div>
      </div>
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
      imagen: {},
      perfil:{},
    };
  },
  mounted() {
    this.carga();
    this.getProfileData();
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
          this.loadedImages = this.imagen.length;
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
        params: { id: this.idUser},
      };

      axios
        .request(options)
        .then((response)=> {
          console.log(response.data);
          this.perfil=response.data;
        })
        .catch(function (error) {
          console.error(error);
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
