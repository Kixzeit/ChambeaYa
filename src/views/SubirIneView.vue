<template>
  <div>
    <NavComponent />
    <div class="bodi ">
      <!-- div de imagenes -->
      <a class="btn btn-primary p-2 my-2" href="/ui/upload/ine">Subir archivos</a>
      <div class="d-flex gap-3 flex-wrap m-5 justify-content-around divi">
      <div v-for="imagen in imagenes" v-bind:key="imagen.id" id="contenedor">
        <div class="elemento position-relative ">
          <img
            :src="une(imagen.fullHttpUploadUrl)"
            alt=""
            class="rounded img"
          />
            <i
              class="fa-solid fa-circle-xmark fa-bounce fa-2xl  position-absolute top-0 end-0 border border-light"
              style="color: #ec091f"
              @click="elimina(imagen)"
            ></i>
        </div>
      </div>
    </div>
      <FooterComponent/>
    </div>
  </div>
</template>

<!-- <div class="d-flex justify-content-center align-items-center " v-for="imagen in imagenes" v-bind:key="imagen.id">
          <div class="imagenes">
            <img :src="une(imagen.fullHttpUploadUrl)" alt=""/><br>
            <a href="/ui/upload/ine" class="btn btn-primary">chosee file</a>
          </div>
      </div> -->

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import axios from "axios";
import store from "@/store";

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      imagenes: [],
    };
  },
  mounted() {
    this.carga();
  },
  methods: {
    carga() {
      axios
        .get("https://upload.qbits.mx/api/up/get-user-identification-images/49")
        .then((response) => {
          this.imagenes = response.data;
          console.log(this.imagenes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    elimina: function (imagen) {
      this.loader = 'loader'
      let tarjeta = document.querySelectorAll(".elemento")
        console.log('La imagen se ha eliminado correctamente');
        // Eliminar la imagen de la matriz de imágenes
      const index = this.imagenes.indexOf(imagen);
      //this.imagenes.splice(index,1);
      console.log( index )
      tarjeta[index].textContent = "";
      console.log(imagen.id)
      console.log("estoy llegando")
      const options = {
  method: 'DELETE',
  url: `https://upload.qbits.mx/api/up/delete-media/${imagen.id}`,
  headers: {
    idMedia :imagen.id,
    IdUser: store.state.userData.idUser,
    jwt: store.state.userData.jwt,
        }
      };
      console.log("estoy llegando")
  axios.request(options).then(function (response) {
    this.loader = 'none'
    console.log(response.data);
    this.delete = response.data;
    location.reload()
  }).catch(function (error) {
    this.loader = 'none'
  console.error(error);
});
    },
    une(Nombreimg) {
      return `https://media.visitanos.net/image${Nombreimg}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bodi {
  margin-left: 56px;
}
.p {
  outline: red solid 2px;
}

div > img {
  border: 3px solid black;
  border-radius: 10px;
}

img {
  width: 300px;
  height: 150px;
}

.divi{
  padding-bottom:300px;
}

</style>
