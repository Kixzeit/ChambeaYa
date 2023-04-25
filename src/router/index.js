import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import axios from "axios";

import PageNotFoundView from "@/views/PageNotFoundView";
import HomeView from "@/views/HomeView";
import EditImagesView from "@/views/EditImagesView";
import SubirIneView from "@/views/SubirIneView";
import FormasDePagoView from "@/views/FormasDePagoView";
import DatosGeneralesView from "@/views/DatosGeneralesView";
import AnuncioView from "@/views/AnuncioView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import RegisterConfirmView from "@/views/RegisterConfirmView";
import ForgotPassView from "@/views/ForgotPassView"
import ForgotConfirmView from "@/views/ForgotConfirmView";
import ForbiddenView from "@/views/ForbiddenView";
import UploadImageView from "@/views/UploadImageView"
import UploadVideoView from "@/views/UploadVideoView";
import UploadIneView from "@/views/UploadIneView";
import UploadPrincipalView from "@/views/UploadPrincipalView"
import MenuSidebarView from "@/views/MenuSidebarView";
import CrearTarjetaView from "@/views/CrearTarjetaView"
import FacturacionView from "@/views/FacturacionView"
import ResultadosView from "@/views/ResultadosView"
import MyProfileView from "@/views/MyProfileView";
import BusquedaView from "@/views/BusquedaView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ui/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/ui/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/ui/rc",
    name: "registerConfirm",
    component: RegisterConfirmView,
  },
  {
    path: "/ui/forgot",
    name: "forgot",
    component: ForgotPassView,
  },
  {
    path: "/ui/forgot-confirm",
    name: "forgot-confirm",
    component: ForgotConfirmView,
  },
  {
    path: "/ui/edit",
    name: "edit",
    component: EditImagesView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/ine",
    name: "ine",
    component: SubirIneView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/pago",
    name: "pago",
    component: FormasDePagoView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/anuncio",
    name: "Anuncio",
    component: AnuncioView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/datos",
    name: "datos",
    component: DatosGeneralesView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/forbiden",
    name: "forbiden",
    component: ForbiddenView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/upload",
    name: "upload",
    component: UploadImageView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/upload-video",
    name: "upload-video",
    component: UploadVideoView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/upload/ine",
    name: "upload-ine",
    component: UploadIneView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/upload/Principal",
    name: "upload-Princiapl",
    component: UploadPrincipalView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/menu",
    name: "menu",
    component: MenuSidebarView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/makecard",
    name: "makecard",
    component: CrearTarjetaView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/factura",
    name: "factura",
    component: FacturacionView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/resultados",
    name: "resultados",
    component: ResultadosView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/miperfil",
    name: "miperfil",
    component: MyProfileView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/buscar",
    name: "buscar",
    component: BusquedaView,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

function checaJwt() {
  //  var jwt = store.getters.getjwt;
  var jwt = store.state.userData.jwt;
  if (jwt && jwt !== undefined && jwt.length > 0) {
    const jwtPayload = parseJwt(jwt);
    //jwtPayload.exp=1625505833-28*60;
    let now = new Date();
    let limite = new Date(jwtPayload.creation);
    limite.setMinutes(limite.getMinutes() + 30);
    if (now > limite) {
      store.commit("setUserData", {
        userData: {
          idUser: 0,
          nick: "cyz",
          email: "",
          role: "",
          lastSuccesfullAccess: "",
          jwt: "", //  jwt='' => signed: false,
          usuarioDetalle: null,
        },
      });
      store.commit("setDestination", "/");
    } else {
      //const timeToExpire =  jwtPayload.exp - (Date.now()/1000);
      //console.log('Tiempo para que expire:' + timeToExpire);
    }
  }
}

router.beforeEach((to, from, next) => {
  axios.defaults.headers.common = { "X-CSRFToken": store.state.userData.jwt };
  axios.defaults.headers.common = { jwt: store.state.userData.jwt };
  checaJwt();
  //TODO: VALIDAR  EL JWT porque no tiene el valor de expire
  if (to.matched.some((record) => record.meta.allowedRoles)) {
    // *** El recurso SI requiere autenticación ya que pide ciertos roles
    // NO estás autenticado actualmente:
    if (
      store.state.userData.jwt === "" ||
      store.state.userData.jwt == undefined
    ) {
      store.commit("setDestination", to.fullPath);
      router.push("/");
      return;
    }
    // SI estoy autenticado actualmente, asi que solo voy a checar si mi rol es el adecuado:
    if (
      to.matched.some(
        (ok) => !ok.meta.allowedRoles.includes(store.state.userData.role)
      )
    ) {
      router.push("/ui/forbidden"); // no tengo el rol asociado a esa interfaz
      return;
    }
  }
  next(); // *** El recurso NO requiere autenticación
});

export default router;
