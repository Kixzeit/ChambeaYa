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
                    <h5>
                      <span class="far fa-check-square pe-2"></span
                      ><b>Tarjetas</b> |
                    </h5>
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

                          <a v-if="tarjetasActuales<cantidadTarjetas"
                          href="/ui/makecard"
                            ><i class="fas fa-plus-circle text-primary pe-1"></i
                            >Administrar Tarjetas</a>

                          <a v-else href="/ui/makecard" >
                            <i class="fas fa-plus-circle text-primary pe-1">
                            </i>Agregar Tarjeta</a>

                        </p>
                      </div>
                    </div>
                    <form class="pb-3">
                      <div class="d-flex flex-row pb-3" v-for="card in cards" v-bind:key="card.id">
                        <div class="d-flex align-items-center pe-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            :id="card.id"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </div>
                        <div
                          class="rounded border d-flex w-100 p-3 align-items-center"
                        >
                        <div>
                        </div>
                          <p class="mb-0">
                            {{card.company}} {{ card.tipo }}
                          </p>
                          <div class="ms-auto">{{ card.numero }}</div>
                        </div>
                      </div>
                    </form>
                    <button v-if="tarjetasActuales > cantidadTarjetas"
                      type="button"
                      value="Pagar Ahora"
                      class="btn btn-primary btn-block btn-lg"
                    >Pagar Ahora</button>
                    <div v-else>

                    </div>
                  </div>
                </div>

                <div class="col-md-5 col-xl-4 offset-xl-1">
                  <div class="py-4 d-flex justify-content-end">
                    <h6><a href="/">Cancelar y Regresar</a></h6>
                  </div>
                  <div
                    class="rounded d-flex flex-column p-2"
                    style="background-color: #f8f9fa"
                  >
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
                      <div class="ms-auto">
                        <b class="text-success">$120.00</b>
                      </div>
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
      cards: [],
      idUser: store.state.userData.idUser,
      email: store.state.userData.email,
      nick: store.state.userData.nick,
      cantidadTarjetas:0,
      tarjetasActuales:0,
    };
  },
  mounted() {
    this.carga();
  },
  methods: {
    carga() {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-allcards-byid",
        params: { id: this.idUser },
      };

      axios
        .request(options)
        .then((response)=> {
          console.log(response.data);
          this.cards = response.data
          this.tarjetasActuales = this.cards.length;
          console.log(this.cards)
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
  box-sizing: border-box;
}
</style>
