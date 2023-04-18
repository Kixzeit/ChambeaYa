<template>

        <div class="col-sm-12 col-lg-3 m-auto">
        <div class="card card-body">
            <h2 class="fw-bold">Nombre del Negocio</h2>
            <CarruselComponent2 />
            <div class="card-body">
              <h5 class="card-title fw-bold">Oficio-Don chuy</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-start">Ciudad de Mexico.<p class="card-text">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </p>
              </li>
            </ul>
            
            <div class="card-body">
              <div v-if="idUser > 0">
                <a href="#" class="card-link">Ver Datos De contacto</a>
              </div>
              <div v-else >
                <a href="/ui/login" class="btn btn-primary">Ver Datos De contacto</a>
              </div>
            </div>
          </div>
          
        </div>
      
</template>

<script>
import CarruselComponent2 from "@/components/CarruselComponent2.vue";
import store from "@/store";

export default {
  components: {

    CarruselComponent2,
  },
  data: function () {
    return {
      idUser: store.state.userData.idUser,
    };
  },
};
</script>
