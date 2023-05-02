<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <section class="p-4 p-md-5" style="">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-lg-10 col-xl-5">
            <div class="card rounded-3">

              <div class="card-body p-4">
                <div class="text-center mb-4">
                  <h3>Configuracion de Tarjetas</h3>
                  <h6>Pagos</h6>
                </div>

                <p class="fw-bold mb-4 pb-2">Tarjetas Guardadas:</p>

                <div id="contenedor">
                  <div
                    class="d-flex flex-row align-items-center mb-4 pb-1 align-items-center elemento"
                    v-for="card in cards"
                    v-bind:key="card.id"
                  >
                    <div class="flex-fill mx-3">
                      <div class="form-outline">
                        <label class="form-label fw-bold" for="formControlLgXc"
                          >DETALLES</label
                        >
                        <div
                          class="rounded border border-primary d-flex flex-wrap justify-content-evenly py-3"
                        >
                          <span class="text-primary fw-bold">{{
                            card.nombre
                          }}</span>
                          <span class="text-success">{{ card.company }}</span
                          >{{ card.numero }}
                        </div>
                        <a
                          href="#!"
                          class="my-3 text-danger"
                          @click="elimina(card)"
                          >Eliminar Tarjeta</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <p class="fw-bold mb-4">Agregar Nueva Tarjeta:</p>

                <form>
                  <div class="row">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="formControlLgXsd"
                        >Nombre Completo</label
                      >
                      <input
                        type="text"
                        id="formControlLgXsd"
                        class="form-control form-control-lg"
                        v-model="nombre"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="formControlLgXtp"
                        >Tipo</label
                      >
                      <input
                        type="text"
                        id="formControlLgXsd"
                        class="form-control form-control-lg"
                        placeholder="debito"
                        v-model="tipo"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="form-outline">
                        <label class="form-label" for="formControlLgXM"
                          >Numero De Tarjeta</label
                        >
                        <input
                          type="text"
                          id="formControlLgXM"
                          class="form-control form-control-lg"
                          v-model="numero"
                        />
                      </div>
                    </div>
                    <div class="col-12 mb-5">
                      <div class="form-outline">
                        <label class="form-label" for="formControlLgXM"
                          >Compañia</label
                        >
                        <input
                          type="text"
                          id="companyasdf"
                          class="form-control"
                          placeholder="visa , masterCard ,americanExpress"
                          v-model="company"
                        />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="formControlLgExpk"
                          class="form-control form-control-lg"
                          placeholder="MM"
                          v-model="mes"
                        />
                        <label class="form-label" for="formControlLgExpk"
                          >Mes</label
                        >
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="formControlLgExpk"
                          class="form-control form-control-lg"
                          placeholder="YYYY"
                          v-model="anio"
                        />
                        <label class="form-label" for="formControlLgExpk"
                          >Año</label
                        >
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="form-outline">
                        <input
                          type="password"
                          id="formControlLgcvv"
                          class="form-control form-control-lg"
                          placeholder="CVV"
                          v-model="cvv"
                        />
                        <label class="form-label" for="formControlLgcvv"
                          >CVV</label
                        >
                      </div>
                    </div>
                  </div>
                  <a
                    @click="sendCard"
                    class="btn btn-success btn-lg btn-block"
                    href="/ui/pago"
                  >
                    Agregar Tarjeta
                  </a>
                </form>
                <a href="/ui/pago">
                  <button class="btn btn-danger btn-block mt-2">
                    Cancelar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";

export default {
  data() {
    return {
      
      tarjeta: {},
      cards: [],
      idUser: store.state.userData.idUser,
      nombre: "",
      numero: "",
      id: "",
      mes: "",
      anio: "",
      tipo: "",
      cvv: "",
      company: "",
    };
  },
  components: {
    SideBarKixComponent,
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
        .then((response) => {
          console.log(response.data);
          this.cards = response.data;
          console.log(this.cards);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    elimina: function (card) {
      this.loader = "loader";
      let tarjeta = document.querySelectorAll(".elemento");
      console.log("La imagen se ha eliminado correctamente");
      // Eliminar la imagen de la matriz de imágenes
      const index = this.cards.indexOf(card);
      //this.imagenes.splice(index,1);
      console.log(index);
      tarjeta[index].textContent = "";
      console.log(card.id);
      console.log("estoy llegando");

      const options = {
        method: "DELETE",
        url: "http://localhost:8080/api/delete-cards-byid",
        params: { id: card.id },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    sendCard: function () {
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/update-cards",
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json",
          jwt: store.state.userData.jwt,
        },
        data: {
          anio:this.anio,
          company:this.company,
          cvv:this.cvv,
          id: "",
          idUser: this.idUser,
          mes: this.mes,
          nombre:this.nombre,
          numero:this.numero,
          tipo:this.tipo,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
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
