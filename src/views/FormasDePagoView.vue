<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 row mx-2 d-flex">
      <section>
  <div class="container py-5">
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-center pb-5">
          <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
            <div class="py-4 d-flex flex-row">
              <h5><span class="far fa-check-square pe-2"></span><b>Tarjetas</b> |</h5>
              <span class="ps-2">Pago</span>
            </div>
          
      
            <hr />
            <div class="pt-2">
              <div class="d-flex pb-2">
                <div>
                  <p>
                    <b>Mis tarjetas <span class="text-success"></span></b>
                  </p>
                </div>
                <div class="ms-auto">
                  <p class="text-primary">
                    <a href="/ui/makecard"><i class="fas fa-plus-circle text-primary pe-1"></i>Administrar Tarjetas</a>
                  </p>
                </div>
              </div>
              <form class="pb-3">
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                      value="" aria-label="..." checked />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debito
                      
                    </p>
                    <div class="ms-auto">************3456</div>
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
                      value="" aria-label="..." />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                    </p>
                    <div class="ms-auto">************1038</div>
                  </div>
                </div>
              </form>
              <input type="button" value="Pagar Ahora" class="btn btn-primary btn-block btn-lg" />
            </div>
          </div>

          <div class="col-md-5 col-xl-4 offset-xl-1">
            <div class="py-4 d-flex justify-content-end">
              <h6><a href="/ui/">Cancelar y Regresar</a></h6>
            </div>
            <div class="rounded d-flex flex-column p-2" style="background-color: #f8f9fa;">
              <div class="p-2 me-3">
                <h4>Total a Pagar</h4>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Precio por click</div>
                <div class="ms-auto">$20.0</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Total de clicks</div>
                <div class="ms-auto">5</div>
              </div>
              <div class="p-2 d-flex">
                <div class="col-8">Iva ( 16% )</div>
                <div class="ms-auto">+ $0.00</div>
              </div>
              <div class="p-2 d-flex pt-3">
                <div class="col-8"><b>Total</b></div>
                <div class="ms-auto"><b class="text-success">$120.00</b></div>
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
