<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3 row vidrio">
      <div class="d-flex flex-wrap gap-2">
        <AnuncioComponent class="jover"/>
        <AnuncioComponent class="jover"/>
        <AnuncioComponent class="jover"/>
        <AnuncioComponent class="jover"/>
        <AnuncioComponent class="jover"/>
        <AnuncioComponent class="jover"/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";
import AnuncioComponent from "@/components/AnuncioComponent.vue";
import store from "@/store";

export default {
  components: {
    SideBarKixComponent,
    AnuncioComponent,
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

.jover:hover{
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}

</style>
