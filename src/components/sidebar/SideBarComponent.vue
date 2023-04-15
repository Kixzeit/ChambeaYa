<template>
  <div
    class="sidebar d-flex flex-column flex-shrink-0"
    @mouseenter="abre"
    @mouseleave="cierra"
    :style="{ width: sidebarWidth }"
    
  >
    <div class="m-auto sidebar2">
      <div v-if="estado == 0">
        <SidebarLinks to="/ui/login" icon="fa-sharp fa-solid fa-right-to-bracket fa-xl" class="mb-5"
          ><span class="mx-3">Login</span></SidebarLinks
        >
      </div>
      <!-- 
        <i class="fa-solid fa-house fa-2xl"></i>
      
      <i class="fa-solid fa-address-card fa-xl"></i>
      -->
      <div v-else @click="CloseSesion">
        <SidebarLinks to="" icon="fa-sharp fa-solid fa-right-to-bracket fa-xl" class="mb-5"><span class="mx-3">Logout</span></SidebarLinks>
      </div>

      <SidebarLinks to="/" icon="fa-solid fa-house fa-xl"><span class="mx-3">Home</span></SidebarLinks>

      <SidebarLinks to="/ui/datos" icon="fa-solid fa-address-card fa-xl"><span class="mx-3">Datos</span></SidebarLinks>

      <SidebarLinks to="/ui/ine" icon="bi bi-shop-window"
        >Mi tienda</SidebarLinks
      >
      <SidebarLinks to="/ui/anuncio" icon="bi bi-coin"
        >Mercado pago</SidebarLinks
      >
      <SidebarLinks to="#" icon="bi bi-music-note-list">Música</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-card-list">Cuentas</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-person-circle">Perfil</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-gear">Configuración</SidebarLinks>
    </div>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth, abre, cierra } from "./state";
import SidebarLinks from "./SidebarLinks.vue";
import store from "@/store";

export default {
  props: {},
  components: { SidebarLinks },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, abre, cierra };
  },
  data() {
    return {
      sidebarWidth2: "200px",
      estado: store.state.userData.idUser,
    };
  },
  methods: {
    CloseSesion: function () {
      // store.commit("setUserData", "")
      // console.log(store.state.userData)
    },
    collapsed2: function () {
      return collapsed.value
        ? (this.sidebarWidth2 = "55px")
        : this.sidebarWidth2;
    },
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: rgba(0, 0, 0, 0.5);
  --sidebar-item-hover: rgba(30, 144, 255, 0.4);
  --sidebar-item-active: rgba(2, 5, 22, 0.4);
}
</style>

<style scoped>
.sidebar {
  color: rgb(255, 255, 255);
  /* background-color: var(--sidebar-bg-color); */
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  border: 1px solid rgba(0, 0, 0, 0.25);

  float: left;
  z-index: 0;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100%;
  min-height: 600px;
  position: fixed;

  transition: 0.3s;

  /*display: flex;
  flex-direction: column;*/
  align-items: center;
  margin: auto;
}

.sidebar2 {
  position: fixed;
  top: 5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  left: 0.5em;
  padding: 0.75em;

  color: rgb(255, 255, 255);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
