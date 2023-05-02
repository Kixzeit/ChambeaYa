<template>
  <div>
    <div class="container-fluid p-4 row mx-2">

      <div class="col-sm-12 col-lg-9 mt-5 mb-5">
        <div class="card">
          <div class="row g-2">
            <div class="col-sm-12 col-md-4">
              <div class="p-3 text-center border-end">
                <img
                  class="border border-3 border-success rounded-circle"
                  width="120"
                  :src="une(imagen.fullHttpUploadUrl)"
                />
                <h4 class="mt-2">{{ perfil.nombre }} {{ perfil.apPaterno }}
                      {{ perfil.apMaterno }}</h4>
                <span class="d-flex justify-content-center align-items-center"
                  ><small class="margin-right">Ubicacion</small
                  ><i class="ml-1 fa fa-info-circle text-success mx-2"></i
                ></span>
                <span class="address-content fw-bold">{{ perfil.estado }} {{ perfil.municipio }}
                        {{ perfil.colonia }}</span>
                <div class="content-aboutme mt-3 p-3">
                  <h2>{{ ads.nombreNegocio }}</h2>
                  <span
                    >{{ ads.descripcionPequeña }}</span
                  >
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <div class="p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold text-success">{{ads.oficio}}</span>
                  <i class="fa-brands fa-facebook mb-3" style="color: #255ec1;">
                    <i class="fa-brands fa-instagram mx-1" style="color: #aa7e41;"></i>
                    <i class="fa-brands fa-twitter mx-1" style="color: #3276ec;"></i>
                    <i class="fa-brands fa-whatsapp mx-1" style="color: #2c872f;"></i>
                  </i>
                </div> 

                <div class="d-flex flex-wrap gap-2 mt-2 ms-4">
                  <div v-for="imagen in images" v-bind:key="imagen.id">
                    <img
                      class="rounded"
                      width="100%"
                      height="100%"
                      :src="une(imagen.fullHttpUploadUrl)"
                    />
                  </div>
                </div>

                <div class="portfolio-content mt-3">
                  <p class="fs-5">
                    {{ ads.descripcionCompleta }}
                  </p>
                  <h6><a href="/" class="btn btn-primary">guardar</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store

  from '@/store';
export default {
  data: function () {
    return {
      idUser: store.state.userData.idUser,
      email: store.state.userData.email,
      nick: store.state.userData.nick,
      loadedImages: 0,
      loadedInes: 0,
      imagen: {},
      images: [],
      perfil: {},
      ads:{},
    }
  },
  mounted() {
    this.carga();
    this.getProfileData();
    this.getAdsImg();
    this.getAdsData();
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
    getAdsData() {
      const options = {method: 'GET', url: `http://localhost:8080/api/get-ads-byid/${this.idUser}`};

axios.request(options).then((response)=> {
  console.log(response.data);
  this.ads=response.data;
}).catch(function (error) {
  console.error(error);
});
    }
  }
}

</script>

<style>
.address-content {
  font-size: 13px;
}

.card {
  height: 100%;
}

.content-aboutme span {
  font-size: 13px;
}

.portfolio-content p {
  font-size: 13px;
}

.badge {
  font-size: 11px;
  font-weight: 600;
}
</style>
