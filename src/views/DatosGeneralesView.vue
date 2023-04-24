<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-5 mx-3">
      <div class="card card-body">
        <h2>
          Datos Personales<i
            class="fa-solid fa-circle-question fs-3 mx-1"
            style="color: #1d43f2"
          ></i>
        </h2>
        <div v-if="loadedImages < maxImagesAllowed" class="">
          <a href="/ui/upload/principal" class="btn btn-secondary p-1 mb-5">
            <div>
              <img src="../assets/user.png" alt="" />
              <h6 class="text-warning">Selecciona una imagen de perfil</h6>
            </div>
          </a>
        </div>
        <div v-else>
          <div class="d-flex gap-3 flex-wrap m-5 justify-content-around divi">
            <div id="contenedor">
              <div class="elemento position-relative">
                <img
                  :src="une(imagen.fullHttpUploadUrl)"
                  alt=""
                  class="rounded img"
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

        <div class="card-body">
          <form class="row g-3" v-on:submit.prevent="sendData">
            <div class="col-sm-12 col-lg-4">
              <label for="nombre" class="form-label"
                >Nombre<i
                  class="fa-solid fa-pen mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="inputEmail4"
                placeholder="Nombre"
                v-model="persona.nombre"
              />
            </div>
            <div class="col-sm-12 col-lg-4">
              <label for="inputPassword4" class="form-label"
                >Apellido Paterno<i
                  class="fa-solid fa-pen mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Apellido Paterno"
                v-model="persona.apPaterno"
              />
            </div>
            <div class="col-sm-12 col-lg-4">
              <label for="inputPassword4" class="form-label"
                >Apellido Materno<i
                  class="fa-solid fa-pen mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                placeholder="Apellido Materno"
                id="inputPassword4"
                v-model="persona.apMaterno"
              />
            </div>
            <div class="col-sm-12 col-lg-6 mt-4">
              <label for="inputPassword4" class="form-label"
                >Telefono Personal<i
                  class="fa-solid fa-phone mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                placeholder="012-345-67-89"
                id="inputPassword4"
                v-model="persona.telefono"
              />
            </div>
            <div class="col-sm-12 col-lg-4">
              <label for="inputAddress2" class="form-label"
                >Fecha de nacimiento<i
                  class="fa-solid fa-calendar-days mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="date"
                class="form-control"
                id="inputAddress2"
                placeholder="12 enero 1987"
                v-model="persona.fechaNacimiento"
              />
            </div>
            <div class="col-sm-12 col-lg-4">
              <label for="inputCity" class="form-label"
                >Estado<i
                  class="fa-solid fa-map-pin mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                placeholder="Estado"
                id="inputCity"
                v-model="persona.estado"
              />
            </div>
            <div class="col-sm-12 col-lg-4">
              <label for="inputCity" class="form-label"
                >Municipio<i
                  class="fa-solid fa-map-location-dot mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                placeholder="Municipio"
                id="inputCity"
                v-model="persona.municipio"
              />
            </div>
            <div class="col-sm-12 col-lg-6">
              <label for="inputState" class="form-label"
                >Colonia<i
                  class="fa-solid fa-location-arrow mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <select
                id="inputState"
                class="form-select"
                v-model="persona.colonia"
              >
                <option selected>Elegir colonia</option>
              </select>
            </div>
            <div class="col-sm-12 col-lg-6">
              <label for="inputZip" class="form-label"
                >Codigo Postal<i
                  class="fa-solid fa-envelopes-bulk mx-2"
                  style="color: #1d43f2"
                ></i
              ></label>
              <input
                type="text"
                class="form-control"
                placeholder="Codigo Postal"
                id="inputZip"
                v-model="persona.codigoPostal"
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>














<div class="rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-sm-12 col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <div v-if="loadedImages < maxImagesAllowed" class="">
          <a href="/ui/upload/principal" class=" p-1 mb-5">
            <div>
              <!-- <img src="../assets/user.png" alt="" /> -->
              <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
              <h6 class="text-danger">Selecciona una imagen de perfil</h6>
            </div>
          </a>
        </div>
        <div v-else>
          <div class="d-flex gap-3 flex-wrap m-5 justify-content-around divi">
            <div id="contenedor">
              <div class="elemento position-relative">
                <img
                  :src="une(imagen.fullHttpUploadUrl)"
                  alt=""
                  class="rounded img"
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
              <span class="font-weight-bold">{{ nick }}</span><span class="text-black-50">{{ email }}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">

              <form action="">
                <h4 class="text-center">Mis Datos</h4>
                <div class="d-flex justify-content-between align-items-center mb-3">
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                      <label class="labels">Nombre</label>
                      <input type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6">
                      <label class="labels">Surname</label>
                      <input type="text" class="form-control" value="" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>

              </form>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div>
    </div>
</div>























    </div>
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
      email: store.state.userData.email,
      maxImagesAllowed: 1,
      loadedImages: 0,
      persona: {},
    };
  },
  mounted() {
    this.carga();
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
          console.log(this.imagen);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    elimina: function (imagen) {
      this.loader = "loader";
      let tarjeta = document.querySelector(".elemento");
      console.log("La imagen se ha eliminado correctamente");
      // Eliminar la imagen de la matriz de imágenes
      //this.imagenes.splice(index,1);
      tarjeta.textContent = "";
      console.log(imagen.id);
      console.log("estoy llegando");
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
      console.log("estoy llegando");
      axios
        .request(options)
        .then(function (response) {
          actualiza.loader = "none";
          console.log(response.data);
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
      console.log(this.persona);
      let datosEnviar = {
        id: store.state.userData.idUser,
        nombre: this.persona.nombre,
        apPaterno: this.persona.apPaterno,
        apMaterno: this.persona.apMaterno,
        telefono: this.persona.telefono,
        correo: this.persona.correo,
        fechaNacimiento: this.persona.fechaNacimiento,
        estado: this.persona.estado,
        municipio: this.persona.municipio,
        colonia: this.persona.colonia,
        codigoPostal: this.persona.codigoPostal,
      };
      console.log(datosEnviar);
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/update-persons",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json;charset=utf-8",
        },
        data: {
          apMaterno: datosEnviar.apMaterno,
          apPaterno: datosEnviar.apPaterno,
          codigoPostal: datosEnviar.codigoPostal,
          colonia: datosEnviar.colonia,
          correo: datosEnviar.correo,
          estado: datosEnviar.estado,
          fechaNacimiento: datosEnviar.fechaNacimiento,
          id: datosEnviar.id,
          municipio:datosEnviar.municipio,
          nombre: datosEnviar.nombre,
          telefono: datosEnviar.telefono,
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
