<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3 row">
      
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import store from "@/store";

export default {
  components: {
    SideBarKixComponent,
    FooterComponent
  },
  data: function () {
    return {
      idUser: store.state.userData.idUser,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
