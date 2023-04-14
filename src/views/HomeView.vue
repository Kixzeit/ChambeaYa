
import MenuSidebarComponent from '@/components/MenuSidebarComponent.vue';

<template>
  <div>
      <MenuSidebarComponent/>
      <div class="img">
        <img src="../assets/fondo.jpeg" alt="">
      </div>
  </div>
</template>

<script>
import MenuSidebarComponent from '@/components/MenuSidebarComponent.vue';

export default {
  components: {
    MenuSidebarComponent
  }
}
</script>

<style scoped>
img{
  width:100%;
  height:100%;

}

</style>