<template>
  <!-- Carousel wrapper -->
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/300/300" class="d-block  alto" alt="..." style="height: 100%; width: 100%;">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/299/300" class="d-block  alto" alt="..." style="height: 100%; width: 100%;">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/298/300" class="d-block  alto" alt="..." style="height: 100%; width: 100%;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <!-- Carousel wrapper -->
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  components: {
  },
  props: ["arregloDeImagenes"],
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


