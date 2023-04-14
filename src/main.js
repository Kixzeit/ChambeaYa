import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MessageComponent from '@/components/MessageComponent'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import vueAwesomeSidebar from "vue-awesome-sidebar";
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";

const app = createApp(App);

app
  .component("MessageComponent", MessageComponent)
  .use(Toast)
  .use(store)
  .use(router)
  .use(vueAwesomeSidebar)
  .mount("#app");
