<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-5 mx-3">
      <div class="rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-sm-12 col-md-3 border-right">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
              <div v-if="loadedImages < maxImagesAllowed" class="">
                <a href="/ui/upload/principal" class="p-1 mb-5">
                  <div>
                    <!-- <img src="../assets/user.png" alt="" /> -->
                    <img
                      class="rounded-circle mt-5"
                      width="150px"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                    <h6 class="text-danger">Selecciona una imagen de perfil</h6>
                  </div>
                </a>
              </div>
              <div v-else>
                <div
                  class="d-flex gap-3 flex-wrap m-5 justify-content-around divi"
                >
                  <div id="contenedor">
                    <div class="elemento position-relative">
                      <img
                        :src="une(imagen.fullHttpUploadUrl)"
                        alt=""
                        class="rounded-circle img"
                      />
                      <i
                        class="fa-solid fa-circle-xmark fa-bounce fa-2xl position-absolute top-0 end-0 border border-light"
                        style="color: #ec091f"
                        @click="elimina(imagen)"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <span class="font-weight-bold">{{ nick }}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <form action="" v-on:submit.prevent="sendData">
                <h4 class="text-center">Mis Datos</h4>
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                ></div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      v-model="nombre"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Apellido Paterno</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido Paterno"
                      v-model="apPaterno"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Apellido Materno</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido Materno"
                      v-model="apMaterno"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Telefono Personal</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="012 345 67 89"
                      v-model="telefono"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="">Fecha de nacimiento</label
                    ><input
                      type="date"
                      class="form-control"
                      placeholder="15 02 1999"
                      v-model="fechaNacimiento"
                    />
                    <hr class="my-5" />
                    <h5 class="text-dark mt-4">Busqueda por Codigo postal</h5>
                    <form
                      class="row g-3 d-flex justify-content-center px-4"
                      v-on:submit.prevent="getColonies"
                    >
                      <div class="d-flex gap-3">
                        <input
                        
                          type="text"
                          class="form-control sm-col-12"
                          id="inputsearch"
                          placeholder="86987"
                          v-model="codigo.codigo"
                        />
                        <button type="submit" class="btn btn-primary mx-1">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="col-md-11 m-auto">
                    <label class="">Colonia</label>
                    <select
                    required
                      @click="sayHola"
                      class="form-select"
                      aria-label="Default select example"
                      v-model="colonia"
                    >
                      <option
                      
                        v-for="colonia in colonias"
                        v-bind:key="colonia.id"
                        :value="colonia.nombre"
                      >
                        {{ colonia.nombre }}
                      </option>
                    </select>
                  </div>
                  <div class="d-flex row m-auto">
                    <div class="col-md-12 col-lg-4">
                      <label class="">Municipio</label
                      ><input
                        readonly
                        type="text"
                        class="form-control"
                        placeholder="Municipio"
                        v-model="municipio"
                      />
                    </div>

                    <div class="col-md-12 col-lg-4 mt-2">
                      <label class="labels">Estado</label
                      ><input
                        type="text"
                        class="form-control"
                        placeholder="Estado"
                        v-model="estado"
                      />
                    </div>

                    <div class="col-md-12 col-lg-4">
                      <label class="">Codigo Postal</label
                      ><input
                        type="text"
                        class="form-control"
                        placeholder="Estado"
                        v-model="codigoPostal"
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <a
                    class="btn btn-primary profile-button"
                    href="/ui/miperfil"
                    @click="sendData"
                  >
                    <button type="submit" class="btn btn-primary">Guardar</button>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5"></div>
          </div>
        </div>
      </div>
    </div>
    <MessageComponent
      ref="message01"
      alertType="3"
      duration="4000"
      :text="errorText"
      iconType="1"
      style="max-width: 600px"
    />
    <FooterComponent />
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import axios from "axios";
import store from "@/store";

export default {
  components: {
    SideBarKixComponent,
    FooterComponent,
  },
  data() {
    return {
      imagen: {},
      idUser: store.state.userData.idUser,
      nick: store.state.userData.nick,

      maxImagesAllowed: 1,
      loadedImages: 0,
      nombre: "",
      apMaterno: "",
      apPaterno: "",
      codigoPostal: "",
      fechaNacimiento: "",
      id: "",
      telefono: "",
      codigo: {},
      colonias: [],
      // vacios
      colonia: "",
      municipio: "",
      estado: "",
      //para llenar
      obtenMunicipio: "",
    };
  },
  mounted() {
    this.carga();
    this.getUserData();
  },
  methods: {
    carga() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-pricipal-image/" +
            this.idUser
        )
        .then((response) => {
          this.imagen = response.data;
          this.loadedImages = this.imagen.length;
        })
        .catch((error) => {
          console.log("la imagen de perfil no cargo" + error);
        });
    },
    getUserData() {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-persons-byid",
        params: { id: this.idUser },
      };

      axios
        .request(options)
        .then((response) => {
          this.nombre = response.data.nombre;
          this.apPaterno = response.data.apPaterno;
          this.apMaterno = response.data.apMaterno;
          this.codigoPostal = response.data.codigoPostal;
          this.colonia = response.data.colonia;
          this.fechaNacimiento = response.data.fechaNacimiento;
          this.id = this.idUser;
          this.estado = response.data.estado;
          this.municipio = response.data.municipio;
          this.telefono = response.data.telefono;
        })
        .catch(function (error) {
          console.error("la info del usuario no pudo ser cargada" + error);
        });
    },
    elimina: function (imagen) {
      this.loader = "loader";
      let tarjeta = document.querySelector(".elemento");
      // Eliminar la imagen de la matriz de imágenes
      //this.imagenes.splice(index,1);
      tarjeta.textContent = "";
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
      axios
        .request(options)
        .then(function (response) {
          actualiza.loader = "none";
          actualiza.delete = response.data;
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
    sendData: function () {
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/update-persons",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json;charset=utf-8",
          jwt: store.state.userData.jwt,
        },
        data: {
          apMaterno: this.apMaterno,
          apPaterno: this.apPaterno,
          codigoPostal: this.codigoPostal,
          colonia: this.colonia,
          estado: this.estado,
          fechaNacimiento: this.fechaNacimiento,
          id: this.idUser,
          municipio: this.municipio,
          nombre: this.nombre,
          telefono: this.telefono,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          this.$refs.message01.presenta();
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getColonies() {
      let codigoEnviar = { codigo: this.codigo.codigo };
      let codEnv = codigoEnviar.codigo;
      this.codigoPostal = codigoEnviar.codigo;
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-all-colonies/" + codEnv,
      };

      axios
        .request(options)
        .then((response) => {
          this.colonias = response.data;
          console.log("traje las colonias");
          console.log(this.colonias);
          this.obtenMunicipio = response.data[0].municipio;
          console.log(this.obtenMunicipio);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    sayHola: function () {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/obten-municipios",
        params: { id: this.obtenMunicipio },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.municipio = response.data[0].nombre;
          console.log(this.municipio);
          this.getEstado();
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getEstado: function () {

    },
  },
};
</script>

<style>
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
</style>
