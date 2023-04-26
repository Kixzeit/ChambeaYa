<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 row mx-2 d-flex">
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
